---
title: "3.3 Alignments als Suchproblem"
sidebar:
  label: "3.3 Alignments als Suchproblem"
  order: 3
  group: "Part 2"
  part: "Part 2"
---

# **3.3 Alignments als Suchproblem**

## **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* zu verstehen, warum die Suche nach einem optimalen Alignment ein kombinatorisches Problem ist
* zu erklären, warum Brute-Force-Ansätze nicht praktikabel sind
* die rekursive Struktur zu erkennen, die dem Sequenzalignment zugrunde liegt
* Alignments als Pfade in einem Graphen zu interpretieren
* die Notwendigkeit dynamischer Programmierung zu motivieren

---

## **Von der Definition zur Berechnung**

In Abschnitt 3.2 haben wir Sequenzähnlichkeit mithilfe von Edit-Operationen und Alignment-Scores definiert. Auf konzeptioneller Ebene ist das Problem damit klar:

> **Gegeben sind zwei Sequenzen; gesucht ist das Alignment mit dem höchsten Score (oder den geringsten Kosten).**

Diese Formulierung wirft jedoch unmittelbar eine praktische Frage auf:

> **Wie finden wir dieses optimale Alignment tatsächlich?**

Auf den ersten Blick wirkt das Problem einfach. Man könnte sich vorstellen, alle möglichen Alignments zu erzeugen, ihre Scores zu berechnen und anschließend das beste auszuwählen.

Diese Idee ist naheliegend, aber grundsätzlich untauglich.

---

## **Die kombinatorische Explosion möglicher Alignments**

Um die Schwierigkeit zu verstehen, müssen wir uns vergegenwärtigen, was ein Alignment überhaupt ist.

Ein Alignment entsteht dadurch, dass in Sequenzen Lückensymbole eingefügt werden, sodass:

* beide Sequenzen auf dieselbe Länge erweitert werden
* entsprechende Positionen miteinander verglichen werden können

Selbst bei kurzen Sequenzen gibt es viele Möglichkeiten, Lücken einzufügen. Jede andere Platzierung von Lücken führt zu einem anderen Alignment.

Die Zahl möglicher globaler Alignments zwischen zwei Sequenzen der Länge $N$ wächst näherungsweise wie:

$$
\frac{2^{2N}}{\pi N}
$$

Dieses Wachstum ist **exponentiell**.

Schon für mäßig lange Sequenzen wird die Zahl möglicher Alignments astronomisch groß. Eine vollständige Enumeration und Bewertung aller Alignments ist daher rechnerisch nicht machbar.

---

## **Warum Brute Force scheitert**

Verbinden wir diese Beobachtung noch einmal mit dem „Alignment von Hand“ aus Abschnitt 3.1.

Als wir Adenylierungsdomänen manuell ausgerichtet haben, haben wir nur einen winzigen Teil aller möglichen Alignments betrachtet. Unsere Intuition hat uns zu plausiblen Lösungen geführt.

Ein Brute-Force-Algorithmus würde dagegen:

1. jede mögliche Art des Einfügens von Lücken erzeugen
2. für jedes Alignment einen Score berechnen
3. das beste Alignment zurückgeben

Obwohl dieser Ansatz garantiert die optimale Lösung liefern würde, ist er unpraktikabel, weil der Suchraum zu groß ist.

Daraus folgt eine zentrale Einsicht:

> **Die eigentliche Schwierigkeit des Sequenzalignments besteht nicht darin, Ähnlichkeit zu definieren, sondern den enormen Raum möglicher Alignments effizient zu durchsuchen.**

---

## **Eine Schlüsselbeobachtung: Optimale Teilstruktur**

Trotz seiner scheinbaren Komplexität besitzt das Alignment-Problem eine verborgene Struktur, die wir ausnutzen können.

Betrachten wir zwei Sequenzen:

$$
X = x_1 x_2 \dots x_m
\qquad
Y = y_1 y_2 \dots y_n
$$

Angenommen, wir kennen bereits das optimale Alignment der Präfixe:

$$
x_1 \dots x_{i-1}
\quad \text{und} \quad
y_1 \dots y_{j-1}
$$

Wie können wir dieses Alignment erweitern, sodass auch $x_i$ und $y_j$ einbezogen werden?

Es gibt nur drei Möglichkeiten:

1. $x_i$ wird mit $y_j$ aligniert (Substitution oder Match)
2. $x_i$ wird mit einer Lücke aligniert (Insertion in $Y$)
3. $y_j$ wird mit einer Lücke aligniert (Deletion in $X$)

Diese Beobachtung zeigt etwas Entscheidendes:

