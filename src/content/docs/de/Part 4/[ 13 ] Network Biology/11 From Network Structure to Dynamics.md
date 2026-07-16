---
title: "13.11 Von Netzwerkstruktur zu Systemdynamik"
sidebar:
  label: "13.11 Von Netzwerkstruktur zu Systemdynamik"
  order: 11
  group: "Part 4"
  part: "Part 4"
---

## 13.11 Von Netzwerkstruktur zu Systemdynamik

In diesem Kapitel haben wir biologische Systeme als Netzwerke dargestellt. Diese Perspektive hat es uns ermöglicht, Hubs, Module, Kommunikationswege und wiederkehrende regulatorische Motive zu identifizieren. Die Netzwerkanalyse hat gezeigt, dass biologische Systeme hochorganisiert und nicht zufällig zusammengesetzt sind und dass diese Organisation grundlegende biologische Prinzipien widerspiegelt, die durch die Evolution geprägt wurden.

Eine wichtige Frage bleibt jedoch offen.

Zu wissen, **wer mit wem interagiert**, erklärt nicht notwendigerweise, **was das System tatsächlich tut**.

### Lernziele

Nach der Bearbeitung dieses Kapitels sollten Sie in der Lage sein,

- die Grenzen rein struktureller Netzwerkanalyse zu erläutern,
- zwischen Netzwerktopologie und Systemdynamik zu unterscheiden,
- zu verstehen, warum biologische Wechselwirkungen quantitative Modelle erfordern,
- die Rolle dynamischer Systeme in der Systembiologie einzuordnen,
- den Übergang von der Netzwerkbiologie zur mathematischen Modellierung zu verstehen.

### Netzwerke beschreiben Möglichkeiten

Ein Netzwerk sagt uns, welche Wechselwirkungen möglich sind.

Wenn zwei Proteine in einem Protein-Interaktionsnetzwerk verbunden sind, dann sind sie grundsätzlich in der Lage, miteinander zu interagieren.

Wenn zwei Metabolite in einem metabolischen Netzwerk verbunden sind, kann das eine in das andere umgewandelt werden.

Wenn ein Transkriptionsfaktor ein Gen reguliert, kann Information zwischen beiden fließen.

Die Netzwerktopologie definiert also die **Architektur** des Systems.

Sie beantwortet Fragen wie

- Welche Komponenten sind miteinander verbunden?
- Welche Wege existieren?
- Welche Proteine wirken als Hubs?
- Welche Module kooperieren?

Diese Fragen sind wichtig, weil die Netzwerkarchitektur das Verhalten des Systems einschränkt und strukturiert.

Dennoch bestimmt Topologie das Verhalten nicht vollständig.

### Dasselbe Netzwerk kann sich sehr unterschiedlich verhalten

Betrachten wir eine einfache regulatorische Wechselwirkung.

Gen A aktiviert Gen B.

Diese Beziehung kann viele verschiedene Verhaltensweisen hervorbringen.

Gen B kann sofort reagieren.

Es kann erst nach einer Verzögerung reagieren.

Es kann schwach oder stark reagieren.

Es kann erst oberhalb eines bestimmten Schwellenwerts aktiv werden.

Es kann sogar oszillieren, wenn zusätzliche regulatorische Mechanismen vorhanden sind.

Das Netzwerk selbst enthält diese Information nicht.

Der Graph sagt uns **dass** eine Wechselwirkung existiert.

Er sagt uns nicht, **wie stark**, **wie schnell** oder **unter welchen Bedingungen** diese Wechselwirkung wirksam wird.

Das Verhalten des Systems hängt daher nicht nur von der Netzwerkstruktur ab, sondern ebenso von der Dynamik seiner Wechselwirkungen.

### Biologische Systeme verändern sich über die Zeit

Lebende Systeme sind dynamisch.

Genexpression verändert sich fortlaufend.

Proteinkonzentrationen steigen und fallen.

Metabolite werden produziert und verbraucht.

Zellen reagieren auf Umweltsignale, passen sich an Stress an, teilen sich, differenzieren und sterben schließlich.

Der Zustand eines biologischen Systems ist daher niemals fest.

Er entwickelt sich vielmehr im Zeitverlauf.

Um diese zeitlichen Veränderungen zu beschreiben, braucht es einen anderen Modelltyp als eine statische Netzwerkdarstellung.

### Von Topologie zu Dynamik

Der Übergang von der Netzwerkbiologie zu dynamischen Systemen lässt sich mit einer einfachen Analogie verstehen.

