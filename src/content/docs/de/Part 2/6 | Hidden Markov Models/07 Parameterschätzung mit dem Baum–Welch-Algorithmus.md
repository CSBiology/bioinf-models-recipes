---
title: "6.7 Parameterschätzung mit dem Baum–Welch-Algorithmus"
sidebar:
  label: "6.7 Parameterschätzung mit dem Baum–Welch-Algorithmus"
  order: 7
  group: "Part 2"
  part: "Part 2"
---

# **6.7 Parameterschätzung mit dem Baum–Welch-Algorithmus**

Bisher haben wir angenommen, dass die Parameter unseres Hidden-Markov-Modells bekannt sind. Insbesondere haben wir vorausgesetzt, dass gegeben sind:

* die Übergangswahrscheinlichkeiten
* die Emissionswahrscheinlichkeiten
* die Anfangsverteilung der Zustände

In der Praxis ist dies jedoch selten der Fall. Typischerweise liegen nur beobachtete Sequenzen vor, und das Ziel besteht darin, **die Modellparameter aus Daten zu lernen**.

Damit gelangen wir zum dritten fundamentalen Problem von Hidden-Markov-Modellen:

> **Wie lassen sich die Parameter eines HMM schätzen, wenn die verborgenen Zustände nicht beobachtet werden?**

---

## **6.7.1 Warum Lernen schwierig ist**

Wenn die verborgene Zustandsfolge bekannt wäre, wäre die Parameterschätzung einfach.

* Übergangswahrscheinlichkeiten könnten durch Zählen von Übergängen zwischen Zuständen geschätzt werden
* Emissionswahrscheinlichkeiten könnten durch Zählen der von jedem Zustand emittierten Symbole geschätzt werden
* Anfangswahrscheinlichkeiten könnten aus den Startzuständen bestimmt werden

In einem HMM ist die Zustandsfolge jedoch verborgen. Wir beobachten nur die emittierten Symbole. Das bedeutet, wir wissen nicht:

* welcher Zustand welches Symbol emittiert hat
* wie oft Übergänge zwischen Zuständen stattgefunden haben

Deshalb können wir Häufigkeiten nicht direkt zählen.

---

## **6.7.2 Eine erste Idee: Die verborgenen Zustände raten**

Ein naheliegender erster Gedanke ist, die verborgene Zustandsfolge zu approximieren.

Angenommen, wir weisen jeder Position der beobachteten Sequenz einen Zustandslabel zu. Zum Beispiel:

$$
\text{Beobachtet: } A \quad C \quad C \quad T \quad A
$$

$$
\text{Verborgene Zustände (geraten): } B \quad P \quad P \quad B \quad B
$$

Mit einer solchen Zuordnung könnten wir die Modellparameter sofort schätzen:

* wie oft jedes Symbol in jedem Zustand auftritt
* wie oft jeder Übergang stattfindet
* und durch Normierung aus den Zählungen Wahrscheinlichkeiten gewinnen

Die Idee ist einfach und verlockend. Sie wirft aber sofort eine offensichtliche Frage auf:

> Woher kommt diese Zustandszuordnung?

---

## **6.7.3 Iterative Verfeinerung: Die Grundidee**

Der Baum–Welch-Algorithmus beantwortet diese Frage, indem er das Problem in ein **iteratives Verfahren** verwandelt.

Die Grundidee besteht darin, zwischen zwei Schritten zu alternieren:

1. **Eine verborgene Struktur inferieren** unter dem aktuellen Modell
2. **Die Modellparameter aktualisieren** auf Grundlage dieser inferierten Struktur

Konkreter:

1. Starte mit einer initialen Schätzung der Modellparameter
2. Verwende das Modell, um verborgene Zustandsfolgen zu inferieren
3. Nutze diese inferierten Folgen, um die Parameter zu aktualisieren
4. Wiederhole den Vorgang bis zur Konvergenz

Auf diese Weise verbessert sich das Modell schrittweise.

---

## **Box 6.2 — Lernen als „Raten → Zählen → Aktualisieren“**

Eine hilfreiche Weise, Baum–Welch zu verstehen, besteht darin, es als wiederholten Zyklus aus Raten und Verfeinern zu sehen.

### **Schritt 1: Eine verborgene Zustandsfolge raten**

Starte mit einem initialen Modell, häufig einem zufälligen. Verwende es, um den beobachteten Sequenzen Zustände zuzuweisen, zum Beispiel mithilfe des Viterbi-Algorithmus.

$$
\text{Beobachtet: } A \quad C \quad C \quad T \quad A
$$

$$
\text{Verborgene Zustände (geraten): } B \quad P \quad P \quad B \quad B
$$

### **Schritt 2: Häufigkeiten zählen**

Aus dieser geratenen Zuordnung berechnen wir:

* wie oft jedes Symbol in jedem Zustand auftritt
* wie oft Übergänge zwischen Zuständen stattfinden

Zum Beispiel:

* wie oft $A$ aus Zustand $B$ emittiert wird
* wie oft ein Übergang von $P$ nach $B$ vorkommt

### **Schritt 3: Parameter aktualisieren**

Die Zählungen werden in Wahrscheinlichkeiten umgerechnet:

* Emissionszählungen werden normiert → Emissionswahrscheinlichkeiten
* Übergangszählungen werden normiert → Übergangswahrscheinlichkeiten

