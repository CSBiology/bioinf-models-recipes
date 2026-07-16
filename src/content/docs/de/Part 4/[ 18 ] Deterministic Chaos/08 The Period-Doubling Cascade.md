---
title: "18.8 Die Periodenverdopplungskaskade"
sidebar:
  label: "18.8 Die Periodenverdopplungskaskade"
  order: 8
  group: "Part 4"
  part: "Part 4"
---

## 18.8 Die Periodenverdopplungskaskade

Im vorherigen Abschnitt haben wir gelernt, wie sich die logistische Abbildung durch wiederholte Iteration entwickelt und wie das Spinnwebdiagramm diesen Prozess grafisch darstellt.

Nun stellen wir eine neue Frage.

> **Wie verändert sich das Langzeitverhalten der logistischen Abbildung, wenn wir den Wachstumsparameter \(r\) schrittweise erhöhen?**

Diese Frage folgt einem vertrauten Muster.

In den vorherigen Kapiteln haben wir untersucht, wie die Veränderung eines **Kontrollparameters** das qualitative Verhalten eines dynamischen Systems verändert. Kleine Parameteränderungen konnten ein stabiles Gleichgewicht durch eine Bifurkation in ein bistabiles System oder in eine stabile Oszillation überführen.

Die logistische Abbildung zeigt nun eine noch reichhaltigere Folge von Übergängen.

### Ein Bifurkationsdiagramm

Um diese Frage zu beantworten, simulieren wir die logistische Abbildung wiederholt für viele verschiedene Werte des Wachstumsparameters \(r\).

Für jeden Parameterwert wird das Modell so lange iteriert, bis das anfängliche transiente Verhalten verschwunden ist.

Erfasst wird nur das Langzeitverhalten.

Das Ergebnis wird in einem **Bifurkationsdiagramm** dargestellt.

Die horizontale Achse repräsentiert den Kontrollparameter \(r\).

Die vertikale Achse zeigt die Populationswerte, die bestehen bleiben, nachdem die transienten Dynamiken abgeklungen sind.

Anstatt eine einzelne Trajektorie darzustellen, fasst das Bifurkationsdiagramm das Langzeitverhalten des Systems über einen ganzen Bereich von Parameterwerten hinweg zusammen.

Es liefert damit einen globalen Überblick über die möglichen dynamischen Regime.

### Region I: Stabiles Gleichgewicht

Für kleine Werte des Wachstumsparameters ist das Verhalten einfach.

Unabhängig von der Anfangspopulationsgröße konvergiert jede Simulation gegen ein einzelnes stabiles Gleichgewicht.

Das Bifurkationsdiagramm enthält daher nur einen einzigen Ast.

Genau dieses Verhalten erwarten wir von einem stabilen Punktattraktor.

Die Population erreicht schließlich einen konstanten Wert, der sich von einer Generation zur nächsten nicht mehr verändert.

### Region II: Die erste Bifurkation

Mit zunehmendem Wachstumsparameter wird ein kritischer Punkt erreicht.

Das stabile Gleichgewicht verliert seine Stabilität.

Im Unterschied zur Hopf-Bifurkation des vorherigen Kapitels wird das System jedoch nicht sofort chaotisch.

Stattdessen entsteht eine stabile Oszillation mit **Periode zwei**.

Die Population wechselt nun zwischen zwei verschiedenen Werten.

Im Bifurkationsdiagramm spaltet sich der einzelne Ast in zwei getrennte Äste auf.

Diesen Übergang nennt man **Periodenverdopplungsbifurkation**.

### Region III: Wiederholte Periodenverdopplung

Eine weitere Erhöhung des Wachstumsparameters führt zu einem noch bemerkenswerteren Phänomen.

Jede stabile Oszillation verliert schließlich ihre Stabilität.

Aus einer Periode-zwei-Oszillation wird eine Periode-vier-Oszillation.

Aus der Periode-vier-Oszillation wird eine Periode-acht-Oszillation.

Dieser Prozess setzt sich fort:

- Periode 1,
- Periode 2,
- Periode 4,
- Periode 8,
- Periode 16
- und so weiter.

Die Oszillationsperiode verdoppelt sich also immer wieder.

Jede Verdopplung tritt in einem zunehmend kleineren Parameterintervall auf.

Die Bifurkationen liegen immer dichter beieinander.

Diese Folge bezeichnet man als **Periodenverdopplungskaskade**.

### Der Beginn des Chaos

Schließlich liegen die Bifurkationen so dicht, dass sie zu verschmelzen scheinen.

Jenseits dieses Punktes verschwinden die regelmäßigen Oszillationen.

Stattdessen schwankt die Population irregulär, ohne sich jemals exakt zu wiederholen.

