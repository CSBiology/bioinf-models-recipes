---
title: "12.2 Lernen durch Optimierung"
sidebar:
  label: "12.2 Lernen durch Optimierung"
  order: 2
  group: "Part 3"
  part: "Part 3"
---

# 12.2 Lernen durch Optimierung

## Neuronale Netze folgen demselben Lernzyklus

Auf den ersten Blick scheinen künstliche neuronale Netze sich grundlegend von den in den vorangegangenen Kapiteln eingeführten Lernalgorithmen zu unterscheiden. Sie bestehen aus vielen Schichten, Tausenden oder sogar Millionen anpassbarer Parameter und erfordern für das Training oft enorme Rechenressourcen.

Trotz dieser scheinbaren Komplexität ist das zugrunde liegende Lernprinzip exakt dasselbe.

Jeder Algorithmus des überwachten Lernens, ob lineare Regression, logistische Regression, Entscheidungsbaum oder neuronales Netz, durchläuft denselben Grundzyklus:

1. Ein Modell erzeugt eine Vorhersage.
2. Diese Vorhersage wird mit experimentell beobachteten Daten verglichen.
3. Der Vorhersagefehler wird mithilfe einer Verlustfunktion quantifiziert.
4. Die Modellparameter werden angepasst, um diesen Fehler zu verringern.
5. Das Verfahren wird wiederholt, bis keine weitere Verbesserung mehr erreicht werden kann.

Künstliche neuronale Netze führen also keine neue Lernstrategie ein.

Sie erhöhen vielmehr die Komplexität des Modells, das optimiert wird, ganz erheblich.

---

## Eine kurze Rückschau: Lernen mit dem Gradientenverfahren

Um zu verstehen, wie neuronale Netze trainiert werden, ist es hilfreich, sich an das einfache Regressionsmodell aus Kapitel 9 zu erinnern.

Angenommen, wir möchten die thermische Stabilität eines Proteins anhand seiner Hydrophobizität vorhersagen.

Das einfachste Modell wäre

$$
\hat{y}=mx+b,
$$

wobei

- \(x\) die Hydrophobizität bezeichnet,
- \(m\) die Steigung ist,
- \(b\) den Achsenabschnitt darstellt
- und \(\hat{y}\) die vorhergesagte Proteinstabilität ist.

Die Parameter \(m\) und \(b\) bestimmen die Form der Regressionsgeraden.

Zu Beginn werden diese Parameter beliebig gewählt.

Die daraus resultierenden Vorhersagen werden mit experimentell gemessenen Proteinstabilitäten verglichen, und der Vorhersagefehler wird mithilfe des Mean Squared Error (MSE) berechnet.

Das Gradientenverfahren passt die Parameter dann schrittweise in die Richtung an, in der der Vorhersagefehler am schnellsten abnimmt.

Schließlich konvergiert der Algorithmus zu einer Parameterkombination, die die Verlustfunktion minimiert.

Dieses einfache Beispiel veranschaulicht die zentrale Idee des maschinellen Lernens:

> **Lernen bedeutet, diejenigen Parameter zu finden, die den Vorhersagefehler minimieren.**

Alles, was in diesem Kapitel folgt, baut unmittelbar auf diesem Prinzip auf.

---

## Von zwei Parametern zu Millionen

Der Unterschied zwischen linearer Regression und neuronalen Netzen liegt also nicht im Optimierungsverfahren.

Der Unterschied liegt in der Zahl der Parameter, die optimiert werden müssen.

Für das einfache Regressionsmodell oben müssen nur zwei Parameter gelernt werden:

- die Steigung \(m\)
- und der Achsenabschnitt \(b\).

Weil das Modell so einfach ist, kann die optimale Lösung oft sogar analytisch berechnet werden.

Neuronale Netze sind grundlegend anders.

Anstatt nur zwei anpassbare Parameter zu enthalten, können sie

