---
title: "13.3 Graphentheorie: Die Sprache der Netzwerke"
sidebar:
  label: "13.3 Graphentheorie: Die Sprache der Netzwerke"
  order: 3
  group: "Part 4"
  part: "Part 4"
---

## 13.3 Graphentheorie: Die Sprache der Netzwerke

Biologische Systeme lassen sich als Netzwerke darstellen, weil sie aus Einheiten bestehen, die durch Wechselwirkungen miteinander verbunden sind. Um diese Netzwerke quantitativ zu analysieren, benötigen wir jedoch eine mathematische Sprache, die unabhängig vom konkreten biologischen System ist. Diese Sprache liefert die **Graphentheorie**. Obwohl sie ursprünglich als Teilgebiet der Mathematik entwickelt wurde, hat sich die Graphentheorie zu einem der wichtigsten Rahmenwerke für die Analyse komplexer biologischer Systeme entwickelt.

### Lernziele

Nach der Bearbeitung dieses Kapitels sollten Sie in der Lage sein,

- zu erklären, was ein Graph ist,
- zwischen biologischen Netzwerken und ihren Graphdarstellungen zu unterscheiden,
- Knoten und Kanten in unterschiedlichen biologischen Systemen zu identifizieren,
- zwischen gerichteten und ungerichteten Graphen zu unterscheiden,
- zwischen gewichteten und ungewichteten Graphen zu unterscheiden,
- zu erläutern, wie Adjazenzmatrizen Graphen mathematisch darstellen.

### Von der Biologie zur Mathematik

Im vorangegangenen Kapitel haben wir biologische Netzwerke als Mengen miteinander interagierender Komponenten eingeführt. Proteine interagieren mit Proteinen, Gene regulieren andere Gene, Metabolite werden über enzymatische Reaktionen ineinander umgewandelt, und Organismen interagieren innerhalb ökologischer Gemeinschaften.

Diese biologischen Wechselwirkungen sind oft außerordentlich komplex. Eine menschliche Zelle enthält Zehntausende Proteine, von denen jedes an zahlreichen Interaktionen beteiligt sein kann. Solche Systeme allein anhand experimenteller Beobachtungen zu verstehen, wird schnell unmöglich.

Deshalb konstruieren wir ein vereinfachtes mathematisches Modell, das ausschließlich die Interaktionsstruktur des Systems bewahrt. Diese Abstraktion nennt man einen **Graphen**.

Ein Graph beschreibt keine biochemischen Mechanismen, Reaktionskinetiken oder molekularen Strukturen. Er beantwortet vielmehr eine wesentlich einfachere Frage:

> **Welche Komponenten interagieren mit welchen anderen Komponenten?**

Auch wenn diese Vereinfachung viele biologische Details ausblendet, bewahrt sie genau die Information, die nötig ist, um die Organisation komplexer Systeme zu untersuchen.

### Graphen als mathematische Modelle

Mathematisch besteht ein Graph aus zwei Mengen:

- einer Menge von **Vertices** oder **Knoten**
- und einer Menge von **Kanten**, die Paare von Knoten miteinander verbinden.

Ein Graph wird üblicherweise geschrieben als

$$
G = (V,E),
$$

wobei

- \(V\) die Menge der Knoten ist,
- \(E\) die Menge der Kanten ist.

Obwohl diese Notation einfach aussieht, ist sie bemerkenswert allgemein. Jedes der im vorangegangenen Kapitel eingeführten biologischen Netzwerke kann in dieser Form dargestellt werden.

Der Graph wird damit zu einem mathematischen Modell des biologischen Interaktionsnetzwerks.

> **Historische Notiz**
>
> Die Graphentheorie entstand 1736, als der Schweizer Mathematiker Leonhard Euler das berühmte Königsberger Brückenproblem löste. Indem er Landmassen als Knoten und Brücken als Kanten darstellte, verwandelte er ein geographisches Rätsel in ein mathematisches. Diese Abstraktion legte den Grundstein für die moderne Graphentheorie und fast drei Jahrhunderte später auch für große Teile der Netzwerkbiologie.

### Knoten repräsentieren biologische Einheiten

Welche biologische Bedeutung ein Knoten hat, hängt vollständig von der untersuchten Fragestellung ab.

In unterschiedlichen Anwendungen können Knoten stehen für

- Gene,
- Proteine,
- Metabolite,
- Zellen,
- Gewebe,
- Arten,
- Krankheiten
- oder sogar Ökosysteme.

Es gibt also keine universelle biologische Bedeutung eines Knotens.

Wann immer ein biologisches Netzwerk dargestellt wird, sollte die erste Frage daher immer lauten:

**Wofür steht ein Knoten?**

Ohne diese Information lässt sich der Graph biologisch nicht interpretieren.

### Kanten repräsentieren biologische Wechselwirkungen

Kanten verbinden Paare von Knoten.

Wie bei den Knoten hängt ihre biologische Bedeutung vom zugrunde liegenden System ab.

Eine Kante kann stehen für

- physische Bindung,
- transkriptionelle Regulation,
- enzymatische Umwandlung,
- Metabolitentransport,
- Signalweiterleitung,
- genetische Interaktion,
- evolutionäre Ähnlichkeit
- oder ökologische Wechselwirkung.

Wichtig ist, dass eine Kante **nicht** notwendigerweise physischen Kontakt bedeutet.

Sie zeigt lediglich an, dass zwischen zwei Einheiten eine biologisch sinnvolle Beziehung besteht.

Erst die Definition von Knoten und Kanten legt die biologische Interpretation eines gesamten Graphen fest.

### Gerichtete und ungerichtete Graphen

Nicht jede biologische Wechselwirkung ist symmetrisch.

