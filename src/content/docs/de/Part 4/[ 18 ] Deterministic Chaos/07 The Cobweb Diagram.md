---
title: "18.7 Iteration verstehen: Das Spinnwebdiagramm"
sidebar:
  label: "18.7 Iteration verstehen: Das Spinnwebdiagramm"
  order: 7
  group: "Part 4"
  part: "Part 4"
---

## 18.7 Iteration verstehen: Das Spinnwebdiagramm

Die logistische Abbildung unterscheidet sich grundlegend von den Differentialgleichungsmodellen, die wir in den vorherigen Kapiteln untersucht haben.

Anstatt kontinuierliche Veränderung über die Zeit zu beschreiben, wendet die logistische Abbildung immer wieder dieselbe mathematische Regel an, um den nächsten Zustand des Systems zu erzeugen.

Diese wiederholte Anwendung einer Funktion nennt man **Iteration**.

Obwohl die Gleichung selbst außerordentlich einfach ist, ist es oft schwierig, eine Intuition dafür zu entwickeln, wie wiederholte Iterationen zunehmend komplexes Verhalten erzeugen.

Eine bemerkenswert elegante grafische Methode, das sogenannte **Spinnwebdiagramm**, liefert genau diese Intuition.

### Eine Funktion iterieren

Betrachten wir die logistische Abbildung

$$
x_{n+1}=f(x_n).
$$

Ausgehend von einer Anfangspopulation \(x_0\) berechnet die Gleichung die nächste Generation:

$$
x_1=f(x_0).
$$

Dann wird dieselbe Gleichung erneut angewendet:

$$
x_2=f(x_1),
$$

gefolgt von

$$
x_3=f(x_2),
$$

und so weiter.

Die gesamte Dynamik wird also dadurch erzeugt, dass exakt dieselbe Funktion immer wieder angewendet wird.

Es werden keine zusätzlichen Gleichungen eingeführt.

Die Komplexität entsteht ausschließlich durch wiederholte Iteration.

### Eine grafische Konstruktion

Das Spinnwebdiagramm visualisiert diesen iterativen Prozess.

Das Diagramm enthält zwei Kurven.

Die erste ist die Funktion

$$
y=f(x),
$$

die im Fall der logistischen Abbildung eine nach unten geöffnete Parabel ist.

Die zweite ist die Diagonale

$$
y=x.
$$

Diese Diagonale spielt eine besondere Rolle, weil auf ihr jeder Punkt identische \(x\)- und \(y\)-Koordinaten besitzt.

Sie erlaubt es daher, die Ausgabe einer Iteration in die Eingabe der nächsten zu überführen.

### Das Spinnweb konstruieren

Nehmen wir an, wir beginnen mit einer Anfangspopulation \(x_0\).

Der erste Schritt besteht darin, sich vertikal zu bewegen, bis die Kurve \(y=f(x)\) erreicht wird.

Die Höhe dieses Punktes repräsentiert die nächste Population

$$
x_1=f(x_0).
$$

Allerdings repräsentiert die horizontale Achse noch immer die alte Population \(x_0\).

Um \(x_1\) als Eingabe für die nächste Iteration zu verwenden, müssen wir diesen Wert zurück auf die horizontale Achse übertragen.

Das geschieht, indem wir uns horizontal bewegen, bis wir die Diagonale \(y=x\) schneiden.

An diesem Punkt

ist die horizontale Koordinate zu \(x_1\) geworden.

Nun können wir exakt denselben Vorgang wiederholen.

Vertikal zur Funktion,

dann horizontal zur Diagonalen,

immer wieder.

Die entstehende Zickzack-Bahn erinnert an ein Spinnennetz und verleiht dem Diagramm seinen Namen.

### Konvergenz gegen ein Gleichgewicht

Für kleine Werte des Wachstumsparameters \(r\) zeigt das Spinnwebdiagramm ein einfaches Muster.

Jede Iteration bewegt sich schrittweise näher an den Punkt heran, an dem die Parabel die Diagonale schneidet.

Schließlich konvergieren alle Iterationen gegen diesen einzelnen Punkt.

Mathematisch erfüllt dieser Schnittpunkt

$$
f(x)=x.
$$

