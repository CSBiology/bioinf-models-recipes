---
title: "7.3 Von Charakteren zu Bäumen: Die Datengrundlage der Phylogenetik"
sidebar:
  label: "7.3 Von Charakteren zu Bäumen: Die Datengrundlage der Phylogenetik"
  order: 3
  group: "Part 2"
  part: "Part 2"
---

# **7.3 Von Charakteren zu Bäumen: Die Datengrundlage der Phylogenetik**

### **Lernziele**

Nach diesem Abschnitt sollten Sie in der Lage sein:

* zu erklären, was ein Charakter in der phylogenetischen Analyse ist
* zu verstehen, wie Sequenzalignments als Grundlage für Charaktere dienen
* informative von nicht-informativen Positionen zu unterscheiden
* Homologie und Homoplasie klar voneinander abzugrenzen
* zu beschreiben, wie biologische Daten in evolutionäre Signale übersetzt werden

---

### **Was trägt Information über Evolution?**

Bevor wir phylogenetische Bäume konstruieren können, müssen wir klären, welche Art von Daten überhaupt Informationen über evolutionäre Beziehungen enthält.

In den vorherigen Kapiteln haben wir Sequenzen als Objekte betrachtet, die verglichen werden können. In der Phylogenetik gehen wir einen Schritt weiter. Wir interpretieren Sequenzen als **Evidenz für evolutionäre Prozesse**.

Dies erfordert einen Perspektivwechsel. Eine Sequenz wird nicht mehr als zusammenhängende Zeichenkette verstanden, sondern als Sammlung einzelner Beobachtungen. Jede dieser Beobachtungen ist das Ergebnis eines historischen Prozesses, den wir nicht direkt sehen können.

Diese Beobachtungen bezeichnet man als **Charaktere**.

---

### **Vom Sequenzalignment zum Charakter**

Ein Charakter ist ein vererbbares Merkmal, das zwischen den untersuchten Einheiten variieren kann. In der klassischen Biologie waren solche Merkmale oft morphologischer Natur, etwa die Struktur eines Organs. In der modernen Phylogenetik werden Charaktere in der Regel aus molekularen Sequenzen abgeleitet.

Ein multiples Sequenzalignment liefert hierfür die zentrale Grundlage. Jede Spalte im Alignment entspricht einer Position, die als homolog zwischen allen Sequenzen angenommen wird. Die Einträge in dieser Spalte stellen unterschiedliche Ausprägungen desselben Charakters dar.

Diese Interpretation ist entscheidend. Das Alignment dient nicht nur der visuellen Anordnung von Sequenzen, sondern transformiert die Daten in eine strukturierte Menge vergleichbarer Beobachtungen.

Auf diese Weise wird ein Alignment zu einer Sammlung von Evidenzen für evolutionäre Zusammenhänge.

---

### **Nicht alle Charaktere sind gleich informativ**

Obwohl jede Alignment-Spalte einen Charakter darstellt, tragen nicht alle Charaktere gleichermaßen zur Rekonstruktion phylogenetischer Beziehungen bei.

Einige Positionen sind vollständig konserviert. Sie zeigen in allen Sequenzen denselben Zustand. Solche Positionen können biologisch relevant sein, liefern jedoch keine Information darüber, wie sich die Sequenzen zueinander verhalten.

Andere Positionen variieren zwar, aber in einer Weise, die keine klare Struktur erkennen lässt. Wenn beispielsweise jede Sequenz an einer Position einen anderen Zustand aufweist, lässt sich daraus keine eindeutige Gruppierung ableiten.

Besonders wertvoll sind hingegen Charaktere, die strukturierte Variation zeigen. Sie ermöglichen es, Sequenzen aufgrund gemeinsamer Zustände zu gruppieren, die plausibel als von einem gemeinsamen Vorfahren geerbt interpretiert werden können.

Daraus ergibt sich eine wichtige praktische Konsequenz. In realen Analysen werden Alignments häufig gefiltert. Regionen mit vielen Lücken oder geringer informativer Variation werden entfernt, da sie eher Rauschen als Signal liefern.

---

### **Kasten 7.1 — Informative und nicht-informative Positionen**

Betrachten Sie die folgenden Alignment-Spalten:

[
\begin{array}{c|cccc}
& A & B & C & D \
\hline
\text{Spalte 1} & A & A & A & A \
\text{Spalte 2} & A & G & C & T \
\text{Spalte 3} & A & A & G & G \
\end{array}
]

