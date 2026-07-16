---
title: "10.6 Generalisierung abschätzen: Lernen aus begrenzten Daten"
sidebar:
  label: "10.6 Generalisierung abschätzen: Lernen aus begrenzten Daten"
  order: 6
  group: "Part 3"
  part: "Part 3"
---

# 10.6 Generalisierung abschätzen: Lernen aus begrenzten Daten

## Das grundlegende Dilemma des maschinellen Lernens

Inzwischen haben wir festgehalten, dass das eigentliche Ziel des überwachten Lernens nicht darin besteht, die verfügbaren Daten perfekt zu fitten, sondern verlässliche Vorhersagen für **neue biologische Beobachtungen** zu treffen.

Genau daraus ergibt sich ein grundlegendes Dilemma.

Um ein Vorhersagemodell zu bewerten, würden wir es idealerweise auf Daten testen, die es noch nie gesehen hat. Solche zukünftigen Beobachtungen existieren zum Zeitpunkt der Modellentwicklung jedoch noch nicht.

Wie können wir also abschätzen, ob ein Modell erfolgreich generalisieren wird?

Diese Frage gehört zu den zentralen Herausforderungen des maschinellen Lernens.

Im Unterschied zu vielen rein mathematischen Problemen gibt es darauf keine exakte Antwort. Stattdessen müssen wir die zukünftige Leistung aus den begrenzten experimentellen Daten abschätzen, die uns momentan zur Verfügung stehen.

Die hierfür entwickelten Methoden bilden die Grundlage moderner Modellevaluation.

---

## Warum Trainingsleistung in die Irre führen kann

Nehmen wir an, wir haben die Stabilität von eintausend Proteinen gemessen und verwenden diese Daten, um ein Vorhersagemodell zu trainieren.

Nach der Optimierung sagt das Modell jede dieser Beobachtungen erstaunlich gut voraus.

Sollten wir daraus schließen, dass wir einen hervorragenden Prädiktor entwickelt haben?

Leider nein.

Das Modell hat während des Trainings bereits jede einzelne Beobachtung gesehen. Es hat seine Parameter genau so angepasst, dass diese Proteine möglichst gut erklärt werden.

Bewerten wir das Modell an genau denselben Beobachtungen, messen wir daher etwas anderes als Generalisierung.

Wir beantworten damit die Frage

> **Wie gut hat das Modell die Trainingsdaten gelernt?**

Was uns tatsächlich interessiert, ist jedoch

> **Wie gut wird das Modell Proteine vorhersagen, die noch gar nicht gemessen wurden?**

Das sind grundverschiedene Fragen.

Ein Modell kann auf den Trainingsdaten nahezu perfekt arbeiten und dennoch bei neuen Beobachtungen vollständig versagen.

Trainingsleistung ist daher nur ein begrenzt aussagekräftiges Maß für Modellqualität.

---

## Lernen und Evaluieren trennen

Eine einfache Lösung besteht darin, einen Teil der verfügbaren Daten ausschließlich für die Bewertung zu reservieren.

Der Datensatz wird dazu in zwei unabhängige Teilmengen aufgeteilt.

Der **Trainingsdatensatz** dient dazu, die Modellparameter zu lernen.

Der **Testdatensatz** bleibt während des Trainings vollständig verborgen.

Erst nachdem das Modell vollständig optimiert wurde, werden Vorhersagen für die Testdaten erzeugt.

Weil diese Beobachtungen beim Lernen keine Rolle gespielt haben, liefert der resultierende Vorhersagefehler eine wesentlich realistischere Schätzung der Generalisierungsfähigkeit des Modells.

Diese einfache Idee verdeutlicht einen wichtigen Grundsatz:

> **Ein Modell sollte immer an Beobachtungen bewertet werden, die bei seiner Konstruktion keine Rolle gespielt haben.**