- Tausende,
- Millionen
- oder sogar Milliarden von Parametern umfassen.

Moderne Deep-Learning-Modelle wie AlphaFold oder große Sprachmodelle bestehen aus riesigen Sammlungen miteinander verknüpfter Parameter, die gleichzeitig optimiert werden müssen.

Die besten Parameterwerte lassen sich dann nicht mehr analytisch bestimmen.

Optimierungsverfahren wie das Gradientenverfahren werden damit unverzichtbar.

Das grundlegende Prinzip bleibt jedoch unverändert.

Nur die Dimensionalität des Optimierungsproblems ist dramatisch gewachsen.

---

## Der Trainingszyklus

Der Lernprozess eines neuronalen Netzes lässt sich daher als wiederholter Optimierungszyklus auffassen.

Er beginnt mit einer Vorhersageaufgabe.

Angenommen, wir möchten die zelluläre Lokalisation von Proteinen vorhersagen.

Das Netz erhält eine Proteinsequenz als Eingabe und erzeugt eine erste Vorhersage.

Zu Beginn des Trainings ist diese Vorhersage meist kaum besser als Zufall, weil das Netz noch keine sinnvollen Parameterwerte gelernt hat.

Die Vorhersage wird anschließend mit der experimentell bekannten Lokalisation verglichen.

Die Abweichung zwischen Vorhersage und Beobachtung wird durch eine geeignete Verlustfunktion quantifiziert.

Mithilfe des Gradientenverfahrens werden die Parameter des Netzes dann leicht angepasst.

Das veränderte Netz erzeugt eine neue Vorhersage, die wiederum bewertet wird.

Dieser Zyklus wird Tausende oder sogar Millionen Male wiederholt.

Mit jeder Iteration verbessert das Netz seine Vorhersagen schrittweise.

Schließlich stabilisiert sich der Vorhersagefehler, was darauf hindeutet, dass das Netz eine nützliche Abbildung von Proteinsequenzen auf zelluläre Lokalisation gelernt hat.

Der Lernprozess lässt sich daher als kontinuierliche Rückkopplungsschleife zusammenfassen:

$$
\text{Eingabe}
\rightarrow
\text{Vorhersage}
\rightarrow
\text{Verlust}
\rightarrow
\text{Parameteraktualisierung}
\rightarrow
\text{Verbesserte Vorhersage}.
$$

Dieser iterative Optimierungsprozess bildet die Grundlage des Trainings aller modernen neuronalen Netze.

---

## Das richtige Modell wählen

Bevor das Training beginnen kann, muss allerdings noch eine weitere wichtige Entscheidung getroffen werden.

Unterschiedliche biologische Fragestellungen erfordern unterschiedliche Arten von Vorhersagemodellen.

Wenn das Ziel darin besteht, eine kontinuierliche Größe wie die Proteinstabilität vorherzusagen, ist ein Regressionsmodell angemessen.

Wenn vordefinierte Kategorien unterschieden werden sollen, wird ein Klassifikationsmodell benötigt.

Wenn keine Labels vorliegen, sind unüberwachte Verfahren wie Clustering unter Umständen besser geeignet.

Künstliche neuronale Netze heben diese Unterscheidungen nicht auf.

Sie stellen vielmehr eine hochflexible Modellarchitektur bereit, die an viele verschiedene Lernaufgaben angepasst werden kann.

Dasselbe neuronale Netz kann für

- Regression,
- binäre Klassifikation,
- Mehrklassenklassifikation
- oder viele andere Vorhersageprobleme

konfiguriert werden, indem seine Ausgabeschicht und die zugehörige Verlustfunktion angepasst werden.

Das Lernprinzip selbst bleibt dabei unverändert.

---

## Die Architektur wird zum Modell

Diese Beobachtung macht einen wichtigen konzeptionellen Wandel sichtbar.

Bei der linearen Regression wird das mathematische Modell vom Forschenden explizit festgelegt.

