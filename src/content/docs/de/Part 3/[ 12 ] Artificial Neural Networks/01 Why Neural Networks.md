---
title: "12.1 Warum neuronale Netze?"
sidebar:
  label: "12.1 Warum neuronale Netze?"
  order: 1
  group: "Part 3"
  part: "Part 3"
---

## 12.1 Warum neuronale Netze?

### Lernziele

Nach Abschluss dieses Abschnitts sollten Sie in der Lage sein,

- zu erklären, warum künstliche neuronale Netze zu den einflussreichsten Verfahren des maschinellen Lernens in der Biologie geworden sind;
- zwischen manuell konstruierten Merkmalen und gelernten Repräsentationen zu unterscheiden;
- zu verstehen, dass neuronale Netze sowohl für Regression als auch für Klassifikation eingesetzt werden können;
- zu erläutern, warum neuronale Netze eine natürliche Erweiterung der in den vorangegangenen Kapiteln eingeführten Verfahren des überwachten Lernens darstellen;
- zu erkennen, dass moderne Durchbrüche wie AlphaFold auf denselben grundlegenden Prinzipien des überwachten Lernens beruhen.

---

### Vom klassischen Machine Learning zum Representation Learning

In den vorangegangenen Kapiteln haben wir die grundlegenden Prinzipien des überwachten Lernens eingeführt. Wir haben gesehen, wie Modelle Beziehungen zwischen gemessenen Variablen und biologischen Beobachtungen entdecken können, indem sie ihre Parameter mithilfe des Gradientenverfahrens optimieren. Wir haben lineare Regression zur Vorhersage kontinuierlicher Werte, logistische Regression zur binären Klassifikation und Entscheidungsbäume zum Lernen interpretierbarer Entscheidungsregeln behandelt. Obwohl sich diese Algorithmen in ihrer mathematischen Formulierung unterscheiden, verfolgen sie alle dasselbe grundlegende Ziel: eine Abbildung von Eingangsvariablen auf ein beobachtetes biologisches Ergebnis zu lernen.

Künstliche neuronale Netze bauen direkt auf diesen Ideen auf.

Sie stellen kein völlig neues Paradigma dar, sondern erweitern den zuvor eingeführten Rahmen des überwachten Lernens. Wie alle Verfahren des überwachten Lernens erhalten neuronale Netze Eingangsvariablen, vergleichen ihre Vorhersagen mit experimentell beobachteten Daten, quantifizieren den Vorhersagefehler mithilfe einer Verlustfunktion und optimieren ihre Parameter iterativ, um diesen Fehler zu minimieren.

Was neuronale Netze auszeichnet, ist also nicht, *wie* sie lernen, sondern *was* sie zu lernen imstande sind.

---

### Die Herausforderung des Feature Engineering

Viele klassische Machine-Learning-Verfahren sind stark auf sorgfältig konstruierte Eingangsmerkmale angewiesen.

Angenommen, wir möchten vorhersagen, ob ein Protein in einen Chloroplasten transportiert wird. Bevor wir ein Modell der logistischen Regression oder einen Entscheidungsbaum trainieren können, müssen wir zunächst entscheiden, welche Eigenschaften der Proteinsequenz dem Modell als Eingabe zur Verfügung gestellt werden sollen.

Mögliche Merkmale wären zum Beispiel

- die Aminosäurezusammensetzung,
- die mittlere Hydrophobizität,
- die Nettoladung,
- die Länge des Proteins
- oder das Vorkommen bekannter Sequenzmotive.

Diese Größen werden nicht vom Algorithmus gelernt. Sie werden vielmehr vom Forschenden auf der Grundlage biologischen Wissens entworfen.

Dieser Prozess wird als **Feature Engineering** bezeichnet.

Feature Engineering kann sehr wirksam sein, weil es jahrzehntelanges biologisches Wissen in das Modell einbringt. Zugleich setzt es dem Modell aber eine wichtige Grenze: Seine Qualität kann niemals besser sein als die Qualität der bereitgestellten Merkmale. Fehlt biologisch relevante Information im Merkmalsvektor, kann selbst der ausgefeilteste Lernalgorithmus sie nicht nachträglich rekonstruieren.

