---
title: "6.5 Dekodierung mit dem Viterbi-Algorithmus"
sidebar:
  label: "6.5 Dekodierung mit dem Viterbi-Algorithmus"
  order: 5
  group: "Part 2"
  part: "Part 2"
---

# **6.5 Dekodierung mit dem Viterbi-Algorithmus**

Sobald ein Hidden-Markov-Modell spezifiziert ist, stellt sich eine der ersten Fragen ganz unmittelbar:

> Gegeben eine beobachtete Sequenz: Welche verborgene Zustandsfolge hat sie am wahrscheinlichsten erzeugt?

Dies ist das **Dekodierungsproblem**, und seine klassische Lösung ist der **Viterbi-Algorithmus**.

Auf den ersten Blick wirkt das Problem einfach. Wenn die beobachtete Sequenz kurz ist und die Zahl der verborgenen Zustände klein, könnte man sich vorstellen, alle möglichen verborgenen Pfade aufzulisten, ihre Wahrscheinlichkeiten zu berechnen und den besten auszuwählen. Dies wird jedoch sehr schnell unpraktikabel. Für eine Sequenz der Länge $n$ und ein HMM mit $k$ verborgenen Zuständen gibt es $k^n$ mögliche Zustandsfolgen. Schon für moderate Werte von $n$ ist eine erschöpfende Suche unmöglich.

Der Viterbi-Algorithmus löst dieses Problem, indem er eine zentrale strukturelle Eigenschaft von Hidden-Markov-Modellen ausnutzt: Obwohl die Gesamtzahl vollständiger Pfade enorm ist, teilen viele dieser Pfade gemeinsame Präfixe. Daraus entsteht genau jene Struktur überlappender Teilprobleme, die mit dynamischer Programmierung behandelt werden kann.

---

## **6.5.1 Das Dekodierungsproblem noch einmal formuliert**

Sei die beobachtete Sequenz

$$
X = (x_1, x_2, \dots, x_n)
$$

und die verborgene Zustandsfolge

$$
S = (s_1, s_2, \dots, s_n)
$$

Für ein festes Modell $M$ besteht das Dekodierungsproblem darin, zu bestimmen:

$$
S^* = \arg\max_S P(X, S \mid M)
$$

Das heißt: Unter allen möglichen verborgenen Pfaden suchen wir denjenigen, der die gemeinsame Wahrscheinlichkeit von Beobachtungen und Pfad maximiert.

Diese Formulierung ist wichtig. Wir fragen nicht einfach, welcher Pfad für sich plausibel ist, sondern welcher Pfad unter dem Modell die wahrscheinlichste Erklärung der beobachteten Daten liefert.

Im Promotor-Hintergrund-Beispiel bedeutet dies, dass wir jedem beobachteten Nukleotid jenen Zustand zuordnen möchten, der es am besten erklärt, ohne dabei die Übergangsstruktur des Modells zu verletzen. Ein Pfad mit sehr plausiblen Emissionen, aber extrem unwahrscheinlichen Übergängen, wird nicht optimal sein. Ebenso wenig ein Pfad mit plausiblen Übergängen, aber schlechten Emissionen. Der Viterbi-Algorithmus balanciert beide Beiträge gegeneinander aus.

---

## **6.5.2 Warum Brute Force scheitert**

Um den Wert des Algorithmus zu verstehen, lohnt sich ein Blick auf eine naive Lösung.

Nehmen wir an, unser HMM habe nur zwei verborgene Zustände:

$$
\{P, B\}
$$

und die beobachtete Sequenz habe Länge fünf. Dann gibt es bereits

$$
2^5 = 32
$$

mögliche verborgene Pfade.

Für eine Länge von zwanzig wären es schon

$$
2^{20} = 1{,}048{,}576
$$

mögliche Pfade.