Spalte 1 ist vollständig konserviert und enthält keine Information über Verwandtschaftsverhältnisse.

Spalte 2 zeigt Variation, jedoch ohne erkennbare Struktur, da jeder Taxon einen anderen Zustand besitzt.

Spalte 3 hingegen weist eine klare Struktur auf: Die Taxa ( A ) und ( B ) teilen sich einen Zustand, während ( C ) und ( D ) einen anderen Zustand teilen. Diese Spalte liefert daher Evidenz für eine mögliche Gruppierung.

Dies verdeutlicht einen zentralen Punkt:

> **Nur bestimmte Muster von Variation sind für die phylogenetische Rekonstruktion informativ**

---

### **Homologie und Homoplasie**

Die Interpretation von Charakteren erfordert die Unterscheidung zweier grundlegender Konzepte.

**Homologie** bezeichnet Ähnlichkeit, die auf gemeinsamer Abstammung beruht. Wenn zwei Sequenzen denselben Zustand teilen, weil sie ihn von einem gemeinsamen Vorfahren geerbt haben, spiegelt diese Ähnlichkeit evolutionäre Verwandtschaft wider.

**Homoplasie** hingegen beschreibt Ähnlichkeit, die unabhängig entstanden ist. Dies kann durch konvergente Evolution, parallele Mutationen oder Rückmutationen geschehen.

So kann ein identisches Nukleotid in zwei Sequenzen auftreten, obwohl es nicht von einem gemeinsamen Vorfahren stammt, sondern durch unabhängige Mutationen entstanden ist. Ebenso kann eine Mutation auftreten und später wieder rückgängig gemacht werden, wodurch frühere Veränderungen unsichtbar werden.

Diese Unterscheidung ist zentral für die Phylogenetik. Unser Ziel ist es, Verwandtschaftsbeziehungen auf Basis von Homologie zu rekonstruieren, während Homoplasie diese Rekonstruktion erschwert.

---

### **Charaktere als Spuren evolutionärer Ereignisse**

Jeder Charakter kann als Spur eines oder mehrerer evolutionärer Ereignisse interpretiert werden.

Unterschiede zwischen Sequenzen deuten darauf hin, dass mindestens eine Mutation stattgefunden hat. Übereinstimmungen können darauf hindeuten, dass kein Wandel stattgefunden hat, wobei diese Interpretation trügerisch sein kann, da mehrere Mutationen sich gegenseitig aufheben können.

Damit verschiebt sich die Perspektive erneut. Wir vergleichen nicht mehr nur Sequenzen, sondern interpretieren ihre Unterschiede und Gemeinsamkeiten als Hinweise auf einen zugrunde liegenden Prozess.

Das Alignment wird so zu einer Aufzeichnung evolutionärer Signale, wenn auch zu einer unvollständigen.

---

### **Von Daten zu Modellen**

An diesem Punkt haben wir Sequenzen in eine Menge von Charakteren überführt, die Variation zwischen den betrachteten Taxa beschreiben.

Der nächste Schritt besteht darin, ein Modell zu konstruieren, das diese Beobachtungen erklärt. Unterschiedliche phylogenetische Methoden gehen dabei unterschiedliche Wege. Einige fassen Charaktere in Distanzen zusammen, andere zählen Veränderungen, wieder andere modellieren Wahrscheinlichkeiten von Zustandsübergängen.

Allen gemeinsam ist jedoch der Ausgangspunkt: Charaktere, die aus Sequenzdaten abgeleitet wurden.

---

### **Konzeptionelle Zusammenfassung**

Die phylogenetische Rekonstruktion basiert auf dem Vergleich von Charakteren. In der molekularen Phylogenetik werden diese Charaktere durch multiple Sequenzalignments definiert.

Nicht alle Charaktere sind gleichermaßen informativ, und ihre Interpretation erfordert die Unterscheidung zwischen Homologie und Homoplasie. Indem wir Charaktere als Spuren evolutionärer Ereignisse verstehen, können wir beginnen, Modelle zu entwickeln, die die Entstehung der beobachteten Sequenzen erklären.

---

### **Selbstüberprüfungsfragen**

1. Was versteht man unter einem Charakter in der phylogenetischen Analyse?
2. Wie definiert ein multiples Sequenzalignment solche Charaktere?
3. Warum sind manche Positionen informativer als andere?
4. Worin besteht der Unterschied zwischen Homologie und Homoplasie?
5. Warum können identische Zustände manchmal irreführend sein?
6. Weshalb werden Alignments häufig vor der Analyse gefiltert?
