---
title: "8.2 Von biologischen Messungen zu Merkmalsräumen"
sidebar:
  label: "8.2 Von biologischen Messungen zu Merkmalsräumen"
  order: 2
  group: "Part 3"
  part: "Part 3"
---

## 8.2 Von biologischen Messungen zu Merkmalsräumen

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- zu erläutern, warum biologische Objekte vor einer rechnergestützten Analyse mathematisch repräsentiert werden müssen.
- zu beschreiben, wie experimentelle Messungen in Merkmalsvektoren überführt werden.
- eine Genexpressionsmatrix als mathematische Darstellung biologischen Verhaltens zu interpretieren.
- zu erklären, warum die gewählte Repräsentation festlegt, was biologische Ähnlichkeit bedeutet.

Bevor biologische Daten rechnergestützt analysiert werden können, müssen sie zunächst in eine mathematische Form überführt werden. Dieser Schritt wirkt auf den ersten Blick unscheinbar, gehört aber zu den wichtigsten Modellierungsentscheidungen der Bioinformatik. Jede rechnergestützte Methode operiert auf mathematischen Objekten und nicht unmittelbar auf biologischen Begriffen.

Ein Gen, ein Protein oder eine einzelne Zelle besitzt keine eingebaute mathematische Darstellung. Stattdessen wählen wir messbare Eigenschaften aus, sogenannte **Merkmale (Features)**, mit denen wir das biologische Objekt beschreiben. Sind diese Merkmale festgelegt, kann jedes Objekt als numerischer Vektor dargestellt werden. Erst dadurch wird es möglich, Daten algorithmisch zu vergleichen, zu klassifizieren oder zu clustern.

Diese Grundidee ist uns im Verlauf des Buches bereits mehrfach begegnet. In der Sequenzanalyse wurden biologische Sequenzen als Folgen von Nukleotiden oder Aminosäuren dargestellt. In der phylogenetischen Rekonstruktion diente die Ähnlichkeit zwischen Sequenzen als Hinweis auf gemeinsame Evolutionsgeschichte. Beim Clustering wird dieses Prinzip nun auf allgemeinere biologische Messungen übertragen. Wir vergleichen nicht mehr nur Sequenzen, sondern **Muster biologischen Verhaltens**.

### Merkmale beschreiben biologische Eigenschaften

Welche Merkmale gewählt werden, hängt vollständig von der zugrunde liegenden biologischen Fragestellung ab.

In Genexpressionsstudien sind die Merkmale typischerweise die gemessenen Expressionsniveaus unter verschiedenen experimentellen Bedingungen oder zu unterschiedlichen Zeitpunkten. Jede einzelne Messung erfasst einen bestimmten Aspekt der biologischen Reaktion eines Gens auf seine Umgebung.

In anderen Anwendungen kommen ganz andere Merkmale zum Einsatz. Ein Protein kann durch seine Aminosäurezusammensetzung, seine vorhergesagte Sekundärstruktur, seine Hydrophobizität oder andere physikochemische Eigenschaften beschrieben werden. Eine einzelne Zelle kann über die Expression Tausender Gene charakterisiert werden, während ein Organismus etwa durch physiologische Messgrößen oder phänotypische Merkmale beschrieben werden könnte.

Entscheidend ist dabei:

**Merkmale werden nicht entdeckt, sondern ausgewählt.**

Sie bilden unsere mathematische Beschreibung biologischer Realität und entscheiden damit, welche Aspekte der Biologie für einen Algorithmus überhaupt sichtbar werden.

Hier zeigt sich erneut ein Leitmotiv dieses Buches:

> Jede rechnergestützte Analyse beginnt mit einer Modellierungsentscheidung.

Noch bevor irgendein Algorithmus angewendet wird, haben wir bereits festgelegt, welche biologische Information erhalten bleiben soll und welche ignoriert wird.

### Expressionsprofile als Merkmalsvektoren

Betrachten wir ein typisches Genexpressionsexperiment.

Angenommen, wir messen die Expression eines Gens unter sechs verschiedenen Umweltbedingungen. Diese Messungen könnten unterschiedliche Entwicklungszeitpunkte, Stressbedingungen oder Nährstoffsituationen repräsentieren.

Das resultierende Expressionsprofil lässt sich schreiben als

$$
\mathbf{x}
=
(x_1,x_2,\ldots,x_6),
$$

wobei jede Komponente den gemessenen Expressionswert unter genau einer experimentellen Bedingung bezeichnet.

Das Gen erscheint damit nicht mehr nur als biologisches Objekt, sondern als Punkt in einem sechsdimensionalen mathematischen Raum.

Dieser Perspektivwechsel ist tiefgreifend.

Aus der biologischen Frage

> *Wie ähnlich verhalten sich zwei Gene?*

wird die mathematische Frage

