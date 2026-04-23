---
title: "4.6 Statistische Signifikanz: Wann ist ein Treffer bedeutsam?"
sidebar:
  label: "4.6 Statistische Signifikanz: Wann ist ein Treffer bedeutsam?"
  order: 6
  group: "Part 2"
  part: "Part 2"
---

## **4.6 Statistische Signifikanz: Wann ist ein Treffer bedeutsam?**

### **Lernziele**

Nach diesem Abschnitt sollten Sie in der Lage sein:

* zu erklären, warum rohe Alignment-Scores für die Interpretation von Suchergebnissen nicht ausreichen
* die Rolle eines Nullmodells bei der Bewertung zufälliger Ähnlichkeit zu beschreiben
* zu verstehen, warum in der Datenbanksuche Extremwertstatistik relevant wird
* p-Werte und E-Werte als Maße statistischer Signifikanz zu interpretieren
* zu erläutern, wie Sequenzlänge und Datenbankgröße die Signifikanz eines Treffers beeinflussen

Bis hierhin haben wir Verfahren kennengelernt, mit denen sich ähnliche Sequenzen in großen Datenbanken effizient aufspüren lassen. Algorithmen wie BLAST liefern dazu Alignments und zugehörige Scores, auf deren Grundlage sich Treffer ordnen lassen. Doch damit ist eine entscheidende Frage noch nicht beantwortet:

> **Woher wissen wir, ob ein Alignment mit hohem Score biologisch bedeutsam ist oder lediglich zufällig entstanden ist?**

In großskaligen Suchsituationen ist diese Frage unvermeidlich. Je mehr Sequenzen verglichen werden, desto häufiger treten auch hohe Scores auf, die allein durch Zufall zustande kommen. Ohne einen statistischen Bezugsrahmen lässt sich deshalb nicht zwischen Signal und Rauschen unterscheiden.

---

### **Warum rohe Scores nicht ausreichen**

Ein Alignment-Score ergibt sich aus der Summe von Substitutionsbeiträgen und Gap-Strafen:

$$
S = \sum \text{substitution scores} + \sum \text{gap penalties}.
$$

Dieser Score beschreibt zwar die Qualität eines Alignments unter einem gegebenen Scoring-System, ihm fehlt jedoch ein entscheidender Referenzpunkt. Ein Wert von beispielsweise $50$ kann in einem Kontext hochsignifikant und in einem anderen völlig unauffällig sein.

Zwei Faktoren sind dabei besonders wichtig:

* **Sequenzlänge**
  Längere Sequenzen bieten mehr Möglichkeiten für zufällige lokale Übereinstimmungen.

* **Datenbankgröße**
  Je mehr Sequenzen durchsucht werden, desto wahrscheinlicher ist es, auch zufällig hohe Scores zu beobachten.

Ein roher Score darf daher nie isoliert interpretiert werden. Er muss gegen das verglichen werden, was unter einem **Nullmodell zufälliger Sequenzen** zu erwarten wäre.

---

### **Das Nullmodell: Zufällige Alignments**

Zur Beurteilung der Signifikanz stellen wir uns eine Situation vor, in der die Query gegen Sequenzen verglichen wird, die **nicht verwandt** sind und nach einer geeigneten Hintergrundverteilung zufällig erzeugt wurden.

Unter dieser Nullhypothese ist jedes beobachtete Alignment rein zufällig. Die relevante Frage lautet dann:

> **Wie wahrscheinlich ist es, unter diesem Zufallsmodell einen Alignment-Score zu beobachten, der mindestens so hoch ist wie der gemessene?**

Gerade diese Wahrscheinlichkeit liefert ein natürliches Maß für statistische Signifikanz.

---

### **Extremwerte und Alignment-Scores**

Ein wichtiger Befund der statistischen Theorie ist, dass sich Alignment-Scores unter dem Nullmodell nicht wie beliebige Einzelbeobachtungen verhalten. Für die Datenbanksuche ist nämlich nicht irgendein Score entscheidend, sondern typischerweise der **maximale** Score unter sehr vielen möglichen Vergleichen.

Maxima vieler Zufallsvariablen folgen charakteristisch einer **Extremwertverteilung**, die häufig durch eine Gumbel-Verteilung angenähert wird.

Intuitiv ist dies leicht nachvollziehbar: In einer Datenbanksuche betrachten wir nicht ein einziges Alignment, sondern sehr viele potenzielle lokale Alignments über viele Sequenzen hinweg. Selbst wenn alle Vergleiche rein zufällig wären, wäre der größte beobachtete Score typischerweise deutlich höher als ein durchschnittlicher Einzelwert.

Daraus folgt:

> **Hohe Alignment-Scores müssen im Kontext vieler möglicher Zufallstreffer interpretiert werden.**

---

### **p-Werte: Wahrscheinlichkeit eines Zufallstreffers**

Ein naheliegendes Signifikanzmaß ist der **p-Wert**. Formal ist er definiert als

$$
p = \mathbb{P}(\text{score} \geq S \mid \text{null model}),
$$

