---
title: "8.6 Hierarchisches Clustering: Beziehungen zwischen Clustern sichtbar machen"
sidebar:
  label: "8.6 Hierarchisches Clustering: Beziehungen zwischen Clustern sichtbar machen"
  order: 6
  group: "Part 3"
  part: "Part 3"
---

## 8.6 Hierarchisches Clustering: Beziehungen zwischen Clustern sichtbar machen

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- die Grundidee des hierarchischen Clusterings zu erklären.
- den agglomerativen Clustering-Algorithmus zu beschreiben.
- Dendrogramme als Darstellungen verschachtelter biologischer Beziehungen zu interpretieren.
- zwischen verschiedenen Linkage-Kriterien zu unterscheiden.
- die Vorteile und Grenzen des hierarchischen Clusterings einzuschätzen.

Der *k*-Means-Algorithmus bietet einen leistungsfähigen und rechnerisch effizienten Zugang zum Clustering. Er beruht jedoch auf einer grundlegenden Annahme: Jeder Cluster kann durch ein einzelnes Zentroid repräsentiert werden. Für viele biologische Datensätze ist diese Annahme sinnvoll, aber sie ist keineswegs universell gültig.

Biologische Organisation ist oft hierarchisch und nicht flach.

Gene wirken in Signalwegen zusammen, Signalwege interagieren innerhalb größerer regulatorischer Programme, und diese Programme prägen wiederum zelluläre Zustände. Ähnlich bilden Proteine Komplexe, Komplexe tragen zu biologischen Prozessen bei, und biologische Prozesse fügen sich in umfassendere funktionelle Systeme ein. Solche verschachtelten Beziehungen legen nahe, dass auch biologische Ähnlichkeit selbst eine hierarchische Struktur besitzen kann.

Statt zu fragen

> **Zu welchem Cluster gehört dieses Objekt?**

können wir daher auch fragen

> **Wie hängen biologische Objekte über mehrere Organisationsebenen hinweg miteinander zusammen?**

Genau diese Frage soll hierarchisches Clustering beantworten.

### Cluster schrittweise aufbauen

Im Unterschied zu *k*-Means beginnt hierarchisches Clustering nicht mit einer vorgegebenen Anzahl von Clustern. Stattdessen konstruiert es eine vollständige Hierarchie von Beziehungen, die von einzelnen Beobachtungen bis zum gesamten Datensatz reicht.

Der am häufigsten verwendete Ansatz ist das **agglomerative hierarchische Clustering**.

Der Begriff *agglomerativ* bedeutet einfach, dass die Struktur durch sukzessives Zusammenführen aufgebaut wird.

Der Algorithmus startet mit der einfachsten möglichen Clusterlösung:

Jede Beobachtung bildet zunächst ihren eigenen Cluster.

Enthält ein Datensatz 10.000 Gene, so beginnt das Verfahren also mit 10.000 getrennten Clustern.

Anschließend folgt eine Folge von Zusammenführungsschritten.

In jedem Schritt werden die beiden ähnlichsten Cluster zu einem neuen, größeren Cluster vereinigt. Dieser Prozess wird so lange wiederholt, bis schließlich alle Beobachtungen in einem einzigen Cluster zusammengefasst sind, der den gesamten Datensatz umfasst.

Der Algorithmus liefert also nicht nur eine einzelne Clusterlösung, sondern die vollständige Entstehungsgeschichte biologischer Gruppen.

### Der agglomerative Clustering-Algorithmus

Das Verfahren lässt sich in vier einfache Schritte gliedern.

#### Schritt 1: Einzelne Cluster initialisieren

Zu Beginn wird jede Beobachtung als eigenständiger Cluster behandelt.

Es werden dabei keinerlei Annahmen über Anzahl oder Größe biologischer Gruppen getroffen.

#### Schritt 2: Die ähnlichsten Cluster finden

Anschließend werden die Distanzen zwischen allen aktuell vorhandenen Clustern berechnet.

Die beiden Cluster mit dem kleinsten Abstand gelten als am ähnlichsten und werden zu einem neuen Cluster vereinigt.

#### Schritt 3: Clusterdistanzen aktualisieren

Nachdem zwei Cluster zusammengeführt wurden, müssen die Distanzen zwischen dem neu entstandenen Cluster und allen übrigen Clustern neu berechnet werden.

Wie genau diese Distanzen bestimmt werden, hängt vom gewählten **Linkage-Kriterium** ab, auf das wir gleich zurückkommen.

#### Schritt 4: Wiederholen, bis nur noch ein Cluster übrig ist

Der Zyklus aus Zusammenführen und Aktualisieren wird so lange fortgesetzt, bis alle Beobachtungen einem einzigen Cluster angehören.

