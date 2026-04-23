---
title: "5.10 Anwendung von EM auf die Motivsuche"
sidebar:
  label: "5.10 Anwendung von EM auf die Motivsuche"
  order: 10
  group: "Part 2"
  part: "Part 2"
---

# **5.10 Anwendung von EM auf die Motivsuche**

### **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* die Komponenten des EM-Algorithmus auf das Problem der Motivsuche abzubilden
* zu berechnen, wie Kandidatenteilsequenzen unter Motiv- und Hintergrundmodell bewertet werden
* zu verstehen, wie der E-Schritt Wahrscheinlichkeiten für Motivpositionen zuweist
* zu erklären, wie der M-Schritt das Motivmodell mithilfe gewichteter Zählungen aktualisiert
* zu beschreiben, wie EM Motivstruktur und Motivpositionen iterativ verfeinert

---

### **Zurück zum biologischen Problem**

Wir kehren nun zu dem Problem zurück, das dieses Kapitel motiviert hat: der Entdeckung von Motiven in biologischen Sequenzen. Bis zu diesem Punkt haben wir eine probabilistische Darstellung von Motiven entwickelt, das Konzept verborgener Variablen eingeführt und den Expectation-Maximization-Algorithmus sowohl intuitiv als auch formal betrachtet.

Die zentrale Frage lautet nun, wie sich diese Ideen in eine konkrete Methode zur Identifikation von Motiven in realen Sequenzdaten übersetzen lassen.

Die entscheidende Einsicht ist, dass das Problem der Motivsuche ganz natürlich in den EM-Rahmen passt. Die Sequenzen entsprechen den beobachteten Daten, die Motivpositionen den verborgenen Variablen, und das Motivmodell entspricht den Parametern, die wir schätzen möchten.

---

### **Motiv- und Hintergrundmodell als konkurrierende Modelle**

Um EM anwenden zu können, definieren wir zunächst ein probabilistisches Modell dafür, wie Sequenzen erzeugt werden. Jede Sequenz wird so aufgefasst, dass sie an einer unbekannten Position eine Motivinstanz enthält. Das Motiv selbst wird durch eine Position Probability Matrix beschrieben, die jeder Position Wahrscheinlichkeiten für mögliche Symbole zuweist.

Außerhalb der Motivregion werden Symbole nach einem *Hintergrundmodell* erzeugt. Dieses Modell beschreibt die allgemeine Zusammensetzung der Sequenz und repräsentiert das, was wir ohne Motiv erwarten würden.

Für jede Kandidatenteilsequenz können wir daher zwei Wahrscheinlichkeiten berechnen:

* die Wahrscheinlichkeit, dass sie durch das Motivmodell erzeugt wurde
* die Wahrscheinlichkeit, dass sie durch das Hintergrundmodell erzeugt wurde

Diese beiden Modelle spielen eine Rolle, die der von Münze A und Münze B im Münzwurfbeispiel direkt entspricht.

---

### **Bewertung von Kandidatenpositionen**

Für eine gegebene Sequenz betrachten wir alle möglichen Teilsequenzen der Länge $w$, indem wir ein Fenster entlang der Sequenz verschieben. Jede davon ist eine mögliche Motivinstanz.

Für jede Kandidatenteilsequenz $x$ berechnen wir ihre Wahrscheinlichkeit unter dem Motivmodell:

$$
P(x \mid \text{Motiv}) = \prod_{j=1}^{w} p_j(x_j),
$$

wobei $p_j(x_j)$ die Wahrscheinlichkeit bezeichnet, an Position $j$ im Motivmodell das Symbol $x_j$ zu beobachten.

Zusätzlich berechnen wir ihre Wahrscheinlichkeit unter dem Hintergrundmodell, das typischerweise auf den globalen Nukleotidfrequenzen des Genoms basiert.

Diese beiden Wahrscheinlichkeiten erlauben es, zu vergleichen, wie gut jede Kandidatenteilsequenz durch das Motivmodell beziehungsweise durch den Hintergrund erklärt wird.

---

### **Der Expectation-Schritt bei der Motivsuche**

Im E-Schritt berechnen wir für jede Sequenz und jede mögliche Startposition die Wahrscheinlichkeit, dass das Motiv genau dort beginnt.

