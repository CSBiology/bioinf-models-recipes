---
title: "11.5 Entropie und Informationsgewinn: Den besten Split wählen"
sidebar:
  label: "11.5 Entropie und Informationsgewinn: Den besten Split wählen"
  order: 5
  group: "Part 3"
  part: "Part 3"
---

# 11.5 Entropie und Informationsgewinn: Den besten Split wählen

## Nicht alle Fragen sind gleich informativ

Im vorigen Abschnitt haben wir gesehen, dass ein Entscheidungsbaum dadurch entsteht, dass wiederholt Fragen gestellt werden, welche die Daten in zunehmend homogenere Gruppen aufteilen.

Damit bleibt jedoch eine grundlegende Frage offen.

Angenommen, unser Pilzdatensatz enthält Dutzende möglicher Merkmale:

- Geruch,
- Hutfarbe,
- Stielform,
- Habitat,
- Druckstellenverfärbung,
- Sporenfarbe
- und viele weitere.

Welches Merkmal sollte für den allerersten Split verwendet werden?

Auf den ersten Blick können mehrere Möglichkeiten plausibel erscheinen.

Einige Merkmale trennen die Pilze recht gut, andere bewirken nur eine schwache Unterscheidung zwischen essbaren und giftigen Arten.

Der Lernalgorithmus braucht daher ein objektives Kriterium, um zu entscheiden, welche Frage die beste ist.

Anstatt sich auf biologische Intuition zu verlassen, benötigt er ein mathematisches Maß dafür, **wie informativ ein Split ist**.

Genau diese Rolle übernimmt die **Entropie**.

---

## Reine und gemischte Gruppen

Bevor wir die Entropie mathematisch einführen, lohnt sich ein Blick auf einige einfache Beispiele.

Stellen wir uns drei verschiedene Gruppen von Pilzen vor.

Die erste Gruppe enthält ausschließlich essbare Pilze.

Die zweite Gruppe enthält ausschließlich giftige Pilze.

Die dritte Gruppe besteht zu gleichen Teilen aus essbaren und giftigen Pilzen.

Intuitiv unterscheiden sich diese Gruppen in einem entscheidenden Punkt.

Die ersten beiden Gruppen sind vollständig **rein**.

Sobald wir wissen, dass ein Pilz zu einer dieser Gruppen gehört, ist seine Klasse sofort bestimmt.

Es bleibt keine Unsicherheit zurück.

Die dritte Gruppe ist grundlegend anders.

Zu wissen, dass ein Pilz zu dieser Gruppe gehört, hilft kaum weiter.

Er kann immer noch zu beiden Klassen gehören.

Die Unsicherheit ist maximal.

Damit wird anschaulich, was Entropie messen soll.

> **Entropie quantifiziert die Unsicherheit, die mit einer Menge von Beobachtungen verbunden ist.**

Reine Gruppen haben eine geringe Entropie.

Gemischte Gruppen haben eine hohe Entropie.

Das Ziel eines Entscheidungsbaums ist damit klar:

> **Splits finden, die gemischte Gruppen in immer reinere Gruppen überführen.**

---

## Unsicherheit mathematisch messen

Um Unsicherheit zu quantifizieren, müssen wir die Wahrscheinlichkeit jeder Klasse berücksichtigen.

Angenommen, der Anteil essbarer Pilze sei

$$
p(\text{essbar}),
$$

während der Anteil giftiger Pilze

$$
p(\text{giftig})
$$

beträgt.

Die Entropie des Datensatzes ist dann definiert als

$$
H(S)
=
-\sum_i p_i \log_2 p_i,
$$

wobei

- \(S\) den aktuellen Datensatz bezeichnet,
- \(p_i\) die Wahrscheinlichkeit für Klasse \(i\) ist
- und sich die Summe über alle möglichen Klassen erstreckt.

Obwohl diese Gleichung zunächst abstrakt wirken mag, ist ihre Interpretation ausgesprochen anschaulich.

