---
title: "9.6 Gradientenverfahren"
sidebar:
  label: "9.6 Gradientenverfahren"
  order: 6
  group: "Part 3"
  part: "Part 3"
---

# 9.6 Gradientenverfahren

## Von der Optimierung zum Algorithmus

Im vorherigen Abschnitt haben wir überwachtes Lernen als Optimierungsproblem formuliert. Unser Ziel ist nicht länger, direkt die "beste Regressionsgerade" zu finden. Stattdessen suchen wir jene Modellparameter, die die Verlustfunktion minimieren.

Daraus ergibt sich unmittelbar die nächste Frage:

> **Wie können wir das Minimum der Verlustfunktion systematisch finden?**

Für das in diesem Kapitel eingeführte einfache lineare Regressionsmodell gibt es eine exakte analytische Lösung. Wenn man den Mean Squared Error nach den Modellparametern ableitet und die Ableitung gleich null setzt, lassen sich die optimalen Regressionskoeffizienten direkt berechnen.

Bei komplexeren Modellen wird diese Strategie jedoch rasch unpraktisch.

Moderne Algorithmen des maschinellen Lernens enthalten häufig Millionen oder sogar Milliarden anpassbarer Parameter. Für solche Modelle sind analytische Lösungen entweder rechnerisch nicht mehr sinnvoll oder existieren gar nicht.

Wir benötigen daher einen Algorithmus, der das Modell schrittweise verbessert, bis sich der Vorhersagefehler nicht weiter verringern lässt.

Der wichtigste Optimierungsalgorithmus dafür ist das **Gradientenverfahren**.

Bemerkenswert ist, dass sich trotz der enormen Komplexität heutiger Modelle am grundlegenden Optimierungsprinzip wenig geändert hat. Dasselbe Verfahren, mit dem sich eine einfache lineare Regression optimieren lässt, bildet auch die Grundlage für das Training moderner tiefer neuronaler Netze.

---

## Der Gradient: die lokale Steigung messen

Die Grundidee des Gradientenverfahrens stammt aus der Differentialrechnung.

Stellen wir uns vor, wir stehen an irgendeinem Punkt auf der Verlustlandschaft. Vielleicht kennen wir das globale Minimum nicht, doch wir können eine einfachere Frage stellen:

> **Wenn wir uns von unserer aktuellen Position ein kleines Stück bewegen, wie verändert sich dann der Verlust?**

Die Antwort liefert der **Gradient**.

Für eine Funktion einer einzigen Variablen reduziert sich der Gradient auf die gewöhnliche Ableitung

$$
\frac{d\,\mathrm{MSE}}{dm},
$$

die die Steigung der Verlustfunktion am aktuellen Parameterwert beschreibt.

Diese Ableitung enthält gleichzeitig zwei Informationen.

Erstens gibt ihr **Vorzeichen** an, in welche Richtung der Verlust zunimmt.

- Eine positive Ableitung bedeutet, dass der Verlust steigt, wenn der Parameter größer wird.
- Eine negative Ableitung bedeutet, dass der Verlust sinkt, wenn der Parameter größer wird.

Zweitens beschreibt ihr **Betrag**, wie schnell sich der Verlust verändert.

Eine große Ableitung entspricht einer steilen Flanke, eine kleine Ableitung einer vergleichsweise flachen Region der Verlustlandschaft.

Die Ableitung sagt uns also genau, wie sich der Vorhersagefehler in der unmittelbaren Umgebung des aktuellen Modells verhält.

---

## Eine geometrische Interpretation

Anschaulich lässt sich der Gradient gut mit einer Berglandschaft vergleichen.

Stellen wir uns vor, wir stehen irgendwo an einem Hang.

Wegen dichten Nebels können wir die gesamte Landschaft nicht überblicken. Dennoch können wir sofort feststellen, in welche Richtung es unter unseren Füßen am steilsten bergauf geht.

Genau diese Rolle übernimmt der Gradient.

An jedem Punkt der Verlustlandschaft zeigt er in die Richtung des **steilsten Anstiegs** der Verlustfunktion.

