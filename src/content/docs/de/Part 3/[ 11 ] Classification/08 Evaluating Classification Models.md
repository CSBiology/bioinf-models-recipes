---
title: "11.8 Klassifikationsmodelle bewerten"
sidebar:
  label: "11.8 Klassifikationsmodelle bewerten"
  order: 8
  group: "Part 3"
  part: "Part 3"
---

# 11.8 Klassifikationsmodelle bewerten

## Wann ist ein Klassifikator "gut"?

Nachdem ein Klassifikationsmodell konstruiert wurde, stellt sich unmittelbar eine naheliegende Frage:

> **Wie lässt sich feststellen, ob der Klassifikator gut arbeitet?**

Bei Regressionsmodellen war die Antwort vergleichsweise einfach.

Weil die Vorhersagen kontinuierliche numerische Werte waren, konnten wir vorhergesagte und beobachtete Werte direkt vergleichen und Maße wie den **Mean Squared Error (MSE)** berechnen.

Klassifikationsprobleme sind grundlegend anders.

Die Vorhersage ist nun keine kontinuierliche Zahl mehr, sondern ein Klassenlabel.

Ein Klassifikator, der vorhersagt, ob ein Pilz *essbar* oder *giftig* ist, lässt sich nicht bewerten, indem man einen numerischen Abstand zwischen Vorhersage und wahrer Klasse misst.

Stattdessen müssen wir eine viel einfachere Frage stellen:

> **War die Vorhersage korrekt oder inkorrekt?**

So einfach dies zunächst klingt, so überraschend vielschichtig ist die Bewertung von Klassifikationsmodellen in der Praxis.

Verschiedene Arten von Fehlvorhersagen haben oft sehr unterschiedliche biologische Konsequenzen.

---

## Die Confusion Matrix

Die Grundlage der Bewertung von Klassifikationsmodellen ist die **Confusion Matrix**.

Bei einem binären Klassifikationsproblem fällt jede Vorhersage in genau eine von vier möglichen Kategorien.

Angenommen, wir möchten vorhersagen, ob ein Patient an einer bestimmten Krankheit leidet.

Dann kann jede Vorhersage wie folgt eingeordnet werden:

| Tatsächliche Klasse | Positiv vorhergesagt | Negativ vorhergesagt |
|--------------|-------------------|-------------------|
| **Positiv** | True Positive (TP) | False Negative (FN) |
| **Negativ** | False Positive (FP) | True Negative (TN) |

Jeder dieser Einträge besitzt eine klare biologische Bedeutung.

- Ein **True Positive** ist ein erkrankter Patient, der korrekt erkannt wurde.
- Ein **True Negative** ist ein gesunder Patient, der korrekt klassifiziert wurde.
- Ein **False Positive** ist ein gesunder Patient, der fälschlich als krank diagnostiziert wird.
- Ein **False Negative** ist ein erkrankter Patient, der irrtümlich als gesund eingestuft wird.

Die Confusion Matrix fasst also nicht nur zusammen, wie oft ein Klassifikator richtig liegt, sondern auch **welche Arten von Fehlern er macht**.

Gerade diese Unterscheidung ist häufig wichtiger als die bloße Gesamtzahl korrekter Vorhersagen.

---

## Accuracy: das einfachste Leistungsmaß

Das intuitivste Maß für die Güte eines Klassifikators ist die **Accuracy**.

Die Accuracy beschreibt schlicht den Anteil korrekt klassifizierter Beobachtungen,

$$
\text{Accuracy}
=
\frac{TP+TN}{TP+TN+FP+FN}.
$$

Wenn ein Klassifikator 95 von 100 Beobachtungen korrekt vorhersagt, beträgt seine Accuracy 95 %.

Die Accuracy ist leicht zu verstehen und wird häufig berichtet.

Sie besitzt jedoch eine wichtige Schwäche.

Sie setzt voraus, dass alle Arten von Fehlvorhersagen gleich schwer wiegen.

In Biologie und Medizin ist diese Annahme jedoch oft unrealistisch.

Einen Krebspatienten zu übersehen ist in der Regel erheblich schwerwiegender, als einen gesunden Patienten fälschlich zu einer weiterführenden Untersuchung zu schicken.

