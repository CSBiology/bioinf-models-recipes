---
title: "12.4 Das künstliche Neuron"
sidebar:
  label: "12.4 Das künstliche Neuron"
  order: 4
  group: "Part 3"
  part: "Part 3"
---

# 12.4 Das künstliche Neuron

## Der grundlegende Baustein eines neuronalen Netzes

Obwohl moderne neuronale Netze Millionen oder sogar Milliarden anpassbarer Parameter enthalten können, entstehen ihre bemerkenswerten Fähigkeiten durch die wiederholte Anwendung einer einzigen, äußerst einfachen Recheneinheit: des **künstlichen Neurons**.

Jedes Neuron führt genau dieselbe mathematische Operation aus.

Es empfängt numerische Eingaben, kombiniert sie, wendet eine nichtlineare Transformation an und gibt das Ergebnis an die nächste Schicht weiter.

Diese einfache Berechnung zu verstehen, ist der Schlüssel zum Verständnis des Verhaltens ganzer neuronaler Netze.

Überraschenderweise ist die Mathematik hinter dem künstlichen Neuron bereits vertraut.

Wie wir sehen werden, ist ein Neuron im Wesentlichen ein lineares Regressionsmodell, dem eine nichtlineare Aktivierungsfunktion folgt.

---

## Ein Neuron mit nur einer Eingabe

Beginnen wir mit dem einfachstmöglichen Neuron.

Angenommen, das Neuron erhält nur eine einzige numerische Eingabe \(x\).

Diese Eingabe könnte eine biologische Eigenschaft darstellen, etwa

- die Hydrophobizität eines Proteins,
- sein Molekulargewicht
- oder das Expressionsniveau eines Gens.

Das Neuron multipliziert diese Eingabe mit einem anpassbaren Parameter, dem **Gewicht**

$$
w.
$$

Die Ausgabe des Neurons lautet dann

$$
z = wx.
$$

Ist das Gewicht groß und positiv, erhöht die Eingabe die Ausgabe des Neurons stark.

Liegt das Gewicht nahe bei null, hat die Eingabe nur wenig Einfluss.

Ist das Gewicht negativ, verringert eine größere Eingabe die Ausgabe.

Das Gewicht bestimmt also, wie stark das Neuron auf ein bestimmtes biologisches Merkmal reagiert.

Lernen in einem neuronalen Netz besteht zu einem großen Teil darin, geeignete Werte für diese Gewichte zu finden.

---

## Mehrere Eingaben

Natürlich werden biologische Systeme nur selten von einer einzigen Variablen bestimmt.

Ob ein Protein etwa in einen Chloroplasten transportiert wird, hängt gleichzeitig von vielen Sequenzeigenschaften ab.

Ein künstliches Neuron erhält daher in der Regel viele Eingaben.

Angenommen, das Neuron empfängt drei biologische Merkmale,

- Hydrophobizität \((x_1)\),
- N-terminale Ladung \((x_2)\),
- Aminosäurezusammensetzung \((x_3)\).

Jedem Merkmal ist sein eigenes Gewicht zugeordnet,

$$
w_1,\;w_2,\;w_3.
$$

Das Neuron multipliziert zunächst jede Eingabe mit dem entsprechenden Gewicht,

$$
w_1x_1,\qquad
w_2x_2,\qquad
w_3x_3.
$$

Anschließend werden diese gewichteten Beiträge addiert,

$$
z
=
w_1x_1
+
w_2x_2
+
w_3x_3.
$$

Diese gewichtete Summe repräsentiert die kombinierte Evidenz aller Eingangsmerkmale.

Biologisch wichtige Merkmale erhalten große Gewichte.

Merkmale, die nur wenig zur Vorhersage beitragen, erhalten kleinere Gewichte.

Während des Trainings lernt das Netzwerk diese Gewichte automatisch aus den verfügbaren Daten.

---

## Die Rolle des Bias

Die gewichtete Summe allein reicht in der Regel nicht aus.

Genau wie die lineare Regression einen Achsenabschnitt enthält, besitzt auch ein künstliches Neuron einen zusätzlichen anpassbaren Parameter, den **Bias**.

Unter Einbeziehung des Bias ergibt sich

$$
z
=
w_1x_1
+
w_2x_2
+
\cdots
+
w_nx_n
+
b.
$$

Der Bias erlaubt es dem Neuron, seine Reaktion unabhängig von den Eingabewerten zu verschieben.

Geometrisch verändert er die Lage der Entscheidungsgrenze, ohne ihre Orientierung zu ändern.

Ohne Bias müsste die Entscheidungsgrenze des Neurons stets durch den Ursprung des Merkmalsraums verlaufen.

Diese unnötige Einschränkung würde die Flexibilität des Netzes erheblich verringern.

Der Bias übernimmt also exakt dieselbe Rolle wie der Achsenabschnitt in der linearen Regression.

---

## Eine vertraute Gleichung

An dieser Stelle sollte die Gleichung bemerkenswert vertraut wirken.

Vergleichen wir sie mit dem in Kapitel 9 eingeführten Modell der linearen Regression:

$$
\hat{y}
=
w_1x_1
+
w_2x_2
+
\cdots
+
w_nx_n
+
b.
$$

Abgesehen von der Notation sind beide Gleichungen identisch.

Das Neuron berechnet zunächst eine gewichtete lineare Kombination der Eingangsmerkmale.

Würden wir an dieser Stelle aufhören, würde ein künstliches Neuron nichts anderes als multiple lineare Regression ausführen.

Daraus ergibt sich eine wichtige Einsicht:

