---
title: "9.3 Lineare Regression: Das einfachste Vorhersagemodell"
sidebar:
  label: "9.3 Lineare Regression: Das einfachste Vorhersagemodell"
  order: 3
  group: "Part 3"
  part: "Part 3"
---

# 9.3 Lineare Regression: Das einfachste Vorhersagemodell

## Von biologischen Hypothesen zu mathematischen Modellen

Sobald biologische Beobachtungen als numerische Merkmale dargestellt sind, können wir mit dem Aufbau prädiktiver Modelle beginnen.

Im Kern versucht überwachtes Lernen, eine täuschend einfache Frage zu beantworten:

> **Können wir eine oder mehrere messbare biologische Eigenschaften nutzen, um eine andere biologische Eigenschaft vorherzusagen?**

In unserem Beispiel fragen wir, ob sich die Hydrophobizität eines Proteins verwenden lässt, um seine thermische Stabilität vorherzusagen.

Wenn wir die Hydrophobizität vieler Proteine messen und diese Werte gegen ihre experimentell bestimmten Schmelztemperaturen auftragen, erhalten wir in der Regel keine völlig zufällige Punktwolke. Stattdessen zeigt sich häufig ein allgemeiner Trend: Proteine mit größerer Hydrophobizität sind tendenziell stabiler.

Diese Beziehung ist offensichtlich nicht perfekt, aber sie deutet darauf hin, dass Hydrophobizität nützliche prädiktive Information enthält.

Der nächste Schritt besteht darin, diese biologische Beobachtung in ein mathematisches Modell zu übersetzen.

---

## Das einfachste nützliche Modell wählen

Viele mathematische Funktionen könnten die Beziehung zwischen Hydrophobizität und Proteinstabilität prinzipiell beschreiben.

Wir könnten etwa wählen:

- eine lineare Funktion,
- eine quadratische Funktion,
- einen exponentiellen Zusammenhang
- oder ein sehr flexibles nichtlineares Modell.

Welche Wahl ist sinnvoll?

Ein verbreitetes Missverständnis lautet, dass kompliziertere Modelle automatisch besser seien.

In der Wissenschaft folgen wir jedoch meist der entgegengesetzten Idee.

Wir beginnen mit dem **einfachsten Modell, das die beobachtete Beziehung überhaupt beschreiben kann**.

Dieses Prinzip steht in engem Zusammenhang mit **Occam's Razor**, also der Forderung, unnötige Komplexität zu vermeiden.

Wenn die Daten auf einen ungefähr linearen Zusammenhang hindeuten, ist eine Gerade ein naheliegender Ausgangspunkt.

Ihre Einfachheit hat zwei wichtige Vorteile.

Erstens lässt sie sich biologisch leicht interpretieren.

Zweitens schafft sie eine Ausgangsbasis, mit der später komplexere Modelle verglichen werden können.

Lineare Regression ist daher nicht deshalb interessant, weil biologische Systeme linear wären.

Sie ist interessant, weil sie die grundlegenden Konzepte des überwachten Lernens in ihrer einfachsten Form einführt.

---

## Ein lineares Modell für Proteinstabilität

Eine Gerade lässt sich mathematisch durch

$$
\hat{y}=mx+c.
$$

beschreiben.

Diese Gleichung enthält vier Größen, die jeweils eine bestimmte Bedeutung haben.

Die Variable

$$
x
$$

repräsentiert das beobachtete biologische Merkmal.

In unserem Beispiel ist

$$
x
$$

die Hydrophobizität eines Proteins.

Die Größe

$$
\hat{y}
$$

bezeichnet die vorhergesagte Proteinstabilität.

Das Dach auf \(\hat{y}\) ist wichtig.

Es erinnert uns daran, dass dieser Wert nicht experimentell gemessen, sondern vom Modell geschätzt wird.

Die beiden verbleibenden Größen,

$$
m
\quad\text{und}\quad
c,
$$

sind die **Modellparameter**.

Die Steigung \(m\) bestimmt, wie stark sich die Proteinstabilität verändert, wenn die Hydrophobizität zunimmt.

Der Achsenabschnitt \(c\) legt fest, welche Stabilität das Modell bei einem Merkmalswert von null vorhersagt.

Obwohl dieser Achsenabschnitt mathematisch notwendig ist, besitzt er biologisch oft nur begrenzte Bedeutung. Für viele biologische Variablen tritt ein Merkmalswert von null in der Realität gar nicht auf. Der Parameter sorgt daher in erster Linie dafür, dass die Regressionsgerade frei im Datenraum positioniert werden kann.

Gerade das illustriert einen wichtigen Punkt.

Nicht jeder Parameter eines mathematischen Modells entspricht unmittelbar einem biologischen Mechanismus.

Einige Parameter existieren vor allem, um die mathematische Beschreibung zu verbessern.

---

## Vorhersage versus Beobachtung

Sobald das Regressionsmodell festgelegt ist, kann es Vorhersagen erzeugen.

Für jedes Protein im Datensatz wird die gemessene Hydrophobizität in die Regressionsgleichung eingesetzt, und daraus ergibt sich eine vorhergesagte Stabilität

$$
\hat{y}.
$$

Diese Vorhersagen können dann mit den experimentell gemessenen Werten

$$
y
$$

verglichen werden.

Wäre das Modell perfekt, dann würde jede Vorhersage exakt mit der zugehörigen Beobachtung übereinstimmen.

