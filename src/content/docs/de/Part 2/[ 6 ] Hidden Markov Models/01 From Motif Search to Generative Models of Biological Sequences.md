---
title: "6.1 Von der Motivsuche zu generativen Modellen biologischer Sequenzen"
sidebar:
  label: "6.1 Von der Motivsuche zu generativen Modellen biologischer Sequenzen"
  order: 1
  group: "Part 2"
  part: "Part 2"
---

# **6.1 Von der Motivsuche zu generativen Modellen biologischer Sequenzen**

Im vorherigen Kapitel haben wir Motivsuche als Problem der Identifikation wiederkehrender Muster in biologischen Sequenzen betrachtet. Dabei haben wir positionsspezifische Modelle eingeführt, mit denen sich solche Muster probabilistisch darstellen und Sequenzen auf wahrscheinliche Motivvorkommen durchsuchen lassen. Dieser Rahmen ist bereits sehr leistungsfähig, beruht aber noch auf einer vereinfachenden Annahme: Motive werden als statische Muster mit voneinander unabhängigen Positionen beschrieben.

In der biologischen Realität entstehen Sequenzen jedoch nicht aus starren Schablonen. Sie sind das Resultat biologischer Prozesse, die Variabilität, Abhängigkeiten und strukturelle Organisation hervorbringen. Um dies zu erfassen, gehen wir nun einen konzeptionellen Schritt weiter. Anstatt zu fragen, ob eine Sequenz zu einem Motiv *passt*, stellen wir eine grundlegendere Frage:

> **Welcher Prozess könnte diese Sequenz erzeugt haben?**

---

## **Vom Pattern Matching zum modellbasierten Denken**

Betrachten wir noch einmal das Problem der Motivsuche in DNA. Ein Genom ist eine lange Sequenz aus Nukleotiden, in die kurze funktionelle Regionen wie Promotoren, Spleißstellen oder Bindungsstellen für Transkriptionsfaktoren eingebettet sind. Diese Regionen sind typischerweise kurz, nur schwach konserviert und von langen Abschnitten unspezifischer Hintergrundsequenz umgeben.

Dies motiviert eine einfache, aber mächtige Abstraktion. Wir nehmen an, dass unterschiedliche Teile der Sequenz von unterschiedlichen zugrunde liegenden Prozessen erzeugt werden:

* ein **motivgenerierender Prozess**, der biologisch bedeutungsvolle Muster erzeugt
* ein **Hintergrundprozess**, der unspezifische Sequenz hervorbringt

Jede Position der Sequenz ist somit einem dieser Prozesse zugeordnet, auch wenn diese Zuordnung nicht direkt beobachtbar ist.

---

## **Likelihood als Maß der Kompatibilität**

Um diese Idee operationalisierbar zu machen, quantifizieren wir mit dem Begriff der **Likelihood**, wie gut eine Sequenz zu einem gegebenen Modell passt.

Gegeben ein Modell $M$ und eine Sequenz $S$, misst die Likelihood

$$
P(S \mid M)
$$

wie wahrscheinlich es ist, dass die Sequenz durch das Modell erzeugt wurde.

Im Fall positionsspezifischer Modelle wird das Modell durch eine **Position Probability Matrix (PPM)** dargestellt. Jede Position $i$ definiert eine Wahrscheinlichkeitsverteilung über Nukleotide. Unter der Annahme positionsweiser Unabhängigkeit ergibt sich die Likelihood einer Sequenz der Länge $L$ als

$$
P(S \mid M) = \prod_{i=1}^{L} P(x_i \mid M_i)
$$

wobei $x_i$ das Nukleotid an Position $i$ ist und $M_i$ die Verteilung an dieser Position bezeichnet.

---

## **Ein durchgerechnetes Beispiel**

Um dies konkret zu machen, betrachten wir ein Motivmodell der Länge fünf, das durch die folgenden positionsspezifischen Wahrscheinlichkeiten beschrieben wird:

| Position | A   | C   | G   | T   |
| -------- | --- | --- | --- | --- |
| 1        | 0.1 | 0.5 | 0.2 | 0.2 |
| 2        | 0.3 | 0.2 | 0.2 | 0.3 |
| 3        | 0.1 | 0.1 | 0.6 | 0.2 |
| 4        | 0.2 | 0.1 | 0.5 | 0.2 |
| 5        | 0.2 | 0.6 | 0.1 | 0.1 |

Betrachten wir nun die Sequenz

$$
S = \text{GAGGT}
$$

Dann berechnen wir ihre Likelihood unter dem Modell durch Multiplikation der positionsweisen Wahrscheinlichkeiten:

* Position 1: $P(G) = 0.2$
* Position 2: $P(A) = 0.3$
* Position 3: $P(G) = 0.6$
* Position 4: $P(G) = 0.5$
* Position 5: $P(T) = 0.1$

Also gilt:

$$
P(S \mid M) = 0.2 \cdot 0.3 \cdot 0.6 \cdot 0.5 \cdot 0.1 = 0.0018
$$

