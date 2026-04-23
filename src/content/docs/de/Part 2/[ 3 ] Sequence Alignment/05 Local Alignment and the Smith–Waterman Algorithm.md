---
title: "3.5 Lokales Alignment und der Smith–Waterman-Algorithmus"
sidebar:
  label: "3.5 Lokales Alignment und der Smith–Waterman-Algorithmus"
  order: 5
  group: "Part 2"
  part: "Part 2"
---

# **3.5 Lokales Alignment und der Smith–Waterman-Algorithmus**

## **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* zu erklären, warum globales Alignment für biologische Sequenzen oft ungeeignet ist
* lokales Alignment und seine biologische Interpretation zu definieren
* die modifizierte Rekursion der dynamischen Programmierung für lokales Alignment herzuleiten
* den Traceback für lokale Alignments durchzuführen
* zu verstehen, wie lokales Alignment konservierte Regionen innerhalb größerer Sequenzen erkennt

---

## **Warum globales Alignment nicht ausreicht**

In Abschnitt 3.4 haben wir den Needleman–Wunsch-Algorithmus für **globales Alignment** entwickelt, bei dem zwei Sequenzen über ihre gesamte Länge hinweg aligniert werden.

Dieser Ansatz setzt implizit voraus:

> **Die Sequenzen sind über ihren gesamten Verlauf hinweg miteinander verwandt.**

Diese Annahme ist in manchen Fällen gerechtfertigt, wird in biologischen Systemen aber häufig verletzt.

Kehren wir zu dem Beispiel zurück, das dieses Kapitel motiviert hat: **nicht-ribosomale Peptidsynthetasen (NRPS)**.

Diese Enzyme sind **modular** aufgebaut:

* Jedes Modul erfüllt eine spezifische Funktion
* Nur bestimmte Regionen, etwa Adenylierungsdomänen, sind konserviert
* Andere Regionen können sich stark unterscheiden oder vollständig fehlen

Beim Vergleich zweier NRPS-Proteine ist es daher unwahrscheinlich, dass ihre gesamten Sequenzen homolog sind. Stattdessen **entsprechen meist nur bestimmte Segmente einander**.

Dadurch entsteht eine Diskrepanz zwischen Modell und Biologie:

* Globales Alignment zwingt auch nicht verwandte Regionen in ein gemeinsames Alignment
* Dadurch entstehen künstliche Lücken und Mismatches
* Der resultierende Score kann biologisch relevante Ähnlichkeit verdecken

Diese Beobachtung motiviert eine neue Frage:

> **Wie können wir Ähnlichkeit erfassen, die auf Teilsequenzen beschränkt ist und nicht die gesamte Sequenz betrifft?**

---

## **Von globaler zu lokaler Ähnlichkeit**

Um dieses Problem zu lösen, definieren wir das Alignment-Problem neu.

Anstatt vollständige Sequenzen zu alignieren, erlauben wir dem Alignment, sich auf **Teilstrings** zu konzentrieren:

* auf jedes beliebige zusammenhängende Segment der Sequenz $X$
* auf jedes beliebige zusammenhängende Segment der Sequenz $Y$

Das Ziel lautet dann:

> **Finde das Paar von Teilstrings, dessen Alignment den höchsten Score liefert.**

Das ist die Grundidee des **lokalen Alignments**.

---

## **Konzeptionelle Interpretation**

Lokales Alignment verändert die Interpretation des Problems in einer wichtigen Weise.

* Globales Alignment fragt:
  → *Wie ähnlich sind diese Sequenzen insgesamt?*

* Lokales Alignment fragt:
  → *Teilen diese Sequenzen eine Region hoher Ähnlichkeit?*

Dieser Unterschied ist in vielen biologischen Kontexten entscheidend:

* beim Nachweis konservierter Domänen in Proteinen
* bei der Identifikation regulatorischer Motive in DNA
* beim Auffinden homologer Regionen zwischen ansonsten nicht verwandten Sequenzen

Im NRPS-Beispiel erlaubt uns lokales Alignment, uns auf **funktionell relevante Domänen** zu konzentrieren und nicht verwandte flankierende Regionen zu ignorieren.

---

## **Definition des lokalen Alignments**

Ein lokales Alignment ist definiert als Alignment von Teilstrings:

$$
x_i \dots x_k \quad \text{und} \quad y_j \dots y_\ell
$$

sodass der Alignment-Score über alle möglichen Wahlmöglichkeiten von $i, k, j, \ell$ maximiert wird.

Wichtig ist dabei:

* nicht alignierte Regionen am Anfang und Ende verursachen **keine Strafe**
* nur der tatsächlich alignierte Bereich trägt zum Score bei

---

## **Die Smith–Waterman-Rekursion**

Überraschenderweise lässt sich das Problem des lokalen Alignments durch eine kleine Modifikation des bereits eingeführten Schemas der dynamischen Programmierung lösen.

Wir definieren erneut eine Matrix $F(i,j)$, nun jedoch mit einer entscheidenden Änderung:

$$
F(i,j) = \max \begin{cases}
0 \
F(i-1, j-1) + s(x_i, y_j) \
F(i-1, j) + g \
F(i, j-1) + g
\end{cases}
$$

---

## **Warum die Null entscheidend ist**

Die zusätzliche Option $0$ ist das definierende Merkmal des lokalen Alignments.

Ihre Wirkung ist einfach, aber tiefgreifend:

> **Wenn alle Alignierungsoptionen zu einem negativen Score führen, setzen wir den Score auf null zurück und beginnen ein neues Alignment.**