---

### Merkmale lernen statt sie vorzudefinieren

Künstliche neuronale Netze begegnen dieser Einschränkung auf grundlegend andere Weise.

Anstatt sich vollständig auf manuell entworfene Merkmale zu verlassen, können sie direkt aus den Daten zunehmend nützliche interne Repräsentationen lernen.

Betrachten wir erneut das Problem der Vorhersage der Proteinlokalisation.

Anstatt Hydrophobizität, Sequenzmotive oder Aminosäurezusammensetzung explizit zu berechnen, können wir dem Netz einfach die Proteinsequenz selbst zur Verfügung stellen. Während des Trainings lernt das Netz dann, welche Sequenzmuster für die Vorhersageaufgabe informativ sind.

Einige verborgene Neuronen reagieren möglicherweise besonders stark auf hydrophobe Aminosäureabschnitte, die an Transmembranhelices erinnern. Andere werden empfindlich für positiv geladene N-terminale Regionen, wie sie für mitochondriale Targeting-Peptide charakteristisch sind. Wieder andere lernen komplexere Kombinationen von Sequenzmustern, die ein menschlicher Forschender nur schwer explizit definieren könnte.

Diese internen Repräsentationen werden nicht vom Forschenden programmiert. Sie entstehen automatisch, während das Netz seine Vorhersagegenauigkeit optimiert.

Gerade diese Fähigkeit, nützliche Repräsentationen direkt aus Daten zu entdecken, gehört zu den definierenden Eigenschaften des modernen Deep Learning.

---

### Universelle Modelle für Vorhersagen

Eine weitere bemerkenswerte Eigenschaft künstlicher neuronaler Netze ist ihre Flexibilität.

Dieselbe Netzwerkarchitektur kann durch eine Anpassung der Ausgabeschicht auf sehr unterschiedliche Vorhersageaufgaben zugeschnitten werden.

Ein neuronales Netz kann zum Beispiel verwendet werden, um

- eine kontinuierliche Eigenschaft wie die Proteinstabilität vorherzusagen,
- zwischen zwei Klassen wie stabilen und instabilen Proteinen zu unterscheiden,
- Proteine mehreren subzellulären Kompartimenten zuzuordnen,
- Genexpressionsniveaus zu schätzen,
- Proteinstrukturen vorherzusagen
- oder Zelltypen aus Einzelzell-Sequenzierungsdaten zu identifizieren.

Die zugrunde liegenden rechnerischen Prinzipien bleiben weitgehend unverändert. Nur die Interpretation der Ausgabe des Netzes ändert sich.

Dadurch sind neuronale Netze außerordentlich vielseitige Lernalgorithmen, die auf ein breites Spektrum biologischer Probleme angewendet werden können.

---

### Warum neuronale Netze die Biologie verändert haben

Über viele Jahre hinweg fanden künstliche neuronale Netze in der Biologie nur begrenzte Beachtung. Obwohl die Grundideen bereits in der zweiten Hälfte des 20. Jahrhunderts entwickelt worden waren, wurden frühe neuronale Netze durch kleine Datensätze und unzureichende Rechenleistung eingeschränkt.

In den letzten zehn Jahren hat sich diese Situation grundlegend verändert.

Drei Entwicklungen haben den Erfolg des modernen Deep Learning maßgeblich vorangetrieben:

- die Verfügbarkeit enormer biologischer Datensätze aus Hochdurchsatztechnologien,
- die Entwicklung leistungsfähiger Grafikprozessoren (GPUs), mit denen Modelle mit Millionen von Parametern trainiert werden können,
- und große Fortschritte bei Netzwerkarchitekturen und Optimierungsalgorithmen.

Gemeinsam haben diese Entwicklungen künstliche neuronale Netze von einer interessanten rechnerischen Technik zu einem der zentralen Werkzeuge der modernen Biologie gemacht.

