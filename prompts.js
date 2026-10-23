/* 120 redaktionell erstellte Prompt-Vorlagen. Keine Rankings und keine Modell-Bewertungen. */
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
    "id": "ton-treffen-statt-ki-sprache",
    "category": "Schreiben & Kommunikation",
    "title": "Ton treffen statt KI-Sprache",
    "description": "Einen Text genau an Zielgruppe und Situation anpassen.",
    "prompt": "Überarbeite [TEXT] für [ZIELGRUPPE] im Kontext [SITUATION].\nDer Ton soll [TON] sein. Erhalte Inhalt, Absicht und konkrete Fakten. Streiche leere Einleitungen, künstliche Begeisterung und Wiederholungen.\nGib eine finale Version und eine kurze Erklärung von höchstens drei stilistischen Entscheidungen. Falls eine Aussage unklar ist, markiere sie separat statt sie umzudeuten."
  },
  {
    "id": "kurze-antwort-auf-lange-mail",
    "category": "Schreiben & Kommunikation",
    "title": "Kurze Antwort auf lange Mail",
    "description": "Eine ausführliche Nachricht präzise beantworten.",
    "prompt": "Hier ist eine erhaltene Nachricht:\n[NACHRICHT]\n\nMein Standpunkt und meine Informationen: [STANDPUNKT]\nGewünschtes Ergebnis: [ZIEL]\n\nBestimme zuerst, welche Fragen tatsächlich beantwortet werden müssen. Formuliere danach eine knappe Antwort mit klarer Aussage, passendem Ton und gegebenenfalls einer konkreten nächsten Aktion. Erfinde keine Zusagen, Termine oder Tatsachen. Antworte direkt mit dem Entwurf."
  },
  {
    "id": "sachliche-beschwerde",
    "category": "Schreiben & Kommunikation",
    "title": "Sachliche Beschwerde",
    "description": "Ein Problem klar ansprechen, ohne unnötig Druck zu erzeugen.",
    "prompt": "Schreibe eine sachliche Beschwerde zu folgendem Vorgang: [VORGANG].\nGesicherte Fakten: [FAKTEN].\nGewünschte Lösung: [LÖSUNG].\nAdressat: [ADRESSAT].\n\nGliedere die Nachricht in Anlass, überprüfbare Fakten und konkrete Bitte mit angemessener Frist, falls vorgegeben. Vermeide unbelegte Vorwürfe und juristische Behauptungen. Gib zusätzlich eine kürzere, besonders höfliche Fassung."
  },
  {
    "id": "feedback-geben",
    "category": "Schreiben & Kommunikation",
    "title": "Feedback geben",
    "description": "Konkretes, umsetzbares Feedback formulieren.",
    "prompt": "Ich möchte [PERSON_ODER_ROLLE] Rückmeldung zu [VERHALTEN_ODER_ERGEBNIS] geben.\nBeobachtungen: [BEISPIELE].\nWirkung: [AUSWIRKUNG].\nGewünschte Veränderung: [WUNSCH].\n\nFormuliere Feedback ohne Zuschreibungen über Motive oder Charakter. Nutze konkrete Beobachtungen, beschreibe die Wirkung und ende mit einer offenen Frage. Gib eine kurze mündliche und eine schriftliche Version."
  },
  {
    "id": "meeting-einladung-mit-agenda",
    "category": "Schreiben & Kommunikation",
    "title": "Meeting-Einladung mit Agenda",
    "description": "Eine Besprechung sinnvoll vorbereiten.",
    "prompt": "Erstelle eine Einladung für ein Meeting zu [THEMA].\nTeilnehmende: [TEILNEHMENDE].\nVerfügbare Zeit: [DAUER].\nZielentscheidung oder Ergebnis: [ERGEBNIS].\n\nSchreibe eine aussagekräftige Betreffzeile, einen Einleitungssatz, eine nach Minuten gewichtete Agenda und klare Vorbereitungspunkte. Entferne Themen, die nicht zum Ergebnis beitragen. Fehlende Daten als Platzhalter kennzeichnen."
  },
  {
    "id": "absage-ohne-floskeln",
    "category": "Schreiben & Kommunikation",
    "title": "Absage ohne Floskeln",
    "description": "Eine höfliche, eindeutige Absage schreiben.",
    "prompt": "Ich muss [ANFRAGE] von [PERSON] ablehnen.\nBegründung, die ich nennen möchte: [BEGRÜNDUNG].\nBeziehung zur Person: [BEZIEHUNG].\n\nFormuliere eine respektvolle, klare Absage ohne falsche Hoffnungen oder erfundene Ausreden. Biete nur Alternativen an, die tatsächlich aus meinem Kontext folgen. Gib eine kurze Chat-Nachricht und eine formellere E-Mail-Version."
  },
  {
    "id": "text-drastisch-kuerzen",
    "category": "Schreiben & Kommunikation",
    "title": "Text drastisch kürzen",
    "description": "Den Kern eines Textes ohne Bedeutungsverlust erhalten.",
    "prompt": "Kürze [TEXT] für [KANAL] auf höchstens [LÄNGE] Wörter.\nErhalte die Kernaussage, notwendige Zahlen und Einschränkungen. Entferne Wiederholungen, Vorreden und Füllwörter. Wenn wichtige Informationen nicht in die Länge passen, sage nach dem Ergebnis, welche Aussage entfallen musste. Keine neue Fakten hinzufügen."
  },
  {
    "id": "argumentation-schaerfen",
    "category": "Schreiben & Kommunikation",
    "title": "Argumentation schärfen",
    "description": "Eine Position fair und überzeugend formulieren.",
    "prompt": "Meine Position lautet: [POSITION]. Zielgruppe: [ZIELGRUPPE]. Grundlage: [ARGUMENTE].\n\nOrdne die drei stärksten Argumente nach Überzeugungskraft, unterscheide Fakten von Einschätzungen und formuliere das beste berechtigte Gegenargument. Entwirf dann einen nüchternen Text mit These, Belegen, Gegenargument und Fazit. Mache Unsicherheit sichtbar; erfinde keine Quellen."
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
    "id": "sokratischer-tutor",
    "category": "Lernen & Verstehen",
    "title": "Sokratischer Tutor",
    "description": "Eigenständig denken statt nur Lösungen ablesen.",
    "prompt": "Hilf mir, [THEMA] zu lernen. Mein Niveau: [NIVEAU].\nStelle immer nur eine Frage oder Aufgabe auf einmal. Gib bei Fehlern zuerst einen kleinen Hinweis statt sofort die Lösung. Passe die Schwierigkeit an meinen Antworten an. Fasse nach fünf Aufgaben meine Stärken, Lücken und die nächste sinnvolle Übung zusammen. Beginne mit einer kurzen Einstiegsfrage."
  },
  {
    "id": "wissen-in-karteikarten-verwandeln",
    "category": "Lernen & Verstehen",
    "title": "Wissen in Karteikarten verwandeln",
    "description": "Lernmaterial in prüfbare Fragen überführen.",
    "prompt": "Verwandle diesen Stoff in höchstens [ANZAHL] Karteikarten:\n[STOFF]\n\nFormatiere als Tabelle mit Frage, präziser Antwort und Schwierigkeitsgrad. Prüfe Begriffsdefinitionen, Verständnis und Anwendung statt nur Wortlaut. Jede Karte soll eine einzelne Wissenseinheit prüfen. Ergänze nichts, was nicht im Material steht; markiere fehlende Grundlagen."
  },
  {
    "id": "pruefungssimulation",
    "category": "Lernen & Verstehen",
    "title": "Prüfungssimulation",
    "description": "Eine realistische Mini-Prüfung mit Auswertung.",
    "prompt": "Simuliere eine Prüfung zum Thema [THEMA] auf Niveau [NIVEAU] im Format [PRÜFUNGSFORM]. Dauer: [MINUTEN] Minuten.\n\nErstelle zuerst die Aufgaben ohne Lösungen. Verteile leichte, mittlere und anspruchsvolle Fragen. Warte auf meine Antworten, bewerte anhand eines transparenten Punkteschemas und zeige nur dort Lösungswege, wo ich Punkte verloren habe."
  },
  {
    "id": "feynman-test",
    "category": "Lernen & Verstehen",
    "title": "Feynman-Test",
    "description": "Wissenslücken durch eigene Erklärungen erkennen.",
    "prompt": "Ich versuche, [THEMA] in eigenen Worten zu erklären:\n[MEINE_ERKLÄRUNG]\n\nPrüfe auf fachliche Fehler, unpräzise Begriffe und ausgelassene Zusammenhänge. Gib zuerst drei konkrete Rückfragen zu den schwächsten Stellen. Formuliere danach eine verständlichere Erklärung, die nur gesichertes Wissen enthält. Trenne Korrekturen von stilistischen Verbesserungen."
  },
  {
    "id": "praxisuebungen-statt-theorie",
    "category": "Lernen & Verstehen",
    "title": "Praxisübungen statt Theorie",
    "description": "Ein Thema durch reale Mini-Aufgaben lernen.",
    "prompt": "Ich möchte [FÄHIGKEIT] lernen und kann [ZEIT] pro Tag investieren. Vorwissen: [VORWISSEN].\n\nEntwirf sieben kleine Übungen mit konkretem Ergebnis, Zeitbedarf und Prüfkriterium. Beginne mit sehr leichten Aufgaben und steigere die Schwierigkeit. Gib keine langen Theorieabschnitte. Nenne typische Fehler und wie ich erkenne, dass ich bereit für das nächste Niveau bin."
  },
  {
    "id": "fachtext-entschluesseln",
    "category": "Lernen & Verstehen",
    "title": "Fachtext entschlüsseln",
    "description": "Schwierige Texte Schritt für Schritt lesbar machen.",
    "prompt": "Hilf mir, diesen Fachtext zu verstehen:\n[TEXT]\n\nErkläre zuerst den roten Faden in einfacher Sprache. Erstelle ein Glossar für höchstens acht zentrale Begriffe. Übersetze die drei schwierigsten Aussagen in Alltagssprache und nenne jeweils, welche Nuance dabei verloren gehen könnte. Unterscheide belegte Aussagen von Annahmen des Autors."
  },
  {
    "id": "zwei-konzepte-auseinanderhalten",
    "category": "Lernen & Verstehen",
    "title": "Zwei Konzepte auseinanderhalten",
    "description": "Verwechslungsgefahr durch Gegenüberstellung reduzieren.",
    "prompt": "Vergleiche [KONZEPT_A] und [KONZEPT_B] für jemanden mit [VORWISSEN].\n\nZeige Gemeinsamkeiten und Unterschiede in einer Tabelle mit Zweck, Funktionsweise, Grenzen und Beispiel. Nenne danach drei Alltagssituationen, bei denen man beide leicht verwechselt. Schließe mit einer Merkregel und einer Kontrollfrage."
  },
  {
    "id": "lernfortschritt-ehrlich-pruefen",
    "category": "Lernen & Verstehen",
    "title": "Lernfortschritt ehrlich prüfen",
    "description": "Feststellen, was wirklich sitzt und was nicht.",
    "prompt": "Ich habe [THEMA] gelernt. Hier sind meine bisherigen Aufgaben und Antworten:\n[ANTWORTEN]\n\nBewerte unabhängig davon, wie selbstbewusst sie formuliert sind. Teile in sicher beherrscht, unsicher und noch nicht verstanden ein. Begründe jede Einstufung an einer konkreten Stelle. Empfiehl die kleinste sinnvolle nächste Übung und eine Methode zur erneuten Kontrolle nach einigen Tagen."
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
    "id": "projekt-kickoff-in-einer-seite",
    "category": "Arbeit & Organisation",
    "title": "Projekt-Kickoff in einer Seite",
    "description": "Ziel, Umfang und Verantwortung vor dem Start klären.",
    "prompt": "Erstelle ein einseitiges Projektbriefing für [PROJEKT].\nZiel: [ZIEL]. Beteiligte: [BETEILIGTE]. Frist: [FRIST]. Rahmenbedingungen: [RAHMEN].\n\nGliedere in Problem, messbares Ergebnis, Nicht-Ziele, Meilensteine, Verantwortliche, Risiken und offene Entscheidungen. Erfinde keine Zusagen oder Zuständigkeiten; kennzeichne Ungeklärtes deutlich. Maximal eine Bildschirmseite."
  },
  {
    "id": "entscheidungen-aus-meeting-ableiten",
    "category": "Arbeit & Organisation",
    "title": "Entscheidungen aus Meeting ableiten",
    "description": "Beschlüsse, Aufgaben und offene Fragen trennen.",
    "prompt": "Analysiere diese Meeting-Notizen:\n[NOTIZEN]\n\nErstelle drei getrennte Tabellen: getroffene Entscheidungen, vereinbarte Aufgaben und offene Fragen. Aufgaben benötigen Ergebnis, zuständige Person und Frist, sofern genannt. Fehlende Besitzer oder Termine mit „offen“ kennzeichnen. Keine Vorschläge als beschlossene Maßnahmen darstellen."
  },
  {
    "id": "tagesplanung-mit-puffer",
    "category": "Arbeit & Organisation",
    "title": "Tagesplanung mit Puffer",
    "description": "Einen realistischen Tag statt einer Wunschliste planen.",
    "prompt": "Plane meinen Arbeitstag mit [STUNDEN] nutzbaren Stunden.\nAufgaben: [AUFGABEN]. Fixtermine: [TERMINE]. Energiehoch: [ENERGIE].\n\nBerücksichtige Wechselkosten und mindestens 15 % ungeplanten Puffer. Markiere höchstens drei Muss-Aufgaben. Lege Blöcke mit klaren Ergebnissen fest und liste ausdrücklich auf, was heute nicht mehr realistisch ist."
  },
  {
    "id": "standardprozess-dokumentieren",
    "category": "Arbeit & Organisation",
    "title": "Standardprozess dokumentieren",
    "description": "Wiederkehrende Tätigkeiten verständlich aufschreiben.",
    "prompt": "Schreibe eine kurze Arbeitsanweisung für [PROZESS].\nAblaufnotizen: [SCHRITTE]. Zielgruppe: [ZIELGRUPPE].\n\nStruktur: Zweck, Voraussetzungen, Schritte, Kontrollpunkte, häufige Fehler und Abbruch-/Eskalationsfall. Formuliere jeden Schritt als überprüfbare Handlung. Erfinde keine Systemmenüs oder Berechtigungen. Wo Informationen fehlen, formuliere konkrete Rückfragen."
  },
  {
    "id": "aufgaben-delegieren",
    "category": "Arbeit & Organisation",
    "title": "Aufgaben delegieren",
    "description": "Eine Übergabe ohne Missverständnisse vorbereiten.",
    "prompt": "Ich möchte [AUFGABE] an [ROLLE] übergeben.\nZielzustand: [ERGEBNIS]. Deadline: [FRIST]. Freiheiten: [SPIELRAUM].\n\nErstelle eine Übergabenachricht mit Zweck, Lieferobjekt, Definition von fertig, Ressourcen und zwei sinnvollen Zwischenchecks. Trenne verbindliche Vorgaben von optionalen Hinweisen. Keine implizite Dauerüberwachung verlangen."
  },
  {
    "id": "woechentliches-review",
    "category": "Arbeit & Organisation",
    "title": "Wöchentliches Review",
    "description": "Ergebnisse, Engpässe und nächste Schritte herausarbeiten.",
    "prompt": "Führe eine Wochenrückschau auf Basis dieser Fakten durch:\n[WOCHENNOTIZEN]\n\nOrdne in erledigt, blockiert, offen und gelernt. Hebe höchstens drei Ursachen für Verzögerungen hervor und schlage jeweils eine konkrete Gegenmaßnahme vor. Formuliere drei Prioritäten für kommende Woche. Frage bei fehlenden wesentlichen Zahlen nach, statt Leistungen zu erfinden."
  },
  {
    "id": "prozessautomatisierung-pruefen",
    "category": "Arbeit & Organisation",
    "title": "Prozessautomatisierung prüfen",
    "description": "Vor einer Automatisierung Nutzen und Risiken verstehen.",
    "prompt": "Prüfe, ob [PROZESS] automatisiert werden sollte.\nHäufigkeit: [HÄUFIGKEIT]. Aufwand pro Durchlauf: [AUFWAND]. Fehlerquellen: [FEHLER]. Tools: [TOOLS].\n\nUnterscheide Standardisierung, Teilautomatisierung und Vollautomatisierung. Vergleiche Aufwand, erwarteten Nutzen, Datenschutz und Wartung. Schlage einen kleinen Test mit Rückfalloption vor. Berechne Einsparungen nur, wenn belastbare Werte vorliegen."
  },
  {
    "id": "statusupdate-fuer-stakeholder",
    "category": "Arbeit & Organisation",
    "title": "Statusupdate für Stakeholder",
    "description": "Einen Projektstatus ohne Schönfärberei berichten.",
    "prompt": "Schreibe einen knappen Projektstatus zu [PROJEKT] für [ZIELGRUPPE].\nBisherige Ergebnisse: [ERGEBNISSE]. Probleme: [PROBLEME]. Nächste Schritte: [SCHRITTE].\n\nNutze die Abschnitte Stand, Veränderung seit letztem Update, Risiken, benötigte Entscheidung. Benutze keine Ampelfarbe ohne nachvollziehbare Grundlage. Maximal 180 Wörter."
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
    "id": "pre-mortem-durchfuehren",
    "category": "Entscheidungen & Ideen",
    "title": "Pre-Mortem durchführen",
    "description": "Vorab herausfinden, woran ein Vorhaben scheitern könnte.",
    "prompt": "Stell dir vor, [VORHABEN] ist in [ZEITRAUM] gescheitert.\nZiele: [ZIELE]. Rahmenbedingungen: [RAHMEN].\n\nNenne die sieben plausibelsten Gründe rückblickend, nicht bloß generische Risiken. Bewerte Eintrittswahrscheinlichkeit und Schadenshöhe qualitativ, begründe kurz und schlage früh erkennbare Signale sowie eine Vorbeugung vor. Benenne auch Risiken, die wir nicht kontrollieren können."
  },
  {
    "id": "prioritaeten-mit-trade-offs",
    "category": "Entscheidungen & Ideen",
    "title": "Prioritäten mit Trade-offs",
    "description": "Alternativen anhand echter Kriterien bewerten.",
    "prompt": "Ich muss zwischen [OPTIONEN] wählen. Kriterien mit Priorität: [KRITERIEN]. Nicht verhandelbar: [MUSS].\n\nErstelle eine Vergleichsmatrix und unterscheide harte Ausschlusskriterien von weichen Vorlieben. Trage nur belegte Informationen ein; nutze „unbekannt“ für Lücken. Zeige, welche Annahme die Entscheidung am ehesten umdrehen könnte. Gib erst danach eine bedingte Empfehlung."
  },
  {
    "id": "zweitmeinung-als-gegenposition",
    "category": "Entscheidungen & Ideen",
    "title": "Zweitmeinung als Gegenposition",
    "description": "Eigene Pläne ernsthaft hinterfragen lassen.",
    "prompt": "Meine aktuelle Entscheidung lautet: [ENTSCHEIDUNG]. Gründe: [GRÜNDE].\n\nArgumentiere zunächst so stark wie möglich für eine andere vernünftige Position. Prüfe danach meine wichtigsten Annahmen und mögliche blinde Flecken. Vermeide künstliche Ausgewogenheit: Wo eine Seite deutlich besser begründet ist, sage das. Schließe mit drei Fragen, die den Ausschlag geben würden."
  },
  {
    "id": "idee-in-experiment-uebersetzen",
    "category": "Entscheidungen & Ideen",
    "title": "Idee in Experiment übersetzen",
    "description": "Eine Annahme mit wenig Aufwand testen.",
    "prompt": "Idee: [IDEE]. Zielgruppe: [ZIELGRUPPE]. Kritische Annahme: [ANNAHME]. Ressourcen: [RESSOURCEN].\n\nEntwirf ein Experiment, das maximal [ZEIT] dauert. Definiere Testhandlung, messbares Erfolgskriterium, notwendige Beobachtungen und Abbruchregel. Trenne Signale von Selbstbestätigung. Nenne vor allem, was ein negatives Ergebnis bedeuten würde."
  },
  {
    "id": "chancen-gegen-aufwand-abwaegen",
    "category": "Entscheidungen & Ideen",
    "title": "Chancen gegen Aufwand abwägen",
    "description": "Ideen nach Wirkung und Umsetzbarkeit sortieren.",
    "prompt": "Ich habe diese Ideen: [IDEEN]. Meine Ressourcen: [RESSOURCEN]. Ziel: [ZIEL].\n\nBewerte jede Idee qualitativ nach erwarteter Wirkung, Aufwand, Unsicherheit und Reversibilität. Keine erfundenen Punktwerte oder Renditen. Ordne die Ideen nach einer begründeten Umsetzungsreihenfolge und schlage nur für die stärksten zwei den ersten Schritt vor."
  },
  {
    "id": "nicht-ziele-definieren",
    "category": "Entscheidungen & Ideen",
    "title": "Nicht-Ziele definieren",
    "description": "Ein Projekt durch bewusste Abgrenzung vereinfachen.",
    "prompt": "Ich plane [VORHABEN]. Unverzichtbares Ergebnis: [ERGEBNIS]. Häufige Zusatzwünsche: [ZUSATZWÜNSCHE].\n\nDefiniere In Scope, Out of Scope und später möglich. Begründe jede Grenze aus dem Projektziel. Formuliere eine kurze Regel, nach der wir künftige Änderungswünsche prüfen. Zeige, welche Entscheidung noch vom Auftraggeber bestätigt werden muss."
  },
  {
    "id": "perspektivenwechsel",
    "category": "Entscheidungen & Ideen",
    "title": "Perspektivenwechsel",
    "description": "Ein Problem aus mehreren Rollen betrachten.",
    "prompt": "Problem: [PROBLEM]. Beteiligte Rollen: [ROLLEN].\n\nBeschreibe je Rolle Ziele, Befürchtungen, Wissensstand und mögliche Fehlannahmen. Trenne gesicherte Informationen von Hypothesen. Zeige anschließend, wo Interessen übereinstimmen und wo ein echter Konflikt bleibt. Schlage eine Lösung vor, die nicht nur eine einzelne Perspektive optimiert."
  },
  {
    "id": "entscheidung-rueckgaengig-machen",
    "category": "Entscheidungen & Ideen",
    "title": "Entscheidung rückgängig machen?",
    "description": "Unterscheiden zwischen Durchhalten und Kurswechsel.",
    "prompt": "Ich überlege, [ENTSCHEIDUNG] zu revidieren.\nUrsprüngliche Annahmen: [ANNAHMEN]. Neue Informationen: [NEU]. Bisheriger Aufwand: [AUFWAND].\n\nPrüfe, ob neue Daten die Prognose verändern oder nur die Stimmung. Benenne versunkene Kosten, Wechselkosten und reversible Optionen. Nenne konkrete Bedingungen, unter denen Weitermachen bzw. Umsteuern sinnvoll wäre. Gib keine Scheinsicherheit."
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
    "id": "quellenlage-pruefen",
    "category": "Recherche & Analyse",
    "title": "Quellenlage prüfen",
    "description": "Die Belastbarkeit einer Aussage systematisch einschätzen.",
    "prompt": "Zu prüfen ist die Aussage: [BEHAUPTUNG]. Vorliegende Quellen: [QUELLEN].\n\nTrenne Primärquellen, Sekundärberichte und Meinungen. Prüfe Veröffentlichungsdatum, Originalkontext, mögliche Interessenkonflikte und unabhängige Bestätigung. Erstelle ein kurzes Urteil mit „belegt“, „teilweise belegt“, „unbelegt“ oder „widerlegt“ samt Begründung. Wenn du keinen Webzugriff hast, sage, was nicht verifiziert werden konnte."
  },
  {
    "id": "recherchefragen-aufbauen",
    "category": "Recherche & Analyse",
    "title": "Recherchefragen aufbauen",
    "description": "Ein komplexes Thema in überprüfbare Teilfragen zerlegen.",
    "prompt": "Ich muss [THEMA] recherchieren, um [ENTSCHEIDUNG] zu treffen.\n\nLeite höchstens acht konkrete Recherchefragen ab. Ordne sie nach Relevanz und definiere pro Frage, welche Art Quelle geeignet ist. Unterscheide zeitkritische Fakten von stabilem Grundlagenwissen. Markiere, welche fehlenden Informationen die spätere Entscheidung am stärksten beeinflussen."
  },
  {
    "id": "studie-verstaendlich-bewerten",
    "category": "Recherche & Analyse",
    "title": "Studie verständlich bewerten",
    "description": "Ergebnisse, Methodik und Grenzen auseinanderhalten.",
    "prompt": "Analysiere diese Studie oder Zusammenfassung:\n[STUDIE]\n\nErstelle eine Übersicht mit Fragestellung, Stichprobe, Methode, wichtigstem Ergebnis und wesentlichen Einschränkungen. Prüfe insbesondere Korrelation versus Kausalität, mögliche Verzerrungen und Generalisierbarkeit. Nenne keine Genauigkeit oder statistische Signifikanz, die im Text nicht belegt ist."
  },
  {
    "id": "datierte-marktuebersicht",
    "category": "Recherche & Analyse",
    "title": "Datierte Marktübersicht",
    "description": "Einen Markt ohne falsche Aktualitätsbehauptungen überblicken.",
    "prompt": "Erstelle eine Marktübersicht zu [MARKT] in [REGION] mit Stand [DATUM].\nWichtig sind [KRITERIEN].\n\nGliedere nach Segmenten, typischen Angeboten, relevanten Akteuren, Preismodellen und offenen Risiken. Markiere jeden zeitabhängigen Fakt mit Quelle und Datum, sofern Recherche verfügbar ist. Ohne aktuelle Quellen liefere nur eine Recherchevorlage und kennzeichne unverifizierte Punkte."
  },
  {
    "id": "argumente-aus-dokumenten-extrahieren",
    "category": "Recherche & Analyse",
    "title": "Argumente aus Dokumenten extrahieren",
    "description": "Lange Quellen transparent auswerten.",
    "prompt": "Analysiere diese Unterlagen zum Thema [THEMA]:\n[DOKUMENTE]\n\nExtrahiere die wichtigsten Aussagen mit präzisen Fundstellen, wenn vorhanden. Gruppiere Übereinstimmungen, Widersprüche und offene Fragen. Trenne Zitate, Paraphrasen und deine Interpretation. Erstelle am Schluss eine kurze Übersicht dessen, was sich allein aus den Dokumenten NICHT beantworten lässt."
  },
  {
    "id": "preisvergleich-mit-gesamtkosten",
    "category": "Recherche & Analyse",
    "title": "Preisvergleich mit Gesamtkosten",
    "description": "Angebote über den Einstiegspreis hinaus vergleichen.",
    "prompt": "Vergleiche [ANGEBOTE] für [NUTZUNG] über [ZEITRAUM].\n\nBerücksichtige Anschaffung, laufende Kosten, Zubehör, Garantie, Folgekosten und Kündigungsbedingungen. Berechne eine Gesamtsumme nur aus bekannten Zahlen und kennzeichne Annahmen. Zeige Nachteile und entscheidende Datenlücken. Empfiehl eine Option für mein Szenario, nicht pauschal die billigste."
  },
  {
    "id": "zahlen-auf-widersprueche-pruefen",
    "category": "Recherche & Analyse",
    "title": "Zahlen auf Widersprüche prüfen",
    "description": "Eine Tabelle oder Aussage auf Plausibilität prüfen.",
    "prompt": "Prüfe folgende Zahlen und Aussagen auf interne Konsistenz:\n[DATEN]\n\nKontrolliere Einheiten, Prozentbasen, Summen, Bezugszeiträume und doppelte Zählungen. Liste konkrete Auffälligkeiten mit Fundstelle und Rechenweg auf. Unterscheide Fehler von lediglich ungewöhnlichen Werten. Ändere keine Werte stillschweigend."
  },
  {
    "id": "interviewfragen-fuer-recherche",
    "category": "Recherche & Analyse",
    "title": "Interviewfragen für Recherche",
    "description": "Gezielte Fragen statt beliebiger Gesprächsleitfäden.",
    "prompt": "Ich interviewe [ZIELGRUPPE] zum Thema [THEMA], um [FRAGE] zu beantworten.\n\nSchreibe zwölf offene Fragen in sinnvoller Reihenfolge. Vermeide Suggestivfragen, Doppel-Fragen und bereits unterstellte Probleme. Ergänze zu jeder dritten Frage eine mögliche Nachfrage nach konkreten Beispielen. Gib einen kurzen Hinweis zur Auswertung der Antworten."
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
    "id": "bug-report-verbessern",
    "category": "Programmieren & Technik",
    "title": "Bug-Report verbessern",
    "description": "Aus unscharfer Fehlermeldung einen reproduzierbaren Fall machen.",
    "prompt": "Erstelle aus diesen Angaben einen reproduzierbaren Bug-Report:\n[FEHLERBESCHREIBUNG]\nSystem: [UMGEBUNG]. Erwartetes Verhalten: [ERWARTET].\n\nGliedere in Schritte zur Reproduktion, Ist/Soll, Logs, mögliche Auslöser und noch fehlende Informationen. Leite keine Ursache als Tatsache ab. Formuliere eine minimale Testidee, um die wichtigste Hypothese zu prüfen."
  },
  {
    "id": "bestehenden-code-verstehen",
    "category": "Programmieren & Technik",
    "title": "Bestehenden Code verstehen",
    "description": "Einen fremden Codeabschnitt ohne Umbau erklären.",
    "prompt": "Erkläre den folgenden Code auf Niveau [NIVEAU]:\n[CODE]\n\nBeginne mit Zweck und Datenfluss. Gehe anschließend die relevanten Funktionen, Seiteneffekte und Abhängigkeiten durch. Markiere Stellen, für die Kontext aus anderen Dateien fehlt. Gib ein konkretes Beispiel mit Eingabe und Ausgabe, wenn es sich aus dem Code sicher ableiten lässt. Verändere nichts."
  },
  {
    "id": "kleine-aenderung-sicher-planen",
    "category": "Programmieren & Technik",
    "title": "Kleine Änderung sicher planen",
    "description": "Den Scope einer Codeänderung eng halten.",
    "prompt": "Ich möchte in [PROJEKT] folgende Änderung: [ÄNDERUNG].\nRelevante Dateien: [DATEIEN]. Einschränkungen: [EINSCHRÄNKUNGEN].\n\nErstelle einen minimalen Implementierungsplan mit betroffenen Stellen, Risiken und relevanten Tests. Nenne ausdrücklich, was nicht geändert werden soll. Stoppe beim kleinsten funktionierenden Ergebnis. Keine zusätzlichen Refactorings ohne sachliche Notwendigkeit."
  },
  {
    "id": "testfaelle-aus-anforderungen",
    "category": "Programmieren & Technik",
    "title": "Testfälle aus Anforderungen",
    "description": "Akzeptanzkriterien systematisch abdecken.",
    "prompt": "Leite aus diesen Anforderungen Testfälle ab:\n[ANFORDERUNGEN]\n\nErstelle eine Tabelle mit Test-ID, Ausgangslage, Aktion, erwartetes Ergebnis und Priorität. Decke Happy Path, Grenzen, ungültige Eingaben und Rückfallverhalten ab. Vermeide doppelte Fälle. Weisen Anforderungen keine eindeutigen erwarteten Ergebnisse zu, markiere sie als offene Spezifikationsfrage."
  },
  {
    "id": "api-vertrag-entwerfen",
    "category": "Programmieren & Technik",
    "title": "API-Vertrag entwerfen",
    "description": "Eine Schnittstelle vor der Implementierung festlegen.",
    "prompt": "Plane eine API für [ANWENDUNGSFALL]. Nutzerrollen: [ROLLEN]. Datenobjekte: [DATEN].\n\nSchlage Endpunkte mit Methode, Request, Response, Statuscodes, Authentifizierung und Validierungsregeln vor. Zeige eine JSON-Beispielanfrage und -antwort mit fiktiven Daten. Trenne zwingende Anforderungen von Designentscheidungen. Berücksichtige Fehlerfälle und Versionskompatibilität."
  },
  {
    "id": "sicherheitsreview-auf-anwendungsebene",
    "category": "Programmieren & Technik",
    "title": "Sicherheitsreview auf Anwendungsebene",
    "description": "Häufige Risiken in einer App erkennen.",
    "prompt": "Prüfe dieses Anwendungskonzept oder diesen Code auf Sicherheitsrisiken:\n[KONZEPT_ODER_CODE]\nTechnologie: [STACK].\n\nBetrachte Eingabevalidierung, Authentifizierung, Autorisierung, Geheimnisse, sensible Daten und Logging. Ordne Beobachtungen nach Auswirkung und Wahrscheinlichkeit; nenne konkrete Gegenmaßnahmen und Tests. Behaupte keine bestätigte Schwachstelle ohne nachvollziehbaren Beleg. Keine offensiven Angriffsschritte."
  },
  {
    "id": "datenmodell-fuer-mvp",
    "category": "Programmieren & Technik",
    "title": "Datenmodell für MVP",
    "description": "Ein überschaubares Schema mit Beziehungen planen.",
    "prompt": "Entwirf ein Datenmodell für [ANWENDUNG].\nAnwendungsfälle: [USE_CASES]. Daten: [DATEN].\n\nGib Entitäten mit Schlüsselfeldern, Beziehungen, eindeutigen Einschränkungen und sinnvollen Indizes an. Erkläre zwei wesentliche Modellierungsentscheidungen und was bewusst noch nicht modelliert wird. Zeige ein kleines Beispieldatenset. Priorisiere Einfachheit und spätere Erweiterbarkeit."
  },
  {
    "id": "deployment-checkliste",
    "category": "Programmieren & Technik",
    "title": "Deployment-Checkliste",
    "description": "Vor dem Go-live kritische Punkte abhaken.",
    "prompt": "Erstelle eine Deployment-Checkliste für [PROJEKT] mit Stack [STACK] und Hosting [HOSTING].\n\nGliedere in Konfiguration, Backups, Secrets, Migrationen, Monitoring, Rollback und Smoke-Tests. Formuliere jeden Prüfpunkt als beobachtbares Ja/Nein-Kriterium. Nenne Abbruchbedingungen und den minimalen Plan zur Wiederherstellung. Keine Annahmen über bereits aktivierte Dienste."
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
    "id": "einfacher-essensplan",
    "category": "Alltag & Planung",
    "title": "Einfacher Essensplan",
    "description": "Alltagstaugliche Mahlzeiten mit Resteverwertung.",
    "prompt": "Plane [TAGE] Tage Essen für [PERSONEN] Personen.\nVorlieben: [VORLIEBEN]. Unverträglichkeiten: [UNVERTRÄGLICHKEITEN]. Budget: [BUDGET]. Zeit pro Mahlzeit: [ZEIT].\n\nErstelle Gerichte mit grober Zubereitungszeit, einer zusammengefassten Einkaufsliste und zwei Möglichkeiten zur Resteverwertung. Vermeide exotische Zutaten ohne Nutzen. Für Allergien keine ungeprüfte Produktsicherheit behaupten."
  },
  {
    "id": "umzug-organisieren",
    "category": "Alltag & Planung",
    "title": "Umzug organisieren",
    "description": "Wichtige Schritte zeitlich priorisieren.",
    "prompt": "Ich ziehe von [AUSGANGSORT] nach [ZIELORT] am [DATUM].\nHaushalt: [UMFANG]. Helfer: [HELFER]. Besonderheiten: [BESONDERHEITEN].\n\nErstelle eine Checkliste mit Phasen vor, am und nach dem Umzug. Unterscheide zeitkritische Aufgaben von optionaler Optimierung. Markiere regionale oder vertragsabhängige Pflichten als zu prüfen. Gib die fünf nächsten konkreten Schritte an."
  },
  {
    "id": "packliste-nach-kontext",
    "category": "Alltag & Planung",
    "title": "Packliste nach Kontext",
    "description": "Nur mitnehmen, was zur Reise passt.",
    "prompt": "Erstelle eine Packliste für [REISEART] nach [ZIEL] für [DAUER] im Zeitraum [ZEITRAUM].\nGepäck: [GEPÄCK]. Aktivitäten: [AKTIVITÄTEN].\n\nSortiere in Dokumente, Kleidung, Technik, Hygiene und Besonderes. Markiere Dinge, deren Bedarf vom Wetter oder von lokalen Regeln abhängt. Vermeide Doppelungen und unterscheide Muss von optional."
  },
  {
    "id": "monatsbudget-aufteilen",
    "category": "Alltag & Planung",
    "title": "Monatsbudget aufteilen",
    "description": "Ausgaben und Puffer nachvollziehbar planen.",
    "prompt": "Hilf mir, ein Monatsbudget aufzubauen.\nNettoeinnahmen: [EINNAHMEN]. Fixkosten: [FIXKOSTEN]. Variable Ausgaben: [VARIABLE_KOSTEN]. Ziele: [ZIELE].\n\nBerechne frei verfügbaren Betrag und einfache Szenarien für Sparrate und Puffer. Zeige alle Rechenschritte und fehlenden Angaben. Mach keine Anlage- oder Steuerzusagen. Die Planung soll realistisch sein, nicht maximal restriktiv."
  },
  {
    "id": "haushaltsaufgaben-fair-verteilen",
    "category": "Alltag & Planung",
    "title": "Haushaltsaufgaben fair verteilen",
    "description": "Einen tragfähigen Plan statt vager Vorsätze erstellen.",
    "prompt": "Verteile Haushaltstätigkeiten für [PERSONEN] mit Verfügbarkeiten [VERFÜGBARKEIT] und Aufgaben [AUFGABEN].\n\nUnterscheide tägliche, wöchentliche und gelegentliche Arbeiten. Berücksichtige Zeit, Belastung und Präferenzen. Erstelle einen Wochenplan mit Vertretungsregel und einer kurzen Methode, nach zwei Wochen fair nachzujustieren."
  },
  {
    "id": "gewohnheit-klein-beginnen",
    "category": "Alltag & Planung",
    "title": "Gewohnheit klein beginnen",
    "description": "Eine realistische Routine an bestehende Abläufe hängen.",
    "prompt": "Ich möchte [GEWOHNHEIT] aufbauen. Bisherige Hindernisse: [HINDERNISSE]. Geeigneter Auslöser im Alltag: [AUSLÖSER].\n\nEntwirf eine Zwei-Minuten-Einstiegsvariante, eine normale Variante und einen Rückfallplan für schlechte Tage. Definiere ein beobachtbares Wochenziel ohne Perfektionsanspruch. Nenne, welche Umgebungsänderung am meisten helfen könnte."
  },
  {
    "id": "reparieren-oder-ersetzen",
    "category": "Alltag & Planung",
    "title": "Reparieren oder ersetzen",
    "description": "Kosten, Nutzen und Unsicherheit getrennt betrachten.",
    "prompt": "Soll ich [GEGENSTAND] reparieren oder ersetzen?\nAlter/Zustand: [ZUSTAND]. Reparaturangebot: [REPARATUR]. Ersatzangebot: [ERSATZ]. Nutzung: [NUTZUNG].\n\nVergleiche Gesamtkosten, erwartbare Lebensdauer, Ausfallrisiko und Umweltaspekte. Kennzeichne fehlende Angaben; schätze nichts als Fakt. Gib eine Entscheidungsregel an, ab welchem zusätzlichen Aufwand sich welche Alternative lohnt."
  },
  {
    "id": "freizeit-bewusst-planen",
    "category": "Alltag & Planung",
    "title": "Freizeit bewusst planen",
    "description": "Eine Woche mit echten Pausen gestalten.",
    "prompt": "Ich habe pro Woche [FREIE_ZEIT] Freizeit. Verpflichtungen: [VERPFLICHTUNGEN]. Was mir wichtig ist: [PRIORITÄTEN].\n\nPlane maximal drei aktive Vorhaben und mindestens zwei absichtlich freie Zeitblöcke. Berücksichtige Erholung und spontane Änderungen. Gib mir eine einfache Regel, um neue Ideen zu parken, statt sie sofort zu Aufgaben zu machen."
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
  },
  {
    "id": "prompt-mit-beispiel-kalibrieren",
    "category": "KI & Prompting",
    "title": "Prompt mit Beispiel kalibrieren",
    "description": "Aus einem Beispiel das gewünschte Ausgabeformat ableiten.",
    "prompt": "Ich möchte wiederholt Antworten im folgenden Stil:\n[BEISPIEL]\nNeue Aufgabe: [AUFGABE]\n\nLeite aus dem Beispiel die relevanten Merkmale für Aufbau, Tiefe und Ton ab. Formuliere einen wiederverwendbaren Prompt, der diese Eigenschaften konkret beschreibt, ohne wortwörtliche Kopien zu verlangen. Füge eine kurze Checkliste hinzu, mit der ich Ergebnisse prüfen kann."
  },
  {
    "id": "prompt-gegen-halluzinationen-haerten",
    "category": "KI & Prompting",
    "title": "Prompt gegen Halluzinationen härten",
    "description": "Lücken, Unsicherheit und Belege richtig behandeln.",
    "prompt": "Prüfe folgenden Prompt auf Stellen, die erfundene Fakten begünstigen:\n[PROMPT]\n\nÜberarbeite ihn so, dass Fakten und Annahmen getrennt werden, fehlende Informationen gekennzeichnet sind und bei zeitabhängigen Aussagen Quellen oder eine klare Einschränkung verlangt werden. Erhalte die ursprüngliche Aufgabe. Gib zuerst den verbesserten Prompt, danach die drei wichtigsten Schutzmaßnahmen."
  },
  {
    "id": "ausgabeformat-exakt-festlegen",
    "category": "KI & Prompting",
    "title": "Ausgabeformat exakt festlegen",
    "description": "Ein verlässliches Format ohne unnötige Regeln definieren.",
    "prompt": "Meine Aufgabe: [AUFGABE]. Gewünschtes Format: [FORMAT]. Pflichtfelder: [FELDER].\n\nErstelle einen Prompt mit präziser Ausgabe-Spezifikation, einem kleinen Beispiel und Regeln für fehlende Werte. Halte Anweisungen so kurz wie möglich. Wenn das Format widersprüchliche Anforderungen enthält, zeige sie zuerst und schlage eine konsistente Version vor."
  },
  {
    "id": "prompt-in-zwei-schritte-aufteilen",
    "category": "KI & Prompting",
    "title": "Prompt in zwei Schritte aufteilen",
    "description": "Komplexe Aufgaben kontrolliert bearbeiten.",
    "prompt": "Diese Aufgabe liefert oft unsaubere Antworten: [AUFGABE].\n\nTeile sie in zwei aufeinander aufbauende Prompts: Zuerst Anforderungen, Datenlücken und Vorgehen klären; danach mit bestätigtem Kontext das Ergebnis erzeugen. Definiere für beide Schritte konkrete Outputs. Baue eine Stop-Regel ein, damit nicht unnötig weitergearbeitet wird."
  },
  {
    "id": "ki-als-kritischer-redakteur",
    "category": "KI & Prompting",
    "title": "KI als kritischer Redakteur",
    "description": "Einen Entwurf auf Substanz statt Stilglanz prüfen.",
    "prompt": "Begutachte diesen KI-generierten Entwurf:\n[ENTWURF]\nZweck: [ZWECK]. Zielgruppe: [ZIELGRUPPE].\n\nMarkiere unbelegte Behauptungen, generische Phrasen, Wiederholungen, schwache Übergänge und fehlenden Kontext. Priorisiere maximal fünf Änderungen. Überarbeite danach nur die betroffenen Stellen. Bewahre Stimme und Fakten des Originals."
  },
  {
    "id": "modellvergleich-fair-gestalten",
    "category": "KI & Prompting",
    "title": "Modellvergleich fair gestalten",
    "description": "Zwei KI-Modelle mit derselben Aufgabe testen.",
    "prompt": "Erstelle einen fairen Vergleichstest für [MODELL_A] und [MODELL_B] zum Einsatzzweck [EINSATZ].\n\nDefiniere fünf repräsentative Aufgaben, identische Eingaben, Bewertungskriterien, ein einfaches Punkteschema und eine Tabelle zur Ergebniserfassung. Berücksichtige Qualität, Geschwindigkeit, Korrekturbedarf und Kosten nur bei messbaren Daten. Werte keine Modelle ohne tatsächliche Testergebnisse aus."
  },
  {
    "id": "wiederverwendbare-systemanweisung",
    "category": "KI & Prompting",
    "title": "Wiederverwendbare Systemanweisung",
    "description": "Stabile Grundregeln von der einzelnen Aufgabe trennen.",
    "prompt": "Ich nutze KI regelmäßig für [ARBEITSBEREICH]. Wiederkehrende Anforderungen: [ANFORDERUNGEN].\n\nErstelle eine kurze, allgemeine Grundanweisung mit Ziel, Stil, Umgang mit Unsicherheit, Datenschutzgrenzen und Qualitätskriterien. Trenne sie von einem variablen Aufgabenteil. Vermeide absolute Regeln, die sinnvolle Ausnahmen blockieren. Maximal 250 Wörter."
  },
  {
    "id": "ergebnis-mit-rubrik-pruefen",
    "category": "KI & Prompting",
    "title": "Ergebnis mit Rubrik prüfen",
    "description": "Eine Antwort anhand transparenter Kriterien bewerten.",
    "prompt": "Entwickle eine Bewertungsrubrik für KI-Ergebnisse zu [AUFGABE].\nQualitätsmaßstab: [KRITERIEN].\n\nLege vier bis sechs klar unterscheidbare Kriterien mit je einer beobachtbaren Skala von 0 bis 3 fest. Zeige, wie eine gute und eine schlechte Antwort in je einem Satz aussehen. Erfinde keine Bewertung realer Antworten, wenn kein Ergebnis vorliegt."
  },
  {
    "id": "zielgruppe-konkret-beschreiben",
    "category": "Marketing & Content",
    "title": "Zielgruppe konkret beschreiben",
    "description": "Bedürfnisse aus echten Beobachtungen ableiten.",
    "prompt": "Analysiere die Zielgruppe für [PRODUKT_ODER_ANGEBOT].\nBekannte Kundenaussagen: [KUNDENAUSSAGEN]. Markt: [MARKT].\n\nUnterscheide belegte Bedürfnisse von Hypothesen. Beschreibe typische Auslöser, Einwände, Alternativen und Entscheidungskriterien. Gib fünf konkrete Fragen an, mit denen wir ungesicherte Annahmen im Gespräch überprüfen können. Keine frei erfundenen Personas."
  },
  {
    "id": "landingpage-strukturieren",
    "category": "Marketing & Content",
    "title": "Landingpage strukturieren",
    "description": "Eine überzeugende Seite ohne leere Buzzwords planen.",
    "prompt": "Entwirf eine Landingpage-Struktur für [ANGEBOT]. Zielgruppe: [ZIELGRUPPE]. Hauptnutzen: [NUTZEN]. Nachweise: [NACHWEISE].\n\nLiefere Reihenfolge und Zweck der Abschnitte, eine klare Headline, konkreten Einleitungstext und Call-to-Action. Wo Belege fehlen, nutze keine erfundenen Zahlen, Kundenstimmen oder Garantien. Bewerte die erste Bildschirmansicht besonders kritisch."
  },
  {
    "id": "contentplan-aus-echten-themen",
    "category": "Marketing & Content",
    "title": "Contentplan aus echten Themen",
    "description": "Nützliche Inhalte statt Reichweitenfüller entwickeln.",
    "prompt": "Erstelle einen Contentplan für [KANAL] für [ZIELGRUPPE] über [ZEITRAUM]. Themenexpertise: [EXPERTISE]. Ziel: [ZIEL].\n\nPlane höchstens [ANZAHL] Beiträge mit konkretem Leserproblem, Kernnutzen, Format und Aufwand. Mische Grundlagen, Praxisbeispiele und häufige Fragen. Vermeide beliebige Motivationstexte und virale Versprechen. Weise auf Themen hin, die recherchiert werden müssen."
  },
  {
    "id": "produktbeschreibung-mit-substanz",
    "category": "Marketing & Content",
    "title": "Produktbeschreibung mit Substanz",
    "description": "Produkteigenschaften in verständlichen Kundennutzen übersetzen.",
    "prompt": "Schreibe eine Produktbeschreibung für [PRODUKT]. Verifizierte Eigenschaften: [EIGENSCHAFTEN]. Zielgruppe: [ZIELGRUPPE]. Nutzungssituation: [NUTZUNG].\n\nErstelle einen präzisen Einstieg, drei konkrete Vorteile mit Bezug auf Eigenschaften und ehrliche Grenzen. Benutze keine unbelegten Superlative oder erfundenen Zertifikate. Ergänze am Ende die wichtigsten noch fehlenden Produktinformationen."
  },
  {
    "id": "newsletter-mit-echtem-mehrwert",
    "category": "Marketing & Content",
    "title": "Newsletter mit echtem Mehrwert",
    "description": "Eine nützliche Ausgabe statt einer Werbemail schreiben.",
    "prompt": "Erstelle einen Newsletter zu [THEMA] für [LESER]. Material und Fakten: [MATERIAL]. Ziel: [ZIEL].\n\nSchreibe eine sachliche Betreffzeile, einen kurzen Einstieg, drei konkrete Erkenntnisse und einen passenden nächsten Schritt. Behalte einen einheitlichen Ton bei und vermeide künstliche Dringlichkeit. Falls Zahlen genannt werden, kennzeichne ihren Ursprung."
  },
  {
    "id": "website-text-entfloskeln",
    "category": "Marketing & Content",
    "title": "Website-Text entfloskeln",
    "description": "Generische Formulierungen durch Aussagekraft ersetzen.",
    "prompt": "Bewerte diesen Website-Text:\n[TEXT]\n\nMarkiere leere Werbephrasen, unklare Versprechen und fehlende Informationen. Ersetze sie durch überprüfbare Aussagen aus [FAKTEN]. Erhalte die Markenstimme [TON]. Gib eine gestraffte Fassung und eine Liste offener Belege, die vor Veröffentlichung ergänzt werden müssten."
  },
  {
    "id": "faq-aus-kundenfragen",
    "category": "Marketing & Content",
    "title": "FAQ aus Kundenfragen",
    "description": "Fragen realistisch und verständlich beantworten.",
    "prompt": "Erstelle eine FAQ aus diesen echten Fragen und Informationen:\n[FRAGEN_UND_FAKTEN]\n\nGruppiere verwandte Fragen, formuliere klare Antworten in maximal 90 Wörtern und verlinke gedanklich auf einen passenden nächsten Schritt. Erfinde keine Preise, Lieferzeiten oder Bedingungen. Kennzeichne jede Frage, für die eine belastbare Antwort fehlt."
  },
  {
    "id": "kampagnen-idee-klein-testen",
    "category": "Marketing & Content",
    "title": "Kampagnen-Idee klein testen",
    "description": "Eine Marketinghypothese mit Messplan überprüfen.",
    "prompt": "Ich möchte [ANGEBOT] über [KANAL] bewerben. Ziel: [ZIEL]. Budget: [BUDGET]. Zielgruppe: [ZIELGRUPPE].\n\nSchlage zwei klar unterschiedliche Botschaften für einen Test vor. Definiere Testzeitraum, Erfolgssignal, sinnvolle Vergleichsbasis und Abbruchkriterium. Trenne messbare Reaktionen von bloßen Klickzahlen. Keine Performance-Prognosen ohne Daten."
  },
  {
    "id": "lebenslauf-auf-stelle-zuschneiden",
    "category": "Karriere & Bewerbung",
    "title": "Lebenslauf auf Stelle zuschneiden",
    "description": "Vorhandene Erfahrung passend und wahrheitsgemäß darstellen.",
    "prompt": "Passe meine Berufserfahrung an folgende Stelle an:\nStellenanzeige: [STELLE]\nErfahrung: [ERFAHRUNG]\n\nExtrahiere die fünf relevantesten Anforderungen und ordne echte Erfahrungen zu. Schreibe präzise Bulletpoints mit Tätigkeit und Ergebnis, soweit belegt. Erfinde keine Erfolge oder Tools. Zeige, welche Anforderungen durch mein Profil noch nicht nachgewiesen sind."
  },
  {
    "id": "anschreiben-ohne-standardfloskeln",
    "category": "Karriere & Bewerbung",
    "title": "Anschreiben ohne Standardfloskeln",
    "description": "Eine glaubwürdige Motivation formulieren.",
    "prompt": "Schreibe ein kurzes Anschreiben für [ROLLE] bei [UNTERNEHMEN].\nMein Hintergrund: [ERFAHRUNG]. Konkrete Motivation: [MOTIVATION]. Stellenausschreibung: [AUSSCHREIBUNG].\n\nVerbinde zwei passende Anforderungen mit nachweisbaren Erfahrungen. Vermeide „hiermit bewerbe ich mich“, allgemeine Begeisterung und erfundene Leistungen. Länge maximal 250 Wörter. Markiere Fakten, die ich vor Versand prüfen muss."
  },
  {
    "id": "bewerbungsgespraech-ueben",
    "category": "Karriere & Bewerbung",
    "title": "Bewerbungsgespräch üben",
    "description": "Fragen beantworten und ehrliches Feedback erhalten.",
    "prompt": "Simuliere ein Vorstellungsgespräch für [ROLLE] in [BRANCHE]. Mein Profil: [PROFIL].\n\nStelle eine Frage nach der anderen, darunter Fachfragen, Situationen und Motivation. Warte auf meine Antwort. Bewerte anschließend Struktur, Relevanz, Glaubwürdigkeit und Lücken. Gib eine bessere Antwortstruktur vor, ohne mir Erfahrungen in den Mund zu legen."
  },
  {
    "id": "gehaltsgespraech-vorbereiten",
    "category": "Karriere & Bewerbung",
    "title": "Gehaltsgespräch vorbereiten",
    "description": "Eine sachliche Verhandlung mit Belegen planen.",
    "prompt": "Ich bereite ein Gehaltsgespräch vor. Rolle: [ROLLE]. Verantwortung: [VERANTWORTUNG]. Erfolge: [ERFOLGE]. Ziel: [ZIEL].\n\nErstelle eine kurze Gesprächsstruktur mit begründeter Forderung, zwei Nachweisen und möglichen Reaktionen auf Einwände. Trenne persönliche Ziele von objektiv belegten Beiträgen. Ohne Markt- oder Tarifdaten keine marktüblichen Beträge behaupten."
  },
  {
    "id": "kompetenzluecken-identifizieren",
    "category": "Karriere & Bewerbung",
    "title": "Kompetenzlücken identifizieren",
    "description": "Einen Karrierewunsch in konkrete Lernfelder zerlegen.",
    "prompt": "Ich möchte mittelfristig [ZIELROLLE] erreichen. Aktuelle Fähigkeiten: [FÄHIGKEITEN]. Anforderungen: [ANFORDERUNGEN].\n\nErstelle eine Gap-Analyse: vorhanden, teilweise, fehlt, noch unklar. Priorisiere drei Lücken nach Nutzen und Lernaufwand. Definiere für jede eine kleine nachweisbare Übungsaufgabe. Vermeide Zertifikats-Empfehlungen ohne Bezug zur Rolle."
  },
  {
    "id": "arbeitszeugnis-verstaendlich-pruefen",
    "category": "Karriere & Bewerbung",
    "title": "Arbeitszeugnis verständlich prüfen",
    "description": "Formulierungen und Aussagen nüchtern einordnen.",
    "prompt": "Analysiere diesen Zeugnistext:\n[ZEUGNIS]\n\nFasse die ausdrücklich enthaltenen Leistungs- und Verhaltensaussagen zusammen. Markiere mehrdeutige oder ungewöhnliche Formulierungen und mögliche Auslassungen. Unterscheide sprachliche Beobachtung von rechtlicher Bewertung. Keine verbindliche Schulnote aus einzelnen Codes ableiten."
  },
  {
    "id": "erfolge-dokumentieren",
    "category": "Karriere & Bewerbung",
    "title": "Erfolge dokumentieren",
    "description": "Eigene Arbeit für Feedbackgespräche festhalten.",
    "prompt": "Hilf mir, meine Beiträge aus diesen Notizen aufzubereiten:\n[NOTIZEN]\n\nErstelle eine Übersicht mit Ausgangslage, meinem konkreten Anteil, Ergebnis und vorhandenen Belegen. Trenne Teamleistung von individuellem Beitrag. Wo Zahlen fehlen, verwende qualitative Wirkungen, ohne Prozentwerte zu erfinden. Schließe mit drei Beispielen für ein Mitarbeitergespräch."
  },
  {
    "id": "berufliche-entscheidung-abwaegen",
    "category": "Karriere & Bewerbung",
    "title": "Berufliche Entscheidung abwägen",
    "description": "Entwicklung, Sicherheit und Alltag vergleichen.",
    "prompt": "Ich überlege zwischen [OPTIONEN] in meiner Karriere. Mir wichtig: [PRIORITÄTEN]. Rahmenbedingungen: [RAHMEN].\n\nVergleiche Lernchancen, Arbeitsalltag, Risiken, Gehaltssicherheit und langfristige Optionen. Trenne bekannte Fakten von Annahmen und liste offene Fragen an Arbeitgeber. Gib eine bedingte Empfehlung unter meinen Prioritäten statt allgemeiner Karriere-Ratschläge."
  },
  {
    "id": "csv-bereinigen",
    "category": "Daten & Tabellen",
    "title": "CSV bereinigen",
    "description": "Datenprobleme erkennen, ohne Informationen zu verlieren.",
    "prompt": "Ich habe diesen Datenausschnitt:\n[DATEN]\nZiel der Auswertung: [ZIEL].\n\nAnalysiere mögliche Probleme mit Dubletten, Datentypen, leeren Werten, Einheiten und Ausreißern. Erstelle einen konservativen Bereinigungsplan mit Regeln und Auswirkungen. Verändere keine Daten ohne meine Bestätigung. Zeige auf Wunsch nachvollziehbare Formeln oder Code."
  },
  {
    "id": "excel-formel-erklaeren",
    "category": "Daten & Tabellen",
    "title": "Excel-Formel erklären",
    "description": "Eine Formel nachvollziehbar aufbauen und testen.",
    "prompt": "Ich brauche eine Formel in [EXCEL_ODER_SHEETS] für [AUFGABE].\nBeispieldaten mit Spalten: [SPALTEN]. Sprach-/Ländereinstellung: [LOCALE].\n\nGib die exakte Formel und erkläre jede relevante Funktion. Zeige ein Mini-Beispiel mit erwarteter Ausgabe und mindestens einen Randfall. Benenne Unterschiede zwischen Excel und Google Sheets, falls sie für die Lösung relevant sind."
  },
  {
    "id": "kennzahlen-sinnvoll-auswaehlen",
    "category": "Daten & Tabellen",
    "title": "Kennzahlen sinnvoll auswählen",
    "description": "Nur messen, was eine Entscheidung beeinflusst.",
    "prompt": "Für [PROJEKT_ODER_PROZESS] will ich den Erfolg messen. Ziel: [ZIEL]. Vorhandene Daten: [DATEN].\n\nSchlage höchstens sechs Kennzahlen mit Definition, Berechnungslogik, Datengrundlage und Frequenz vor. Unterscheide Ergebnis- und Frühindikatoren. Warne vor Kennzahlen, die leicht zu optimieren sind, ohne echten Nutzen zu stiften."
  },
  {
    "id": "dashboard-als-entscheidungswerkzeug",
    "category": "Daten & Tabellen",
    "title": "Dashboard als Entscheidungswerkzeug",
    "description": "Diagramme an tatsächliche Fragen koppeln.",
    "prompt": "Plane ein Dashboard für [ZIELGRUPPE] zum Thema [THEMA]. Entscheidungen: [ENTSCHEIDUNGEN]. Datenfelder: [DATENFELDER].\n\nGib die sinnvolle Reihenfolge der Kennzahlen, passende Diagrammtypen und notwendige Filter an. Erkläre, welche Grafik welche Frage beantwortet. Vermeide dekorative Charts und Kennzahlen ohne klare Definition. Markiere fehlende Datenquellen."
  },
  {
    "id": "a-b-test-auswerten",
    "category": "Daten & Tabellen",
    "title": "A/B-Test auswerten",
    "description": "Experimentergebnisse vorsichtig interpretieren.",
    "prompt": "Analysiere dieses Experiment:\n[ERGEBNISSE]\nHypothese: [HYPOTHESE]. Primäre Kennzahl: [KENNZAHL].\n\nPrüfe Gruppengrößen, Messzeitraum, Störfaktoren und Effektgröße. Rechne nur mit vorhandenen Zahlen; nenne keine statistische Signifikanz ohne ausreichende Daten und Methode. Trenne Beobachtung, Interpretation und Entscheidungsempfehlung."
  },
  {
    "id": "daten-in-klare-erkenntnisse-uebersetzen",
    "category": "Daten & Tabellen",
    "title": "Daten in klare Erkenntnisse übersetzen",
    "description": "Aus einer Tabelle eine kurze sachliche Analyse machen.",
    "prompt": "Fasse diese Daten für [ZIELGRUPPE] zusammen:\n[DATEN]\nLeitfrage: [FRAGE].\n\nNenne zuerst die wichtigsten drei belegten Befunde mit konkreten Werten und Bezug. Zeige anschließend Auffälligkeiten, mögliche Erklärungen als Hypothesen und Datenlücken. Vermeide Kausalbehauptungen aus bloßen Zusammenhängen. Gib zum Schluss zwei sinnvolle Anschlussfragen."
  },
  {
    "id": "sql-abfrage-entwerfen",
    "category": "Daten & Tabellen",
    "title": "SQL-Abfrage entwerfen",
    "description": "Eine lesbare Abfrage passend zum Datenmodell schreiben.",
    "prompt": "Erstelle eine SQL-Abfrage für [FRAGE] im Dialekt [DIALEKT].\nTabellen und Felder: [SCHEMA]. Beispielwerte: [BEISPIELE].\n\nGib zuerst die Abfrage, danach eine kurze Erklärung der Joins, Filter und Aggregationen. Achte auf NULL-Fälle und mögliche Mehrfachzählung. Stelle bei uneindeutigen Spaltenbeziehungen eine präzise Rückfrage statt sie zu erfinden."
  },
  {
    "id": "datenqualitaet-auditieren",
    "category": "Daten & Tabellen",
    "title": "Datenqualität auditieren",
    "description": "Ein wiederholbares Prüfverfahren entwickeln.",
    "prompt": "Entwirf einen Datenqualitätscheck für [DATENSATZ]. Schema: [SCHEMA]. Verwendung: [VERWENDUNG].\n\nDefiniere prüfbare Regeln zu Vollständigkeit, Eindeutigkeit, Gültigkeit, Aktualität und Konsistenz. Gib je Regel Testmethode, Schwellwert nur falls begründbar und Reaktion bei Verstoß an. Priorisiere Fehler, die Entscheidungen besonders verfälschen könnten."
  },
  {
    "id": "geschichte-mit-klarer-dramaturgie",
    "category": "Kreativität & Projekte",
    "title": "Geschichte mit klarer Dramaturgie",
    "description": "Eine Idee in Konflikt, Figuren und Szenen überführen.",
    "prompt": "Entwickle aus [GRUNDIDEE] eine Kurzgeschichte im Genre [GENRE] für [ZIELGRUPPE].\n\nSkizziere zunächst Hauptfigur, Ziel, Konflikt, Wendepunkt und Schluss. Schreibe dann eine Szene von [LÄNGE] Wörtern mit konkreten Handlungen und Dialogen statt bloßer Erklärung. Vermeide Klischees aus dem Genre, wo sie keinen erzählerischen Zweck erfüllen."
  },
  {
    "id": "kreativbriefing-fuer-design",
    "category": "Kreativität & Projekte",
    "title": "Kreativbriefing für Design",
    "description": "Ein verständliches Briefing ohne vage Stilwörter schreiben.",
    "prompt": "Erstelle ein Designbriefing für [PROJEKT]. Zweck: [ZWECK]. Zielgruppe: [ZIELGRUPPE]. Kanäle: [KANÄLE]. Vorbilder und No-Gos: [REFERENZEN].\n\nDefiniere Kommunikationsziel, Hierarchie der Inhalte, funktionale Anforderungen, gewünschte Wirkung und überprüfbare Abnahmekriterien. Verwandle Wörter wie „modern“ oder „premium“ in konkrete visuelle Entscheidungen."
  },
  {
    "id": "namensideen-mit-begruendung",
    "category": "Kreativität & Projekte",
    "title": "Namensideen mit Begründung",
    "description": "Namen nach Merkfähigkeit und Passung beurteilen.",
    "prompt": "Ich suche einen Namen für [PROJEKT_ODER_PRODUKT]. Thema: [THEMA]. Zielgruppe: [ZIELGRUPPE]. Ton: [TON]. Einschränkungen: [EINSCHRÄNKUNGEN].\n\nErstelle zwölf unterschiedliche Namensideen in drei Stilrichtungen. Bewerte Aussprache, Merkfähigkeit und thematische Passung kurz. Keine Verfügbarkeit von Domains oder Marken behaupten; gib eine Checkliste für die spätere Prüfung."
  },
  {
    "id": "workshop-mit-ergebnis-planen",
    "category": "Kreativität & Projekte",
    "title": "Workshop mit Ergebnis planen",
    "description": "Eine kreative Session durch Entscheidungen strukturieren.",
    "prompt": "Plane einen Workshop über [THEMA] mit [PERSONEN] Personen und [DAUER] Minuten. Ziel: [ERGEBNIS].\n\nBaue die Agenda aus Einstieg, individueller Ideensammlung, gemeinsamer Bewertung und konkreter Entscheidung. Gib Anweisungen für die Moderation, Zeitlimits und ein dokumentierbares Output-Format. Berücksichtige stille Teilnehmende statt nur Lautstärke im Raum."
  },
  {
    "id": "konzept-auf-eine-seite-bringen",
    "category": "Kreativität & Projekte",
    "title": "Konzept auf eine Seite bringen",
    "description": "Viele Gedanken in eine klare Projektskizze verwandeln.",
    "prompt": "Fasse folgende Gedanken zu einem Projektkonzept zusammen:\n[NOTIZEN]\n\nStruktur: Ausgangsproblem, Zielgruppe, Lösungsansatz, besonderes Merkmal, erste Version, offene Annahmen und nächster Test. Kürze auf maximal 400 Wörter. Trenne bereits entschiedene Punkte von Ideen und offenen Fragen. Stelle nicht mehr als fünf Rückfragen."
  },
  {
    "id": "originelle-varianten-statt-synonyme",
    "category": "Kreativität & Projekte",
    "title": "Originelle Varianten statt Synonyme",
    "description": "Eine Idee in bewusst verschiedene Richtungen entwickeln.",
    "prompt": "Ausgangspunkt ist [IDEE]. Rahmen: [RAHMEN]. Ziel: [ZIEL].\n\nEntwickle fünf Varianten, die sich im Mechanismus oder Nutzungserlebnis wirklich unterscheiden, nicht nur im Namen. Formuliere für jede Kernidee, Nutzen, Aufwand und größte Unsicherheit. Wähle eine mutige, eine pragmatische und eine günstige Richtung aus und erkläre den Unterschied."
  },
  {
    "id": "szenen-fuer-ein-video-planen",
    "category": "Kreativität & Projekte",
    "title": "Szenen für ein Video planen",
    "description": "Aus einem Thema einen drehbaren Ablauf machen.",
    "prompt": "Erstelle ein Storyboard für ein Video über [THEMA] mit Länge [LÄNGE] für [PLATTFORM]. Verfügbares Material: [MATERIAL].\n\nGib eine Tabelle mit Zeitbereich, Bild, Ton/Text und Produktionshinweis. Jede Szene muss einen klaren Zweck haben. Plane mit tatsächlich verfügbaren Ressourcen. Keine nicht existierenden Zitate, Originalaufnahmen oder Statistiken erfinden."
  },
  {
    "id": "projekt-nach-scope-schuetzen",
    "category": "Kreativität & Projekte",
    "title": "Projekt nach Scope schützen",
    "description": "Eine kreative Idee in eine machbare erste Version begrenzen.",
    "prompt": "Ich möchte [PROJEKT] umsetzen. Zeitrahmen: [ZEITRAHMEN]. Werkzeuge: [WERKZEUGE]. Unverzichtbar: [MUSS].\n\nDefiniere die kleinste Version, die den Kernnutzen zeigt. Trenne Must-have, später und bewusst ausgeschlossen. Lege vier umsetzbare Meilensteine und für jeden eine klare Definition von fertig fest. Verhindere zusätzliche Verbesserungsrunden ohne neue Entscheidung."
  }
];
