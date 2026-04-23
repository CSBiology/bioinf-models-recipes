---
title: "7.9 Probabilistische Phylogenetik: Maximum Likelihood"
sidebar:
  label: "7.9 Probabilistische Phylogenetik: Maximum Likelihood"
  order: 9
  group: "Part 2"
  part: "Part 2"
---

# **7.9 Probabilistische Phylogenetik: Maximum Likelihood**

### **Lernziele**

Nach diesem Abschnitt sollten Sie in der Lage sein:

* den Begriff der Likelihood im phylogenetischen Kontext zu erklären
* Maximum Likelihood von Maximum Parsimony zu unterscheiden
* zu verstehen, wie Wahrscheinlichkeiten entlang eines Baums berechnet werden
* die Likelihood für einfache Fälle konzeptionell nachzuvollziehen
* zu beschreiben, wie Baumstruktur und Modellparameter gemeinsam bestimmt werden

---

### **Von der Sparsamkeit zur Wahrscheinlichkeit**

Im Parsimony-Ansatz haben wir den Baum gesucht, der die geringste Anzahl von evolutionären Veränderungen benötigt. Dieser Ansatz ist intuitiv, behandelt jedoch alle Veränderungen als gleich wahrscheinlich.

Die Realität ist komplexer. Evolutionäre Prozesse sind stochastisch. Manche Substitutionen treten häufiger auf als andere, und die Wahrscheinlichkeit eines bestimmten Musters hängt sowohl von der Baumstruktur als auch vom zugrunde liegenden Evolutionsmodell ab.

Maximum Likelihood ersetzt daher das Prinzip der minimalen Veränderungen durch ein probabilistisches Kriterium.

Anstelle der Frage, wie viele Veränderungen notwendig sind, stellen wir nun die Frage:

> **Welcher Baum macht die beobachteten Daten unter einem gegebenen Modell am wahrscheinlichsten?**

---

### **Was bedeutet Likelihood?**

Um diesen Ansatz zu verstehen, ist es hilfreich, sich den Begriff der Likelihood klarzumachen.

In der Statistik beschreibt die Likelihood die Wahrscheinlichkeit der beobachteten Daten unter einem bestimmten Modell und gegebenen Parametern.

Übertragen auf die Phylogenetik bedeutet dies:

[
L = P(\text{Daten} \mid \text{Baum}, \text{Modell})
]

Die Daten sind die beobachteten Sequenzen. Das Modell besteht aus der Baumtopologie, den Astlängen und den Parametern eines Substitutionsmodells.

Das Ziel der Maximum-Likelihood-Methode ist es, diejenigen Modellparameter zu finden, die diese Wahrscheinlichkeit maximieren.

---

### **Bestandteile des Modells**

Um die Likelihood berechnen zu können, müssen wir ein explizites Modell der Sequenzevolution festlegen.

Ein solches Modell umfasst mehrere Komponenten:

* die Baumtopologie, die die Beziehungen zwischen den Taxa beschreibt
* die Astlängen, die das Ausmaß evolutionärer Veränderung repräsentieren
* ein Substitutionsmodell, das angibt, wie wahrscheinlich Übergänge zwischen Nukleotiden sind
* Basenfrequenzen, die die Verteilung der Nukleotide beschreiben

Diese Komponenten definieren gemeinsam die Wahrscheinlichkeiten, mit denen sich Zustände entlang der Äste verändern.

---

### **Likelihood für eine einzelne Position**

Um das Prinzip zu verstehen, betrachten wir zunächst eine einzelne Alignment-Spalte.

Die Zustände an den Blättern sind beobachtet. Die Zustände an den internen Knoten sind unbekannt. Diese unbekannten Größen entsprechen **versteckten Variablen**, ähnlich wie wir sie bereits im Kontext von Hidden Markov Models kennengelernt haben.

Zur Berechnung der Likelihood müssen wir alle möglichen Zustandszuweisungen an die internen Knoten berücksichtigen.

Für jede mögliche Kombination:

* wird ein Zustand am Wurzelknoten angenommen
* werden Übergangswahrscheinlichkeiten entlang aller Äste berechnet
* werden die Wahrscheinlichkeiten über den gesamten Baum multipliziert

Die Gesamtwahrscheinlichkeit ergibt sich schließlich als Summe über alle möglichen Zustandskombinationen.

---

### **Kasten 7.7 — Warum über versteckte Zustände summiert wird**

Die internen Knoten eines phylogenetischen Baums sind nicht beobachtbar. Jeder dieser Knoten kann einen von vier möglichen Zuständen annehmen.

Für einen Baum mit mehreren internen Knoten ergibt sich daher eine große Anzahl möglicher Zustandszuweisungen.

