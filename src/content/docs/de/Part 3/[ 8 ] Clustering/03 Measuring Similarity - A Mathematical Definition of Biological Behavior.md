---
title: "8.3 Ähnlichkeit messen: Eine mathematische Definition biologischen Verhaltens"
sidebar:
  label: "8.3 Ähnlichkeit messen: Eine mathematische Definition biologischen Verhaltens"
  order: 3
  group: "Part 3"
  part: "Part 3"
---

## 8.3 Ähnlichkeit messen: Eine mathematische Definition biologischen Verhaltens

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- zu erläutern, warum Ähnlichkeit mathematisch definiert werden muss.
- zwischen Ähnlichkeitsmaßen und Distanzmaßen zu unterscheiden.
- die euklidische und die Manhattan-Distanz zu berechnen und zu interpretieren.
- die mathematischen Eigenschaften einer Metrik zu beschreiben.
- zu erklären, warum unterschiedliche Ähnlichkeitsmaße unterschiedliche biologische Beziehungen hervorheben.

Sobald biologische Objekte als Merkmalsvektoren dargestellt sind, lässt sich die zentrale Frage des Clusterings überhaupt erst präzise formulieren:

> **Wie ähnlich sind sich zwei biologische Objekte?**

So intuitiv diese Frage zunächst wirkt, so wenig besitzt sie eine eindeutige Antwort. Zwei Gene können als ähnlich gelten, weil ihre Expressionswerte nahezu identisch sind, weil sie in ähnlicher Weise auf Umweltveränderungen reagieren oder weil sie trotz unterschiedlicher absoluter Expressionsniveaus dieselbe zeitliche Dynamik zeigen.

Bevor ein Clustering-Algorithmus eingesetzt werden kann, muss Ähnlichkeit daher in eine mathematische Größe übersetzt werden.

Dieser Schritt ist weit mehr als eine technische Formalität. Er stellt eine weitere grundlegende Modellierungsentscheidung dar. Die mathematische Definition von Ähnlichkeit bestimmt, welche biologischen Beziehungen für den Algorithmus sichtbar werden und welche unsichtbar bleiben.

### Distanz und Ähnlichkeit

Die Beziehung zwischen biologischen Objekten lässt sich auf zwei einander ergänzende Arten quantifizieren.

Der erste Zugang misst **Ähnlichkeit** direkt. Große Werte bedeuten dann, dass zwei Objekte einander stark ähneln, kleine Werte sprechen für geringe Ähnlichkeit.

Der zweite Zugang misst **Distanz**. Hier kehrt sich die Interpretation um: Zwei Objekte gelten als ähnlich, wenn der Abstand zwischen ihnen klein ist.

Obwohl beide Sichtweisen denselben Grundgedanken beschreiben, werden Clustering-Verfahren traditionell meist in Form von Distanzen formuliert. In diesem Kapitel konzentrieren wir uns deshalb auf Distanzmaße.

Die Idee dahinter ist konzeptionell einfach.

Wenn zwei Gene nahezu identische Expressionsprofile besitzen, dann sollten ihre Merkmalsvektoren im Merkmalsraum nahe beieinander liegen. Gene mit deutlich unterschiedlichem biologischem Verhalten sollten dagegen weiter voneinander entfernt sein.

Die eigentliche Schwierigkeit liegt darin, präzise festzulegen, was "nahe beieinander" überhaupt bedeutet.

### Euklidische Distanz

Das bekannteste Distanzmaß ist die **euklidische Distanz**.

Sie entspricht dem gewöhnlichen geradlinigen Abstand zwischen zwei Punkten in der Geometrie. Wenn jedes Gen als Punkt im Merkmalsraum dargestellt wird, misst die euklidische Distanz also einfach die kürzeste Verbindung zwischen diesen Punkten.

Für zwei Merkmalsvektoren

$$
\mathbf{x}=(x_1,x_2,\ldots,x_n)
$$

