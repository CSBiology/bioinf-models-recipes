---
title: "11.1 Von der Regression zur Klassifikation"
sidebar:
  label: "11.1 Von der Regression zur Klassifikation"
  order: 1
  group: "Part 3"
  part: "Part 3"
---

# 11.1 Von der Regression zur Klassifikation

## Zwei grundverschiedene Vorhersageprobleme

In den vorherigen Kapiteln haben wir überwachtes Lernen anhand von Beispielen eingeführt, bei denen das Ziel darin bestand, eine kontinuierliche numerische Größe vorherzusagen. Wir haben die Proteinstabilität aus physikochemischen Eigenschaften geschätzt, doch viele andere biologische Variablen hätten denselben Zweck erfüllen können. Genexpressionsniveaus, Enzymaktivitäten, Metabolitenkonzentrationen, Wachstumsraten oder Reaktionsgeschwindigkeiten sind alles Beispiele für Größen, die sich kontinuierlich verändern.

Vorhersageprobleme dieses Typs gehören zur **Regression**.

Regressionsmodelle beantworten Fragen wie

> *Wie viel?*

oder

> *Wie stark?*

Zum Beispiel:

- Wie stabil ist dieses Protein?
- Wie stark wird dieses Gen exprimiert?
- Wie hoch ist die zu erwartende Wachstumsrate dieses Bakterienstamms?

Die Ausgabe eines Regressionsmodells ist also ein numerischer Wert, der innerhalb eines kontinuierlichen Bereichs im Prinzip beliebige Werte annehmen kann.

Viele biologische Fragestellungen besitzen jedoch eine ganz andere Struktur.

Anstatt eine numerische Größe zu schätzen, möchten wir eine Beobachtung oft einer von mehreren vorgegebenen Kategorien zuordnen.

Zum Beispiel:

- Ist dieses Protein im Chloroplasten oder im Mitochondrium lokalisiert?
- Ist eine Patientin oder ein Patient gesund oder krank?
- Enthält diese DNA-Sequenz einen Promotor?
- Ist eine genetische Variante pathogen?
- Ist ein Pilz essbar oder giftig?

Solche Fragen zielen nicht mehr darauf, **wie viel** von etwas vorliegt.

Stattdessen fragen sie

> **Zu welcher Klasse gehört diese Beobachtung?**

Vorhersageprobleme dieser Art nennt man **Klassifikationsprobleme**.

Obwohl Regression und Klassifikation unterschiedliche Arten von Ausgaben erzeugen, beruhen sie auf genau denselben Lernprinzipien.

Beide benötigen

- gelabelte Trainingsdaten,
- informative biologische Merkmale,
- ein mathematisches Modell,
- eine Verlustfunktion
- und ein Optimierungsverfahren.

Nur das Vorhersageziel unterscheidet sich.

Regression sagt **kontinuierliche Werte** voraus.

Klassifikation sagt **diskrete biologische Klassen** voraus.

Diese Unterscheidung gehört zu den wichtigsten Konzepten des überwachten Lernens, weil sie bestimmt, welche mathematischen Modelle und welche Bewertungsmethoden für ein biologisches Vorhersageproblem geeignet sind.

---

## Warum nicht einfach alles in Klassen umwandeln?

Auf den ersten Blick wirkt Klassifikation vielleicht einfacher als Regression.

Angenommen, wir möchten die Proteinstabilität vorhersagen.

Anstatt die exakte Schmelztemperatur zu schätzen, könnten wir Proteine einfach in zwei Kategorien einteilen:

- **stabil**
- **instabil**

Das Vorhersageproblem scheint dadurch plötzlich viel leichter zu werden.

Anstatt einen numerischen Wert aus unendlich vielen Möglichkeiten vorherzusagen, muss das Modell nur noch zwischen zwei Klassen unterscheiden.

Damit drängt sich eine naheliegende Frage auf.

> **Warum wandeln wir kontinuierliche biologische Messgrößen nicht immer in Kategorien um?**

Die Antwort ist, dass eine solche Vereinfachung unweigerlich Information vernichtet.

Man denke an zwei Proteine mit Schmelztemperaturen von 49 °C und 51 °C.

Wenn wir jedes Protein über 50 °C als *stabil* und jedes darunter als *instabil* bezeichnen, gehören diese fast identischen Proteine plötzlich unterschiedlichen Klassen an.