> **Die Leistungsfähigkeit neuronaler Netze entsteht nicht aus der gewichteten Summe selbst.**

Die gewichtete Summe ist lediglich ein lineares Modell.

Der entscheidende Schritt folgt erst danach.

---

## Warum lineare Modelle nicht ausreichen

Angenommen, wir konstruieren ein Netzwerk aus mehreren Schichten, in denen jedes Neuron nur diese gewichtete Summe berechnet.

Würde das Hinzufügen weiterer Schichten die Ausdrucksstärke des Modells erhöhen?

Überraschenderweise lautet die Antwort **nein**.

Eine Verkettung linearer Transformationen bleibt linear.

Ganz gleich, wie viele lineare Schichten wir übereinanderstapeln, das resultierende Netzwerk ist mathematisch äquivalent zu einer einzigen linearen Transformation.

Ein tiefes Netzwerk ohne zusätzliche Nichtlinearitäten könnte daher niemals Beziehungen darstellen, die komplexer sind als jene, die bereits durch lineare Regression beschrieben werden.

Damit würde der eigentliche Zweck des Deep Learning verfehlt.

Der entscheidende Durchbruch entsteht durch eine zusätzliche Operation nach der gewichteten Summe.

Anstatt den Wert \(z\) direkt an die nächste Schicht weiterzugeben, wendet jedes Neuron zunächst eine **Aktivierungsfunktion** an.

Diese einfache nichtlineare Transformation verändert die Ausdrucksstärke des Netzwerks grundlegend.

Sie ermöglicht es neuronalen Netzen, hochkomplexe nichtlineare Zusammenhänge zu approximieren, die durch lineare Modelle allein nicht beschrieben werden können.

---

## Das Neuron als zweistufige Berechnung

Wir können jedes künstliche Neuron daher als Folge zweier aufeinanderfolgender Operationen auffassen.

Zunächst berechnet es eine gewichtete lineare Kombination,

$$
z
=
\sum_{i=1}^{n}
w_i x_i
+
b.
$$

Danach wird eine nichtlineare Aktivierungsfunktion angewendet,

$$
a
=
\phi(z).
$$

Der Wert

$$
a
$$

wird anschließend an die nächste Schicht des Netzwerks weitergegeben.

Jedes Neuron besteht also aus zwei konzeptionell unterschiedlichen Komponenten:

1. einem **linearen Modell**, das die verfügbare Information kombiniert,
2. einer **nichtlinearen Aktivierungsfunktion**, die es dem Netzwerk erlaubt, komplexe Zusammenhänge zu lernen.

Bemerkenswerterweise wird jedes moderne tiefe neuronale Netz, von Systemen zur Bilderkennung bis zu AlphaFold, durch die millionenfache Wiederholung genau dieser einfachen Berechnung aufgebaut.

---

## Von Neuronen zu intelligenten Systemen

Auf den ersten Blick mag es überraschend erscheinen, dass eine so einfache Recheneinheit letztlich Gesichter erkennen, Sprachen übersetzen oder Proteinstrukturen vorhersagen kann.

Das Geheimnis liegt nicht in der Komplexität einzelner Neuronen.

Jedes Neuron führt nur eine schlichte mathematische Berechnung aus.

Die außergewöhnlichen Fähigkeiten neuronaler Netze entstehen vielmehr dadurch, dass enorme Zahlen dieser einfachen Einheiten zu tiefen hierarchischen Architekturen verbunden werden.

Das Neuron zu verstehen, macht daher ein wichtiges Prinzip moderner künstlicher Intelligenz sichtbar.

Komplexes Verhalten erfordert nicht zwingend komplexe Einzelkomponenten.

Vielmehr kann Komplexität aus dem Zusammenspiel vieler einfacher Rechenelemente hervorgehen.

Die verbleibende Frage lautet daher nicht mehr, wie Neuronen Information kombinieren, denn das ist nun verstanden.

Vielmehr müssen wir fragen:

> **Wie sollte die Aktivierungsfunktion die gewichtete Summe transformieren?**

Wie wir im nächsten Abschnitt sehen werden, ist genau diese scheinbar kleine mathematische Modifikation das, was Deep Learning überhaupt erst möglich macht.

---

### Konzeptionelle Zusammenfassung

Ein künstliches Neuron führt zwei einfache Operationen aus. Zuerst berechnet es eine gewichtete Summe seiner Eingaben, die mathematisch einem multiplen linearen Regressionsmodell mit Bias-Term entspricht. Anschließend wendet es auf diese gewichtete Summe eine nichtlineare Aktivierungsfunktion an, bevor das Ergebnis an die nächste Schicht weitergegeben wird. Die gewichtete Summe allein ist lediglich ein lineares Modell; erst die Aktivierungsfunktion liefert die Nichtlinearität, die tiefen neuronalen Netzen die Darstellung hochkomplexer biologischer Zusammenhänge ermöglicht.

---

### Fragen zur Selbstkontrolle

1. Welche zwei Rechenschritte führt jedes künstliche Neuron aus?
2. Welche Rolle spielen die Gewichte in einem künstlichen Neuron?
3. Warum ist der Bias-Term wichtig?
4. In welchem Sinn ist die gewichtete Summe äquivalent zur multiplen linearen Regression?
5. Warum bliebe ein neuronales Netz, das nur aus gewichteten Summen besteht, ein lineares Modell?
6. Warum ist die Aktivierungsfunktion für Deep Learning unverzichtbar?
7. Warum kann hochkomplexes Verhalten aus Netzwerken entstehen, die aus sehr einfachen Neuronen bestehen?
