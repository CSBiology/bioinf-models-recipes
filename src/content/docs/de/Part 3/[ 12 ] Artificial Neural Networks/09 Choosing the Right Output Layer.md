---
title: "12.9 Die richtige Ausgabeschicht wählen"
sidebar:
  label: "12.9 Die richtige Ausgabeschicht wählen"
  order: 9
  group: "Part 3"
  part: "Part 3"
---

# 12.9 Die richtige Ausgabeschicht wählen

## Unterschiedliche Vorhersageprobleme erfordern unterschiedliche Ausgaben

Auch wenn die interne Struktur vieler neuronaler Netze bemerkenswert ähnlich ist, hängt die Gestaltung der **Ausgabeschicht** vollständig von der biologischen Frage ab, die wir beantworten möchten.

Im Verlauf dieses Buches sind wir auf mehrere grundlegend verschiedene Vorhersageprobleme gestoßen.

Manchmal möchten wir einen kontinuierlichen numerischen Wert vorhersagen.

Manchmal müssen wir zwischen zwei biologischen Klassen unterscheiden.

In anderen Situationen kann eine Beobachtung zu einer von vielen möglichen Kategorien gehören.

Diese unterschiedlichen Vorhersageaufgaben erfordern unterschiedliche mathematische Interpretationen der Netzausgabe.

Folglich muss die letzte Schicht eines neuronalen Netzes an das jeweilige Vorhersageproblem angepasst werden.

Wichtig ist, dass die verborgenen Schichten dabei oft unverändert bleiben.

Nur die letzte Transformation und die zugehörige Verlustfunktion müssen angepasst werden.

---

## Regression

Die einfachste Vorhersageaufgabe ist die **Regression**.

Hier besteht das Ziel darin, eine kontinuierliche numerische Größe vorherzusagen.

Beispiele sind

- Proteinstabilität,
- Enzymaktivität,
- Metabolitenkonzentration,
- Wachstumsrate
- oder Genexpressionsniveaus.

In dieser Situation sollte das Netz jede beliebige reellwertige Ausgabe erzeugen dürfen.

Aus diesem Grund verwendet das Ausgabeneuron in der Regel **gar keine Aktivierungsfunktion**.

Die endgültige Vorhersage ist einfach

$$
\hat{y}=z,
$$

wobei \(z\) die vom letzten Neuron berechnete gewichtete Summe ist.

Dies wird manchmal als **lineares Ausgabeneuron** oder **Identitätsaktivierung** bezeichnet.

Da die Vorhersage kontinuierlich ist, wird das Netzwerk typischerweise mit dem in Kapitel 9 eingeführten **Mean Squared Error (MSE)** trainiert.

Regressionsnetzwerke unterscheiden sich von linearer Regression also vor allem in der Komplexität des Modells, nicht in der Interpretation der Ausgabe.

---

## Binäre Klassifikation

Angenommen, wir möchten nun zwischen zwei biologischen Klassen unterscheiden.

Beispiele wären

- gesund versus krank,
- Chloroplast versus Mitochondrium,
- pathogen versus benign,
- essbar versus giftig.

In diesem Fall sollte die Ausgabe die Wahrscheinlichkeit darstellen, dass eine Beobachtung zu einer der beiden Klassen gehört.

Wie in Kapitel 11 besprochen, müssen Wahrscheinlichkeiten zwischen 0 und 1 liegen.

Die geeignete Aktivierungsfunktion ist daher die **Sigmoidfunktion**,

$$
P(y=1|x)
=
\frac{1}{1+e^{-z}}.
$$

Das Ausgabeneuron erzeugt nun Werte wie

- 0.02,
- 0.37,
- 0.91
- oder 0.99.

Diese Zahlen besitzen eine direkte probabilistische Interpretation.

Zum Beispiel bedeutet

$$
P(\text{Chloroplast})=0.91,
$$

dass das Netzwerk eine Wahrscheinlichkeit von 91 % dafür schätzt, dass das Protein im Chloroplasten lokalisiert ist.

