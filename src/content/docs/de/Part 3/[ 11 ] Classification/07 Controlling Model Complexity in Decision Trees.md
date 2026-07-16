---
title: "11.7 Modellkomplexität bei Entscheidungsbäumen kontrollieren"
sidebar:
  label: "11.7 Modellkomplexität bei Entscheidungsbäumen kontrollieren"
  order: 7
  group: "Part 3"
  part: "Part 3"
---

# 11.7 Modellkomplexität bei Entscheidungsbäumen kontrollieren

## Wann wird ein Entscheidungsbaum zu komplex?

Entscheidungsbäume sind bemerkenswert flexible Modelle.

Indem sie den Merkmalsraum wiederholt aufteilen, können sie hochkomplexe Entscheidungsgrenzen approximieren und auf den Trainingsdaten oft sehr gute Ergebnisse erzielen.

Diese Flexibilität hat jedoch ihren Preis.

Wie wir in Kapitel 10 gesehen haben, führt zunehmende Modellkomplexität irgendwann zu Overfitting. Entscheidungsbäume bilden hier keine Ausnahme.

Angenommen, wir teilen die Trainingsdaten so lange weiter auf, bis jeder Blattknoten nur noch eine einzelne Beobachtung enthält.

Der resultierende Baum klassifiziert die Trainingsdaten perfekt.

Jeder Pilz, jedes Protein oder jeder Patient wird der richtigen Klasse zugeordnet.

Auf den ersten Blick wirkt dies wie ein idealer Klassifikator.

Tatsächlich hat ein solcher Baum die Trainingsdaten jedoch lediglich auswendig gelernt.

Viele der letzten Verzweigungen beschreiben zufällige Eigenschaften, die nur in dem vorliegenden Datensatz auftreten, anstatt allgemeine biologische Zusammenhänge zu erfassen.

Bei neuen Beobachtungen sinkt die Vorhersagegenauigkeit dann oft deutlich.

Ein perfekt angepasster Entscheidungsbaum ist daher nicht notwendigerweise ein guter Entscheidungsbaum.

---

## Underfitting und Overfitting erneut betrachtet

Entscheidungsbäume veranschaulichen die in Kapitel 10 eingeführten Konzepte besonders gut.

Stellen wir uns drei verschiedene Bäume für dasselbe Klassifikationsproblem vor.

Der erste Baum enthält nur eine einzige Entscheidung.

Vielleicht fragt er lediglich, ob der Pilz angenehm riecht.

Obwohl diese einfache Regel bereits etwas biologische Information erfasst, bleiben viele Pilze falsch klassifiziert.

Der Baum ist zu simpel, um die zugrunde liegenden biologischen Beziehungen angemessen zu beschreiben.

Das ist ein Beispiel für **Underfitting**.

Nun betrachten wir einen Baum, der so lange weiterwächst, bis jedes Trainingsbeispiel in seinem eigenen Blattknoten landet.

Ein solcher Baum klassifiziert die Trainingsdaten perfekt.

Viele seiner letzten Entscheidungen beruhen jedoch auf zufälligen Schwankungen, die sich in zukünftigen Beobachtungen wahrscheinlich nicht wiederholen.

Dieser Baum stellt **Overfitting** dar.

Zwischen diesen beiden Extremen liegt ein Baum mittlerer Komplexität, der die wesentlichen biologischen Muster erfasst, ohne zufällige Variation zu modellieren.

Gerade dieses mittlere Komplexitätsniveau generalisiert am besten auf neue Daten.

Damit gilt der im vorigen Kapitel eingeführte Bias-Varianz-Kompromiss unmittelbar auch für Entscheidungsbäume.

---

## Die Baumtiefe bestimmt die Modellkomplexität

Eines der einfachsten Maße für die Komplexität eines Entscheidungsbaums ist seine **Tiefe**.

Die Tiefe eines Baums entspricht der Zahl der Entscheidungen, die bis zu einer Vorhersage getroffen werden müssen.

Ein flacher Baum besitzt nur wenige Entscheidungsebenen.

Vorhersagen werden schnell getroffen, und das resultierende Modell ist in der Regel leicht zu interpretieren.

