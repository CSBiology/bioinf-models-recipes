---
title: "5.7 Ein einfaches durchgerechnetes Beispiel: Das Münzwurfproblem"
sidebar:
  label: "5.7 Ein einfaches durchgerechnetes Beispiel: Das Münzwurfproblem"
  order: 7
  group: "Part 2"
  part: "Part 2"
---

# **5.7 Ein einfaches durchgerechnetes Beispiel: Das Münzwurfproblem**

### **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* Maximum-Likelihood-Schätzung in einem vollständig beobachteten Setting anzuwenden
* zu verstehen, warum fehlende Daten direkte Schätzung verhindern
* das Münzwurfproblem als Beispiel für verborgene Variablen zu erklären
* eine Iteration des EM-Algorithmus konzeptionell nachzuvollziehen
* das Münzwurfbeispiel mit Motivsuche in Beziehung zu setzen

---

### **Ein einfaches Modell mit unbekannter Herkunft**

Um zu verstehen, wie die EM-Idee in der Praxis funktioniert, ist es hilfreich, ein einfaches Beispiel zu betrachten, bei dem sich alle Berechnungen explizit nachvollziehen lassen. Obwohl dieses Beispiel nicht biologisch ist, erfasst es die wesentliche Struktur des Problems der Motivsuche.

Stellen wir uns vor, wir hätten zwei Münzen, die wir Münze A und Münze B nennen. Jede Münze besitzt ihre eigene Wahrscheinlichkeit, Kopf zu erzeugen, bezeichnet durch $\theta_A$ beziehungsweise $\theta_B$. Diese Wahrscheinlichkeiten sind unbekannt, und unser Ziel besteht darin, sie zu schätzen.

Wir führen eine Reihe von Experimenten durch. In jedem Experiment wird eine der beiden Münzen ausgewählt und dann mehrfach geworfen. Das Ergebnis jedes Experiments ist eine Folge von Kopf- und Zahl-Ergebnissen. Wiederholen wir diesen Prozess mehrfach, erhalten wir eine Sammlung solcher Folgen.

Auf den ersten Blick mag dies wie ein einfaches Schätzproblem erscheinen. Die entscheidende Frage lautet jedoch: **Wissen wir, welche Münze in jedem Experiment verwendet wurde?**

---

### **Der vollständig beobachtete Fall: Maximum-Likelihood-Schätzung**

Betrachten wir zunächst den einfacheren Fall, in dem diese Information vorliegt. Angenommen, wir wissen für jede Folge von Münzwürfen, ob sie von Münze A oder Münze B erzeugt wurde.

In diesem Setting ist die Parameterschätzung unkompliziert. Wir zählen einfach, wie viele Köpfe und wie viele Zahlen jede Münze erzeugt hat, und berechnen den Anteil der Köpfe. Dies entspricht der *Maximum-Likelihood-Schätzung*, bei der jene Parameterwerte gewählt werden, die die Wahrscheinlichkeit der beobachteten Daten maximieren.

Wenn Münze A zum Beispiel $h_A$ Köpfe und $t_A$ Zahlen erzeugt, lautet die Maximum-Likelihood-Schätzung

$$
\hat{\theta}_A = \frac{h_A}{h_A + t_A}.
$$

Ein entsprechender Ausdruck gilt analog für Münze B.

Der entscheidende Punkt ist, dass dieses Verfahren funktioniert, weil die Daten *vollständig* sind. Jede Beobachtung kann eindeutig einer der beiden Münzen zugeordnet werden.

---

### **Der verborgene Fall: fehlende Zuordnungen**

Betrachten wir nun den interessanteren Fall. Nehmen wir an, wir beobachten exakt dieselben Folgen von Kopf und Zahl, aber wir wissen nicht mehr, welche Münze in welchem Experiment verwendet wurde.

Die Daten bestehen nun nur noch aus den Ergebnissen, ohne Information über ihre Herkunft. Dadurch können wir die Beobachtungen nicht mehr in zwei Gruppen aufteilen. Das einfache Zählverfahren, das in der Maximum-Likelihood-Schätzung verwendet wurde, ist nicht länger anwendbar.

Diese Situation spiegelt das Problem der Motivsuche sehr eng wider. Dort beobachten wir Sequenzen, wissen aber nicht, an welcher Position ein Motiv auftritt. Hier beobachten wir Münzwurfergebnisse, kennen aber die erzeugende Münze nicht. In beiden Fällen entspricht die fehlende Information *verborgenen Variablen*.

---

### **Mögliche Erklärungen bewerten**

Um dennoch voranzukommen, führen wir ein probabilistisches Modell ein. Angenommen, eine Folge besteht aus $n$ Würfen, von denen $k$ Kopf ergeben. Die Wahrscheinlichkeit, dieses Ergebnis unter einer Münze mit Parameter $\theta$ zu beobachten, wird durch die Binomialverteilung beschrieben:

