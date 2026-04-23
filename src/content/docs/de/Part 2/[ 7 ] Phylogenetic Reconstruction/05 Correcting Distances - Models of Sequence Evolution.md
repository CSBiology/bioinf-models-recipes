---
title: "7.5 Korrektur von Distanzen: Modelle der Sequenzevolution"
sidebar:
  label: "7.5 Korrektur von Distanzen: Modelle der Sequenzevolution"
  order: 5
  group: "Part 2"
  part: "Part 2"
---

# **7.5 Korrektur von Distanzen: Modelle der Sequenzevolution**

### **Lernziele**

Nach diesem Abschnitt sollten Sie in der Lage sein:

* zu erklären, warum beobachtete Sequenzunterschiede die wahre evolutionäre Distanz unterschätzen
* das Konzept mehrfacher und verborgener Substitutionen zu verstehen
* Mutationsprozesse probabilistisch zu modellieren
* die Jukes–Cantor-Korrektur aus grundlegenden Annahmen herzuleiten
* korrigierte Distanzen biologisch zu interpretieren

---

### **Wenn beobachtete Unterschiede nicht ausreichen**

Im vorherigen Abschnitt haben wir Distanzen als Maß für Sequenzunterschiede eingeführt. Eine naheliegende Definition ist der Anteil der Positionen, an denen sich zwei Sequenzen unterscheiden.

Auf den ersten Blick scheint dies ein sinnvolles Maß für evolutionäre Divergenz zu sein. Bei genauerer Betrachtung zeigt sich jedoch ein grundlegendes Problem.

Eine beobachtete Differenz an einer Position entspricht nicht notwendigerweise genau einer Mutation. Ebenso bedeutet die Übereinstimmung zweier Positionen nicht zwingend, dass keine Mutation stattgefunden hat.

Im Verlauf der Evolution können an derselben Position mehrere Substitutionen auftreten. Spätere Veränderungen können frühere überdecken oder sogar wieder rückgängig machen.

Damit ergibt sich eine zentrale Einsicht:

> **Die beobachtete Sequenz ist eine komprimierte und teilweise „überschriebene“ Darstellung des zugrunde liegenden Prozesses**

---

### **Verborgene Substitutionen und Informationsverlust**

Betrachten wir eine einzelne Position in einer DNA-Sequenz. Wenn zwei Sequenzen an dieser Stelle unterschiedliche Nukleotide aufweisen, könnte dies durch eine einzelne Substitution erklärt werden. Ebenso gut könnten jedoch mehrere aufeinanderfolgende Substitutionen stattgefunden haben.

Umgekehrt kann eine Position identisch erscheinen, obwohl zwischenzeitlich Mutationen aufgetreten sind, die später wieder in den ursprünglichen Zustand zurückgeführt wurden.

Das Problem besteht darin, dass wir nur den Endzustand beobachten. Der Weg dorthin bleibt verborgen.

Mit zunehmender evolutionärer Distanz nimmt dieser Informationsverlust zu. Mehrfache Substitutionen werden wahrscheinlicher, und die beobachteten Unterschiede spiegeln die tatsächliche Anzahl von Mutationen immer schlechter wider.

---

### **Mutationen als stochastischer Prozess**

Um dieses Problem zu adressieren, müssen wir Mutationen als Zufallsprozess modellieren.

Eine natürliche Beschreibung liefert der **Poisson-Prozess**, der die Anzahl von Ereignissen in einem gegebenen Zeitintervall beschreibt. In diesem Kontext entspricht ein Ereignis einer Substitution an einer bestimmten Position.

Sei ( \lambda ) die erwartete Anzahl von Substitutionen pro Position. Dann gilt für die Wahrscheinlichkeit, genau ( k ) Substitutionen zu beobachten:

[
P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}
]

Von besonderer Bedeutung ist der Fall, dass keine Substitution auftritt:

[
P(X = 0) = e^{-\lambda}
]

Diese Wahrscheinlichkeit beschreibt, dass eine Position unverändert bleibt.

---

### **Von Substitutionen zu beobachtbaren Unterschieden**

Die Wahrscheinlichkeit, dass mindestens eine Substitution stattgefunden hat, ergibt sich als

[
1 - e^{-\lambda}
]

Dies scheint zunächst dem beobachteten Anteil an Unterschieden zu entsprechen. Allerdings ist diese Gleichsetzung nicht korrekt, da nicht jede Substitution zu einem beobachtbaren Unterschied führt.

Bei DNA gibt es vier mögliche Nukleotide. Nach einer Substitution kann ein Nukleotid in drei alternative Zustände übergehen. Bei mehreren Substitutionen kann der ursprüngliche Zustand sogar wieder erreicht werden.