Ihre Anwendungen reichen heute von der Vorhersage von Proteinlokalisation und Proteinfunktion über die Analyse mikroskopischer Bilder und die Interpretation genomischer Variation bis zur Rekonstruktion regulatorischer Netzwerke und der Vorhersage von Proteinstrukturen mit bislang unerreichter Genauigkeit.

Das bekannteste Beispiel ist wohl **AlphaFold**, dessen außergewöhnlicher Erfolg gezeigt hat, dass neuronale Netze biologische Vorhersageprobleme lösen können, die jahrzehntelang als ungelöst galten.

---

### Vom überwachten Lernen zum Deep Learning

Auf den ersten Blick wirken neuronale Netze deutlich komplizierter als die in den vorigen Kapiteln behandelten Modelle. Sie enthalten viele Schichten, Tausende oder sogar Millionen von Parametern und erfordern für ihr Training oft erhebliche Rechenressourcen.

Trotz dieser Komplexität bleiben die zugrunde liegenden Prinzipien erstaunlich vertraut.

Wie jeder Algorithmus des überwachten Lernens

1. erhält ein neuronales Netz Eingabedaten,
2. berechnet eine Vorhersage,
3. vergleicht diese Vorhersage mit experimentell beobachteten Daten,
4. quantifiziert den Fehler mithilfe einer Verlustfunktion
5. und passt seine Parameter durch gradientenbasierte Optimierung an.

Der wesentliche Unterschied besteht darin, dass neuronale Netze nicht nur die endgültige Vorhersage lernen können, sondern auch die Zwischenrepräsentationen, die diese Vorhersage erst ermöglichen.

Zu verstehen, wie diese internen Repräsentationen entstehen, ist der Schlüssel zum Verständnis moderner künstlicher Intelligenz.

Der restliche Teil dieses Kapitels entwickelt diese Idee Schritt für Schritt. Wir beginnen mit dem einfachsten Typ neuronaler Netze, dem Feed-Forward-Netzwerk, und zeigen, dass sein grundlegender Baustein, das künstliche Neuron, mathematisch wesentlich einfacher ist, als die biologische Inspiration zunächst vermuten lässt.

---

### Konzeptionelle Zusammenfassung

Künstliche neuronale Netze lassen sich am besten als natürliche Erweiterung des überwachten Lernens verstehen und nicht als vollkommen neues Lernparadigma. Wie die in den vorangegangenen Kapiteln eingeführten Regressions- und Klassifikationsmodelle lernen sie, indem sie eine Verlustfunktion mithilfe des Gradientenverfahrens minimieren. Ihr charakteristisches Merkmal besteht darin, dass sie nützliche interne Repräsentationen der Daten automatisch lernen, anstatt sich vollständig auf manuell konstruierte Merkmale zu stützen. Diese Fähigkeit hat neuronale Netze zu einem der leistungsfähigsten Werkzeuge der modernen computergestützten Biologie gemacht und Anwendungen von der Vorhersage der Proteinlokalisation bis zur Proteinstrukturvorhersage ermöglicht.

---

### Fragen zur Selbstkontrolle

1. In welchem Sinn sind künstliche neuronale Netze eine Erweiterung des überwachten Lernens und kein völlig neues Paradigma?
2. Was versteht man unter Feature Engineering, und warum kann es die Leistungsfähigkeit klassischer Machine-Learning-Modelle begrenzen?
3. Worin unterscheiden sich neuronale Netze von traditionellen Machine-Learning-Algorithmen im Umgang mit Eingangsmerkmalen?
4. Warum kann dieselbe Netzwerkarchitektur sowohl für Regression als auch für Klassifikation verwendet werden?
5. Welche technologischen Entwicklungen haben den jüngsten Erfolg des Deep Learning in der Biologie ermöglicht?
6. Warum gilt AlphaFold als Meilenstein in der Anwendung neuronaler Netze auf biologische Forschung?
7. Was bedeutet die Aussage, dass neuronale Netze *Repräsentationen* und nicht nur *Vorhersagen* lernen?
