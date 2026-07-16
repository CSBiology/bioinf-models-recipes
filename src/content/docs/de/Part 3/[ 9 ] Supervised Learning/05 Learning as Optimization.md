---
title: "9.5 Lernen als Optimierung"
sidebar:
  label: "9.5 Lernen als Optimierung"
  order: 5
  group: "Part 3"
  part: "Part 3"
---

# 9.5 Lernen als Optimierung

## Was bedeutet Lernen eigentlich?

Der Begriff *Lernen* wird im maschinellen Lernen ständig verwendet, bleibt dabei aber oft erstaunlich unscharf.

Wenn wir sagen, ein Modell "lernt", meinen wir nicht, dass es Wissen im menschlichen Sinne erwirbt. Das Modell versteht keine Proteine, erkennt keine biologischen Mechanismen und formuliert keine wissenschaftlichen Hypothesen.

Stattdessen hat Lernen eine sehr präzise mathematische Bedeutung.

> **Lernen ist der Prozess, diejenigen Modellparameter zu finden, die die besten Vorhersagen erzeugen.**

Diese Aussage mag fast enttäuschend einfach wirken, trifft aber den Kern des überwachten Lernens.

Im vorherigen Abschnitt haben wir den Mean Squared Error (MSE) als quantitatives Maß für Vorhersagequalität eingeführt. Jede mögliche Wahl von Modellparametern erzeugt andere Vorhersagen und damit auch einen anderen Vorhersagefehler.

Lernen bedeutet nun schlicht, diejenigen Parameter zu identifizieren, für die dieser Fehler möglichst klein wird.

Überwachtes Lernen ist somit im Kern ein Optimierungsproblem.

---

## Modell und Parameter unterscheiden

Um Optimierung zu verstehen, ist es hilfreich, zwei verschiedene Bestandteile jedes Vorhersagemodells zu unterscheiden.

Der erste Bestandteil ist die **Modellstruktur**.

Bei der linearen Regression haben wir entschieden, dass Proteinstabilität durch die Gleichung

$$
\hat{y}=mx+c
$$

beschrieben werden soll.

Diese Gleichung drückt unsere biologische Hypothese aus, dass die Proteinstabilität ungefähr linear von der Hydrophobizität abhängt.

Wichtig ist: Der Lernalgorithmus verändert diese Gleichung nicht.

Die Modellstruktur wird von der Forschenden oder dem Forschenden festgelegt, bevor das Lernen beginnt.

Der zweite Bestandteil sind die **Modellparameter**.

In unserem Regressionsmodell sind dies

- die Steigung \(m\)
- und der Achsenabschnitt \(c\).

Im Unterschied zur Modellstruktur sind diese Werte zu Beginn unbekannt.

Lernen besteht daher darin, diese Parameter aus experimentellen Beobachtungen zu schätzen.

Diese Unterscheidung ist grundlegend, weil sie die Rollen von Biologie und maschinellem Lernen klar voneinander trennt.

Die Biologie entscheidet, **welches Modell verwendet werden soll**.

Maschinelles Lernen entscheidet, **welche Parameterwerte dieses Modell am besten an die Daten anpassen**.

---

## Jeder Parameter definiert ein anderes Modell

Stellen wir uns vor, wir zeichnen viele verschiedene Regressionsgeraden durch exakt denselben Datensatz.

Einige Geraden sind fast horizontal.

Andere sind sehr steil.

Manche unterschätzen die Proteinstabilität systematisch, andere überschätzen sie.

Obwohl alle diese Geraden dieselbe mathematische Form besitzen,

$$
\hat{y}=mx+c,
$$

entsprechen sie unterschiedlichen Parameterwerten.

Damit repräsentieren sie auch unterschiedliche Vorhersagemodelle.

Jedes dieser Modelle erzeugt

- andere Vorhersagen,
- andere Residuen
- und somit einen anderen Mean Squared Error.

