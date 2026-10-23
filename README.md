# PromptWerk v0.2

Eine bewusst schlichte deutschsprachige Prompt-Bibliothek mit **120 Vorlagen in 12 Kategorien**. Als statische Website auf GitHub Pages nutzbar, ohne Backend, API-Schlüssel oder Build-Schritt.

## Was neu ist

- Neu gestaltete, helle, redaktionelle Oberfläche mit klarer Navigation statt Karten-Raster und Farbverläufen.
- 120 eigenständige Prompt-Vorlagen: die 24 bestehenden wurden beibehalten, 96 ergänzt.
- Suche über Titel, Beschreibung, Kategorie und Prompt-Text.
- Kategorienfilter mit Anzahl, A–Z-Sortierung und Favoritenliste (lokal im Browser gespeichert).
- Vorlagen öffnen, Platzhalter als Felder ausfüllen, Live-Vorschau und Kopierfunktion.
- Einzelne Prompts über `#prompt-id` teilen.
- Mobile Ansicht, Tastenkürzel `/` für Suche, Escape zum Schließen.
- Export: `PROMPTS.md`, `prompts.csv`, `prompts.json`.

**Wichtig:** Dies sind redaktionell erstellte Vorlagen; sie wurden nicht für jedes Modell und jeden Anwendungsfall empirisch getestet. Bei Recherche, Recht, Medizin und Finanzen sollten Ergebnisse anhand verlässlicher Quellen geprüft werden.

## So aktualisierst du das bestehende GitHub-Repository

1. Öffne https://github.com/alex-f154/promptwerk
2. Entferne oder überschreibe die alten Dateien im Root-Verzeichnis: `index.html`, `styles.css`, `app.js`, `prompts.js`, `favicon.svg` und `README.md`.
3. Lade die Dateien aus diesem Paket **direkt ins Stammverzeichnis des Repositories** hoch; `index.html` darf nicht in einem Unterordner stecken.
4. Lass unter **Settings → Pages** die Einstellung **Deploy from a branch**, `main`, `/(root)` aktiviert.
5. Prüfe unter **Actions** den Workflow `pages build and deployment`. Danach ist die aktualisierte Website unter https://alex-f154.github.io/promptwerk/ erreichbar.

GitHub erkennt geänderte Dateien beim Hochladen häufig als neue Version. Falls GitHub beim Drag-and-Drop anzeigt, dass eine Datei bereits existiert, die Datei im Repository öffnen und mit dem Stiftsymbol bearbeiten oder die alte Datei vor dem erneuten Upload löschen. Alternativ können die Dateien lokal mit Git/VS Code committed und gepusht werden.

Lokal ansehen: `index.html` doppelklicken. Einige Browser schränken bei `file://` die lokale Speicherung der Merkliste ein; auf GitHub Pages funktioniert sie regulär.

## Dateiübersicht

| Datei | Bedeutung |
| --- | --- |
| `index.html` | Website-Struktur |
| `styles.css` | Responsives Design |
| `app.js` | Interaktionen, Suche, Merkliste, Dialog |
| `prompts.js` | **Datenquelle** für die Website |
| `favicon.svg` | Tab-Icon |
| `PROMPTS.md` | Lesefassung der Sammlung für GitHub |
| `prompts.csv` | Export für Tabellen/Notion |
| `prompts.json` | Maschinenlesbarer Export |
| `CONTRIBUTING.md` | Regeln für neue Beiträge |

## Neue Prompts hinzufügen

In `prompts.js` dem Array `window.PROMPTS` ein weiteres Objekt hinzufügen:

```js
{
  "id": "kurzer-eindeutiger-slug",
  "category": "Alltag & Planung",
  "title": "Konkreter Titel",
  "description": "Eine klare Zeile zum Nutzen.",
  "prompt": "Hilf mir bei [THEMA]. Ziel: [ZIEL]. Gib die Antwort als ..."
}
```

`id` muss eindeutig bleiben. Platzhalter wie `[THEMA]` erzeugen automatisch Eingabefelder. Benutze Großbuchstaben, Zahlen und Unterstriche innerhalb der eckigen Klammern. Bestehende IDs möglichst nicht verändern, da sonst geteilte Links brechen.

`PROMPTS.md`, `prompts.csv` und `prompts.json` sind eine **Momentaufnahme**. Bei Änderungen an `prompts.js` sollten Exporte erneut erzeugt werden.

## Technik und Datenschutz

Es werden **keine** Tracking-Pixel, Analytics-Skripte, Schrift-CDNs, Konten oder externen Dienste verwendet. Inhalte aus den Platzhalter-Feldern verbleiben im Browserfenster und werden nicht an einen Server übertragen. Die Merkliste speichert ausschließlich die IDs gemerkter Prompts im `localStorage` des jeweiligen Browsers.

## Inhalte und Lizenzen

Für eine langfristig öffentlich weiterverwendbare Sammlung sollte der Repo-Inhaber eine ausdrückliche Lizenz für Code und Texte ergänzen. Diese Fassung legt bewusst noch keine Lizenz für das Repository fest. Eine öffentliche Sichtbarkeit allein erteilt Dritten noch keine umfassende Nutzungslizenz.
