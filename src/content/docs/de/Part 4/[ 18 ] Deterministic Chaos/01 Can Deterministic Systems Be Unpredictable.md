---
title: "18.1 Können deterministische Systeme unvorhersagbar sein?"
sidebar:
  label: "18.1 Können deterministische Systeme unvorhersagbar sein?"
  order: 1
  group: "Part 4"
  part: "Part 4"
---

## 18.1 Können deterministische Systeme unvorhersagbar sein?

Im Verlauf dieses Buches haben wir mathematische Modelle entwickelt, um das Verhalten biologischer Systeme zu verstehen und vorherzusagen. Ist ein Modell einmal aufgestellt, dann bestimmen die zugrunde liegenden Gleichungen eindeutig, wie sich das System im Zeitverlauf entwickelt. Kennt man den Anfangszustand des Systems und die Werte aller Modellparameter, dann sollte es eigentlich nur eine einzige mögliche Zukunft geben.

Diese Eigenschaft nennt man **Determinismus**.

Auf den ersten Blick scheint Determinismus Vorhersagbarkeit zu implizieren. Wenn die maßgeblichen Gleichungen exakt bekannt sind und der aktuelle Zustand des Systems präzise gemessen wurde, dann liegt die Erwartung nahe, dass sich auch die Zukunft präzise vorhersagen lässt.

Für viele Systeme ist diese Intuition richtig.

Ein Pendel schwingt vorhersagbar, radioaktiver Zerfall folgt wohldefinierten statistischen Gesetzen, und die Bahnen von Planeten lassen sich mit außergewöhnlicher Genauigkeit über Jahrzehnte oder sogar Jahrhunderte hinweg berechnen. Ähnlich konvergieren viele der in den vorherigen Kapiteln eingeführten biologischen Modelle gegen stabile Gleichgewichte oder stabile Oszillationen, die zuverlässig vorhergesagt werden können.

Daher ist die Schlussfolgerung verführerisch, deterministische Modelle seien immer vorhersagbar.

Überraschenderweise ist diese Schlussfolgerung falsch.

### Ein einfaches Gedankenexperiment

Stellen wir uns das folgende numerische Experiment vor.

Wir simulieren ein biologisches Modell zweimal.

Beide Simulationen verwenden

- exakt dieselben mathematischen Gleichungen,
- exakt dieselben Parameterwerte
- und exakt denselben numerischen Algorithmus.

Der einzige Unterschied liegt in der Anfangsbedingung.

Angenommen, die erste Simulation startet mit einer anfänglichen Proteinkonzentration von

$$
x_0 = 0.500000,
$$

während die zweite Simulation mit

$$
x_0 = 0.500001
$$

beginnt.

Der Unterschied zwischen beiden Anfangsbedingungen ist nahezu unmessbar klein.

Da beide Simulationen von fast identischen Zuständen ausgehen, würde man natürlich erwarten, dass ihre Trajektorien während der gesamten Simulation nahezu identisch bleiben.

Schließlich liegt die Frage nahe: Wenn zwei Systeme nahezu gleich starten, warum sollten sie sich dann am Ende völlig unterschiedlich verhalten?

### Die überraschende Beobachtung

Lassen wir nun beide Simulationen weiterlaufen.

Anfangs sind die Trajektorien nahezu ununterscheidbar.

Ihre Unterschiede sind so klein, dass sie in einem Diagramm möglicherweise gar nicht sichtbar wären.

Mit der Zeit beginnen sich die Trajektorien jedoch voneinander zu entfernen.

Der winzige Anfangsunterschied wird größer.

Nach einiger Zeit ähneln sich die beiden Simulationen nicht mehr.

Schließlich wirken beide Trajektorien vollständig unabhängig voneinander, obwohl sie durch exakt dieselben deterministischen Gleichungen erzeugt wurden.

Dem Modell wurde keinerlei Zufall hinzugefügt.

Keine Parameter wurden verändert.

Es wurden keine äußeren Störungen eingebracht.