Alle gemessenen Proteine lägen genau auf der Regressionsgeraden.

Reale biologische Systeme sind jedoch nie so einfach.

Stattdessen bilden die beobachteten Daten meist eine Punktwolke um die Regressionsgerade herum.

Manche Proteine sind etwas stabiler als vorhergesagt.

Andere etwas weniger stabil.

Diese Unterschiede zwischen Vorhersage und Beobachtung sind nicht bloß experimentelle Unvollkommenheiten.

Sie spiegeln vielmehr die Komplexität biologischer Systeme selbst wider.

---

## Warum biologische Daten verrauscht sind

Die Streuung um die Regressionsgerade wird häufig als **Rauschen** bezeichnet. Dieser Begriff sollte jedoch nicht missverstanden werden.

Rauschen bedeutet nicht, dass die Beobachtungen bedeutungslos wären.

Vielmehr weist es darauf hin, dass biologische Systeme gleichzeitig von vielen Faktoren beeinflusst werden.

Zu dieser Variabilität tragen mehrere Quellen bei.

**Biologische Variation** entsteht, weil lebende Systeme inhärent komplex sind. Selbst Proteine mit ähnlicher Hydrophobizität können sich in ihrer Sequenz, ihren Faltungswegen, ihrer strukturellen Flexibilität oder ihren Interaktionspartnern unterscheiden.

**Experimentelle Variation** ergibt sich aus unvermeidlicher Messunsicherheit. Keine experimentelle Methode liefert vollkommen reproduzierbare Beobachtungen.

Hinzu kommen schließlich **Modellgrenzen**.

Unser Regressionsmodell nimmt an, dass Proteinstabilität nur von der Hydrophobizität abhängt.

In Wirklichkeit wird Stabilität aber auch von elektrostatischen Wechselwirkungen, Wasserstoffbrücken, Disulfidbrücken, Molekülpackung, Ligandenbindung und zahlreichen weiteren Eigenschaften beeinflusst.

Die Regressionsgerade sollte deshalb nicht als exakte Beschreibung der Proteinfaltung verstanden werden.

Sie repräsentiert vielmehr unsere beste Annäherung auf Grundlage der biologischen Information, die wir in das Modell aufgenommen haben.

---

## Modelle sind nützlich, nicht wahr

Diese Einsicht führt zu einer der wichtigsten philosophischen Ideen der computergestützten Biologie.

Ein mathematisches Modell sollte nicht danach beurteilt werden, ob es "wahr" ist.

Entscheidend ist vielmehr, ob es nützlich ist.

Kein Regressionsmodell kann die molekularen Mechanismen der Proteinfaltung vollständig beschreiben.

Selbst die komplexesten Deep-Learning-Modelle bleiben Annäherungen an biologische Realität.

Ihr Wert liegt nicht darin, die Natur perfekt zu reproduzieren, sondern darin, genügend von der zugrunde liegenden Biologie zu erfassen, um nützliche Vorhersagen zu ermöglichen.

Modellentwicklung ist daher immer ein Ausgleich zwischen zwei konkurrierenden Zielen.

Einerseits soll das Modell so einfach sein, dass es verstanden und interpretiert werden kann.

Andererseits muss es flexibel genug sein, um die biologisch relevanten Zusammenhänge zu erfassen.

Ein sinnvolles Gleichgewicht zwischen diesen Polen zu finden, ist eines der zentralen Themen des maschinellen Lernens und wird in den folgenden Kapiteln immer wichtiger werden.

---

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- zu erklären, warum lineare Regression ein sinnvoller Ausgangspunkt für das überwachte Lernen ist,
- die Parameter eines linearen Regressionsmodells zu interpretieren,
- zwischen vorhergesagten und beobachteten Werten zu unterscheiden,
- zu erklären, warum biologische Daten nur selten exakt auf einer Regressionsgeraden liegen,
- zu verstehen, warum mathematische Modelle nach ihrer Nützlichkeit und nicht nach vollständigem Realismus bewertet werden.

### Konzeptionelle Zusammenfassung

Lineare Regression ist das einfachste Vorhersagemodell des überwachten Lernens. Sie setzt einen näherungsweise linearen Zusammenhang zwischen einem biologischen Merkmal und der vorherzusagenden Größe voraus. Das Modell erzeugt Vorhersagen, die mit experimentellen Beobachtungen verglichen werden können. Unterschiede zwischen Vorhersagen und Beobachtungen entstehen durch biologische Variabilität, experimentelle Unsicherheit und die Grenzen des Modells selbst. Wissenschaftliche Modelle streben daher nicht nach perfektem Realismus, sondern danach, die wesentlichen biologischen Beziehungen auf nützliche und interpretierbare Weise zu erfassen.

### Fragen zur Selbstkontrolle

1. Warum ist lineare Regression ein guter Ausgangspunkt, um überwachtes Lernen zu verstehen?
2. Was repräsentieren die Parameter \(m\) und \(c\) in einem linearen Regressionsmodell?
3. Worin besteht der Unterschied zwischen \(y\) und \(\hat{y}\)?
4. Warum liegen biologische Beobachtungen nur selten exakt auf der Regressionsgeraden?
5. Warum betrachtet man wissenschaftliche Modelle als nützliche Annäherungen und nicht als exakte Beschreibungen der Realität?
