---
title: "16.1 Zustandsvariablen und Parameter"
sidebar:
  label: "16.1 Zustandsvariablen und Parameter"
  order: 1
  group: "Part 4"
  part: "Part 4"
---

## 16.1 Zustandsvariablen und Parameter

In den vorangegangenen Kapiteln haben wir biologische Systeme mithilfe von **Zustandsvariablen** beschrieben, etwa Proteinkonzentrationen, Populationsgrößen oder Metabolitmengen. Diese Variablen veränderten sich kontinuierlich über die Zeit, während das System sich entsprechend seinen zugrunde liegenden biologischen Wechselwirkungen entwickelte.

Während dieser Analyse blieb jedoch ein wichtiger Aspekt unverändert. Die biologischen Regeln, die das System bestimmen, also Syntheseraten, Abbauraten, Reaktionskonstanten oder Umweltbedingungen, änderten sich nicht. Solche Größen nennt man **Parameter**.

Den Unterschied zwischen Zustandsvariablen und Parametern zu verstehen ist essenziell, weil beide im mathematischen Modell grundlegend unterschiedliche Rollen spielen.

### Zustandsvariablen beschreiben den aktuellen Zustand

Eine **Zustandsvariable** beschreibt den aktuellen Zustand eines biologischen Systems.

Ihr Wert verändert sich während der Simulation kontinuierlich, während sich die biologischen Prozesse entfalten.

Beispiele für Zustandsvariablen sind

- die Konzentration eines Proteins,
- die Menge eines Transkripts,
- die Zahl der Individuen in einer Population,
- die Konzentration eines Metaboliten,
- die Viruslast während einer Infektion.

Zu jedem Zeitpunkt definiert die Gesamtheit aller Zustandsvariablen den aktuellen **Zustand** des biologischen Systems. Wie wir in Kapitel 14 gelernt haben, entspricht dieser Zustand einem Punkt, der sich durch den Zustandsraum bewegt.

### Parameter beschreiben das biologische System

**Parameter** beschreiben dagegen die biologischen Eigenschaften, die festlegen, wie sich das System verhält.

Im Unterschied zu Zustandsvariablen bleiben Parameter während einer einzelnen Simulation meist konstant. Sie definieren die Regeln, die die Dynamik bestimmen, und nicht den aktuellen Zustand selbst.

Beispiele hierfür sind

- Transkriptionsraten,
- Abbaukonstanten,
- Enzymaktivitäten,
- Bindungsaffinitäten,
- Tragfähigkeiten,
- Umgebungstemperatur,
- Nährstoffverfügbarkeit.

Eine Änderung eines Parameters verschiebt das System nicht einfach zu einem anderen Punkt im Zustandsraum. Stattdessen verändert sie die Form des Vektorfelds selbst und damit die Art und Weise, wie sich das gesamte System entwickelt.

### Ein Beispiel aus der Populationsbiologie

Der Unterschied wird besonders deutlich im logistischen Wachstumsmodell

$$
\frac{dN}{dt}=rN\left(1-\frac{N}{K}\right),
$$

wobei \(N\) die Populationsgröße bezeichnet.

Die Populationsgröße \(N\) ist die **Zustandsvariable**, weil sie sich kontinuierlich über die Zeit verändert.

Die intrinsische Wachstumsrate \(r\) und die Tragfähigkeit \(K\) sind **Parameter**. Während einer Simulation bleiben sie fest und bestimmen, wie schnell die Population wächst und zu welchem Gleichgewicht sie konvergiert.

Wenn sich die anfängliche Populationsgröße ändert, verändert sich die Trajektorie durch den Zustandsraum, das zugrunde liegende Modell bleibt jedoch dasselbe.

Wenn sich die Tragfähigkeit ändert, verändert sich das Modell selbst. Die Lage des Gleichgewichts verschiebt sich, weil sich die biologische Umwelt verändert hat.

### Warum Parameter wichtig sind

Eine Veränderung der Anfangsbedingungen beantwortet die Frage:

> **Was geschieht, wenn das System in einem anderen Zustand startet?**

Eine Veränderung eines Parameters beantwortet eine grundlegend andere Frage:

> **Was geschieht, wenn sich das biologische System selbst verändert?**

Diese beiden Fragen dürfen nicht verwechselt werden.

Eine Änderung der anfänglichen Populationsgröße verändert das Ökosystem selbst nicht.

Eine Änderung der Tragfähigkeit dagegen modifiziert die Umwelt und verändert damit die Regeln, die das Populationswachstum steuern.

Ebenso verändert eine Änderung der anfänglichen Konzentration eines Transkriptionsfaktors nicht das genregulatorische Netzwerk. Eine Mutation im Promotor eines Gens verändert dagegen die regulatorischen Wechselwirkungen selbst und damit das zugrunde liegende dynamische System.

### Parameter treiben biologische Übergänge an

Viele biologische Prozesse werden letztlich durch langsam variierende Parameter kontrolliert.

Die Temperatur ändert sich im Tagesverlauf.

Nährstoffkonzentrationen steigen oder fallen.

Hormonspiegel verändern sich während der Entwicklung.

Mutationen verändern Enzymaktivitäten.

Stress verändert Signalstärken.

Wenn diese Parameter variieren, kann sich auch das Verhalten des biologischen Systems verändern.

Meistens geschehen solche Veränderungen graduell. Gelegentlich kann jedoch schon eine sehr kleine Parameteränderung eine dramatische Verschiebung des Systemverhaltens auslösen. Stabile Gleichgewichte können verschwinden, neue Gleichgewichte entstehen, oder die Stabilität vorhandener Zustände kann sich vollständig ändern.

Diese qualitativen Übergänge sind Gegenstand der **Bifurkationstheorie**.

### Zentrale Konzepte

- Zustandsvariablen beschreiben den aktuellen Zustand eines biologischen Systems und ändern sich während einer Simulation kontinuierlich.
- Parameter beschreiben die biologischen Eigenschaften, die das Systemverhalten bestimmen, und bleiben während einer Simulation typischerweise konstant.
- Eine Änderung einer Zustandsvariable verändert die Trajektorie im Zustandsraum.
- Eine Änderung eines Parameters modifiziert das Vektorfeld und verändert dadurch das Verhalten des gesamten Systems.
- Die Bifurkationstheorie untersucht, wie Änderungen von Parametern das qualitative Verhalten biologischer Systeme verändern.

### Zusammenfassung

Zustandsvariablen und Parameter spielen in dynamischen Modellen grundlegend unterschiedliche Rollen. Zustandsvariablen beschreiben den aktuellen Zustand eines biologischen Systems und bestimmen seine Position im Zustandsraum, während Parameter die biologischen Regeln definieren, die sein Verhalten steuern. Änderungen in den Anfangswerten von Zustandsvariablen verändern die vom System verfolgte Trajektorie, Änderungen von Parametern modifizieren dagegen die zugrunde liegende Dynamik selbst. Diese Unterscheidung bildet die konzeptionelle Grundlage für das Verständnis von Bifurkationen, bei denen graduelle Parameteränderungen zu qualitativen Übergängen im Systemverhalten führen.

### Fragen zur Selbstkontrolle

1. Was ist der Unterschied zwischen einer Zustandsvariable und einem Parameter?
2. Nennen Sie drei Beispiele für Zustandsvariablen und drei Beispiele für Parameter.
3. Warum wirkt sich die Änderung eines Parameters auf das gesamte Vektorfeld aus?
4. Warum darf die Änderung einer Anfangsbedingung nicht mit der Änderung eines Parameters verwechselt werden?
5. Warum sind Parameter zentral für das Verständnis von Bifurkationen?
