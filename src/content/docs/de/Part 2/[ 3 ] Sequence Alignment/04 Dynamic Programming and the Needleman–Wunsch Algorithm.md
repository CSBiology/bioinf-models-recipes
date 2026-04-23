---
title: "3.4 Dynamische Programmierung und der Needleman–Wunsch-Algorithmus"
sidebar:
  label: "3.4 Dynamische Programmierung und der Needleman–Wunsch-Algorithmus"
  order: 4
  group: "Part 2"
  part: "Part 2"
---

# **3.4 Dynamische Programmierung und der Needleman–Wunsch-Algorithmus**

## **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* globales Sequenzalignment als Problem der dynamischen Programmierung zu formulieren
* die rekursive Bewertungsrelation für Alignments herzuleiten
* die Matrix der dynamischen Programmierung aufzubauen und zu interpretieren
* durch Traceback ein optimales Alignment zu rekonstruieren
* die algorithmische Komplexität des globalen Alignments zu verstehen

---

## **Von der Idee zum Algorithmus**

Im vorherigen Abschnitt haben wir Sequenzalignment als Pfadsuchproblem in einem Gitter neu formuliert. Jeder Pfad entspricht einem Alignment, und das Ziel besteht darin, den Pfad mit dem höchsten Score vom Ursprung $(0,0)$ zum Endpunkt $(m,n)$ zu finden.

Die entscheidende Einsicht war, dass dieses Problem eine **optimale Teilstruktur** besitzt. Dadurch können wir den optimalen Alignment-Score schrittweise berechnen, indem wir bereits bekannte Lösungen für kleinere Präfixe wiederverwenden.

Die dynamische Programmierung liefert den Mechanismus, um diese Idee in einen konkreten Algorithmus zu überführen.

---

## **Definition der Matrix der dynamischen Programmierung**

Wir definieren eine Matrix $F$ der Größe $(m+1) \times (n+1)$, wobei:

$$
F(i,j)
$$

den optimalen Alignment-Score zwischen den Präfixen

$$
x_1 \dots x_i \quad \text{und} \quad y_1 \dots y_j
$$

repräsentiert.

Damit gilt:

* $F(0,0)$ entspricht dem Alignment zweier leerer Sequenzen
* $F(m,n)$ enthält den Score des optimalen globalen Alignments

---

## **Initialisierung**

Bevor wir die Matrix füllen können, müssen wir Randbedingungen festlegen.

Das Alignment einer Sequenz mit einer leeren Sequenz erfordert das Einfügen von Lücken:

$$
F(i,0) = i \cdot g
\qquad
F(0,j) = j \cdot g
$$

wobei $g$ die Gap-Strafe ist, typischerweise ein negativer Wert.

Das spiegelt die Idee wider, dass das Alignment von $i$ Symbolen mit nichts genau $i$ Deletionen oder Insertionen erfordert.

---

## **Rekursive Formulierung**

Nun betrachten wir, wie $F(i,j)$ berechnet werden kann.

Wie bereits diskutiert, kann das Alignment an Position $(i,j)$ aus genau drei Möglichkeiten hervorgehen:

1. **Match oder Mismatch** (diagonaler Schritt):
   $$
   F(i-1, j-1) + s(x_i, y_j)
   $$

2. **Insertion** (Lücke in $Y$, vertikaler Schritt):
   $$
   F(i-1, j) + g
   $$

3. **Deletion** (Lücke in $X$, horizontaler Schritt):
   $$
   F(i, j-1) + g
   $$

Daraus ergibt sich die Rekursionsgleichung:

$$
F(i,j) = \max \begin{cases}
F(i-1, j-1) + s(x_i, y_j) \
F(i-1, j) + g \
F(i, j-1) + g
\end{cases}
$$

Diese Gleichung formalisiert den intuitiven Alignment-Prozess, indem sie alle möglichen Erweiterungen eines optimalen Alignments berücksichtigt.

---

## **Interpretation der Rekursion**

Jeder Term der Rekursion hat eine klare Bedeutung:

* Der diagonale Term setzt voraus, dass $x_i$ mit $y_j$ aligniert wird
* Der vertikale Term setzt voraus, dass $x_i$ mit einer Lücke aligniert wird
* Der horizontale Term setzt voraus, dass $y_j$ mit einer Lücke aligniert wird

Der Algorithmus wählt jeweils die Möglichkeit mit dem höchsten Score und garantiert dadurch Optimalität in jedem Schritt.

Das ist der Kern dynamischer Programmierung: **lokale optimale Entscheidungen auf der Grundlage global konsistenter Teilprobleme**.

---

## **Ein durchgerechnetes Beispiel**

Betrachten wir ein einfaches Beispiel, um das Verfahren zu veranschaulichen.

Wir alignieren:

$$
X = \text{ACGC}
\qquad
Y = \text{GACTAC}
$$

unter Verwendung des folgenden Bewertungsschemas:

* Match: $+1$
* Mismatch: $0$
* Gap: $-1$

---

### **Schritt 1: Initialisierung der Matrix**