also als die Wahrscheinlichkeit, unter dem Nullmodell einen Score zu erhalten, der mindestens so groß ist wie der beobachtete Wert $S$.

Ein kleiner p-Wert bedeutet, dass ein solcher Score unter zufälligen Bedingungen unwahrscheinlich ist. Dies spricht dafür, dass das beobachtete Alignment mehr sein könnte als bloßer Zufall.

Für Datenbanksuchen ist der p-Wert allerdings nicht immer die praktischste Größe, weil er nicht direkt ausdrückt, wie viele zufällige Treffer bei einer Suche zu erwarten sind.

---

### **E-Werte: Erwartete Zahl zufälliger Treffer**

Deshalb verwendet BLAST bevorzugt eine eng verwandte, aber oft anschaulichere Größe: den **E-Wert**.

Der E-Wert ist definiert als:

> **Die erwartete Anzahl von Alignments mit einem Score von mindestens $S$, die in einer Datenbanksuche rein zufällig auftreten würden.**

Er lässt sich näherungsweise durch

$$
E = K \cdot m \cdot n \cdot e^{-\lambda S}
$$

beschreiben, wobei

* $m$ und $n$ die Längen von Query und Datenbanksequenz sind,
* $K$ und $\lambda$ Parameter darstellen, die vom Scoring-System und von der Sequenzkomposition abhängen.

Diese Formel macht zwei Zusammenhänge unmittelbar sichtbar:

* **Je höher der Score, desto kleiner der E-Wert.**
* **Je größer die Datenbank, desto größer der E-Wert.**

---

### **Interpretation des E-Werts**

Die praktische Deutung des E-Werts ist vergleichsweise direkt:

* $E \approx 1$
  bedeutet, dass etwa ein solcher Treffer zufällig zu erwarten ist.

* $E \ll 1$
  bedeutet, dass ein solcher Treffer unter dem Nullmodell selten wäre.

* $E \gg 1$
  bedeutet, dass viele derartige Treffer zufällig zu erwarten sind.

So spricht etwa ein E-Wert von $10^{-5}$ für einen sehr starken Treffer, während ein E-Wert von $10$ nahelegt, dass vergleichbare Scores in dieser Suche häufig zufällig auftreten würden.

Gerade deshalb verbindet der E-Wert statistische Theorie mit praktischer Interpretation besonders gut.

---

### **Die Rolle der Datenbankgröße**

Eine wichtige Konsequenz dieses Rahmens ist, dass Signifikanz nicht nur von der Qualität des Alignments, sondern auch von der Größe des Suchraums abhängt.

Wächst die Datenbank, steigt die Zahl möglicher Zufallsvergleiche. Damit erhöht sich auch die Wahrscheinlichkeit, zufällig hohe Scores zu beobachten. Ein und dasselbe Alignment kann daher in einer kleinen Datenbank hochsignifikant, in einer sehr großen Datenbank dagegen weniger beeindruckend erscheinen.

Dies ist keine Schwäche des Signifikanzbegriffs, sondern seine notwendige Konsequenz.

---

### **Von Scores zur biologischen Interpretation**

Die statistische Bewertung bildet die entscheidende Brücke zwischen rechnerischem Ergebnis und biologischer Interpretation. Ein hoher Score allein genügt nicht. Erst wenn ein solcher Score unter dem Nullmodell **unwahrscheinlich genug** ist, wird eine biologische Deutung wie etwa Homologie überhaupt plausibel.

Gleichzeitig garantiert Signifikanz noch keine biologische Relevanz. Auch bei kleinem E-Wert müssen weitere Aspekte berücksichtigt werden:

* die Länge des Alignments,
* die Erhaltung funktionell wichtiger Positionen,
* die Domänenarchitektur,
* und der biologische Kontext.

Statistische Signifikanz ist also eine notwendige, aber nicht hinreichende Bedingung für belastbare Interpretation.

---

### **Zusammenfassung**

Statistische Signifikanz macht rohe Alignment-Scores interpretierbar:

* p-Werte geben die Wahrscheinlichkeit eines gleich hohen oder höheren Zufallsscores an,
* E-Werte schätzen die erwartete Zahl solcher Zufallstreffer in der Datenbanksuche,
* beide beruhen auf einem Nullmodell zufälliger Sequenzen,
* und beide hängen von Sequenzlänge und Datenbankgröße ab.

Erst dieser statistische Rahmen erlaubt es, echte Evidenz für biologische Beziehung von bloßer Zufallskorrelation zu unterscheiden.

---

### **Fragen zur Selbstkontrolle**

1. Warum reicht ein hoher Alignment-Score allein nicht aus, um biologische Relevanz zu behaupten?
2. Was beschreibt das Nullmodell im Kontext der Ähnlichkeitssuche?
3. Warum spielt bei Datenbanksuchen eine Extremwertverteilung und nicht eine Normalverteilung die zentrale Rolle?
4. Worin unterscheiden sich p-Wert und E-Wert konzeptionell?
5. Warum beeinflusst die Größe der Datenbank die Signifikanz eines Treffers?
