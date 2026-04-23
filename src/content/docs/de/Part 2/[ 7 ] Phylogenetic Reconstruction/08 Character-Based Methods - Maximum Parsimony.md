---
title: "7.8 Charakterbasierte Methoden: Maximum Parsimony"
sidebar:
  label: "7.8 Charakterbasierte Methoden: Maximum Parsimony"
  order: 8
  group: "Part 2"
  part: "Part 2"
---

# **7.8 Charakterbasierte Methoden: Maximum Parsimony**

### **Lernziele**

Nach diesem Abschnitt sollten Sie in der Lage sein:

* den Unterschied zwischen charakterbasierten und distanzbasierten Methoden zu erklären
* das Prinzip der maximalen Parsimonie zu verstehen
* den Parsimony-Score für einen einfachen Baum zu berechnen
* zu beschreiben, wie evolutionäre Veränderungen entlang eines Baums rekonstruiert werden
* die Stärken und Grenzen des Parsimony-Ansatzes einzuordnen

---

### **Rückkehr zum Alignment**

In den distanzbasierten Methoden haben wir Sequenzdaten in paarweise Distanzen überführt und darauf aufbauend Bäume konstruiert. Dieser Ansatz ist effizient, geht jedoch mit einem Informationsverlust einher, da die detaillierte Struktur einzelner Alignment-Positionen reduziert wird.

Charakterbasierte Methoden verfolgen einen anderen Ansatz. Sie arbeiten direkt mit dem Alignment und behandeln jede Spalte als eigenständige Beobachtung. Ziel ist es, einen Baum zu finden, der diese Beobachtungen durch evolutionäre Veränderungen möglichst gut erklärt.

Damit rücken wir wieder näher an den eigentlichen biologischen Prozess heran. Anstatt Beziehungen indirekt über Distanzen zu approximieren, versuchen wir, die Entstehung einzelner Charakterzustände entlang eines Baums zu rekonstruieren.

---

### **Das Parsimonieprinzip**

Die zentrale Idee der maximalen Parsimonie ist einfach und intuitiv.

Unter allen möglichen Bäumen wird derjenige bevorzugt, der die beobachteten Daten mit der geringsten Anzahl evolutionärer Veränderungen erklärt.

Dieses Prinzip entspricht einem allgemeinen wissenschaftlichen Leitgedanken: Wenn mehrere Erklärungen möglich sind, wird die einfachste bevorzugt. In der Phylogenetik bedeutet „einfach“ in diesem Kontext, dass möglichst wenige Substitutionen angenommen werden.

Die Fragestellung lautet daher:

> **Welcher Baum erklärt die Daten mit der minimalen Anzahl von Mutationen?**

---

### **Rekonstruktion von Veränderungen entlang des Baums**

Um dieses Kriterium anzuwenden, müssen wir bestimmen, wie viele Veränderungen für einen gegebenen Baum notwendig sind.

Die Zustände an den Blättern sind durch die Daten vorgegeben. Die Zustände an den internen Knoten, also den hypothetischen Vorfahren, sind unbekannt. Diese müssen so gewählt werden, dass die Anzahl der notwendigen Veränderungen minimal wird.

Für eine einzelne Alignment-Spalte wird die minimale Anzahl von Substitutionen berechnet, die erforderlich ist, um die beobachteten Zustände zu erklären. Diese Zahl wird als **Parsimony-Score** für diesen Charakter bezeichnet.

Der Gesamtscore eines Baums ergibt sich durch Aufsummieren über alle Charaktere.

---

### **Ein einfaches Beispiel**

Betrachten wir eine einzelne Alignment-Spalte für vier Taxa:

[
\begin{array}{c|c}
\text{Taxon} & \text{Zustand} \
\hline
A & G \
B & G \
C & T \
D & T \
\end{array}
]

Wir vergleichen zwei mögliche Baumtopologien.

Im ersten Fall werden ( A ) und ( B ) gemeinsam gruppiert, ebenso ( C ) und ( D ). In diesem Fall kann die Verteilung der Zustände durch genau eine Substitution erklärt werden.

Im zweiten Fall werden beispielsweise ( A ) und ( C ) gruppiert. Hier sind mindestens zwei Substitutionen erforderlich, um die beobachteten Zustände zu erklären.

