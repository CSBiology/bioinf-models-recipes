---
title: "3.8 Speichereffizientes Sequenzalignment"
sidebar:
  label: "3.8 Speichereffizientes Sequenzalignment"
  order: 8
  group: "Part 2"
  part: "Part 2"
---

# **3.8 Speichereffizientes Sequenzalignment**

## **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* zu erklären, warum die Standardform der dynamischen Programmierung durch den Speicherbedarf begrenzt ist
* zu verstehen, wie Alignment in linearem Speicher berechnet werden kann
* die Divide-and-Conquer-Strategie hinter speichereffizientem Alignment zu beschreiben
* die Idee des „mittleren Knotens“ in einem Alignment-Graphen zu interpretieren
* den Zielkonflikt zwischen Speicherbedarf und algorithmischer Komplexität zu erkennen

---

## **Wenn Optimalität unpraktisch wird**

Der Needleman–Wunsch-Algorithmus liefert eine elegante und effiziente Lösung des Alignment-Problems. Mit einer Zeitkomplexität von $(O(mn))$ verwandelt er eine exponentielle Suche in eine handhabbare Berechnung.

Diese Effizienz hat jedoch ihren Preis.

Der Algorithmus erfordert das Speichern der vollständigen Matrix der dynamischen Programmierung der Größe:

$$
(m+1) \times (n+1)
$$

Für kurze Sequenzen ist das unproblematisch. In realen biologischen Anwendungen können Sequenzen jedoch sehr lang sein. Wie bereits im Zusammenhang mit nicht-ribosomalen Peptidsynthetasen erwähnt, können Proteine Zehntausende von Aminosäuren umfassen.

In solchen Fällen gilt:

* die Laufzeit bleibt beherrschbar
* **der Speicher wird zum limitierenden Faktor**

Daraus ergibt sich eine naheliegende Frage:

> **Können wir optimale Alignments berechnen, ohne die gesamte Matrix speichern zu müssen?**

---

## **Eine wichtige Beobachtung zur dynamischen Programmierung**

Um diese Frage zu beantworten, betrachten wir noch einmal, wie die Matrix der dynamischen Programmierung berechnet wird.

Wenn die Matrix zeilenweise gefüllt wird, hängt jeder Eintrag $(F(i,j))$ nur ab von:

* $(F(i-1, j-1))$
* $(F(i-1, j))$
* $(F(i, j-1))$

Das bedeutet, dass wir zu jedem Zeitpunkt nur benötigen:

* die aktuelle Zeile
* die vorherige Zeile

Wenn uns also nur der **optimale Score** interessiert, können wir ihn mit **linearem Speicher** berechnen.

Dadurch entsteht jedoch ein neues Problem:

> **Wie rekonstruieren wir das Alignment, wenn die vollständige Matrix nicht gespeichert wird?**

---

## **Das Traceback-Problem**

Im Standardalgorithmus beruht der Traceback auf gespeicherter Information darüber, welcher Schritt zu jedem optimalen Score geführt hat.

Wenn wir den größten Teil der Matrix verwerfen, um Speicher zu sparen, geht diese Information verloren.

Wir stehen daher vor einem Dilemma:

* das Speichern der Matrix erlaubt Traceback, verbraucht aber viel Speicher
* das Verwerfen der Matrix spart Speicher, verhindert aber die Rekonstruktion des Alignments

Die Lösung dieses Dilemmas beruht auf einer geschickten Anwendung von **Divide and Conquer**.

---

## **Divide and Conquer: Die Grundidee**

Anstatt das vollständige Alignment in einem einzigen Durchlauf zu berechnen, zerlegen wir das Problem in kleinere Teilprobleme.

Die Schlüsselidee besteht darin, einen Punkt zu identifizieren, durch den der optimale Alignment-Pfad verlaufen muss.

Genauer gesagt:

> **Es gibt einen „mittleren Knoten“, an dem der optimale Alignment-Pfad die mittlere Spalte der Matrix kreuzt.**

Wenn wir diesen Knoten finden können, zerfällt das Alignment-Problem in zwei voneinander unabhängige Teilprobleme:

