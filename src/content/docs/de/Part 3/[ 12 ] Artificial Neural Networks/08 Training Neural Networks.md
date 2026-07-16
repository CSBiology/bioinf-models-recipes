---
title: "12.8 Neuronale Netze trainieren"
sidebar:
  label: "12.8 Neuronale Netze trainieren"
  order: 8
  group: "Part 3"
  part: "Part 3"
---

# 12.8 Neuronale Netze trainieren

## Lernen heißt, Millionen von Parametern anzupassen

Wir haben nun gesehen, wie einzelne Neuronen zu Schichten kombiniert werden und wie aufeinanderfolgende Schichten zunehmend informative Repräsentationen biologischer Daten lernen.

Eine wichtige Frage bleibt jedoch offen.

> **Wie lernt das Netzwerk die richtigen Werte für all seine Gewichte?**

Zu Beginn weiß das Netzwerk über die Vorhersageaufgabe überhaupt nichts.

Jedes Gewicht erhält einen zufälligen Anfangswert.

Folglich sind die ersten Vorhersagen des Netzes kaum besser als Zufallsraten.

Während des Trainings werden diese Gewichte jedoch schrittweise angepasst, bis das Netz genaue Vorhersagen erzeugt.

Lernen besteht also darin, diejenige Menge von Gewichten zu finden, welche den Vorhersagefehler minimiert.

Obwohl moderne neuronale Netze Millionen oder sogar Milliarden von Parametern enthalten können, bleibt das zugrunde liegende Lernprinzip genau dasselbe wie bei den einfachen Regressionsmodellen, die wir zu Beginn dieses Buches eingeführt haben.

---

## Vorwärtspropagation

Das Training beginnt immer mit einem **Vorwärtsdurchlauf** durch das Netzwerk.

Angenommen, wir möchten die subzelluläre Lokalisation eines Proteins vorhersagen.

Die Proteinsequenz wird zunächst in die numerische Eingabedarstellung übersetzt, die das Netzwerk benötigt.

Diese Eingabe wird dann Schicht für Schicht durch das Netzwerk propagiert.

Jedes Neuron

1. berechnet eine gewichtete Summe,
2. wendet seine Aktivierungsfunktion an
3. und gibt das Ergebnis an die nächste Schicht weiter.

Schließlich erzeugt die Ausgabeschicht die endgültige Vorhersage.

Zum Beispiel:

| Lokalisation | Vorhergesagte Wahrscheinlichkeit |
|--------------|---------------------------------:|
| Chloroplast | 0.82 |
| Mitochondrium | 0.09 |
| Sekretorischer Weg | 0.05 |
| Cytoplasma | 0.04 |

Das Netzwerk sagt also voraus, dass das Protein mit der höchsten Wahrscheinlichkeit im Chloroplasten lokalisiert ist.

Zu diesem Zeitpunkt wissen wir allerdings noch nicht, ob diese Vorhersage korrekt ist.

---

## Den Vorhersagefehler messen

Im nächsten Schritt wird die Vorhersage mit der experimentell bekannten Antwort verglichen.

Angenommen, experimentelle Evidenz zeigt tatsächlich, dass das Protein im Chloroplasten lokalisiert ist.

Dann ist die Vorhersage bereits recht genau.

Hätte das Netzwerk stattdessen mit hoher Sicherheit eine mitochondriale Lokalisation vorhergesagt, wäre der Vorhersagefehler deutlich größer.

Diese Abweichung wird mithilfe einer **Verlustfunktion** quantifiziert.

Die Verlustfunktion misst, wie gut das aktuelle Netzwerk auf den Trainingsdaten arbeitet.

Große Vorhersagefehler führen zu einem großen Verlust.

Genaue Vorhersagen führen zu einem kleinen Verlust.

Das Ziel des Trainings ist daher einfach:

> **Die Netzwerkparameter so anzupassen, dass der Verlust möglichst klein wird.**

Alles, was während des Trainings geschieht, dient diesem einen Zweck.

---

## Aus Fehlern lernen

Wie sollte das Netzwerk nach einem beobachteten Vorhersagefehler seine Millionen von Gewichten verändern?

Offensichtlich wäre es äußerst ineffizient, alle Parameter zufällig zu verändern.

Stattdessen muss das Netzwerk bestimmen,

