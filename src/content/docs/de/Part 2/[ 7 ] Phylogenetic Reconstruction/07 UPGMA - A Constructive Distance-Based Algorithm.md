---
title: "7.7 UPGMA: Ein konstruktiver distanzbasierter Algorithmus"
sidebar:
  label: "7.7 UPGMA: Ein konstruktiver distanzbasierter Algorithmus"
  order: 7
  group: "Part 2"
  part: "Part 2"
---

# **7.7 UPGMA: Ein konstruktiver distanzbasierter Algorithmus**

### **Lernziele**

Nach diesem Abschnitt sollten Sie in der Lage sein:

* zu erklären, wie UPGMA einen phylogenetischen Baum aus einer Distanzmatrix konstruiert
* den Zusammenhang zwischen UPGMA und hierarchischem Clustering zu verstehen
* einen einfachen UPGMA-Baum schrittweise zu berechnen
* die Bedeutung der Astlängen im UPGMA-Kontext zu interpretieren
* die Annahme der molekularen Uhr und ihre Konsequenzen zu verstehen

---

### **Von der Suche zur direkten Konstruktion**

Im vorherigen Abschnitt haben wir gesehen, dass die Konstruktion phylogenetischer Bäume im Allgemeinen ein komplexes Suchproblem darstellt. UPGMA verfolgt einen grundlegend anderen Ansatz.

Anstatt den Raum möglicher Bäume zu durchsuchen, konstruiert UPGMA den Baum direkt, Schritt für Schritt. In jedem Schritt wird eine lokale Entscheidung getroffen, indem die jeweils ähnlichsten Taxa oder Cluster zusammengeführt werden.

Dieser Ansatz ist konzeptionell einfach und rechnerisch effizient. Gleichzeitig basiert er auf Annahmen, die die Struktur des resultierenden Baums maßgeblich beeinflussen.

---

### **Eine Sichtweise aus dem Clustering**

Die Grundidee von UPGMA ist eng verwandt mit dem hierarchischen Clustering.

Zu Beginn wird jede Sequenz als eigener Cluster betrachtet. In jedem Schritt werden die beiden Cluster mit der geringsten Distanz zusammengeführt. Dieser Prozess wird fortgesetzt, bis alle Sequenzen in einem einzigen Baum vereint sind.

Der entscheidende Unterschied zur allgemeinen Clusteranalyse liegt in der Interpretation. Jeder Zusammenschluss wird als evolutionäres Ereignis interpretiert, das einen gemeinsamen Vorfahren repräsentiert. Die Höhe, auf der Cluster verbunden werden, entspricht der angenommenen Zeit der Divergenz.

Auf diese Weise wird ein Clustering-Verfahren zu einem Modell evolutionärer Geschichte.

---

### **Schrittweise Konstruktion**

Der Algorithmus beginnt mit einer Distanzmatrix, in der jede Sequenz als eigener Cluster vorliegt.

Im ersten Schritt wird das Paar von Clustern mit der kleinsten Distanz identifiziert. Diese beiden Cluster werden zusammengeführt, und im Baum wird ein neuer interner Knoten eingeführt.

Die Länge der Äste zu diesem Knoten wird als die Hälfte der Distanz zwischen den Clustern gewählt. Dies entspricht der Annahme, dass sich beide Linien seit ihrer Trennung gleich lange entwickelt haben.

Nach der Fusion zweier Cluster muss die Distanzmatrix aktualisiert werden. Die Distanz zwischen dem neuen Cluster und einem verbleibenden Cluster wird als Durchschnitt der Distanzen zwischen allen Elementen der beteiligten Cluster berechnet.

Dieser Schritt wird iterativ wiederholt, bis nur noch ein einziger Cluster übrig bleibt, der den vollständigen Baum darstellt.

---

### **Ein Beispiel zur Veranschaulichung**

Betrachten wir eine Distanzmatrix für fünf Taxa:

[
\begin{array}{c|ccccc}
& a & b & c & d & e \
\hline
a & 0 & 17 & 21 & 31 & 23 \
b &   & 0  & 30 & 34 & 21 \
c &   &    & 0  & 28 & 39 \
d &   &    &    & 0  & 43 \
e &   &    &    &    & 0 \
\end{array}
]