Allerdings können flache Bäume wichtige Wechselwirkungen zwischen biologischen Merkmalen übersehen.

Tiefe Bäume verhalten sich anders.

Sie können hochkomplexe Entscheidungsgrenzen darstellen, weil jede zusätzliche Ebene neue Möglichkeiten schafft, den Merkmalsraum weiter zu unterteilen.

Der Preis dieser Flexibilität ist ein erhöhtes Risiko für Overfitting.

Schon kleine Änderungen in den Trainingsdaten können nahe den unteren Ebenen des Baums zu ganz anderen Verzweigungen führen.

Tiefe Bäume weisen daher typischerweise eine hohe Varianz auf.

Die Wahl einer geeigneten Baumtiefe gehört folglich zu den wichtigsten Konstruktionsentscheidungen beim Aufbau eines Entscheidungsbaums.

---

## Pre-Pruning: das Baumwachstum früh begrenzen

Eine Möglichkeit, die Modellkomplexität zu kontrollieren, besteht darin, den Baum gar nicht erst unnötig tief werden zu lassen.

Dieser Ansatz wird als **Pre-Pruning** oder **Early Stopping** bezeichnet.

Anstatt unbegrenztes Wachstum zuzulassen, beendet der Lernalgorithmus weitere Splits, sobald vorab festgelegte Kriterien erfüllt sind.

Typische Abbruchbedingungen sind:

- eine maximale Baumtiefe,
- eine Mindestanzahl von Beobachtungen pro Knoten,
- ein minimaler Informationsgewinn, bevor ein Split akzeptiert wird,
- oder die Bedingung, dass alle Beobachtungen in einem Knoten derselben Klasse angehören.

Diese Regeln beschränken die Flexibilität des Baums bewusst.

Das resultierende Modell klassifiziert die Trainingsdaten möglicherweise nicht mehr vollständig fehlerfrei, generalisiert dafür aber oft besser auf bislang unbekannte Daten.

Mit anderen Worten: Ein kleiner Anstieg des Trainingsfehlers kann zu einer deutlichen Verbesserung der Vorhersagegenauigkeit führen.

---

## Post-Pruning: einen vollständig gewachsenen Baum vereinfachen

Eine alternative Strategie heißt **Post-Pruning**.

Hier wird das Wachstum nicht von Beginn an eingeschränkt.

Stattdessen erzeugt der Algorithmus zunächst einen großen Baum, der möglichst viel Struktur in den Daten erfasst.

Erst danach werden diejenigen Äste entfernt, die nur wenig zur Vorhersageleistung beitragen.

Dieser Prozess ähnelt der Überarbeitung eines Manuskripts.

Der erste Entwurf enthält viele Details.

Bei der Revision werden überflüssige Passagen gestrichen, sodass nur der wesentliche Inhalt erhalten bleibt.

Ganz ähnlich entfernt Post-Pruning diejenigen Äste, die nur wenige Trainingsbeispiele erklären oder kaum zur Generalisierung beitragen.

Der resultierende Baum ist typischerweise

- kleiner,
- leichter interpretierbar
- und robuster gegenüber neuen Beobachtungen.

Viele moderne Entscheidungsbaumverfahren nutzen ausgefeilte Pruning-Strategien, weil sie häufig bessere Vorhersageleistungen liefern als ein ungebremstes Baumwachstum.

---

## Den optimalen Baum wählen

Wie entscheiden wir, welche Version des Baums letztlich verwendet werden sollte?

Wie bereits in Kapitel 10 diskutiert, lautet die Antwort: **Kreuzvalidierung**.

Es werden mehrere Kandidatenbäume mit unterschiedlicher Komplexität konstruiert.

Einige sind flach, andere tief.

Ihre Vorhersageleistung wird anschließend auf unabhängigen Validierungsdaten bewertet.

Gewählt wird der Baum mit dem kleinsten Validierungsfehler.

Hier zeigt sich, wie die Konzepte der vorangegangenen Kapitel zusammenwirken.

Entropie und Informationsgewinn bestimmen, **wie** der Baum aufgebaut wird.

