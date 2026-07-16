---
title: "12.5 Warum Aktivierungsfunktionen wichtig sind"
sidebar:
  label: "12.5 Warum Aktivierungsfunktionen wichtig sind"
  order: 5
  group: "Part 3"
  part: "Part 3"
---

# 12.5 Warum Aktivierungsfunktionen wichtig sind

## Lineare Modelle haben eine grundlegende Grenze

Im vorangegangenen Abschnitt haben wir gesehen, dass jedes künstliche Neuron zunächst eine gewichtete Summe seiner Eingaben berechnet,

$$
z=\sum_{i=1}^{n} w_i x_i+b.
$$

Auf den ersten Blick scheint dies ein vollkommen vernünftiges Rechenmodell zu sein.

Schließlich verwendet die multiple lineare Regression genau dieselbe Gleichung.

Daraus ergibt sich ganz natürlich eine wichtige Frage:

> **Wenn jedes Neuron bereits eine lineare Regression ausführt, warum brauchen wir dann noch mehr?**

Die Antwort ist überraschend tiefgreifend.

Ohne eine zusätzliche nichtlineare Transformation würden tiefe neuronale Netze keinen Vorteil gegenüber den linearen Modellen bieten, die wir bereits in Kapitel 9 kennengelernt haben.

---

## Das Stapeln linearer Modelle erzeugt keine Komplexität

Angenommen, wir konstruieren ein Netzwerk aus mehreren Schichten.

Die erste Schicht berechnet eine gewichtete Summe der Eingangsmerkmale.

Die zweite Schicht berechnet wiederum gewichtete Summen der Ausgaben der ersten Schicht.

Die dritte Schicht wiederholt dieselbe Operation.

Intuitiv könnte man erwarten, dass die Kombination vieler linearer Transformationen nach und nach ein hochkomplexes Modell erzeugt.

Mathematisch ist das jedoch nicht der Fall.

Eine lineare Transformation, auf die eine weitere lineare Transformation folgt, bleibt linear.

Zum Beispiel kann

$$
y = A(Bx)
$$

immer geschrieben werden als

$$
y = Cx,
$$

wobei

$$
C = AB.
$$

Die beiden Transformationen verschmelzen also zu einer einzigen.

Dasselbe Prinzip gilt unabhängig davon, wie viele Schichten hinzugefügt werden.

Zehn lineare Schichten.

Hundert lineare Schichten.

Oder Tausend.

Das Ergebnis bleibt mathematisch äquivalent zu einem einzelnen linearen Modell.

Folglich wäre ein neuronales Netz ohne nichtlineare Aktivierungsfunktionen niemals ausdrucksstärker als gewöhnliche lineare Regression.

Zusätzliche Schichten allein würden keinen Gewinn bringen.

---

## Die Notwendigkeit der Nichtlinearität

Biologische Systeme werden nur selten durch einfache lineare Beziehungen bestimmt.

Genregulation umfasst oft Schwellenwerte.

Enzymkinetiken sättigen.

Proteine wechseln zwischen verschiedenen Konformationszuständen.

Zellen integrieren mehrere Signalwege über hochgradig nichtlineare Wechselwirkungen.

Um solches Verhalten zu erfassen, brauchen wir Modelle, die selbst nichtlinear sind.

Genau das ist die Aufgabe der Aktivierungsfunktion.

Anstatt die gewichtete Summe direkt an die nächste Schicht weiterzugeben, transformiert jedes Neuron sie zunächst mit einer nichtlinearen mathematischen Funktion,

$$
a=\phi(z).
$$

Diese scheinbar kleine Modifikation verändert das Verhalten des gesamten Netzwerks grundlegend.

Jede Schicht führt nun eine nichtlineare Transformation der vorangegangenen Schicht aus.

Die Verkettung vieler nichtlinearer Transformationen kann außerordentlich komplexe Beziehungen darstellen, die mit linearen Modellen allein unmöglich zu beschreiben wären.

Die Ausdrucksstärke des Deep Learning entsteht daher nicht aus den gewichteten Summen, sondern aus den nichtlinearen Aktivierungsfunktionen, die aufeinanderfolgende Schichten miteinander verbinden.