Der Lernalgorithmus bestimmt lediglich die Werte einiger weniger Parameter.

Bei neuronalen Netzen ist die Situation etwas anders.

Der Forschende wählt zunächst eine **Architektur**:

- die Anzahl der Schichten,
- die Anzahl der Neuronen pro Schicht
- und die Verbindungen zwischen ihnen.

Diese Architektur definiert das mathematische Modell.

Das Training bestimmt anschließend die Millionen von Parametern, die festlegen, wie Information durch diese Architektur fließt.

Man kann daher zwischen zwei getrennten Konstruktionsentscheidungen unterscheiden.

Zuerst wählt der Forschende die **Struktur** des Modells.

Danach bestimmt der Lernalgorithmus die **Parameterwerte** innerhalb dieser Struktur.

Beide Entscheidungen beeinflussen die endgültige Vorhersageleistung.

---

## Immer ausdrucksstärkere Modelle konstruieren

Die vorangegangenen Kapitel haben mehrere unterschiedliche Modellarchitekturen eingeführt.

Die lineare Regression beschreibt Beobachtungen durch eine Gerade.

Die logistische Regression transformiert diese Gerade in Wahrscheinlichkeiten.

Entscheidungsbäume stellen Vorhersagen durch Abfolgen von Entscheidungsregeln dar.

Künstliche neuronale Netze verfolgen eine andere Strategie.

Anstatt sich auf eine einzelne Gleichung oder eine Sammlung von Regeln zu stützen, kombinieren sie viele einfache Recheneinheiten zu großen, miteinander verknüpften Netzwerken.

Bemerkenswerterweise ist jede einzelne dieser Recheneinheiten mathematisch sehr einfach.

Die enorme Ausdrucksstärke neuronaler Netze entsteht nicht aus der Komplexität einzelner Neuronen, sondern aus der Art, wie Tausende oder Millionen dieser einfachen Einheiten miteinander interagieren.

Den grundlegenden Baustein zu verstehen, das künstliche Neuron, ist daher der natürliche nächste Schritt.

---

### Konzeptionelle Zusammenfassung

Künstliche neuronale Netze werden nach exakt denselben Optimierungsprinzipien trainiert, die bereits in den früheren Kapiteln eingeführt wurden. Wie alle Modelle des überwachten Lernens erzeugen sie wiederholt Vorhersagen, vergleichen diese mit experimentellen Beobachtungen, berechnen einen Verlust und passen ihre Parameter mithilfe des Gradientenverfahrens an. Der entscheidende Unterschied liegt nicht im Optimierungsalgorithmus, sondern in der enormen Zahl der zu lernenden Parameter. Vor dem Training wählt der Forschende eine geeignete Netzwerkarchitektur, während der Lernalgorithmus die Parameterwerte bestimmt, mit denen diese Architektur das biologische Vorhersageproblem löst.

---

### Fragen zur Selbstkontrolle

1. Welche Aspekte des Trainings neuronaler Netze sind identisch mit den Verfahren des überwachten Lernens aus den vorangegangenen Kapiteln?
2. Warum ist das Gradientenverfahren für neuronale Netze besonders wichtig?
3. Warum lassen sich die Parameter einer einfachen linearen Regression oft analytisch bestimmen, während neuronale Netze iterative Optimierung erfordern?
4. Beschreiben Sie den Trainingszyklus eines neuronalen Netzes.
5. Worin besteht der Unterschied zwischen der Wahl einer Netzwerkarchitektur und dem Training eines Netzes?
6. Warum kann dieselbe Netzwerkarchitektur sowohl für Regressions- als auch für Klassifikationsaufgaben angepasst werden?
7. Warum entsteht die Vorhersagekraft neuronaler Netze aus dem Zusammenspiel vieler einfacher Recheneinheiten und nicht aus der Komplexität einzelner Neuronen?