Seine Länge spiegelt wider, wie steil dieser Anstieg ist.

Aus dieser Interpretation wird sofort klar, warum das Gradientenverfahren funktioniert.

Unser Ziel ist es nicht, den Berg hinaufzusteigen.

Wir wollen in das Tal hinabsteigen, in dem der Vorhersagefehler minimal ist.

Deshalb bewegen wir uns immer **entgegen** der Gradientenrichtung.

Daher stammt auch der Name **Gradientenverfahren**.

Der Gradient zeigt die Richtung des stärksten Anstiegs, und das Gradientenverfahren folgt der Richtung des stärksten Abstiegs.

---

## Die Modellparameter aktualisieren

Das Gradientenverfahren verbessert das Modell iterativ.

Ausgehend von einer anfänglichen Schätzung der Modellparameter führt der Algorithmus immer wieder dieselbe Abfolge von Schritten aus.

Zunächst berechnet er den Gradienten der Verlustfunktion an den aktuellen Parameterwerten.

Dann aktualisiert er die Parameter, indem er einen kleinen Schritt entgegen dem Gradienten macht.

Anschließend wiederholt er diesen Vorgang so lange, bis weitere Verbesserungen vernachlässigbar klein werden.

Mathematisch schreibt man die Aktualisierung als

$$
m_{\text{neu}}
=
m_{\text{alt}}
-
\alpha
\frac{d\,\mathrm{MSE}}{dm},
$$

wobei

- \(m_{\text{alt}}\) der aktuelle Parameterwert ist,
- \(\frac{d\,\mathrm{MSE}}{dm}\) der Gradient ist
- und \(\alpha\) die Lernrate bezeichnet.

Auch wenn diese Gleichung kompakt aussieht, fasst sie den gesamten Lernprozess zusammen.

In jeder Iteration wird das Modell ein kleines Stück verändert.

Wenn diese Aktualisierung den Vorhersagefehler verkleinert, bildet der neue Parameter den Ausgangspunkt für den nächsten Schritt.

Mit der Zeit summieren sich viele solcher kleinen Verbesserungen, bis das Modell in die Nähe des Minimums der Verlustfunktion gelangt.

---

## Die Rolle der Lernrate

Die Lernrate

$$
\alpha
$$

bestimmt die Größe jedes Optimierungsschritts.

Ihr Wert beeinflusst stark, wie effizient das Modell lernt.

Ist die Lernrate sehr klein, so führt der Algorithmus nur winzige Parameteränderungen aus.

Das sorgt meist für stabile Konvergenz, kann aber Tausende von Iterationen erfordern, bis das Optimum erreicht ist.

Eine sehr große Lernrate erlaubt dagegen rasche Bewegungen durch den Parameterraum.

Das kann das Lernen zunächst beschleunigen, bringt aber ein neues Problem mit sich.

Anstatt sich dem Minimum glatt zu nähern, kann der Algorithmus über dieses hinaus schießen.

Der Parameter springt dann von einer Seite des Minimums auf die andere und oszilliert.

Wird die Lernrate zu groß, kann die Optimierung sogar divergieren, sodass der Vorhersagefehler steigt, anstatt zu fallen.

Die Wahl einer passenden Lernrate ist daher immer ein Ausgleich zwischen Geschwindigkeit und Stabilität.

Sie gehört bis heute zu den wichtigsten praktischen Fragen beim Training von Modellen des maschinellen Lernens.

---

## Konvergenz: Wann ist das Lernen abgeschlossen?

Das Gradientenverfahren verbessert das Modell schrittweise, indem es in jeder Iteration den Vorhersagefehler reduziert.

Irgendwann erreicht der Algorithmus einen Punkt, an dem weitere Aktualisierungen nur noch vernachlässigbar kleine Verbesserungen bewirken.

Dann nähert sich der Gradient null, weil die Verlustlandschaft in der Umgebung des Modells lokal flach geworden ist.

Man sagt dann, der Algorithmus habe **konvergiert**.