Die Likelihood ergibt sich als Summe der Wahrscheinlichkeiten aller dieser Möglichkeiten.

Dies ist konzeptionell identisch mit der Behandlung versteckter Zustände in Hidden Markov Models:

> **Wir integrieren über alle möglichen verborgenen Erklärungen der beobachteten Daten**

Effiziente Verfahren wie der Pruning-Algorithmus von Felsenstein ermöglichen diese Berechnung, ohne alle Kombinationen explizit durchzugehen.

---

### **Vom einzelnen Charakter zum gesamten Alignment**

Ein Alignment besteht aus vielen Positionen, die im Modell als unabhängig angenommen werden.

Die Gesamt-Likelihood ergibt sich daher als Produkt der Likelihoods einzelner Positionen:

[
L = \prod_{k=1}^{n} L_k
]

In der Praxis arbeitet man meist mit dem Logarithmus der Likelihood:

[
\log L = \sum_{k=1}^{n} \log L_k
]

Dies ist numerisch stabiler und erleichtert die Optimierung.

---

### **Optimierung von Baum und Parametern**

Die Maximum-Likelihood-Rekonstruktion umfasst mehrere gekoppelte Optimierungsprobleme.

Neben der Baumtopologie müssen auch die Astlängen und die Parameter des Substitutionsmodells angepasst werden.

Der Suchraum ist daher noch komplexer als bei Parsimony oder distanzbasierten Methoden. In der Praxis werden heuristische Verfahren eingesetzt, die verschiedene Baumstrukturen testen und jeweils ihre Likelihood berechnen.

Der Baum mit der höchsten Likelihood wird schließlich als bestes Modell ausgewählt.

---

### **Interpretation von Maximum-Likelihood-Bäumen**

Ein Maximum-Likelihood-Baum ist derjenige Baum, unter dem die beobachteten Daten am wahrscheinlichsten sind, gegeben das gewählte Modell.

Dies unterscheidet sich grundlegend vom Parsimony-Ansatz. Zwei Bäume können die gleiche Anzahl an Veränderungen erfordern, sich jedoch in ihrer Wahrscheinlichkeit deutlich unterscheiden.

Maximum Likelihood berücksichtigt daher nicht nur die Anzahl von Veränderungen, sondern auch deren Plausibilität im Rahmen eines Modells.

---

### **Stärken und Grenzen**

Maximum Likelihood bietet einen sehr leistungsfähigen und flexiblen Rahmen für phylogenetische Inferenz.

Es erlaubt eine detaillierte Modellierung evolutionärer Prozesse und liefert ein konsistentes statistisches Kriterium zur Bewertung von Bäumen.

Diese Vorteile gehen jedoch mit erhöhtem Rechenaufwand einher. Zudem hängt das Ergebnis stark von der Wahl des Modells ab. Ist dieses ungeeignet, können auch die resultierenden Bäume irreführend sein.

Dies verdeutlicht ein allgemeines Prinzip:

> **Je komplexer ein Modell ist, desto wichtiger werden seine Annahmen**

---

### **Konzeptionelle Einordnung**

Maximum Likelihood stellt einen Übergang zu einer vollständig probabilistischen Sichtweise dar.

Evolution wird nicht mehr als Folge minimaler Veränderungen betrachtet, sondern als stochastischer Prozess, der durch Wahrscheinlichkeiten beschrieben wird. Die Rekonstruktion besteht darin, das Modell zu finden, das die beobachteten Daten am besten erklärt.

Damit verbindet dieser Ansatz die Phylogenetik eng mit den probabilistischen Modellen, die wir in früheren Kapiteln kennengelernt haben.

---

### **Konzeptionelle Zusammenfassung**

Maximum Likelihood bewertet phylogenetische Bäume anhand der Wahrscheinlichkeit, mit der sie die beobachteten Daten erzeugen. Es integriert Baumstruktur, Evolutionsmodell und Parameter in einem gemeinsamen Rahmen.

Dieser Ansatz ermöglicht eine realistischere Beschreibung evolutionärer Prozesse, erfordert jedoch komplexere Modelle und höhere Rechenressourcen.

---

### **Selbstüberprüfungsfragen**

1. Was bedeutet Likelihood im Kontext phylogenetischer Modelle?
2. Worin unterscheidet sich Maximum Likelihood von Maximum Parsimony?
3. Warum müssen interne Knoten als versteckte Variablen behandelt werden?
4. Warum wird die Gesamt-Likelihood als Produkt über Positionen berechnet?
5. Welche Parameter werden im Maximum-Likelihood-Ansatz optimiert?
6. Welche Vor- und Nachteile hat dieser Ansatz?