---

## Die Sigmoidfunktion

Historisch war eine der ersten Aktivierungsfunktionen, die in neuronalen Netzen verwendet wurden, die **Sigmoidfunktion**,

$$
\phi(z)
=
\frac{1}{1+e^{-z}}.
$$

Die Sigmoidfunktion transformiert jede Eingabe in einen Wert zwischen 0 und 1.

Sehr negative Eingaben führen zu Ausgaben nahe null.

Sehr positive Eingaben führen zu Ausgaben nahe eins.

Im mittleren Bereich verändert sich die Ausgabe glatt mit der Eingabe.

Dieses Verhalten erinnert an einen graduellen Aktivierungsprozess.

Kleine Eingangssignale bewirken nur schwache Reaktionen, während hinreichend große Signale zu starker Aktivierung führen.

Weil die Ausgabe als Wahrscheinlichkeit interpretiert werden kann, wird die Sigmoidfunktion noch immer häufig in der Ausgabeschicht binärer Klassifikationsnetze verwendet.

Tatsächlich kann die im vorherigen Kapitel eingeführte logistische Regression als neuronales Netz aufgefasst werden, das aus einem einzigen Neuron mit Sigmoidaktivierung besteht.

Trotz ihrer historischen Bedeutung hat die Sigmoidfunktion Nachteile, wenn sie in tiefen verborgenen Schichten eingesetzt wird.

Für sehr große positive oder negative Eingaben wird die Kurve nahezu flach.

Kleine Änderungen der Gewichte führen dann kaum noch zu Änderungen der Ausgabe, wodurch das Lernen zunehmend langsamer wird.

Dieses Problem stellte lange eines der größten Hindernisse für das Training tiefer neuronaler Netze dar.

---

## Der hyperbolische Tangens

Eine eng verwandte Aktivierungsfunktion ist der **hyperbolische Tangens** oder **tanh**,

$$
\phi(z)
=
\tanh(z).
$$

Wie die Sigmoidfunktion ist auch tanh glatt und nichtlinear.

Allerdings liegt seine Ausgabe im Bereich von

$$
-1
\quad\text{bis}\quad
1,
$$

anstatt von

$$
0
\quad\text{bis}\quad
1.
$$

Weil positive und negative Ausgaben um null ausbalanciert sind, ist die Optimierung häufig effizienter.

Über viele Jahre hinweg wurde tanh deshalb bevorzugt als Aktivierungsfunktion in verborgenen Schichten eingesetzt.

Dennoch leidet tanh unter demselben grundlegenden Problem wie die Sigmoidfunktion.

Für sehr große Eingaben sättigt die Kurve.

Das Lernen verlangsamt sich erneut, weil die Gradienten sehr klein werden.

---

## ReLU: eine überraschend einfache Idee

Das moderne Deep Learning basiert heute weitgehend auf einer deutlich einfacheren Aktivierungsfunktion, der **Rectified Linear Unit (ReLU)**.

Ihre mathematische Definition ist bemerkenswert schlicht,

$$
\phi(z)
=
\max(0,z).
$$

Ist die gewichtete Summe negativ, wird die Ausgabe null.

Ist die gewichtete Summe positiv, ist die Ausgabe einfach gleich der Eingabe.

Grafisch besteht die Funktion aus zwei Geraden, die im Ursprung zusammenstoßen.

Trotz ihrer Einfachheit bietet ReLU mehrere entscheidende Vorteile.

Im Gegensatz zu Sigmoid und tanh sättigt sie nicht für große positive Eingaben.

Die Gradienten bleiben daher groß, sodass Information während des Trainings effizient durch viele Schichten propagiert werden kann.

Gerade diese einfache Eigenschaft machte es möglich, wesentlich tiefere neuronale Netze zu trainieren, als zuvor praktikabel gewesen war.

Heute sind ReLU und ihre Varianten die Standardaktivierungsfunktionen für die meisten verborgenen Schichten im Deep Learning.

---

## Unterschiedliche Aktivierungsfunktionen für unterschiedliche Aufgaben