Für biologisch realistische Sequenzlängen ist eine erschöpfende Bewertung nicht mehr praktikabel. Zudem wäre ein Großteil der Arbeit redundant. Viele unterschiedliche Pfade teilen dieselben partiellen Präfixe, und die beste Fortsetzung solcher Präfixe wiederholt immer wieder neu zu berechnen, wäre verschwenderisch.

Der Viterbi-Algorithmus vermeidet diese Redundanz, indem er für jede Position und jeden Zustand die Wahrscheinlichkeit des besten Pfades speichert, der dort endet.

---

## **6.5.3 Die Grundidee des Algorithmus**

Die zentrale Beobachtung ist einfach und zugleich sehr mächtig.

Angenommen, wir wollen an Position $i$ den besten Pfad kennen, der in Zustand $s_j$ endet. Dann muss dieser beste Pfad an Position $i-1$ aus irgendeinem Vorgängerzustand gekommen sein. Unter allen möglichen Vorgängerzuständen gibt es genau einen, der den optimalen Pfad nach $s_j$ liefert.

Das bedeutet, dass wir nicht alle vollständigen Pfade gleichzeitig betrachten müssen. Stattdessen können wir die besten partiellen Pfade zu jedem Zustand schrittweise berechnen.

Definieren wir dazu den **Viterbi-Score**

$$
v_i(j)
$$

als die Wahrscheinlichkeit des wahrscheinlichsten Pfades, der die ersten $i$ Beobachtungen erzeugt und in Zustand $s_j$ endet.

Diese Größe fasst genau die Information zusammen, die wir für die weitere dynamische Programmierung benötigen.

---

## **6.5.4 Rekursionsrelation**

Der Algorithmus besteht aus drei Teilen: Initialisierung, Rekursion und Terminierung.

### **Initialisierung**

Für die erste Beobachtung $x_1$ ist der beste Pfad, der in Zustand $s_j$ endet, einfach die Wahrscheinlichkeit, in diesem Zustand zu starten und das Symbol zu emittieren:

$$
v_1(j) = \pi_j \, e_j(x_1)
$$

wobei

* $\pi_j$ die Anfangswahrscheinlichkeit von Zustand $s_j$ ist
* $e_j(x_1)$ die Emissionswahrscheinlichkeit des Symbols $x_1$ aus Zustand $s_j$ ist

### **Rekursion**

Für jede folgende Position $i+1$ berechnen wir:

$$
v_{i+1}(j) = \max_{k} \bigl( v_i(k) \, t_{kj} \, e_j(x_{i+1}) \bigr)
$$

Diese Gleichung hat eine sehr natürliche Interpretation.

Um an Position $i+1$ in Zustand $s_j$ zu enden, müssen wir

1. dem besten Pfad zu einem Vorgängerzustand $s_k$ an Position $i$ gefolgt sein
2. von $s_k$ nach $s_j$ übergehen
3. das beobachtete Symbol $x_{i+1}$ aus Zustand $s_j$ emittieren

Unter allen Vorgängerzuständen $s_k$ wählen wir denjenigen, der dieses Produkt maximiert.

### **Backpointer**

Um nicht nur die Wahrscheinlichkeit, sondern auch den eigentlichen Pfad rekonstruieren zu können, müssen wir zusätzlich speichern, welcher Vorgängerzustand das Maximum erreicht hat. Deshalb führen wir parallel eine **Backpointer-Tabelle**:

$$
b_{i+1}(j) = \arg\max_k \bigl( v_i(k) \, t_{kj} \, e_j(x_{i+1}) \bigr)
$$

Diese Tabelle speichert für jede Position und jeden Zustand, aus welchem Vorgängerzustand der optimale Pfad kommt.

### **Terminierung**

Nachdem die letzte Beobachtung verarbeitet wurde, ist der Score des besten vollständigen Pfades

$$
\max_j v_n(j)
$$

und der Endzustand dieses Pfades ist

$$
s_n^* = \arg\max_j v_n(j)
$$

Von diesem Endzustand aus rekonstruieren wir den gesamten Pfad, indem wir den Backpointern rückwärts folgen.

---