Die logistische Abbildung ist in ein chaotisches Regime eingetreten.

Bemerkenswert ist, dass keine zusätzlichen Gleichungen eingeführt wurden.

Es wurden keine stochastischen Prozesse hinzugefügt.

Die Dynamik wird allein deshalb chaotisch, weil ein einzelner Kontrollparameter einen kritischen Schwellenwert überschritten hat.

### Fenster der Ordnung

Auf den ersten Blick wirkt das chaotische Regime vollständig irregulär.

Bei genauerer Betrachtung zeigt sich jedoch eine überraschende Besonderheit.

Innerhalb des chaotischen Bereichs tauchen plötzlich kleine Regionen regelmäßigen Verhaltens wieder auf.

Stabile periodische Oszillationen erscheinen erneut, bevor sie schließlich wieder dem Chaos weichen.

Diese **periodischen Fenster** zeigen, dass Chaos und Ordnung auf komplexe Weise miteinander verflochten sind.

Der Übergang zwischen beiden ist weit komplizierter als ein einfacher Wechsel von Regelmäßigkeit zu Unordnung.

### Ein universeller Weg zum Chaos

Die Periodenverdopplungskaskade ist nicht auf die logistische Abbildung beschränkt.

Sie wurde beobachtet in

- chemischen Oszillatoren,
- elektronischen Schaltungen,
- Strömungsdynamik,
- Lasern,
- ökologischen Modellen
- und vielen biologischen Systemen.

Diese bemerkenswerte Universalität war eine der großen Entdeckungen der nichtlinearen Dynamik im 20. Jahrhundert.

Sehr unterschiedliche physikalische und biologische Systeme können genau denselben mathematischen Weg in Richtung deterministischen Chaos einschlagen.

### Von Bifurkationen zum Chaos

Die logistische Abbildung vollendet nun eine konzeptionelle Entwicklung, die bereits mehrere Kapitel zuvor begonnen hat.

In Kapitel 15 sind wir der **Sattel-Knoten-Bifurkation** begegnet, bei der stabile Gleichgewichte erscheinen oder verschwinden.

In Kapitel 16 haben wir die **Hopf-Bifurkation** eingeführt, bei der stabile Gleichgewichte stabile Oszillationen hervorbringen.

Hier entdecken wir nun einen dritten großen Übergang.

Wiederholte **Periodenverdopplungsbifurkationen** verwandeln eine regelmäßige Oszillation schrittweise in deterministisches Chaos.

Diese drei Bifurkationen zeigen zusammen, wie die Veränderung eines einzigen Kontrollparameters das Verhalten eines nichtlinearen Systems grundlegend neu organisieren kann.

### Zentrale Konzepte

- Das Bifurkationsdiagramm fasst das Langzeitverhalten der logistischen Abbildung zusammen.
- Eine Erhöhung des Wachstumsparameters führt zu aufeinanderfolgenden qualitativen Änderungen der Dynamik.
- Eine Periodenverdopplungsbifurkation ersetzt einen periodischen Zustand durch eine Oszillation mit doppelter Periode.
- Wiederholte Periodenverdopplung erzeugt eine Periodenverdopplungskaskade.
- Chaos entsteht nach einer unendlichen Folge von Periodenverdopplungen.
- Periodenverdopplungskaskaden treten in vielen nicht verwandten nichtlinearen Systemen auf.

### Zusammenfassung

Das Bifurkationsdiagramm der logistischen Abbildung zeigt, wie sich ein einfaches nichtlineares System von einem stabilen Gleichgewicht zu deterministischem Chaos entwickelt. Mit zunehmendem Wachstumsparameter durchläuft das System eine Folge von Periodenverdopplungsbifurkationen, bei denen sich die Oszillationsperiode immer wieder verdoppelt. Dieser universelle Weg zum Chaos wurde in zahlreichen physikalischen, chemischen und biologischen Systemen beobachtet und macht deutlich, wie bemerkenswert komplexes Verhalten aus einfachen nichtlinearen Modellen hervorgehen kann.

### Verständnisfragen

1. Welche Information wird in einem Bifurkationsdiagramm dargestellt?
2. Warum werden transiente Dynamiken vor der Konstruktion des Diagramms verworfen?
3. Was geschieht bei einer Periodenverdopplungsbifurkation?
4. Was versteht man unter einer Periodenverdopplungskaskade?
5. Warum gilt der Beginn des Chaos als so bemerkenswert?
6. Was sind periodische Fenster innerhalb des chaotischen Regimes?
7. Wie hängt die Periodenverdopplungskaskade mit den in den vorherigen Kapiteln eingeführten Sattel-Knoten- und Hopf-Bifurkationen zusammen?