Im Unterschied zu *k*-Means endet hierarchisches Clustering also nicht, sobald eine vorgegebene Zahl von Gruppen gefunden ist. Stattdessen entsteht eine vollständige Hierarchie verschachtelter Clusterbeziehungen.

### Das Dendrogramm

Die Folge dieser Zusammenführungsschritte wird als **Dendrogramm** visualisiert.

Ein Dendrogramm ist ein baumartiges Diagramm, das jeden Clustering-Schritt des Algorithmus dokumentiert.

Jedes Blatt des Baums entspricht einer einzelnen Beobachtung.

Jeder innere Knoten steht für die Vereinigung zweier Cluster.

Die vertikale Position eines Vereinigungsereignisses gibt an, bei welchem Abstand diese beiden Cluster zusammengeführt wurden.

Cluster, die bereits weit unten im Dendrogramm verschmelzen, sind einander sehr ähnlich.

Cluster, die erst weit oben zusammenkommen, unterscheiden sich deutlich stärker.

Anders als ein phylogenetischer Baum beschreibt ein Dendrogramm jedoch **keine** Evolutionsgeschichte.

Es visualisiert vielmehr die mathematische Ähnlichkeitsstruktur des Datensatzes.

Dieser Unterschied ist wichtig. Auch wenn beide Diagrammtypen wie Bäume aussehen, beantworten sie grundverschiedene biologische Fragen.

Ein phylogenetischer Baum rekonstruiert Abstammung.

Ein Dendrogramm fasst Ähnlichkeit zusammen.

### Biologische Beziehungen im Dendrogramm lesen

Eine der größten Stärken des hierarchischen Clusterings besteht darin, dass Information auf mehreren Ebenen biologischer Organisation erhalten bleibt.

Man denke an ein Genexpressionsexperiment, in dem Gene der Photosynthese gemeinsam clustern.

Innerhalb dieses großen Photosynthese-Clusters könnte sich eine Untergruppe von Genen für Photosystem I und eine weitere für Photosystem II abzeichnen.

Noch feinere Unterteilungen könnten Gene der Lichtsammlung von solchen des Elektronentransports trennen.

Ein Dendrogramm bildet genau solche verschachtelten Beziehungen auf natürliche Weise ab.

Anstatt die Daten auf eine einzige Organisationsebene festzulegen, erlaubt es, dass biologische Struktur auf mehreren Skalen sichtbar wird.

Das ist besonders wertvoll, weil biologische Systeme selbst inhärent hierarchisch organisiert sind.

### Von der Hierarchie zu einzelnen Clustern

An dieser Stelle stellt sich eine naheliegende Frage.

Wenn hierarchisches Clustering einen ganzen Baum erzeugt, wie gewinnen wir daraus die endgültigen Cluster?

Die Antwort ist überraschend einfach.

Wir **schneiden** das Dendrogramm auf einer gewählten Höhe.

Jeder Ast, der von diesem horizontalen Schnitt getroffen wird, bildet anschließend einen eigenständigen Cluster.

Ein Schnitt weit oben erzeugt wenige große Cluster.

Ein tieferer Schnitt erzeugt viele kleinere Cluster.

Hierarchisches Clustering liefert somit keine einzige Clusterlösung.

Es liefert vielmehr eine ganze Familie möglicher Clusterungen und erlaubt es, diejenige Ebene biologischer Detailtiefe auszuwählen, die zur jeweiligen Fragestellung am besten passt.

### Distanzen zwischen Clustern messen

Zu Beginn enthält jeder Cluster nur eine einzelne Beobachtung, sodass die Distanzberechnung unkompliziert ist.

Nach der ersten Zusammenführung bestehen Cluster jedoch aus mehreren Beobachtungen.

Damit entsteht eine neue wichtige Frage:

> **Wie soll der Abstand zwischen zwei Clustern definiert werden?**

Im Unterschied zu einzelnen Beobachtungen besitzen Cluster keinen eindeutig bestimmten Ort.

Sie bestehen aus vielen Punkten.

Unterschiedliche mathematische Definitionen des Clusterabstands führen daher zu unterschiedlichen Clustering-Ergebnissen.

Diese Definitionen bezeichnet man als **Linkage-Kriterien**.

### Linkage-Kriterien

In der Analyse biologischer Daten werden mehrere Linkage-Strategien häufig verwendet.

**Single Linkage**

Single Linkage definiert den Abstand zwischen zwei Clustern als den kleinsten Abstand zwischen irgendeinem Beobachtungspaar aus beiden Clustern.

Cluster werden also bereits dann zusammengeführt, wenn sich zwei ihrer Mitglieder stark ähneln.

Dieser Ansatz eignet sich besonders gut, um langgezogene oder unregelmäßige Clusterformen zu erkennen.