Anstatt zu fragen

> "Welche Regressionsgerade sieht am besten aus?"

können wir nun eine deutlich präzisere mathematische Frage stellen:

> **Welche Parameterwerte minimieren den Vorhersagefehler?**

Diese Umformulierung ist einer der entscheidenden konzeptionellen Schritte im maschinellen Lernen.

Das Problem ist nun kein geometrisches mehr.

Es ist zu einem Optimierungsproblem geworden.

---

## Vom Parameterraum zum Verlustraum

Eine hilfreiche Art, dieses Optimierungsproblem zu visualisieren, besteht darin, die biologischen Daten selbst vorübergehend aus dem Blick zu nehmen.

Anstatt

- Hydrophobizität auf einer Achse
- und Proteinstabilität auf der anderen

aufzutragen, zeichnen wir einen ganz anderen Zusammenhang.

Die horizontale Achse repräsentiert nun den Modellparameter, zum Beispiel die Steigung \(m\).

Die vertikale Achse repräsentiert den Mean Squared Error, der durch genau diesen Parameterwert entsteht.

Jeder mögliche Wert von \(m\) entspricht also einem Punkt in diesem neuen Diagramm.

Für kleine Steigungen passt die Regressionsgerade schlecht zu den Daten, und der Vorhersagefehler ist groß.

Nähert sich die Steigung ihrem optimalen Wert, nimmt der Mean Squared Error ab.

Wird die Steigung zu groß, entfernt sich die Regressionsgerade erneut von den Beobachtungen, und der Vorhersagefehler steigt wieder an.

Das Ergebnis ist eine glatte, schüsselförmige Kurve.

Diese Kurve beschreibt nun nicht mehr die Biologie selbst.

Sie beschreibt die **Qualität unseres Modells**.

Deshalb spricht man häufig von der **Verlustlandschaft** oder der **Zielfunktion**.

---

## Das Optimierungsziel

Sobald diese Verlustlandschaft vorliegt, wird das Lernproblem bemerkenswert einfach formuliert.

Anstatt unendlich viele mögliche Regressionsgeraden zu betrachten, suchen wir jetzt nur noch einen bestimmten Punkt:

das Minimum der Verlustfunktion.

Mathematisch schreiben wir

$$
\underset{m}{\operatorname{argmin}}
\;
\mathrm{MSE}(m).
$$

Diese Schreibweise bedeutet einfach:

> **Finde den Parameterwert \(m\), für den der Mean Squared Error am kleinsten ist.**

Alles, was wir bisher aufgebaut haben, führt natürlich zu diesem Ziel.

Das Regressionsmodell legt fest, wie Vorhersagen erzeugt werden.

Der Mean Squared Error quantifiziert die Qualität dieser Vorhersagen.

Die Optimierung identifiziert die Parameterwerte, die diesen Fehler minimieren.

Diese Kette von Ideen ist so allgemein, dass sie auf nahezu jedes Verfahren des überwachten Lernens anwendbar ist.

Ganz gleich, ob das Modell

- lineare Regression,
- logistische Regression,
- eine Support-Vector-Machine,
- ein Random Forest
- oder ein tiefes neuronales Netz

ist: Lernen bedeutet immer, eine geeignete Verlustfunktion zu minimieren.

Nur die mathematische Form des Modells ändert sich.

Das Optimierungsprinzip bleibt dasselbe.

---

## Warum Optimierung eine so mächtige Idee ist

Die Formulierung von Lernen als Optimierung hat Folgen, die weit über die Regression hinausreichen.

Sie erlaubt es, zwei grundverschiedene wissenschaftliche Fragen voneinander zu trennen.

Die erste Frage ist biologisch:

> **Wie sollten wir das System beschreiben?**

Davon hängen die Wahl der Merkmale und die Struktur des Modells ab.

Die zweite Frage ist rechnerisch:

> **Wie lassen sich die Parameter dieses Modells möglichst effizient schätzen?**