Umgekehrt würden Proteine mit Schmelztemperaturen von 51 °C und 90 °C beide als *stabil* gelten, obwohl sich ihre tatsächlichen Stabilitäten massiv unterscheiden.

Die kontinuierliche Messung enthält also weit mehr Information als das binäre Label.

Diesen Vorgang, kontinuierliche Werte in diskrete Kategorien zu überführen, nennt man **Binning**.

Binning kann in manchen Situationen nützlich sein, sollte aber immer mit Vorsicht eingesetzt werden, weil verworfene Information später nicht wiederhergestellt werden kann.

Wenn verlässliche kontinuierliche Messgrößen vorliegen, liefert Regression daher in der Regel die reichhaltigere Beschreibung des biologischen Systems.

Klassifikation sollte man deshalb nicht als vereinfachte Form von Regression verstehen, sondern als die angemessene Lösung für biologische Fragen, deren Antworten von Natur aus kategorial sind.

---

## Klassifikation ist in der Biologie allgegenwärtig

Klassifikationsprobleme treten in der modernen Biologie an vielen Stellen auf.

In der Molekularbiologie werden Proteine nach ihrer zellulären Lokalisation, ihrer biologischen Funktion, ihrem Struktur-Fold oder ihrer Enzymfamilie klassifiziert.

In der Genetik werden DNA-Varianten als harmlos oder pathogen eingestuft.

In der Mikrobiologie können Bakterienisolate nach Antibiotikaresistenz klassifiziert werden.

In der Ökologie werden Organismen anhand morphologischer oder molekularer Merkmale Arten zugeordnet.

In der Medizin ordnen Modelle des maschinellen Lernens Patientinnen und Patienten nach Krankheitsstatus, Therapieansprechen oder Prognose ein.

Trotz der enormen Vielfalt dieser Anwendungen teilen sie alle dieselbe mathematische Struktur.

Jede Beobachtung wird durch eine Menge messbarer Merkmale repräsentiert.

Das Ziel besteht darin, eine Regel zu lernen, die neue Beobachtungen der richtigen biologischen Klasse zuordnet.

Der weitere Verlauf dieses Kapitels stellt mehrere unterschiedliche Ansätze vor, mit denen sich solche Entscheidungsregeln lernen lassen.

Wir beginnen mit dem einfachsten probabilistischen Klassifikator, der **logistischen Regression**, und wenden uns anschließend den Entscheidungsbäumen zu, einer der intuitivsten und in der Bioinformatik am weitesten verbreiteten Klassifikationsmethoden.

---

### Zentrale Konzepte

* Regression sagt kontinuierliche numerische Größen voraus.
* Klassifikation sagt diskrete Kategorien voraus.
* Klassifikation ist angemessen, wenn biologische Ergebnisse von Natur aus zu vorgegebenen Klassen gehören.
* Die Umwandlung kontinuierlicher Messgrößen in Kategorien (**Binning**) vereinfacht Vorhersagen, führt aber unvermeidlich zu Informationsverlust.
* Viele wichtige Anwendungen der Bioinformatik sind Klassifikationsprobleme.

---

### Zusammenfassung

Regression und Klassifikation sind die beiden großen Formen des überwachten Lernens. Während Regression kontinuierliche Größen schätzt, ordnet Klassifikation Beobachtungen vordefinierten biologischen Klassen zu. Beide Ansätze beruhen auf demselben grundlegenden Lernrahmen, beantworten aber unterschiedliche wissenschaftliche Fragen. Diese Unterscheidung zu verstehen, ist entscheidend, weil davon abhängt, welche mathematischen Modelle für ein bestimmtes biologisches Vorhersageproblem geeignet sind. In den folgenden Abschnitten entwickeln wir zunehmend leistungsfähige Methoden, um präzise Klassifikationsmodelle zu lernen.

---

### Fragen zur Selbstkontrolle

1. Worin besteht der grundlegende Unterschied zwischen Regression und Klassifikation?
2. Nennen Sie drei Beispiele für Regressionsprobleme in der Biologie.
3. Nennen Sie drei Beispiele für Klassifikationsprobleme in der Biologie.
4. Was ist Binning, und warum führt es zu Informationsverlust?
5. Warum ist Regression im Allgemeinen vorzuziehen, wenn kontinuierliche Messungen verfügbar sind?
6. Warum sind Klassifikationsverfahren in der Biologie dennoch unverzichtbar?
