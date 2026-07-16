---
title: "12.7 Was ist in einer verborgenen Schicht verborgen?"
sidebar:
  label: "12.7 Was ist in einer verborgenen Schicht verborgen?"
  order: 7
  group: "Part 3"
  part: "Part 3"
---

# 12.7 Was ist in einer verborgenen Schicht verborgen?

## Das Rätsel der verborgenen Neuronen

Inzwischen verstehen wir, wie ein neuronales Netz seine Berechnungen ausführt.

Jede Schicht berechnet eine gewichtete Summe, wendet eine Aktivierungsfunktion an und gibt die resultierenden Werte an die nächste Schicht weiter.

Mathematisch ist dieser Prozess geradlinig.

Konzeptionell bleibt jedoch eine entscheidende Frage:

> **Was lernen die Neuronen in den verborgenen Schichten tatsächlich?**

Im Unterschied zu Eingabeneuronen wird verborgenen Neuronen keine vorgegebene biologische Bedeutung zugewiesen.

Keinem Neuron wird ausdrücklich gesagt:

> "Du sollst Chloroplasten-Transitpeptide erkennen."

oder

> "Du sollst Transmembranhelices identifizieren."

Stattdessen beginnt das Netzwerk mit zufällig initialisierten Gewichten.

Während des Trainings werden diese Gewichte schrittweise angepasst, bis das Netzwerk die Vorhersageaufgabe so genau wie möglich löst.

Bemerkenswerterweise entstehen dabei biologisch sinnvolle interne Repräsentationen ganz von selbst.

Gerade dieses Phänomen gehört zu den definierenden Eigenschaften des Deep Learning.

---

## Nützliche Merkmale automatisch lernen

Um diese Idee zu verstehen, betrachten wir erneut das Problem der Vorhersage der Proteinlokalisation.

Angenommen, die Eingabeschicht enthält Merkmale wie

- Aminosäurezusammensetzung,
- mittlere Hydrophobizität,
- N-terminale Ladung,
- Sequenzlänge
- und das Auftreten kurzer Sequenzmotive.

Dies sind relativ einfache Größen, die sich direkt aus der Proteinsequenz berechnen lassen.

Ein Modell der logistischen Regression würde diese Merkmale unmittelbar kombinieren, um eine Vorhersage zu treffen.

Ein neuronales Netz verhält sich anders.

Anstatt sofort die endgültige Vorhersage zu erzeugen, transformiert es diese Eingangsmerkmale zunächst in eine neue interne Repräsentation.

Die Neuronen in der verborgenen Schicht lernen Kombinationen der ursprünglichen Merkmale, die für die Unterscheidung verschiedener Proteinklassen besonders informativ sind.

Wichtig ist, dass diese Kombinationen **nicht vom Forschenden entworfen** werden.

Sie werden während des Trainings automatisch entdeckt.

---

## Von einfachen Eigenschaften zu biologischen Konzepten

Man stelle sich ein verborgenes Neuron vor, das Information über

- Hydrophobizität,
- Aminosäurezusammensetzung
- und das Vorkommen positiv geladener Reste

erhält.

Während des Trainings kann dieses Neuron allmählich lernen, besonders stark zu reagieren, wenn diese Merkmale in einer charakteristischen Kombination auftreten.

Schließlich kann seine Aktivierung hoch mit dem Vorhandensein eines **mitochondrialen Targeting-Peptids** korrelieren.

Ein anderes Neuron kann empfindlich für lange hydrophobe Abschnitte werden, die an **Transmembranhelices** erinnern.

Ein drittes könnte Aminosäuremuster erkennen, die für **Chloroplasten-Transitpeptide** charakteristisch sind.

Beachten wir, was hier geschehen ist.

Keines dieser biologischen Konzepte wurde dem Netzwerk explizit vorgegeben.

Die verborgenen Neuronen haben sie entdeckt, weil das Erkennen dieser Muster die endgültige Vorhersage verbessert hat.

