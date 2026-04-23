---
title: "5.6 Die EM-Idee"
sidebar:
  label: "5.6 Die EM-Idee"
  order: 6
  group: "Part 2"
  part: "Part 2"
---

# **5.6 Die EM-Idee (konzeptionell)**

### **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* zu erklären, warum sich das Problem der Motivsuche nicht direkt lösen lässt
* die Idee zu verstehen, harte Zuordnungen durch probabilistisches Denken zu ersetzen
* die Rollen von Expectation-Schritt und Maximization-Schritt zu beschreiben
* zu erklären, wie EM zirkuläre Abhängigkeiten iterativ auflöst
* die EM-Idee mit der Motivsuche in Beziehung zu setzen

---

### **Ein zirkuläres Problem ohne direkte Lösung**

Wenn wir zum Problem der Motivsuche zurückkehren, stehen wir vor einem grundlegenden Hindernis. Um das Motivmodell zu schätzen, müssen wir wissen, an welchen Positionen das Motiv in jeder Sequenz vorkommt. Gleichzeitig benötigen wir, um diese Positionen zu bestimmen, bereits ein Modell des Motivs. Diese zirkuläre Abhängigkeit verhindert, dass wir Standardverfahren der Schätzung unmittelbar anwenden können.

Wenn eine der beiden Komponenten bekannt wäre, wäre das Problem einfach. Kennt man die Motivpositionen, kann das Modell mithilfe einfacher Häufigkeitszählungen konstruiert werden. Kennt man das Modell, lassen sich die wahrscheinlichsten Positionen durch Durchsuchen der Sequenzen bestimmen. Da aber beides fehlt, stecken wir gewissermaßen zwischen zwei unvollständigen Lösungen fest.

An diesem Punkt kommen wir mit einer einzigen direkten Berechnung nicht weiter. Wir benötigen stattdessen eine Strategie, die es erlaubt, beide Komponenten schrittweise zu verfeinern.

### **Von harten Zuordnungen zu probabilistischem Denken**

Ein naheliegender, aber problematischer Ansatz wäre es, die Motivpositionen zu raten und so zu tun, als seien diese Vermutungen korrekt. Solche harten Zuordnungen sind jedoch fragil. Eine frühe falsche Entscheidung kann das Modell verzerren und den gesamten Prozess in die falsche Richtung lenken.

Die entscheidende Idee besteht darin, sich nicht zu früh festzulegen. Statt endgültige Entscheidungen über Motivpositionen zu treffen, repräsentieren wir unsere Unsicherheit explizit. Jede Kandidatenposition erhält eine Wahrscheinlichkeit, die widerspiegelt, wie gut sie vom aktuellen Modell unterstützt wird. Dadurch ersetzen wir harte Zuordnungen durch *probabilistisches Denken*.

Dieser Perspektivwechsel ist entscheidend. Anstatt genau eine Erklärung auszuwählen, berücksichtigen wir alle möglichen Erklärungen und gewichten sie nach ihrer Plausibilität.

### **Verborgene Struktur schätzen: der Expectation-Schritt**

Ausgehend von einer anfänglichen Schätzung der Modellparameter können wir bewerten, wie gut jede Kandidatenposition die beobachteten Sequenzen erklärt. Dadurch entsteht für jede Sequenz eine Wahrscheinlichkeitsverteilung über mögliche Motivpositionen.

Positionen, die gut zum aktuellen Motivmodell passen, erhalten höhere Wahrscheinlichkeiten, weniger konsistente Positionen niedrigere. Wichtig ist, dass alle Positionen grundsätzlich möglich bleiben, aber unterschiedlich stark beitragen.

Dieser Schritt entspricht der Schätzung der verborgenen Struktur in den Daten. Weil wir erwartete Beiträge berechnen, anstatt definitive Zuordnungen vorzunehmen, trägt jede Kandidatensequenz proportional zu ihrer Wahrscheinlichkeit bei. Dies ist der *Expectation-Schritt* oder E-Schritt.

### **Das Modell aktualisieren: der Maximization-Schritt**

Sobald diese probabilistischen Zuordnungen vorliegen, verwenden wir sie zur Aktualisierung der Modellparameter. Anstatt Symbole aus einer festen Menge von Motivinstanzen zu zählen, berechnen wir nun *gewichtete Zählungen*, bei denen jede Kandidatensequenz entsprechend der Wahrscheinlichkeit beiträgt, dass sie eine echte Motivinstanz darstellt.

Mit diesen gewichteten Zählungen schätzen wir die positionsspezifischen Wahrscheinlichkeiten des Motivmodells neu. Dieser Schritt behandelt die erwarteten Werte aus dem E-Schritt, als ob sie beobachtete Daten wären, und wählt die Parameter, die diese Daten am besten erklären. Weil hierbei das Modell optimiert wird, nennt man dies den *Maximization-Schritt* oder M-Schritt.

### **Eine iterative Auflösung der zirkulären Abhängigkeit**

Für sich genommen löst weder der E-Schritt noch der M-Schritt das Problem vollständig. In Kombination als iteratives Verfahren bilden sie jedoch einen leistungsfähigen Mechanismus, um die zirkuläre Abhängigkeit zu überwinden.

Wir beginnen mit einer anfänglichen Schätzung der Modellparameter. Mithilfe dieses Modells schätzen wir die verborgenen Variablen. Diese Schätzungen werden dann verwendet, um das Modell zu aktualisieren, was wiederum zu verbesserten Schätzungen der verborgenen Variablen führt. Dieser Prozess wird so lange wiederholt, bis sich das Modell stabilisiert.

Anfangs können sowohl die Zuordnungen als auch das Modell unsicher sein. Im Verlauf der Iterationen treten jedoch konsistente Muster hervor. Positionen, die wiederholt durch die Daten gestützt werden, erhalten höhere Wahrscheinlichkeiten, und das Modell wird zunehmend spezifischer. Durch diese Rückkopplungsschleife verstärken sich Modell und erschlossene Struktur allmählich gegenseitig.

Diese iterative Verfeinerung ist die Kernidee des Expectation-Maximization-Algorithmus. Sie verwandelt ein Problem, das sich nicht direkt lösen lässt, in eine Folge überschaubarer Schritte, die die Lösung schrittweise verbessern.

Im nächsten Abschnitt machen wir diese Idee an einem einfachen Beispiel konkret. Dort werden wir sehen, wie die alternierenden Schritte von Expectation und Maximization numerisch arbeiten und wie sie verborgene Struktur in Daten sichtbar machen.

---

### **Fragen zur Selbstkontrolle**

1. Warum lässt sich das Problem der Motivsuche nicht direkt mit Standardverfahren lösen?
2. Was ist problematisch daran, Motivpositionen früh im Prozess hart zuzuordnen?
3. Was ist die zentrale Idee hinter dem Ersetzen harter Zuordnungen durch probabilistisches Denken?
4. Was wird im Expectation-Schritt berechnet, und wie ist dies zu interpretieren?
5. Was wird im Maximization-Schritt aktualisiert, und wie geschieht das?
6. Wie löst die iterative Kombination aus E-Schritt und M-Schritt die zirkuläre Abhängigkeit?
