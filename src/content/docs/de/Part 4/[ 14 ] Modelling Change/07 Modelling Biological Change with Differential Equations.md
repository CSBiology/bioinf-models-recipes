---
title: "14.7 Biologische Veränderung mit Differentialgleichungen modellieren"
sidebar:
  label: "14.7 Biologische Veränderung mit Differentialgleichungen modellieren"
  order: 7
  group: "Part 4"
  part: "Part 4"
---

## 14.7 Biologische Veränderung mit Differentialgleichungen modellieren

Die vorangegangenen Abschnitte haben gezeigt, dass ein biologisches System als Punkt dargestellt werden kann, der sich durch den Zustandsraum bewegt. Wir haben außerdem gesehen, dass die Richtung dieser Bewegung durch ein mathematisches Modell bestimmt wird. Die verbleibende Frage lautet, wie ein solches Modell formuliert werden kann.

Die zentrale Idee ist überraschend einfach. Anstatt zu beschreiben, wie viel von einem Molekül vorhanden ist, beschreiben wir, **wie schnell sich seine Menge verändert**. Dieser Perspektivwechsel bildet die Grundlage der Modellierung dynamischer Systeme und führt ganz natürlich zu **gewöhnlichen Differentialgleichungen (ODEs)**.

### Biologische Systeme werden durch Veränderung definiert

Viele biologische Prozesse werden durch konkurrierende Mechanismen bestimmt, die die Menge einer bestimmten Komponente kontinuierlich vergrößern oder verkleinern.

Betrachten wir die Konzentration eines Proteins in einer Zelle. Zu jedem Zeitpunkt werden Proteine durch Translation synthetisiert und gleichzeitig durch zelluläre Abbauprozesse wieder degradiert. Die beobachtete Proteinkonzentration spiegelt somit das Gleichgewicht zwischen Produktion und Abbau wider.

Dasselbe Prinzip gilt für viele andere biologische Größen.

- Populationen wachsen durch Reproduktion und nehmen durch Mortalität ab.
- Metabolite werden durch einige Reaktionen produziert und durch andere verbraucht.
- Viren replizieren in Wirtszellen und werden zugleich durch das Immunsystem eliminiert.

In all diesen Fällen lautet die biologische Frage nicht einfach **wie viel vorhanden ist**, sondern vielmehr **wie schnell sich die Menge verändert**.

### Änderungsraten beschreiben

Angenommen, die Menge einer biologischen Größe wird durch die Variable \(X(t)\) dargestellt, wobei \(t\) die Zeit bezeichnet.

Anstatt den Wert von \(X\) selbst zu beschreiben, interessieren wir uns für seine **Änderungsrate**.

Mathematisch wird diese geschrieben als

$$
\frac{dX}{dt}.
$$

Diese Notation liest man als "die Änderung von \(X\) in Bezug auf die Zeit".

Ein positiver Wert zeigt an, dass die Größe zunimmt, ein negativer Wert bedeutet, dass sie abnimmt. Ist die Änderungsrate gleich null, bleibt die Größe konstant.

Das Bemerkenswerte an biologischen Systemen ist, dass diese Änderungsrate meist vom aktuellen Zustand des Systems selbst abhängt.

### Biologische Wechselwirkungen bestimmen die Änderungsrate

Die Geschwindigkeit, mit der sich eine biologische Größe verändert, ist nur selten konstant.

Zum Beispiel hängt der Proteinabbau davon ab, wie viel Protein vorhanden ist. Gibt es nur wenige Proteinmoleküle, können auch nur wenige abgebaut werden. Ist das Protein dagegen reichlich vorhanden, verläuft der Abbau schneller, einfach weil mehr Substrat zur Verfügung steht.

Ebenso hängt die Proteinsynthese von der Menge des entsprechenden Transkripts ab. Mehr Transkript erlaubt im Allgemeinen eine stärkere Proteinproduktion.

Die Änderungsrate hängt daher vom aktuellen biologischen Zustand ab.

Mathematisch lässt sich diese Beziehung allgemein schreiben als

$$
\frac{dX}{dt}=f(X),
$$

wobei die Funktion \(f\) alle biologischen Prozesse zusammenfasst, die die Größe \(X\) beeinflussen.

