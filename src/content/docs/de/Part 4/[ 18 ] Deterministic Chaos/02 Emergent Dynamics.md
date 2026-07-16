---
title: "18.2 Emergende Dynamik"
sidebar:
  label: "18.2 Emergende Dynamik"
  order: 2
  group: "Part 4"
  part: "Part 4"
---

## 18.2 Emergende Dynamik

In den vorherigen Kapiteln sind uns zwei grundlegend verschiedene Formen des Langzeitverhaltens biologischer Systeme begegnet.

Manche Systeme konvergieren gegen einen **stabilen Gleichgewichtspunkt**. Nach einer anfänglichen transienten Phase nähern sich alle Zustandsvariablen konstanten Werten an und bleiben unverändert. Dieses Verhalten liegt der klassischen Homöostase und vielen regulatorischen Prozessen in der Biologie zugrunde.

Andere Systeme werden niemals stationär. Stattdessen konvergieren sie gegen eine **stabile periodische Oszillation**, einen sogenannten **Grenzzyklus**. Obwohl sich die Zustandsvariablen fortlaufend ändern, wiederholt sich das Gesamtmuster unbegrenzt. Solche oszillatorischen Gleichgewichte bilden die Grundlage biologischer Rhythmen, von Hormonsekretion bis hin zu zirkadianen Uhren.

Auf den ersten Blick wirken diese beiden Verhaltensweisen sehr unterschiedlich. Dennoch teilen sie eine wichtige Eigenschaft.

Beide sind **vorhersagbar**.

Sobald die transienten Dynamiken abgeklungen sind, wissen wir genau, wie sich das System verhalten wird. Ein Punktattraktor konvergiert immer gegen dasselbe Gleichgewicht, während ein Grenzzyklus immer wieder dieselbe periodische Trajektorie durchläuft.

Chaos führt nun eine dritte Möglichkeit ein.

### Emergendes Verhalten

Eine der zentralen Lehren der Systembiologie lautet, dass sich das Verhalten eines biologischen Systems nicht immer verstehen lässt, indem man seine einzelnen Komponenten isoliert betrachtet.

Zu wissen, dass ein Netzwerk Gene, Proteine, Enzyme oder Signalmoleküle enthält, verrät noch nicht unmittelbar, wie sich das Gesamtsystem verhält.

Vielmehr entsteht die globale Dynamik **emergent** aus den Wechselwirkungen zwischen diesen Komponenten.

Dieselbe Netzwerkarchitektur kann daher je nach Parameterwerten grundlegend unterschiedliches Verhalten erzeugen.

Kleine Änderungen in Reaktionsraten, Wechselwirkungsstärken oder Rückkopplungsmechanismen können ein System von einem Betriebsmodus in einen anderen überführen.

Dieses Phänomen nennt man **Emergenz**.

Das kollektive Verhalten des Systems ist in keiner einzelnen Komponente explizit programmiert, sondern entsteht aus ihrem Zusammenspiel.

### Drei fundamentale Attraktoren

Aus der Perspektive dynamischer Systeme sind uns nun drei grundlegend verschiedene Attraktoren begegnet.

**Punktattraktoren** repräsentieren stabile stationäre Zustände.

Jede Trajektorie konvergiert schließlich gegen dasselbe Gleichgewicht.

Diese Attraktoren beschreiben Systeme, die Homöostase zeigen.

**Grenzzyklusattraktoren** repräsentieren stabile periodische Bewegung.

Trajektorien konvergieren gegen eine geschlossene Umlaufbahn und durchlaufen sie unbegrenzt weiter.

Diese Attraktoren beschreiben biologische Oszillatoren.

Die dritte Klasse bilden **chaotische Attraktoren**.

Im Unterschied zu Punktattraktoren oder Grenzzyklen wiederholen sich chaotische Attraktoren nie exakt.

Trajektorien bleiben auf einen endlichen Bereich des Zustandsraums beschränkt, folgen dort jedoch hochgradig irregulären Bahnen, die beinahe zufällig wirken.

Trotz dieser scheinbaren Unregelmäßigkeit werden sie weiterhin von vollständig deterministischen Gleichungen erzeugt.

### Vergleich der drei Attraktoren

Die drei Attraktortypen lassen sich als unterschiedliche Formen langfristiger Stabilität verstehen.

