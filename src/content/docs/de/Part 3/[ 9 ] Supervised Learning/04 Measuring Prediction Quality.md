---
title: "9.4 Vorhersagequalität messen"
sidebar:
  label: "9.4 Vorhersagequalität messen"
  order: 4
  group: "Part 3"
  part: "Part 3"
---

# 9.4 Vorhersagequalität messen

## Wann ist ein Modell besser als ein anderes?

An diesem Punkt haben wir ein Vorhersagemodell konstruiert, das die Hydrophobizität eines Proteins mit seiner Stabilität in Beziehung setzt. Eine wichtige Frage ist jedoch noch offen:

> **Wie erkennen wir, ob unser Modell tatsächlich gut ist?**

Stellen wir uns vor, wir passen mehrere verschiedene Regressionsgeraden an denselben Datensatz an. Manche dieser Geraden folgen dem allgemeinen Trend recht gut, andere verfehlen den Zusammenhang deutlich. Auch wenn wir das oft visuell beurteilen können, benötigt maschinelles Lernen ein objektives und quantitatives Kriterium, um Modelle miteinander zu vergleichen.

Einem Lernalgorithmus kann man nicht einfach sagen, er solle "die beste Gerade" finden. Stattdessen braucht er eine präzise mathematische Definition dessen, was *best* bedeutet.

Diese Definition wird durch eine **Verlustfunktion** gegeben.

Eine Verlustfunktion weist jedem möglichen Modell einen numerischen Wert zu. Modelle mit genauen Vorhersagen erhalten einen kleinen Verlust, Modelle mit schlechten Vorhersagen einen großen.

Der gesamte Lernprozess folgt damit einem überraschend einfachen Grundsatz:

> **Ein besseres Modell ist eines, das einen kleineren Verlust erzeugt.**

Alles, was im überwachten Lernen folgt, baut auf dieser Idee auf.

---

## Vorhersagefehler messen

Um ein Modell zu bewerten, vergleichen wir seine Vorhersagen mit den experimentell beobachteten Werten.

Für jedes Protein in unserem Datensatz haben wir daher zwei Größen:

- die experimentell gemessene Stabilität

$$
y_i,
$$

- und die vom Modell vorhergesagte Stabilität

$$
\hat{y}_i.
$$

Die Differenz zwischen diesen beiden Größen,

$$
y_i-\hat{y}_i,
$$

nennt man den **Vorhersagefehler** oder das **Residual**.

Residuen messen, wie stark das Modell von der beobachteten Realität abweicht.

Ist das Residuum nahe null, so ist die Vorhersage sehr genau.

Große Residuen zeigen an, dass das Modell das beobachtete Verhalten dieses Proteins nicht gut erklären kann.

Wichtig ist, dass Residuen nicht bloß mathematische Nebeneffekte sind.

Sie können biologisch sehr aufschlussreich sein.

Wenn beispielsweise einige Proteine systematisch deutlich größere Residuen aufweisen als andere, kann das ein Hinweis darauf sein, dass im Modell ein wichtiger biologischer Mechanismus fehlt.

Vielleicht besitzen diese Proteine besonders starke elektrostatische Wechselwirkungen, stabilisierende Disulfidbrücken oder Interaktionen mit Liganden, die bei der Merkmalskonstruktion nicht berücksichtigt wurden.

Residuen markieren also jene Stellen, an denen unser biologisches Verständnis und damit auch unser Modell unvollständig sind.

---

## Warum wir Vorhersagefehler quadrieren

Eine naheliegende Idee wäre, alle Residuen einfach zu addieren, um die Qualität des Modells zu bewerten.

Leider funktioniert das nicht.

Positive und negative Vorhersagefehler heben sich gegenseitig auf.

Ein Modell, das einige Proteine überschätzt und andere unterschätzt, könnte dadurch fälschlich so wirken, als hätte es insgesamt kaum Fehler, obwohl seine Vorhersagen schlecht sind.

Um diese Aufhebung zu vermeiden, wird jedes Residuum vor dem Summieren quadriert.

Diese Quadrierung erfüllt zwei wichtige Zwecke.

Erstens werden dadurch alle Fehler positiv.

Zweitens erhalten große Vorhersagefehler ein stärkeres Gewicht.

Gerade in der Biologie ist das oft wünschenswert, weil große Fehler häufig darauf hindeuten, dass das Modell einen wichtigen Aspekt der zugrunde liegenden Biologie nicht erfasst hat.

Eine Verfehlung der Proteinstabilität um ein Grad ist weniger problematisch als eine Verfehlung um zwanzig Grad.

Durch das Quadrieren betont die Verlustfunktion solche starken Abweichungen automatisch stärker.

---

## Der Mean Squared Error

Die am häufigsten verwendete Verlustfunktion für Regressionsprobleme ist der **Mean Squared Error (MSE)**.

Er ist definiert als

$$
\mathrm{MSE}
=
\frac{1}{n}
\sum_{i=1}^{n}
\left(y_i-\hat{y}_i\right)^2.
$$

Auch wenn diese Formel zunächst technisch wirkt, ist ihre Bedeutung leicht nachvollziehbar.

Die Berechnung folgt vier einfachen Schritten.

Für jede Beobachtung wird