Daher müssen wir berücksichtigen, wie sich Zustände im gesamten Raum möglicher Nukleotide entwickeln.

---

### **Das Jukes–Cantor-Modell**

Das Jukes–Cantor-Modell führt eine starke Vereinfachung ein: Alle Nukleotide treten mit gleicher Wahrscheinlichkeit auf, und alle Substitutionen sind gleich wahrscheinlich.

Unter diesen Annahmen lässt sich die Wahrscheinlichkeit berechnen, dass ein Nukleotid nach einer gewissen Zeit unverändert bleibt.

Das Ergebnis lautet:

[
P(\text{gleich}) = \frac{1}{4} + \frac{3}{4} e^{- \frac{4}{3} \lambda}
]

Die Wahrscheinlichkeit für eine beobachtbare Differenz ergibt sich daraus als

[
P(\text{verschieden}) = \frac{3}{4} \left(1 - e^{- \frac{4}{3} \lambda} \right)
]

Diese Größe entspricht dem beobachteten Anteil an Unterschieden, den wir mit ( d ) bezeichnen:

[
d = \frac{3}{4} \left(1 - e^{- \frac{4}{3} \lambda} \right)
]

---

### **Herleitung der korrigierten Distanz**

Nun lösen wir diese Gleichung nach ( \lambda ) auf, das die erwartete Anzahl von Substitutionen beschreibt.

Ausgehend von

[
d = \frac{3}{4} \left(1 - e^{- \frac{4}{3} \lambda} \right)
]

erhalten wir

[
\frac{4}{3} d = 1 - e^{- \frac{4}{3} \lambda}
]

[
e^{- \frac{4}{3} \lambda} = 1 - \frac{4}{3} d
]

Durch Logarithmieren folgt

[

* \frac{4}{3} \lambda = \ln\left(1 - \frac{4}{3} d\right)
  ]

und schließlich

[
\lambda = - \frac{3}{4} \ln\left(1 - \frac{4}{3} d\right)
]

Dies ist die **Jukes–Cantor-korrigierte Distanz**:

[
D = - \frac{3}{4} \ln\left(1 - \frac{4}{3} d\right)
]

---

### **Interpretation der Korrektur**

Diese Formel transformiert den beobachteten Unterschiedsanteil ( d ) in eine Schätzung der tatsächlichen Anzahl von Substitutionen.

Für kleine Werte von ( d ) ist die Korrektur gering, und die beobachtete Distanz liefert eine gute Näherung. Mit zunehmendem ( d ) wächst die Korrektur jedoch stärker an.

Dies reflektiert die zunehmende Wahrscheinlichkeit mehrfacher Substitutionen. Die korrigierte Distanz wächst daher schneller als die beobachtete.

Für sehr große Distanzen nähert sich der beobachtete Unterschiedsanteil einem Grenzwert an. In diesem Bereich geht die Information über die tatsächliche evolutionäre Distanz weitgehend verloren.

---

### **Konzeptionelle Einordnung**

Das Jukes–Cantor-Modell verdeutlicht ein grundlegendes Prinzip.

Wir beobachten nicht direkt den evolutionären Prozess, sondern nur dessen Ergebnis. Durch die Einführung eines probabilistischen Modells können wir versuchen, den verborgenen Prozess aus den beobachteten Daten zu rekonstruieren.

Damit wird die Phylogenetik von einer rein beschreibenden zu einer modellbasierten Disziplin.

---

### **Konzeptionelle Zusammenfassung**

Beobachtete Sequenzunterschiede unterschätzen die tatsächliche evolutionäre Distanz, da mehrere Substitutionen an derselben Position auftreten können. Durch die Modellierung von Mutationen als stochastischen Prozess lassen sich Korrekturen ableiten, die diesen Effekt berücksichtigen.

Das Jukes–Cantor-Modell stellt ein einfaches, aber grundlegendes Beispiel für diesen Ansatz dar und verbindet beobachtbare Daten mit einem zugrunde liegenden evolutionären Prozess.

---

### **Selbstüberprüfungsfragen**

1. Warum unterschätzen beobachtete Unterschiede die wahre evolutionäre Distanz?
2. Was versteht man unter verborgenen Substitutionen?
3. Wie beschreibt der Poisson-Prozess Mutationsereignisse?
4. Welche Annahmen liegen dem Jukes–Cantor-Modell zugrunde?
5. Wie wird die korrigierte Distanz aus dem beobachteten Unterschiedsanteil hergeleitet?
6. Warum wird die Korrektur bei großen Distanzen zunehmend wichtig?