Die Entropie misst, wie schwierig es ist, die Klasse einer zufällig ausgewählten Beobachtung vorherzusagen.

Dominiert eine Klasse den Datensatz deutlich, ist die Vorhersage vergleichsweise einfach.

Treten alle Klassen gleich häufig auf, wird die Vorhersage deutlich unsicherer.

Die Entropie liefert damit ein numerisches Maß für die Klassenreinheit.

---

## Entropie an Beispielen verstehen

Die Bedeutung der Entropie wird besonders klar, wenn wir einige einfache Spezialfälle betrachten.

### Eine vollständig reine Gruppe

Angenommen, jeder Pilz im Datensatz ist essbar.

Dann gelten die Klassenwahrscheinlichkeiten

$$
p(\text{essbar})=1,
\qquad
p(\text{giftig})=0.
$$

Es besteht keinerlei Unsicherheit.

Jeder Pilz gehört derselben Klasse an.

Folglich gilt

$$
H=0.
$$

Dies ist der kleinstmögliche Entropiewert.

Die Gruppe ist vollkommen rein.

---

### Eine vollständig gemischte Gruppe

Betrachten wir nun einen Datensatz, in dem die Hälfte der Pilze essbar und die andere Hälfte giftig ist.

Dann sind die Wahrscheinlichkeiten

$$
p(\text{essbar})
=
0.5,
\qquad
p(\text{giftig})
=
0.5.
$$

Vor der Beobachtung des Klassenlabels sind damit beide Ergebnisse gleich wahrscheinlich.

Unsere Unsicherheit ist maximal.

Die Entropie erreicht folglich ihren größtmöglichen Wert.

Dies entspricht gerade der Situation, in der Klassifikation am schwierigsten ist.

---

### Zwischenfälle

Die meisten biologischen Datensätze liegen zwischen diesen beiden Extremen.

Vielleicht sind

- 80 % der Pilze essbar,
- während 20 % giftig sind.

Die Unsicherheit ist nun reduziert.

Fehler bleiben zwar möglich, doch die Vorhersage "essbar" wird meistens korrekt sein.

Entsprechend ist die Entropie geringer als im perfekt ausgeglichenen Datensatz, aber höher als in einer vollständig reinen Gruppe.

Die Entropie verändert sich also stetig zwischen vollständiger Sicherheit und maximaler Unsicherheit.

Gerade dieses Verhalten macht sie zu einem idealen Maß für die Bewertung möglicher Splits beim Aufbau eines Entscheidungsbaums.

---

## Ein guter Split reduziert die Entropie

Angenommen, wir teilen unseren Pilzdatensatz nach dem Geruch auf.

Vor dem Split enthält der Datensatz eine Mischung aus essbaren und giftigen Pilzen.

Nach dem Split enthält ein Ast fast ausschließlich giftige Pilze, während der andere überwiegend essbare Pilze umfasst.

Beide Äste sind deutlich reiner als der ursprüngliche Datensatz.

Ihre Entropien sind daher kleiner.

Der Split hat also die Unsicherheit über die Klasse jedes Pilzes verringert.

Man stelle sich nun im Gegensatz dazu vor, der Datensatz werde nach einem Merkmal aufgeteilt, das mit Toxizität nichts zu tun hat.

Dann würden beide entstehenden Gruppen noch immer ungefähr dieselbe Mischung aus essbaren und giftigen Pilzen enthalten.

Ihre Entropie bliebe nahezu unverändert.

Ein solcher Split liefert nur wenig nützliche Information.

Daraus ergibt sich unmittelbar die zentrale Idee des Lernens mit Entscheidungsbäumen:

Ein guter Split ist ein Split, der die Entropie möglichst stark reduziert.

Die durch einen Split erzielte Verringerung der Entropie nennt man **Informationsgewinn**.

---

## Informationsgewinn

Der Informationsgewinn misst, wie viel Unsicherheit durch die Aufteilung des Datensatzes entfernt wird.

Er ist definiert als

$$
\text{Information Gain}
=
H(S)
-
H(S \mid A),
$$

