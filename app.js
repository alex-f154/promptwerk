/* PromptWerk 0.2 — reines Vanilla JavaScript; keine Abhängigkeiten. */
(() => {
  'use strict';
  const prompts = Array.isArray(window.PROMPTS) ? window.PROMPTS : [];
  const $ = (selector) => document.querySelector(selector);
  const el = (tag, className = '', text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const nodes = {
    search: $('#search'), categories: $('#categories'), list: $('#prompt-list'),
    count: $('#result-count'), title: $('#list-title'), empty: $('#empty'),
    favoritesOnly: $('#favorites-only'), favCount: $('#favorite-count'), sort: $('#sort'),
    dialog: $('#prompt-dialog'), dialogTitle: $('#dialog-title'), dialogCategory: $('#dialog-category'),
    dialogDescription: $('#dialog-description'), variables: $('#variables'),
    noVariables: $('#no-variables'), preview: $('#preview'), toast: $('#toast')
  };
  const categoryOrder = [...new Set(prompts.map(p => p.category))];
  const counts = Object.fromEntries(categoryOrder.map(cat => [cat, prompts.filter(p => p.category === cat).length]));
  const favoritesKey = 'promptwerk-favorites-v02';
  let favorites = new Set();
  try { const saved = JSON.parse(localStorage.getItem(favoritesKey) || '[]'); if(Array.isArray(saved)) favorites = new Set(saved.filter(id => prompts.some(p => p.id === id))); } catch {}
  let activeCategory = 'Alle', favoritesOnly = false, activePrompt = null, variableValues = {}, toastTimer;
  const variablePattern = /\[([A-ZÄÖÜ0-9_]+)\]/g;
  const vars = (text) => [...new Set([...text.matchAll(variablePattern)].map(m => m[1]))];
  const personalized = () => activePrompt ? activePrompt.prompt.replace(variablePattern, (match, key) => (variableValues[key] || '').trim() || match) : '';

  $('#total-count').textContent = prompts.length;
  $('#category-count').textContent = categoryOrder.length;
  $('#sidebar-count').textContent = categoryOrder.length;
  $('#footer-count').textContent = prompts.length;

  function renderCategories() {
    nodes.categories.replaceChildren();
    ['Alle', ...categoryOrder].forEach(cat => {
      const btn = el('button', `category${cat === activeCategory ? ' active' : ''}`);
      btn.type = 'button'; btn.setAttribute('aria-pressed', String(cat === activeCategory));
      btn.append(el('span', '', cat === 'Alle' ? 'Alle Themen' : cat), el('span', 'cat-count', counts[cat] ?? prompts.length));
      btn.addEventListener('click', () => {
        activeCategory = cat; renderCategories(); renderList();
      });
      nodes.categories.append(btn);
    });
  }
  function getMatching() {
    const query = nodes.search.value.trim().toLocaleLowerCase('de');
    let result = prompts.filter(p => (activeCategory === 'Alle' || p.category === activeCategory)
      && (!favoritesOnly || favorites.has(p.id))
      && (!query || [p.title, p.description, p.category, p.prompt].join(' ').toLocaleLowerCase('de').includes(query)));
    if (nodes.sort.value === 'az') result = [...result].sort((a, b) => a.title.localeCompare(b.title, 'de'));
    if (nodes.sort.value === 'za') result = [...result].sort((a, b) => b.title.localeCompare(a.title, 'de'));
    return result;
  }
  function renderList() {
    const matching = getMatching();
    const items = document.createDocumentFragment();
    matching.forEach((p, index) => {
      const row = el('article', 'prompt-row');
      const btn = el('button', 'row-main'); btn.type = 'button';
      btn.setAttribute('aria-label', `${p.title} öffnen`);
      btn.append(el('span', 'row-index', String(index + 1).padStart(2, '0')));
      const content = el('span', 'row-content');
      content.append(el('span', 'row-title', p.title), el('span', 'row-desc', p.description));
      btn.append(content, el('span', 'row-cat', p.category), el('span', 'row-arrow', '↗'));
      btn.addEventListener('click', () => openPrompt(p));
      const fav = el('button', `favorite-button${favorites.has(p.id) ? ' saved' : ''}`, favorites.has(p.id) ? '★' : '☆');
      fav.type = 'button'; fav.setAttribute('aria-pressed', String(favorites.has(p.id)));
      fav.setAttribute('aria-label', favorites.has(p.id) ? `${p.title} aus Merkliste entfernen` : `${p.title} merken`);
      fav.title = favorites.has(p.id) ? 'Aus Merkliste entfernen' : 'Zur Merkliste hinzufügen';
      fav.addEventListener('click', () => {
        if(favorites.has(p.id)) favorites.delete(p.id); else favorites.add(p.id);
        try { localStorage.setItem(favoritesKey, JSON.stringify([...favorites])); } catch {}
        renderList();
      });
      row.append(btn, fav); items.append(row);
    });
    nodes.list.replaceChildren(items);
    nodes.title.textContent = activeCategory === 'Alle' ? 'Alle Vorlagen' : activeCategory;
    nodes.count.textContent = `${matching.length} von ${prompts.length} Vorlagen`;
    nodes.favCount.textContent = favorites.size;
    nodes.empty.hidden = matching.length !== 0;
  }
  function updatePreview() { nodes.preview.textContent = personalized(); }
  function openPrompt(prompt, changeHash = true) {
    activePrompt = prompt; variableValues = {};
    nodes.dialogCategory.textContent = prompt.category;
    nodes.dialogTitle.textContent = prompt.title;
    nodes.dialogDescription.textContent = prompt.description;
    nodes.variables.replaceChildren();
    const names = vars(prompt.prompt);
    nodes.noVariables.hidden = names.length !== 0;
    names.forEach((name, index) => {
      const wrap = el('div', 'variable-field');
      const label = el('label', '', name.replaceAll('_', ' ').toLocaleLowerCase('de'));
      const input = el('textarea'); input.id = `variable-${index}`;
      input.rows = /TEXT|CODE|NOTIZEN|STICH|DATEN|INHALT|DOKUMENT|ERGEBNIS|AUSSCHREIBUNG|KUNDENAUSSAGEN|ZEUGNIS|SCHEMA/.test(name) ? 3 : 1;
      input.placeholder = `${label.textContent} eingeben …`;
      label.htmlFor = input.id;
      input.addEventListener('input', () => { variableValues[name] = input.value; updatePreview(); });
      wrap.append(label, input); nodes.variables.append(wrap);
    });
    updatePreview();
    if (changeHash) {
      try { history.replaceState(null, '', `#${encodeURIComponent(prompt.id)}`); } catch {}
    }
    if (!nodes.dialog.open) nodes.dialog.showModal();
  }
  function closePrompt() {
    if(nodes.dialog.open) nodes.dialog.close();
    activePrompt = null;
    try { history.replaceState(null, '', location.pathname + location.search); } catch {}
  }
  function toast(message) {
    clearTimeout(toastTimer); nodes.toast.textContent = message; nodes.toast.classList.add('visible');
    toastTimer = setTimeout(() => nodes.toast.classList.remove('visible'), 2600);
  }
  async function copyText(value, success) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(value);
      else {
        const textarea = el('textarea'); textarea.value = value;
        textarea.style.position = 'fixed'; textarea.style.left = '-9999px';
        document.body.append(textarea); textarea.select();
        const ok = document.execCommand('copy'); textarea.remove();
        if (!ok) throw Error('Clipboard API unavailable');
      }
      toast(success);
    } catch { toast('Kopieren nicht möglich – Text bitte manuell markieren.'); }
  }
  nodes.search.addEventListener('input', renderList);
  nodes.sort.addEventListener('change', renderList);
  nodes.favoritesOnly.addEventListener('click', () => {
    favoritesOnly = !favoritesOnly;
    nodes.favoritesOnly.setAttribute('aria-pressed', String(favoritesOnly));
    renderList();
  });
  $('#reset').addEventListener('click', () => {
    activeCategory = 'Alle'; favoritesOnly = false;
    nodes.search.value = ''; nodes.sort.value = 'editorial';
    nodes.favoritesOnly.setAttribute('aria-pressed', 'false');
    renderCategories(); renderList(); nodes.search.focus();
  });
  $('#copy-prompt').addEventListener('click', () => copyText(personalized(), 'Prompt kopiert.'));
  $('#copy-link').addEventListener('click', () => {
    if (location.protocol === 'file:') { toast('Teilen funktioniert über die veröffentlichte GitHub-Pages-Seite.'); return; }
    copyText(location.href, 'Link kopiert.');
  });
  $('#close-dialog').addEventListener('click', closePrompt);
  nodes.dialog.addEventListener('cancel', event => { event.preventDefault(); closePrompt(); });
  nodes.dialog.addEventListener('click', event => { if (event.target === nodes.dialog) closePrompt(); });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !nodes.dialog.open && !['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) {
      event.preventDefault(); nodes.search.focus();
    }
  });
  window.addEventListener('hashchange', () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const p = prompts.find(x => x.id === id);
    if (p) openPrompt(p, false);
    else if(nodes.dialog.open) closePrompt();
  });
  renderCategories(); renderList();
  const firstId = decodeURIComponent(location.hash.slice(1));
  const p = prompts.find(x => x.id === firstId);
  if (p) openPrompt(p, false);
})();
