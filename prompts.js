/* Inhalte der Bibliothek: neuen Prompt als Objekt ergänzen. */
window.PROMPTS = [
  {
    "id": "text-umschreiben",
    "category": "Schreiben & Kommunikation",
    "title": "Text natürlich umformulieren",
    "description": "Für verständlichere Texte ohne KI-Floskeln.",
    "prompt": "Überarbeite den folgenden Text für [ZIELGRUPPE]. Ziel: [ZIEL], Ton: [TON].\n\nBehalte alle inhaltlichen Aussagen bei, erfinde keine Fakten und entferne unnötige Floskeln. Formuliere klar, natürlich und präzise. Wenn Informationen fehlen, markiere sie statt sie zu ergänzen.\n\nGib zuerst nur die überarbeitete Version aus und darunter maximal drei wesentliche Änderungen.\n\nText:\n[TEXT]"
  },
  {
    "id": "mail-stichpunkte",
    "category": "Schreiben & Kommunikation",
    "title": "E-Mail aus Stichpunkten",
    "description": "Aus wenigen Notizen eine sendefertige E-Mail erstellen.",
    "prompt": "Formuliere aus meinen Stichpunkten eine E-Mail.\n\nEmpfänger: [EMPFÄNGER]\nZiel der Nachricht: [ZIEL]\nTon: freundlich, direkt und professionell\nLänge: so kurz wie möglich, so ausführlich wie nötig\n\nSchreibe eine passende Betreffzeile und eine versandfertige E-Mail. Erfinde keine Details. Wenn ein entscheidender Punkt fehlt, setze die Markierung „Angabe fehlt“ an die entsprechende Stelle.\n\nStichpunkte:\n[STICHPUNKTE]"
  },
  {
    "id": "schwierige-nachricht",
    "category": "Schreiben & Kommunikation",
    "title": "Schwierige Nachricht formulieren",
    "description": "Klar Grenzen setzen, ohne unnötig zu eskalieren.",
    "prompt": "Hilf mir, eine schwierige Nachricht zu verfassen.\n\nSituation: [SITUATION]\nWas ich erreichen will: [ZIEL]\nWas ich vermeiden will: [VERMEIDEN]\n\nSchreibe eine respektvolle, sachliche und klare Nachricht in natürlicher Sprache. Kein passiv-aggressiver Unterton, keine übertriebenen Entschuldigungen. Gib danach eine etwas diplomatischere und eine direktere Alternative. Weise auf missverständliche Formulierungen hin."
  },
  {
    "id": "einfach-erklaeren",
    "category": "Lernen & Verstehen",
    "title": "Komplexes einfach erklären",
    "description": "Neue Themen verstehen, ohne Vorwissen vorauszusetzen.",
    "prompt": "Erkläre mir [THEMA], als hätte ich folgendes Vorwissen: [VORWISSEN].\n\nBeginne mit einer einfachen Erklärung in fünf Sätzen, verwende danach ein alltagsnahes Beispiel und erkläre die wichtigsten Fachbegriffe. Zeige anschließend, woran Anfänger das Thema häufig falsch verstehen.\n\nSchließe mit drei kurzen Kontrollfragen. Wenn du wichtige Vereinfachungen gemacht hast, benenne sie."
  },
  {
    "id": "lerntutor",
    "category": "Lernen & Verstehen",
    "title": "Interaktiver Lerntutor",
    "description": "Nicht nur Antworten lesen, sondern wirklich üben.",
    "prompt": "Sei mein geduldiger Lerntutor für [THEMA]. Mein Niveau ist [NIVEAU], mein Lernziel [LERNZIEL].\n\nStelle jeweils nur eine Frage oder Mini-Aufgabe und warte auf meine Antwort. Gib zuerst einen Hinweis, wenn ich feststecke, statt sofort die Lösung zu verraten. Erkläre Fehler konkret und passe den Schwierigkeitsgrad an mein Können an.\n\nBeginne mit einer kurzen Einstiegsfrage, um meinen Kenntnisstand einzuschätzen."
  },
  {
    "id": "lernplan",
    "category": "Lernen & Verstehen",
    "title": "Realistischen Lernplan entwickeln",
    "description": "Ein Ziel in machbare Lerneinheiten zerlegen.",
    "prompt": "Erstelle einen realistischen Lernplan für [LERNZIEL].\n\nAusgangsniveau: [NIVEAU]\nZeit pro Woche: [ZEIT]\nZeitraum: [ZEITRAUM]\n\nPriorisiere die Grundlagen, plane Wiederholung und praktische Übungen ein und halte den Aufwand im Rahmen meiner verfügbaren Zeit. Gib mir einen Wochenplan mit Lernzielen, konkreten Aufgaben und einem einfachen Selbsttest. Benenne Annahmen und unrealistische Ziele ausdrücklich."
  },
  {
    "id": "notizen-aufgaben",
    "category": "Arbeit & Organisation",
    "title": "Notizen zu Aufgaben machen",
    "description": "Entscheidungen, Aufgaben und Fragen aus Notizen extrahieren.",
    "prompt": "Strukturiere die folgenden Notizen. Trenne strikt zwischen:\n1. Entscheidungen\n2. Aufgaben (mit Verantwortlichen und Terminen, falls ausdrücklich genannt)\n3. Offenen Fragen\n4. Wichtigen Informationen\n\nErfinde keine Verantwortlichen oder Termine. Kennzeichne fehlende Angaben mit „offen“. Entferne Wiederholungen, aber bewahre relevante Details. Beginne mit einer Zusammenfassung in maximal drei Sätzen.\n\nNotizen:\n[NOTIZEN]"
  },
  {
    "id": "priorisieren",
    "category": "Arbeit & Organisation",
    "title": "Aufgaben sinnvoll priorisieren",
    "description": "Wichtiges von bloßer Beschäftigung unterscheiden.",
    "prompt": "Hilf mir, meine Aufgaben zu priorisieren. Berücksichtige Nutzen, Dringlichkeit, Zeitbedarf, Abhängigkeiten und Risiken.\n\nVerfügbare Zeit: [ZEIT]\nAufgaben: [AUFGABEN]\n\nErstelle drei Bereiche: „Heute“, „Später“, „Weglassen oder delegieren“. Gib zu jeder priorisierten Aufgabe eine knappe Begründung und den kleinsten sinnvollen nächsten Schritt. Plane maximal so viel ein, wie in die verfügbare Zeit passt."
  },
  {
    "id": "prozess-vereinfachen",
    "category": "Arbeit & Organisation",
    "title": "Arbeitsablauf vereinfachen",
    "description": "Weniger Schritte, weniger manuelle Arbeit.",
    "prompt": "Analysiere diesen wiederkehrenden Ablauf: [ABLAUF].\n\nZiel: [ZIEL]\nRahmenbedingungen: [RAHMENBEDINGUNGEN]\n\nIdentifiziere unnötige Schritte, Fehlerquellen und mögliche Automatisierungen. Unterscheide zwischen „sofort vereinfachen“, „später automatisieren“ und „nicht automatisieren“. Bewerte Lösungen nach Aufwand, Nutzen und Wartbarkeit. Empfiehl zuerst die einfachste praktikable Verbesserung."
  },
  {
    "id": "entscheidung",
    "category": "Entscheidungen & Ideen",
    "title": "Entscheidung strukturiert treffen",
    "description": "Alternativen nüchtern vergleichen.",
    "prompt": "Ich möchte entscheiden zwischen [OPTIONEN].\n\nMein Ziel: [ZIEL]\nWichtige Kriterien: [KRITERIEN]\nEinschränkungen: [GRENZEN]\n\nErstelle eine übersichtliche Vergleichstabelle mit Stärken, Schwächen, Risiken und offenen Annahmen. Gewichte keine Kriterien ohne meine Vorgabe. Zeige, unter welchen Bedingungen welche Option gewinnt, und gib eine begründete Empfehlung. Frage nur nach Informationen, die die Entscheidung wirklich ändern könnten."
  },
  {
    "id": "idee-kritisieren",
    "category": "Entscheidungen & Ideen",
    "title": "Idee kritisch prüfen",
    "description": "Schwachstellen finden statt nur Zustimmung bekommen.",
    "prompt": "Prüfe folgende Idee wie ein konstruktiver, kritischer Sparringspartner: [IDEE].\n\nZielgruppe: [ZIELGRUPPE]\nErfolg wäre: [ERFOLG]\n\nNenne den stärksten Nutzen, die fünf wichtigsten Annahmen, drei realistische Gründe fürs Scheitern und einen möglichst günstigen Test, der innerhalb einer Woche Erkenntnisse liefert. Trenne Fakten, Einschätzungen und offene Fragen. Sei sachlich, nicht euphorisch."
  },
  {
    "id": "ideen-entwickeln",
    "category": "Entscheidungen & Ideen",
    "title": "Gute Ideen entwickeln",
    "description": "Von einer Herausforderung zu konkreten Ansätzen.",
    "prompt": "Entwickle zehn unterschiedliche Lösungsideen für [PROBLEM].\n\nZielgruppe: [ZIELGRUPPE]\nBudget/Zeit: [RAHMEN]\n\nVermeide zehn Varianten derselben Idee. Gib jeder Idee einen Namen und beschreibe Nutzen, groben Aufwand und größten Haken in einem Satz. Wähle anschließend drei vielversprechende Ansätze aus und formuliere je einen ersten Test, ohne direkt ein Großprojekt daraus zu machen."
  },
  {
    "id": "recherche-plan",
    "category": "Recherche & Analyse",
    "title": "Fundierte Recherche beauftragen",
    "description": "Quellenlage prüfen und Unsicherheiten sichtbar machen.",
    "prompt": "Untersuche [FRAGE]. Mein Anwendungsfall ist [KONTEXT].\n\nNutze nach Möglichkeit aktuelle, nachvollziehbare Primärquellen. Nenne zu wesentlichen Aussagen die konkrete Quelle und das Veröffentlichungsdatum. Trenne gesicherte Fakten, plausible Einschätzungen und offene Fragen. Erfinde niemals Quellen oder Links. Falls du keinen Webzugriff hast, sage das ausdrücklich und erläutere, welche Punkte noch geprüft werden müssen.\n\nLiefere zuerst die Antwort in fünf Sätzen, danach Belege und Gegenargumente."
  },
  {
    "id": "aussagen-pruefen",
    "category": "Recherche & Analyse",
    "title": "Behauptungen überprüfen",
    "description": "Fakten, Meinungen und unbelegte Aussagen trennen.",
    "prompt": "Prüfe die folgenden Behauptungen auf logische Fehler, fehlende Belege und mögliche Mehrdeutigkeiten.\n\nBehauptungen:\n[BEHAUPTUNGEN]\n\nErstelle pro Aussage: (1) die eigentliche Behauptung, (2) was man zur Prüfung wissen müsste, (3) derzeitiger Befund, sofern verlässlich beurteilbar, (4) Grad der Unsicherheit. Erfinde keine Nachweise. Unterscheide klar zwischen „falsch“ und „nicht belegt“."
  },
  {
    "id": "vergleichen",
    "category": "Recherche & Analyse",
    "title": "Angebote fair vergleichen",
    "description": "Nicht nur Funktionen, sondern Gesamtnutzen bewerten.",
    "prompt": "Vergleiche folgende Lösungen oder Angebote: [OPTIONEN].\n\nNutzung: [ANWENDUNG]\nBudget: [BUDGET]\nWichtig: [KRITERIEN]\n\nStelle die relevanten Unterschiede in einer Tabelle dar: Kosten, Grenzen, Vorteile, Nachteile und offene Punkte. Nenne bei Preisen die Währung und den Stand der Information. Rate nicht bei fehlenden Daten. Empfiehl die beste Wahl für meinen konkreten Anwendungsfall und erkläre, wann sich eine Alternative lohnt."
  },
  {
    "id": "bug-finden",
    "category": "Programmieren & Technik",
    "title": "Fehler systematisch finden",
    "description": "Debugging statt planloser Änderungsvorschläge.",
    "prompt": "Hilf mir, einen Fehler systematisch zu diagnostizieren.\n\nTechnologie/Umgebung: [UMGEBUNG]\nErwartetes Verhalten: [ERWARTET]\nTatsächliches Verhalten: [TATSAECHLICH]\nFehlermeldung oder Code: [CODE_ODER_FEHLER]\n\nNenne die wahrscheinlichsten Ursachen in sinnvoller Prüf-Reihenfolge. Schlage zuerst kurze, risikoarme Diagnoseschritte vor. Erkläre bei jeder Maßnahme, was das Ergebnis bedeutet. Gib konkrete Änderungen erst, wenn sie ausreichend begründet sind. Warne vor Datenverlust oder riskanten Befehlen."
  },
  {
    "id": "code-review",
    "category": "Programmieren & Technik",
    "title": "Code-Review durchführen",
    "description": "Risiken und Verbesserungen nach Relevanz sortieren.",
    "prompt": "Führe ein praxisnahes Code-Review durch.\n\nZiel des Codes: [ZIEL]\nProgrammiersprache/Framework: [STACK]\nCode:\n[CODE]\n\nPrüfe zuerst Korrektheit, Sicherheit, unerwartete Randfälle und Verständlichkeit. Melde Probleme priorisiert als „kritisch“, „wichtig“ oder „optional“. Zeige für relevante Probleme eine konkrete Verbesserung. Vermeide kosmetische Umbauten ohne erkennbaren Nutzen. Falls du den Code nicht ausführen kannst, kennzeichne nicht getestete Annahmen."
  },
  {
    "id": "mvp-plan",
    "category": "Programmieren & Technik",
    "title": "Kleines MVP planen",
    "description": "Eine umsetzbare erste Version ohne Feature-Wildwuchs.",
    "prompt": "Hilf mir, ein möglichst kleines MVP für [PROJEKTIDEE] zu planen.\n\nZielgruppe: [ZIELGRUPPE]\nHauptproblem: [PROBLEM]\nZeitbudget: [ZEITBUDGET]\nTechnische Rahmenbedingungen: [TECHNIK]\n\nDefiniere den Kernnutzen und maximal fünf notwendige Funktionen. Liste bewusst auf, was NICHT Teil von Version 1 ist. Schlage eine einfache Architektur und drei kleine Umsetzungsschritte mit überprüfbaren Ergebnissen vor. Beende die Planung mit einem klaren Stopp-Kriterium."
  },
  {
    "id": "wochenplanung",
    "category": "Alltag & Planung",
    "title": "Realistische Woche planen",
    "description": "Prioritäten und echte Freizeit berücksichtigen.",
    "prompt": "Erstelle einen realistischen Wochenplan aus diesen Verpflichtungen und Vorhaben: [TERMINE_UND_AUFGABEN].\n\nVerfügbare Zeitfenster: [ZEITFENSTER]\nWichtige Prioritäten: [PRIORITAETEN]\nErholung/Freizeit: [FREIZEIT]\n\nPlane Pufferzeiten ein und überfülle die Woche nicht. Trenne Muss, Kann und bewusst verschoben. Gib eine Wochenübersicht und markiere maximal drei wirklich wichtige Ergebnisse. Weise auf Konflikte oder unrealistische Annahmen hin."
  },
  {
    "id": "kaufentscheidung",
    "category": "Alltag & Planung",
    "title": "Kaufentscheidung vorbereiten",
    "description": "Bedarf prüfen, bevor Produkte gesammelt werden.",
    "prompt": "Hilf mir zu entscheiden, ob und was ich kaufen sollte.\n\nProduktkategorie: [PRODUKT]\nAnwendungsfall: [NUTZUNG]\nBudget: [BUDGET]\nMuss-Kriterien: [MUSS_KRITERIEN]\n\nKläre zuerst, welche Eigenschaften tatsächlich relevant sind und welche nur Marketing sind. Vergleiche sinnvolle Lösungsarten, einschließlich „vorerst nichts kaufen“. Falls aktuelle Produkte oder Preise ohne Recherche nicht verlässlich feststehen, sage es. Gib eine knappe Empfehlung und mögliche versteckte Folgekosten."
  },
  {
    "id": "reiseplanung",
    "category": "Alltag & Planung",
    "title": "Reise sinnvoll planen",
    "description": "Ein Plan mit Puffer statt vollgestopfter Tagesabläufe.",
    "prompt": "Plane eine Reise nach [REISEZIEL] für [DAUER].\n\nInteressen: [INTERESSEN]\nBudget: [BUDGET]\nReisestil: [REISESTIL]\n\nErstelle eine entspannte Tagesstruktur mit maximal zwei Hauptaktivitäten pro Tag, sinnvollen Wegen und Puffer. Trenne feste Empfehlungen von Optionen. Kennzeichne Öffnungszeiten, Preise oder Verfügbarkeit als prüfbedürftig, wenn du sie nicht aktuell bestätigen kannst. Berücksichtige Schlechtwetter-Alternativen."
  },
  {
    "id": "prompt-verbessern",
    "category": "KI & Prompting",
    "title": "Schwachen Prompt verbessern",
    "description": "Aus einer vagen Frage eine klare Aufgabe machen.",
    "prompt": "Verbessere meinen Prompt, ohne mein eigentliches Ziel zu verändern.\n\nMein ursprünglicher Prompt:\n[PROMPT]\n\nLiefere zuerst die verbesserte, direkt kopierbare Fassung. Ergänze nur Anweisungen, die Ergebnisqualität oder Verlässlichkeit tatsächlich erhöhen. Danach erkläre in maximal fünf Stichpunkten die wichtigsten Änderungen. Falls entscheidender Kontext fehlt, verwende klar benannte Platzhalter statt Dinge zu erfinden."
  },
  {
    "id": "ki-ergebnis-pruefen",
    "category": "KI & Prompting",
    "title": "KI-Antwort kritisch prüfen",
    "description": "Halluzinationen, Lücken und Scheingenauigkeit erkennen.",
    "prompt": "Prüfe die folgende KI-Antwort kritisch auf:\n- unbelegte Tatsachenbehauptungen\n- Widersprüche oder Denkfehler\n- übersehene Einschränkungen\n- fehlende Informationen\n- unnötige Komplexität\n\nOriginalfrage: [FRAGE]\nKI-Antwort: [ANTWORT]\n\nZitiere die problematischen Passagen kurz, erkläre warum sie problematisch sind und schlage eine präzisere Version vor. Erfinde keine Belege. Stelle Unsicherheit ausdrücklich dar."
  },
  {
    "id": "auftrag-klaeren",
    "category": "KI & Prompting",
    "title": "Unklaren Auftrag strukturieren",
    "description": "Aus einer Idee ein verständliches Briefing machen.",
    "prompt": "Ich habe eine noch unfertige Idee: [IDEE].\n\nHilf mir, daraus einen umsetzbaren Auftrag zu machen. Formuliere zuerst Ziel, Zielgruppe, erwartetes Ergebnis, Rahmenbedingungen und Erfolgskriterien. Trenne ausdrücklich, was feststeht, was eine Annahme ist und was noch offen ist. Mache sinnvolle Vorschläge, aber entscheide nichts stillschweigend für mich.\n\nStelle abschließend höchstens drei Fragen, deren Antworten den nächsten Schritt wesentlich beeinflussen."
  }
];
