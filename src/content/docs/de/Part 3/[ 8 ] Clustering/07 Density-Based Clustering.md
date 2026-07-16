---
title: "8.7 Dichtebasiertes Clustering: Cluster beliebiger Form erkennen"
sidebar:
  label: "8.7 Dichtebasiertes Clustering: Cluster beliebiger Form erkennen"
  order: 7
  group: "Part 3"
  part: "Part 3"
---

## 8.7 Dichtebasiertes Clustering: Cluster beliebiger Form erkennen

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- zu erklären, warum zentrenbasiertes Clustering bei komplexen biologischen Datensätzen scheitern kann.
- die Grundidee des dichtebasierten Clusterings zu beschreiben.
- den DBSCAN-Algorithmus und seine zwei zentralen Parameter zu erklären.
- zwischen Kernpunkten, Randpunkten und Rauschpunkten zu unterscheiden.
- die Stärken und Grenzen dichtebasierten Clusterings einzuschätzen.

Sowohl *k*-Means als auch hierarchisches Clustering sind leistungsfähige Verfahren, um Struktur in biologischen Daten sichtbar zu machen. Beide teilen jedoch eine wichtige Eigenschaft: Sie stützen sich in erster Linie auf Distanzen zwischen Beobachtungen, um Cluster zu identifizieren.

Das funktioniert sehr gut, wenn biologische Gruppen kompakt und klar voneinander getrennt sind. Reale biologische Daten sind jedoch oft wesentlich komplexer.

Man stelle sich einen Datensatz mit zwei halbmondförmigen Zellpopulationen vor. Für einen menschlichen Beobachter sind diese beiden Gruppen unmittelbar als getrennte Cluster erkennbar. Ein zentrenbasiertes Verfahren wie *k*-Means würde jedoch versuchen, jede Gruppe durch ein einzelnes Zentroid zusammenzufassen. Die resultierende Partition würde die Halbmondformen quer schneiden, anstatt ihrer natürlichen Geometrie zu folgen.

Auch hierarchisches Clustering stößt häufig an Grenzen, wenn Cluster durch allmähliche Übergänge verbunden sind oder wenn der Datensatz erhebliche Mengen experimentellen Rauschens enthält.

Diese Beobachtungen motivieren eine andere Art, über Cluster nachzudenken.

Statt zu fragen

> **Welche Beobachtungen liegen einander am nächsten?**

können wir auch fragen

> **Wo konzentrieren sich Beobachtungen?**

Dieser einfache Perspektivwechsel führt zu einer ganz anderen Familie von Clustering-Verfahren, dem **dichtebasierten Clustering**.

### Cluster als Regionen hoher Dichte

Die zentrale Annahme des dichtebasierten Clusterings unterscheidet sich grundlegend von derjenigen von *k*-Means.

Anstatt einen Cluster durch sein Zentrum zu repräsentieren, gehen dichtebasierte Verfahren davon aus, dass

> **Cluster Regionen sind, in denen Beobachtungen dicht beieinanderliegen und durch Bereiche niedriger Dichte voneinander getrennt werden.**

Diese Definition ist bemerkenswert anschaulich.

Man kann an die räumliche Verteilung von Bäumen in einem Wald denken.

Einzelne Bäume bilden selten perfekt kreisförmige Gruppen. Stattdessen finden sie sich in dichten Beständen, die durch offenere Bereiche voneinander getrennt sind. Welche genaue Form ein solcher Bestand hat, ist dabei weniger wichtig; entscheidend ist die hohe lokale Dichte der Bäume.

Dichtebasiertes Clustering überträgt genau diese Idee auf biologische Merkmalsräume.

Dort, wo sich Beobachtungen häufen, entsteht ein Cluster.

Wo Beobachtungen selten werden, ergeben sich die Clustergrenzen ganz natürlich.

Damit können Cluster praktisch jede geometrische Form annehmen.

### Der DBSCAN-Algorithmus

Der bekannteste dichtebasierte Clustering-Algorithmus ist **DBSCAN** (*Density-Based Spatial Clustering of Applications with Noise*).

Im Gegensatz zu *k*-Means muss bei DBSCAN die Anzahl der Cluster nicht vorab festgelegt werden.

Stattdessen identifiziert der Algorithmus Cluster automatisch, indem er die lokale Dichte in der Umgebung jeder Beobachtung untersucht.

Dazu verwendet DBSCAN zwei anschauliche Parameter.

### Eine Nachbarschaft definieren

Der erste Parameter ist der Nachbarschaftsradius

$$
\varepsilon
$$

(gesprochen: "Epsilon").

Um jede Beobachtung herum denken wir uns eine Hypersphäre mit Radius \(\varepsilon\).

