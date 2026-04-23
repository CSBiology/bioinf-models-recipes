---
title: "5.4 Das Problem der Motivsuche"
sidebar:
  label: "5.4 Das Problem der Motivsuche"
  order: 4
  group: "Part 2"
  part: "Part 2"
---

# **5.4 Das Problem der Motivsuche**

### **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* das Problem der Motivsuche präzise zu formulieren
* zu verstehen, wie aus Sequenzen Kandidatenpositionen für Motive erzeugt werden
* zu erklären, warum Motiventdeckung grundsätzlich schwierig ist
* das „Henne-und-Ei“-Problem der Motivinferenz zu beschreiben
* Motivsuche als Problem mit verborgenen Variablen zu erkennen

---

In den vorherigen Abschnitten haben wir einen probabilistischen Rahmen entwickelt, um Motive zu beschreiben und ihre Stärke zu quantifizieren. Dieser Rahmen erlaubt es uns, zu bewerten, wie gut ein gegebenes Sequenzsegment zu einem Motivmodell passt. Eine wesentliche Frage bleibt jedoch offen: Wie gelangen wir überhaupt zu einem solchen Motivmodell?

In der Praxis erhalten wir keine bereits alignierten Motivinstanzen. Stattdessen bekommen wir eine Sammlung von Sequenzen, in denen Motivvorkommen an unbekannten Positionen eingebettet sind. Die Aufgabe besteht daher nicht nur darin, ein Motiv zu beschreiben, sondern darin, es *in rohen Sequenzdaten zu entdecken*.

Um dieses Problem konkreter zu machen, betrachten wir eine Menge von DNA-Sequenzen, die vermutlich ein gemeinsames regulatorisches Element teilen. Jede Sequenz kann ein Motiv der Länge $w$ enthalten, aber wir wissen nicht, an welcher Stelle es beginnt. Ein naheliegender Ansatz besteht darin, systematisch alle möglichen Teilsequenzen der Länge $w$ in jeder Sequenz zu untersuchen. Dies lässt sich umsetzen, indem ein Fenster der Länge $w$ entlang der Sequenz verschoben und jede resultierende Teilsequenz extrahiert wird.

Für eine Sequenz der Länge $L$ liefert dieses Verfahren $L - w + 1$ Kandidatensequenzen. Jede davon ist ein potenzielles Motivvorkommen. Wenn wir wüssten, welche dieser Kandidaten tatsächlich Motivinstanzen sind, könnten wir sie alignieren und das probabilistische Modell wie in Abschnitt 5.2 konstruieren. Umgekehrt könnten wir, wenn wir bereits ein verlässliches Motivmodell hätten, alle Kandidaten bewerten und diejenigen identifizieren, die am besten zum Motiv passen.

### **Eine zirkuläre Abhängigkeit**

An dieser Stelle tritt eine grundlegende Schwierigkeit zutage. Für die Konstruktion des Motivmodells müssen wir die Motivpositionen kennen, während die Identifikation der Motivpositionen wiederum ein Modell des Motivs voraussetzt. Keines von beidem lässt sich unabhängig vom anderen bestimmen.

Diese wechselseitige Abhängigkeit führt zu dem, was häufig als *„Henne-und-Ei“-Problem* bezeichnet wird. Wir können das Modell nicht aufbauen, ohne die Positionen zu kennen, und wir können die Positionen nicht finden, ohne ein Modell zu haben. Deshalb greifen einfache Verfahren, die nur auf direktem Zählen oder direktem Vergleich beruhen, hier nicht mehr.

Diese Situation unterscheidet sich klar von den Problemen in den vorherigen Kapiteln. Bei Sequenzalignment und Ähnlichkeitssuche haben wir Sequenzen direkt miteinander verglichen und ihre Ähnlichkeit anhand beobachtbarer Merkmale bewertet. Bei der Motivsuche dagegen ist die relevante Struktur nicht direkt sichtbar. Sie muss aus Daten erschlossen werden, in denen das eigentliche Signal verborgen ist.

