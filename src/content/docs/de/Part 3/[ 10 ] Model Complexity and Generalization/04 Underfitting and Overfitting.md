---
title: "10.4 Underfitting und Overfitting"
sidebar:
  label: "10.4 Underfitting und Overfitting"
  order: 4
  group: "Part 3"
  part: "Part 3"
---

# 10.4 Underfitting und Overfitting

## Wenn einfache Modelle scheitern

Wir haben gesehen, dass eine größere Modellflexibilität es erlaubt, immer komplexere biologische Zusammenhänge darzustellen. Doch woran erkennen wir, ob ein Modell zu einfach oder zu komplex ist?

Um diese Frage zu beantworten, stellen wir uns vor, wir passen mehrere verschiedene Modelle an denselben Datensatz an.

Das erste Modell ist eine einfache Gerade.

Obwohl sie den allgemeinen Trend erfasst, verfehlt sie viele Beobachtungen systematisch. Die Vorhersagefehler bleiben groß, weil das Modell den tatsächlichen biologischen Zusammenhang nicht angemessen darstellen kann.

Diese Situation bezeichnet man als **Underfitting**.

Ein unterangepasstes Modell ist schlicht nicht flexibel genug, um den zugrunde liegenden Prozess zu beschreiben.

In unserem Beispiel zur Proteinstabilität kann ein lineares Modell wichtige nichtlineare Effekte wie kooperative Wechselwirkungen zwischen Aminosäuren oder Veränderungen in der Proteindynamik ignorieren. Folglich schneidet das Modell nicht nur auf neuen Daten schlecht ab, sondern bereits auf den Trainingsdaten selbst.

Underfitting ist daher ein Hinweis darauf, dass das Modell **zu einfach** ist.

---

## Wenn flexible Modelle zu flexibel werden

Betrachten wir nun das entgegengesetzte Extrem.

Angenommen, wir erhöhen die Flexibilität des Modells weiter, indem wir immer mehr Basisfunktionen hinzufügen.

Zunächst verbessert dies die Anpassung erheblich. Das Modell erfasst nun auch feinere biologische Trends, die zuvor übersehen wurden.

Irgendwann jedoch beginnt das Modell, jeder einzelnen Beobachtung zu folgen.

Anstatt den allgemeinen Zusammenhang zwischen Hydrophobizität und Stabilität zu beschreiben, biegt es sich um jeden experimentellen Datenpunkt herum.

Der Vorhersagefehler auf den Trainingsdaten wird nahezu null.

Auf den ersten Blick wirkt das ideal.

Schließlich scheint das Modell jetzt jede Beobachtung perfekt zu erklären.

Ein großer Teil dieser scheinbaren Verbesserung entsteht jedoch dadurch, dass zufällige Schwankungen und nicht echte biologische Mechanismen angepasst werden.

Das Modell ist so flexibel geworden, dass es sich an experimentelles Rauschen und natürliche biologische Variabilität anpasst.

Dieses Phänomen bezeichnet man als **Overfitting**.

Ein überangepasstes Modell hat die Trainingsdaten außergewöhnlich gut gelernt, die zugrunde liegende Biologie jedoch nur unzureichend.

---

## Trainingsleistung versus Vorhersageleistung

Der Unterschied zwischen Underfitting und Overfitting wird besonders klar, wenn wir zwei verschiedene Fehlergrößen vergleichen.

Der **Trainingsfehler** misst, wie genau das Modell diejenigen Beobachtungen vorhersagt, die zum Aufbau des Modells verwendet wurden.

Der **Testfehler** misst hingegen, wie genau dasselbe Modell völlig neue Beobachtungen vorhersagt, die während des Trainings nicht verfügbar waren.

Mit zunehmender Modellkomplexität verhalten sich diese beiden Größen sehr unterschiedlich.

Der Trainingsfehler nimmt fast immer ab.

Ein flexibleres Modell hat mehr Freiheitsgrade, um sich an die vorhandenen Beobachtungen anzupassen, und fitten die Trainingsdaten daher zunehmend besser.

Der Testfehler verhält sich anders.

Zunächst verbessert eine größere Flexibilität die Vorhersagegenauigkeit, weil das Modell mehr vom tatsächlichen biologischen Zusammenhang erfasst.

Ab einem bestimmten Punkt führt zusätzliche Flexibilität jedoch dazu, dass das Modell zufälliges Rauschen statt allgemeiner biologischer Prinzipien lernt.

Der Vorhersagefehler auf neuen Beobachtungen beginnt dann wieder anzusteigen.

Damit entsteht eine der charakteristischsten Kurven des maschinellen Lernens.

Mit wachsender Modellkomplexität

- sinkt der Trainingsfehler kontinuierlich,
- während der Testfehler zunächst fällt, ein Minimum erreicht und anschließend wieder ansteigt.

Das Minimum der Testfehlerkurve entspricht genau dem **Sweet Spot**, den wir im vorherigen Abschnitt eingeführt haben.

Dieses Modell generalisiert am besten auf ungesehene biologische Daten.

---

## Underfitting und Overfitting in der Biologie

Underfitting und Overfitting treten in der computergestützten Biologie an vielen Stellen auf.

Angenommen, wir möchten vorhersagen, ob ein Protein thermostabil ist.

Ein unterangepasstes Modell könnte nur ein einziges Merkmal wie das Molekulargewicht verwenden.