## **6.5.5 Ein durchgerechnetes Beispiel**

Wir gehen nun ein einfaches Beispiel durch, wie es auch in der Lehrveranstaltung verwendet wird, und betrachten ein Zwei-Zustands-HMM mit einem Promotorzustand $P$ und einem Hintergrundzustand $B$.

Angenommen, die Anfangswahrscheinlichkeiten lauten:

$$
\pi_P = 0.1, \qquad \pi_B = 0.9
$$

Übergangswahrscheinlichkeiten:

$$
t_{PP} = 0.55, \quad t_{PB} = 0.45
$$

$$
t_{BP} = 0.35, \quad t_{BB} = 0.65
$$

Emissionswahrscheinlichkeiten:

Für den Promotorzustand $P$:

$$
e_P(A)=0.15,\quad e_P(T)=0.12,\quad e_P(G)=0.30,\quad e_P(C)=0.43
$$

Für den Hintergrundzustand $B$:

$$
e_B(A)=0.30,\quad e_B(T)=0.30,\quad e_B(G)=0.20,\quad e_B(C)=0.20
$$

Betrachten wir nun die beobachtete Sequenz

$$
X = \text{A C C T A}
$$

Wir berechnen den besten Pfad Schritt für Schritt.

---

## **6.5.6 Schritt 1: Initialisierung**

Für das erste Symbol $A$ gilt:

$$
v_1(P) = \pi_P e_P(A) = 0.1 \cdot 0.15 = 0.015
$$

$$
v_1(B) = \pi_B e_B(A) = 0.9 \cdot 0.30 = 0.27
$$

Nach dem ersten Symbol hat also der beste Pfad, der in $B$ endet, eine deutlich höhere Wahrscheinlichkeit als der beste Pfad, der in $P$ endet. Intuitiv wird das erste $A$ also eher als Hintergrund als als Promotor erklärt.

---

## **6.5.7 Schritt 2: Zweite Beobachtung**

Das zweite Symbol ist $C$.

Für den Promotorzustand berechnen wir:

$$
v_2(P) = \max \Bigl(
v_1(P)t_{PP}e_P(C), 
v_1(B)t_{BP}e_P(C)
\Bigr)
$$

Einsetzen der Zahlen ergibt:

$$
v_2(P) = \max \Bigl(
0.015 \cdot 0.55 \cdot 0.43, 
0.27 \cdot 0.35 \cdot 0.43
\Bigr)
$$

$$
= \max(0.00355, 0.04064) = 0.04064
$$

Der beste Vorgänger ist also $B$.

Für den Hintergrundzustand gilt:

$$
v_2(B) = \max \Bigl(
v_1(P)t_{PB}e_B(C), 
v_1(B)t_{BB}e_B(C)
\Bigr)
$$

$$
v_2(B) = \max \Bigl(
0.015 \cdot 0.45 \cdot 0.20, 
0.27 \cdot 0.65 \cdot 0.20
\Bigr)
$$

$$
= \max(0.00135, 0.03510) = 0.03510
$$

Wieder ist der beste Vorgänger $B$.

An diesem Punkt ist der beste Pfad zu $P$ etwas besser als der beste Pfad zu $B$. Nach der Beobachtung von $AC$ bevorzugt das Modell also den Promotorzustand.

---

## **6.5.8 Schritt 3: Dritte Beobachtung**

Das dritte Symbol ist erneut $C$.

Für den Promotorzustand:

$$
v_3(P) = \max \Bigl(
v_2(P)t_{PP}e_P(C), 
v_2(B)t_{BP}e_P(C)
\Bigr)
$$

$$
= \max \Bigl(
0.04064 \cdot 0.55 \cdot 0.43, 
0.03510 \cdot 0.35 \cdot 0.43
\Bigr)
$$

$$
= \max(0.00961, 0.00528) = 0.00961
$$

Der beste Vorgänger ist also $P$.

Für den Hintergrundzustand:

