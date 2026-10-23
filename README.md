# PromptWerk – teilbare Prompt-Bibliothek

Ein kleiner, deutschsprachiger Starter mit **24 universell anpassbaren Prompt-Vorlagen** in **8 Kategorien**.

**Funktionen:** Stichwortsuche, Kategorien, Platzhalter direkt ausfüllen, Prompt kopieren, direkte Links zu einzelnen Prompts, responsives Layout. Keine Anmeldung, Datenbank, Tracking, API oder Build-Tools notwendig. Alle Formulardaten bleiben im Browser und werden nicht gespeichert.

## Lokal ansehen

Einfach `index.html` doppelklicken und im Browser öffnen. Die Bibliothek funktioniert auch ohne lokalen Webserver. Links zu einzelnen Prompts lassen sich erst sinnvoll teilen, sobald die Website online veröffentlicht ist.

## Kostenlos veröffentlichen (GitHub Pages)

1. Auf GitHub ein **öffentliches Repository** anlegen, z. B. `promptwerk`.
2. **Alle Dateien aus diesem Ordner** in das Repository-Hauptverzeichnis hochladen (die `index.html` muss direkt im Hauptverzeichnis liegen).
3. In GitHub **Settings → Pages** öffnen.
4. Unter **Build and deployment** als Quelle **Deploy from a branch** auswählen, Branch `main` und Ordner `/(root)` wählen, dann **Save**.
5. Den von GitHub angezeigten Pages-Link öffnen und teilen. Typischerweise lautet er `https://DEIN-NAME.github.io/promptwerk/`.

Hinweis: Die technische Bereitstellung öffentlicher GitHub-Pages-Projekte ist normalerweise kostenlos; aktuelle Produktbedingungen auf GitHub prüfen.

## Neue Prompts ergänzen

Die Sammlung steht in `prompts.js` als Array `window.PROMPTS`. Ergänze innerhalb des Arrays ein Objekt mit diesen Feldern:

```js
{
  "id": "mein-neuer-prompt",             // einmalige ID ohne Leerzeichen
  "category": "Alltag & Planung",       // vorhandene oder neue Kategorie
  "title": "Titel meines Prompts",
  "description": "Ein kurzer Nutzen-Satz.",
  "prompt": "Hilf mir bei [THEMA]. Ziel ist [ZIEL]. Gib mir ..."
}
```

**Wichtig:** Zwischen aufeinanderfolgenden Objekten ein Komma setzen. Die IDs müssen eindeutig bleiben, denn sie werden als teilbare Links verwendet. Platzhalter in GROSSBUCHSTABEN und eckigen Klammern, z. B. `[THEMA]`, werden automatisch zu Eingabefeldern. Die Bibliothek wird nach dem Neuladen automatisch aktualisiert.

## Qualitätscheck vor dem Veröffentlichen

- Ist das Ziel des Prompts klar?
- Ist die Vorlage ohne Fachkenntnisse verständlich?
- Sind alle nötigen Nutzerangaben als Platzhalter erkennbar?
- Verlangt der Prompt keine erfundenen Fakten, Quellen oder Ergebnisse?
- Ist das gewünschte Ergebnisformat ausreichend bestimmt?
- Wurde der Prompt praktisch ausprobiert und bei Bedarf gekürzt?

Die enthaltenen Vorlagen sind redaktionelle Startentwürfe, **keine empirisch validierten Prompts**. Ergebnisse hängen von Modell und eingegebenem Kontext ab.

## Teilen und Rechte

Du kannst diese Starter-Dateien für deine eigene Bibliothek anpassen und veröffentlichen. Für die von dir veröffentlichte Sammlung solltest du bewusst eine Lizenz wählen, etwa **CC0** (freie Weiternutzung ohne Pflicht zur Namensnennung) oder **CC BY 4.0** (mit Namensnennung). In dieser Version ist **noch keine Lizenzdatei** hinterlegt.

## Dateistruktur

```
index.html    Webseite
styles.css    Design, responsives Layout
app.js        Suche, Filter, Dialog, Kopieren, Links
prompts.js    Inhalt aller Prompt-Vorlagen
favicon.svg   Kleines Website-Symbol
README.md     Anleitung
```
