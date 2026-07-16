---
title: "15.3 Gleichgewichtspunkte: Wo biologische Veränderung stoppt"
sidebar:
  label: "15.3 Gleichgewichtspunkte: Wo biologische Veränderung stoppt"
  order: 3
  group: "Part 4"
  part: "Part 4"
---

## 15.3 Gleichgewichtspunkte: Wo biologische Veränderung stoppt

Die Beispiele der Tragfähigkeit und des Allee-Effekts legen nahe, dass biologische Systeme sich häufig auf bevorzugte Zustände hin entwickeln. Unabhängig von ihren Anfangsbedingungen können Populationen sich schließlich bei einer charakteristischen Größe stabilisieren. Ein ähnliches Verhalten wird in vielen anderen biologischen Systemen beobachtet, von Metabolitkonzentrationen bis zu genregulatorischen Netzwerken.

Wie lassen sich diese bevorzugten Zustände mathematisch identifizieren?

Anstatt das Verhalten des Systems über lange Zeiträume zu simulieren, können wir die Differentialgleichung selbst untersuchen. Dadurch lassen sich die Zustände bestimmen, in denen sich das System nicht mehr verändert.

### Wann hört ein System auf, sich zu verändern?

In Kapitel 14 haben wir gewöhnliche Differentialgleichungen als mathematische Beschreibungen biologischer Veränderung eingeführt. Für ein eindimensionales System lautet die allgemeine Form

$$
\frac{dX}{dt}=f(X),
$$

wobei \(X\) die Zustandsvariable ist und \(f(X)\) ihre Änderungsrate beschreibt.

Ein **Gleichgewichtspunkt** ist einfach ein Zustand, in dem diese Änderungsrate null wird:

$$
\frac{dX}{dt}=0.
$$

Im Gleichgewicht ändert sich die Zustandsvariable also nicht weiter, weil alle gegensätzlichen biologischen Prozesse einander exakt ausgleichen.

In einem Populationsmodell werden Geburten genau durch Todesfälle ausgeglichen. In einem metabolischen System entspricht die Produktion eines Metaboliten seinem Verbrauch. In einem genregulatorischen Netzwerk gleicht die Transkriptsynthese den Transkriptabbau exakt aus.

Obwohl diese Systeme biologisch aktiv bleiben, bleibt ihr beobachtbarer Zustand konstant.

### Gleichgewichte im Allee-Modell

Der Allee-Effekt liefert ein anschauliches Beispiel für Gleichgewichtsverhalten.

Wie wir im vorigen Abschnitt gesehen haben, können sehr kleine Populationen abnehmen, weil Individuen sich nicht effizient fortpflanzen können, während sehr große Populationen durch Konkurrenz um Ressourcen begrenzt werden.

Infolgedessen besitzt das Allee-Modell drei Gleichgewichtspunkte.

Das erste Gleichgewicht liegt bei

$$
X=0,
$$

und entspricht dem Aussterben der Population.

Das zweite Gleichgewicht liegt bei der **kritischen Populationsgröße**, die üblicherweise mit \(A\) bezeichnet wird. Dieser Punkt trennt Populationen, die sich erholen, von solchen, die weiter abnehmen.

Das dritte Gleichgewicht liegt bei der **Tragfähigkeit**, \(K\), bei der Geburten und Todesfälle einander ausgleichen und die Population annähernd konstant bleibt.

Diese drei Gleichgewichte ergeben sich unmittelbar aus den biologischen Annahmen des Modells.

### Gleichgewichtspunkte sind nicht alle gleich

Einen Gleichgewichtspunkt zu finden, sagt uns nur, dass das System dort verharren **kann**.

Es sagt **nicht**, ob das System nach einer Störung tatsächlich dort bleiben wird.

Stellen wir uns vor, eine Murmel liege auf dem Gipfel eines Hügels. Am höchsten Punkt bewegt sich die Murmel nicht, also ist diese Position technisch gesehen ein Gleichgewicht. Die kleinste Störung genügt jedoch, damit die Murmel herunterrollt.

Stellen wir uns nun vor, dieselbe Murmel liege in einer Schale. Auch dort kommt sie schließlich zur Ruhe, doch diesmal sorgt eine kleine Störung lediglich dafür, dass sie wieder zum tiefsten Punkt zurückrollt.

Beide Positionen sind Gleichgewichte, weil das System sich dort nicht verändert.

Ihr Verhalten nach einer Störung ist jedoch grundlegend verschieden.

Diese Unterscheidung führt zu einem der wichtigsten Konzepte dynamischer Systeme: der **Stabilität**.

### Warum Gleichgewichtsanalyse nützlich ist

Die Analyse von Gleichgewichten erlaubt es uns, das Langzeitverhalten biologischer Systeme zu verstehen, ohne umfangreiche Simulationen durchführen zu müssen.

Anstatt Tausende Trajektorien zu berechnen, identifizieren wir zunächst die möglichen Gleichgewichtszustände und bestimmen anschließend, ob diese Zustände stabil oder instabil sind.

Dieser Ansatz liefert starke biologische Einsichten.

Erholt sich eine Population nach einer Störung?

Kann eine Zelle ihren differenzierten Zustand aufrechterhalten?

Kehrt ein Signalweg nach seiner Aktivierung in den Ruhezustand zurück?

All diese Fragen hängen nicht nur von der Existenz von Gleichgewichten ab, sondern ebenso von deren Stabilität.

Im nächsten Abschnitt werden wir untersuchen, wie sich stabile und instabile Gleichgewichte unterscheiden lassen.

### Zentrale Konzepte

- Ein Gleichgewichtspunkt ist ein Zustand, in dem die Änderungsrate des Systems null ist.
- Gleichgewichte entstehen, wenn gegensätzliche biologische Prozesse einander exakt ausgleichen.
- Das Allee-Modell enthält drei Gleichgewichtspunkte: Aussterben, den kritischen Schwellenwert und die Tragfähigkeit.
- Die Existenz eines Gleichgewichts bedeutet nicht automatisch, dass es biologisch stabil ist.
- Die Analyse von Gleichgewichten liefert Einsichten in das Langzeitverhalten biologischer Systeme.

### Zusammenfassung

Gleichgewichtspunkte repräsentieren Zustände, in denen biologische Systeme sich nicht weiter verändern, weil konkurrierende Prozesse perfekt im Gleichgewicht sind. Diese Zustände lassen sich oft direkt aus den Differentialgleichungen identifizieren, ohne numerische Simulationen durchzuführen. Der Allee-Effekt liefert ein anschauliches Beispiel für ein System mit mehreren Gleichgewichten und zeigt, dass biologische Systeme mehrere mögliche Langzeitausgänge besitzen können. Ein Gleichgewicht zu identifizieren ist jedoch nur der erste Schritt. Um biologisches Verhalten zu verstehen, müssen wir außerdem bestimmen, ob diese Gleichgewichte stabil oder instabil sind.

### Fragen zur Selbstkontrolle

1. Was ist die mathematische Definition eines Gleichgewichtspunkts?
2. Warum kann ein Gleichgewicht dennoch ein biologisch aktives System repräsentieren?
3. Welche drei Gleichgewichtspunkte treten im Allee-Modell auf?
4. Warum reicht das Auffinden eines Gleichgewichtspunkts nicht aus, um das Systemverhalten vorherzusagen?
5. Welche biologischen Fragen lassen sich mit Gleichgewichtsanalyse beantworten?