Andernfalls besteht die Gefahr, dass wir Auswendiglernen mit echter Vorhersagefähigkeit verwechseln.

---

## Training, Validierung und Testen

In der Praxis unterscheidet modernes maschinelles Lernen oft nicht nur zwei, sondern drei verschiedene Datensätze.

Der **Trainingsdatensatz** wird verwendet, um die Parameter des Modells zu lernen.

Der **Validierungsdatensatz** dient dazu, verschiedene Modelle oder verschiedene Grade an Modellkomplexität miteinander zu vergleichen. So lässt sich beispielsweise entscheiden, ob eine lineare Regression, ein Spline-Modell oder ein neuronales Netz die angemessenste Beschreibung der Daten liefert.

Der **Testdatensatz** wird schließlich genau einmal verwendet, nämlich ganz am Ende der Modellentwicklung, um eine unverzerrte Schätzung der endgültigen Vorhersageleistung zu erhalten.

Jeder dieser Datensätze erfüllt damit einen anderen Zweck.

| Datensatz | Zweck |
|----------|---------|
| **Trainingsdatensatz** | Lernen der Modellparameter |
| **Validierungsdatensatz** | Auswahl des Modells und Abstimmung seiner Komplexität |
| **Testdatensatz** | Schätzung der endgültigen Vorhersagegenauigkeit |

Diese Rollen strikt zu trennen, ist entscheidend.

Wenn die Testdaten die Modellentwicklung beeinflussen, sind sie nicht mehr wirklich unabhängig, und die geschätzte Vorhersagegenauigkeit fällt zu optimistisch aus.

---

## Kreuzvalidierung: begrenzte Daten effizient nutzen

In vielen biologischen Anwendungen ist es jedoch schwierig, große Datensätze zu sammeln.

Experimente können teuer, zeitaufwendig oder durch die Verfügbarkeit biologischen Materials begrenzt sein.

Einen großen Teil der Beobachtungen ausschließlich für Testzwecke zurückzuhalten, kann dann verschwenderisch wirken.

Die Kreuzvalidierung bietet dafür eine elegante Lösung.

Anstatt einen einzigen festen Trainings- und Testdatensatz zu definieren, werden die verfügbaren Beobachtungen wiederholt in unterschiedliche Teilmengen aufgeteilt.

Der gebräuchlichste Ansatz ist die **k-fache Kreuzvalidierung** (*k-fold cross-validation*).

Dabei wird der Datensatz in \(k\) gleich große Folds unterteilt.

In jeder Iteration

- dient ein Fold als Validierungsdatensatz,
- während die übrigen \(k-1\) Folds zum Trainingsdatensatz zusammengefasst werden.

Dieser Prozess wird so oft wiederholt, bis jeder Fold einmal als Validierungsdatensatz gedient hat.

Die in den einzelnen Durchläufen erzielte Vorhersagegenauigkeit wird anschließend gemittelt.

Damit trägt jede Beobachtung

- mehrfach zum Modelltraining bei,
- aber genau einmal zur Modellevaluation.

Kreuzvalidierung nutzt begrenzte biologische Datensätze daher deutlich effizienter aus und liefert dennoch eine unabhängige Schätzung der Vorhersageleistung.

---

## Die angemessene Modellkomplexität wählen

Kreuzvalidierung liefert weit mehr als nur eine Schätzung der Vorhersagegenauigkeit.

Sie erlaubt uns auch, die passende Modellkomplexität zu bestimmen.

Angenommen, wir vergleichen mehrere Modelle mit unterschiedlicher Flexibilität.

Eine einfache lineare Regression könnte die Daten unteranpassen.

Ein hochflexibler Spline könnte sie überanpassen.

Ein Modell mittlerer Komplexität könnte den besten Kompromiss darstellen.

Wenn wir für jedes Kandidatenmodell Kreuzvalidierung durchführen, erhalten wir jeweils eine Schätzung des Vorhersagefehlers, den wir bei bisher ungesehenen Beobachtungen erwarten würden.

