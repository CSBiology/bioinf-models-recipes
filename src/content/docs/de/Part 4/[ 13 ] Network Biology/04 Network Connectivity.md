---
title: "13.4 Netzwerkkonnektivität: Grad und Gradverteilung"
sidebar:
  label: "13.4 Netzwerkkonnektivität: Grad und Gradverteilung"
  order: 4
  group: "Part 4"
  part: "Part 4"
---

## 13.4 Netzwerkkonnektivität: Grad und Gradverteilung

Sobald ein biologisches System als Graph dargestellt wurde, stellt sich ganz natürlich die nächste Frage: **Wie lässt sich seine Struktur quantitativ beschreiben?** Die Graphentheorie stellt eine große Zahl von Maßen zur Charakterisierung von Netzwerken bereit, von einfachen lokalen Eigenschaften einzelner Knoten bis zu globalen Beschreibungen des gesamten Netzwerks. Das einfachste und grundlegendste dieser Maße ist der **Grad** eines Knotens.

### Lernziele

Nach der Bearbeitung dieses Kapitels sollten Sie in der Lage sein,

- den Grad eines Knotens zu definieren,
- zwischen Eingangsgrad und Ausgangsgrad in gerichteten Netzwerken zu unterscheiden,
- Knotengrade aus Graphen und Adjazenzmatrizen zu berechnen,
- das Konzept der Gradverteilung zu erläutern,
- zu verstehen, warum Gradverteilungen wichtige Informationen über die Organisation von Netzwerken liefern.

### Konnektivität als biologische Eigenschaft

Nicht alle Komponenten eines biologischen Netzwerks interagieren in gleichem Maß.

Einige Proteine sind nur an wenigen molekularen Wechselwirkungen beteiligt, während andere mit Dutzenden oder sogar Hunderten von Partnern interagieren. Manche Metabolite treten nur in einer einzigen biochemischen Reaktion auf, andere nehmen an zahlreichen verschiedenen Stoffwechselwegen teil. Ebenso regulieren bestimmte Gene nur eine kleine Zahl von Zielgenen, während Master-Regulatoren Hunderte nachgeschalteter Gene kontrollieren.

Diese Beobachtungen legen nahe, dass Konnektivität selbst biologische Information tragen kann.

Lässt sich quantifizieren, wie stark eine Komponente innerhalb des Netzwerks verbunden ist?

Die Graphentheorie liefert auf diese Frage eine einfache Antwort.

### Der Grad eines Knotens

Der **Grad** eines Knotens ist die Anzahl der mit ihm verbundenen Kanten.

In einem ungerichteten Graphen trägt jede Kante genau eine Verbindung zum Knoten bei. Der Grad entspricht daher einfach der Zahl der benachbarten Knoten.

Mathematisch ist der Grad des Knotens \(i\)

$$
k_i=\sum_{j=1}^{n}A_{ij},
$$

wobei \(A_{ij}\) den entsprechenden Eintrag der Adjazenzmatrix bezeichnet.

Der Grad ergibt sich also durch Summation der Einträge der entsprechenden Zeile, beziehungsweise der Spalte, da Adjazenzmatrizen ungerichteter Graphen symmetrisch sind.

Obwohl diese Definition mathematisch sehr einfach ist, liefert sie bereits wertvolle biologische Information. Ein stark vernetztes Protein etwa ist wahrscheinlich an vielen unterschiedlichen zellulären Prozessen beteiligt, während ein Protein mit nur einem oder zwei Interaktionspartnern eine deutlich speziellere Funktion ausüben könnte.

### Grad in gerichteten Graphen

In gerichteten Netzwerken wird das Konzept der Konnektivität etwas komplexer, weil jede Wechselwirkung eine Richtung besitzt.

Folglich hat jeder Knoten zwei verschiedene Grade.

Der **Eingangsgrad** zählt die eingehenden Kanten,

$$
k_i^{\mathrm{in}}
=\sum_j A_{ji},
$$

während der **Ausgangsgrad** die ausgehenden Kanten zählt,

$$
k_i^{\mathrm{out}}
=\sum_j A_{ij}.
$$

Die biologische Interpretation hängt vom Netzwerktyp ab.

In einem genregulatorischen Netzwerk entspricht der Ausgangsgrad eines Transkriptionsfaktors der Zahl der Gene, die er reguliert. Umgekehrt zeigt der Eingangsgrad eines Gens an, wie viele Regulatoren seine Expression kontrollieren.