Kreuzvalidierung bestimmt, **wie groß** der Baum werden sollte.

Beides ist notwendig.

Ein Entscheidungsbaum, der zwar informative Fragen stellt, aber unkontrolliert weiterwächst, kann dennoch schlecht generalisieren.

Erst die Verbindung von Baumkonstruktion und sorgfältiger Modellauswahl führt zu verlässlichen Klassifikatoren.

---

## Einfachheit und Interpretierbarkeit

Eine der größten Stärken von Entscheidungsbäumen besteht darin, dass sie selbst nach einer Optimierung oft verständlich bleiben.

Im Gegensatz zu vielen anderen Verfahren des maschinellen Lernens lässt sich der finale Klassifikator in der Regel vollständig visualisieren.

Forschende können jede Entscheidung inspizieren, jede Vorhersage nachverfolgen und genau verstehen, warum eine Beobachtung einer bestimmten Klasse zugeordnet wurde.

Diese Interpretierbarkeit macht Entscheidungsbäume in der Biologie besonders attraktiv.

In vielen Anwendungen ist es beinahe ebenso wichtig zu verstehen, *warum* eine Vorhersage getroffen wurde, wie die Vorhersage selbst.

So kann etwa die Identifikation der Sequenzmerkmale, die Chloroplastenproteine von mitochondrialen Proteinen unterscheiden, wertvolle biologische Einsichten in Mechanismen des Protein-Targetings liefern.

Entscheidungsbäume dienen daher nicht nur als Vorhersagemodelle, sondern auch als Werkzeuge wissenschaftlicher Erkenntnisgewinnung.

Gleichzeitig hat die Interpretierbarkeit ihre Grenzen.

Wenn die Vorhersagegenauigkeit das wichtigste Ziel ist, liefert die Kombination vieler Entscheidungsbäume oft deutlich bessere Ergebnisse.

Diese Idee bildet die Grundlage des **Ensemble Learning**, das wir im nächsten Abschnitt einführen.

---

### Zentrale Konzepte

- Entscheidungsbäume werden mit zunehmender Tiefe flexibler.
- Sehr flache Bäume neigen zu Underfitting, sehr tiefe Bäume häufig zu Overfitting.
- **Pre-Pruning** begrenzt das Baumwachstum bereits während des Aufbaus.
- **Post-Pruning** vereinfacht einen bereits konstruierten Baum nachträglich.
- Kreuzvalidierung dient dazu, die passende Baumkomplexität zu bestimmen.
- Auch nach einer Optimierung bleiben Entscheidungsbäume oft stark interpretierbar.

---

### Zusammenfassung

Die Komplexität eines Entscheidungsbaums wird weitgehend durch seine Tiefe bestimmt. Tiefere Bäume können komplexere biologische Zusammenhänge abbilden, sind aber zugleich anfälliger für Overfitting. Moderne Entscheidungsbaumverfahren verwenden deshalb Abbruchkriterien und Pruning-Strategien, um Flexibilität und Generalisierbarkeit auszubalancieren. Die Kreuzvalidierung liefert ein praktisches Verfahren zur Wahl der passenden Baumkomplexität, während die inhärente Interpretierbarkeit von Entscheidungsbäumen sie sowohl für Vorhersageaufgaben als auch für die Gewinnung biologischer Hypothesen wertvoll macht.

---

### Fragen zur Selbstkontrolle

1. Warum kann ein perfekt angepasster Entscheidungsbaum auf neuen Daten dennoch schlecht abschneiden?
2. Wie beeinflusst die Baumtiefe die Komplexität eines Entscheidungsbaums?
3. Worin besteht der Unterschied zwischen Pre-Pruning und Post-Pruning?
4. Warum kann Pruning die Vorhersagegenauigkeit verbessern?
5. Wie wird Kreuzvalidierung beim Aufbau von Entscheidungsbäumen eingesetzt?
6. Warum gelten Entscheidungsbäume häufig als besser interpretierbar als viele andere Modelle des maschinellen Lernens?
7. Warum kann Interpretierbarkeit gerade in der biologischen Forschung besonders wertvoll sein?