Gerade weil diese beiden Fragen getrennt werden, können dieselben Optimierungsalgorithmen auf sehr unterschiedliche biologische Probleme angewendet werden.

Der Algorithmus muss nicht wissen, ob er

- Proteinstabilität,
- Enzymaktivität,
- Krankheitsrisiko,
- Genexpression
- oder Artenhäufigkeiten

vorhersagt.

Er benötigt nur

- ein Modell,
- eine Verlustfunktion
- und Daten.

Diese bemerkenswerte Allgemeinheit erklärt, warum Optimierung zu einem der vereinheitlichenden Konzepte des modernen maschinellen Lernens geworden ist.

---

## Warum wir einen numerischen Optimierungsalgorithmus brauchen

An dieser Stelle drängt sich eine naheliegende Frage auf.

Wenn die Verlustfunktion nur eine mathematische Gleichung ist, warum differenzieren wir sie dann nicht einfach, setzen die Ableitung gleich null und berechnen die optimalen Parameter direkt?

Für unser einfaches Regressionsmodell ist genau das tatsächlich möglich.

Lineare Regression besitzt eine geschlossene analytische Lösung, die sich mit Standardmethoden der Analysis bestimmen lässt.

Diese Möglichkeit beruht jedoch gerade auf der Einfachheit des Modells.

Moderne Modelle des maschinellen Lernens enthalten oft Millionen oder sogar Milliarden Parameter.

Für solche Modelle existieren analytische Lösungen entweder nicht oder sind rechnerisch unpraktikabel.

Wir benötigen daher einen numerischen Optimierungsalgorithmus, der die Parameter schrittweise verbessert, bis sich der Verlust nicht weiter reduzieren lässt.

Dieser Algorithmus ist das **Gradientenverfahren** (*gradient descent*).

Auch wenn wir es zunächst an dem einfachen Regressionsmodell dieses Kapitels einführen, ist es letztlich genau dasselbe algorithmische Prinzip, das das Training moderner tiefer neuronaler Netze ermöglicht.

Der Unterschied liegt nicht im Lernmechanismus selbst, sondern nur in der Anzahl der zu optimierenden Parameter.

---

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- zu erklären, was mit "Lernen" im mathematischen Sinn gemeint ist,
- zwischen Modellstruktur und Modellparametern zu unterscheiden,
- zu verstehen, warum jede Wahl von Parametern einem anderen Vorhersagemodell entspricht,
- die Verlustlandschaft als Funktion der Modellparameter zu interpretieren,
- zu erläutern, warum überwachtes Lernen als Optimierungsproblem formuliert werden kann.

### Konzeptionelle Zusammenfassung

Lernen im überwachten maschinellen Lernen bedeutet nicht, dass ein Modell biologisches Wissen selbstständig entdeckt. Es bedeutet vielmehr, die Parameter eines vorgegebenen mathematischen Modells so zu schätzen, dass seine Vorhersagen möglichst gut mit experimentellen Beobachtungen übereinstimmen. Der Mean Squared Error übersetzt Vorhersagequalität in ein numerisches Ziel und erlaubt es dadurch, Lernen als Minimierung einer Verlustfunktion zu formulieren. Diese Optimierungsperspektive ist eine der zentralen Ideen, auf denen nahezu alle modernen Verfahren des maschinellen Lernens beruhen.

### Fragen zur Selbstkontrolle

1. Was bedeutet der Begriff *Lernen* im überwachten maschinellen Lernen?
2. Worin unterscheiden sich die Struktur eines Modells und seine Parameter?
3. Warum entspricht jede Wahl von Modellparametern einem anderen Vorhersagemodell?
4. Welche Information enthält die Verlustlandschaft?
5. Warum lässt sich überwachtes Lernen als Optimierungsproblem formulieren?
6. Warum reichen analytische Lösungen für das Training moderner neuronaler Netze nicht aus?