> *Wie ähnlich sind zwei Vektoren?*

Ab diesem Punkt arbeitet Clustering nicht mehr direkt mit Genen, sondern ausschließlich mit ihren mathematischen Repräsentationen.

### Die Expressionsmatrix

Reale biologische Experimente erfassen nur selten wenige Gene. Moderne transkriptomische Studien quantifizieren routinemäßig die Expression von Zehntausenden Genen gleichzeitig.

Der vollständige Datensatz lässt sich bequem als **Expressionsmatrix** darstellen.

In dieser Matrix gilt:

- Jede **Zeile** entspricht einem Gen.
- Jede **Spalte** entspricht einer experimentellen Bedingung.
- Jeder Eintrag enthält den gemessenen Expressionswert.

Mathematisch lässt sich die Matrix schreiben als

$$
X=
\begin{pmatrix}
x_{11} & x_{12} & \cdots & x_{1m}\\
x_{21} & x_{22} & \cdots & x_{2m}\\
\vdots & \vdots & \ddots & \vdots\\
x_{n1} & x_{n2} & \cdots & x_{nm}
\end{pmatrix},
$$

wobei \(n\) die Anzahl der Gene und \(m\) die Anzahl der experimentellen Bedingungen bezeichnet.

Jede Zeile stellt somit einen Merkmalsvektor dar, der das Verhalten eines einzelnen Gens beschreibt.

Diese Matrix bildet den Ausgangspunkt für nahezu alle Verfahren des maschinellen Lernens in der Molekularbiologie. Clustering, Hauptkomponentenanalyse, Klassifikationsverfahren und neuronale Netze arbeiten alle mit dieser mathematischen Darstellung und nicht mit den ursprünglichen biologischen Messungen selbst.

### Repräsentation bestimmt Ähnlichkeit

Sobald biologische Objekte in Merkmalsvektoren überführt wurden, stellt sich als Nächstes die Frage, wie sie miteinander verglichen werden sollen.

Auf den ersten Blick wirkt dies unkompliziert. Zwei Gene mit nahezu identischen Expressionsprofilen sollten als ähnlich gelten, während Gene mit sehr unterschiedlichen Reaktionen kaum als ähnlich betrachtet würden.

Doch dahinter steht eine subtile und grundlegende Frage:

**Was genau bedeutet "ähnlich"?**

Sollen zwei Gene bereits dann als ähnlich gelten, wenn sich ihre Expressionsniveaus nur geringfügig unterscheiden?

Oder sollen sie als ähnlich betrachtet werden, sobald sie parallel an- und absteigen, selbst wenn eines der beiden Gene durchgängig auf deutlich höherem Niveau exprimiert ist?

Diese verschiedenen Lesarten führen zu unterschiedlichen mathematischen Definitionen von Ähnlichkeit und damit letztlich auch zu unterschiedlichen Clustering-Ergebnissen.

Mit anderen Worten: Ähnlichkeit ist **keine intrinsische Eigenschaft der Daten**. Sie hängt von dem mathematischen Maß ab, das wir auswählen.

Die Wahl eines geeigneten Ähnlichkeitsmaßes ist deshalb genauso wichtig wie die Wahl der biologischen Merkmale selbst. Diese beiden Modellierungsentscheidungen bestimmen gemeinsam, welche biologischen Muster sichtbar werden und welche verborgen bleiben.

Im nächsten Abschnitt gehen wir dieser Frage genauer nach und führen mathematische Distanzmaße ein, mit denen sich Ähnlichkeit zwischen biologischen Merkmalsvektoren quantifizieren lässt.

### Konzeptionelle Zusammenfassung

- Biologische Objekte müssen in mathematische Repräsentationen überführt werden, bevor eine rechnergestützte Analyse möglich ist.
- Merkmale legen fest, welche biologischen Eigenschaften numerisch beschrieben werden.
- Genexpressionsprofile lassen sich als Merkmalsvektoren darstellen.
- Eine Expressionsmatrix liefert eine kompakte mathematische Beschreibung eines gesamten Experiments.
- Die mathematische Repräsentation bestimmt, was biologische Ähnlichkeit bedeutet, und beeinflusst damit jede nachgelagerte Analyse.

### Fragen zur Selbstkontrolle

1. Warum müssen biologische Objekte als Merkmalsvektoren dargestellt werden, bevor sie rechnergestützt analysiert werden können?
2. Worin besteht der Unterschied zwischen einem biologischen Objekt und seiner mathematischen Repräsentation?
3. Wie lässt sich ein Genexpressionsexperiment als Expressionsmatrix darstellen?
4. Warum ist bereits die Wahl der Merkmale eine Modellierungsentscheidung?
5. Weshalb beeinflusst die mathematische Repräsentation das Ergebnis eines Clusterings?
