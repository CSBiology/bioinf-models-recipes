---
title: "13.9 Zentralität: Wichtige Knoten identifizieren"
sidebar:
  label: "13.9 Zentralität: Wichtige Knoten identifizieren"
  order: 9
  group: "Part 4"
  part: "Part 4"
---

## 13.9 Zentralität: Wichtige Knoten identifizieren

Nicht alle Knoten tragen in gleichem Maß zur Organisation und Funktion eines biologischen Netzwerks bei. Manche Proteine sind an vielen Wechselwirkungen beteiligt, andere verbinden ansonsten unabhängige Signalwege, und wieder andere nehmen Positionen ein, von denen aus sie besonders schnell mit dem Rest des Netzwerks kommunizieren können. Solche Knoten werden zusammenfassend häufig als *zentral* bezeichnet. Die Graphentheorie stellt eine Familie quantitativer Maße bereit, die als **Zentralitätsmaße** bekannt sind und unterschiedliche Aspekte der Knotenbedeutung erfassen.

### Lernziele

Nach der Bearbeitung dieses Kapitels sollten Sie in der Lage sein,

- zu erklären, warum sich die Bedeutung eines Knotens nicht durch ein einziges Maß beschreiben lässt,
- verschiedene Zentralitätsmaße voneinander zu unterscheiden,
- Grad-, Betweenness-, Closeness- und Eigenvektor-Zentralität zu berechnen und zu interpretieren,
- die biologische Interpretation verschiedener Zentralitätsbegriffe zu verstehen,
- für unterschiedliche biologische Fragestellungen geeignete Zentralitätsmaße auszuwählen.

### Was macht einen Knoten wichtig?

Angenommen, wir rekonstruieren das Protein-Interaktionsnetzwerk einer Zelle.

Einige Proteine interagieren mit vielen Partnern.

Andere interagieren nur mit wenigen Proteinen, verbinden aber ansonsten unabhängige Signalwege.

Wieder andere nehmen Positionen ein, die es ihnen erlauben, nahezu jedes andere Protein im Netzwerk schnell zu beeinflussen.

Welches dieser Proteine ist das wichtigste?

Darauf gibt es keine eindeutige Antwort.

Bedeutung hängt von der biologischen Fragestellung ab.

Ein Protein kann wichtig sein, weil es an vielen Wechselwirkungen beteiligt ist, weil es verschiedene funktionelle Module verbindet oder weil es effizient mit dem Rest des Netzwerks kommuniziert.

Unterschiedliche Zentralitätsmaße quantifizieren genau diese verschiedenen Perspektiven.

### Gradzentralität

Das einfachste Maß für Bedeutung ist die **Gradzentralität**.

Sie beruht auf der Annahme, dass stark vernetzte Knoten wichtiger sind als schwach vernetzte Knoten.

Für einen Knoten mit Grad \(k_i\) gilt

$$
C_D(i)=k_i.
$$

In vielen biologischen Netzwerken entsprechen Knoten mit hohem Grad den Hubs.

Weil Hubs mit vielen anderen Komponenten interagieren, sind sie oft an mehreren biologischen Prozessen gleichzeitig beteiligt.

Allerdings berücksichtigt die Gradzentralität nur die unmittelbare Nachbarschaft eines Knotens.

Sie ignoriert, wo sich der Knoten im Netzwerk insgesamt befindet.

### Betweenness-Zentralität

Stellen wir uns zwei funktionelle Module vor, die durch ein einziges Protein miteinander verbunden sind.

Auch wenn dieses Protein nur wenige Nachbarn besitzt, muss jedes Signal, das zwischen den beiden Modulen übertragen wird, über dieses Protein laufen.

Solche Knoten werden durch die **Betweenness-Zentralität** erfasst.

Betweenness misst, wie häufig ein Knoten auf kürzesten Pfaden liegt, die andere Knoten miteinander verbinden.

Knoten mit hoher Betweenness wirken als

- Brücken,
- Engpässe,
- Kommunikationszentren.

Die Entfernung solcher Knoten trennt häufig unterschiedliche Teile des Netzwerks voneinander.

In biologischen Systemen koordinieren Proteine mit hoher Betweenness oft die Kommunikation zwischen ansonsten unabhängigen Signalwegen.

### Closeness-Zentralität

Eine weitere Perspektive konzentriert sich auf Kommunikationseffizienz.

Einige Knoten liegen nahe am Zentrum des Netzwerks und können alle anderen Knoten in nur wenigen Interaktionsschritten erreichen.

Andere nehmen eher periphere Positionen ein.

Die **Closeness-Zentralität** quantifiziert genau diese Idee.

Sie basiert auf der mittleren Länge der kürzesten Pfade von einem Knoten zu allen anderen Knoten.

Knoten mit hoher Closeness können schnell mit dem gesamten Netzwerk kommunizieren.

In biologischen Systemen können solche Knoten regulatorische Signale besonders effizient verteilen oder zelluläre Antworten koordinieren.