Keine Aktivierungsfunktion ist universell optimal.

Welche Wahl angemessen ist, hängt vielmehr von der Rolle des jeweiligen Neurons im Netzwerk ab.

Für verborgene Schichten hat sich ReLU als dominierende Wahl etabliert, weil sie die effiziente Optimierung sehr tiefer Netze ermöglicht.

Für binäre Klassifikation bleibt die Sigmoidfunktion die bevorzugte Ausgabefunktion, weil ihre Werte direkt als Wahrscheinlichkeiten interpretiert werden können.

Andere Vorhersageaufgaben erfordern andere Aktivierungsfunktionen, auf die wir später in diesem Kapitel bei der Betrachtung der Ausgabeschichten zurückkommen werden.

Der entscheidende Punkt ist, dass Aktivierungsfunktionen nicht willkürlich gewählt werden.

Ihre mathematischen Eigenschaften bestimmen, wie effizient das Netzwerk lernt und wie seine Ausgaben interpretiert werden können.

---

## Eine kleine mathematische Änderung mit enormen Folgen

Auf den ersten Blick wirkt die Aktivierungsfunktion wie nur ein kleiner Zusatz zur gewichteten Summe.

In Wirklichkeit stellt sie die entscheidende Innovation moderner neuronaler Netze dar.

Ohne Aktivierungsfunktionen

- würden tiefe Netze auf einfache lineare Modelle zusammenfallen,
- könnten komplexe biologische Beziehungen nicht dargestellt werden
- und modernes Deep Learning würde nicht existieren.

Die außergewöhnlichen Fähigkeiten neuronaler Netze beruhen daher auf einer überraschend einfachen Idee:

> **Nach jede lineare Berechnung wird eine nichtlineare Transformation eingefügt.**

Dieses Prinzip erlaubt es aufeinanderfolgenden Schichten, immer abstraktere Repräsentationen der Daten aufzubauen, und versetzt neuronale Netze dadurch in die Lage, Vorhersageprobleme zu lösen, die weit außerhalb der Reichweite klassischer linearer Modelle liegen.

Die nächste Frage liegt damit nahe:

> **Was lernen diese verborgenen Schichten eigentlich konkret?**

Um das zu beantworten, müssen wir untersuchen, wie sich aus einfachen Neuronen zunehmend ausgefeilte Repräsentationen biologischer Information zusammensetzen.

---

### Konzeptionelle Zusammenfassung

Aktivierungsfunktionen transformieren die von jedem Neuron berechnete gewichtete Summe in eine nichtlineare Ausgabe. Diese Nichtlinearität ist unverzichtbar, weil das Stapeln rein linearer Transformationen die Ausdrucksstärke eines neuronalen Netzes nicht erhöhen kann. Unterschiedliche Aktivierungsfunktionen besitzen unterschiedliche mathematische Eigenschaften: Sigmoidfunktionen eignen sich natürlich zur Darstellung von Wahrscheinlichkeiten, tanh liefert um null zentrierte Ausgaben, und ReLU ermöglicht das effiziente Training tiefer Netze. Gemeinsam bilden Aktivierungsfunktionen das Fundament, auf dem modernes Deep Learning aufbaut.

---

### Fragen zur Selbstkontrolle

1. Warum ist ein Netzwerk, das nur aus linearen Transformationen besteht, äquivalent zu einem einzigen linearen Modell?
2. Warum sind nichtlineare Aktivierungsfunktionen für Deep Learning unverzichtbar?
3. Welche mathematische Rolle spielt die Aktivierungsfunktion?
4. Warum eignet sich die Sigmoidfunktion besonders für binäre Klassifikation?
5. Welche Nachteile haben Sigmoid und tanh in sehr tiefen Netzwerken?
6. Warum ist ReLU zur Standardaktivierungsfunktion für verborgene Schichten geworden?
7. Warum hängt die Wahl der Aktivierungsfunktion von der Vorhersageaufgabe ab?
8. Erklären Sie, warum Aktivierungsfunktionen zu den Schlüsselinnovationen gehören, die modernes Deep Learning möglich gemacht haben.