### **Schritt 4: Wiederholen**

Mit dem aktualisierten Modell berechnen wir eine neue verborgene Zustandsfolge und wiederholen den Prozess.

### **Zentrale Einsicht**

Jede Iteration verbessert die Fähigkeit des Modells, die beobachteten Daten zu erklären.

---

## **6.7.4 Von harten zu weichen Zuordnungen**

Das eben beschriebene Verfahren ist intuitiv, aber leicht vereinfacht. Es entspricht einer **harten Zuordnung**, bei der jede Position genau einem Zustand zugewiesen wird.

Wie wir zuvor gesehen haben, können jedoch mehrere verborgene Pfade dieselbe beobachtete Sequenz erklären. Anstatt uns auf einen einzelnen Pfad festzulegen, ist es oft sinnvoller, **alle möglichen Pfade gleichzeitig** zu berücksichtigen, gewichtet nach ihren Wahrscheinlichkeiten.

Daraus ergibt sich die Idee **weicher Zuordnungen**.

Anstatt eine Position vollständig einem Zustand zuzuordnen, berechnen wir:

* die Wahrscheinlichkeit, dass Position $i$ durch Zustand $s_j$ erzeugt wurde
* die Wahrscheinlichkeit, dass ein Übergang $s_i \rightarrow s_j$ stattgefunden hat

Diese Größen lassen sich effizient mithilfe der **Forward- und Backward-Algorithmen** berechnen.

---

## **6.7.5 Der Baum–Welch-Algorithmus**

Der Baum–Welch-Algorithmus setzt diese Idee auf prinzipielle Weise um. Er ist ein Spezialfall des **Expectation-Maximization-(EM)-Algorithmus**.

### **Expectation-Schritt (E-Schritt)**

Unter Verwendung des aktuellen Modells berechnen wir:

* erwartete Häufigkeiten von Emissionen
* erwartete Häufigkeiten von Übergängen

Dies geschieht, indem Forward- und Backward-Wahrscheinlichkeiten kombiniert werden, um abzuschätzen, wie wahrscheinlich jeder Zustand und jeder Übergang an jeder Position ist.

### **Maximization-Schritt (M-Schritt)**

Dann aktualisieren wir die Modellparameter:

* normiere erwartete Emissionszählungen → Emissionswahrscheinlichkeiten
* normiere erwartete Übergangszählungen → Übergangswahrscheinlichkeiten
* aktualisiere Anfangswahrscheinlichkeiten

### **Iteration**

E-Schritt und M-Schritt werden wiederholt, bis die Parameter konvergieren.

---

## **6.7.6 Interpretation**

Baum–Welch lässt sich als Verfeinerung des intuitiven Verfahrens „Raten → Zählen → Aktualisieren“ verstehen:

* Anstatt einen einzelnen verborgenen Pfad zu raten, berücksichtigen wir alle möglichen Pfade
* anstatt Vorkommen direkt zu zählen, berechnen wir erwartete Häufigkeiten
* anstatt einmalig zu aktualisieren, iterieren wir bis zur Konvergenz

Dadurch wird der Algorithmus sowohl robuster als auch prinzipieller.

---

## **6.7.7 Konvergenz und Grenzen**

Eine wichtige Eigenschaft des Baum–Welch-Algorithmus ist, dass er in jeder Iteration die Likelihood verbessert oder zumindest nicht verschlechtert. Er garantiert jedoch keine Konvergenz zum globalen Optimum.

In der Praxis bedeutet dies:

* das Resultat hängt von den initialen Parameterwerten ab
* der Algorithmus kann in einem lokalen Optimum enden

Typische Strategien, damit umzugehen, sind:

* den Algorithmus mehrfach mit unterschiedlichen Initialisierungen auszuführen
* die resultierenden Modelle miteinander zu vergleichen

---

## **6.7.8 Biologische Interpretation**

Aus biologischer Perspektive erlaubt Baum–Welch uns:

* Motivmodelle aus Sequenzdaten zu lernen
* Übergangsmuster zwischen funktionellen Regionen zu schätzen
* Modelle iterativ zu verfeinern, wenn mehr Daten verfügbar werden

Insbesondere liefert der Algorithmus einen prinzipiellen Weg vom Zustand

* **nur beobachtete Sequenzen**

zu

* **vollständig parametrisierten probabilistischen Modellen**

zu gelangen.

---

## **6.7.9 Konzeptionelle Zusammenfassung**

Der Baum–Welch-Algorithmus löst das Lernproblem für Hidden-Markov-Modelle durch die Kombination von:

* probabilistischer Inferenz mittels Forward- und Backward-Algorithmen
* Parameterschätzung durch Normierung erwarteter Häufigkeiten
* iterativer Verfeinerung im EM-Rahmen

Er verwandelt HMMs von festen Modellen in **lernende Modelle** und macht sie damit auf reale biologische Daten anwendbar.

---

## **Fragen zur Selbstkontrolle**

1. Warum ist Parameterschätzung schwierig, wenn die verborgenen Zustände nicht beobachtet werden?
2. Was ist die Intuition hinter dem Verfahren „Raten → Zählen → Aktualisieren“?
3. Worin unterscheiden sich harte und weiche Zustandszuordnungen?
4. Wie tragen Forward- und Backward-Algorithmen zur Parameterschätzung bei?
5. Warum kann Baum–Welch in einem lokalen Optimum konvergieren?