- welche Gewichte am stärksten zum Fehler beigetragen haben
- und in welche Richtung jedes Gewicht verändert werden sollte.

Dies geschieht mithilfe des **Gradientenverfahrens**.

Wie in Kapitel 9 eingeführt, zeigt der Gradient an, wie sich der Verlust verändert, wenn ein Parameter leicht modifiziert wird.

Wenn das Erhöhen eines bestimmten Gewichts den Verlust vergrößert, sollte dieses Gewicht verkleinert werden.

Wenn das Erhöhen des Gewichts den Verlust verringert, sollte es vergrößert werden.

Das Gradientenverfahren liefert damit eine systematische Methode, die Vorhersage Schritt für Schritt zu verbessern.

Das Bemerkenswerte ist, dass dieses Prinzip unabhängig davon gilt, ob ein Modell zwei Parameter oder zwei Milliarden enthält.

---

## Backpropagation

Die Gradienten für ein neuronales Netz mit vielen miteinander verknüpften Schichten zu berechnen, ist nicht trivial.

Eine Veränderung eines Gewichts in einer frühen verborgenen Schicht kann jede nachfolgende Berechnung im Netzwerk beeinflussen.

Der Vorhersagefehler muss daher rückwärts durch das Netzwerk propagiert werden.

Dieses Verfahren nennt man **Backpropagation**.

Während der Backpropagation bestimmt das Netzwerk, wie stark jedes einzelne Gewicht zum endgültigen Vorhersagefehler beigetragen hat.

Gewichte mit großem Einfluss werden stärker angepasst.

Gewichte mit geringem Einfluss werden schwächer verändert.

Man kann sich Backpropagation als eine Zuweisung von Verantwortung für den Vorhersagefehler vorstellen.

Jeder Parameter erhält Rückmeldung darüber, wie er verändert werden sollte, um zukünftige Vorhersagen zu verbessern.

Auch wenn die zugrunde liegende Mathematik die Kettenregel der Differentialrechnung verwendet, ist die zentrale Idee konzeptionell einfach.

Das Netzwerk lernt, indem Information in zwei Richtungen propagiert wird.

Während des **Vorwärtsdurchlaufs** fließt Information von der Eingabe zur Vorhersage.

Während des **Rückwärtsdurchlaufs** fließt Information über den Vorhersagefehler zurück durch das Netzwerk und erlaubt die Aktualisierung jedes Gewichts.

Zusammen bilden Vorwärtspropagation und Backpropagation den Lernzyklus jedes modernen neuronalen Netzes.

---

## Training ist ein iterativer Prozess

Ein einziges Aktualisieren der Gewichte genügt nicht.

Nach jeder Parameteranpassung führt das Netzwerk einen weiteren Vorwärtsdurchlauf aus, erzeugt neue Vorhersagen, berechnet einen neuen Verlust und passt seine Parameter erneut an.

Dieser Zyklus wird viele Male wiederholt.

Ein vollständiger Durchlauf durch den gesamten Trainingsdatensatz wird als **Epoche** bezeichnet.

Abhängig von der Größe des Datensatzes und der Komplexität des Netzwerks kann das Training

- Dutzende,
- Hunderte
- oder sogar Tausende von Epochen

erfordern.

Zu Beginn nimmt der Vorhersagefehler oft rasch ab.

Später werden die Verbesserungen zunehmend kleiner, wenn sich das Netzwerk einer optimalen Lösung annähert.

Schließlich stabilisiert sich der Verlust, was darauf hinweist, dass weiteres Training nur noch wenig zusätzlichen Nutzen bringt.

Dann hat das Netzwerk ein Modell gelernt, das die in den Trainingsdaten enthaltenen statistischen Beziehungen erfasst.

---

## Warum neuronale Netze leistungsfähige Hardware benötigen

Moderne neuronale Netze enthalten enorme Zahlen von Parametern.

Ihr Training erfordert für jedes Trainingsbeispiel wiederholte Matrixmultiplikationen mit Millionen von Gewichten.

Würde man diese Berechnungen auf einer herkömmlichen zentralen Verarbeitungseinheit (CPU) ausführen, würde das Training oft Tage oder sogar Wochen dauern.

Glücklicherweise lassen sich die meisten Berechnungen neuronaler Netze parallel ausführen.

