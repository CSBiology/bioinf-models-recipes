---
title: "16.5 Wenn Gleichgewichte erscheinen und verschwinden"
sidebar:
  label: "16.5 Wenn Gleichgewichte erscheinen und verschwinden"
  order: 5
  group: "Part 4"
  part: "Part 4"
---

## 16.5 Wenn Gleichgewichte erscheinen und verschwinden

Im vorangegangenen Abschnitt haben wir ein Minimalmodell des lac-Operons entwickelt, indem wir zwei konkurrierende biologische Prozesse gegeneinander gestellt haben: Aktivierung durch positives Feedback und Abbau durch Verdünnung und Proteinumsatz.

Die Gleichgewichtszustände des Systems werden durch die Schnittpunkte dieser beiden Prozesse bestimmt,

$$
I(X)=R(X).
$$

Solange die biologischen Parameter unverändert bleiben, bleiben auch diese Schnittpunkte fest.

Reale biologische Systeme arbeiten jedoch nur selten unter konstanten Bedingungen.

Für das lac-Operon ist einer der wichtigsten Umweltparameter die **äußere Laktosekonzentration**. Mit zunehmender verfügbarer Laktose wird die Induktion des Operons immer effizienter. Mathematisch verändert dies die Aktivierungsfunktion \(I(X)\), während die Abbaukurve weitgehend unverändert bleibt.

Die Frage lautet daher:

> **Wie verändert sich die Gleichgewichtsstruktur, wenn sich die Umwelt verändert?**

### Den Schnittpunkten folgen

Abbildung XX zeigt Aktivierungs- und Abbaukurven für verschiedene Laktosekonzentrationen.

Wenn die Laktoseverfügbarkeit sehr gering ist, schneidet die Aktivierungskurve die Abbaukurve nur einmal. Das Operon besitzt dann nur ein einziges stabiles Gleichgewicht, das dem OFF-Zustand entspricht. Unter diesen Bedingungen bleibt der Laktosestoffwechsel inaktiv, weil die energetischen Kosten der Enzymproduktion den potenziellen Nutzen übersteigen.

Wenn die Laktosekonzentration ansteigt, verschiebt sich die Aktivierungskurve allmählich.

Schließlich treten zwei zusätzliche Schnittpunkte auf. Das System besitzt nun drei Gleichgewichtspunkte.

Das untere Gleichgewicht entspricht dem inaktiven Operon.

Das obere Gleichgewicht repräsentiert das vollständig induzierte Operon.

Dazwischen liegt ein instabiles Gleichgewicht, das die beiden stabilen Expressionszustände voneinander trennt.

Das Bakterium ist nun **bistabil**.

Je nach Anfangszustand und vorheriger Geschichte kann es selbst unter identischen Umweltbedingungen im OFF- oder im ON-Zustand verbleiben.

### Das Verschwinden eines stabilen Zustands

Wenn die Laktosekonzentration weiter ansteigt, rücken das untere stabile Gleichgewicht und das instabile Gleichgewicht allmählich näher zusammen.

Bei einer kritischen Laktosekonzentration verschmelzen beide zu einem einzigen Punkt.

Jenseits dieses Punktes verschwinden sie vollständig.

Der inaktive Zustand existiert dann nicht mehr.

Das Bakterium ist somit gezwungen, in den aktiven Zustand umzuschalten, weil kein alternatives Gleichgewicht mehr vorhanden ist.

Wichtig ist: In der Umwelt selbst ist nichts Sprunghaftes geschehen.

Es hat lediglich eine allmähliche Erhöhung der Laktosekonzentration stattgefunden.

Der abrupte Übergang entsteht, weil sich **die Struktur des dynamischen Systems selbst verändert hat**.

### Ein neuer Typ von Übergang

Das Verschwinden von Gleichgewichtspunkten ist etwas grundlegend anderes als die Phänomene, die wir im vorangegangenen Kapitel betrachtet haben.

Dort haben wir Systeme analysiert, deren Gleichgewichtspunkte fest blieben.