Ein Entscheidungsschwellenwert, häufig 0,5, wird anschließend verwendet, um diese Wahrscheinlichkeit in eine Klassenentscheidung zu überführen.

---

## Mehrklassenklassifikation

Viele biologische Vorhersageprobleme umfassen mehr als zwei mögliche Klassen.

So kann ein Protein zum Beispiel lokalisiert sein in

- den Chloroplasten,
- die Mitochondrien,
- den Zellkern,
- das Cytoplasma
- oder den sekretorischen Weg.

Mehrere unabhängige Sigmoidneuronen würden dieses Problem nicht angemessen lösen.

Die resultierenden Wahrscheinlichkeiten müssten sich nicht notwendigerweise zu eins aufsummieren.

Ein Protein könnte gleichzeitig

- 80 % Wahrscheinlichkeit für den Chloroplasten,
- 70 % Wahrscheinlichkeit für die Mitochondrien
- und 60 % Wahrscheinlichkeit für den Zellkern

erhalten, was offensichtlich inkonsistent wäre.

Stattdessen verwendet man bei Mehrklassenklassifikation die **Softmax-Funktion**.

Angenommen, die Ausgabeschicht enthält für jede mögliche Klasse ein Neuron.

Jedes dieser Neuronen berechnet zunächst einen Score

$$
z_i.
$$

Die Softmax-Funktion transformiert diese Scores in Wahrscheinlichkeiten,

$$
P_i
=
\frac{e^{z_i}}
{\sum_j e^{z_j}}.
$$

Daraus folgen unmittelbar zwei wichtige Eigenschaften.

Erstens liegt jede Wahrscheinlichkeit zwischen 0 und 1.

Zweitens summieren sich alle Wahrscheinlichkeiten stets zu eins,

$$
\sum_i P_i = 1.
$$

Die Ausgabe repräsentiert damit eine echte Wahrscheinlichkeitsverteilung über alle möglichen Klassen.

Die Klasse mit der größten Wahrscheinlichkeit wird zur Vorhersage des Netzwerks.

---

## Ein Beispiel: die Vorhersage der Proteinlokalisation

Betrachten wir ein neuronales Netz, das zur Vorhersage der Proteinlokalisation trainiert wurde.

Die Ausgabeschicht enthält fünf Neuronen, die für

- Chloroplast,
- Mitochondrium,
- Zellkern,
- Cytoplasma,
- sekretorischen Weg

stehen.

Nach Anwendung der Softmax-Funktion könnte das Netzwerk ausgeben:

| Lokalisation | Wahrscheinlichkeit |
|--------------|-------------------:|
| Chloroplast | 0.82 |
| Mitochondrium | 0.09 |
| Zellkern | 0.04 |
| Cytoplasma | 0.03 |
| Sekretorischer Weg | 0.02 |

Beachten Sie, dass

$$
0.82
+
0.09
+
0.04
+
0.03
+
0.02
=
1.
$$

Das Netzwerk sagt also vorher, dass das Protein im Chloroplasten lokalisiert ist, und drückt zugleich seine Unsicherheit gegenüber allen alternativen Lokalisationen aus.

Gerade diese probabilistische Interpretation gehört zu den großen Stärken neuronaler Klassifikatoren.

Anstatt nur eine einzelne Entscheidung zu liefern, kommuniziert das Netzwerk auch, wie sicher diese Entscheidung ist.

---

## Die Ausgabeschicht bestimmt die Vorhersageaufgabe

Auch wenn neuronale Netze häufig stark spezialisiert wirken, zeigt dieses Beispiel ihre bemerkenswerte Flexibilität.

Genau dieselben verborgenen Schichten können verwendet werden für

- Regression,
- binäre Klassifikation
- oder Mehrklassenklassifikation.

Nur die letzte Schicht ändert sich.

Diese Beobachtung unterstreicht einen wichtigen konzeptionellen Punkt.