Das Modell mit dem kleinsten Kreuzvalidierungsfehler ist in der Regel jenes, von dem man die beste Generalisierung erwartet.

Damit schließt sich der Kreis zu den Ideen, die wir in diesem Kapitel entwickelt haben.

Wir wählen nicht das Modell, das die Trainingsdaten am besten fitten kann.

Wir wählen das Modell, das auf unabhängigen Validierungsdaten am besten abschneidet.

Kreuzvalidierung bietet damit eine praktische Lösung für den Bias-Varianz-Kompromiss.

---

## Die Grenzen der Kreuzvalidierung

So mächtig Kreuzvalidierung ist, so wichtig ist es auch, ihre Grenzen zu verstehen.

Kreuzvalidierung schätzt, wie gut ein Modell auf **zukünftigen Daten aus derselben zugrunde liegenden Population** funktionieren wird.

Diese Annahme ist oft vernünftig, aber keineswegs immer erfüllt.

Stellen wir uns vor, wir entwickeln ein Modell zur Vorhersage der Proteinlokalisation mithilfe von Proteinen aus Blütenpflanzen.

Kreuzvalidierung könnte eine ausgezeichnete Vorhersagegenauigkeit anzeigen.

Dasselbe Modell kann jedoch deutlich schlechter abschneiden, wenn es auf Proteine aus Algen, Pilzen oder Bakterien angewendet wird, weil sich diese Organismen biologisch von den Trainingsdaten unterscheiden.

Ebenso kann ein diagnostisches Modell, das mit Daten eines Krankenhauses entwickelt wurde, bei Patientinnen und Patienten eines anderen Krankenhauses weniger präzise arbeiten, wenn sich Messprotokolle oder Patientenpopulationen unterscheiden.

Solche Unterschiede kann Kreuzvalidierung nicht erkennen.

Sie schätzt Generalisierung **innerhalb** des verfügbaren Datensatzes, aber nicht notwendigerweise darüber hinaus.

---

## Unabhängige Validierung bleibt der Goldstandard

Aus diesem Grund liefert die stärkste Evidenz für ein Vorhersagemodell eine erfolgreiche Validierung an einem vollständig unabhängigen Datensatz.

Idealerweise stammt dieser Datensatz

- aus einem anderen Labor,
- wurde unter anderen experimentellen Bedingungen erhoben
- oder repräsentiert eine andere biologische Population.

Wenn das Modell auch unter solchen Bedingungen gute Leistung zeigt, gewinnen wir deutlich mehr Vertrauen darin, dass es tatsächliche biologische Prinzipien gelernt hat und nicht bloß Eigenschaften eines einzelnen Experiments.

Unabhängige Validierung ist deshalb zum Goldstandard in der computergestützten Biologie geworden.

Ganz gleich, ob wir Prädiktoren für Proteinfunktion, Krankheitsdiagnose, Genregulation oder Proteinstruktur entwickeln: Der endgültige Test eines Modells besteht darin, ob es über die Daten hinaus korrekt vorhersagt, aus denen es gelernt wurde.

---

## Maschinelles Lernen als wissenschaftliche Inferenz

Dieses Kapitel begann mit einer einfachen Frage:

> **Wie komplex sollte ein Vorhersagemodell sein?**

Inzwischen können wir die Antwort formulieren.

Das beste Modell ist weder das einfachste noch das komplizierteste.

Es ist das Modell, das für Beobachtungen, die während des Trainings nicht verfügbar waren, die verlässlichsten Vorhersagen liefert.

Ein solches Modell zu identifizieren, verlangt, Flexibilität und Generalisierung gegeneinander auszubalancieren und die Vorhersageleistung anhand unabhängiger Daten zu bewerten.

Maschinelles Lernen ist damit weit mehr als ein Optimierungsverfahren.

