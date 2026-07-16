---
title: "11.2 Klassifikation im Merkmalsraum"
sidebar:
  label: "11.2 Klassifikation im Merkmalsraum"
  order: 2
  group: "Part 3"
  part: "Part 3"
---

# 11.2 Klassifikation im Merkmalsraum

## Von biologischen Merkmalen zu Entscheidungsgrenzen

In Kapitel 9 haben wir gelernt, dass jedes Problem des überwachten Lernens damit beginnt, biologische Beobachtungen als numerische Merkmalsvektoren darzustellen. Ganz gleich, ob es sich um ein Protein, eine DNA-Sequenz, eine Zelle oder eine ganze Patientin oder einen ganzen Patienten handelt: Für den Lernalgorithmus ist all dies letztlich nichts anderes als eine Sammlung von Zahlen.

Für ein Klassifikationsproblem definieren diese numerischen Merkmale einen **Merkmalsraum**.

Jede biologische Beobachtung entspricht darin einem Punkt.

Angenommen, wir möchten zwischen zwei Klassen von Proteinen unterscheiden:

- Proteinen, die im Chloroplasten lokalisiert sind,
- und Proteinen, die im Mitochondrium lokalisiert sind.

Anstatt die vollständige Aminosäuresequenz zu betrachten, können wir jedes Protein durch zwei biologisch sinnvolle Merkmale beschreiben:

- die Nettoladung am N-Terminus
- und die mittlere Hydrophobizität.

Jedes Protein wird damit zu einem Punkt in einem zweidimensionalen Merkmalsraum. Proteine mit ähnlichen physikochemischen Eigenschaften liegen nah beieinander, während Proteine mit unterschiedlichen Eigenschaften weiter voneinander entfernt sind.

Wenn diese beiden biologischen Klassen unterschiedliche Bereiche des Merkmalsraums besetzen, wird Klassifikation möglich.

Das Ziel jedes Klassifikationsalgorithmus ist daher überraschend einfach:

> **Finde eine Regel, die die verschiedenen biologischen Klassen im Merkmalsraum voneinander trennt.**

Auch wenn diese Aussage mathematisch schlicht wirkt, liefert sie eine sehr mächtige geometrische Interpretation der Klassifikation. Anstatt einzelne Beobachtungen auswendig zu lernen, versucht der Algorithmus, jene Grenze zu entdecken, die eine biologische Klasse am besten von einer anderen abgrenzt.

---

## Entscheidungsgrenzen

Die Grenze zwischen verschiedenen Klassen nennt man **Entscheidungsgrenze**.

Jede Beobachtung auf der einen Seite dieser Grenze wird einer Klasse zugeordnet, Beobachtungen auf der anderen Seite der anderen.

In unserem einfachen Beispiel mit zwei Merkmalen könnte diese Entscheidungsgrenze einfach eine Gerade sein.

Proteine oberhalb der Geraden würden dann als Chloroplastenproteine vorhergesagt.

Proteine unterhalb der Geraden als Mitochondrienproteine.

In diesem Fall nimmt der Klassifikator an, dass eine lineare Kombination aus Hydrophobizität und Ladung ausreicht, um die beiden Klassen zu unterscheiden.

Biologische Systeme sind jedoch selten so einfach.

Die Klassen können sich überlappen, umeinander winden oder sehr unregelmäßige Formen im Merkmalsraum einnehmen. Eine Gerade reicht dann nicht mehr aus, um sie angemessen zu trennen.

Wir benötigen stattdessen gekrümmte oder sogar sehr komplexe Entscheidungsgrenzen.

Damit ergibt sich sofort eine wichtige Frage.

> **Wie sollen wir eine solche Entscheidungsgrenze konstruieren?**

Verschiedene Klassifikationsalgorithmen beantworten diese Frage auf unterschiedliche Weise.

Der Unterschied zwischen Klassifikationsmethoden liegt daher oft nicht darin, *was* sie vorhersagen, sondern darin, *wie* sie die Grenze zwischen biologischen Klassen definieren.

---

## Viele Algorithmen, ein gemeinsames Ziel

Im Laufe der letzten Jahrzehnte sind im maschinellen Lernen zahlreiche Klassifikationsalgorithmen entwickelt worden.

Auch wenn sie sich mathematisch deutlich unterscheiden, verfolgen sie alle dasselbe grundlegende Ziel:

> **Eine Entscheidungsgrenze zu lernen, die biologische Klassen präzise trennt und zugleich auf neue Beobachtungen gut generalisiert.**

Zu den am weitesten verbreiteten Klassifikationsverfahren gehören:

- **Logistische Regression**, die die Wahrscheinlichkeit modelliert, dass eine Beobachtung zu einer bestimmten Klasse gehört.
- **Entscheidungsbäume**, die den Merkmalsraum rekursiv durch einfache Entscheidungsregeln in immer homogenere Regionen zerlegen.
- **Support Vector Machines (SVMs)**, die jene Entscheidungsgrenze bestimmen, welche die Trennung zwischen Klassen maximiert.
- **Künstliche neuronale Netze**, die durch die Kombination vieler einfacher Recheneinheiten hochflexible nichtlineare Entscheidungsgrenzen lernen.
- **Random Forests**, die viele Entscheidungsbäume zu einem Ensemble kombinieren, um Vorhersageleistung und Robustheit zu verbessern.

So unterschiedlich diese Algorithmen auf den ersten Blick wirken, lassen sie sich alle aus derselben geometrischen Perspektive verstehen.

Jeder Algorithmus konstruiert eine andere Art von Entscheidungsgrenze.

Die Wahl des Algorithmus hängt daher wesentlich davon ab, wie komplex das biologische Problem ist und welche Struktur die verfügbaren Daten besitzen.

---

## Einfachheit vor Komplexität

Beim Lernen maschinellen Lernens ist es verlockend, sofort mit den leistungsstärksten Algorithmen zu beginnen.

Doch das ist selten die beste Strategie.

Viele hochentwickelte Klassifikatoren beruhen auf Ideen, die bereits in deutlich einfacheren Modellen sichtbar werden.

In diesem Kapitel folgen wir deshalb derselben Grundhaltung wie in den vorherigen Kapiteln dieses Buches.

Wir beginnen mit dem einfachsten Klassifikator, der das lineare Regressionsmodell aus Kapitel 9 erweitert: der **logistischen Regression**.

Logistische Regression führt die zentralen Ideen probabilistischer Klassifikation ein und bleibt dabei mathematisch transparent.

Anschließend wenden wir uns den **Entscheidungsbäumen** zu, die eine ganz andere Art des Vorhersagens repräsentieren. Anstatt den Zusammenhang zwischen Merkmalen und Klassen durch Gleichungen zu beschreiben, lernen Entscheidungsbäume eine Folge biologisch interpretierbarer Entscheidungsregeln.

Zum Schluss führen wir kurz in das **Ensemble Learning** ein, bei dem viele einfache Entscheidungsbäume kombiniert werden, um hochpräzise Vorhersagemodelle wie Random Forests zu erzeugen.

Gemeinsam veranschaulichen diese Methoden drei grundlegend verschiedene Denkweisen der Klassifikation:

- **probabilistische Modelle** (logistische Regression),
- **regelbasierte Modelle** (Entscheidungsbäume)
- und **Ensemble-Modelle** (Random Forests).

Diese Ansätze zu verstehen, schafft eine ausgezeichnete Grundlage für die künstlichen neuronalen Netze, die im nächsten Kapitel eingeführt werden.

---

### Zentrale Konzepte

- Klassifikationsalgorithmen arbeiten in einem mehrdimensionalen **Merkmalsraum**.
- Jede biologische Beobachtung wird darin als Punkt repräsentiert.
- Ziel der Klassifikation ist es, eine **Entscheidungsgrenze** zu lernen, die verschiedene biologische Klassen voneinander trennt.
- Unterschiedliche Klassifikationsalgorithmen unterscheiden sich vor allem darin, wie sie diese Entscheidungsgrenze konstruieren.
- Logistische Regression, Entscheidungsbäume, Support Vector Machines, neuronale Netze und Random Forests lösen dasselbe grundlegende Klassifikationsproblem mit unterschiedlichen mathematischen Ansätzen.

---

### Zusammenfassung

Klassifikation lässt sich geometrisch als Problem der Trennung biologischer Klassen im Merkmalsraum verstehen. Jede biologische Beobachtung wird durch einen Merkmalsvektor dargestellt, und der Klassifikator lernt eine Entscheidungsgrenze, die den Merkmalsraum in Regionen unterteilt, die verschiedenen Klassen entsprechen. Auch wenn zahlreiche Klassifikationsalgorithmen entwickelt wurden, verfolgen sie alle dasselbe Ziel: Entscheidungsgrenzen zu finden, die bekannte Beobachtungen korrekt klassifizieren und zugleich zuverlässig auf neue biologische Daten generalisieren. Die folgenden Abschnitte führen drei wichtige Familien von Klassifikatoren ein, die unterschiedliche Wege zur Konstruktion solcher Grenzen veranschaulichen.

---

### Fragen zur Selbstkontrolle

1. Was versteht man unter einem **Merkmalsraum**?
2. Wie wird eine biologische Beobachtung innerhalb eines Merkmalsraums dargestellt?
3. Was ist eine **Entscheidungsgrenze**?
4. Warum kann eine lineare Entscheidungsgrenze für biologische Daten unzureichend sein?
5. Was haben alle Klassifikationsalgorithmen gemeinsam?
6. Worin unterscheiden sich logistische Regression, Entscheidungsbäume und neuronale Netze grundlegend voneinander?