Alle Beobachtungen, die innerhalb dieser Nachbarschaft liegen, gelten als Nachbarn.

Der Wert von \(\varepsilon\) legt also fest, was wir als "lokale Nachbarschaft" ansehen.

Ein kleiner Radius richtet die Aufmerksamkeit auf sehr lokale Strukturen.

Ein größerer Radius erfasst weiter ausgedehnte Bereiche des Merkmalsraums.

### Ausreichende Dichte definieren

Der zweite Parameter ist die minimale Anzahl von Nachbarbeobachtungen, die erforderlich ist, damit eine Region als dicht gilt.

Dieser Parameter wird üblicherweise mit

$$
\text{MinPts}
$$

bezeichnet.

Nur wenn eine Beobachtung mindestens **MinPts** Nachbarn innerhalb ihrer \(\varepsilon\)-Nachbarschaft besitzt, wird die umgebende Region als ausreichend dicht angesehen, um zu einem Cluster zu gehören.

Zusammen definieren diese beiden Parameter den Dichtebegriff des Algorithmus.

### Drei Typen von Beobachtungen

Auf Grundlage dieser Definitionen teilt DBSCAN jede Beobachtung in eine von drei Kategorien ein.

#### Kernpunkte

Ein **Kernpunkt** besitzt mindestens **MinPts** Nachbarn innerhalb seiner \(\varepsilon\)-Nachbarschaft.

Kernpunkte bilden das Rückgrat jedes Clusters.

Biologisch repräsentieren sie Beobachtungen, die sich im charakteristischen Bereich eines biologischen Zustands oder einer funktionellen Gruppe befinden.

#### Randpunkte

Ein **Randpunkt** erfüllt das Dichtekriterium selbst nicht, liegt aber innerhalb der Nachbarschaft eines Kernpunkts.

Randpunkte gehören damit zu einem Cluster, bilden jedoch dessen äußere Begrenzung.

Man kann sie als Beobachtungen verstehen, die dem Cluster ähneln, aber weniger repräsentativ sind als seine Kernbeobachtungen.

#### Rauschpunkte

Beobachtungen, die weder Kernpunkte noch Randpunkte sind, werden als **Rauschen** (oder **Ausreißer**) klassifiziert.

Im Unterschied zu *k*-Means oder hierarchischem Clustering zwingt DBSCAN also nicht jede Beobachtung in einen Cluster.

Stattdessen bleiben isolierte Beobachtungen unzugeordnet.

Gerade diese scheinbar einfache Eigenschaft zählt zu den größten Stärken des Verfahrens.

Biologische Datensätze enthalten fast immer Messfehler, seltene Zelltypen, technische Artefakte oder experimentelle Ausreißer. Solche Beobachtungen automatisch einem Cluster zuzuordnen, kann echte biologische Muster verschleiern.

DBSCAN behandelt sie stattdessen explizit als Beobachtungen, die sich keiner dichten biologischen Population zuverlässig zuordnen lassen.

### Cluster wachsen lassen

Nachdem alle Beobachtungen klassifiziert wurden, konstruiert DBSCAN Cluster durch ein einfaches Expansionsverfahren.

Der Algorithmus beginnt mit einem beliebigen Kernpunkt.

Alle benachbarten Kernpunkte werden demselben Cluster hinzugefügt.

Jeder neu hinzugefügte Kernpunkt bringt seinerseits seine eigenen Nachbarn ein, sodass der Cluster entlang zusammenhängender dichter Regionen nach außen wächst.

Randpunkte werden anschließend dem entsprechenden Cluster zugeordnet, während isolierte Rauschpunkte ausgeschlossen bleiben.

Wichtig ist, dass der Cluster ausschließlich auf Grundlage lokaler Dichte wächst.

Es werden keine Annahmen über seine globale Form getroffen.

Deshalb kann DBSCAN auf natürliche Weise gekrümmte, langgezogene, verzweigte oder anderweitig unregelmäßige biologische Strukturen erkennen, die sich mit zentrenbasierten Verfahren nur schwer erfassen lassen.

### Vorteile dichtebasierten Clusterings

Dichtebasiertes Clustering bietet gegenüber traditionellen Verfahren mehrere wichtige Vorteile.

Der wichtigste besteht darin, dass es kaum Annahmen über die Geometrie von Clustern macht.

Cluster können

- langgezogen,
- gekrümmt,
- verzweigt,
- verschachtelt
- oder stark unregelmäßig

sein.

Diese Flexibilität ist besonders in der modernen Einzelzellbiologie wertvoll, wo Zelldifferenzierung häufig kontinuierlichen Trajektorien folgt, statt kompakte kugelförmige Populationen zu bilden.