Obwohl sich dieses Merkmal leicht messen lässt, enthält es wenig Information über Proteinstabilität. Das resultierende Modell schneidet schlecht ab, weil es den größten Teil der relevanten Biologie ignoriert.

Ein überangepasstes Modell liegt am anderen Ende des Spektrums.

Man stelle sich vor, wir konstruieren ein hochflexibles Modell mit Tausenden sequenzabgeleiteten Merkmalen und trainieren es auf nur wenigen Hundert Proteinen.

Ein solches Modell kann in den Trainingsdaten viele scheinbare Zusammenhänge entdecken.

Ein großer Teil davon sind jedoch bloße Zufälle, die aus der kleinen Datensatzgröße resultieren.

Wird das Modell auf neu gemessene Proteine angewendet, bricht die Vorhersagegenauigkeit häufig deutlich ein.

Keines dieser beiden Modelle ist wissenschaftlich nützlich.

Das erste ignoriert wichtige biologische Mechanismen.

Das zweite verwechselt zufällige Variation mit biologischem Wissen.

Das nützlichste Vorhersagemodell liegt zwischen diesen beiden Extremen.

---

## Generalisierung ist das eigentliche Ziel

Die Begriffe Underfitting und Overfitting verändern grundlegend, wie wir über maschinelles Lernen nachdenken.

Das Ziel besteht nicht darin, die Leistung auf den Trainingsdaten zu maximieren.

Ebenso wenig geht es darum, das mathematisch raffinierteste Modell zu konstruieren.

Entscheidend ist vielmehr, ein Modell zu finden, das den zugrunde liegenden biologischen Prozess gut genug erfasst, um für zukünftige Experimente verlässliche Vorhersagen zu liefern.

Diese Fähigkeit, Wissen von einem Datensatz auf einen anderen zu übertragen, ist das definierende Merkmal erfolgreichen maschinellen Lernens.

Generalisierung und nicht Auswendiglernen ist daher das eigentliche Maß für Modellqualität.

Die praktische Frage bleibt jedoch bestehen.

Wie können wir abschätzen, ob ein Modell gut generalisiert, wenn zukünftige Beobachtungen noch gar nicht vorliegen?

Die Antwort besteht darin, zukünftige Vorhersagen zu simulieren, indem ein Teil der verfügbaren Daten während des Trainings zurückgehalten wird.

Diese Idee bildet die Grundlage der **Kreuzvalidierung**, die wir später in diesem Kapitel einführen werden.

---

## Bias und Varianz: ein anderer Blick auf dasselbe Problem

Underfitting und Overfitting lassen sich auch aus einer anderen Perspektive betrachten.

Ein zu einfaches Modell macht systematische Vorhersagefehler, weil es den zugrunde liegenden biologischen Zusammenhang nicht angemessen darstellen kann.

Ein zu komplexes Modell verhält sich anders.

Seine Vorhersagen werden stark von den konkret beobachteten Trainingsdaten beeinflusst.

Diese beiden Quellen von Vorhersagefehlern bezeichnet man als **Bias** und **Varianz**.

Zu verstehen, wie diese beiden Größen zusammenwirken, liefert eines der einflussreichsten konzeptionellen Modelle des maschinellen Lernens.

Im nächsten Abschnitt werden wir diesen Zusammenhang genauer untersuchen und sehen, warum jedes Vorhersagemodell diese beiden konkurrierenden Fehlerquellen gegeneinander ausbalancieren muss.

---

### Zentrale Konzepte

- **Underfitting** tritt auf, wenn ein Modell zu einfach ist, um den zugrunde liegenden biologischen Zusammenhang zu erfassen.
- **Overfitting** tritt auf, wenn ein Modell so flexibel wird, dass es zufällige Schwankungen in den Trainingsdaten mitlernt.
- Der Trainingsfehler sinkt im Allgemeinen mit wachsender Modellkomplexität.
- Der Testfehler folgt typischerweise einer U-förmigen Kurve mit einem Minimum bei mittlerer Modellkomplexität.
- Das beste Vorhersagemodell ist dasjenige, das den Fehler auf ungesehenen Daten minimiert und nicht den Fehler auf den Trainingsdaten.

---

### Zusammenfassung

Modellkomplexität wirkt sich gegensätzlich auf Trainings- und Vorhersageleistung aus. Einfache Modelle leiden häufig unter Underfitting, weil sie wichtige biologische Zusammenhänge nicht erfassen. Hochflexible Modelle leiden dagegen unter Overfitting, weil sie zufälliges Rauschen in den Trainingsdaten mitlernen. Erfolgreiches maschinelles Lernen sucht daher den Ausgleich zwischen diesen Extremen. Das optimale Modell ist nicht das mit dem kleinsten Trainingsfehler, sondern dasjenige, das auf neuen biologischen Beobachtungen am besten generalisiert.

---

### Fragen zur Selbstkontrolle

1. Was ist Underfitting, und warum tritt es auf?
2. Was ist Overfitting, und warum kann es die Vorhersagegenauigkeit verschlechtern?
3. Warum sinkt der Trainingsfehler fast immer, wenn die Modellkomplexität zunimmt?
4. Warum beginnt der Testfehler ab einem bestimmten Punkt wieder anzusteigen?
5. Warum ist der Testfehler ein besseres Maß für Modellqualität als der Trainingsfehler?
6. Geben Sie ein Beispiel für Underfitting und Overfitting in einem biologischen Vorhersageproblem.
7. Warum gilt Generalisierung als das primäre Ziel des überwachten Lernens?