Eine Straßenkarte beschreibt, welche Städte durch Straßen miteinander verbunden sind.

Sie beschreibt aber nicht den Verkehr.

Der Verkehr hängt ab von

- der Zahl der Fahrzeuge,
- der Fahrgeschwindigkeit,
- Ampeln,
- dem Zustand der Straßen,
- der Tageszeit.

In ähnlicher Weise spezifiziert ein biologisches Netzwerk, welche molekularen Wechselwirkungen möglich sind.

Das tatsächliche Verhalten hängt dagegen ab von

- molekularen Konzentrationen,
- Reaktionsraten,
- regulatorischen Stärken,
- Verzögerungen,
- nichtlinearen Antworten,
- stochastischen Fluktuationen.

Die Netzwerktopologie liefert den Rahmen.

Die Dynamik bestimmt, wie sich das System innerhalb dieses Rahmens verhält.

### Warum mathematische Modelle notwendig sind

Um biologische Dynamik zu verstehen, müssen wir über statische Graphen hinausgehen.

Anstatt zu fragen

> *Welche Komponenten interagieren?*

fragen wir nun

> *Wie verändert sich der Zustand des Systems im Zeitverlauf?*

Um diese Frage zu beantworten, benötigen wir mathematische Modelle, die kontinuierliche Veränderung beschreiben können.

Je nach biologischer Problemstellung können diese Modelle sehr unterschiedliche Formen annehmen.

Beispiele sind

- gewöhnliche Differentialgleichungen,
- stochastische Modelle,
- Boolesche Netzwerke,
- agentenbasierte Modelle,
- hybride Modelle.

All diese Ansätze verfolgen ein gemeinsames Ziel:

zu beschreiben, wie sich biologische Systeme im Zeitverlauf entwickeln.

### Der nächste Schritt in der Systembiologie

Die Netzwerkbiologie liefert die strukturelle Grundlage der Systembiologie.

Sie identifiziert die Komponenten eines Systems, rekonstruiert ihre Wechselwirkungen und macht die Organisationsprinzipien biologischer Netzwerke sichtbar.

Die dynamische Systembiologie baut auf diesem Fundament auf.

Anstatt nur die Architektur zu untersuchen, analysiert sie, wie sich biologische Zustände verändern, wie regulatorische Schaltkreise Verhalten erzeugen und wie komplexe Dynamik aus miteinander interagierenden Komponenten entsteht.

Netzwerkbiologie und dynamische Modellierung liefern damit komplementäre Perspektiven auf lebende Systeme.

Die eine erklärt uns, **wie das System organisiert ist**.

Die andere erklärt, **wie sich das System verhält**.

> **Kernaussage**
>
> Netzwerke beschreiben die Architektur biologischer Systeme. Dynamische Modelle erklären, wie aus dieser Architektur biologisches Verhalten hervorgeht.

### Zentrale Konzepte

- Netzwerke beschreiben Interaktionsstruktur, aber nicht Systemverhalten.
- Biologische Systeme sind dynamisch und verändern sich kontinuierlich über die Zeit.
- Netzwerktopologie schränkt biologische Dynamik ein, bestimmt sie aber nicht vollständig.
- Zur Beschreibung zeitlicher Veränderungen sind mathematische Modelle erforderlich.
- Die dynamische Systembiologie erweitert die Netzwerkbiologie, indem sie biologisches Verhalten im Zeitverlauf modelliert.

### Zusammenfassung

Die Netzwerkbiologie liefert einen leistungsfähigen Rahmen, um die Interaktionsstruktur biologischer Systeme darzustellen und zu analysieren. Struktur allein reicht jedoch nicht aus, um biologisches Verhalten zu erklären. Lebende Systeme verändern sich fortlaufend über die Zeit, und das Verständnis dieser Veränderungen erfordert dynamische mathematische Modelle. Der nächste Teil dieses Buches führt in solche Modelle ein und untersucht, wie biologisches Verhalten aus miteinander interagierenden molekularen Netzwerken entsteht.

### Fragen zur Selbstkontrolle

1. Welche Information ist in einem biologischen Netzwerk enthalten?
2. Warum reicht Netzwerktopologie allein nicht aus, um biologisches Verhalten vorherzusagen?
3. Warum können identische Netzwerkstrukturen unterschiedliche Dynamiken zeigen?
4. Welche biologischen Größen verändern sich über die Zeit?
5. Warum sind mathematische Modelle erforderlich, um biologische Dynamik zu untersuchen?
6. Wie ergänzen sich Netzwerkbiologie und dynamische Systembiologie?
