---
title: "17.8 Oszillationen in der gesamten Biologie"
sidebar:
  label: "17.8 Oszillationen in der gesamten Biologie"
  order: 8
  group: "Part 4"
  part: "Part 4"
---

## 17.8 Oszillationen in der gesamten Biologie

Die vorherigen Abschnitte haben zwei universelle Mechanismen eingeführt, die stabile Oszillationen erzeugen:

- hochsensitive negative Rückkopplung
- und verzögerte negative Rückkopplung.

Obwohl diese Mechanismen anhand relativ einfacher Modelle entwickelt wurden, lassen sie sich erstaunlich gut auf viele Bereiche der Biologie übertragen. Hat man diese Prinzipien einmal verstanden, lässt sich oszillatorisches Verhalten oft als natürliche Folge der zugrunde liegenden Regulationsarchitektur interpretieren und nicht als isoliertes biologisches Einzelphänomen.

In diesem Abschnitt greifen wir einige biologische Beispiele erneut auf und deuten sie aus der Perspektive dynamischer Systeme.

### Tremor: Wenn motorische Kontrolle oszillatorisch wird

Auch die Aufrechterhaltung einer stabilen Körperhaltung ist ein Beispiel negativer Rückkopplungsregulation.

Das Nervensystem misst die Muskellänge kontinuierlich mithilfe von Dehnungsrezeptoren. Diese sensorischen Signale werden an Rückenmark und Gehirn weitergeleitet, dort verarbeitet und in motorische Kommandos umgesetzt, die die Muskelkontraktion anpassen. Zusammen bildet dies eine klassische negative Rückkopplungsschleife.

Unter normalen Bedingungen stabilisiert dieser Regler die Position einer Extremität. Kleine Störungen werden glatt korrigiert, sodass wir die Hand ruhig halten oder eine konstante Haltung beibehalten können.

Bei bestimmten neurologischen Erkrankungen geht dieses stabile Gleichgewicht jedoch verloren und wird durch rhythmische Oszillationen ersetzt, die wir als **Tremor** bezeichnen.

Aus Sicht dynamischer Systeme sind Tremoren keine zufälligen Fluktuationen. Sie stellen einen Übergang von einem stabilen Punktattraktor zu einem stabilen Grenzzyklus dar.

### Multiple Sklerose: Die Zeitverzögerung nimmt zu

Ein charakteristisches Symptom der Multiplen Sklerose ist Tremor.

Die Erkrankung schädigt die Myelinscheide, die Nervenfasern umgibt, und verringert dadurch die Geschwindigkeit, mit der elektrische Signale sich im Nervensystem ausbreiten.

Aus Modellierungssicht verändert das die Struktur der Rückkopplungsschleife nicht grundsätzlich.

Stattdessen erhöht es die **Signalübertragungsverzögerung**.

Der Regler erhält sensorische Information also später als zuvor.

Wie wir aus dem respiratorischen Modell gelernt haben, destabilisieren hinreichend große Verzögerungen einen homöostatischen Regler und erzeugen auf natürliche Weise anhaltende Oszillationen.

Die mathematische Interpretation ist daher unmittelbar:

> Die Demyelinisierung erhöht die effektive Verzögerung der Rückkopplungsschleife und drängt das System in Richtung einer Hopf-Bifurkation.

### Schlaganfall: Die Rückkopplungssensitivität nimmt zu

Tremoren können auch nach einem Schlaganfall auftreten.

Hier ist der Mechanismus jedoch ein ganz anderer.

Unter normalen physiologischen Bedingungen modulieren und dämpfen höhere Hirnzentren fortlaufend viele spinale Reflexe. Diese absteigende Hemmung verhindert übermäßige Reflexantworten.

Nach bestimmten Schlaganfällen geht ein Teil dieser hemmenden Kontrolle verloren.

Die verbleibenden spinalen Reflexe werden dadurch **überempfindlich**.

In der Sprache unserer Modelle bedeutet das, dass die Rückkopplungssensitivität zugenommen hat.

Der Regler reagiert nun zu stark auf kleine Abweichungen, überschießt den Gleichgewichtszustand wiederholt und erzeugt anhaltende Oszillationen.

Obwohl sich die biologische Ursache vollständig von der Multiplen Sklerose unterscheidet, ist die mathematische Interpretation dieselbe.

Wieder nähert sich das System einer Hopf-Bifurkation.

### Oszillatorische Genexpression

Oszillatorisches Verhalten ist nicht auf die Physiologie beschränkt.

Viele Entwicklungsprozesse beruhen auf rhythmischer Genexpression.

Eines der bekanntesten Beispiele ist der **Transkriptionsfaktor Hes1**, dessen Expression während der Embryonalentwicklung von Wirbeltieren oszilliert. Hes1 reprimiert seine eigene Transkription über eine negative Rückkopplungsschleife und erzeugt dadurch wiederholte Zyklen der mRNA- und Proteinproduktion.

Interessanterweise zeigten frühe mathematische Modelle, dass eine einfache Rückkopplungsschleife aus zwei Komponenten nicht ausreichte, um die experimentell beobachteten Oszillationen zu reproduzieren.