### **Motivsuche als Problem mit verborgener Struktur**

Um diese Schwierigkeit besser zu verstehen, ist es hilfreich, das Problem abstrakter zu betrachten. Die Sequenzen selbst sind vollständig beobachtbar. Die Positionen, an denen das Motiv innerhalb der Sequenzen auftritt, sind dagegen nicht beobachtbar. Diese Positionen stellen *verborgene Variablen* dar, weil sie festlegen, welche Teile der Sequenzen tatsächlich Motivinstanzen sind.

Gleichzeitig ist auch das Motivmodell selbst unbekannt und muss aus den Daten geschätzt werden. Dadurch entsteht eine Situation, in der sowohl die Struktur, die wir lernen möchten, als auch die Evidenz, die wir zum Lernen brauchen, voneinander abhängen.

Aus dieser Perspektive ist Motivsuche nicht einfach ein Problem des Pattern Matching, sondern ein Problem der *Inferenz unter unvollständiger Information*. Die Beobachtungen liegen vor, aber ein Teil des generativen Prozesses, der diese Beobachtungen hervorgebracht hat, bleibt verborgen.

### **Warum einfache Strategien scheitern**

Man könnte versuchen, dieses Problem zu lösen, indem man zunächst die Motivpositionen rät und auf dieser Grundlage ein Modell konstruiert. Ein solcher Ansatz ist jedoch hochgradig fehleranfällig. Wenn die anfängliche Vermutung falsch ist, wird das resultierende Modell verzerrt, und spätere Iterationen verstärken möglicherweise diese falsche Struktur, anstatt sie zu korrigieren.

Alternativ könnte man versuchen, erschöpfend alle möglichen Kombinationen von Motivpositionen zu durchsuchen. Doch die Zahl dieser möglichen Konfigurationen wächst exponentiell mit Anzahl und Länge der Sequenzen und macht einen solchen Ansatz rechnerisch unpraktikabel.

Diese Schwierigkeiten zeigen, dass ein prinzipiellerer Ansatz nötig ist, der mit Unsicherheit systematisch umgehen kann und sowohl Motivmodell als auch Motivpositionen schrittweise verfeinert.

### **Eine Brücke zur iterativen Inferenz**

An dieser Stelle lohnt es sich, einen Schritt zurückzutreten und die Struktur des Problems noch einmal zu betrachten. Wir haben es mit einem System zu tun, in dem beobachtete Daten durch einen Prozess erzeugt werden, der verborgene Variablen enthält. Unser Ziel besteht darin, sowohl diese verborgenen Variablen als auch die Modellparameter zu erschließen, die diesen Prozess beschreiben.

Diese Art von Problem tritt in vielen Bereichen statistischer Modellierung und des maschinellen Lernens auf. Eine verbreitete Strategie besteht darin, harte Entscheidungen durch probabilistisches Denken zu ersetzen und Schätzungen iterativ zu verfeinern, anstatt das Problem in einem einzigen Schritt lösen zu wollen.

Diese Einsicht bildet die konzeptionelle Brücke zum nächsten Abschnitt. Um die zirkuläre Abhängigkeit im Kern der Motivsuche aufzulösen, benötigen wir ein Verfahren, das zwischen der Schätzung verborgener Struktur und der Aktualisierung von Modellparametern alterniert. Der Expectation-Maximization-Algorithmus liefert genau eine solche Strategie.

---

### **Fragen zur Selbstkontrolle**

1. Wie können aus einer Sequenz Kandidatenpositionen für ein Motiv erzeugt werden?
2. Warum lässt sich ein Motivmodell nicht direkt aus nicht alignierten Sequenzen konstruieren?
3. Was bedeutet das „Henne-und-Ei“-Problem in der Motivsuche?
4. Warum scheitern naive Ansätze auf Basis von Raten oder erschöpfender Suche?
5. In welchem Sinn lässt sich Motivsuche als Problem mit verborgenen Variablen verstehen?