Die genaue Form von \(f\) hängt vollständig vom untersuchten biologischen System ab.

### Ein einfaches Modell der Genregulation

Wir können nun zum bereits eingeführten genregulatorischen Schaltkreis zurückkehren.

Das Modell enthält zwei Zustandsvariablen:

- die Transkriptmenge (\(T\)),
- die Proteinmenge (\(P\)).

Ihre Konzentrationen verändern sich, weil mehrere biologische Prozesse gleichzeitig ablaufen.

Die Proteinmenge nimmt durch Translation des Transkripts zu und durch Proteinabbau ab.

Die Transkriptmenge nimmt durch Transkription zu, nimmt aber ab, weil das Protein die weitere Produktion des Transkripts hemmt.

Diese biologischen Annahmen lassen sich direkt in ein mathematisches Modell übersetzen:

$$
\frac{dP}{dt}=m\beta PT-aP
$$

$$
\frac{dT}{dt}=bT-\beta PT
$$

Auch wenn diese Gleichungen zunächst ungewohnt erscheinen mögen, besitzt jeder Term eine direkte biologische Interpretation.

Die erste Gleichung sagt aus, dass die Proteinmenge durch Proteinproduktion zunimmt und durch Abbau abnimmt.

Die zweite Gleichung sagt aus, dass die Transkriptmenge durch Transkription zunimmt, aber abnimmt, weil das Protein die weitere Transkriptproduktion hemmt.

Die Gleichungen enthalten also nichts anderes als die biologischen Annahmen, die zuvor eingeführt wurden.

### Gleichungen repräsentieren biologische Hypothesen

Es ist verführerisch, Differentialgleichungen nur als mathematische Ausdrücke zu betrachten.

In der Systembiologie besitzen sie jedoch eine deutlich tiefere Bedeutung.

Jede Variable entspricht einer messbaren biologischen Größe.

Jeder Parameter steht für einen biologischen Prozess wie Syntheserate, Abbaurate oder Bindungsstärke.

Jeder Term formuliert eine biologische Hypothese darüber, wie verschiedene Komponenten miteinander wechselwirken.

Die Konstruktion eines Modells zwingt uns daher dazu, unsere biologischen Annahmen explizit zu machen. Wenn das Modell experimentelle Beobachtungen erfolgreich reproduziert, werden diese Annahmen gestützt. Wenn das Modell versagt, ist unser Verständnis des biologischen Systems unvollständig.

Differentialgleichungen sind daher weit mehr als mathematische Werkzeuge. Sie liefern eine präzise Sprache zur Formulierung und Prüfung biologischer Hypothesen.

### Zentrale Konzepte

- Gewöhnliche Differentialgleichungen beschreiben, wie sich biologische Größen im Zeitverlauf verändern.
- Die Änderungsrate ist oft informativer als die absolute Größe selbst.
- Biologische Wechselwirkungen bestimmen, mit welcher Geschwindigkeit sich Zustandsvariablen ändern.
- Jeder Term in einer Differentialgleichung besitzt eine biologische Interpretation.
- Differentialgleichungen formalisieren mechanistische Hypothesen über biologische Systeme.

### Zusammenfassung

Dynamische biologische Systeme lassen sich natürlicherweise eher durch Änderungsraten als durch statische Größen beschreiben. Gewöhnliche Differentialgleichungen stellen einen mathematischen Rahmen bereit, um diese Veränderungen auszudrücken und mit den zugrunde liegenden biologischen Prozessen zu verknüpfen. Indem sie biologische Mechanismen in Gleichungen übersetzen, erzeugen sie die Vektorfelder, die bestimmen, wie sich Systeme durch den Zustandsraum bewegen. Auf diese Weise werden Differentialgleichungen zur zentralen Sprache der mechanistischen Systembiologie.

### Fragen zur Selbstkontrolle

1. Warum beschreiben Differentialgleichungen Änderungsraten und nicht absolute Größen?
2. Warum hängt der Proteinabbau meist von der vorhandenen Proteinmenge ab?
3. Welche biologische Information wird durch die Funktion \(f(X)\) repräsentiert?
4. Warum kann jeder Term in einer Differentialgleichung biologisch interpretiert werden?
5. Warum eignen sich Differentialgleichungen besonders gut zur Modellierung lebender Systeme?
