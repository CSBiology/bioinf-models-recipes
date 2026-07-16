---
title: "8.5 Zentrenbasiertes Clustering: Der k-Means-Algorithmus"
sidebar:
  label: "8.5 Zentrenbasiertes Clustering: Der k-Means-Algorithmus"
  order: 5
  group: "Part 3"
  part: "Part 3"
---

## 8.5 Zentrenbasiertes Clustering: Der k-Means-Algorithmus

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- die Grundidee des zentrenbasierten Clusterings zu erklären.
- zu beschreiben, wie der *k*-Means-Algorithmus biologische Daten in Gruppen aufteilt.
- das Optimierungsziel von *k*-Means zu verstehen.
- zu erläutern, warum der Algorithmus iterativ konvergiert.
- die Stärken und Grenzen zentrenbasierten Clusterings für biologische Daten einzuschätzen.

Im vorherigen Abschnitt haben wir festgehalten, dass Clustering biologische Daten in Gruppen aufteilen soll, deren Mitglieder sich untereinander ähneln und sich zugleich von Mitgliedern anderer Gruppen unterscheiden. Wir haben außerdem gesehen, dass es keine eindeutige mathematische Definition eines Clusters gibt.

Der **k-Means-Algorithmus** beantwortet diese Frage, indem er eine einfache, aber wirkungsvolle Annahme trifft:

> **Ein biologischer Cluster lässt sich durch sein Zentrum repräsentieren.**

Anstatt alle paarweisen Beziehungen zwischen Beobachtungen zu berücksichtigen, nimmt *k*-Means an, dass jeder Cluster einen repräsentativen Punkt besitzt, sein **Zentroid**, und dass jede Beobachtung zu dem Cluster gehört, dessen Zentroid ihr am nächsten liegt.

Diese auf den ersten Blick bescheidene Annahme macht aus einem schwierigen Clustering-Problem ein rechnerisch effizientes Optimierungsverfahren. Genau deshalb gehört *k*-Means zu den am häufigsten verwendeten Clustering-Algorithmen in der Biologie.

### Biologische Intuition

Stellen wir uns vor, wir messen die Expression mehrerer Tausend Gene unter einer Reihe verschiedener Umweltbedingungen.

Einige Gene reagieren nahezu identisch, was darauf hindeutet, dass sie an demselben biologischen Signalweg beteiligt sein könnten. Anstatt jedes Gen einzeln mit allen anderen zu vergleichen, wäre es viel bequemer, jede biologische Gruppe durch ein einziges "typisches" Expressionsprofil zusammenzufassen.

Genau diese Rolle übernimmt das Zentroid.

Anstatt zu fragen, ob zwei Gene einander ähnlich sind, stellt *k*-Means eine andere Frage:

> **Welchem repräsentativen Expressionsprofil ähnelt dieses Gen am stärksten?**

Gene mit ähnlichem Verhalten werden also demselben Zentroid zugeordnet, und jedes Zentroid wird zum charakteristischen Expressionsmuster einer biologischen Gruppe.

Dadurch wird das Clustering-Problem erheblich vereinfacht. Statt über Millionen paarweiser Ähnlichkeiten nachzudenken, muss jedes Gen nur mit einer relativ kleinen Zahl repräsentativer Profile verglichen werden.

### Das Optimierungsziel

Wie viele Verfahren des maschinellen Lernens ist auch *k*-Means im Kern ein Optimierungsalgorithmus.

Sein Ziel besteht darin, Clusterzentren zu finden, die die Variabilität innerhalb der Cluster möglichst klein machen.

Genauer minimiert der Algorithmus die **Within-Cluster Sum of Squares (WCSS)**, also die Summe der quadrierten Abweichungen innerhalb der Cluster,

$$
J
=
\sum_{k=1}^{K}
\sum_{\mathbf{x}\in C_k}
\|\mathbf{x}-\boldsymbol{\mu}_k\|^2,
$$

wobei

- \(K\) die Anzahl der Cluster ist,
- \(C_k\) die Beobachtungen bezeichnet, die Cluster \(k\) zugeordnet sind,
- und \(\boldsymbol{\mu}_k\) das Zentroid dieses Clusters ist.

Auch wenn diese Formel zunächst technisch wirkt, ist ihre biologische Bedeutung gut verständlich.

Für jedes biologische Objekt berechnet der Algorithmus den Abstand zum Zentroid seines zugewiesenen Clusters. Große Abstände bedeuten, dass das Objekt deutlich vom charakteristischen Verhalten dieses Clusters abweicht, kleine Abstände sprechen für eine gute Übereinstimmung.

Das Optimierungsproblem besteht daher darin, Clusterzentren so zu wählen, dass alle Beobachtungen möglichst gut durch ihre repräsentativen Profile beschrieben werden.

Mit anderen Worten:

> **Ein gutes Clustering ist eines, in dem jedes biologische Objekt durch das Zentroid seines Clusters gut repräsentiert wird.**

Damit spiegelt das Optimierungsziel direkt die Grundidee des vorherigen Abschnitts wider: Cluster sollen eine hohe innere Ähnlichkeit besitzen.

### Der k-Means-Algorithmus

Die Optimierung selbst folgt einem bemerkenswert einfachen iterativen Verfahren.

#### Schritt 1: Die Anzahl der Cluster wählen

Bevor der Algorithmus starten kann, muss die Anzahl der Cluster, bezeichnet mit \(K\), festgelegt werden.

Zu diesem Zeitpunkt weiß der Algorithmus noch nichts über die biologische Organisation der Daten. Er kann daher nicht selbst entscheiden, wie viele funktionelle Gruppen tatsächlich existieren.