Die Einführung einer zusätzlichen Wechselwirkungskomponente oder äquivalent dazu einer zusätzlichen Verzögerung innerhalb des regulatorischen Netzwerks genügte, um anhaltendes oszillatorisches Verhalten zu erzeugen.

Daran zeigt sich eine wichtige Einsicht:

Mathematische Modellierung dient nicht nur dazu, Beobachtungen nachzubilden.

Vielmehr helfen Modelle dabei zu identifizieren, welche biologischen Mechanismen vorhanden sein müssen, damit die beobachtete Dynamik überhaupt entstehen kann.

Im Fall von Hes1 deutete das Modell also auf zusätzliche regulatorische Prozesse hin, noch bevor diese experimentell vollständig charakterisiert waren.

### Zirkadiane Rhythmen

Die wohl bekanntesten biologischen Oszillatoren sind die **zirkadianen Uhren**, die physiologische Prozesse mit dem 24-Stunden-Tag-Nacht-Zyklus synchronisieren.

Zirkadiane Oszillatoren beruhen auf miteinander gekoppelten Rückkopplungsschleifen der Transkription und Translation, an denen mehrere Gene und Proteine beteiligt sind.

Obwohl diese molekularen Netzwerke weit komplexer sind als die einfachen Beispiele dieses Kapitels, beruhen sie auf genau denselben Grundprinzipien:

- negative Rückkopplung
- nichtlineare Regulation
- und intrinsische Verzögerungen, die durch Transkription, Translation, Proteintransport und Abbau entstehen.

Die molekulare Netzwerkarchitektur wird komplexer, doch die zugrunde liegenden dynamischen Prinzipien bleiben bemerkenswert ähnlich.

### Eine mathematische Sprache für viele biologische Systeme

Diese Beispiele veranschaulichen einen zentralen Gedanken der Systembiologie.

Sehr unterschiedliche biologische Systeme,

- endokrine Regulation
- respiratorische Kontrolle
- motorische Kontrolle
- Genregulation
- und zirkadiane Uhren,

erscheinen aus rein molekularer Perspektive zunächst unverbunden.

Werden sie jedoch als dynamische Systeme dargestellt, zeigen sie oft dieselbe mathematische Struktur.

Negative Rückkopplung erzeugt Stabilität.

Erhöhte Sensitivität oder eingeführte Verzögerungen destabilisieren das Gleichgewicht.

Eine Hopf-Bifurkation erzeugt einen stabilen Grenzzyklus.

Diese gemeinsamen Prinzipien zu erkennen, erlaubt es uns, Einsichten von einem biologischen System auf ein anderes zu übertragen und Verbindungen sichtbar zu machen, die aus biologischen Beobachtungen allein kaum zu erkennen wären.

Gerade diese Fähigkeit, universelle Prinzipien offenzulegen, gehört zu den größten Stärken mathematischer Modellierung in der Biologie.

### Zentrale Konzepte

- Oszillatorisches Verhalten tritt auf vielen Ebenen biologischer Organisation auf.
- Tremoren können sowohl aus erhöhter Rückkopplungsverzögerung als auch aus erhöhter Rückkopplungssensitivität entstehen.
- Unterschiedliche biologische Mechanismen können dieselbe mathematische Dynamik erzeugen.
- Oszillatorische Genexpression entsteht aus verzögerter negativer Rückkopplung.
- Zirkadiane Uhren sind komplexe biologische Oszillatoren, die auf denselben Grundprinzipien beruhen.
- Mathematische Modelle machen gemeinsame dynamische Strukturen in scheinbar unabhängigen biologischen Systemen sichtbar.

### Zusammenfassung

Oszillationen finden sich in der gesamten Biologie, von physiologischer Regulation über Genexpression bis zu Entwicklungsprozessen. Trotz ihrer biologischen Vielfalt beruhen diese Systeme häufig auf denselben dynamischen Grundmechanismen. Erhöhte Rückkopplungssensitivität und verzögerte Rückkopplung treten immer wieder als universelle Ursachen anhaltender Oszillationen auf. Damit zeigen mathematische Modelle, dass es gemeinsame Prinzipien gibt, die über einzelne biologische Systeme hinausreichen.

### Verständnisfragen

1. Warum können Tremoren als stabile Oszillationen und nicht als zufällige Fluktuationen interpretiert werden?
2. Wie erhöht Multiple Sklerose die Wahrscheinlichkeit oszillatorischen Verhaltens?
3. Warum können nach einem Schlaganfall auftretende Tremoren als Zunahme der Rückkopplungssensitivität interpretiert werden?
4. Warum war in frühen Hes1-Modellen eine zusätzliche regulatorische Komponente erforderlich?
5. Welche gemeinsamen dynamischen Prinzipien liegen endokriner Regulation, respiratorischer Kontrolle und zirkadianen Uhren zugrunde?
6. Warum sind mathematische Modelle nützlich, um scheinbar unabhängige biologische Systeme miteinander zu vergleichen?
