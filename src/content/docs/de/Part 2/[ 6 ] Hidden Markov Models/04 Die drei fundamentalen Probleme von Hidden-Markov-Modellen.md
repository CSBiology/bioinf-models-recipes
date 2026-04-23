---
title: "6.4 Die drei fundamentalen Probleme von Hidden-Markov-Modellen"
sidebar:
  label: "6.4 Die drei fundamentalen Probleme von Hidden-Markov-Modellen"
  order: 4
  group: "Part 2"
  part: "Part 2"
---

# **6.4 Die drei fundamentalen Probleme von Hidden-Markov-Modellen**

In den vorherigen Abschnitten haben wir Hidden-Markov-Modelle als generative Modelle biologischer Sequenzen eingeführt und den entscheidenden Unterschied zwischen beobachteten Daten und verborgenen Zustandsfolgen herausgestellt. Aus genau diesem Unterschied ergeben sich auf natürliche Weise mehrere fundamentale rechnerische Fragen.

Gegeben ein HMM und eine beobachtete Sequenz, stehen wir vor drei unterschiedlichen, aber eng miteinander verbundenen Problemen:

1. **Dekodierung**: Was ist die wahrscheinlichste verborgene Zustandsfolge?
2. **Evaluation**: Wie wahrscheinlich ist die beobachtete Sequenz unter dem Modell?
3. **Lernen**: Wie lassen sich die Modellparameter aus Daten schätzen?

Jedes dieser Probleme erfasst einen anderen Aspekt von Inferenz in Hidden-Markov-Modellen und erfordert eine eigene algorithmische Lösung.

---

## **6.4.1 Dekodierung: Die wahrscheinlichste Zustandsfolge inferieren**

Wir beginnen mit dem Problem der Dekodierung.

Gegeben sind:

* eine beobachtete Sequenz $X = (x_1, x_2, \dots, x_n)$
* ein Modell $M$, definiert durch Übergangs-, Emissions- und Anfangswahrscheinlichkeiten

Gesucht ist die verborgene Zustandsfolge $S = (s_1, s_2, \dots, s_n)$, die die Daten am besten erklärt.

Formal wollen wir berechnen:

$$
S^* = \arg\max_S P(X, S \mid M)
$$

Wir suchen also jene Zustandsfolge, die die **gemeinsame Wahrscheinlichkeit** der beobachteten Sequenz und der verborgenen Zustände maximiert.

---

### **Interpretation**

Biologisch entspricht dies der Zuweisung eines Labels zu jeder Position in der Sequenz.

Im Promotor-Hintergrund-Modell bedeutet das zum Beispiel:

* jede Position wird entweder als Promotor ($P$) oder als Hintergrund ($B$) klassifiziert
* das Ergebnis ist eine Segmentierung der Sequenz in funktionelle Regionen

Damit wird die HMM-Dekodierung zu einem **Problem der Sequenzklassifikation**.

---

### **Warum ist das nicht trivial?**

Die Schwierigkeit ergibt sich daraus, dass die Zahl möglicher Zustandsfolgen mit der Sequenzlänge exponentiell wächst. Für ein Modell mit $k$ Zuständen und eine Sequenz der Länge $n$ gibt es $k^n$ mögliche Pfade.

Eine erschöpfende Auswertung aller Pfade ist daher nicht praktikabel.

---

### **Lösung: Der Viterbi-Algorithmus**

Der **Viterbi-Algorithmus** löst dieses Problem effizient mit dynamischer Programmierung.

Die Grundidee ist, für jede Position und jeden Zustand die Wahrscheinlichkeit des wahrscheinlichsten Pfades zu berechnen, der in diesem Zustand endet. Anstatt alle Pfade explizit aufzuzählen, werden Zwischenergebnisse wiederverwendet.

In jedem Schritt:

* betrachten wir alle möglichen Vorgängerzustände
* wählen denjenigen mit maximaler Wahrscheinlichkeit
* und propagieren diese Information nach vorn

Auf diese Weise konstruiert der Algorithmus den optimalen Pfad schrittweise.

---

### **Konzeptionelle Zusammenfassung**

* Input: Sequenz $X$, Modell $M$
* Output: wahrscheinlichste verborgene Zustandsfolge $S^*$
* Methode: dynamische Programmierung

---

## **6.4.2 Evaluation: Die Likelihood einer Sequenz berechnen**

Das zweite Problem stellt eine andere Frage.

Anstatt nach der *besten Erklärung* zu fragen, wollen wir wissen:

> **Wie wahrscheinlich ist die beobachtete Sequenz unter dem Modell?**

Formal berechnen wir:

$$
P(X \mid M)
$$

---

### **Summation über alle möglichen Pfade**

Im Unterschied zum Dekodierungsproblem wählen wir keine einzelne Zustandsfolge aus. Stattdessen müssen wir **alle möglichen verborgenen Pfade** berücksichtigen:

$$
P(X \mid M) = \sum_S P(X, S \mid M)
$$

Jeder Pfad trägt gewichtet mit seiner Wahrscheinlichkeit zur Gesamtwahrscheinlichkeit bei.

---

### **Warum ist das schwierig?**

Wie zuvor wächst die Zahl möglicher Pfade exponentiell mit der Sequenzlänge. Eine direkte Berechnung ist deshalb nicht durchführbar.

---

### **Lösung: Der Forward-Algorithmus**