> **Ein optimales Alignment lässt sich aus optimalen Alignments kleinerer Präfixe zusammensetzen.**

Diese Eigenschaft heißt **optimale Teilstruktur** und bildet die Grundlage der dynamischen Programmierung.

---

## **Überlappende Teilprobleme**

Bei genauerer Betrachtung tritt noch eine zweite wichtige Eigenschaft hervor.

Wenn wir Alignments für verschiedene Präfixe berechnen, begegnen wir denselben Teilproblemen immer wieder. So kann zum Beispiel das Alignment von:

$$
x_1 \dots x_i \quad \text{und} \quad y_1 \dots y_j
$$

in mehreren größeren Berechnungen benötigt werden.

Das bedeutet:

> **Das Problem besteht aus vielen überlappenden Teilproblemen, deren Lösungen wiederverwendet werden können.**

Diese Redundanz legt nahe, dieselben Ergebnisse nicht mehrfach neu zu berechnen.

---

## **Alignments als Pfade in einem Graphen**

Eine besonders anschauliche und mächtige Sichtweise besteht darin, Sequenzalignment als **Pfadsuchproblem** zu interpretieren.

Stellen wir uns ein Gitter vor, in dem:

* die horizontale Achse der Sequenz $Y$ entspricht
* die vertikale Achse der Sequenz $X$ entspricht

Jede Zelle $(i, j)$ repräsentiert das Alignment der Präfixe $x_1 \dots x_i$ und $y_1 \dots y_j$.

Von jeder Zelle aus können wir uns in drei Richtungen bewegen:

* **Diagonal** → $x_i$ wird mit $y_j$ aligniert
* **Nach unten** → $x_i$ wird mit einer Lücke aligniert
* **Nach rechts** → $y_j$ wird mit einer Lücke aligniert

Jeder dieser Schritte entspricht einer Edit-Operation und ist mit einem Score verbunden.

Ein Alignment entspricht damit einem **Pfad** von der linken oberen Ecke $(0,0)$ zur rechten unteren Ecke $(m,n)$.

---

## **Pfade bewerten**

Der Score eines Alignments ist einfach die Summe der Scores der Schritte entlang dieses Pfades:

* diagonale Schritte tragen Substitutionsscores bei
* horizontale und vertikale Schritte tragen Gap-Strafen bei

Damit lässt sich das Sequenzalignment-Problem wie folgt umformulieren:

> **Finde in diesem Gitter den Pfad mit dem höchsten Score von $(0,0)$ nach $(m,n)$.**

Diese Sichtweise macht aus Sequenzalignment ein klassisches Optimierungsproblem auf einem Graphen.

---

## **Vom Suchproblem zur dynamischen Programmierung**

Nun sind wir in der Lage, die zentrale Schwierigkeit aufzulösen.

Anstatt alle möglichen Pfade, also alle möglichen Alignments, zu enumerieren, können wir:

1. für jede Zelle $(i, j)$ den besten Score berechnen
2. bereits berechnete Ergebnisse wiederverwenden
3. die Lösung schrittweise aufbauen

Dieser Ansatz vermeidet redundante Berechnungen und reduziert die Komplexität von exponentieller auf polynomielle Zeit.

Diese Methode nennen wir **dynamische Programmierung**.

---

## **Konzeptionelle Zusammenfassung**

Sequenzalignment kann als Suchproblem über einen riesigen Raum möglicher Alignments verstanden werden. Ein naiver Brute-Force-Ansatz ist aufgrund des exponentiellen Wachstums dieses Raums nicht praktikabel.

Das Problem besitzt jedoch zwei entscheidende Eigenschaften:

* **Optimale Teilstruktur**: Optimale Lösungen lassen sich aus optimalen Teillösungen zusammensetzen
* **Überlappende Teilprobleme**: Dieselben Teilprobleme treten wiederholt auf

Wenn wir diese Eigenschaften ausnutzen und Alignments als Pfade in einem Gitter interpretieren, lässt sich das Problem effizient mit dynamischer Programmierung lösen.

---

## **Fragen zur Selbstkontrolle**

1. Warum wächst die Zahl möglicher Alignments exponentiell mit der Sequenzlänge?
2. Was macht einen Brute-Force-Ansatz für Sequenzalignment unpraktikabel?
3. Welche drei Möglichkeiten gibt es, ein Alignment an Position $(i, j)$ zu erweitern?
4. Wie lässt sich Sequenzalignment als Pfadsuchproblem interpretieren?
5. Welche Eigenschaften machen dynamische Programmierung auf dieses Problem anwendbar?