$$
P(k \mid \theta) = \binom{n}{k} \theta^k (1 - \theta)^{n-k}.
$$

Mit diesem Ausdruck können wir bewerten, wie wahrscheinlich eine gegebene Folge unter Münze A und unter Münze B ist, sofern aktuelle Schätzwerte für $\theta_A$ und $\theta_B$ vorliegen.

Anstatt jedoch eine harte Entscheidung darüber zu treffen, welche Münze die Folge erzeugt hat, vergleichen wir diese Likelihoods und wandeln sie in Wahrscheinlichkeiten um. So erhalten wir eine *weiche Zuordnung*, die ausdrückt, wie stark jede der beiden Münzen durch die Daten gestützt wird.

---

### **Der Expectation-Schritt**

Ausgehend von den aktuellen Parameterschätzungen berechnen wir für jede Folge die Wahrscheinlichkeit, dass sie von Münze A beziehungsweise Münze B erzeugt wurde. Diese Wahrscheinlichkeiten bilden eine Verteilung über die verborgene Variable, also über die Münzidentität.

Anstatt eine Folge vollständig nur einer Münze zuzuordnen, lassen wir sie zu beiden Münzen anteilig beitragen. Beispielsweise könnte eine Folge 70 % ihrer Zählwerte Münze A und 30 % Münze B zuschreiben.

Aus diesen Wahrscheinlichkeiten berechnen wir die *erwartete Zahl von Köpfen und Zahlen* für jede Münze. Dadurch werden die beobachteten Daten in eine gewichtete Darstellung überführt, die unsere Unsicherheit abbildet.

Dies entspricht dem *Expectation-Schritt* oder E-Schritt.

---

### **Der Maximization-Schritt**

Sobald diese erwarteten Zählungen vorliegen, aktualisieren wir die Parameterschätzungen. Für jede Münze berechnen wir den Anteil erwarteter Köpfe an der Gesamtzahl erwarteter Würfe:

$$
\hat{\theta}_A^{\text{new}} = \frac{\text{erwartete Köpfe für A}}{\text{erwartete Gesamtwürfe für A}}.
$$

Dieser Schritt hat dieselbe Form wie die Maximum-Likelihood-Schätzung, verwendet jedoch *erwartete Zählungen* anstelle beobachteter Zählungen. Er erzeugt neue Parameterwerte, die die Daten unter den aktuellen probabilistischen Zuordnungen besser erklären.

Dies ist der *Maximization-Schritt* oder M-Schritt.

---

### **Iterative Verfeinerung**

E-Schritt und M-Schritt werden wiederholt angewandt. Ausgehend von einer initialen Vermutung über die Parameter alternieren wir zwischen der Schätzung der verborgenen Variablen und der Aktualisierung des Modells.

Anfangs können die Zuordnungen unsicher und die Parameterschätzungen ungenau sein. Mit fortschreitenden Iterationen wird das Modell jedoch konsistenter mit den Daten. Folgen, die stark mit einer Münze assoziiert sind, tragen immer stärker zu deren Parameterschätzung bei, was wiederum die Zuordnung in späteren Iterationen weiter verstärkt.

Diese iterative Verfeinerung wird fortgeführt, bis sich die Parameterwerte stabilisieren und sich nicht mehr wesentlich verändern.

---

### **Zurück zur Motivsuche**

Obwohl das Münzwurfbeispiel zunächst künstlich erscheinen mag, erfasst es genau die Struktur des Problems der Motivsuche.

* Die unbekannten Münzzuordnungen entsprechen unbekannten Motivpositionen
* die Münzparameter entsprechen dem Motivmodell
* die Wurfsequenzen entsprechen Kandidatenteilsequenzen
* der E-Schritt entspricht der Bewertung, wie wahrscheinlich jede Position ein Motiv ist
* der M-Schritt entspricht der Aktualisierung des Motivmodells

In beiden Fällen stehen wir vor derselben Herausforderung: Die Daten sind unvollständig, und ein Teil des generativen Prozesses ist verborgen. Der EM-Algorithmus liefert einen systematischen Weg, dieses Problem zu lösen, indem sowohl die verborgene Struktur als auch die Modellparameter iterativ verfeinert werden.

Im nächsten Abschnitt werden wir dieses Verfahren mathematisch formalisieren und über dieses konkrete Beispiel hinaus verallgemeinern.

---

### **Fragen zur Selbstkontrolle**

1. Wie funktioniert Maximum-Likelihood-Schätzung, wenn die Münzzuordnungen bekannt sind?
2. Warum versagt dieser Ansatz, wenn die Zuordnungen unbekannt sind?
3. Welche Rolle spielt die Binomialverteilung in diesem Beispiel?
4. Was bedeutet eine *weiche Zuordnung* im E-Schritt?
5. Wie werden die Parameterschätzungen im M-Schritt aktualisiert?
6. Wie hängt das Münzwurfbeispiel mit Motivsuche zusammen?
