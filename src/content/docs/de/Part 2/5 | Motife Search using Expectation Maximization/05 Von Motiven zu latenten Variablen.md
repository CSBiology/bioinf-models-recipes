---
title: "5.5 Von Motiven zu latenten Variablen"
sidebar:
  label: "5.5 Von Motiven zu latenten Variablen"
  order: 5
  group: "Part 2"
  part: "Part 2"
---

# **5.5 Von Motiven zu latenten Variablen**

### **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* zwischen beobachteten Daten, verborgenen Variablen und Modellparametern zu unterscheiden
* Motivsuche als Problem mit latenten Variablen neu zu formulieren
* die generative Perspektive sequenzbasierter Modellierung zu verstehen
* zu erklären, warum Motivsuche als Parameterschätzung bei unvollständigen Daten aufgefasst werden kann
* zu erkennen, warum iterative Ansätze notwendig werden

---

Im vorherigen Abschnitt haben wir das Problem der Motivsuche formuliert und seine zentrale Schwierigkeit herausgearbeitet: Sowohl die Struktur des Motivs als auch seine Positionen in den Sequenzen sind unbekannt. Diese zirkuläre Abhängigkeit verhindert, dass wir Standardverfahren auf Basis direkten Zählens oder direkten Vergleichs anwenden können.

Um weiterzukommen, ist es hilfreich, das Problem allgemeiner und abstrakter zu betrachten. Anstatt uns ausschließlich auf Sequenzen und Motive zu konzentrieren, beschreiben wir die Situation nun mithilfe von drei Komponenten: beobachtete Daten, verborgene Variablen und Modellparameter.

### **Beobachtete Daten, verborgene Struktur und Parameter**

Die beobachteten Daten sind die Sequenzen selbst. Sie liegen direkt vor und bilden die Grundlage unserer Analyse. Die Positionen, an denen das Motiv auftritt, werden dagegen nicht beobachtet. Für jede Sequenz gibt es eine unbekannte Startposition, die festlegt, welche Teilsequenz der Motivinstanz entspricht.

Diese unbekannten Positionen lassen sich als *verborgene Variablen* darstellen. Sie kodieren die Struktur, die wir idealerweise direkt sehen würden, auf die wir aber keinen unmittelbaren Zugriff haben. Parallel dazu wird das Motiv selbst durch ein probabilistisches Modell dargestellt, konkret durch eine Position Probability Matrix. Die Einträge dieser Matrix definieren die *Parameter* des Modells.

Damit ergibt sich eine klare Trennung:

* Die Sequenzen sind **beobachtet**
* die Motivpositionen sind **verborgen**
* das Motivmodell ist **parametrisiert und unbekannt**

### **Eine generative Sicht auf Sequenzen**

Diese Formulierung legt eine nützliche Denkweise nahe: Anstatt zu fragen, wie sich Motive entdecken lassen, fragen wir, wie die Sequenzen erzeugt worden sein könnten.

Man stelle sich einen Prozess vor, in dem für jede Sequenz zunächst eine Position ausgewählt wird, an der ein Motiv eingebettet wird. An dieser Position werden Symbole gemäß dem Motivmodell erzeugt, während der Rest der Sequenz nach einer Hintergrundverteilung generiert wird. In dieser Sicht entsprechen die verborgenen Variablen den unbekannten Entscheidungen über Motivpositionen, und die beobachteten Sequenzen sind das Ergebnis dieses generativen Prozesses.

Diese Perspektive verschiebt das Problem grundlegend. Wir suchen nicht mehr direkt nach Mustern, sondern versuchen, **ein Modell zu lernen, das erklärt, wie die Daten erzeugt wurden**.

### **Die Rolle verborgener Variablen**

Wenn die verborgenen Variablen bekannt wären, also wenn wir die exakten Motivpositionen kennen würden, wäre das Problem einfach. Wir könnten die entsprechenden Teilsequenzen extrahieren, alignieren und das Motivmodell wie in Abschnitt 5.2 mithilfe von Häufigkeitszählungen schätzen.

Umgekehrt wäre auch der andere Teil des Problems einfach, wenn die Parameter des Motivmodells bekannt wären. Dann könnten wir alle Kandidatenpositionen bewerten und diejenigen identifizieren, die am besten zum Modell passen. Mit anderen Worten: Jede Seite des Problems ist handhabbar, sobald die jeweils andere feststeht.

Die Schwierigkeit entsteht gerade deshalb, weil keine der beiden Seiten bekannt ist. Verborgene Variablen und Parameter hängen voneinander ab und erzeugen so die zirkuläre Abhängigkeit, auf die wir zuvor gestoßen sind.

### **Hin zu einer iterativen Lösung**

Aus dieser Struktur ergibt sich eine natürliche Strategie. Anstatt beide Aspekte des Problems gleichzeitig lösen zu wollen, können wir zwischen ihnen alternieren.

Wir beginnen mit einer anfänglichen Vermutung über die Modellparameter. Auf der Grundlage dieses Modells schätzen wir, welche Bereiche der Sequenzen vermutlich Motivinstanzen sind. Sobald wir solche Schätzungen haben, aktualisieren wir die Modellparameter anhand der vermuteten Motivpositionen. Dieses aktualisierte Modell kann wiederum verwendet werden, um die Positionsschätzungen zu verfeinern, und der Prozess lässt sich iterativ wiederholen.

Damit verschiebt sich die Perspektive erneut: Wir suchen nicht länger nach einer direkten Lösung, sondern verfolgen einen *iterativen Ansatz*, bei dem sowohl Modell als auch verborgene Struktur schrittweise verfeinert werden. Jeder Schritt nutzt den aktuellen Schätzwert der einen Komponente, um die andere zu verbessern.

An diesem Punkt entspricht die Struktur des Problems bereits sehr genau einer allgemeinen Klasse statistischer Inferenzprobleme, bei denen Beobachtungen unvollständig sind und durch Modelle mit verborgenen Variablen erklärt werden müssen. Das Problem der Motivsuche ist damit kein Sonderfall, sondern ein Beispiel eines allgemeineren Rahmens.

Im nächsten Abschnitt werden wir ein allgemeines Verfahren einführen, das genau für diese Situation entwickelt wurde. Der Expectation-Maximization-Algorithmus liefert einen prinzipiellen Weg, zwischen der Schätzung verborgener Variablen und der Aktualisierung von Modellparametern zu alternieren und damit die zirkuläre Abhängigkeit der Motivsuche aufzulösen.

---

### **Fragen zur Selbstkontrolle**

1. Was sind die beobachteten Variablen, die verborgenen Variablen und die Parameter im Problem der Motivsuche?
2. Wie lässt sich Motivsuche aus generativer Perspektive interpretieren?
3. Warum vereinfacht die Kenntnis der verborgenen Variablen die Parameterschätzung?
4. Warum vereinfacht die Kenntnis der Parameter die Inferenz der verborgenen Variablen?
5. Warum legt diese wechselseitige Abhängigkeit eine iterative Lösung nahe?