Die verborgenen Schichten lernen **Repräsentationen** der biologischen Daten.

Die Ausgabeschicht bestimmt, **wie diese Repräsentationen interpretiert werden**.

Durch die Änderung der Ausgabeschicht kann also dieselbe interne Repräsentation für völlig unterschiedliche Vorhersageprobleme genutzt werden.

---

## Die passende Ausgabe wählen

Die Wahl der Ausgabeaktivierung wird vollständig durch die biologische Fragestellung bestimmt.

| Vorhersageaufgabe | Ausgabeaktivierung | Typische Ausgabe |
|-------------------|--------------------|------------------|
| Regression | Identität (linear) | Kontinuierlicher numerischer Wert |
| Binäre Klassifikation | Sigmoid | Wahrscheinlichkeit einer Klasse |
| Mehrklassenklassifikation | Softmax | Wahrscheinlichkeitsverteilung über mehrere Klassen |

Diese einfache Tabelle fasst eine der wichtigsten praktischen Leitlinien beim Entwurf neuronaler Netze zusammen.

Sobald die Vorhersageaufgabe feststeht, ergibt sich die passende Ausgabeschicht fast von selbst.

Der übrige Teil des Netzwerks ändert sich oft erstaunlich wenig.

---

## Vorbereitung auf biologische Anwendungen

An diesem Punkt haben wir alle grundlegenden Bausteine von Feed-Forward-Netzwerken entwickelt.

Wir verstehen nun

- künstliche Neuronen,
- Aktivierungsfunktionen,
- verborgene Schichten,
- Representation Learning,
- Optimierung
- und Ausgabeschichten.

Die verbleibende Frage ist nicht mehr, wie neuronale Netze mathematisch funktionieren.

Stattdessen fragen wir nun, wie diese Modelle zur Lösung realer biologischer Probleme eingesetzt werden.

Im nächsten Abschnitt betrachten wir eine der ersten sehr erfolgreichen Anwendungen neuronaler Netze in der Bioinformatik: **TargetP**, ein System, das die subzelluläre Lokalisation von Proteinen direkt aus ihren Aminosäuresequenzen vorhersagt.

An diesem Beispiel werden wir sehen, wie alle in diesem Kapitel eingeführten Konzepte in einem praktischen Vorhersagemodell zusammenkommen.

---

### Konzeptionelle Zusammenfassung

Die Architektur der verborgenen Schichten eines neuronalen Netzes bleibt über verschiedene Anwendungen hinweg oft unverändert. Der Hauptunterschied zwischen Regressions- und Klassifikationsnetzen liegt in der Ausgabeschicht. Für Regression wird ein lineares Ausgabeneuron verwendet, für binäre Klassifikation die Sigmoidfunktion zur Schätzung von Wahrscheinlichkeiten zweier Klassen und für Mehrklassenklassifikation die Softmax-Funktion zur Erzeugung einer Wahrscheinlichkeitsverteilung über mehrere mögliche Klassen. Die Wahl der passenden Ausgabeschicht stellt sicher, dass die Vorhersagen des Netzes der biologischen Fragestellung entsprechen.

---

### Fragen zur Selbstkontrolle

1. Warum hängt die Ausgabeschicht von der Vorhersageaufgabe ab?
2. Welche Ausgabeaktivierung wird typischerweise für Regressionsprobleme verwendet?
3. Warum eignet sich die Sigmoidfunktion für binäre Klassifikation?
4. Warum ist die Softmax-Funktion bei Mehrklassenklassifikation mehreren unabhängigen Sigmoidneuronen vorzuziehen?
5. Welche zusätzliche Information liefert eine Softmax-Ausgabe über die vorhergesagte Klasse hinaus?
6. Warum können dieselben verborgenen Schichten oft für verschiedene Vorhersageaufgaben verwendet werden?
7. Wie hängt die Wahl der Ausgabeaktivierung mit der biologischen Interpretation der Vorhersage zusammen?