Dadurch kann der Algorithmus:

* schlecht passende Präfixe ignorieren
* sich ausschließlich auf Regionen hoher Ähnlichkeit konzentrieren

Im Gegensatz zum globalen Alignment, bei dem ein Pfad die gesamte Matrix durchlaufen muss, dürfen lokale Alignments:

* an beliebiger Stelle beginnen
* an beliebiger Stelle enden

---

## **Initialisierung**

Wegen dieses Zurücksetzens auf null wird die Initialisierung sehr einfach:

$$
F(i,0) = 0
\qquad
F(0,j) = 0
$$

Dies spiegelt die Idee wider, dass ein Alignment ohne Strafkosten an jeder Position beginnen kann.

---

## **Ein durchgerechnetes Beispiel**

Betrachten wir die Sequenzen:

$$
X = \text{ACGC}
\qquad
Y = \text{GATTGA}
$$

mit dem Bewertungsschema:

* Match: $+4$
* Mismatch: $-1$
* Gap: $-2$

---

### **Schritt 1: Initialisierung der Matrix**

Alle Einträge in der ersten Zeile und der ersten Spalte werden auf null gesetzt:

```id="zj7h4k"
      -   G   A   T   T   G   A
  -   0   0   0   0   0   0   0
  A   0
  C   0
  G   0
  C   0
```

---

### **Schritt 2: Füllen der Matrix**

Nun berechnen wir jede Zelle mithilfe der Rekursion.

Dabei gilt in jedem Schritt:

* negative Werte werden durch null ersetzt
* positive Werte zeigen lokal gute Alignments an

Während die Matrix gefüllt wird, treten Regionen hoher Ähnlichkeit als **Inseln hoher Scores** hervor.

---

### **Schritt 3: Bestimmung des Maximums**

Im Unterschied zum globalen Alignment liegt der optimale Score nicht notwendigerweise bei $(m,n)$.

Stattdessen gilt:

> **Der höchste Wert irgendwo in der Matrix entspricht dem besten lokalen Alignment.**

---

### **Schritt 4: Traceback**

Der Traceback beginnt in der Zelle mit dem maximalen Score und verläuft:

* diagonal, nach oben oder nach links
* entlang des Pfades optimaler Entscheidungen
* **bis eine Zelle mit dem Wert 0 erreicht wird**

Diese Abbruchbedingung markiert den Beginn des lokalen Alignments.

---

## **Beispielalignments**

Für das obige Beispiel gehören zu den optimalen lokalen Alignments etwa:

```id="l6mq2v"
AC-G
ATTG
```

oder

```id="w1b9xz"
A-CG
ATTG
```

Diese Alignments erfassen eine Region starker Ähnlichkeit, obwohl sich die vollständigen Sequenzen insgesamt deutlich unterscheiden.

---

## **Konzeptioneller Vergleich: Globales vs. lokales Alignment**

Die Unterschiede zwischen beiden Ansätzen lassen sich wie folgt zusammenfassen:

| Aspekt         | Globales Alignment                 | Lokales Alignment               |
| -------------- | ---------------------------------- | ------------------------------- |
| Umfang         | Gesamte Sequenzen                  | Teilstrings                     |
| Initialisierung | Gap-Strafen                        | Null                            |
| Rekursion      | Kein Reset                         | Enthält Reset auf 0             |
| Traceback      | Von $(m,n)$                        | Von der maximalen Zelle         |
| Anwendungsfall | Ähnliche Sequenzen gleicher Länge  | Nachweis konservierter Regionen |

---

## **Biologische Interpretation**

Lokales Alignment ist besonders mächtig, weil es gut dazu passt, wie biologische Sequenzen evolvieren:

* Domänen können eingefügt, entfernt oder umgeordnet werden
* nur bestimmte Regionen bleiben konserviert
* funktionelle Motive können kurz und lokal begrenzt sein

Dadurch lässt sich **biologisch bedeutsame Ähnlichkeit** selbst dann erkennen, wenn große Teile der Sequenzen nicht miteinander verwandt sind.

Im Kontext von NRPS bedeutet das, dass wir:

* konservierte katalytische Domänen identifizieren können
* substratspezifische Motive erkennen können
* funktionell relevante Regionen über verschiedene Organismen hinweg vergleichen können

---

## **Konzeptionelle Zusammenfassung**

Lokales Alignment erweitert den Alignment-Rahmen auf Situationen, in denen Ähnlichkeit auf Teilsequenzen beschränkt ist. Indem Alignments frei beginnen und enden dürfen und negative Scores auf null zurückgesetzt werden, identifiziert der Smith–Waterman-Algorithmus Regionen hoher Ähnlichkeit innerhalb größerer Sequenzen.

Diese Modifikation verwandelt Sequenzalignment von einem Werkzeug des globalen Vergleichs in eine leistungsfähige Methode zur **Mustersuche und funktionellen Annotation**.

---

## **Fragen zur Selbstkontrolle**

1. Warum versagt globales Alignment bei modularen Proteinen wie NRPS-Enzymen häufig?
2. Welche Funktion hat der Null-Term in der Smith–Waterman-Rekursion?
3. Warum kann ein optimales lokales Alignment an beliebigen Positionen beginnen und enden?
4. Worin unterscheidet sich der Traceback bei globalem und lokalem Alignment?
5. In welchen biologischen Situationen ist lokales Alignment gegenüber globalem Alignment vorzuziehen?