Dies geschieht, indem wir die Likelihood der Teilsequenz unter dem Motivmodell mit ihrer Likelihood unter dem Hintergrundmodell vergleichen. Nach Normierung erhalten wir eine Wahrscheinlichkeitsverteilung über alle Kandidatenpositionen.

Wie im Münzwurfbeispiel handelt es sich dabei um *weiche Zuordnungen*. Jede Position trägt gemäß ihrer Wahrscheinlichkeit zum Motiv bei, anstatt definitiv ausgewählt oder verworfen zu werden.

Dieser Schritt verwandelt die Sequenzen in eine gewichtete Darstellung möglicher Motivvorkommen.

---

### **Der Maximization-Schritt bei der Motivsuche**

Im M-Schritt aktualisieren wir das Motivmodell auf Grundlage dieser probabilistischen Zuordnungen.

Anstatt eine PFM aus einer festen Menge alignierter Teilsequenzen aufzubauen, berechnen wir nun *erwartete Zählungen*. Jede Kandidatenteilsequenz trägt proportional zur Wahrscheinlichkeit bei, mit der sie eine Motivinstanz repräsentiert.

Indem wir diese gewichteten Zählungen über alle Sequenzen aggregieren, erhalten wir eine neue Schätzung der Position Frequency Matrix, die anschließend normiert wird, um eine aktualisierte Position Probability Matrix zu erhalten.

Auf diese Weise wird das Motivmodell auf der Grundlage der aktuellen Schätzung der Motivpositionen verfeinert.

---

### **Iterative Verfeinerung der Motivstruktur**

E-Schritt und M-Schritt werden wiederholt angewandt. Zu Beginn kann das Motivmodell nahezu zufällig sein, und die Wahrscheinlichkeiten für Kandidatenpositionen sind entsprechend diffus. Mit fortschreitenden Iterationen treten jedoch konsistente Muster hervor.

Positionen, die wiederholt durch die Daten gestützt werden, erhalten höhere Wahrscheinlichkeiten, und das Motivmodell wird zunehmend spezifischer. Dadurch verbessert sich wiederum die Fähigkeit des Modells, Motivinstanzen von Hintergrundsequenz zu unterscheiden.

Durch diesen iterativen Prozess legt der Algorithmus nach und nach die zugrunde liegende Motivstruktur frei.

---

### **Bezug zum Münzwurfbeispiel**

Die Analogie zum Münzwurfbeispiel ist nun unmittelbar:

* Motiv versus Hintergrund entspricht Münze A versus Münze B
* Kandidatenteilsequenzen entsprechen Folgen von Münzwürfen
* Motivpositionen entsprechen verborgenen Zuordnungen
* der E-Schritt berechnet Wahrscheinlichkeiten für Motivvorkommen
* der M-Schritt aktualisiert das Motivmodell

In beiden Fällen löst EM Unsicherheit, indem probabilistische Zuordnung und Parameterschätzung abwechselnd verfeinert werden.

---

### **Praktische Implikationen**

Diese Formulierung verdeutlicht sowohl die Stärke als auch die Grenzen des Ansatzes. Der EM-Algorithmus liefert einen prinzipiellen Weg, Motive aus nicht alignierten Sequenzen zu lernen, selbst wenn das Signal schwach und in Rauschen eingebettet ist.

Gleichzeitig hängt sein Erfolg von Faktoren wie Datenqualität, Stärke des Motivsignals und Wahl des Hintergrundmodells ab. Diese Aspekte werden wir im nächsten Abschnitt genauer betrachten.

---

### **Fragen zur Selbstkontrolle**

1. Wie hängen Motivsuche und der EM-Rahmen zusammen?
2. Welche Rollen spielen Motivmodell und Hintergrundmodell?
3. Wie wird die Wahrscheinlichkeit einer Kandidatenteilsequenz unter dem Motivmodell berechnet?
4. Was wird im E-Schritt der Motivsuche berechnet?
5. Wie werden Modellparameter im M-Schritt aktualisiert?
6. Wie verfeinert der EM-Algorithmus die Motivstruktur über seine Iterationen hinweg?