Konvergenz bedeutet nicht zwingend, dass das Modell die biologische Realität perfekt beschreibt.

Sie bedeutet lediglich, dass unter der gewählten Modellstruktur und mit den verfügbaren Daten keine nahegelegenen Parameterwerte wesentlich bessere Vorhersagen liefern.

In unserem einfachen Regressionsbeispiel identifiziert Konvergenz die Regressionsgerade, die den Mean Squared Error minimiert.

Für moderne neuronale Netze gilt genau dasselbe Prinzip.

Der einzige Unterschied besteht darin, dass nicht ein oder zwei, sondern Millionen Parameter gleichzeitig aktualisiert werden.

Das Gradientenverfahren skaliert daher natürlich von einfachen Regressionsmodellen bis zu den größten heute eingesetzten Systemen des maschinellen Lernens.

---

## Lernen durch schrittweise Verbesserung

Das vielleicht Bemerkenswerteste am Gradientenverfahren ist seine Einfachheit.

Zu keinem Zeitpunkt versucht der Algorithmus, das gesamte Optimierungsproblem auf einmal zu lösen.

Stattdessen stellt er immer wieder dieselbe lokale Frage:

> **Wie sollte das aktuelle Modell verändert werden, um den Vorhersagefehler am wirksamsten zu verringern?**

Jede einzelne Aktualisierung ist meist klein.

Doch Tausende oder Millionen solcher schrittweisen Verbesserungen verwandeln gemeinsam ein zunächst schlechtes Modell in einen guten Prädiktor.

Gerade darin zeigt sich ein grundlegendes Prinzip des maschinellen Lernens.

Lernen ist kein einzelnes Ereignis.

Es ist ein Prozess stetiger Verfeinerung.

Jede Iteration nimmt ein wenig mehr Information aus den experimentellen Daten auf und verbessert allmählich die Fähigkeit des Modells, den zugrunde liegenden biologischen Zusammenhang zu erfassen.

Ob das Modell einen Parameter enthält oder eine Milliarde, der grundlegende Lernmechanismus bleibt derselbe.

---

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- zu erklären, warum das Gradientenverfahren für modernes maschinelles Lernen benötigt wird,
- den Gradienten als lokale Steigung der Verlustlandschaft zu interpretieren,
- zu verstehen, warum die Optimierung entgegen dem Gradienten verläuft,
- die Aktualisierungsregel des Gradientenverfahrens zu erklären,
- den Einfluss der Lernrate zu beschreiben,
- zu erläutern, was Konvergenz im Kontext des überwachten Lernens bedeutet.

### Konzeptionelle Zusammenfassung

Das Gradientenverfahren ist der am weitesten verbreitete Optimierungsalgorithmus im maschinellen Lernen. Anstatt ein Optimierungsproblem analytisch zu lösen, verbessert es das Modell iterativ, indem es die Parameter wiederholt in jene Richtung verschiebt, in der die Verlustfunktion am stärksten abnimmt. Der Gradient liefert diese Richtung lokal, während die Lernrate die Größe jedes Schritts bestimmt. Obwohl das Verfahren hier an einem einfachen Regressionsmodell eingeführt wird, liegt dasselbe Optimierungsprinzip nahezu allen modernen Modellen des maschinellen Lernens zugrunde, einschließlich tiefer neuronaler Netze.

### Fragen zur Selbstkontrolle

1. Warum wird das Gradientenverfahren benötigt, obwohl lineare Regression eine analytische Lösung besitzt?
2. Welche Information liefert der Gradient?
3. Warum bewegt sich das Gradientenverfahren entgegen dem Gradienten?
4. Welche Rolle spielt die Lernrate während der Optimierung?
5. Was passiert, wenn die Lernrate zu klein oder zu groß gewählt wird?
6. Was bedeutet es, wenn das Gradientenverfahren konvergiert?
7. Warum kann derselbe Optimierungsalgorithmus sowohl für lineare Regression als auch für tiefe neuronale Netze verwendet werden?