Jetzt verändert sich dagegen die Gleichgewichtsstruktur selbst.

Stabile Zustände können entstehen.

Stabile Zustände können verschwinden.

Ihre Stabilität kann sich ändern.

Das qualitative Verhalten des gesamten Systems wird dadurch verändert.

Solche Übergänge bezeichnet man als **Bifurkationen**.

### Sattel-Knoten-Bifurkationen

Das oben diskutierte Beispiel veranschaulicht einen der häufigsten Bifurkationstypen.

Ein stabiles Gleichgewicht und ein benachbartes instabiles Gleichgewicht nähern sich an, verschmelzen und verschwinden, wenn sich ein Parameter verändert.

Dieses Phänomen nennt man eine **Sattel-Knoten-Bifurkation**.

Obwohl sie hier am lac-Operon eingeführt wurde, treten Sattel-Knoten-Bifurkationen in der gesamten Biologie auf.

Beispiele sind

- der Kollaps ökologischer Populationen,
- das Versagen physiologischer Homöostase,
- die Aktivierung von Entwicklungsprogrammen,
- Übergänge zwischen alternativen metabolischen Zuständen.

In allen Fällen ist der zugrunde liegende mathematische Mechanismus derselbe.

Eine allmähliche Veränderung eines biologischen Parameters entfernt einen zuvor stabilen Zustand und zwingt das System dadurch zu einem anderen Verhalten.

### Über das lac-Operon hinaus

Die Bedeutung der Sattel-Knoten-Bifurkation reicht weit über dieses spezielle regulatorische Netzwerk hinaus.

Das lac-Operon dient als Modellsystem, weil sein Verhalten experimentell gut verständlich ist.

Dasselbe mathematische Prinzip gilt jedoch immer dann, wenn positives Feedback alternative stabile Zustände erzeugt.

Mathematische Abstraktion erlaubt es uns also, gemeinsame Organisationsprinzipien zu erkennen, die scheinbar unverbundene biologische Systeme teilen.

Gerade darin liegt eine der größten Stärken der Systembiologie.

Anstatt jedes biologische System isoliert zu betrachten, identifizieren wir die dynamischen Prinzipien, die sie alle steuern.

### Zentrale Konzepte

- Eine Änderung eines biologischen Parameters verändert die Gleichgewichtsstruktur eines Systems.
- Das lac-Operon wird bistabil, wenn Aktivierungs- und Abbaukurve sich dreimal schneiden.
- Stabile Gleichgewichte können mit fortschreitender Parameteränderung verschwinden.
- Das Verschwinden eines stabilen Gleichgewichts zwingt das System in einen anderen Zustand.
- Dieser Prozess wird als **Sattel-Knoten-Bifurkation** bezeichnet.

### Zusammenfassung

Das Minimalmodell des lac-Operons zeigt, wie allmähliche Umweltveränderungen die Dynamik eines biologischen Systems grundlegend verändern können. Wenn sich die Laktosekonzentration ändert, ändern sich auch Zahl und Stabilität der Gleichgewichtspunkte. Bei einem kritischen Parameterwert verschmelzen ein stabiles und ein instabiles Gleichgewicht und verschwinden, wodurch das System gezwungen wird, in einen neuen physiologischen Zustand überzugehen. Diese qualitative Änderung des Systemverhaltens nennt man Sattel-Knoten-Bifurkation und sie liefert eine allgemeine Erklärung für viele biologische Schalter.

### Fragen zur Selbstkontrolle

1. Warum verändert eine steigende Laktosekonzentration die Aktivierungsfunktion?
2. Unter welchen Bedingungen wird das lac-Operon bistabil?
3. Warum erzwingt das Verschwinden eines stabilen Gleichgewichts einen biologischen Schalter?
4. Wodurch unterscheidet sich eine Sattel-Knoten-Bifurkation von gewöhnlicher Gleichgewichtsanalyse?
5. Warum ist das lac-Operon ein nützliches Modellsystem zum Verständnis biologischer Schalter?