und

$$
\mathbf{y}=(y_1,y_2,\ldots,y_n),
$$

ist die euklidische Distanz definiert als

$$
d(\mathbf{x},\mathbf{y})
=
\sqrt{\sum_{i=1}^{n}(x_i-y_i)^2}.
$$

Auch wenn diese Formel auf den ersten Blick technisch wirkt, ist ihre Bedeutung gut nachvollziehbar.

Zunächst wird für jede experimentelle Bedingung die Differenz zwischen den beiden Expressionswerten berechnet. Diese Differenzen werden quadriert, damit sich positive und negative Abweichungen nicht gegenseitig aufheben und damit große Unterschiede stärker ins Gewicht fallen. Anschließend werden alle quadrierten Differenzen aufsummiert, und durch die Quadratwurzel wird das Ergebnis wieder auf die ursprüngliche Skala der Messwerte zurückgeführt.

Die euklidische Distanz fasst damit die **gesamte numerische Abweichung** zwischen zwei Expressionsprofilen zusammen.

Gene mit sehr ähnlichen Expressionswerten über alle Bedingungen hinweg haben eine kleine euklidische Distanz; Gene mit deutlich verschiedenen Profilen liegen weiter auseinander.

### Manhattan-Distanz

Ein alternatives und häufig verwendetes Maß ist die **Manhattan-Distanz**.

Anstatt den geradlinigen Abstand zu messen, summiert sie die absoluten Unterschiede entlang jeder einzelnen Dimension:

$$
d(\mathbf{x},\mathbf{y})
=
\sum_{i=1}^{n}|x_i-y_i|.
$$

Der Name verweist auf das rechtwinklige Straßennetz von Manhattan. Wer sich dort zu Fuß bewegt, kann Gebäude nicht diagonal durchqueren, sondern muss den Straßen folgen und addiert so die zurückgelegten Teilstrecken entlang der einzelnen Häuserblöcke.

Auf biologische Daten übertragen misst die Manhattan-Distanz die gesamte Differenz zwischen zwei Merkmalsvektoren, ohne besonders große Abweichungen so stark zu betonen wie die euklidische Distanz.

Deshalb reagiert sie häufig robuster auf einzelne Ausreißer oder ungewöhnlich große Messfehler.

### Die Wahl eines geeigneten Distanzmaßes

Weder die euklidische noch die Manhattan-Distanz ist grundsätzlich überlegen.

Beide heben unterschiedliche Aspekte biologischer Variation hervor.

Die euklidische Distanz bestraft große Unterschiede besonders stark, weil diese vor dem Aufsummieren quadriert werden. Sie reagiert deshalb empfindlich auf Gene, die sich in einer oder wenigen Bedingungen sehr stark unterscheiden.

Die Manhattan-Distanz behandelt alle Abweichungen linear. Ein einzelner großer Unterschied trägt daher nur proportional und nicht quadratisch zum Gesamtabstand bei. Dadurch ist dieses Maß im Allgemeinen weniger empfindlich gegenüber extremen Beobachtungen.

Welche Distanz sinnvoll ist, hängt daher von der biologischen Fragestellung ab.

Wenn starke Expressionsänderungen als Hinweis auf biologisch besonders wichtige Ereignisse verstanden werden, kann die euklidische Distanz geeignet sein. Wenn dagegen das Gesamtverhalten verglichen werden soll, ohne einzelne Ausreißer überzubetonen, bietet die Manhattan-Distanz häufig die robustere Alternative.

Auch hier begegnet uns ein zentrales Prinzip der computergestützten Biologie erneut:

> Das mathematische Modell entscheidet darüber, welche biologischen Muster sichtbar werden.

### Was macht ein gültiges Distanzmaß aus?

Es gibt viele vorgeschlagene Distanzfunktionen, doch nicht jede numerische Funktion ist tatsächlich ein sinnvolles Distanzmaß.

