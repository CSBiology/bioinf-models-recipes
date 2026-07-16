---
title: "9.1 Vom Entdecken von Mustern zur Vorhersage biologischer Eigenschaften"
sidebar:
  label: "9.1 Vom Entdecken von Mustern zur Vorhersage biologischer Eigenschaften"
  order: 1
  group: "Part 3"
  part: "Part 3"
---

# 9 Überwachtes Lernen

Biologische Systeme transformieren fortlaufend Information. Eine DNA-Sequenz kodiert ein Protein, Proteine lagern sich zu molekularen Maschinen zusammen, Signalwege verarbeiten Umweltreize, und Genregulationsnetzwerke bestimmen das Verhalten von Zellen. Solche Zusammenhänge zu verstehen, gehört zu den zentralen Aufgaben der modernen Biologie.

Im Verlauf dieses Buches haben wir immer wieder mathematische Modelle entwickelt, mit denen sich biologische Prozesse beschreiben lassen. Wir haben Enzymkinetik, Genregulation, Oszillationen, stochastische Prozesse und evolutionäre Dynamik modelliert. Dabei gingen wir jeweils von biologischem Wissen aus und übersetzten dieses in mathematische Gleichungen.

Überwachtes maschinelles Lernen nähert sich derselben Herausforderung aus einer anderen Richtung.

Anstatt ein mechanistisches Modell aus biologischen Prinzipien abzuleiten, fragt es, ob sich ein prädiktives Modell direkt aus experimentellen Beobachtungen lernen lässt. Wenn genügend Beispiele von Eingaben und den dazugehörigen Ausgaben vorliegen, kann ein Computer dann die Beziehung zwischen beiden entdecken?

Diese Frage hat in der modernen Biologie stark an Bedeutung gewonnen. Fortschritte in der Sequenzierung, der Massenspektrometrie, der Mikroskopie und in Hochdurchsatz-Screenings erzeugen heute Datensätze mit Millionen biologischer Beobachtungen. Diese Daten eröffnen zwar beispiellose Möglichkeiten, lebende Systeme besser zu verstehen, übersteigen aber zugleich unsere Fähigkeit, sie rein manuell auszuwerten.

Maschinelles Lernen liefert einen systematischen Rahmen, um aus solchen Daten prädiktive Beziehungen zu extrahieren. Es steht heute hinter Anwendungen, die von der Vorhersage von Proteinstrukturen und funktioneller Annotation bis hin zu medizinischer Diagnostik, Präzisionsmedizin und Systembiologie reichen.

In diesem Kapitel führen wir die Grundbegriffe des **überwachten Lernens** ein. Wir konzentrieren uns dabei nicht auf besonders komplexe Algorithmen, sondern auf die zentralen Ideen, die nahezu allen modernen Verfahren des maschinellen Lernens zugrunde liegen. Wir werden sehen, dass sich Lernen als Prozess der Modellbildung, Parameterschätzung und Optimierung verstehen lässt. Diese Ideen bilden die konzeptionelle Grundlage für weiterführende Themen wie Klassifikation, neuronale Netze und Deep Learning, die in den folgenden Kapiteln behandelt werden.

---

## Lernziele

Nach der Bearbeitung dieses Kapitels sollten Sie in der Lage sein,

- überwachtes Lernen vom unüberwachten Lernen zu unterscheiden,
- biologische Vorhersageprobleme als Abbildungen zwischen Eingaben und Ausgaben zu formulieren,
- zu erklären, warum biologische Beobachtungen als numerische Merkmale dargestellt werden müssen,
- lineare Regression als einfachstes Modell des überwachten Lernens zu verstehen,
- den Mean Squared Error (MSE) als Maß für Vorhersagequalität zu interpretieren,
- zu erläutern, warum überwachtes Lernen im Kern ein Optimierungsproblem ist,
- die Intuition hinter dem Gradientenverfahren zu verstehen,
- die Rolle der Lernrate während der Optimierung zu erklären,
- mathematische Optimierung mit biologischer Modellbildung in Beziehung zu setzen,
- zu verstehen, warum die Kombination mehrerer biologischer Merkmale die Vorhersageleistung häufig verbessert.