wobei

- \(H(S)\) die Entropie vor dem Split ist
- und \(H(S \mid A)\) die verbleibende Entropie nach dem Split gemäß Merkmal \(A\) bezeichnet.

Der Informationsgewinn beantwortet damit eine sehr intuitive Frage:

> **Wie viel haben wir gelernt, indem wir genau diese Frage gestellt haben?**

Wenn ein Split zwei sehr reine Gruppen erzeugt, ist die verbleibende Entropie klein und der Informationsgewinn groß.

Verändert der Split dagegen kaum etwas, bleibt die Entropie hoch und der Informationsgewinn klein.

Der optimale Split ist daher einfach derjenige mit dem **größten Informationsgewinn**.

Gerade dieses bemerkenswert einfache Prinzip ermöglicht es dem Entscheidungsbaum, automatisch zu entscheiden, welches biologische Merkmal als Nächstes untersucht werden sollte.

---

## Lernen durch Verringerung von Unsicherheit

Der Informationsgewinn macht eine wichtige Verbindung zwischen maschinellem Lernen und Informationstheorie sichtbar.

Ein Entscheidungsbaum teilt die Daten nicht bloß auf.

Er stellt vielmehr wiederholt die Frage, von der die stärkste Verringerung der Unsicherheit zu erwarten ist.

Jeder Split macht das verbleibende Vorhersageproblem einfacher.

Während der Baum wächst, nimmt die Unsicherheit Schritt für Schritt ab, bis jeder Blattknoten Beobachtungen enthält, die fast ausschließlich zu einer einzigen biologischen Klasse gehören.

Der Baum lernt also, indem er Unsicherheit fortlaufend reduziert.

Aus dieser Perspektive erhalten Entscheidungsbäume eine tiefere Interpretation.

Anstatt sie nur als Sammlungen von Regeln zu betrachten, können wir sie als Algorithmen verstehen, die schrittweise Information aus biologischen Daten extrahieren.

Jede Entscheidung trägt zur Beantwortung derselben grundlegenden Frage bei:

> **Welches Merkmal sagt uns am meisten über die biologische Klasse, die wir vorhersagen möchten?**

---

### Zentrale Konzepte

- Entropie misst die Unsicherheit oder Unreinheit einer Menge von Beobachtungen.
- Reine Gruppen haben eine geringe Entropie, gemischte Gruppen eine hohe.
- Entscheidungsbäume suchen nach Splits, die die Entropie verringern.
- Der Informationsgewinn quantifiziert die durch einen Split erzielte Verringerung der Unsicherheit.
- An jedem Knoten wird das Merkmal mit dem größten Informationsgewinn ausgewählt.

---

### Zusammenfassung

Entscheidungsbäume benötigen ein objektives Kriterium, um zu entscheiden, welches Merkmal bei einem Split verwendet werden soll. Die Entropie liefert ein mathematisches Maß für die Unsicherheit der Klassenverteilung, während der Informationsgewinn angibt, wie stark diese Unsicherheit durch eine Aufteilung der Daten reduziert wird. Indem an jedem Knoten das Merkmal mit dem höchsten Informationsgewinn gewählt wird, verwandelt ein Entscheidungsbaum heterogene Datensätze schrittweise in immer homogenere Gruppen und erzeugt so präzise und interpretierbare Klassifikationsregeln.

---

### Fragen zur Selbstkontrolle

1. Was misst die Entropie im Kontext von Entscheidungsbäumen?
2. Warum haben reine Gruppen eine geringere Entropie als gemischte Gruppen?
3. Wann ist die Entropie maximal?
4. Was versteht man unter Informationsgewinn?
5. Warum führt ein guter Split zu einem großen Informationsgewinn?
6. Warum ist der Informationsgewinn ein geeignetes Kriterium für den Aufbau eines Entscheidungsbaums?
7. Wie führt die wiederholte Maximierung des Informationsgewinns zu einem vollständigen Entscheidungsbaum?