Nach dem Parsimonieprinzip wird daher der erste Baum bevorzugt.

---

### **Kasten 7.6 — Effiziente Berechnung des Parsimony-Scores**

Für größere Bäume und viele Charaktere wird die direkte Berechnung schnell unübersichtlich.

Ein effizienter Algorithmus ist der sogenannte **Fitch-Algorithmus**.

Dieser arbeitet von den Blättern zum Wurzelknoten hin. Für jeden internen Knoten werden die möglichen Zustände bestimmt, die mit minimalen Veränderungen vereinbar sind. Wenn sich die Zustandsmengen der beiden Kindknoten überschneiden, wird ihre Schnittmenge verwendet. Andernfalls wird die Vereinigung gebildet, und eine Substitution gezählt.

Dieses Verfahren ermöglicht es, den Parsimony-Score zu berechnen, ohne alle möglichen Zustandszuweisungen explizit durchzugehen.

---

### **Homologie und Homoplasie im Parsimonie-Kontext**

Das Parsimonieprinzip bevorzugt Erklärungen, die auf Homologie beruhen. Gemeinsame Zustände werden, wenn möglich, als von einem gemeinsamen Vorfahren geerbt interpretiert.

Wenn ein beobachtetes Muster nicht durch eine minimale Anzahl von Veränderungen erklärt werden kann, müssen zusätzliche Substitutionen angenommen werden. Diese entsprechen homoplastischen Ereignissen, etwa konvergenter Evolution oder Rückmutationen.

Parsimony versucht daher implizit, Homoplasie zu minimieren.

---

### **Stärken des Parsimony-Ansatzes**

Der Parsimony-Ansatz besitzt mehrere Vorteile.

Er ist konzeptionell einfach und direkt mit der Idee evolutionärer Veränderungen verknüpft. Es wird kein explizites probabilistisches Modell benötigt. Zudem bleiben die Informationen einzelner Charaktere vollständig erhalten.

---

### **Grenzen und Probleme**

Trotz seiner Einfachheit weist der Ansatz auch wesentliche Einschränkungen auf.

Er geht davon aus, dass evolutionäre Prozesse möglichst sparsam ablaufen, was nicht immer der biologischen Realität entspricht. Insbesondere bei hohen Mutationsraten oder häufiger Homoplasie kann diese Annahme zu falschen Schlussfolgerungen führen.

Darüber hinaus können mehrere Bäume denselben minimalen Parsimony-Score besitzen, sodass keine eindeutige Lösung existiert.

Schließlich berücksichtigt der Ansatz nicht die unterschiedlichen Wahrscheinlichkeiten von Substitutionen. Alle Veränderungen werden gleich behandelt, unabhängig davon, wie wahrscheinlich sie tatsächlich sind.

---

### **Konzeptionelle Einordnung**

Maximum Parsimony stellt einen direkten Zugang zur Rekonstruktion evolutionärer Prozesse dar. Es verbindet beobachtete Daten mit einer minimalen Anzahl angenommener Veränderungen.

Gleichzeitig zeigt dieser Ansatz die Grenzen rein deterministischer Modelle auf. Ohne Berücksichtigung der zugrunde liegenden Wahrscheinlichkeiten kann die Realität nur eingeschränkt abgebildet werden.

---

### **Konzeptionelle Zusammenfassung**

Charakterbasierte Methoden arbeiten direkt mit Sequenzalignments und rekonstruieren phylogenetische Bäume, indem sie die Anzahl notwendiger evolutionärer Veränderungen minimieren.

Maximum Parsimony bietet einen intuitiven und rechnerisch zugänglichen Ansatz, beruht jedoch auf vereinfachenden Annahmen, die nicht in allen biologischen Situationen gerechtfertigt sind.

---

### **Selbstüberprüfungsfragen**

1. Worin unterscheiden sich charakterbasierte und distanzbasierte Methoden?
2. Was besagt das Parsimonieprinzip?
3. Wie wird der Parsimony-Score eines Baums bestimmt?
4. Welche Rolle spielen interne Knoten bei der Berechnung?
5. Wie wird Homoplasie im Parsimony-Ansatz behandelt?
6. Welche wesentlichen Einschränkungen besitzt dieser Ansatz?