Einen solchen Punkt nennt man **Fixpunkt**, weil die Anwendung der Funktion seinen Wert nicht mehr verändert.

Die grafische Konstruktion macht damit unmittelbar sichtbar, warum die Population gegen ein stabiles Gleichgewicht konvergiert.

### Oszillatorisches Verhalten

Mit wachsendem Wachstumsparameter verändert sich die Geometrie.

Anstatt spiralförmig gegen den Fixpunkt zu laufen, pendelt das Spinnweb zwischen zwei verschiedenen Orten hin und her.

Die Population nähert sich nicht länger einem einzelnen Gleichgewichtspunkt.

Stattdessen besucht sie wiederholt zwei verschiedene Werte.

Das System hat eine **Periode-zwei-Oszillation** entwickelt.

Weitere Erhöhungen des Wachstumsparameters erzeugen Periode-vier-, Periode-acht- und noch komplexere Oszillationen.

Das Spinnwebdiagramm macht diese Übergänge unmittelbar sichtbar.

### Die Kraft der Visualisierung

Eine der größten Stärken des Spinnwebdiagramms besteht darin, dass es eine abstrakte mathematische Gleichung in einen geometrischen Prozess übersetzt.

Ohne irgendeine Gleichung explizit zu lösen, können wir sofort erkennen, ob die Iterationen

- gegen ein Gleichgewicht konvergieren,
- periodisch oszillieren
- oder irregulär durch den Zustandsraum wandern.

Die Geometrie macht die Dynamik sichtbar.

Darin zeigt sich ein wiederkehrendes Motiv dieses Buches.

Anstatt sich ausschließlich auf algebraische Rechnungen zu verlassen, liefern grafische Darstellungen oft die tiefste Intuition für das Verständnis nichtlinearer Systeme.

### Ausblick

Wenn der Wachstumsparameter weiter zunimmt, werden die Oszillationen zunehmend komplexer.

Die Periode verdoppelt sich wiederholt:

- ein Gleichgewicht,
- zwei Zustände,
- vier Zustände,
- acht Zustände
- und so weiter.

Diese bemerkenswerte Folge nennt man die **Periodenverdopplungskaskade**.

Sie stellt einen der universellen Wege dar, auf denen deterministisches Chaos entsteht.

### Zentrale Konzepte

- Iteration bedeutet, dieselbe mathematische Funktion wiederholt anzuwenden.
- Die logistische Abbildung erzeugt komplexe Dynamik durch wiederholte Iteration.
- Das Spinnwebdiagramm liefert eine grafische Darstellung dieses Prozesses.
- Fixpunkte liegen dort, wo \(f(x)=x\) gilt.
- Spinnwebdiagramme visualisieren Konvergenz, Oszillationen und zunehmend komplexe Dynamik.
- Grafische Methoden liefern oft tiefere Intuition als reine Algebra.

### Zusammenfassung

Das Spinnwebdiagramm ist ein grafisches Werkzeug zum Verständnis iterativer dynamischer Systeme. Indem die Ausgabe der logistischen Funktion wiederholt auf ihre Eingabe zurückgeführt wird, macht das Diagramm sichtbar, wie sich das System im Zeitverlauf entwickelt. Je nach Wert des Wachstumsparameters können die Iterationen gegen einen Fixpunkt konvergieren, zwischen mehreren Zuständen oszillieren oder zunehmend komplexe Dynamiken entwickeln. Das Spinnwebdiagramm bildet damit eine anschauliche Brücke zwischen der logistischen Gleichung und der Entstehung von Chaos.

### Verständnisfragen

1. Was bedeutet es, eine mathematische Funktion zu iterieren?
2. Warum wird im Spinnwebdiagramm die Diagonale \(y=x\) benötigt?
3. Was repräsentiert der Schnittpunkt der logistischen Kurve mit der Diagonalen?
4. Wie veranschaulicht das Spinnwebdiagramm die Konvergenz gegen ein stabiles Gleichgewicht?
5. Was verändert sich im Spinnwebdiagramm, wenn das System zu oszillieren beginnt?
6. Warum sind grafische Methoden für das Verständnis nichtlinearer Dynamik besonders nützlich?