Diese beiden Größen liefern oft komplementäre biologische Einsichten.

### Lokale und globale Eigenschaften

Der Grad beschreibt immer nur einen einzelnen Knoten.

Biologische Netzwerke enthalten jedoch oft Tausende von Knoten. Statt jeden Knoten einzeln zu betrachten, interessiert uns meist die Konnektivität des Netzwerks als Ganzes.

Daraus ergibt sich eine neue Frage.

Wie verteilen sich die Grade über alle Knoten?

Haben die meisten Knoten ähnlich viele Nachbarn, oder gibt es große Unterschiede in der Konnektivität?

Um diese Fragen zu beantworten, müssen wir von den Graden einzelner Knoten zur **Gradverteilung** übergehen.

### Die Gradverteilung

Die **Gradverteilung** beschreibt die Wahrscheinlichkeit, dass ein zufällig ausgewählter Knoten den Grad \(k\) besitzt.

Wenn \(N_k\) die Zahl der Knoten mit Grad \(k\) in einem Netzwerk mit \(N\) Knoten bezeichnet, dann ist die Gradverteilung gegeben durch

$$
P(k)=\frac{N_k}{N}.
$$

Anstatt sich auf einzelne Knoten zu konzentrieren, charakterisiert die Gradverteilung die Gesamtarchitektur des Netzwerks.

Zwei Netzwerke können exakt dieselbe Zahl von Knoten und Kanten enthalten und dennoch vollkommen unterschiedliche Gradverteilungen aufweisen.

Die Gradverteilung gehört daher zu den aussagekräftigsten Beschreibungen der Netzwerktopologie.

### Biologische Interpretation

Die Gradverteilung ist weit mehr als nur eine statistische Zusammenfassung.

Sie spiegelt wider, wie biologische Wechselwirkungen organisiert sind.

Wenn nahezu alle Proteine ähnlich viele Interaktionspartner besitzen, weist das Netzwerk eine relativ homogene Struktur auf. Wenn dagegen nur wenige Proteine mit vielen Partnern interagieren, während die Mehrheit nur an wenigen Wechselwirkungen beteiligt ist, ist das Netzwerk stark heterogen.

Diese Unterschiede haben tiefgreifende biologische Konsequenzen.

Sie beeinflussen die Robustheit des Netzwerks, die Effizienz von Informationstransfer und die evolutionären Zwänge, unter denen verschiedene Komponenten stehen.

Wie wir im nächsten Kapitel sehen werden, zeigen biologische Netzwerke Gradverteilungen, die sich grundlegend von denen zufällig verbundener Systeme unterscheiden.

> **Biologische Einsicht**
>
> Der Grad eines Knotens misst lokale Konnektivität. Die Gradverteilung zeigt, wie diese Konnektivität über das gesamte biologische System organisiert ist.

### Zentrale Konzepte

- Der Grad ist das einfachste Maß für die Konnektivität eines Knotens.
- In gerichteten Netzwerken beschreiben Eingangsgrad und Ausgangsgrad unterschiedliche Aspekte der Konnektivität.
- Grade können direkt aus der Adjazenzmatrix berechnet werden.
- Die Gradverteilung charakterisiert die Konnektivität des gesamten Netzwerks.
- Ähnliche mittlere Konnektivität bedeutet nicht notwendigerweise ähnliche Netzwerkorganisation.

### Zusammenfassung

Der Grad ist eine der grundlegendsten Größen der Graphentheorie und liefert ein einfaches Maß dafür, wie stark ein Knoten innerhalb eines Netzwerks verknüpft ist. Während einzelne Grade lokale Eigenschaften beschreiben, charakterisiert die Gradverteilung die Organisation der Konnektivität über das gesamte Netzwerk hinweg. Wie wir im folgenden Kapitel sehen werden, offenbart die Gradverteilung eine der definierenden Eigenschaften biologischer Netzwerke.

### Fragen zur Selbstkontrolle

1. Was ist der Grad eines Knotens?
2. Wie lässt sich der Grad aus einer Adjazenzmatrix berechnen?
3. Was ist der Unterschied zwischen Eingangsgrad und Ausgangsgrad?
4. Welche Information enthält die Gradverteilung?
5. Warum ist die Gradverteilung oft informativer als der Grad eines einzelnen Knotens?