1. Alignment vom Start bis zum mittleren Knoten
2. Alignment vom mittleren Knoten bis zum Ende

Jedes dieser Teilprobleme kann dann rekursiv gelöst werden.

---

## **Bestimmung des mittleren Knotens**

Um diesen mittleren Knoten zu lokalisieren, führen wir zwei Berechnungen durch:

* einen Vorwärtsdurchlauf der dynamischen Programmierung vom Start aus
* einen Rückwärtsdurchlauf vom Ende aus

Beide Berechnungen lassen sich in **linearem Speicher** ausführen, da wir jeweils nur die Scores spaltenweise verfolgen müssen.

Durch die Kombination dieser beiden Durchläufe können wir bestimmen:

* für jede Position in der mittleren Spalte
* den Gesamtscore des besten Pfades, der durch diese Position führt

Die Position mit dem höchsten kombinierten Score ist der mittlere Knoten.

---

## **Rekursive Konstruktion des Alignments**

Sobald der mittlere Knoten identifiziert ist, kann das Alignment rekursiv konstruiert werden:

* Berechne das Alignment für die linke Hälfte
* Berechne das Alignment für die rechte Hälfte

Jeder rekursive Aufruf bearbeitet ein kleineres Teilproblem und benötigt nur linearen Speicher.

Diese Strategie stellt sicher, dass:

* der gesamte Speicherbedarf auf $(O(m + n))$ reduziert wird
* das optimale Alignment dennoch exakt rekonstruiert wird

---

## **Überlegungen zur Komplexität**

Wichtig ist, dass diese Methode die Zeitkomplexität nicht reduziert.

Die gesamte Laufzeit bleibt:

$$
O(mn)
$$

Das lässt sich intuitiv so verstehen: Obwohl das Problem in Teilprobleme zerlegt wird, summiert sich die gesamte Arbeit über alle rekursiven Aufrufe hinweg auf ungefähr das Doppelte der Fläche der ursprünglichen Matrix.

Der Algorithmus tauscht also **Speichereffizienz** gegen einen moderaten zusätzlichen Rechenaufwand ein, ohne die Optimalität aufzugeben.

---

## **Konzeptionelle Interpretation**

Speichereffizientes Alignment veranschaulicht ein wichtiges Prinzip:

> **Algorithmische Effizienz hat mehrere Dimensionen.**

Der Needleman–Wunsch-Algorithmus optimiert die Laufzeit, während der Divide-and-Conquer-Ansatz den Speicherverbrauch optimiert.

Beide Algorithmen berechnen unter demselben Bewertungsmodell dasselbe optimale Alignment, tun dies aber mit unterschiedlichen rechnerischen Strategien.

Diese Unterscheidung wird bei großskaligen biologischen Anwendungen entscheidend, in denen häufig Speicherbeschränkungen dominieren.

---

## **Konzeptionelle Zusammenfassung**

Obwohl dynamische Programmierung Sequenzalignment rechnerisch beherrschbar macht, erfordert ihre Standardform quadratischen Speicher. Durch die Ausnutzung der Problemstruktur und den Einsatz von Divide-and-Conquer-Techniken kann der Speicherbedarf auf linearen Raum reduziert werden, ohne die Optimalität zu verlieren.

Diese Verfeinerung zeigt, dass algorithmisches Design nicht mit Korrektheit endet, sondern auch praktische Randbedingungen adressiert, die in realen Datenanalysen eine zentrale Rolle spielen.

---

## **Fragen zur Selbstkontrolle**

1. Warum benötigt der Standardalgorithmus der dynamischen Programmierung quadratischen Speicher?
2. Warum ist die Berechnung von Scores in linearem Speicher einfach, die Rekonstruktion von Alignments jedoch nicht?
3. Welche Rolle spielt der „mittlere Knoten“ im speichereffizienten Alignment?
4. Wie ermöglicht Divide and Conquer die Rekonstruktion des Alignments?
5. Warum bleibt die Zeitkomplexität bei $(O(mn))$?
