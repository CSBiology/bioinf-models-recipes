---
title: "12.6 Von Neuronen zu Schichten"
sidebar:
  label: "12.6 Von Neuronen zu Schichten"
  order: 6
  group: "Part 3"
  part: "Part 3"
---

# 12.6 Von Neuronen zu Schichten

## Ein einzelnes Neuron ist nur der Anfang

In den vorangegangenen Abschnitten haben wir das künstliche Neuron als isolierte Recheneinheit betrachtet. Jedes Neuron empfängt mehrere Eingaben, berechnet eine gewichtete Summe, wendet eine Aktivierungsfunktion an und erzeugt eine einzelne Ausgabe.

Obwohl ein einzelnes Neuron bereits nützliche Berechnungen ausführen kann, ist es viel zu begrenzt, um die meisten biologischen Vorhersageprobleme zu lösen.

Die Vorhersage der subzellulären Lokalisation eines Proteins hängt zum Beispiel gleichzeitig von vielen unterschiedlichen Sequenzeigenschaften ab. Ein Neuron könnte hydrophobe Aminosäureabschnitte erkennen, ein anderes positiv geladene Reste und ein weiteres spezifische Sequenzmotive. Ein einzelnes Neuron kann all diese Muster nicht gleichzeitig erfassen.

Die Stärke neuronaler Netze liegt daher nicht in einzelnen Neuronen, sondern in der **Kombination vieler Neuronen zu Schichten**.

Innerhalb einer Schicht führt jedes Neuron seine eigene Berechnung unabhängig aus. Gemeinsam erzeugen die Neuronen eine neue Repräsentation der Eingabedaten, die an die nächste Schicht weitergegeben werden kann.

---

## Viele Neuronen verarbeiten dieselbe Eingabe

Betrachten wir eine verborgene Schicht mit vier Neuronen.

Jedes Neuron erhält genau denselben Eingangsvektor

$$
\mathbf{x}
=
\begin{pmatrix}
x_1\\
x_2\\
\vdots\\
x_n
\end{pmatrix},
$$

wobei jede Komponente ein biologisches Merkmal repräsentiert.

Obwohl alle Neuronen dieselbe Eingabe erhalten, erzeugen sie **nicht** dieselbe Ausgabe.

Jedes Neuron besitzt seinen eigenen Satz von Gewichten und seinen eigenen Bias,

$$
w_1,w_2,\ldots,w_n,b.
$$

Dadurch lernt jedes Neuron, ein anderes Muster in den Daten zu erkennen.

Ein Neuron kann empfindlich für hydrophobe Regionen werden.

Ein anderes für positiv geladene N-Termini.

Ein drittes reagiert vielleicht auf charakteristische Aminosäurezusammensetzungen.

Gemeinsam lernen die Neuronen mehrere sich ergänzende Repräsentationen derselben biologischen Beobachtung.

---

## Matrixschreibweise

Für jedes Neuron einer Schicht eine eigene Gleichung aufzuschreiben, wird schnell unübersichtlich.

Angenommen, eine verborgene Schicht enthalte hundert Neuronen, von denen jedes fünfzig Eingangsmerkmale erhält.

Eine Gleichung für jedes einzelne Neuron zu formulieren, würde Hunderte nahezu identischer Ausdrücke erfordern.

Glücklicherweise bietet die lineare Algebra eine sehr viel elegantere Beschreibung.

Die Gewichte aller Neuronen einer Schicht lassen sich in einer einzigen **Gewichtsmatrix**

$$
W
$$

zusammenfassen.

Enthält die Schicht

- \(m\) Neuronen
- und empfängt jedes Neuron \(n\) Eingangsmerkmale,

dann hat die Gewichtsmatrix die Dimension

$$
m \times n.
$$

Jede **Zeile** entspricht einem Neuron.

Jede **Spalte** entspricht einem Eingangsmerkmal.

Die Bias-Werte aller Neuronen werden in einem Bias-Vektor

$$
\mathbf{b}
$$

gesammelt.

Die vollständige Berechnung der gesamten Schicht kann nun kompakt geschrieben werden als

$$
\mathbf{z}
=
W\mathbf{x}
+
\mathbf{b}.
$$

Anstatt nur ein Neuron zu beschreiben, beschreibt diese Gleichung gleichzeitig alle Neuronen der Schicht.

---

## Warum Matrixmultiplikation?

Auf den ersten Blick mag die Matrixschreibweise nur wie eine mathematische Vereinfachung erscheinen.

Tatsächlich liefert sie einen deutlich tieferen Einblick in die Arbeitsweise neuronaler Netze.

Erinnern wir uns daran, dass jedes Neuron seine eigene gewichtete Summe berechnet,

$$
z_i
=
w_{i1}x_1
+
w_{i2}x_2
+
\cdots
+
w_{in}x_n
+
b_i.
$$

Die Matrixmultiplikation

$$
W\mathbf{x}
$$

führt nichts anderes aus als all diese gewichteten Summen gleichzeitig.

Jede Zeile der Matrix wird mit dem Eingangsvektor multipliziert und erzeugt so einen Ausgabewert für ein einzelnes Neuron.

Anstatt ein Neuron nach dem anderen zu berechnen, erzeugt die Matrixmultiplikation die Ausgaben der gesamten Schicht in einer einzigen Operation.

Diese Beobachtung erklärt, warum lineare Algebra im modernen Deep Learning eine so zentrale Rolle spielt.

Neuronale Netze sind im Wesentlichen riesige Sammlungen von Matrixmultiplikationen, die durch nichtlineare Aktivierungsfunktionen miteinander verknüpft werden.