Ein zweiter großer Vorteil ist die automatische Erkennung von Ausreißern.

Anstatt jede Beobachtung zwanghaft einem Cluster zuzuordnen, erkennt DBSCAN explizit jene Punkte, die lokal nicht ausreichend gestützt sind.

Dadurch entstehen oft biologisch sauberere und besser interpretierbare Clusterungen.

Schließlich muss bei DBSCAN die Anzahl der Cluster nicht im Voraus angegeben werden.

Vielmehr ergibt sich die Zahl der Cluster aus der Dichtestruktur des Datensatzes selbst.

### Grenzen von DBSCAN

Wie jedes Clustering-Verfahren beruht auch DBSCAN auf Annahmen, die nicht immer passend sind.

Seine Leistung hängt stark von der Wahl der beiden Dichteparameter ab.

Wird der Nachbarschaftsradius zu klein gewählt, werden viele Beobachtungen als Rauschen eingestuft und echte Cluster können in mehrere kleinere Gruppen zerfallen.

Wird der Radius zu groß gewählt, können biologisch unterschiedliche Populationen zu einem einzigen Cluster verschmelzen.

Eine zweite Schwierigkeit entsteht, wenn verschiedene biologische Populationen sehr unterschiedliche Dichten besitzen.

Manche Signalwege erzeugen äußerst homogene Expressionsmuster, andere zeigen von Natur aus wesentlich mehr Variabilität.

Ebenso kann ein Zelltyp einen sehr dichten Cluster bilden, während ein anderer eine deutlich diffusere Population erzeugt.

Da DBSCAN im gesamten Datensatz nur eine einzige Dichteschwelle verwendet, kann es Schwierigkeiten haben, beide Clustertypen gleichzeitig zuverlässig zu erfassen.

Auch diese Grenzen vermitteln eine wichtige Lehre.

Kein Clustering-Algorithmus ist universell optimal.

Jeder Algorithmus definiert Cluster anhand eines bestimmten mathematischen Prinzips.

Welche Methode angemessen ist, hängt daher nicht nur vom Datensatz, sondern ebenso von der biologischen Fragestellung ab.

### Drei unterschiedliche Clusterbegriffe

An diesem Punkt sind uns drei grundlegend verschiedene Definitionen dessen begegnet, was ein Cluster sein kann.

*k*-Means geht davon aus, dass Cluster um repräsentative Zentroide organisiert sind.

Hierarchisches Clustering nimmt an, dass Cluster verschachtelte Ähnlichkeitsbeziehungen bilden.

DBSCAN versteht Cluster als zusammenhängende Regionen hoher Beobachtungsdichte.

Bemerkenswerterweise können alle drei Ansätze auf genau denselben Datensatz angewendet werden und dennoch unterschiedliche Ergebnisse liefern.

Keine dieser Lösungen ist per se richtig oder falsch.

Vielmehr spiegelt jede eine andere mathematische Hypothese darüber wider, wie biologische Organisation dargestellt werden sollte.

Auch das unterstreicht eines der zentralen Themen dieses Buches:

> **Algorithmen entdecken keine objektiven biologischen Wahrheiten. Sie entdecken Strukturen, die mit den Annahmen ihrer mathematischen Modelle vereinbar sind.**

Diese Annahmen zu verstehen, ist daher entscheidend, um Clustering-Ergebnisse kritisch zu interpretieren und für ein bestimmtes biologisches Problem die passende Methode auszuwählen.

### Konzeptionelle Zusammenfassung

- Dichtebasiertes Clustering definiert Cluster als Regionen hoher Beobachtungsdichte.
- DBSCAN identifiziert Cluster, ohne ihre Anzahl im Voraus festlegen zu müssen.
- Die beiden Parameter \(\varepsilon\) und MinPts legen fest, was im Datensatz als Dichte gilt.
- Beobachtungen werden als Kernpunkte, Randpunkte oder Rauschpunkte klassifiziert.
- DBSCAN erkennt auf natürliche Weise Cluster beliebiger Form und identifiziert Ausreißer.
- Wie alle Clustering-Verfahren beruht auch DBSCAN auf spezifischen Annahmen über biologische Organisation.

### Fragen zur Selbstkontrolle

1. Warum haben zentrenbasierte Clustering-Verfahren Schwierigkeiten mit unregelmäßig geformten Clustern?
2. Welche biologische Intuition motiviert dichtebasiertes Clustering?
3. Welche Rolle spielen die Parameter \(\varepsilon\) und MinPts in DBSCAN?
4. Worin unterscheiden sich Kernpunkte, Randpunkte und Rauschpunkte?
5. Unter welchen biologischen Bedingungen würden Sie DBSCAN eher als *k*-Means oder hierarchisches Clustering bevorzugen?