Ebenso kann das Übersehen einer toxischen Verbindung deutlich gravierendere Folgen haben, als eine harmlose Verbindung vorsorglich als potenziell gefährlich einzustufen.

Für eine angemessene Bewertung von Klassifikationsmodellen benötigen wir daher Maße, die zwischen unterschiedlichen Fehlertypen unterscheiden.

---

## Precision und Recall

Zu den am häufigsten verwendeten Leistungsmaßen gehören **Precision** und **Recall**.

Sie sind eng miteinander verwandt, beantworten jedoch unterschiedliche biologische Fragen.

### Precision

Precision fragt:

> **Wenn der Klassifikator ein positives Ergebnis vorhersagt, wie oft liegt er dann richtig?**

Sie ist definiert als

$$
\text{Precision}
=
\frac{TP}{TP+FP}.
$$

Eine hohe Precision bedeutet, dass positive Vorhersagen sehr verlässlich sind.

Wenn ein Klassifikator beispielsweise vorhersagt, dass eine genetische Variante pathogen ist, dann zeigt eine hohe Precision, dass diese Vorhersage in der Regel korrekt ist.

Precision ist besonders wichtig, wenn False Positives teuer sind oder sich experimentell nur schwer überprüfen lassen.

---

### Recall

Recall beantwortet eine andere Frage:

> **Wie viele der tatsächlich positiven Beobachtungen wurden erfolgreich erkannt?**

Er ist definiert als

$$
\text{Recall}
=
\frac{TP}{TP+FN}.
$$

Ein hoher Recall bedeutet, dass nur wenige positive Beobachtungen übersehen werden.

In der medizinischen Diagnostik ist Recall oft von zentraler Bedeutung.

Ein Screening-Test sollte idealerweise jeden erkrankten Patienten erkennen, selbst wenn das dazu führt, dass manche gesunden Personen weiter untersucht werden müssen.

Recall ist daher besonders wichtig, wenn False Negatives schwerwiegende Konsequenzen haben.

---

## Der Zielkonflikt zwischen Precision und Recall

In vielen Anwendungen führt eine Verbesserung der Precision zu einer Verringerung des Recall und umgekehrt.

Angenommen, wir klassifizieren Proteine entweder als chloroplastidär oder mitochondrial.

Wenn wir nur dann "chloroplastidär" vorhersagen, wenn die Evidenz extrem stark ist, dann werden diese Vorhersagen sehr verlässlich sein.

Die Precision ist hoch.

Allerdings bleiben nun viele tatsächlich chloroplastidäre Proteine unklassifiziert oder werden der falschen Klasse zugeordnet.

Der Recall sinkt.

Alternativ könnten wir den Entscheidungsschwellenwert senken und deutlich mehr Proteine als chloroplastidär klassifizieren.

Dann steigt der Recall, weil weniger echte Chloroplastenproteine übersehen werden.

Gleichzeitig werden nun aber mehr mitochondriale Proteine falsch eingeordnet.

Die Precision sinkt.

Daran zeigt sich ein wichtiges Prinzip.

Es gibt oft **kein universell optimales Leistungsmaß**.

Welche Balance sinnvoll ist, hängt von der biologischen Fragestellung ab.

---

## Der F1-Score

Wenn sowohl Precision als auch Recall wichtig sind, werden sie häufig in einem einzigen Maß zusammengeführt, dem **F1-Score**.

Der F1-Score ist als harmonisches Mittel von Precision und Recall definiert,

$$
F_1
=
2
\cdot
\frac{\text{Precision}\times\text{Recall}}
{\text{Precision}+\text{Recall}}.
$$

Im Gegensatz zum arithmetischen Mittel wird das harmonische Mittel klein, sobald entweder Precision oder Recall schlecht ist.

Ein hoher F1-Score kann daher nur erreicht werden, wenn beide Größen gleichzeitig hoch sind.

Der F1-Score liefert damit eine ausgewogene Zusammenfassung der Klassifikationsleistung und gehört zu den am häufigsten berichteten Bewertungsmaßen im maschinellen Lernen.

---

## Warum Accuracy irreführend sein kann

Die Grenzen der Accuracy treten besonders deutlich bei **unausgeglichenen Datensätzen** zutage.

Stellen wir uns vor, wir entwickeln einen Klassifikator zur Erkennung einer seltenen genetischen Erkrankung.