Diese Entscheidung muss zunächst von der Anwenderin oder dem Anwender getroffen werden.

Wie man einen sinnvollen Wert für \(K\) auswählt, ist selbst ein wichtiges Modellierungsproblem und wird später in diesem Kapitel behandelt.

#### Schritt 2: Die Zentroide initialisieren

Anschließend werden \(K\) anfängliche Zentroide im Merkmalsraum platziert.

In der einfachsten Variante werden diese Zentroide zufällig aus den beobachteten Datenpunkten ausgewählt.

Zu diesem Zeitpunkt besitzen sie noch keine biologische Bedeutung. Sie dienen zunächst lediglich als Startpunkte für die Optimierung.

Da diese Initialisierung zufällig ist, können unterschiedliche Durchläufe des Algorithmus zu verschiedenen Ergebnissen führen.

#### Schritt 3: Beobachtungen dem nächstgelegenen Zentroid zuordnen

Nun wird jedes biologische Objekt demjenigen Zentroid zugewiesen, zu dem es nach dem gewählten Distanzmaß, meist der euklidischen Distanz, den kleinsten Abstand besitzt.

Dadurch entstehen die ersten vorläufigen Cluster.

Biologisch gesprochen wird jedes Gen zunächst mit dem repräsentativen Expressionsprofil verknüpft, das seinem beobachteten Verhalten am besten entspricht.

#### Schritt 4: Die Zentroide aktualisieren

Nachdem alle Beobachtungen zugeordnet wurden, wird das Zentroid jedes Clusters neu berechnet.

Das neue Zentroid entspricht dem arithmetischen Mittel aller Merkmalsvektoren, die zu diesem Cluster gehören.

Geometrisch verschiebt sich das Zentroid also in Richtung des Zentrums seiner zugeordneten Beobachtungen.

Biologisch wird es damit zu einer besseren Beschreibung des charakteristischen Verhaltens dieser funktionellen Gruppe.

#### Schritt 5: Wiederholen bis zur Konvergenz

Nachdem sich die Zentroide verschoben haben, kann es sein, dass manche Beobachtungen nun einem anderen Zentroid näher liegen als zuvor.

Deshalb werden die Zuordnungs- und Aktualisierungsschritte wiederholt.

Mit jeder Iteration

- werden Beobachtungen neu zugeordnet,
- werden Zentroide neu berechnet,
- und nimmt die Variation innerhalb der Cluster ab.

Schließlich ändern sich die Zentroide praktisch nicht mehr.

Dann sagt man, der Algorithmus habe **konvergiert**, und das endgültige Clustering liegt vor.

### Warum der Algorithmus funktioniert

Eine elegante Eigenschaft von *k*-Means besteht darin, dass jede Iteration die Zielfunktion verbessert oder zumindest nicht verschlechtert.

In jedem Zuordnungsschritt werden Beobachtungen dem nächstgelegenen Zentroid zugeordnet.

In jedem Aktualisierungsschritt werden Zentroide berechnet, die ihre zugeordneten Beobachtungen besser repräsentieren.

Dadurch sinkt die Variation innerhalb der Cluster monoton, bis keine weitere Verbesserung mehr möglich ist.

Diese Eigenschaft garantiert die Konvergenz.

Sie garantiert jedoch **nicht**, dass der Algorithmus die global optimale Clusterlösung findet.

Stattdessen konvergiert *k*-Means zu einem **lokalen Optimum**, und das Endergebnis kann von der anfänglichen Platzierung der Zentroide abhängen.

Deshalb wird der Algorithmus in praktischen Anwendungen meist mehrfach mit unterschiedlichen zufälligen Initialisierungen durchgeführt, und die Lösung mit dem kleinsten Zielfunktionswert wird beibehalten.

### Biologische Interpretation

Aus biologischer Sicht sind die durch *k*-Means bestimmten Zentroide oft informativer als die einzelnen Beobachtungen selbst.

Jedes Zentroid repräsentiert das charakteristische Verhalten einer biologischen Gruppe.

Für Genexpressionsdaten kann ein Zentroid als **typisches Expressionsprofil** eines regulatorischen Programms interpretiert werden.

Gene, die demselben Zentroid zugeordnet sind, werden damit zu Kandidaten für eine gemeinsame biologische Funktion, einen gemeinsamen Signalweg oder eine gemeinsame zelluläre Antwort.

Die Zentroide liefern somit eine kompakte Zusammenfassung komplexer biologischer Datensätze, indem sie Tausende einzelner Messungen auf wenige repräsentative biologische Muster verdichten.

### Konzeptionelle Zusammenfassung

- *k*-Means nimmt an, dass jeder Cluster durch ein Zentroid repräsentiert werden kann.
- Der Algorithmus minimiert die Variation innerhalb der Cluster.
- Das Clustering erfolgt durch abwechselnde Zuordnungs- und Zentroid-Aktualisierungsschritte.
- Der Algorithmus konvergiert iterativ zu einem lokalen Optimum.
- Die resultierenden Zentroide fassen das charakteristische Verhalten biologischer Gruppen zusammen.

### Fragen zur Selbstkontrolle

1. Welche grundlegende Annahme unterscheidet *k*-Means von anderen Clustering-Verfahren?
2. Welche biologische Interpretation lässt sich einem Clusterzentroid geben?
3. Warum muss die Anzahl der Cluster vor dem Start von *k*-Means festgelegt werden?
4. Warum wechselt der Algorithmus iterativ zwischen Zuordnung und Aktualisierung der Zentroide?
5. Warum können verschiedene Durchläufe von *k*-Means zu unterschiedlichen Clustering-Ergebnissen führen?