Die kleinste Distanz ist ( D_{ab} = 17 ). Die Taxa ( a ) und ( b ) werden daher zu einem neuen Cluster zusammengefasst.

Die Astlänge von ( a ) und ( b ) zum gemeinsamen Knoten beträgt jeweils ( 17/2 = 8{,}5 ).

Anschließend werden die Distanzen zwischen dem neuen Cluster ( (a,b) ) und den verbleibenden Taxa berechnet. Für ( c ) ergibt sich beispielsweise:

[
D_{(a,b),c} = \frac{21 + 30}{2} = 25{,}5
]

Durch wiederholtes Anwenden dieses Prinzips entsteht schrittweise der vollständige Baum.

---

### **Kasten 7.5 — Gewichtetes Mittel bei der Clusterfusion**

Bei der Zusammenführung zweier Cluster ist es wichtig, die Größe der Cluster zu berücksichtigen.

Enthält Cluster ( A ) ( n_A ) Elemente und Cluster ( B ) ( n_B ) Elemente, so ergibt sich die Distanz zu einem dritten Cluster ( C ) als:

[
D_{(A,B),C} = \frac{n_A D_{A,C} + n_B D_{B,C}}{n_A + n_B}
]

Dieses gewichtete Mittel stellt sicher, dass größere Cluster entsprechend stärker in die Berechnung eingehen.

Ohne diese Gewichtung würde die Distanzmatrix mit zunehmender Clustergröße verzerrt.

---

### **Ultrametrische Bäume und die molekulare Uhr**

Ein charakteristisches Merkmal von UPGMA ist, dass der resultierende Baum **ultrametrisch** ist.

Das bedeutet, dass alle Blätter den gleichen Abstand zur Wurzel haben. Dies impliziert, dass alle Linien seit ihrem gemeinsamen Vorfahren gleich lange evolviert sind.

Diese Eigenschaft basiert auf der Annahme einer **molekularen Uhr**, nach der Mutationen mit konstanter Rate akkumulieren.

Unter dieser Annahme ist die evolutionäre Distanz direkt proportional zur Zeit, und die Höhe eines Knotens entspricht dem Zeitpunkt der Divergenz.

---

### **Wenn die Annahme verletzt ist**

In realen biologischen Systemen ist die Annahme einer konstanten Evolutionsrate häufig nicht erfüllt. Unterschiedliche Linien können sich mit unterschiedlichen Geschwindigkeiten entwickeln, etwa aufgrund verschiedener Selektionsdrücke oder Mutationsraten.

In solchen Fällen kann UPGMA zu falschen Baumstrukturen führen. Ähnlichkeiten können dann eher Unterschiede in der Evolutionsrate widerspiegeln als tatsächliche Verwandtschaftsverhältnisse.

Dies verdeutlicht eine grundlegende Einschränkung des Verfahrens. Seine Einfachheit beruht auf starken Annahmen, die nicht immer gerechtfertigt sind.

---

### **Konzeptionelle Einordnung**

UPGMA zeigt, wie sich aus einfachen lokalen Entscheidungen ein globaler phylogenetischer Baum konstruieren lässt.

Gleichzeitig macht das Verfahren deutlich, dass die Struktur eines Baums nicht allein durch die Daten bestimmt wird. Die zugrunde liegenden Annahmen spielen eine entscheidende Rolle.

---

### **Konzeptionelle Zusammenfassung**

UPGMA ist ein konstruktiver Algorithmus, der phylogenetische Bäume durch sukzessives Zusammenführen ähnlicher Cluster erzeugt. Er ist eng mit hierarchischem Clustering verwandt und bietet einen effizienten Zugang zur Baumkonstruktion.

Seine Anwendung ist jedoch auf Situationen beschränkt, in denen die Annahme einer konstanten Evolutionsrate näherungsweise erfüllt ist.

---

### **Selbstüberprüfungsfragen**

1. Worin unterscheidet sich UPGMA von suchbasierten Verfahren?
2. Warum werden Astlängen als halbe Distanzen angesetzt?
3. Wie werden Distanzen nach einer Clusterfusion aktualisiert?
4. Was bedeutet es, dass ein Baum ultrametrisch ist?
5. Welche Annahme liegt diesem Konzept zugrunde?
6. Warum kann UPGMA bei variablen Evolutionsraten falsche Ergebnisse liefern?
