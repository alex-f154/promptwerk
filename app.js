/* Funktioniert ohne Framework, Build-Schritt, Backend oder externe Dienste. */
(() => {
  'use strict';
  const prompts = Array.isArray(window.PROMPTS) ? window.PROMPTS : [];
  const $ = (selector) => document.querySelector(selector);
  const elements = {
    search: $('#search'), categories: $('#categories'), grid: $('#prompt-grid'),
    count: $('#result-count'), total: $('#total-count'), empty: $('#empty'),
    dialog: $('#prompt-dialog'), title: $('#dialog-title'), category: $('#dialog-category'),
    description: $('#dialog-description'), variablesWrap: $('#variables-wrap'),
    variables: $('#variables'), preview: $('#preview'), toast: $('#toast'),
  };
  let activeCategory = 'Alle';
  let current = null;
  let values = {};
  let toastTimeout;

  const categories = ['Alle', ...new Set(prompts.map((p) => p.category))];
  elements.total.textContent = `${prompts.length} VORLAGEN`;

  function element(tag, className, value) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  }

  function renderFilters() {
    elements.categories.replaceChildren();
    categories.forEach((category) => {
      const button = element('button', `filter${category === activeCategory ? ' active' : ''}`, category);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(category === activeCategory));
      button.addEventListener('click', () => {
        activeCategory = category;
        renderFilters();
        renderCards();
      });
      elements.categories.append(button);
    });
  }

  function renderCards() {
    const query = elements.search.value.toLocaleLowerCase('de').trim();
    const matching = prompts.filter((p) => (activeCategory === 'Alle' || p.category === activeCategory)
      && [p.title, p.category, p.description, p.prompt].join(' ').toLocaleLowerCase('de').includes(query));
    const cards = document.createDocumentFragment();
    matching.forEach((p) => {
      const card = element('button', 'prompt-card');
      card.type = 'button';
      card.append(element('span', 'card-category', p.category));
      card.append(element('span', 'card-title', p.title));
      card.append(element('span', 'card-desc', p.description));
      const bottom = element('span', 'card-bottom');
      bottom.append(element('span', '', 'Vorlage ansehen'));
      bottom.append(element('span', 'card-arrow', '↗'));
      card.append(bottom);
      card.addEventListener('click', () => openPrompt(p));
      cards.append(card);
    });
    elements.grid.replaceChildren(cards);
    elements.count.textContent = `${matching.length} von ${prompts.length} Prompts`;
    elements.empty.hidden = matching.length > 0;
  }

  const variablePattern = /\[([A-ZÄÖÜ0-9_]+)\]/g;
  function extractedVariables(text) {
    return [...new Set([...text.matchAll(variablePattern)].map((match) => match[1]))];
  }
  function personalizedText() {
    if (!current) return '';
    return current.prompt.replace(variablePattern, (match, key) => (values[key] || '').trim() || match);
  }
  function updatePreview() { elements.preview.textContent = personalizedText(); }

  function openPrompt(prompt, { changeHash = true } = {}) {
    current = prompt;
    values = {};
    elements.title.textContent = prompt.title;
    elements.category.textContent = prompt.category;
    elements.description.textContent = prompt.description;
    elements.variables.replaceChildren();
    const names = extractedVariables(prompt.prompt);
    elements.variablesWrap.hidden = names.length === 0;
    names.forEach((name) => {
      const field = element('div', 'variable-field');
      const label = element('label', '', name.replaceAll('_', ' ').toLowerCase());
      const input = element('textarea');
      input.rows = name === 'TEXT' || name === 'CODE' || name === 'NOTIZEN' || name === 'STICHPUNKTE' ? 3 : 1;
      input.placeholder = `Hier ${name.toLowerCase().replaceAll('_', ' ')} eintragen …`;
      input.id = `variable-${name}`;
      label.htmlFor = input.id;
      input.addEventListener('input', () => { values[name] = input.value; updatePreview(); });
      field.append(label, input);
      elements.variables.append(field);
    });
    updatePreview();
    if (changeHash) { try { history.replaceState(null, '', `#${encodeURIComponent(prompt.id)}`); } catch { /* Eingeschränkte lokale Browser-Umgebung */ } }
    if (!elements.dialog.open) elements.dialog.showModal();
  }
  function closePrompt() {
    elements.dialog.close();
    current = null;
    try { history.replaceState(null, '', window.location.pathname + window.location.search); } catch { /* Eingeschränkte lokale Browser-Umgebung */ }
  }

  async function copyText(value, message) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const temporary = element('textarea');
        temporary.value = value;
        temporary.style.position = 'fixed';
        temporary.style.left = '-9999px';
        document.body.append(temporary);
        temporary.select();
        const succeeded = document.execCommand('copy');
        temporary.remove();
        if (!succeeded) throw new Error('Clipboard unavailable');
      }
      toast(message);
    } catch {
      toast('Kopieren nicht möglich. Bitte den Text manuell markieren.');
    }
  }
  function toast(message) {
    clearTimeout(toastTimeout);
    elements.toast.textContent = message;
    elements.toast.classList.add('visible');
    toastTimeout = setTimeout(() => elements.toast.classList.remove('visible'), 2800);
  }

  $('#copy-prompt').addEventListener('click', () => copyText(personalizedText(), 'Prompt kopiert.'));
  $('#copy-link').addEventListener('click', () => {
    if (window.location.protocol === 'file:') {
      toast('Für teilbare Links zuerst über GitHub Pages veröffentlichen.');
      return;
    }
    copyText(window.location.href, 'Link kopiert.');
  });
  $('#close-dialog').addEventListener('click', closePrompt);
  elements.dialog.addEventListener('click', (event) => {
    if (event.target === elements.dialog) closePrompt();
  });
  elements.dialog.addEventListener('cancel', (event) => { event.preventDefault(); closePrompt(); });
  elements.search.addEventListener('input', renderCards);
  $('#reset').addEventListener('click', () => {
    elements.search.value = '';
    activeCategory = 'Alle';
    renderFilters();
    renderCards();
    elements.search.focus();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && !elements.dialog.open && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      event.preventDefault(); elements.search.focus();
    }
  });
  window.addEventListener('hashchange', () => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const prompt = prompts.find((p) => p.id === id);
    if (prompt) openPrompt(prompt, { changeHash: false });
  });

  renderFilters();
  renderCards();
  const initialId = decodeURIComponent(window.location.hash.slice(1));
  const selectedPrompt = prompts.find((p) => p.id === initialId);
  if (selectedPrompt) openPrompt(selectedPrompt, { changeHash: false });
})();