Allerdings leidet er häufig unter dem **Chaining-Effekt**, bei dem lange Ketten benachbarter Beobachtungen zu einem großen Cluster verbunden werden, obwohl sich die Endpunkte biologisch stark unterscheiden können.

**Complete Linkage**

Complete Linkage verfolgt die entgegengesetzte Idee.

Hier entspricht der Abstand zwischen zwei Clustern dem größten Abstand zwischen irgendeinem Beobachtungspaar.

Zwei Cluster werden nur dann vereinigt, wenn alle ihre Mitglieder relativ ähnlich sind.

Dies führt meist zu kompakten, gut getrennten Clustern, kann aber langgezogene biologische Strukturen künstlich aufspalten.

**Average Linkage**

Average Linkage berechnet den mittleren Abstand über alle Beobachtungspaare aus zwei Clustern.

Damit stellt es einen Kompromiss zwischen den beiden vorherigen Ansätzen dar und wird in der Genexpressionsanalyse häufig verwendet, weil es Robustheit und Flexibilität ausgewogen verbindet.

**Ward-Methode**

Die Ward-Methode nimmt eine andere Perspektive ein.

Statt paarweise Distanzen direkt zu vergleichen, bewertet sie, wie stark die gesamte Variation innerhalb der Cluster ansteigen würde, wenn zwei Cluster zusammengeführt werden.

In jeder Iteration wählt der Algorithmus diejenige Zusammenführung, bei der dieser Anstieg der Varianz innerhalb der Cluster am kleinsten ausfällt.

Konzeptionell ähnelt die Ward-Methode damit *k*-Means, weil beide Verfahren kompakte, intern homogene Cluster bevorzugen.

Daher liefert Ward-Clustering gerade für transkriptomische und proteomische Datensätze oft gut interpretierbare Cluster.

### Stärken und Grenzen

Hierarchisches Clustering besitzt mehrere wichtige Vorteile.

Erstens muss die Zahl der Cluster nicht im Voraus festgelegt werden.

Zweitens liefert das Dendrogramm eine reichhaltige Visualisierung der Ähnlichkeitsstruktur über mehrere biologische Skalen hinweg.

Drittens lässt sich verschachtelte biologische Organisation natürlich darstellen, ohne Beobachtungen zwangsweise in eine einzige feste Partition zu pressen.

Diese Eigenschaften haben hierarchisches Clustering zu einem Standardwerkzeug für die Visualisierung von Genexpressionsdaten gemacht.

Allerdings hat dieses Verfahren auch Grenzen.

Sobald zwei Cluster zusammengeführt wurden, kann diese Entscheidung nicht mehr rückgängig gemacht werden.

Ein früher fehlerhafter Merge wirkt sich daher auf den gesamten weiteren Verlauf des Algorithmus aus.

Außerdem wird hierarchisches Clustering bei sehr großen Datensätzen rechnerisch aufwendig, sodass zentrenbasierte Verfahren wie *k*-Means in vielen großskaligen Anwendungen praktischer sind.

Am wichtigsten ist jedoch, dass das resultierende Dendrogramm stark vom gewählten Linkage-Kriterium abhängt.

Unterschiedliche Linkage-Methoden können selbst auf genau demselben Datensatz deutlich verschiedene Clusterstrukturen erzeugen.

Auch das unterstreicht ein wiederkehrendes Motiv dieses Buches:

> **Unterschiedliche Algorithmen analysieren biologische Daten nicht nur auf verschiedene Weise, sondern verkörpern unterschiedliche mathematische Annahmen darüber, wie biologische Organisation dargestellt werden sollte.**

### Konzeptionelle Zusammenfassung

- Hierarchisches Clustering erzeugt Cluster, indem ähnliche Beobachtungen wiederholt zusammengeführt werden.
- Das Ergebnis ist ein Dendrogramm, das verschachtelte Ähnlichkeitsbeziehungen darstellt.
- Ein Dendrogramm beschreibt Ähnlichkeit, nicht Evolutionsgeschichte.
- Unterschiedliche Linkage-Kriterien definieren Clusterabstände auf unterschiedliche Weise.
- Die Ward-Methode minimiert den Anstieg der Variation innerhalb der Cluster.
- Hierarchisches Clustering bildet biologische Organisation auf mehreren Ebenen auf natürliche Weise ab.

### Fragen zur Selbstkontrolle

1. Worin unterscheidet sich hierarchisches Clustering konzeptionell von *k*-Means?
2. Welche biologische Information wird durch ein Dendrogramm dargestellt?
3. Warum muss beim hierarchischen Clustering die Zahl der Cluster nicht im Voraus festgelegt werden?
4. Worin unterscheiden sich Single, Complete, Average und Ward Linkage?
5. Warum können unterschiedliche Linkage-Kriterien zu unterschiedlichen biologischen Interpretationen führen?