Der einzige Unterschied war eine winzige Änderung der Anfangsbedingung.

### Ein Paradox

Diese Beobachtung erzeugt einen scheinbaren Widerspruch.

Wenn die Gleichungen vollständig deterministisch sind, warum führt dann ein so kleiner Unterschied zu völlig unterschiedlichen Ergebnissen?

Bedeutet das, dass das System in Wahrheit zufällig ist?

Oder zeigt es vielmehr, dass unsere Intuition über Determinismus unvollständig war?

Diese Fragen haben Mathematiker und Physiker über Jahrzehnte beschäftigt.

Die Antwort führte schließlich zu einer der wichtigsten Entdeckungen der modernen nichtlinearen Dynamik:

> **Determinismus bedeutet nicht notwendigerweise Vorhersagbarkeit.**

### Die Grenzen der Vorhersage

In der Praxis enthält jede Messung eine gewisse Unsicherheit.

Kein experimentelles Instrument kann den exakten Zustand eines biologischen Systems mit unendlicher Präzision bestimmen.

Wenn ein Modell diese winzigen Unsicherheiten im Lauf der Zeit verstärkt, wird langfristige Vorhersage schließlich unmöglich.

Wichtig ist, dass dieser Verlust an Vorhersagbarkeit nicht durch Unvollkommenheiten der Messinstrumente verursacht wird.

Er ist eine intrinsische Eigenschaft des dynamischen Systems selbst.

Selbst bei perfekten mathematischen Gleichungen kann Vorhersage prinzipiell begrenzt sein.

Diese Einsicht hat unser Verständnis komplexer Systeme grundlegend verändert.

Anstatt zu fragen, ob ein System deterministisch oder zufällig ist, müssen wir eine andere Frage stellen:

> **Wie reagiert das System auf kleine Störungen?**

Die Antwort auf diese Frage entscheidet darüber, ob langfristige Vorhersagen möglich sind.

Wie wir im Verlauf dieses Kapitels sehen werden, verstärken manche nichtlinearen Systeme winzige Unterschiede so stark, dass präzise langfristige Vorhersage grundsätzlich unmöglich wird, obwohl die zugrunde liegende Dynamik vollständig deterministisch bleibt.

Dieses Phänomen nennt man **deterministisches Chaos**.

### Zentrale Konzepte

- Deterministische Systeme entwickeln sich nach festen mathematischen Regeln.
- Determinismus bedeutet nicht automatisch Vorhersagbarkeit.
- Winzige Unterschiede in den Anfangsbedingungen können mit der Zeit stark anwachsen.
- Vorhersage wird nicht nur durch Messfehler, sondern grundlegend durch die Systemdynamik begrenzt.
- Deterministisches Chaos entsteht, wenn nichtlineare Dynamik kleine Störungen verstärkt.

### Zusammenfassung

Von deterministischen Modellen erwartet man oft vorhersagbares Verhalten. Manche nichtlinearen Systeme verhalten sich jedoch grundlegend anders. Zwei Simulationen, die sich nur durch eine infinitesimale Änderung ihrer Anfangsbedingungen unterscheiden, können sich schließlich zu völlig verschiedenen Trajektorien entwickeln. Dieses überraschende Phänomen zeigt, dass deterministische Gleichungen Verhalten erzeugen können, das praktisch unvorhersagbar ist, und führt damit in die zentrale Idee des deterministischen Chaos ein.

### Verständnisfragen

1. Was versteht man unter einem deterministischen dynamischen System?
2. Warum wird Determinismus häufig mit Vorhersagbarkeit verbunden?
3. Worin besteht im Gedankenexperiment der einzige Unterschied zwischen den beiden Simulationen?
4. Warum ist die Divergenz der beiden Trajektorien überraschend?
5. Warum ist langfristige Unvorhersagbarkeit nicht notwendigerweise auf Messfehler zurückzuführen?
6. Welche zentrale Frage motiviert die Untersuchung deterministischen Chaos?