Grafikprozessoren (**GPUs**) wurden ursprünglich entwickelt, um Computergrafik darzustellen, indem Tausende einfacher mathematischer Operationen gleichzeitig durchgeführt werden.

Genau dieselbe Architektur eignet sich ideal für neuronale Netze.

Anstatt ein Neuron nach dem anderen zu berechnen, können GPUs Tausende von Neuronen gleichzeitig auswerten.

Diese massive Parallelisierung hat die Trainingszeiten drastisch verkürzt und gehört zu den entscheidenden technologischen Entwicklungen, die den jüngsten Erfolg des Deep Learning ermöglicht haben.

Der schnelle Fortschritt der künstlichen Intelligenz im vergangenen Jahrzehnt beruht daher nicht nur auf neuen Algorithmen, sondern ebenso auf gewaltigen Fortschritten in der Rechenhardware.

---

## Training ist Optimierung im großen Maßstab

Auf den ersten Blick erscheinen moderne neuronale Netze wesentlich komplizierter als die Regressionsmodelle, die wir zu Beginn dieses Buches behandelt haben.

Tatsächlich lösen sie jedoch genau dasselbe Optimierungsproblem.

Der Unterschied ist lediglich eine Frage des Maßstabs.

Lineare Regression lernt zwei Parameter.

Ein neuronales Netz kann Millionen lernen.

Lineare Regression optimiert eine Gleichung.

Ein neuronales Netz optimiert Tausende miteinander gekoppelter Gleichungen gleichzeitig.

Das mathematische Prinzip bleibt jedoch unverändert.

Lernen besteht immer darin,

- eine Vorhersage zu erzeugen,
- den Vorhersagefehler zu messen,
- zu berechnen, wie die Parameter verändert werden sollten
- und diesen Prozess so lange zu wiederholen, bis sich das Modell nicht weiter verbessern lässt.

Diese Beobachtung macht eine wichtige Einsicht deutlich.

Deep Learning ist nicht grundsätzlich anders als klassisches Machine Learning.

Es ist vielmehr die natürliche Erweiterung derselben Optimierungsprinzipien auf sehr viel ausdrucksstärkere mathematische Modelle.

Als Nächstes wollen wir untersuchen, wie die Ausgabe eines neuronalen Netzes an verschiedene biologische Vorhersageaufgaben angepasst werden muss.

Auch wenn die verborgenen Schichten oft ähnlich bleiben, hängt die Gestaltung der Ausgabeschicht davon ab, ob das Netzwerk Regression, binäre Klassifikation oder Mehrklassenklassifikation ausführt.

---

### Konzeptionelle Zusammenfassung

Das Training eines neuronalen Netzes besteht darin, seine Gewichte wiederholt so zu optimieren, dass eine Verlustfunktion minimiert wird. Während des Vorwärtsdurchlaufs erzeugt das Netzwerk Vorhersagen, indem es Information von der Eingabe zur Ausgabeschicht propagiert. Der Vorhersagefehler wird anschließend mithilfe der Backpropagation rückwärts durch das Netzwerk weitergegeben, sodass das Gradientenverfahren jeden Parameter anpassen kann. Durch die Wiederholung dieses Optimierungszyklus über viele Epochen verbessert sich die Vorhersagegenauigkeit schrittweise. Obwohl neuronale Netze weitaus mehr Parameter enthalten als klassische Machine-Learning-Modelle, werden sie nach exakt denselben Optimierungsprinzipien trainiert.

---

### Fragen zur Selbstkontrolle

1. Warum sind die anfänglichen Vorhersagen eines neuronalen Netzes meist schlecht?
2. Was geschieht während des Vorwärtsdurchlaufs eines neuronalen Netzes?
3. Welchem Zweck dient die Verlustfunktion?
4. Warum eignet sich das Gradientenverfahren zur Optimierung neuronaler Netze mit Millionen von Parametern?
5. Was ist Backpropagation, und warum ist sie notwendig?
6. Was versteht man unter einer Epoche?
7. Warum sind GPUs besonders gut für das Training neuronaler Netze geeignet?
8. Warum kann Deep Learning als Erweiterung der in den früheren Kapiteln eingeführten Optimierungsverfahren verstanden werden?