Dieser Wert quantifiziert, wie gut die Sequenz mit dem Motivmodell vereinbar ist. Eine höhere Likelihood bedeutet eine bessere Übereinstimmung.

---

## **Von Likelihood zur Motiverkennung**

Diese Berechnung ermöglicht ein einfaches Scanning-Verfahren. Gegeben eine lange Sequenz, schieben wir ein Fenster der Länge fünf entlang der Sequenz und berechnen für jede Teilsequenz die Likelihood. Dadurch entsteht eine Funktion

$$
\text{Position} \mapsto P(S_{i:i+L-1} \mid M)
$$

die sich als **Likelihood-Landschaft** interpretieren lässt.

Bereiche mit hoher Likelihood entsprechen Teilsequenzen, die vom Motivmodell gut erklärt werden. In der Praxis kann Motivsuche daher als Identifikation von Peaks in dieser Landschaft formuliert werden.

Diese Perspektive ist konzeptionell stark: Anstatt direkt nach Mustern zu suchen, bewerten wir, wie gut ein generatives Modell verschiedene Teile der Sequenz erklärt.

---

## **Grenzen des Modells**

Trotz seiner Eleganz besitzt dieser Ansatz wichtige Einschränkungen.

Erstens nimmt er Unabhängigkeit zwischen Positionen an. Aus biologischer Perspektive ist dies selten vollständig gerechtfertigt. Insbesondere in Proteinsequenzen und regulatorischen Elementen erzeugen strukturelle und funktionelle Zwänge Abhängigkeiten zwischen Positionen.

Zweitens setzt das Modell eine feste Motivlänge voraus. Insertionen und Deletionen, die in biologischen Sequenzen häufig auftreten, lassen sich so nicht natürlich erfassen. Schon eine einzelne Insertion kann die Likelihood einer ansonsten plausiblen Motivinstanz drastisch reduzieren.

Schließlich repräsentiert das Modell keine Übergänge zwischen unterschiedlichen Sequenzbereichen. Es behandelt Motive als isolierte Objekte und nicht als Teile eines größeren generativen Prozesses.

---

## **Hin zu generativen Sequenzmodellen**

Diese Einschränkungen motivieren einen ausdrucksstärkeren Rahmen. Anstatt Motive als statische Wahrscheinlichkeitstabellen zu beschreiben, modellieren wir nun den **Prozess, der Sequenzen erzeugt**.

In einem solchen Modell gilt:

* die Sequenz wird Schritt für Schritt erzeugt
* in jedem Schritt befindet sich das System in einem bestimmten internen Zustand
* dieser Zustand bestimmt, welche Symbole bevorzugt emittiert werden
* das System kann im Zeitverlauf zwischen Zuständen wechseln

Entscheidend ist, dass diese internen Zustände nicht direkt beobachtbar sind. Wir sehen nur die emittierte Sequenz, nicht aber den zugrunde liegenden Prozess.

---

## **Ausblick: Verborgene Struktur in Sequenzen**

Damit gelangen wir zur zentralen Idee dieses Kapitels.

Wir modellieren biologische Sequenzen als von einem System erzeugt, das sich durch eine Folge **verborgener Zustände** bewegt und in jedem Zustand beobachtbare Symbole emittiert. Einige dieser Zustände können biologisch bedeutungsvolle Regionen wie Promotoren repräsentieren, andere Hintergrundsequenz.

Da die Zustandsfolge nicht direkt sichtbar ist, bleibt sie verborgen.

Ein solches Modell bezeichnet man als **Hidden-Markov-Modell (HMM)**.

---

## **Konzeptioneller Übergang**

Mit diesem Perspektivwechsel wird Motivsuche zu einem Problem der **Inferenz verborgener Struktur** und nicht bloß der Mustererkennung.

Wir interessieren uns nun nicht mehr nur dafür, ob ein Motiv vorkommt, sondern dafür, zu rekonstruieren:

* welche Regionen zu welcher funktionellen Klasse gehören
* wie wahrscheinlich eine Sequenz unter einem bestimmten Modell ist
* wie sich solche Modelle aus Daten lernen lassen

In den folgenden Abschnitten entwickeln wir diesen Rahmen schrittweise, beginnend mit der Markov-Eigenschaft und ihren Konsequenzen für die Modellierung von Sequenzabhängigkeiten.

---

## **Fragen zur Selbstkontrolle**

1. Wie wird Likelihood verwendet, um zu bewerten, ob eine Sequenz zu einem Motivmodell passt?
2. Welche Position trägt im durchgerechneten Beispiel am stärksten zur Likelihood bei und warum?
3. Warum vereinfacht die Unabhängigkeitsannahme die Berechnung, und warum ist sie biologisch problematisch?
4. Wie verwandelt Sliding-Window-Scanning mit Likelihoods das Problem der Motivsuche in ein Signaldetektionsproblem?
5. Welche zentralen Einschränkungen positionsspezifischer Modelle motivieren den Übergang zu generativen Sequenzmodellen?
