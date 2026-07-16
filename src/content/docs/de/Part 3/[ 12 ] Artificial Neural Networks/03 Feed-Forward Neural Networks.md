---
title: "12.3 Feed-Forward-Netzwerke"
sidebar:
  label: "12.3 Feed-Forward-Netzwerke"
  order: 3
  group: "Part 3"
  part: "Part 3"
---

# 12.3 Feed-Forward-Netzwerke

## Von biologischen zu künstlichen Neuronen

Der Name *künstliches neuronales Netz* wurde durch eines der bemerkenswertesten Informationsverarbeitungssysteme der Natur inspiriert: das Gehirn.

Das menschliche Gehirn besteht aus Milliarden miteinander verbundener Nervenzellen, den **Neuronen**, die über elektrische und chemische Signale kommunizieren. Jedes Neuron empfängt Signale vieler benachbarter Neuronen, integriert diese Information und sendet, sobald eine bestimmte Aktivierungsschwelle überschritten wird, selbst ein Signal an andere Neuronen weiter.

Künstliche neuronale Netze greifen dieses grundlegende Organisationsprinzip auf.

Sie bestehen aus vielen einfachen Recheneinheiten, den **künstlichen Neuronen**, die numerische Information austauschen. Obwohl diese künstlichen Neuronen wesentlich einfacher sind als ihre biologischen Vorbilder, sind große Netzwerke solcher Einheiten in der Lage, erstaunlich komplexe Vorhersageaufgaben zu lösen.

Wichtig ist jedoch, die Ähnlichkeit nicht zu überschätzen.

Künstliche Neuronen sind **keine realistischen Modelle biologischer Neuronen**.

Sie sind vielmehr vereinfachte mathematische Bausteine, die von der allgemeinen Idee verteilter Informationsverarbeitung inspiriert wurden.

---

## Information fließt durch Schichten

Der einfachste Typ neuronaler Netze ist das **Feed-Forward-Netzwerk**.

Der Ausdruck *feed-forward* beschreibt die Richtung, in der Information durch das Netzwerk fließt.

Ausgehend von der Eingabe bewegt sich die Information Schicht für Schicht zur Ausgabe.

Es gibt keine Schleifen und keine Rückkopplungsverbindungen.

Jede Schicht transformiert mathematisch die Information, die sie empfängt, und reicht das Ergebnis an die nächste Schicht weiter.

Ein typisches Feed-Forward-Netzwerk besteht aus drei Arten von Schichten:

- einer **Eingabeschicht**,
- einer oder mehreren **verborgenen Schichten**
- und einer **Ausgabeschicht**.

Jede dieser Schichten übernimmt eine andere Rolle in der Berechnung.

---

## Die Eingabeschicht

Die **Eingabeschicht** repräsentiert die Information, die dem Modell zur Verfügung gestellt wird.

Jedes Eingabeneuron entspricht einem numerischen Merkmal, das die biologische Beobachtung beschreibt.

Angenommen, wir möchten die subzelluläre Lokalisation von Proteinen vorhersagen.

Mögliche Eingangsmerkmale wären

- die N-terminale Ladung,
- die mittlere Hydrophobizität,
- die Aminosäurezusammensetzung,
- die Sequenzlänge
- oder experimentell gemessene biochemische Eigenschaften.

Jedes Protein wird damit durch einen Vektor numerischer Werte dargestellt.

Die Eingabeschicht führt selbst keine Berechnung durch.

Ihre einzige Aufgabe besteht darin, diese Werte in das Netzwerk weiterzugeben.

Man kann die Eingabeschicht als Schnittstelle zwischen den biologischen Daten und dem mathematischen Modell auffassen.

---

## Verborgene Schichten

Die eigentliche Rechenleistung neuronaler Netze liegt in den **verborgenen Schichten**.

Im Unterschied zur Eingabeschicht transformieren verborgene Schichten die Information, die sie empfangen.

Jedes verborgene Neuron kombiniert Signale aus der vorherigen Schicht, führt eine mathematische Berechnung durch und gibt das Ergebnis weiter.

An dieser Stelle ist die biologische Bedeutung einzelner Neuronen meist noch unbekannt.

Das Netzwerk entwickelt allmählich interne Repräsentationen, die zur Lösung der Vorhersageaufgabe beitragen.

Einige Neuronen können empfindlich für hydrophobe Aminosäureabschnitte werden.

Andere reagieren möglicherweise auf positiv geladene Sequenzmotive.

Wieder andere erkennen Kombinationen mehrerer Sequenzmerkmale, die ein menschlicher Forschender nicht leicht explizit definieren könnte.

Diese internen Repräsentationen heißen **verborgen**, weil sie nicht direkt in den Trainingsdaten beobachtet werden.

Sie entstehen automatisch während des Lernens.

Was verborgene Neuronen tatsächlich lernen, wird später in diesem Kapitel zu einer zentralen Frage werden.

---

## Die Ausgabeschicht

Die letzte Schicht des Netzwerks ist die **Ausgabeschicht**.

Ihre Aufgabe besteht darin, die von den verborgenen Schichten entwickelte interne Repräsentation in die gewünschte Vorhersage zu überführen.

Die genaue Form dieser Ausgabe hängt vom biologischen Problem ab.

Zum Beispiel kann sie

- ein einzelner numerischer Wert für die Proteinstabilität,
- die Wahrscheinlichkeit sein, dass ein Protein zum Chloroplasten gehört,
- oder ein Satz von Wahrscheinlichkeiten für mehrere mögliche subzelluläre Kompartimente.

Die internen Berechnungen verschiedener neuronaler Netze können also sehr ähnlich sein, während die Interpretation der finalen Ausgabe vollständig von der jeweiligen Vorhersageaufgabe abhängt.

