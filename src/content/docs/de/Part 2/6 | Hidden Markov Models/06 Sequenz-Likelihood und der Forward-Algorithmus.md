---
title: "6.6 Sequenz-Likelihood und der Forward-Algorithmus"
sidebar:
  label: "6.6 Sequenz-Likelihood und der Forward-Algorithmus"
  order: 6
  group: "Part 2"
  part: "Part 2"
---

# **6.6 Sequenz-Likelihood und der Forward-Algorithmus**

Im vorherigen Abschnitt haben wir das Dekodierungsproblem mithilfe des Viterbi-Algorithmus behandelt. Dort bestand das Ziel darin, eine einzelne verborgene Zustandsfolge zu finden, die die beobachteten Daten am besten erklärt.

Nun wenden wir uns einer anderen, ebenso grundlegenden Frage zu:

> **Wie wahrscheinlich ist die beobachtete Sequenz unter einem gegebenen Modell?**

Dies nennt man das **Evaluationsproblem**.

---

## **6.6.1 Vom besten Pfad zu allen Pfaden**

Erinnern wir uns: Im Dekodierungsproblem suchten wir nach

$$
\max_S P(X, S \mid M)
$$

also nach dem *einzelnen wahrscheinlichsten* verborgenen Pfad.

Im Evaluationsproblem wollen wir dagegen

$$
P(X \mid M)
$$

berechnen, also die Gesamtwahrscheinlichkeit, die beobachtete Sequenz unter dem Modell zu sehen.

Dazu müssen wir über **alle möglichen verborgenen Zustandsfolgen** summieren:

$$
P(X \mid M) = \sum_S P(X, S \mid M)
$$

Dieser Unterschied ist zentral.

* Viterbi wählt **einen Pfad**
* Forward berücksichtigt **alle Pfade**

---

## **Interpretation**

Eine hilfreiche Intuition für diesen Unterschied lautet:

* Der Viterbi-Algorithmus fragt:
  *Was ist die beste Erklärung?*

* Der Forward-Algorithmus fragt:
  *Wie viel gesamte Unterstützung liefert das Modell für diese Sequenz?*

Auch wenn kein einzelner Pfad besonders hohe Wahrscheinlichkeit besitzt, kann die Summe vieler moderat wahrscheinlicher Pfade dennoch zu einer hohen Gesamt-Likelihood führen.

---

## **6.6.2 Warum direkte Berechnung unpraktikabel ist**

Auf den ersten Blick erscheint die Berechnung von $P(X \mid M)$ sogar noch schwieriger als das Dekodierungsproblem. Anstatt einen Pfad auszuwählen, müssen wir alle Pfade berücksichtigen.

Für eine Sequenz der Länge $n$ und $k$ Zustände bedeutet dies wieder $k^n$ Terme.

Für realistische Sequenzen ist eine direkte Summation unmöglich.

Wie im Fall von Viterbi erlaubt uns die Struktur des Modells jedoch, Zwischenergebnisse wiederzuverwenden. Daraus ergibt sich erneut eine Lösung mittels dynamischer Programmierung: der **Forward-Algorithmus**.

---

## **6.6.3 Forward-Wahrscheinlichkeiten**

Wir definieren die **Forward-Variable**

$$
\alpha_i(j)
$$

als die Wahrscheinlichkeit, die ersten $i$ Symbole zu beobachten und in Zustand $s_j$ zu enden:

$$
\alpha_i(j) = P(x_1, x_2, \dots, x_i, S_i = s_j \mid M)
$$

Diese Größe fasst alle Pfade zusammen, die:

* das Präfix $x_1, \dots, x_i$ erzeugen
* und in Zustand $s_j$ enden

Statt also einzelne Pfade zu verfolgen, komprimieren wir alle relevanten Pfade an jeder Position und für jeden Zustand in einen einzigen Wert.

---

## **6.6.4 Forward-Rekursion**

Wie bei Viterbi verläuft der Algorithmus in drei Phasen.

### **Initialisierung**

Für die erste Beobachtung gilt:

$$
\alpha_1(j) = \pi_j \, e_j(x_1)
$$

Dies ist identisch mit der Initialisierung im Viterbi-Algorithmus, weil an der ersten Position pro Zustand nur ein einziger Pfad existiert.

### **Rekursion**

Für jede folgende Position berechnen wir:

$$
\alpha_{i+1}(j) = \sum_k \alpha_i(k) \, t_{kj} \, e_j(x_{i+1})
$$

Auch diese Gleichung lässt sich klar interpretieren.

Um an Position $i+1$ in Zustand $s_j$ anzukommen, müssen wir:

1. aus irgendeinem vorherigen Zustand $s_k$ kommen
2. von $s_k$ nach $s_j$ übergehen
3. das Symbol $x_{i+1}$ aus Zustand $s_j$ emittieren

Im Unterschied zum Viterbi-Algorithmus wählen wir nicht nur den besten Vorgänger, sondern **summieren über alle möglichen Vorgänger**.

### **Terminierung**

Nachdem die gesamte Sequenz verarbeitet wurde, erhalten wir die Gesamt-Likelihood durch Summation über alle Endzustände:

$$
P(X \mid M) = \sum_j \alpha_n(j)
$$