1. der Vorhersagefehler berechnet,
2. dieser Fehler quadriert,
3. dies für alle Beobachtungen wiederholt
4. und schließlich der Mittelwert gebildet.

Die resultierende Zahl fasst die gesamte Vorhersagequalität des Modells zusammen.

Ein perfektes Modell hätte einen MSE von null, weil dann jede Vorhersage exakt mit der entsprechenden experimentellen Beobachtung übereinstimmen würde.

In realen biologischen Datensätzen tritt dieser Fall praktisch nie ein.

Das Ziel besteht deshalb darin, den Mean Squared Error so klein wie möglich zu machen.

Gerade dieses einfache Ziel wird zur treibenden Kraft des gesamten Lernprozesses.

---

## Jenseits der Regressionsgeraden denken

Der Mean Squared Error liefert mehr als nur eine Zahl.

Er verändert auch unsere Sicht auf Regression.

Zunächst liegt es nahe, vor allem auf die Regressionsgerade selbst zu schauen.

Wir fragen uns, ob die Gerade "gut" durch die Punktwolke der Beobachtungen verläuft.

Sobald wir jedoch den MSE einführen, verschiebt sich der Fokus.

Die Regressionsgerade ist nicht länger das zentrale Objekt des Interesses.

Stattdessen rückt der **Vorhersagefehler** in den Mittelpunkt.

Jede mögliche Regressionsgerade entspricht einem anderen Wert des Mean Squared Error.

Manche Parameterwerte führen zu großen Fehlern.

Andere führen zu kleinen.

Damit wird Regression von einem Problem des Zeichnens von Geraden zu einem Problem der Minimierung von Vorhersagefehlern.

Dieser Perspektivwechsel ist eine der wichtigsten Ideen des maschinellen Lernens.

Anstatt zu fragen

> **Welche Regressionsgerade sieht am besten aus?**

fragen wir nun

> **Welche Modellparameter erzeugen den kleinsten Vorhersagefehler?**

Wie wir im nächsten Abschnitt sehen werden, wird überwachtes Lernen durch diese scheinbar kleine Veränderung zu einem Optimierungsproblem.

---

## Biologische Interpretation von Vorhersagefehlern

Der Mean Squared Error wird oft als rein mathematische Größe eingeführt.

Aus biologischer Sicht besitzt er jedoch eine deutlich tiefere Bedeutung.

Jeder Vorhersagefehler repräsentiert Information, die das aktuelle Modell nicht erklären kann.

Nehmen wir an, die Hydrophobizität erklärt einen erheblichen Teil der Proteinstabilität, die Vorhersagefehler bleiben aber trotzdem relativ groß.

Das bedeutet nicht zwangsläufig, dass das Modell wertlos ist.

Es zeigt vielmehr, dass Hydrophobizität allein die Proteinstabilität nicht vollständig erklären kann.

Der verbleibende Fehler kann beispielsweise entstehen durch

- elektrostatische Wechselwirkungen,
- Wasserstoffbrücken,
- Proteindynamik,
- Ligandenbindung,
- posttranslationale Modifikationen
- oder viele andere molekulare Mechanismen.

Den Vorhersagefehler zu verkleinern bedeutet daher oft, unsere biologische Repräsentation des Systems zu verbessern, und nicht bloß den mathematischen Algorithmus zu verändern.

Diese Perspektive ist für die computergestützte Biologie grundlegend.

Maschinelles Lernen ist nicht einfach eine Übung in Optimierung.

Es ist ein Werkzeug, mit dem wir herausfinden können, welche biologische Information ausreicht, um experimentelle Beobachtungen zu erklären und ebenso, welche Information noch fehlt.

---

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- zu erklären, warum überwachtes Lernen ein objektives Maß für Vorhersagequalität benötigt,
- Residuen zu definieren und biologisch zu interpretieren,
- zu erläutern, warum Vorhersagefehler quadriert werden,
- den Mean Squared Error zu berechnen und zu interpretieren,
- zu verstehen, warum die Minimierung des Vorhersagefehlers die Grundlage des überwachten Lernens bildet.

### Konzeptionelle Zusammenfassung

Um ein Vorhersagemodell zu verbessern, müssen wir zunächst quantifizieren, wie gut es mit den experimentellen Daten übereinstimmt. Dies geschieht mithilfe einer Verlustfunktion, meist des Mean Squared Error. Der MSE misst die mittlere quadrierte Abweichung zwischen vorhergesagten und beobachteten Werten und dient damit als objektives Maß für die Modellqualität. Aus biologischer Sicht repräsentieren Vorhersagefehler den Anteil biologischer Variation, der vom aktuellen Modell noch nicht erklärt wird. Die Minimierung dieses Fehlers ist daher zugleich ein mathematisches Optimierungsproblem und ein Prozess der Verfeinerung unseres biologischen Verständnisses.

### Fragen zur Selbstkontrolle

1. Warum benötigt maschinelles Lernen ein quantitatives Maß für Vorhersagequalität?
2. Was ist ein Residuum, und was bedeutet es biologisch?
3. Warum können Vorhersagefehler nicht einfach aufsummiert werden?
4. Warum werden große Vorhersagefehler im Mean Squared Error stärker bestraft?
5. Warum können Residuen Hinweise auf fehlende biologische Mechanismen liefern?
6. Warum wird Regression durch die Einführung des Mean Squared Error zu einem Optimierungsproblem?