### Eigenvektor-Zentralität

Die Gradzentralität zählt die Zahl der Nachbarn.

Doch nicht alle Nachbarn sind gleichermaßen wichtig.

Angenommen, zwei Proteine interagieren jeweils mit zehn Partnern.

Das eine interagiert hauptsächlich mit schwach vernetzten Proteinen.

Das andere interagiert mit zehn wichtigen regulatorischen Proteinen.

Intuitiv erscheint das zweite Protein einflussreicher.

Die **Eigenvektor-Zentralität** erfasst genau diese Intuition.

Anstatt alle Nachbarn gleich zu gewichten, weist sie Knoten, die mit bereits wichtigen Knoten verbunden sind, eine größere Bedeutung zu.

Ein Knoten wird demnach wichtig, wenn er mit einflussreichen Nachbarn verbunden ist.

Diese rekursive Definition ist in der Netzwerkwissenschaft weit verbreitet und bildet die konzeptionelle Grundlage mehrerer Ranking-Algorithmen, darunter auch des ursprünglichen PageRank-Algorithmus von Google.

### Das richtige Maß wählen

Jedes Zentralitätsmaß erfasst ein anderes biologisches Konzept.

| Zentralität | Biologische Interpretation |
|-------------|----------------------------|
| Grad | Lokale Konnektivität |
| Betweenness | Kommunikation zwischen Modulen |
| Closeness | Globale Kommunikationseffizienz |
| Eigenvektor | Einfluss über wichtige Nachbarn |

Es gibt daher kein universell "bestes" Zentralitätsmaß.

Welches Maß angemessen ist, hängt vielmehr von der biologischen Frage ab.

Wenn das Ziel darin besteht, Proteine mit vielen Interaktionspartnern zu identifizieren, ist die Gradzentralität geeignet.

Wenn Kommunikation zwischen Signalwegen im Vordergrund steht, liefert die Betweenness-Zentralität nützlichere Information.

Wenn schnelle Informationsausbreitung wichtig ist, kann Closeness die bessere Wahl sein.

### Zentralität in der Systembiologie

Zentralitätsmaße haben sich in der Systembiologie zu wertvollen Werkzeugen entwickelt.

Sie werden verwendet, um

- essenzielle Gene zu identifizieren,
- krankheitsassoziierte Proteine zu priorisieren,
- potenzielle Wirkstoffziele zu entdecken,
- Signalwege zu analysieren,
- die Organisation des Stoffwechsels zu untersuchen.

Dennoch sollten Zentralitätsmaße immer mit Vorsicht interpretiert werden.

Ein stark zentraler Knoten ist nicht automatisch biologisch essenziell.

Umgekehrt können auch Proteine mit relativ niedriger Zentralität unentbehrliche biologische Funktionen erfüllen, weil sie eine einzigartige biochemische Rolle spielen.

Netzwerktopologie ergänzt experimentelle Biologie daher, ersetzt sie aber niemals.

> **Biologische Einsicht**
>
> Zentralität misst biologische Bedeutung nicht direkt. Sie quantifiziert vielmehr verschiedene strukturelle Eigenschaften, die mit biologischer Funktion assoziiert sein können.

### Zentrale Konzepte

- Zentralitätsmaße quantifizieren unterschiedliche Vorstellungen von Knotenbedeutung.
- Die Gradzentralität misst lokale Konnektivität.
- Die Betweenness-Zentralität identifiziert Brücken zwischen Netzwerkregionen.
- Die Closeness-Zentralität misst Kommunikationseffizienz.
- Die Eigenvektor-Zentralität berücksichtigt sowohl die Zahl als auch die Bedeutung benachbarter Knoten.
- Unterschiedliche biologische Fragestellungen erfordern unterschiedliche Zentralitätsmaße.

### Zusammenfassung

Zentralitätsmaße liefern quantitative Methoden, um strukturell wichtige Knoten in biologischen Netzwerken zu identifizieren. Weil Bedeutung auf unterschiedliche Weise definiert werden kann, wurden mehrere sich ergänzende Zentralitätsmaße entwickelt. Zusammengenommen machen sie unterschiedliche Aspekte der Netzwerkorganisation sichtbar und sind zu unverzichtbaren Werkzeugen in der Analyse biologischer Systeme geworden.

### Fragen zur Selbstkontrolle

1. Warum gibt es keine einheitliche Definition eines "wichtigen" Knotens?
2. Welche biologische Eigenschaft wird durch die Gradzentralität gemessen?
3. Warum kann ein Knoten mit wenigen Nachbarn dennoch eine hohe Betweenness-Zentralität besitzen?
4. Wodurch unterscheidet sich die Closeness-Zentralität von der Gradzentralität?
5. Warum weist die Eigenvektor-Zentralität verschiedenen Nachbarn unterschiedliche Bedeutung zu?
6. Warum sollten Zentralitätsmaße immer gemeinsam mit biologischem Wissen interpretiert werden?