In diesem Sinn fungieren verborgene Neuronen als **Merkmalsdetektoren**.

Jedes Neuron lernt, eine nützliche Eigenschaft der Eingabedaten zu erkennen.

---

## Hierarchisches Merkmalslernen

Die eigentliche Stärke des Deep Learning wird sichtbar, wenn mehrere verborgene Schichten kombiniert werden.

Die erste verborgene Schicht erkennt meist relativ einfache Muster.

Bei Proteinsequenzen können dies sein:

- einzelne Aminosäureeigenschaften,
- lokale Sequenzmotive,
- hydrophobe Regionen
- oder Cluster geladener Aminosäuren.

Die zweite verborgene Schicht erhält diese neu gelernten Merkmale als Eingabe.

Anstatt Aminosäuren direkt zu erkennen, kann sie nun Kombinationen bereits identifizierter Muster erfassen.

Zum Beispiel können

- mehrere hydrophobe Regionen auf ein Membranprotein hinweisen,
- Kombinationen positiv geladener Reste und bestimmter Motive auf ein mitochondriales Targeting-Peptid,
- während charakteristische Aminosäureverteilungen verschiedene Proteinfamilien unterscheiden.

Tiefere Schichten setzen diesen Prozess fort.

Jede weitere Schicht kombiniert die von der vorherigen gelernten Repräsentationen zu immer abstrakteren biologischen Konzepten.

Das Netzwerk konstruiert also eine Hierarchie von Repräsentationen, die von einfachen biochemischen Eigenschaften bis zu komplexen biologischen Funktionen reicht.

---

## Ein Beispiel: die Vorhersage der Proteinlokalisation

Dieser Prozess lässt sich schematisch darstellen.

Die Eingabeschicht erhält relativ einfache sequenzbasierte Merkmale.

Zum Beispiel:

- N-terminale Ladung,
- Hydrophobizität,
- Aminosäurezusammensetzung,
- Sequenzmotive.

↓

Die erste verborgene Schicht kann Detektoren lernen für

- hydrophobe Helices,
- positiv geladene Regionen,
- spezifische Aminosäuremuster.

↓

Die zweite verborgene Schicht kombiniert diese Muster zu höherstufigen biologischen Konzepten wie

- Chloroplasten-Transitpeptiden,
- mitochondrialen Targeting-Peptiden,
- Membraninsertionssignalen.

↓

Schließlich sagt die Ausgabeschicht voraus:

- Chloroplast,
- Mitochondrium,
- sekretorischer Weg,
- Cytoplasma
- oder ein anderes zelluläres Kompartiment.

Das Bemerkenswerte daran ist, dass während des Trainings nur die endgültigen Lokalisationslabels vorgegeben werden.

Die biologischen Zwischenkonzepte entstehen automatisch, weil sie helfen, das Vorhersageproblem zu lösen.

---

## Representation Learning

Diese Fähigkeit, nützliche interne Repräsentationen zu konstruieren, wird als **Representation Learning** bezeichnet.

Anstatt zu verlangen, dass Forschende jedes relevante Merkmal von Hand entwerfen, entdeckt das Netzwerk direkt aus den Trainingsdaten zunehmend informative Merkmale.

Das markiert einen grundlegenden Wandel im maschinellen Lernen.

Traditionelle Ansätze stützen sich stark auf menschliche Expertise, um festzulegen, welche Merkmale extrahiert werden sollten.

Neuronale Netze lernen stattdessen

- **welche Merkmale nützlich sind,**
- **wie diese Merkmale kombiniert werden sollten**
- und **welche Repräsentationen für die Vorhersageaufgabe am informativsten sind.**

Representation Learning ist einer der Hauptgründe dafür, dass Deep Learning in so vielen wissenschaftlichen Disziplinen außerordentlich erfolgreich geworden ist.

---

## Verborgene Schichten sind nicht immer interpretierbar

Auch wenn Beispiele wie Targeting-Peptide sehr anschaulich sind, muss man sich klarmachen, dass verborgene Neuronen nicht immer leicht interpretierbaren biologischen Konzepten entsprechen.