Wir konstruieren ein Gitter, dessen Zeilen $X$ und dessen Spalten $Y$ entsprechen. Die erste Zeile und die erste Spalte werden mit der Gap-Strafe initialisiert:

```
      -   G   A   C   T   A   C
  -   0  -1  -2  -3  -4  -5  -6
  A  -1
  C  -2
  G  -3
  C  -4
```

---

### **Schritt 2: Füllen der Matrix**

Nun berechnen wir jede Zelle mithilfe der Rekursionsgleichung. Zum Beispiel:

* An Position $(1,1)$ (Alignment von A mit G):

  * diagonal: $0 + 0 = 0$ (Mismatch)
  * oben: $-1 - 1 = -2$
  * links: $-1 - 1 = -2$

  → $F(1,1) = 0$

Fahren wir auf diese Weise fort, so wird die gesamte Matrix ausgefüllt. Jeder Eintrag repräsentiert den besten Score, der für die entsprechenden Präfixe erreichbar ist.

---

### **Schritt 3: Traceback**

Sobald die Matrix vollständig ist, befindet sich der optimale Score in $F(m,n)$.

Der Score allein genügt jedoch nicht. Wir möchten das tatsächliche Alignment rekonstruieren.

Dazu führen wir einen **Traceback** durch:

* Wir beginnen bei $(m,n)$
* In jedem Schritt gehen wir in die Richtung zurück, die zum optimalen Score geführt hat
* Wir setzen diesen Prozess fort, bis $(0,0)$ erreicht ist

So rekonstruieren wir die Folge von Operationen, die das optimale Alignment erzeugt hat.

---

### **Resultierende Alignments**

Für dieses Beispiel können mehrere optimale Alignments existieren, etwa:

```
-ACG-C
GACTAC
```

oder

```
-AC-GC
GACTAC
```

Das illustriert einen wichtigen Punkt:

> **Optimale Alignments müssen nicht eindeutig sein.**

---

## **Algorithmische Struktur**

Der Needleman–Wunsch-Algorithmus verläuft in drei Phasen:

1. **Initialisierung**
2. **Füllen der Matrix (Vorwärtsphase)**
3. **Traceback (Rückwärtsphase)**

Diese Struktur trennt klar zwischen der Berechnung optimaler Scores und der Rekonstruktion der zugehörigen Lösung.

---

## **Komplexitätsanalyse**

Seien $m$ und $n$ die Längen der beiden Sequenzen.

* **Zeitkomplexität**:
  $$
  O(mn)
  $$
  da jede der $mn$ Zellen genau einmal berechnet wird

* **Speicherkomplexität**:
  $$
  O(mn)
  $$
  da für den Traceback die vollständige Matrix gespeichert werden muss

Dies ist eine dramatische Verbesserung gegenüber der exponentiellen Komplexität von Brute-Force-Ansätzen.

Obwohl der Needleman–Wunsch-Algorithmus zeitlich effizient ist, erfordert er das Speichern der gesamten Matrix der dynamischen Programmierung. Für lange biologische Sequenzen, etwa NRPS-Enzyme, wird das in der Praxis zu einer wichtigen Einschränkung. Später in diesem Kapitel werden wir dieses Problem erneut aufgreifen und einen speichereffizienteren Algorithmus auf der Grundlage von Divide-and-Conquer entwickeln.

---

## **Konzeptionelle Interpretation**

Der Needleman–Wunsch-Algorithmus liefert die erste vollständige Lösung des Sequenzalignment-Problems.

Konzeptionell leistet er drei Dinge:

* Er definiert Alignment als Optimierungsproblem
* Er liefert ein prinzipielles Verfahren zur Berechnung optimaler Lösungen
* Er macht die im Bewertungsschema kodierten Annahmen explizit

Aus Sicht der Modellierung beantwortet der Algorithmus die Frage:

> **Was ist unter einem gegebenen Bewertungsmodell die beste Erklärung dafür, wie eine Sequenz in eine andere überführt werden kann?**

---

## **Konzeptionelle Zusammenfassung**

Globales Sequenzalignment lässt sich effizient mit dynamischer Programmierung lösen. Durch die Definition einer rekursiven Score-Funktion und die systematische Auswertung aller Präfix-Alignments berechnet der Needleman–Wunsch-Algorithmus das optimale Alignment in polynomialer Zeit.

Der Algorithmus verwandelt ein unbeherrschbares Suchproblem in eine strukturierte Berechnung über einer Matrix und macht Sequenzalignment selbst für mäßig lange Sequenzen praktisch anwendbar.

---

## **Fragen zur Selbstkontrolle**

1. Was repräsentiert der Eintrag $F(i,j)$ in der Matrix der dynamischen Programmierung?
2. Warum gibt es in der Rekursionsgleichung genau drei Fälle?
3. Wozu dient der Initialisierungsschritt?
4. Warum ist nach dem Füllen der Matrix ein Traceback erforderlich?
5. Warum läuft der Algorithmus in $O(mn)$ Zeit?