Wenn zwei Proteine physisch aneinander binden, ist die Interaktion gegenseitig. Wenn Protein A an Protein B bindet, dann bindet Protein B auch an Protein A.

Solche Wechselwirkungen werden auf natürliche Weise durch **ungerichtete Graphen** dargestellt, in denen Kanten keine Richtung besitzen.

Andere biologische Wechselwirkungen sind gerichtet.

Ein Transkriptionsfaktor reguliert sein Zielgen, doch das Zielgen reguliert nicht notwendigerweise den Transkriptionsfaktor.

Ebenso fließt Information in Signalwegen typischerweise bevorzugt in eine bestimmte Richtung.

Solche Systeme werden durch **gerichtete Graphen** dargestellt, in denen jede Kante eine Richtung besitzt.

Die Wahl zwischen gerichteten und ungerichteten Graphen hängt daher vollständig vom untersuchten biologischen Prozess ab.

### Gewichtete und ungewichtete Graphen

In der einfachsten Darstellung werden alle Wechselwirkungen gleich behandelt.

Entweder eine Interaktion existiert, oder sie existiert nicht.

Solche Graphen heißen **ungewichtete Graphen**.

Biologische Wechselwirkungen unterscheiden sich jedoch oft stark in ihrer Stärke oder Zuverlässigkeit.

Beispiele hierfür sind

- Bindungsaffinitäten,
- Reaktionsraten,
- Konfidenzwerte,
- Koexpressionskoeffizienten
- oder Interaktionswahrscheinlichkeiten.

Diese quantitativen Eigenschaften lassen sich berücksichtigen, indem jeder Kante ein numerisches Gewicht zugewiesen wird.

Die entstehenden **gewichteten Graphen** bewahren deutlich mehr biologische Information und liefern oft eine realistischere Beschreibung biologischer Systeme.

### Adjazenzmatrizen

Obwohl Graphen häufig als Diagramme gezeichnet werden, arbeiten rechnergestützte Algorithmen nur selten direkt mit diesen visuellen Darstellungen.

Stattdessen werden Graphen als Matrizen gespeichert.

Für einen Graphen mit \(n\) Knoten enthält die **Adjazenzmatrix**

$$
A \in \mathbb{R}^{n \times n}
$$

einen Eintrag für jedes mögliche Knotenpaar.

Für einen ungewichteten Graphen gilt

$$
A_{ij} =
\begin{cases}
1, & \text{wenn Knoten }i\text{ mit Knoten }j\text{ verbunden ist,}\\
0, & \text{sonst.}
\end{cases}
$$

Für gewichtete Graphen speichert der entsprechende Matrixeintrag das Gewicht der Wechselwirkung.

Die Adjazenzmatrix enthält genau dieselbe Information wie die graphische Darstellung, ist aber für rechnergestützte Analysen wesentlich besser geeignet. Viele Graphalgorithmen arbeiten direkt auf dieser Matrixdarstellung.

### Warum Graphdarstellungen so leistungsfähig sind

Die größte Stärke der Graphentheorie besteht darin, dass sie es erlaubt, Eigenschaften zu untersuchen, die aus einzelnen biologischen Beobachtungen nur schwer erkennbar sind.

Sobald ein biologisches System als Graph dargestellt wurde, können wir quantitative Fragen stellen.

Welche Proteine interagieren mit ungewöhnlich vielen Partnern?

Welche Metabolite verbinden ansonsten weit voneinander entfernte Stoffwechselwege?

Welche Teile des Netzwerks bilden funktionelle Module?

Wie effizient kann Information durch das Netzwerk fließen?

Diese Fragen betreffen nicht mehr einzelne biologische Komponenten. Sie beschreiben vielmehr die Organisation des Systems als Ganzes.

Die folgenden Kapitel führen die graphentheoretischen Maße ein, mit denen sich diese Fragen quantitativ beantworten lassen.

### Zentrale Konzepte

- Graphen sind mathematische Modelle biologischer Interaktionsnetzwerke.
- Knoten repräsentieren biologische Einheiten, Kanten repräsentieren Wechselwirkungen.
- Die biologische Interpretation eines Graphen hängt vollständig davon ab, wie Knoten und Kanten definiert sind.
- Graphen können gerichtet oder ungerichtet, gewichtet oder ungewichtet sein.
- Adjazenzmatrizen liefern eine effiziente mathematische Darstellung für rechnergestützte Analysen.

### Zusammenfassung

Die Graphentheorie stellt eine universelle mathematische Sprache zur Beschreibung biologischer Interaktionsnetzwerke bereit. Indem komplexe Systeme auf Knoten und Kanten reduziert werden, bleibt ihre wesentliche Interaktionsstruktur erhalten, während die Darstellung zugleich einfach genug für quantitative Analysen bleibt. Diese Abstraktion bildet die Grundlage der modernen Netzwerkbiologie und ermöglicht es, Organisationsprinzipien zu untersuchen, die in vielen sehr unterschiedlichen biologischen Systemen gemeinsam auftreten.

### Fragen zur Selbstkontrolle

1. Warum sind Graphen für die Darstellung biologischer Systeme nützlich?
2. Was ist der Unterschied zwischen einem biologischen Netzwerk und seiner Graphdarstellung?
3. Nennen Sie drei Beispiele dafür, wofür Knoten und Kanten in der Biologie stehen können.
4. Wann sollte ein Graph als gerichtet und wann als ungerichtet dargestellt werden?
5. Welche zusätzliche Information kann durch gewichtete Graphen dargestellt werden?
6. Warum werden Adjazenzmatrizen in der rechnergestützten Netzwerkbiologie häufig verwendet?