Einige Neuronen lernen Repräsentationen, die sich direkt mit bekannten biologischen Mechanismen in Verbindung bringen lassen.

Andere erfassen komplexe statistische Regelmäßigkeiten, die für Menschen nur schwer oder vielleicht gar nicht interpretierbar sind.

Hinzu kommt, dass sinnvolle Repräsentationen oft nicht in einem einzelnen Neuron kodiert sind, sondern über viele Neuronen verteilt auftreten.

Ein biologisches Konzept wie "Chloroplasten-Targeting" kann daher aus der gemeinsamen Aktivität von Dutzenden oder Hunderten von Neuronen hervorgehen.

Diese verteilte Repräsentation ist einer der Gründe dafür, dass moderne neuronale Netze häufig als "Black Boxes" erscheinen.

Ihre Vorhersagen sind oft hochpräzise, doch genau zu verstehen, wie ihre internen Repräsentationen organisiert sind, bleibt ein aktives Forschungsgebiet.

Daher ist **interpretierbare künstliche Intelligenz** zu einem wichtigen Teilbereich des maschinellen Lernens geworden, der darauf abzielt, diese gelernten Repräsentationen transparenter zu machen.

---

## Warum verborgene Repräsentationen wichtig sind

Das Konzept verborgener Repräsentationen reicht weit über die Proteinlokalisation hinaus.

Netze zur Bilderkennung erkennen zunächst Kanten, dann Formen und schließlich vollständige Objekte.

Spracherkennungssysteme gehen von einfachen Frequenzmustern zu Phonemen, Wörtern und schließlich ganzen Sätzen über.

Große Sprachmodelle transformieren einzelne Wörter in zunehmend abstrakte semantische Repräsentationen.

AlphaFold lernt Repräsentationen, die evolutionäre Zwänge, Rest-Wechselwirkungen und strukturelle Beziehungen innerhalb von Proteinen erfassen.

In all diesen Fällen gilt dasselbe Prinzip.

Deep Learning ist erfolgreich, weil es nicht nur die endgültige Vorhersage lernt.

Es lernt die Zwischenrepräsentationen, die diese Vorhersage überhaupt erst ermöglichen.

Gerade diese Fähigkeit unterscheidet neuronale Netze von nahezu allen klassischen Machine-Learning-Verfahren, die in den vorangegangenen Kapiteln behandelt wurden.

---

### Konzeptionelle Zusammenfassung

Verborgene Schichten transformieren einfache Eingangsmerkmale in zunehmend informative interne Repräsentationen. Während des Trainings lernen verborgene Neuronen automatisch Merkmalsdetektoren, die biologisch sinnvolle Muster erkennen, obwohl diese Konzepte niemals explizit in das Netzwerk einprogrammiert werden. Durch zusätzliche verborgene Schichten werden diese einfachen Muster zu immer abstrakteren Repräsentationen kombiniert. Dieser Prozess, das **Representation Learning**, gehört zu den definierenden Eigenschaften des modernen Deep Learning und erklärt einen großen Teil seiner außergewöhnlichen Vorhersagekraft.

---

### Fragen zur Selbstkontrolle

1. Warum werden verborgene Neuronen als "verborgen" bezeichnet?
2. Warum werden verborgene Repräsentationen nicht explizit vom Forschenden programmiert?
3. Was versteht man unter einem Merkmalsdetektor?
4. Wie bauen tiefere Schichten auf den von früheren Schichten gelernten Repräsentationen auf?
5. Erklären Sie den Begriff **Representation Learning** in eigenen Worten.
6. Warum sind verborgene Repräsentationen biologisch oft schwer zu interpretieren?
7. Nennen Sie Beispiele für hierarchisches Lernen von Repräsentationen in Proteinsequenzen, Bildern oder Sprache.
8. Warum ist Representation Learning eine der definierenden Innovationen des modernen Deep Learning?