Der **Forward-Algorithmus** löst dieses Problem ebenfalls mithilfe dynamischer Programmierung.

Anstatt Pfade explizit aufzulisten, berechnet er Zwischengrößen

$$
\alpha_n(i)
$$

die die Wahrscheinlichkeit repräsentieren, die ersten $n$ Symbole beobachtet zu haben und in Zustand $s_i$ zu enden.

Diese Größen lassen sich rekursiv berechnen:

* Initialisierung mit Anfangs- und Emissionswahrscheinlichkeiten
* Vorwärtspropagation mittels Übergangs- und Emissionswahrscheinlichkeiten
* Summation über alle Endzustände

So lässt sich $P(X \mid M)$ effizient berechnen.

---

### **Interpretation**

Der Forward-Algorithmus beantwortet eine grundsätzlich andere Frage als Viterbi:

* Viterbi findet den **besten einzelnen Pfad**
* Forward summiert über **alle möglichen Pfade**

Eine hilfreiche Intuition lautet:

> Viterbi liefert die plausibelste Erklärung, während der Forward-Algorithmus misst, wie stark das Modell die Daten insgesamt stützt.

---

### **Backward-Algorithmus**

Ein eng verwandtes Verfahren ist der **Backward-Algorithmus**, der Wahrscheinlichkeiten vom Ende der Sequenz her berechnet. Er folgt denselben Prinzipien und führt zum selben Endergebnis.

Forward- und Backward-Algorithmus werden häufig gemeinsam für die Parameterschätzung verwendet.

---

## **6.4.3 Lernen: Modellparameter schätzen**

Das dritte Problem betrachtet die Situation, in der die Modellparameter unbekannt sind.

Gegeben sind:

* eine Menge beobachteter Sequenzen
* eine Modellstruktur, also Zustände und erlaubte Verbindungen

Gesucht sind:

* Übergangswahrscheinlichkeiten
* Emissionswahrscheinlichkeiten
* Anfangswahrscheinlichkeiten

---

### **Die Herausforderung**

Im Unterschied zu gewöhnlichen Parameterschätzproblemen beobachten wir die verborgenen Zustände nicht. Deshalb lassen sich Übergänge und Emissionen nicht einfach direkt zählen.

---

### **Lösung: Der Baum–Welch-Algorithmus**

Der **Baum–Welch-Algorithmus** liefert eine Lösung, indem er die verborgene Struktur iterativ schätzt und die Modellparameter aktualisiert.

Er folgt dem allgemeinen Prinzip des **Expectation-Maximization-(EM)-Algorithmus**:

1. **Expectation-Schritt**
   Schätze, wie wahrscheinlich verschiedene verborgene Pfade unter den aktuellen Parametern sind

2. **Maximization-Schritt**
   Aktualisiere die Parameter auf Grundlage dieser Schätzungen

Dieser Prozess wird bis zur Konvergenz wiederholt.

---

### **Intuition**

Eine hilfreiche Sicht auf Baum–Welch ist die eines alternierenden Verfahrens:

* Wir nehmen zunächst eine vorläufige Erklärung der Daten an
* berechnen auf dieser Basis erwartete Statistiken
* verfeinern das Modell
* und wiederholen dies

Im Verlauf der Iterationen wird das Modell immer besser darin, die beobachteten Sequenzen zu erklären.

---

### **Praktische Überlegungen**

Wichtig ist, dass Baum–Welch kein globales Optimum garantiert. Das Resultat kann von den initialen Parameterwerten abhängen.

In der Praxis begegnet man diesem Problem oft so:

* der Algorithmus wird mehrfach mit unterschiedlichen Initialisierungen gestartet
* die resultierenden Modelle werden miteinander verglichen

---

## **6.4.4 Zusammenfassung der drei Probleme**

Die drei fundamentalen Probleme von Hidden-Markov-Modellen lassen sich wie folgt zusammenfassen:

| Problem      | Frage                               | Algorithmus      |
| ------------ | ----------------------------------- | ---------------- |
| Dekodierung  | Was ist der beste verborgene Pfad?  | Viterbi          |
| Evaluation   | Wie wahrscheinlich ist die Sequenz? | Forward/Backward |
| Lernen       | Was sind die Modellparameter?       | Baum–Welch       |

Gemeinsam definieren diese Probleme den rechnerischen Rahmen für das Arbeiten mit HMMs.

---

## **Konzeptionelle Integration**

Diese drei Probleme entsprechen direkt den Herausforderungen, die wir zuvor eingeführt haben:

* Verborgene Struktur inferieren → **Dekodierung**
* Modellanpassung bewerten → **Evaluation**
* Modelle aus Daten konstruieren → **Lernen**

Damit wird aus dem konzeptionellen Modell der Hidden-Markov-Modelle ein praktisches rechnerisches Werkzeug.

---

## **Fragen zur Selbstkontrolle**

1. Worin besteht der Unterschied zwischen dem Maximieren von $P(X, S)$ und dem Summieren über alle $P(X, S)$?
2. Warum ist der Viterbi-Algorithmus effizienter als erschöpfende Enumeration?
3. Was berechnet der Forward-Algorithmus in jedem Schritt?
4. Warum ist Parameterschätzung schwierig, wenn die Zustände verborgen sind?
5. Wie hängt der Baum–Welch-Algorithmus mit dem EM-Prinzip zusammen?