Damit sich Distanzen konsistent verhalten, sollte ein Distanzmaß vier grundlegende mathematische Eigenschaften erfüllen.

**Nichtnegativität**

Distanzen können niemals negativ sein.

$$
d(x,y)\ge0
$$

**Identität**

Der Abstand eines Objekts zu sich selbst muss immer null sein.

$$
d(x,x)=0
$$

**Symmetrie**

Die Reihenfolge des Vergleichs darf keinen Unterschied machen.

$$
d(x,y)=d(y,x)
$$

**Dreiecksungleichung**

Der direkte Abstand zwischen zwei Objekten darf nie größer sein als ein Weg, der über ein drittes Objekt führt.

$$
d(x,z)\le d(x,y)+d(y,z)
$$

Diese vier Eigenschaften definieren zusammen das, was Mathematikerinnen und Mathematiker eine **Metrik** nennen.

Metriken liefern einen konsistenten geometrischen Rahmen, in dem sich Distanzen genau so verhalten, wie wir es intuitiv erwarten. Viele Clustering-Verfahren setzen diese Eigenschaften voraus, um stabile und interpretierbare Ergebnisse zu liefern.

### Ähnlichkeit ist eine Modellierungsentscheidung

An dieser Stelle könnte der Eindruck entstehen, die Definition von Ähnlichkeit sei lediglich eine Frage der passenden Formel.

Tatsächlich reicht die Entscheidung wesentlich tiefer.

Jedes Distanzmaß kodiert eine bestimmte Annahme darüber, was im biologischen Kontext als ähnlich gelten soll.

Sollen Gene zusammengefasst werden, wenn ihre Expressionsniveaus nahezu identisch sind?

Oder sollen sie bereits dann als ähnlich gelten, wenn sie dasselbe Reaktionsmuster zeigen, unabhängig von ihren absoluten Expressionswerten?

Beide Sichtweisen sind biologisch sinnvoll, verlangen aber unterschiedliche mathematische Definitionen.

Daraus folgt eine der zentralen Einsichten dieses Buches:

> **Ähnlichkeit wird nicht einfach gemessen, sondern modelliert.**

Die mathematische Definition von Ähnlichkeit formuliert damit eine wissenschaftliche Hypothese darüber, welche Aspekte biologischen Verhaltens für die betrachtete Fragestellung am relevantesten sind.

Erst nachdem diese Modellierungsentscheidung getroffen wurde, können Clustering-Algorithmen beginnen, Gruppen verwandter biologischer Objekte zu identifizieren.

### Konzeptionelle Zusammenfassung

- Clustering setzt eine mathematische Definition von Ähnlichkeit voraus.
- Die meisten Clustering-Verfahren quantifizieren Ähnlichkeit mithilfe von Distanzmaßen.
- Die euklidische Distanz misst geradlinige Unterschiede im Merkmalsraum.
- Die Manhattan-Distanz summiert absolute Unterschiede über alle Merkmale.
- Unterschiedliche Distanzmaße betonen unterschiedliche biologische Eigenschaften.
- Eine gültige Distanzmetrik erfüllt Nichtnegativität, Identität, Symmetrie und die Dreiecksungleichung.
- Die Wahl eines Distanzmaßes ist eine Modellierungsentscheidung und prägt die biologische Interpretation von Clustering-Ergebnissen.

### Fragen zur Selbstkontrolle

1. Warum muss Ähnlichkeit mathematisch definiert werden, bevor Clustering möglich ist?
2. Worin besteht der konzeptionelle Unterschied zwischen einem Ähnlichkeitsmaß und einem Distanzmaß?
3. Wie unterscheiden sich euklidische und Manhattan-Distanz im Umgang mit großen Abweichungen?
4. Welche mathematischen Eigenschaften definieren eine gültige Distanzmetrik?
5. Warum kann die Wahl eines Distanzmaßes die biologischen Schlussfolgerungen einer Clustering-Analyse beeinflussen?