Nehmen wir an, nur 1 % der Patienten sind tatsächlich erkrankt.

Betrachten wir nun einen extrem naiven Klassifikator.

Anstatt irgendeine biologische Information auszuwerten, sagt er für jeden Patienten einfach

> **Gesund**

vorher.

Ein solcher Klassifikator hätte eine Accuracy von 99 %.

Auf den ersten Blick wirkt das hervorragend.

Tatsächlich ist das Modell jedoch vollständig unbrauchbar.

Es hat nicht einen einzigen erkrankten Patienten erkannt.

Das Problem besteht darin, dass die Accuracy von der großen Zahl gesunder Personen dominiert wird.

Die seltenen, biologisch aber besonders wichtigen positiven Fälle tragen nur wenig zum Gesamtscore bei.

Maße wie Precision, Recall und F1-Score machen diese Schwäche sofort sichtbar.

Für viele biologische Anwendungen liefern sie daher wesentlich aussagekräftigere Bewertungen.

---

## Das passende Bewertungsmaß wählen

Kein einzelnes Bewertungsmaß ist für jedes Klassifikationsproblem optimal.

Vielmehr hängt die geeignete Metrik von der wissenschaftlichen Fragestellung ab.

Wenn False Positives besonders kostspielig sind, sollte Precision stärker gewichtet werden.

Wenn das Übersehen positiver Beobachtungen nicht akzeptabel ist, wird Recall wichtiger.

Sind beide Ziele gleichermaßen relevant, bietet der F1-Score häufig einen sinnvollen Kompromiss.

Diese Zielkonflikte zu verstehen, ist wesentlich für die Interpretation publizierter Machine-Learning-Studien.

Zwei Klassifikatoren mit identischer Accuracy können sich sehr unterschiedlich verhalten, je nachdem, wie sie False Positives und False Negatives austarieren.

Verantwortungsvolles maschinelles Lernen erfordert daher, mehrere komplementäre Bewertungsmaße zu berichten, anstatt sich auf eine einzige zusammenfassende Kennzahl zu verlassen.

---

### Zentrale Konzepte

- Die Leistung eines Klassifikators wird mithilfe der **Confusion Matrix** bewertet.
- Die Confusion Matrix unterscheidet zwischen True Positives, True Negatives, False Positives und False Negatives.
- **Accuracy** misst den Anteil korrekt klassifizierter Beobachtungen.
- **Precision** misst die Verlässlichkeit positiver Vorhersagen.
- **Recall** misst die Fähigkeit, positive Beobachtungen zu erkennen.
- Der **F1-Score** kombiniert Precision und Recall in einem einzigen Leistungsmaß.
- Allein betrachtet kann Accuracy bei unausgeglichenen biologischen Datensätzen irreführend sein.

---

### Zusammenfassung

Die Bewertung von Klassifikationsmodellen erfordert mehr als das bloße Zählen korrekter Vorhersagen. Die Confusion Matrix beschreibt detailliert die verschiedenen Arten von Klassifikationsfehlern und bildet damit die Grundlage für Maße wie Accuracy, Precision, Recall und F1-Score. Jedes dieser Maße betont andere Aspekte der Vorhersageleistung und eignet sich deshalb für unterschiedliche biologische Anwendungen. Die Wahl des passenden Bewertungsmaßes ist daher ein wesentlicher Bestandteil sowohl der Entwicklung als auch der Interpretation von Klassifikationsmodellen.

---

### Fragen zur Selbstkontrolle

1. Warum ist der Mean Squared Error zur Bewertung von Klassifikationsmodellen ungeeignet?
2. Welche Information enthält eine Confusion Matrix?
3. Was ist der Unterschied zwischen einem False Positive und einem False Negative?
4. Wie wird Accuracy berechnet?
5. Warum kann Accuracy bei stark unausgeglichenen Datensätzen irreführend sein?
6. Welche biologische Frage beantwortet Precision?
7. Welche biologische Frage beantwortet Recall?
8. Warum besteht häufig ein Zielkonflikt zwischen Precision und Recall?
9. Warum wird der F1-Score in Studien des maschinellen Lernens so häufig berichtet?
10. Welches Bewertungsmaß würden Sie für einen Krankheitsscreening-Test priorisieren? Welches für die Bestätigung einer Diagnose? Begründen Sie Ihre Antwort.
