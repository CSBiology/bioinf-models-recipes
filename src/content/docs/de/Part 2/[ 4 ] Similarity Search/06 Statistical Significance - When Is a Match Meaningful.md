---
title: "4.6 Statistische Signifikanz: Wann ist ein Treffer bedeutsam?"
sidebar:
  label: "4.6 Statistische Signifikanz: Wann ist ein Treffer bedeutsam?"
  order: 6
  group: "Part 2"
  part: "Part 2"
---

## **4.6 Statistische Signifikanz: Wann ist ein Treffer bedeutsam?**

An diesem Punkt haben wir einen leistungsfähigen Mechanismus entwickelt, um ähnliche Sequenzen in großen Datenbanken zu identifizieren. Algorithmen wie BLAST liefern Alignments zusammen mit zugehörigen Scores, und diese Scores erlauben es, Kandidatentreffer zu ordnen. Dennoch bleibt eine grundlegende Frage offen:

> **Woher wissen wir, ob ein Alignment mit hohem Score biologisch bedeutsam ist oder lediglich zufällig entstanden ist?**

Diese Frage wird bei großskaliger Suche unvermeidbar. Wenn Millionen von Sequenzen verglichen werden, erzeugen selbst Zufallssequenzen gelegentlich hohe Alignment-Scores. Ohne statistischen Rahmen ist es unmöglich, Signal von Rauschen zu unterscheiden.

---

### **Warum rohe Scores nicht ausreichen**

Erinnern wir uns daran, dass ein Alignment-Score als Summe aus Substitutionsscores und Gap-Strafen berechnet wird:

$$
S = \sum \text{substitution scores} + \sum \text{gap penalties}.
$$

Obwohl dieser Score die Qualität eines Alignments unter einem gewählten Bewertungssystem widerspiegelt, fehlt ihm ein entscheidender Bezugspunkt. Ein Score von beispielsweise $50$ kann in einem Kontext hoch signifikant und in einem anderen völlig unauffällig sein.

Zwei zentrale Faktoren beeinflussen dies:

* **Sequenzlänge**
  Längere Sequenzen bieten mehr Gelegenheiten für zufällige Matches.

* **Größe der Datenbank**
  Je mehr Sequenzen durchsucht werden, desto höher ist die Wahrscheinlichkeit, durch Zufall einen hohen Score zu beobachten.

Ein roher Score lässt sich daher nicht isoliert interpretieren. Er muss relativ zu dem bewertet werden, was wir unter einem **Nullmodell zufälliger Sequenzen** erwarten würden.

---

### **Das Nullmodell: Zufällige Alignments**

Um Signifikanz zu beurteilen, stellen wir uns ein Szenario vor, in dem die Query-Sequenz mit Sequenzen verglichen wird, die **nicht verwandt** sind, also zufällig aus einer Hintergrundverteilung erzeugt wurden.

Unter dieser Nullhypothese ist jedes beobachtete Alignment rein zufällig. Die Frage lautet dann:

> **Wie wahrscheinlich ist es, allein durch Zufall einen Alignment-Score zu beobachten, der mindestens so hoch ist wie der gefundene?**

Diese Wahrscheinlichkeit liefert ein natürliches Maß für Signifikanz.

---

### **Extreme Werte und Alignment-Scores**

Eine wichtige Einsicht aus der Statistik, die sich auch in den Lehrmaterialien widerspiegelt, ist, dass Alignment-Scores unter dem Nullmodell ein charakteristisches Verhalten zeigen.

Während einzelne Vergleiche vertrauten Verteilungen ähneln mögen, folgt der **Maximalscore** über viele Vergleiche einer **Extremwertverteilung**, die oft durch eine Gumbel-Verteilung angenähert wird.

Intuitiv entsteht dies, weil Ähnlichkeitssuche nicht nur ein einzelnes Alignment betrachtet, sondern viele mögliche Alignments über viele Sequenzen hinweg. Wir fragen also nach dem **Maximum** vieler Zufallsvariablen, und Maxima verhalten sich anders als einzelne Beobachtungen.

Dadurch entsteht eine charakteristische Verteilung hoher Scores, bei der Extremwerte häufiger auftreten, als man es von einer Normalverteilung erwarten würde.

---

### **p-Werte: Wahrscheinlichkeit zufälligen Auftretens**

Eine Möglichkeit, Signifikanz zu quantifizieren, ist der **p-Wert**.

Formal ist er definiert als:

$$
p = \mathbb{P}(\text{score} \geq S \mid \text{Nullmodell}),
$$

also die Wahrscheinlichkeit, dass ein zufälliges Alignment einen Score erreicht, der mindestens so hoch ist wie der beobachtete Score $S$.