---

## Anwendung der Aktivierungsfunktion

Die von einer Schicht berechneten gewichteten Summen werden im Vektor

$$
\mathbf{z}
$$

gesammelt.

Wie wir im vorangegangenen Abschnitt gesehen haben, werden diese Werte nicht direkt an die nächste Schicht weitergegeben.

Stattdessen wird die Aktivierungsfunktion **unabhängig auf jedes Neuron** angewendet.

Mathematisch gilt

$$
\mathbf{a}
=
\phi(\mathbf{z}),
$$

wobei die Aktivierungsfunktion auf jede Komponente des Vektors einzeln wirkt.

Die vollständige Berechnung einer Schicht eines neuronalen Netzes lautet damit

$$
\boxed{
\mathbf{a}
=
\phi(W\mathbf{x}+\mathbf{b})
}
$$

Diese kompakte Gleichung gehört zu den wichtigsten Gleichungen des Deep Learning.

Sie beschreibt die Vorwärtsberechnung einer gesamten Schicht von Neuronen.

Jedes Feed-Forward-Netzwerk, unabhängig von seiner Größe oder Anwendung, wertet diese Gleichung immer wieder aus.

---

## Eine Schicht lernt eine neue Repräsentation

Beachten wir, was in dieser Berechnung geschieht.

Der Eingangsvektor

$$
\mathbf{x}
$$

enthielt die ursprünglichen biologischen Merkmale.

Nach der Multiplikation mit der Gewichtsmatrix und der Anwendung der Aktivierungsfunktion wurden diese Merkmale in einen neuen Vektor

$$
\mathbf{a}
$$

überführt.

Wichtig ist, dass die Komponenten dieses neuen Vektors den ursprünglichen biologischen Messgrößen nicht mehr direkt entsprechen.

Stattdessen repräsentieren sie Merkmale, die das Netzwerk automatisch gelernt hat.

Die ursprüngliche Eingabe könnte zum Beispiel enthalten:

- Aminosäurezusammensetzung,
- Hydrophobizität,
- Sequenzlänge
- und Ladung.

Nach einer verborgenen Schicht können die Ausgaben stattdessen für Folgendes stehen:

- das Vorhandensein eines Transitpeptids,
- membranspannende Regionen,
- positiv geladene Targeting-Signale
- oder Kombinationen mehrerer Sequenzmotive.

Das Netzwerk hat damit eine **neue Repräsentation** des Proteins konstruiert, die für die Vorhersageaufgabe nützlicher ist.

Genau diese Transformation von einer Repräsentation in eine andere ist die zentrale Idee des Deep Learning.

---

## Schichten erzeugen zunehmend abstrakte Repräsentationen

Ein Feed-Forward-Netzwerk endet nicht nach einer einzigen verborgenen Schicht.

Die Ausgabe

$$
\mathbf{a}
$$

einer Schicht wird zur Eingabe der nächsten.

Die nächste Schicht berechnet wiederum

$$
\phi(W\mathbf{a}+\mathbf{b}),
$$

und erzeugt so eine noch reichhaltigere Repräsentation.

Dieser Prozess wiederholt sich im gesamten Netzwerk.

Jede weitere Schicht baut auf den Repräsentationen auf, die von der vorherigen Schicht gelernt wurden.

Anstatt direkt aus den rohen biologischen Messgrößen zu lernen, arbeiten tiefere Schichten mit zunehmend informativen internen Repräsentationen.

Diese hierarchische Organisation erklärt, warum tiefe neuronale Netze Probleme lösen können, die für deutlich einfachere Modelle unzugänglich bleiben.

Im nächsten Abschnitt untersuchen wir genauer, wie solche verborgenen Repräsentationen aussehen und wie sie während des Lernens entstehen.

---

### Konzeptionelle Zusammenfassung

Neuronen werden erst dann leistungsfähig, wenn sie zu Schichten zusammengefasst werden. Jedes Neuron innerhalb einer Schicht erhält dieselbe Eingabe, lernt jedoch unterschiedliche Gewichte, sodass die Schicht mehrere Muster gleichzeitig erkennen kann. Die Matrixschreibweise beschreibt diese Berechnung elegant und reduziert Hunderte einzelner Neuronengleichungen auf den kompakten Ausdruck

$$
\mathbf{a}=\phi(W\mathbf{x}+\mathbf{b}).
$$

Jede Schicht transformiert eine Repräsentation der biologischen Daten in eine neue und erlaubt tiefen Netzwerken dadurch, immer abstraktere Beschreibungen komplexer biologischer Systeme aufzubauen.

---

### Fragen zur Selbstkontrolle

1. Warum reicht ein einzelnes Neuron nicht aus, um komplexe biologische Vorhersageprobleme zu lösen?
2. Warum erzeugen Neuronen derselben Schicht unterschiedliche Ausgaben, obwohl sie dieselbe Eingabe erhalten?
3. Welche Information ist in der Gewichtsmatrix \(W\) gespeichert?
4. Warum eignet sich Matrixmultiplikation besonders gut zur Beschreibung von Berechnungen in neuronalen Netzen?
5. Erklären Sie die Bedeutung der Gleichung
   $$
   \mathbf{a}=\phi(W\mathbf{x}+\mathbf{b}).
   $$
6. Warum entsprechen die Ausgaben einer verborgenen Schicht nicht mehr direkt den ursprünglichen biologischen Merkmalen?
7. Wie erzeugen aufeinanderfolgende verborgene Schichten zunehmend abstrakte Repräsentationen der Eingabedaten?