$$
v_3(B) = \max \Bigl(
v_2(P)t_{PB}e_B(C), 
v_2(B)t_{BB}e_B(C)
\Bigr)
$$

$$
= \max \Bigl(
0.04064 \cdot 0.45 \cdot 0.20, 
0.03510 \cdot 0.65 \cdot 0.20
\Bigr)
$$

$$
= \max(0.00366, 0.00456) = 0.00456
$$

Der beste Vorgänger ist also $B$.

Nun ist der Promotorpfad klar im Vorteil.

---

## **6.5.9 Schritt 4: Vierte Beobachtung**

Das vierte Symbol ist $T$.

Für den Promotorzustand:

$$
v_4(P) = \max \Bigl(
v_3(P)t_{PP}e_P(T), 
v_3(B)t_{BP}e_P(T)
\Bigr)
$$

$$
= \max \Bigl(
0.00961 \cdot 0.55 \cdot 0.12, 
0.00456 \cdot 0.35 \cdot 0.12
\Bigr)
$$

$$
= \max(0.000634, 0.000192) = 0.000634
$$

Der beste Vorgänger ist also $P$.

Für den Hintergrundzustand:

$$
v_4(B) = \max \Bigl(
v_3(P)t_{PB}e_B(T), 
v_3(B)t_{BB}e_B(T)
\Bigr)
$$

$$
= \max \Bigl(
0.00961 \cdot 0.45 \cdot 0.30, 
0.00456 \cdot 0.65 \cdot 0.30
\Bigr)
$$

$$
= \max(0.001297, 0.000889) = 0.001297
$$

Der beste Vorgänger ist also $P$.

Nun ist der beste Pfad zu $B$ besser als der beste Pfad zu $P$, was auf einen Rückübergang in den Hintergrund hinweist.

---

## **6.5.10 Schritt 5: Fünfte Beobachtung**

Das fünfte Symbol ist $A$.

Für den Promotorzustand:

$$
v_5(P) = \max \Bigl(
v_4(P)t_{PP}e_P(A), 
v_4(B)t_{BP}e_P(A)
\Bigr)
$$

$$
= \max \Bigl(
0.000634 \cdot 0.55 \cdot 0.15, 
0.001297 \cdot 0.35 \cdot 0.15
\Bigr)
$$

$$
= \max(0.0000523, 0.0000681) = 0.0000681
$$

Der beste Vorgänger ist also $B$.

Für den Hintergrundzustand:

$$
v_5(B) = \max \Bigl(
v_4(P)t_{PB}e_B(A), 
v_4(B)t_{BB}e_B(A)
\Bigr)
$$

$$
= \max \Bigl(
0.000634 \cdot 0.45 \cdot 0.30, 
0.001297 \cdot 0.65 \cdot 0.30
\Bigr)
$$

$$
= \max(0.0000856, 0.0002529) = 0.0002529
$$

Der beste Vorgänger ist also $B$.

Der insgesamt beste Endzustand ist damit $B$, weil

$$
v_5(B) > v_5(P)
$$

---

## **6.5.11 Traceback**

Nun rekonstruieren wir den besten Pfad, indem wir den Backpointern rückwärts folgen.

Aus den obigen Berechnungen ergibt sich als bester Endzustand $B$. Die Vorgängerentscheidungen lauteten:

* an Position 5: $B \leftarrow B$
* an Position 4: $B \leftarrow P$
* an Position 3: $P \leftarrow P$
* an Position 2: $P \leftarrow B$
* an Position 1: Start in $B$

Damit lautet der wahrscheinlichste verborgene Pfad:

$$
B \quad P \quad P \quad B \quad B
$$

Genau dies erwarten wir von einem Dekodierungsalgorithmus. Die beobachtete Sequenz $ACCTA$ wird so erklärt, dass sie im Hintergrund beginnt, eine kurze promotorähnliche Region durchläuft und dann wieder in den Hintergrund übergeht.

---

## **6.5.12 Interpretation des Ergebnisses**