| Attraktor | Langzeitverhalten | Vorhersagbarkeit |
|-----------|-------------------|------------------|
| Punktattraktor | Konstantes Gleichgewicht | Hoch |
| Grenzzyklus | Periodische Oszillation | Hoch |
| Chaotischer Attraktor | Aperiodische Bewegung | Begrenzt |

Alle drei repräsentieren stabile Langzeitlösungen nichtlinearer dynamischer Systeme.

Der entscheidende Unterschied liegt darin, **wie viel Information über die Zukunft sich aus dem aktuellen Zustand des Systems gewinnen lässt**.

Bei Punktattraktoren und Grenzzyklen ist langfristige Vorhersage unkompliziert.

Bei chaotischen Attraktoren wird Vorhersage dagegen zunehmend schwierig, weil kleinste Unsicherheiten fortlaufend verstärkt werden.

### Dynamik wird durch Parameter gesteuert

Ein zentrales Thema dieses Buches ist, dass das qualitative Verhalten eines Systems oft nur durch wenige Parameter gesteuert wird.

In Kapitel 15 führte die Veränderung eines Kontrollparameters zu einer **Sattel-Knoten-Bifurkation**, bei der stabile Gleichgewichte entstanden oder verschwanden.

In Kapitel 16 erzeugte die Änderung eines Kontrollparameters eine **Hopf-Bifurkation**, bei der ein stabiles Gleichgewicht durch eine stabile Oszillation ersetzt wurde.

Wie wir in diesem Kapitel sehen werden, können weitere Änderungen eines Kontrollparameters schließlich sogar regelmäßige Oszillationen destabilisieren und deterministisches Chaos hervorbringen.

Die bemerkenswerte Konsequenz lautet: Ein biologisches System besitzt nicht nur ein einziges festes Verhalten.

Stattdessen kann es je nach den Werten weniger Kontrollparameter in vollkommen unterschiedlichen dynamischen Regimen arbeiten.

Diese Übergänge zu verstehen, gehört zu den wichtigsten Zielen nichtlinearer Systembiologie.

### Ausblick

Bevor wir untersuchen, wie chaotisches Verhalten entsteht, müssen wir zunächst eine grundlegendere Frage beantworten:

> **Was genau ist Chaos?**

Obwohl chaotische Systeme zufällig wirken, unterscheiden sie sich tiefgreifend von tatsächlich zufälligen Prozessen.

Diese Unterscheidung ist wesentlich, weil deterministisches Chaos oft mit stochastischem Rauschen verwechselt wird.

Im nächsten Abschnitt entwickeln wir daher eine präzise Definition von Chaos und identifizieren die Eigenschaften, durch die sich chaotische Dynamik sowohl von periodischem Verhalten als auch von echter Zufälligkeit unterscheidet.

### Zentrale Konzepte

- Das Verhalten biologischer Systeme entsteht emergent aus den Wechselwirkungen ihrer Komponenten.
- Unterschiedliche Parameterwerte können qualitativ unterschiedliche dynamische Regime hervorbringen.
- Punktattraktoren, Grenzzyklen und chaotische Attraktoren repräsentieren drei grundlegende Formen von Langzeitverhalten.
- Chaotische Attraktoren bleiben trotz ihres irregulären Erscheinungsbildes deterministisch.
- Kontrollparameter entscheiden darüber, welcher Attraktor die Systemdynamik bestimmt.

### Zusammenfassung

Biologische Systeme zeigen mehrere unterschiedliche Formen des Langzeitverhaltens. Stabile Gleichgewichte und stabile Oszillationen entsprechen vorhersagbaren Betriebsmodi, die durch Punktattraktoren und Grenzzyklen beschrieben werden. Chaotische Systeme führen eine dritte Möglichkeit ein: deterministische, aber irreguläre Dynamik, die auf einen begrenzten Bereich des Zustandsraums beschränkt bleibt. Welche dieser Verhaltensweisen entsteht, hängt vom Interaktionsnetzwerk und den Werten weniger Kontrollparameter ab.

### Verständnisfragen

1. Was bedeutet emergentes Verhalten in der Systembiologie?
2. Warum kann dasselbe biologische Netzwerk unterschiedliche dynamische Verhaltensweisen zeigen?
3. Welche drei Hauptklassen von Attraktoren wurden bisher eingeführt?
4. Welche Attraktoren führen zu langfristig vorhersagbarem Verhalten?
5. Warum gilt ein chaotischer Attraktor trotz seines irregulären Erscheinungsbildes als deterministisch?
6. Welche Rolle spielen Kontrollparameter bei der Bestimmung des Systemverhaltens?