Ein kleiner p-Wert zeigt an, dass ein solcher Score unter dem Zufallsmodell unwahrscheinlich ist und das Alignment daher auf eine reale biologische Beziehung hinweisen könnte.

Obwohl p-Werte konzeptionell klar sind, sind sie bei großskaliger Datenbanksuche nicht immer das praktischste Maß.

---

### **E-Werte: Erwartete Zahl zufälliger Treffer**

BLAST verwendet daher ein eng verwandtes, aber oft intuitiveres Maß: den **E-Wert**.

Der E-Wert ist definiert als:

> **Die erwartete Anzahl von Alignments mit Score mindestens $S$, die in der Datenbanksuche rein zufällig auftreten würden.**

Er lässt sich näherungsweise durch einen Ausdruck der Form

$$
E = K \cdot m \cdot n \cdot e^{-\lambda S},
$$

beschreiben, wobei:

* $m$ und $n$ die Längen von Query- und Datenbanksequenzen sind,
* $K$ und $\lambda$ Parameter sind, die vom Bewertungssystem und von der Sequenzzusammensetzung abhängen.

Diese Formel macht zwei wichtige Abhängigkeiten sichtbar:

* **Höhere Scores führen zu exponentiell kleineren E-Werten**
* **Größere Datenbanken führen zu größeren E-Werten**

---

### **Interpretation des E-Werts**

Die Interpretation des E-Werts ist direkt und praktisch:

* $E \approx 1$
  → ein solcher Treffer ist durch Zufall ungefähr einmal zu erwarten
* $E \ll 1$
  → der Treffer ist vermutlich nicht zufällig
* $E \gg 1$
  → viele solche Treffer sind zufällig zu erwarten

Zum Beispiel:

* $E = 10^{-5}$ spricht für einen hoch signifikanten Treffer
* $E = 10$ spricht dafür, dass ähnliche Scores häufig zufällig auftreten

Diese Interpretation verbindet statistische Theorie unmittelbar mit praktischen Entscheidungen.

---

### **Die Rolle der Datenbankgröße**

Eine wichtige Konsequenz dieses Rahmens ist, dass Signifikanz von der Größe der Datenbank abhängt.

Wenn die Datenbank wächst, steigt die Zahl zufälliger Vergleiche, und damit nimmt auch die Wahrscheinlichkeit zu, hohe Scores bloß zufällig zu beobachten.

Das führt zu einem zunächst kontraintuitiven Effekt:

> **Dasselbe Alignment kann gegen eine größere Datenbank weniger signifikant erscheinen.**

Dies ist kein Fehler, sondern eine natürliche Folge statistischen Denkens.

---

### **Vom Score zur biologischen Interpretation**

Statistische Signifikanz bildet einen entscheidenden Filter zwischen rechnerischem Output und biologischer Interpretation.

Ein hoher Alignment-Score allein genügt nicht. Erst wenn dieser Score **unter dem Nullmodell unwahrscheinlich** ist, lohnt es sich, biologische Erklärungen wie Homologie ernsthaft in Betracht zu ziehen.

Gleichzeitig garantiert Signifikanz noch keine biologische Relevanz. Zusätzliche Aspekte müssen berücksichtigt werden:

* Alignment-Länge,
* Erhaltung funktionell wichtiger Reste,
* Domänenstruktur,
* und biologischer Kontext.

Die statistische Bewertung ist daher ein notwendiger, aber nicht hinreichender Schritt bei der Interpretation von Ergebnissen der Ähnlichkeitssuche.

---

### **Zusammenfassung**

Statistische Signifikanz verwandelt rohe Alignment-Scores in interpretierbare Größen:

* p-Werte messen die Wahrscheinlichkeit, einen Score zufällig zu beobachten,
* E-Werte schätzen, wie viele solcher Treffer wir in der Datenbank erwarten,
* beide beruhen auf einem Nullmodell zufälliger Sequenzen,
* und beide hängen von Sequenzlänge und Datenbankgröße ab.

Dieser Rahmen ermöglicht es, bedeutsame Ähnlichkeit von zufälliger Übereinstimmung zu unterscheiden, was für großskalige Suche unverzichtbar ist.

---

### **Fragen zur Selbstkontrolle**

1. Warum reicht ein roher Alignment-Score nicht aus, um biologische Relevanz zu beurteilen?
2. Was ist das Nullmodell im Kontext der Ähnlichkeitssuche?
3. Warum folgen Alignment-Scores einer Extremwertverteilung und nicht einer Normalverteilung?
4. Worin unterscheidet sich der E-Wert konzeptionell vom p-Wert?
5. Warum beeinflusst eine größere Datenbank die Signifikanz eines Treffers?