---

## **6.6.5 Vergleich mit Viterbi**

Der Forward-Algorithmus ist strukturell dem Viterbi-Algorithmus sehr ähnlich, unterscheidet sich jedoch in einem entscheidenden Punkt:

* Viterbi verwendet ein **Maximum** über Vorgängerzustände
* Forward verwendet eine **Summe** über Vorgängerzustände

Diese scheinbar kleine Änderung hat weitreichende Konsequenzen:

| Aspekt        | Viterbi                 | Forward              |
| ------------- | ----------------------- | -------------------- |
| Operation     | max                     | sum                  |
| Output        | bester Pfad             | Gesamtwahrscheinlichkeit |
| Interpretation| beste Erklärung         | gesamte Unterstützung |

Diese Dualität ist zentral für das Verständnis von HMMs.

---

## **6.6.6 Durchgerechnetes Beispiel (konzeptioneller Durchlauf)**

Betrachten wir erneut die Sequenz

$$
X = \text{A C C T A}
$$

und das Zwei-Zustands-Modell mit den Zuständen $P$ (Promotor) und $B$ (Hintergrund).

An der ersten Position gilt:

$$
\alpha_1(P) = \pi_P e_P(A), \quad \alpha_1(B) = \pi_B e_B(A)
$$

An der zweiten Position berechnen wir:

$$
\alpha_2(P) = \alpha_1(P)t_{PP}e_P(C) + \alpha_1(B)t_{BP}e_P(C)
$$

$$
\alpha_2(B) = \alpha_1(P)t_{PB}e_B(C) + \alpha_1(B)t_{BB}e_B(C)
$$

Hier wird der zentrale Unterschied zu Viterbi unmittelbar sichtbar:

* Statt den besseren der beiden Pfade zu wählen,
* addieren wir beide Beiträge.

Das bedeutet, dass auch Pfade, die für sich genommen nicht optimal sind, dennoch zur Gesamtwahrscheinlichkeit beitragen.

Wenn wir entlang der Sequenz fortschreiten, akkumuliert jeder Forward-Wert Beiträge aus exponentiell vielen Pfaden, allerdings in stark komprimierter Form.

---

## **6.6.7 Intuition: Über alle Erklärungen summieren**

Der Forward-Algorithmus integriert effektiv über alle möglichen Erklärungen der Daten.

Dies ist besonders in biologischen Kontexten wichtig, weil

* mehrere evolutionäre Geschichten eine Sequenz erklären können
* Unsicherheit ein grundlegendes Merkmal biologischer Daten ist

Durch die Summation über alle Pfade berücksichtigt das Modell diese Unsicherheit, anstatt sich frühzeitig auf eine einzige Interpretation festzulegen.

---

## **6.6.8 Implementierung im Log-Raum**

Wie beim Viterbi-Algorithmus muss auch der Forward-Algorithmus im Log-Raum implementiert werden, um numerischen Unterlauf zu vermeiden.

Die Rekursion enthält nun jedoch Summen, die im Log-Raum zur Form

$$
\log \alpha_{i+1}(j) = \log \sum_k \exp\bigl( \log \alpha_i(k) + \log t_{kj} + \log e_j(x_{i+1}) \bigr)
$$

führen.

Dies ist die sogenannte **log-sum-exp**-Operation.

### **Der log-sum-exp-Trick**

Um diesen Ausdruck numerisch stabil zu berechnen, verwendet man:

$$
\log \sum_k e^{a_k} = m + \log \sum_k e^{a_k - m}
$$

wobei

$$
m = \max_k a_k
$$

gilt.

Dies verhindert Überlauf oder Unterlauf bei exponentiellen Ausdrücken.

---

## **6.6.9 Bezug zu biologischen Fragestellungen**

Der Forward-Algorithmus ist besonders nützlich für:

* die Bewertung von Sequenzen unter Modellen
* den Vergleich alternativer Modelle
* die Berechnung von Motiv-Likelihoods entlang eines Genoms

Beim Scanning eines Genoms könnten wir zum Beispiel $P(X \mid M_{\text{Motiv}})$ berechnen und mit $P(X \mid M_{\text{Hintergrund}})$ vergleichen. Dadurch lassen sich Regionen identifizieren, die vom einen Modell besser erklärt werden als vom anderen.

---

## **6.6.10 Konzeptionelle Zusammenfassung**

Der Forward-Algorithmus erweitert den dynamischen Programmierungsansatz von Viterbi, indem er Maximierung durch Summation ersetzt.

Er liefert:

* eine vollständige probabilistische Bewertung der Sequenz
* einen prinzipiellen Umgang mit Unsicherheit
* die Grundlage für Parameterschätzung mit Baum–Welch

---

## **Fragen zur Selbstkontrolle**

1. Was ist der Unterschied zwischen der Summation über alle Pfade und der Auswahl des besten Pfades?
2. Was repräsentiert die Forward-Variable $\alpha_i(j)$?
3. Warum ist die direkte Berechnung von $P(X \mid M)$ unpraktikabel?
4. Welche Rolle spielt die log-sum-exp-Operation?
5. Warum ist der Forward-Algorithmus für die Analyse biologischer Sequenzen wichtig?