Es ist ein Rahmen für **wissenschaftliche Inferenz**.

Wir fragen nicht nur, ob ein Modell vorhandene Beobachtungen erklärt, sondern ob es biologische Prinzipien erfasst, die auch jenseits der Experimente gültig bleiben, aus denen es gelernt wurde.

Nur Modelle, die erfolgreich generalisieren, haben das Potenzial, zu biologischem Verständnis beizutragen.

Das nächste Kapitel erweitert diese Überlegungen auf eine weitere wichtige Klasse von Vorhersageproblemen. Bisher haben wir angenommen, dass die vorherzusagende Größe kontinuierlich ist, etwa Proteinstabilität oder Genexpression. Viele biologische Fragen verlangen jedoch die Zuordnung zu diskreten Klassen, etwa bei der Vorhersage der subzellulären Lokalisation eines Proteins oder bei der Entscheidung, ob eine genetische Variante pathogen ist. Solche Klassifikationsprobleme erfordern andere Vorhersagemodelle, beruhen aber auf denselben grundlegenden Prinzipien von Lernen und Generalisierung.

---

### Zentrale Konzepte

- Generalisierung lässt sich nur mithilfe von Beobachtungen abschätzen, die beim Training nicht verwendet wurden.
- Trainingsleistung ist in der Regel eine zu optimistische Schätzung der Vorhersagegenauigkeit.
- Trainings-, Validierungs- und Testdatensätze erfüllen während der Modellentwicklung unterschiedliche Aufgaben.
- Die k-fache Kreuzvalidierung schätzt Vorhersageleistung effizient auch bei begrenzten Daten.
- Kreuzvalidierung bietet eine praktische Methode zur Auswahl der Modellkomplexität.
- Kreuzvalidierung schätzt Generalisierung innerhalb der verfügbaren Daten, garantiert aber keine Leistung auf grundlegend anderen biologischen Systemen.
- Unabhängige externe Validierung liefert die stärkste Evidenz für ein Vorhersagemodell.

---

### Zusammenfassung

Die zentrale Herausforderung des maschinellen Lernens besteht nicht darin, aus vorhandenen Daten zu lernen, sondern zukünftige Beobachtungen korrekt vorherzusagen. Weil zukünftige Daten während der Modellentwicklung nicht vorliegen, muss die Vorhersageleistung mithilfe unabhängiger Teilmengen der verfügbaren Daten abgeschätzt werden. Kreuzvalidierung liefert dafür eine effiziente Strategie und ist zu einem der wichtigsten Werkzeuge der Modellauswahl und -bewertung geworden. Dennoch bleibt die überzeugendste Demonstration von Generalisierung eine erfolgreiche Validierung an vollständig unabhängigen biologischen Datensätzen. Maschinelles Lernen ist dann erfolgreich, wenn es nicht Beobachtungen auswendig lernt, sondern biologische Zusammenhänge entdeckt, die über die Experimente hinaus gültig bleiben, aus denen es gelernt wurde.

---

### Fragen zur Selbstkontrolle

1. Warum ist Trainingsgenauigkeit keine verlässliche Schätzung der Vorhersageleistung?
2. Warum sollten die Daten für die Evaluierung unabhängig vom Trainingsprozess bleiben?
3. Welche unterschiedlichen Rollen spielen Trainings-, Validierungs- und Testdatensätze?
4. Wie nutzt die k-fache Kreuzvalidierung begrenzte biologische Daten effizient aus?
5. Warum kann Kreuzvalidierung verwendet werden, um eine angemessene Modellkomplexität zu wählen?
6. Unter welchen Umständen kann Kreuzvalidierung die Vorhersageleistung überschätzen?
7. Warum gilt externe Validierung als Goldstandard bei der Bewertung von Vorhersagemodellen?
8. Erläutern Sie mit eigenen Worten, warum Generalisierung das definierende Merkmal erfolgreichen maschinellen Lernens ist.