Später in diesem Kapitel werden wir sehen, wie unterschiedliche Aktivierungsfunktionen derselben Netzwerkarchitektur Regression, binäre Klassifikation oder Mehrklassenklassifikation ermöglichen.

---

## Ein Netzwerk als Folge von Transformationen

Auch wenn neuronale Netze oft als hochkomplexe Systeme dargestellt werden, ist ihre Gesamtorganisation bemerkenswert einfach.

Jede Schicht erhält numerische Information aus der vorherigen Schicht.

Sie transformiert diese Information.

Die transformierten Werte werden dann an die nächste Schicht weitergegeben.

Dieser Prozess setzt sich fort, bis die Ausgabeschicht die endgültige Vorhersage erzeugt.

Mathematisch kann ein Feed-Forward-Netzwerk daher als Folge aufeinanderfolgender Transformationen verstanden werden,

$$
\text{Eingabe}
\rightarrow
\text{Verborgene Schicht 1}
\rightarrow
\text{Verborgene Schicht 2}
\rightarrow
\cdots
\rightarrow
\text{Ausgabe}.
$$

Jede Transformation extrahiert zunehmend nützliche Information aus der Eingabe.

Die bemerkenswerte Vorhersagekraft des Deep Learning entsteht nicht deshalb, weil eine einzelne Transformation besonders kompliziert wäre, sondern weil viele einfache Transformationen zu einer leistungsfähigen Rechenkette kombiniert werden.

---

## Warum Tiefe wichtig ist

Der Ausdruck **Deep Learning** bezieht sich schlicht auf neuronale Netze mit mehreren verborgenen Schichten.

Frühe neuronale Netze besaßen oft nur eine einzige verborgene Schicht.

Moderne Architekturen können Dutzende oder sogar Hunderte von Schichten enthalten.

Warum sollte das Hinzufügen weiterer Schichten die Vorhersage verbessern?

Die Antwort liegt im hierarchischen Lernen von Repräsentationen.

Die erste verborgene Schicht lernt relativ einfache Muster.

Die zweite Schicht kombiniert diese einfachen Muster zu komplexeren.

Weitere Schichten erkennen zunehmend abstrakte Strukturen.

Diese Hierarchie erinnert an viele biologische Informationsverarbeitungssysteme.

Beim Erkennen eines Protein-Targeting-Peptids könnte etwa ein Neuron zunächst hydrophobe Aminosäuren detektieren.

Ein anderes könnte positiv geladene Reste erkennen.

Höhere Schichten können diese einfachen Beobachtungen dann zu immer komplexeren Repräsentationen kombinieren, die vollständigen Targeting-Signalen entsprechen.

Jede zusätzliche Schicht erlaubt dem Netzwerk also, ausgefeiltere interne Repräsentationen aufzubauen.

Gerade diese Fähigkeit zum Lernen hierarchischer Repräsentationen ist eine der definierenden Eigenschaften des Deep Learning.

---

## Das Neuron als fundamentaler Baustein

Bisher haben wir jedes Neuron als eine geheimnisvolle Recheneinheit behandelt, die ihre Eingaben irgendwie in nützliche Ausgaben verwandelt.

Glücklicherweise ist die Mathematik hinter einem künstlichen Neuron überraschend einfach.

Jedes Neuron führt genau dieselbe Folge von Operationen aus:

1. numerische Eingaben empfangen,
2. diese Eingaben mithilfe anpassbarer Gewichte kombinieren,
3. eine gewichtete Summe berechnen,
4. eine nichtlineare Aktivierungsfunktion anwenden
5. und das Ergebnis an die nächste Schicht weitergeben.

Alles, was ein neuronales Netz leistet, vom Erkennen handgeschriebener Ziffern bis zur Vorhersage von Proteinstrukturen, beruht letztlich auf diesem einfachen Rechenprinzip, das millionenfach wiederholt wird.

Das künstliche Neuron zu verstehen, liefert daher den Schlüssel zum Verständnis des gesamten Netzwerks.

Der nächste Abschnitt betrachtet diesen grundlegenden Baustein im Detail.

---

### Konzeptionelle Zusammenfassung

Ein Feed-Forward-Netzwerk besteht aus einer Eingabeschicht, einer oder mehreren verborgenen Schichten und einer Ausgabeschicht. Die Information fließt nacheinander durch diese Schichten, wobei jede verborgene Schicht die von der vorherigen Schicht gelernte Repräsentation transformiert. Die Tiefe des Netzwerks erlaubt den Aufbau zunehmend abstrakter Merkmale und führt so zu den hierarchischen Repräsentationen, die das moderne Deep Learning kennzeichnen. Trotz ihrer scheinbaren Komplexität beruhen alle neuronalen Netze auf der wiederholten Anwendung einer bemerkenswert einfachen Recheneinheit: des künstlichen Neurons.

---

### Fragen zur Selbstkontrolle

1. Warum sind künstliche neuronale Netze nur lose von biologischen Neuronen inspiriert?
2. Was unterscheidet ein Feed-Forward-Netzwerk von anderen Architekturen neuronaler Netze?
3. Welche Aufgabe hat die Eingabeschicht?
4. Warum werden die Zwischenschichten als *verborgene* Schichten bezeichnet?
5. Wie hängt die Rolle der Ausgabeschicht von der biologischen Vorhersageaufgabe ab?
6. Warum kann ein neuronales Netz als Folge mathematischer Transformationen betrachtet werden?
7. Warum übertreffen tiefere Netzwerke oft flachere?
8. Welche Operationen führt jedes künstliche Neuron aus, bevor es Information an die nächste Schicht weitergibt?
