---
title: "17.4 Biologische Oszillatoren: Negative Rückkopplung als treibende Kraft"
sidebar:
  label: "17.4 Biologische Oszillatoren: Negative Rückkopplung als treibende Kraft"
  order: 4
  group: "Part 4"
  part: "Part 4"
---

## 17.4 Biologische Oszillatoren: Negative Rückkopplung als treibende Kraft

Der Rayleigh-Oszillator hat gezeigt, dass stabile Oszillationen zwei wesentliche Bestandteile benötigen: einen Mechanismus, der periodische Bewegung erzeugt, und einen Mechanismus, der deren Amplitude stabilisiert.

Biologische Systeme enthalten natürlich weder Federn noch Luftströme. Stattdessen beruhen sie auf regulatorischen Netzwerken aus Genen, Proteinen, Metaboliten und Signalmolekülen.

Damit stellt sich eine wichtige Frage:

> **Welche biologischen Mechanismen übernehmen die Rolle der nichtlinearen Reibung im Rayleigh-Oszillator?**

Die Antwort ist überraschend einfach.

Stabile biologische Oszillationen werden fast immer durch **negative Rückkopplungsschleifen** erzeugt.

Allerdings oszilliert nicht jede negative Rückkopplungsschleife. Die meisten biologischen Rückkopplungssysteme erzeugen stabile Homöostase. Zu verstehen, warum manche stationär bleiben und andere oszillieren, ist eine der zentralen Fragen der Systembiologie.

In diesem Abschnitt untersuchen wir eines der bekanntesten Beispiele biologischer Oszillationen: die hormonelle Regulation der Hypothalamus-Hypophysen-Gonaden-Achse (HPG-Achse).

### Die Hypothalamus-Hypophysen-Gonaden-Achse

Die HPG-Achse steuert die Reproduktionsphysiologie von Wirbeltieren über das Zusammenspiel dreier endokriner Organe:

- des **Hypothalamus**,
- der **Hypophyse**
- und der **Gonaden**.

Der Hypothalamus sezerniert das Gonadotropin-Releasing-Hormon (GnRH), das die Hypophyse stimuliert.

Die Hypophyse setzt luteinisierendes Hormon (LH) und follikelstimulierendes Hormon (FSH) frei, die wiederum die Gonaden stimulieren.

Die Gonaden produzieren schließlich Sexualhormone wie Testosteron, Estradiol oder Progesteron.

Diese Hormone hemmen die Hormonfreisetzung aus dem Hypothalamus und schließen damit die Regulationsschleife.

Die Gesamtarchitektur besteht daher aus zwei positiven regulatorischen Wechselwirkungen, auf die eine negative Wechselwirkung folgt, und bildet damit eine klassische negative Rückkopplungsschleife.

### Das Modell aufbauen

Wie in den vorherigen Kapiteln beginnen wir damit, das einfachste Modell zu konstruieren, das die wesentlichen biologischen Wechselwirkungen erfasst.

Um unnötige biologische Komplexität zu vermeiden, repräsentieren wir jedes endokrine Organ durch eine einzelne Variable:

- \(H\): Hormonkonzentration, die vom Hypothalamus freigesetzt wird,
- \(P\): Hormonkonzentration, die von der Hypophyse freigesetzt wird,
- \(G\): Hormonkonzentration, die von den Gonaden freigesetzt wird.

Die stimulierenden Wechselwirkungen werden als proportional zur Konzentration des jeweils vorgelagerten Hormons angenommen.

Jedes Hormon wird zudem kontinuierlich abgebaut.

Die Dynamik von Hypophyse und Gonaden kann daher geschrieben werden als

$$
P' = H-k_1P
$$

und

$$
G' = P-k_2G.
$$

Diese Gleichungen sollten uns inzwischen vertraut vorkommen.

Sie besitzen genau dieselbe Struktur wie viele der dynamischen Modelle, die wir im Verlauf dieses Buches entwickelt haben: Produktion erhöht eine Variable, während Abbau sie wieder verringert.

Der interessante Teil des Modells ist die negative Rückkopplung, die auf den Hypothalamus wirkt.

### Zwei verschiedene Arten negativer Rückkopplung

Auf den ersten Blick könnte es naheliegend erscheinen, die Hemmung einfach durch Subtraktion der Gonadenhormonkonzentration zu modellieren.

Biologisch wäre das jedoch nicht angemessen.

Deshalb ist es hilfreich, zwischen zwei grundlegend verschiedenen Formen negativer Rückkopplung zu unterscheiden.

Der erste Typ ist **Konzentrationsrückkopplung**.

Dabei entfernt oder abbaut eine molekulare Spezies direkt eine andere.

Beispiele dafür sind enzymatischer Abbau, molekulare Sequestrierung oder Proteinabbau.

Hier wirkt die Rückkopplung unmittelbar auf die Konzentration eines Moleküls.

Der zweite Typ ist **Rückkopplung über die Änderungsrate**.

In der endokrinen Regulation entfernen die Gonadenhormone die GnRH-Moleküle nicht direkt aus dem Blutkreislauf.

Stattdessen verringern sie die **Rate, mit der der Hypothalamus neues Hormon produziert**.

Die Rückkopplung verändert also die Produktionsrate und nicht die Konzentration selbst.