---

# 9.1 Vom Entdecken von Mustern zur Vorhersage biologischer Eigenschaften

## Von der Beschreibung zur Vorhersage

Im vorherigen Kapitel haben wir **Clustering** als eine der wichtigsten Methoden des unüberwachten Lernens kennengelernt. Clustering erlaubt es, biologische Beobachtungen allein auf Grundlage ihrer Ähnlichkeit zu Gruppen zusammenzufassen. Ohne vorheriges Wissen kann es verborgene Struktur in komplexen Datensätzen sichtbar machen.

So lassen sich beispielsweise Gruppen von Genen mit ähnlichen Expressionsprofilen, Proteine mit gemeinsamer biologischer Funktion oder Zellen in unterschiedlichen Entwicklungszuständen identifizieren. In all diesen Fällen entdeckt der Algorithmus Muster, die nicht vorab explizit vorgegeben wurden.

Doch Clustering beantwortet nur einen bestimmten Typ biologischer Frage:

> **Welche Beobachtungen ähneln einander?**

Viele wissenschaftliche Fragestellungen verlangen jedoch etwas grundlegend anderes.

Angenommen, wir haben die Aminosäuresequenz eines neu entdeckten Proteins bestimmt. Dann möchten wir vielleicht vorhersagen, ob das Protein stabil ist, wo es in der Zelle lokalisiert ist oder welche biologische Funktion es erfüllt. Oder wir möchten aus dem Genexpressionsprofil einer Patientin oder eines Patienten abschätzen, ob eine bestimmte Therapie voraussichtlich wirksam sein wird.

Das sind keine Fragen der Ähnlichkeit mehr, sondern Fragen der **Vorhersage**.

Anstatt Gruppen zu entdecken, möchten wir auf eine unbekannte biologische Eigenschaft aus bereits vorhandener Information schließen.

Dieser Übergang, von der Entdeckung von Struktur hin zur Vorhersage, markiert den Wechsel vom **unüberwachten** zum **überwachten** Lernen.

## Lernen aus gelabelten Beispielen

Das kennzeichnende Merkmal des überwachten Lernens ist, dass jedes Trainingsbeispiel sowohl eine Eingabe als auch eine bekannte Ausgabe enthält.

Die Eingabe umfasst die Information, die uns zur Verfügung steht. Je nach biologischer Fragestellung kann sie bestehen aus

- einer DNA-Sequenz,
- einer Aminosäuresequenz,
- einem Genexpressionsprofil,
- einem metabolischen Fingerabdruck,
- einem Bild
- oder irgendeiner anderen messbaren biologischen Größe.

Die Ausgabe ist die biologische Eigenschaft, die wir lernen möchten. Dazu können gehören

- Proteinstabilität,
- Enzymaktivität,
- Krankheitsstatus,
- subzelluläre Lokalisation
- oder das Expressionsniveau eines anderen Gens.

Weil die korrekte Antwort für jedes Trainingsbeispiel bereits bekannt ist, spricht man von **gelabelten Daten**.

Die Aufgabe des überwachten Lernens besteht darin, eine mathematische Beziehung zwischen Eingaben und Ausgaben zu identifizieren. Ist diese Beziehung gelernt, kann sie auf neue biologische Beobachtungen angewendet werden, deren Ausgabe noch unbekannt ist.

Die grundlegende Frage lautet daher:

> **Können wir eine Regel lernen, die biologische Beobachtungen auf biologische Eigenschaften abbildet?**

## Überwachtes Lernen als Abbildungsproblem

Nahezu jedes Problem des überwachten Lernens lässt sich durch dieselbe mathematische Abstraktion beschreiben.

Die beobachtete biologische Information bezeichnen wir mit

$$
X,
$$

und die Größe, die wir vorhersagen möchten, mit

$$
Y.
$$

Das Ziel des überwachten Lernens besteht darin, eine Funktion

$$
f : X \rightarrow Y,
$$