Dieses Beispiel illustriert mehrere wichtige Punkte.

Erstens hängt der wahrscheinlichste Zustand an einer gegebenen Position nicht nur vom beobachteten Symbol an dieser Position ab. Er hängt auch von der Wahrscheinlichkeit ab, diesen Zustand aus dem vorhergehenden Pfad zu erreichen. Genau deshalb lässt sich der Viterbi-Algorithmus nicht durch eine einfache positionsweise Klassifikationsregel ersetzen.

Zweitens balanciert der Algorithmus **Emissionsevidenz** gegen **Übergangsstruktur** aus. Ein Symbol, das mäßig gut mit dem Promotorzustand vereinbar ist, kann dennoch dem Hintergrund zugeordnet werden, wenn der Übergang in den Promotor unwahrscheinlich ist, und umgekehrt.

Drittens ist das Resultat nicht bloß ein Score, sondern eine interpretierbare Segmentierung der Sequenz. Biologisch kann diese Segmentierung Regionen unterschiedlichen funktionellen Charakters entsprechen.

---

## **6.5.13 Die dynamische Programmierungsstruktur**

Es lohnt sich, das Prinzip der dynamischen Programmierung an dieser Stelle explizit zu machen.

Warum ist es zulässig, an jeder Zelle der Viterbi-Tabelle nur den besten Pfad zu speichern, der in diesem Zustand endet, und alle anderen partiellen Pfade zu verwerfen?

Weil jede zukünftige Fortsetzung nur vom aktuellen Zustand und vom aktuellen Score abhängt, nicht aber von der detaillierten Geschichte, wie dieser Zustand erreicht wurde. Wenn ein partieller Pfad zu Zustand $P$ schlechter ist als ein anderer, kann er ihn später nie mehr überholen, da beide dieselben zukünftigen Übergangs- und Emissionsoptionen sehen.

Dies ist genau die Eigenschaft optimaler Teilstruktur, die den Viterbi-Algorithmus möglich macht.

---

## **6.5.14 Rechnerische Komplexität**

Angenommen, ein HMM habe $N$ Zustände und die beobachtete Sequenz Länge $L$.

An jeder Position betrachten wir für jeden Zustand alle möglichen Vorgängerzustände. Daraus ergibt sich eine Zeitkomplexität von

$$
O(N^2 L)
$$

Dies ist dramatisch besser als die exponentielle Komplexität erschöpfender Enumeration.

Die Speicherkosten betragen typischerweise

$$
O(NL)
$$

wenn die vollständige Tabelle und die Backpointer gespeichert werden, was für moderate Zustandsräume in der Regel akzeptabel ist.

---

## **6.5.15 Konzeptionelle Zusammenfassung**

Der Viterbi-Algorithmus löst das Dekodierungsproblem, indem er drei Ideen verbindet:

* **zustandsspezifische Emissionen**
* **Übergänge zwischen Zuständen**
* **dynamische Programmierung**

Sein Output ist der einzelne wahrscheinlichste verborgene Pfad, der die beobachtete Sequenz erklärt.

Für die biologische Sequenzanalyse macht ihn dies zu einem leistungsfähigen Werkzeug für:

* Promotorerkennung
* Vorhersage von Genstruktur
* Annotation von Proteinsekundärstruktur
* profilbasierte Sequenzklassifikation

In all diesen Anwendungen geht es nicht nur darum, eine Sequenz zu bewerten, sondern die verborgene biologische Organisation zu rekonstruieren, die ihr zugrunde liegt.

---

## **Fragen zur Selbstkontrolle**

1. Warum ist eine erschöpfende Suche über alle verborgenen Pfade nicht praktikabel?
2. Was repräsentiert die Größe $v_i(j)$ im Viterbi-Algorithmus?
3. Warum werden Backpointer benötigt?
4. In welchem Sinn verwendet der Viterbi-Algorithmus dynamische Programmierung?
5. Warum kann der wahrscheinlichste Zustand an einer Position von früheren Positionen abhängen?