Dieser Unterschied ist subtil, aber außerordentlich wichtig.

Die eine Form der Rückkopplung verändert eine Zustandsvariable direkt, die andere modifiziert die Differentialgleichung, welche ihre Dynamik beschreibt.

Diese Unterscheidung zu erkennen, ist eine wichtige Modellierungskompetenz, weil viele biologische Regulationssysteme über Änderungen von Produktionsraten und nicht über die direkte Entfernung von Molekülen funktionieren.

### Eine geeignete mathematische Funktion wählen

Erneut stoßen wir auf ein wiederkehrendes Modellierungsproblem.

Wir verstehen den biologischen Mechanismus qualitativ, müssen ihn aber noch in Mathematik übersetzen.

Wie soll die Hemmung von der Hormonkonzentration abhängen?

Anstatt sofort nach einer Gleichung zu suchen, fragen wir zunächst, welche biologischen Eigenschaften die Funktion besitzen sollte.

Die Funktion sollte

- mit zunehmender Inhibitorkonzentration kontinuierlich abnehmen,
- niemals negativ werden,
- sich bei sehr großen Konzentrationen einer Sättigung annähern
- und es erlauben, die Steilheit der Antwort gezielt zu verändern.

Beachten Sie, dass wir die Funktion nicht deshalb wählen, weil sie mathematisch bequem ist.

Wir wählen sie vielmehr so, dass ihr qualitatives Verhalten zu unserem biologischen Wissen passt.

Eine fallende sigmoide Funktion erfüllt all diese Anforderungen auf natürliche Weise.

Daran zeigt sich ein wichtiges allgemeines Prinzip, das uns in diesem Buch immer wieder begegnen wird:

> **Mathematische Funktionen werden gewählt, weil sie biologische Annahmen codieren.**

Unterschiedliche biologische Annahmen erfordern unterschiedliche mathematische Funktionen.

Die Mathematik ist daher nicht willkürlich, sondern eine formale Sprache zur Darstellung biologischen Wissens.

### Sensitivität als Modellparameter

Eine besonders wichtige Eigenschaft der sigmoiden Rückkopplungsfunktion ist ihre **Steilheit**.

Eine flache Kurve erzeugt nur eine schwache Reaktion auf Änderungen der Hormonkonzentration.

Der Regler reagiert allmählich.

Eine steile Kurve verhält sich ganz anders.

Schon eine kleine Änderung der Hormonkonzentration führt dann zu einer großen Änderung der regulatorischen Aktivität.

Mit anderen Worten: Der Regler wird hochsensitiv.

Mathematisch wird diese Sensitivität durch einen einzelnen Parameter gesteuert, der häufig durch den Exponenten \(n\) dargestellt wird.

Anstatt eine spezifische biochemische Größe zu repräsentieren, fasst \(n\) zusammen, wie stark das Regulationssystem Abweichungen von seinem Arbeitspunkt verstärkt.

Wie wir im nächsten Abschnitt sehen werden, entscheidet gerade dieser scheinbar einfache Parameter darüber, ob das gesamte System gegen ein stabiles Gleichgewicht konvergiert oder anhaltende Oszillationen entwickelt.

### Zentrale Konzepte

- Stabile biologische Oszillatoren beruhen typischerweise auf negativen Rückkopplungsschleifen.
- Die HPG-Achse ist ein klassisches Beispiel für ein oszillatorisches endokrines Rückkopplungssystem.
- Mathematische Modelle beginnen mit qualitativen biologischen Annahmen.
- Negative Rückkopplung kann auf Konzentrationen oder auf Produktionsraten wirken.
- Biologische Annahmen bestimmen die mathematischen Funktionen, die in einem Modell verwendet werden.
- Die Rückkopplungssensitivität wird durch die Steilheit der regulatorischen Funktion kontrolliert.

### Zusammenfassung

Die HPG-Achse zeigt exemplarisch, wie sich biologische Oszillatoren mithilfe negativer Rückkopplung modellieren lassen. Der Aufbau eines solchen Modells beginnt damit, die zugrunde liegenden biologischen Wechselwirkungen zu identifizieren und in mathematische Beziehungen zu übersetzen. Ein wichtiges Modellierungsprinzip besteht darin, dass mathematische Funktionen ausgewählt werden, weil sie bestimmte biologische Annahmen ausdrücken. In der endokrinen Regulation wirkt negative Rückkopplung vor allem durch die Veränderung von Produktionsraten und nicht durch die direkte Entfernung von Molekülen. Die Sensitivität dieser Rückkopplung wird sich als entscheidender Faktor für oszillatorisches Verhalten erweisen.

### Verständnisfragen

1. Warum ist die HPG-Achse eine negative Rückkopplungsschleife?
2. Warum wird jedes endokrine Organ im Modell durch eine einzelne Variable dargestellt?
3. Worin besteht der Unterschied zwischen Konzentrationsrückkopplung und Rückkopplung über die Änderungsrate?
4. Warum ist eine fallende sigmoide Funktion ein geeignetes Modell für hormonelle Hemmung?
5. Warum sollten mathematische Funktionen aus biologischen Eigenschaften und nicht aus mathematischer Bequemlichkeit gewählt werden?
6. Welche biologische Eigenschaft wird durch die Steilheit der Rückkopplungsfunktion repräsentiert?