zu lernen, die Eingaben möglichst genau auf Ausgaben abbildet.

Diese Schreibweise ist bewusst allgemein gehalten, weil sie eine enorme Bandbreite biologischer Anwendungen umfasst.

Zum Beispiel:

| Eingabe \(X\) | Ausgabe \(Y\) |
|------------|--------------|
| Proteinsequenz | Proteinstabilität |
| Proteinsequenz | zelluläre Lokalisation |
| Genexpressionsprofil | Krankheitszustand |
| DNA-Sequenz | Promotoraktivität |
| Mikroskopiebild | Zelltyp |
| Metabolitenkonzentrationen | Wachstumsrate |

Biologisch wirken diese Probleme sehr unterschiedlich, rechnerisch teilen sie jedoch dieselbe Struktur: Es geht darum, eine Abbildung von Beobachtungen auf Vorhersagen zu lernen.

Gerade diese Abstraktion ist eine der großen Stärken des maschinellen Lernens. Ein einziger mathematischer Rahmen lässt sich auf eine außerordentliche Vielfalt biologischer Fragestellungen anwenden.

## Biologisches Wissen bleibt unverzichtbar

Auf den ersten Blick könnte es so wirken, als ersetze überwachtes Lernen biologisches Denken durch statistische Berechnung.

Tatsächlich ist eher das Gegenteil der Fall.

Maschinelles Lernen macht biologisches Verständnis nicht überflüssig, sondern setzt es voraus.

Forschende müssen weiterhin entscheiden,

- welche biologische Frage überhaupt sinnvoll ist,
- welche Messungen erhoben werden sollen,
- welche Variablen voraussichtlich nützliche Information enthalten
- und wie die Qualität von Vorhersagen bewertet werden soll.

Maschinelles Lernen automatisiert die Schätzung von Modellparametern, aber es formuliert nicht die biologische Hypothese.

Tatsächlich hängt der Erfolg eines überwachten Lernmodells oft weniger von der Raffinesse des Algorithmus ab als von der Qualität der biologischen Repräsentation, die für das Problem gewählt wurde.

Wie wir im nächsten Abschnitt sehen werden, besteht eine der wichtigsten Herausforderungen des überwachten Lernens daher nicht nur in der Optimierung, sondern bereits in der Konstruktion sinnvoller biologischer Merkmale.

---

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- überwachtes Lernen von Clustering zu unterscheiden,
- die Rolle gelabelter Daten zu erklären,
- überwachtes Lernen als Abbildung zwischen Eingaben und Ausgaben zu formulieren,
- typische Probleme des überwachten Lernens in der Biologie zu erkennen,
- zu verstehen, warum biologisches Wissen trotz automatisierter Lernalgorithmen unverzichtbar bleibt.

### Konzeptionelle Zusammenfassung

Überwachtes Lernen erweitert die im Clustering eingeführten Ideen von der Entdeckung von Struktur hin zur Vorhersage. Anstatt ähnliche Beobachtungen zu gruppieren, lernt überwachtes Lernen eine Abbildung zwischen messbaren biologischen Eingaben und bekannten biologischen Ausgaben. Diese Abbildung wird aus gelabelten Beispielen gelernt und kann anschließend auf neue Beobachtungen angewendet werden. Obwohl maschinelles Lernen die Parameterschätzung automatisiert, bleiben die Formulierung der biologischen Fragestellung, die Wahl der Messungen und die Interpretation der Ergebnisse grundlegend biologische Aufgaben.

### Fragen zur Selbstkontrolle

1. Worin unterscheidet sich überwachtes Lernen vom unüberwachten Lernen?
2. Was ist mit einem *gelabelten* Datensatz gemeint?
3. Warum lassen sich viele unterschiedliche biologische Vorhersageprobleme als Abbildung \(X \rightarrow Y\) darstellen?
4. Nennen Sie drei Beispiele für Probleme des überwachten Lernens in der Biologie.
5. Warum erfordert erfolgreiches überwachtes Lernen trotz automatisierter Algorithmen weiterhin biologische Expertise?
