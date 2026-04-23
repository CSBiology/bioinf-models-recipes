---
title: "3.6 Bewertungssysteme und biologische Realität"
sidebar:
  label: "3.6 Bewertungssysteme und biologische Realität"
  order: 6
  group: "Part 2"
  part: "Part 2"
---

# **3.6 Bewertungssysteme und biologische Realität**

## **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* zu verstehen, wie Bewertungsschemata festlegen, was „Ähnlichkeit“ im Sequenzalignment bedeutet
* Substitutionsscores biologisch und probabilistisch zu interpretieren
* die Rolle von Substitutionsmatrizen wie PAM-Matrizen und BLOSUM-Matrizen zu erklären
* verschiedene Modelle für Gap-Strafen und ihre biologische Motivation zu beschreiben
* zu erkennen, wie die Wahl des Bewertungssystems die Alignment-Ergebnisse beeinflusst

---

## **Von Algorithmen zu Modellen**

Bis zu diesem Punkt haben wir effiziente Algorithmen zur Berechnung optimaler Alignments entwickelt. Eine wichtige Frage blieb dabei jedoch etwas im Hintergrund:

> **Was genau macht ein Alignment besser als ein anderes?**

Die von uns eingeführten Algorithmen der dynamischen Programmierung definieren Ähnlichkeit nicht von selbst. Sie optimieren lediglich eine Größe, die wir vorgeben. Diese Größe, der **Alignment-Score**, wird vollständig durch das **Bewertungssystem** bestimmt.

Mit anderen Worten: Das Bewertungsschema ist kein technisches Detail. Es ist der **mathematische Ausdruck unserer biologischen Annahmen**.

Wenn wir ein Bewertungssystem wählen, legen wir fest:

* welche Substitutionen als wahrscheinlich oder unwahrscheinlich gelten
* wie kostspielig Insertionen und Deletionen sind
* welche evolutionären Szenarien wir für plausibel halten

Damit ist die Bewertung der Punkt, an dem Biologie am direktesten in das Modell eingeht.

---

## **Ein erstes Bewertungsmodell**

Beginnen wir mit dem einfachstmöglichen Schema. Nehmen wir an, wir vergeben:

* einen positiven Score für Matches
* eine Strafe für Mismatches
* eine Strafe für Lücken

Zum Beispiel:

* Match: $( +1 )$
* Mismatch: $( -1 )$
* Gap: $( -1 )$

Unter diesem Modell ergibt sich der Score eines Alignments aus der Summe der Beiträge aller alignierten Positionen und aller Lücken.

Dieses Schema erfasst eine intuitive Idee: Identische Reste werden belohnt, Unterschiede bestraft.

Doch schon an dieser Stelle zeigt sich eine wichtige Feinheit. Nicht alle Mismatches sind biologisch gleichwertig.

---

## **Warum nicht alle Substitutionen gleich sind**

Betrachten wir DNA-Sequenzen. Die vier Nukleotide lassen sich in zwei Gruppen einteilen:

* Purine: A und G
* Pyrimidine: C und T

Mutationen, die diese Gruppenzugehörigkeit erhalten, etwa A ↔ G oder C ↔ T, heißen **Transitionen**, während Mutationen zwischen den Gruppen als **Transversionen** bezeichnet werden.

Empirisch treten Transitionen häufiger auf als Transversionen. Es ist daher biologisch unrealistisch, alle Mismatches gleich zu behandeln.

Diese Einsicht motiviert eine Verfeinerung des Bewertungsschemas. Anstatt eine einzige Mismatch-Strafe zu verwenden, vergeben wir **unterschiedliche Scores für unterschiedliche Substitutionen**.

---

## **Substitutionsmatrizen**

Eine natürliche Art, diese Präferenzen zu kodieren, ist eine **Substitutionsmatrix**, in der jeder Eintrag den Score für das Alignment zweier Reste angibt.

Für DNA könnte eine solche Matrix Transitionen stärker belohnen als Transversionen. Bei Proteinen ist die Situation erheblich komplexer.

Proteinsequenzen bestehen aus zwanzig Aminosäuren mit jeweils eigenen physikochemischen Eigenschaften. Substitutionen sind daher nicht zufällig, sondern werden beeinflusst durch:

* Größe und Form
* Ladung
* Hydrophobizität
* strukturelle Randbedingungen

Dadurch sind manche Substitutionen wesentlich wahrscheinlicher als andere.

Anstatt solche Matrizen von Hand zu entwerfen, ist es sinnvoller, sie aus empirischen Daten abzuleiten. Dies führt zu zwei weit verbreiteten Familien von Substitutionsmatrizen: PAM-Matrizen und BLOSUM-Matrizen.

---

## **Evolutionäre Interpretation von Substitutionsscores**

Sowohl PAM- als auch BLOSUM-Matrizen werden aus beobachteten Alignments realer Proteine konstruiert. Sie quantifizieren, wie häufig eine Aminosäure im Verlauf der Evolution durch eine andere ersetzt wird.

Konzeptionell lassen sich diese Scores als **Log-Odds-Verhältnisse** interpretieren:

$$
s(a,b) = \log \frac{P(\text{a aligns with b in related sequences})}{P(\text{a aligns with b by chance})}
$$

Obwohl wir diese Formel hier nicht formal herleiten, ist ihre Interpretation wichtig. Ein positiver Score bedeutet, dass eine Substitution häufiger auftritt, als es durch Zufall zu erwarten wäre, und damit biologisch plausibel ist. Ein negativer Score zeigt das Gegenteil an.

Substitutionsmatrizen kodieren daher nicht nur Ähnlichkeit. Sie kodieren **Evidenz für evolutionäre Verwandtschaft**.

---

## **PAM und BLOSUM: Zwei Perspektiven**

Obwohl beide Matrixfamilien evolutionäre Muster erfassen sollen, unterscheiden sie sich in ihrer Konstruktion.

PAM-Matrizen werden aus **globalen Alignments eng verwandter Proteine** abgeleitet und auf größere evolutionäre Distanzen extrapoliert. BLOSUM-Matrizen dagegen werden aus **lokal konservierten Regionen über verschiedene Proteine hinweg** konstruiert, wobei ähnliche Sequenzen zusammengefasst werden, um Verzerrungen zu vermeiden.

Daher betonen sie unterschiedliche Aspekte:

* PAM-Matrizen werden oft zur Erkennung **entfernter Homologie** verwendet
* BLOSUM-Matrizen sind besonders wirksam für **Aufgaben des lokalen Alignments**

Dies verdeutlicht ein wichtiges Prinzip:

> **Die Wahl der Bewertungsmatrix sollte zur biologischen Fragestellung passen.**

---

## **Modellierung von Lücken: Jenseits konstanter Strafen**

Bisher haben wir Lücken als Kosten mit festem Wert behandelt. Auch diese Annahme ist biologisch jedoch fragwürdig.

Betrachten wir die folgenden beiden Alignments:

```
ATGTAGTGTATAGTACATGCA
ATGTAG-------TACATGCA
```

und

```
ATGTAGTGTATAGTACATGCA
ATGTA--G--TA---CATGCA
```

Intuitiv wirkt das erste Alignment plausibler. Es deutet auf ein einzelnes Insertions- oder Deletionsereignis hin, das einen zusammenhängenden Block betrifft. Das zweite Alignment setzt viele unabhängige Ereignisse voraus und ist daher weniger wahrscheinlich.

Eine konstante Gap-Strafe kann zwischen diesen beiden Szenarien nicht unterscheiden.

---

## **Affine Gap-Strafen**

Um dieses Problem zu lösen, führen wir **affine Gap-Strafen** ein, bei denen die Kosten für das Öffnen einer Lücke von den Kosten für ihre Verlängerung getrennt werden.

Die Strafe hat die Form:

$$
\text{gap penalty} = A + B \cdot L
$$

wobei:

* $$A$$ die Strafe für das Öffnen einer Lücke ist
* $$B$$ die Strafe für die Verlängerung einer Lücke ist
* $$L$$ die Länge der Lücke ist

Diese Formulierung erfasst eine wichtige biologische Intuition:

* das Öffnen einer Lücke ist selten und sollte stark bestraft werden
* die Verlängerung einer bestehenden Lücke ist wahrscheinlicher und sollte schwächer bestraft werden

Indem wir $$A$$ und $$B$$ variieren, können wir steuern, ob der Algorithmus eher lange zusammenhängende Lücken oder viele kurze Lücken erzeugt.

---

## **Bewertung als Modellierungsentscheidung**

An diesem Punkt wird deutlich, dass Sequenzalignment nicht durch ein einziges universelles Bewertungsschema definiert ist. Vielmehr handelt es sich um eine **Familie von Modellen**, die jeweils unterschiedliche Annahmen über die Evolution von Sequenzen ausdrücken.

Wenn das Bewertungssystem geändert wird, können sich auch die optimalen Alignments ändern. Das ist kein Fehler, sondern Ausdruck der Tatsache, dass:

> **Es keinen einheitlichen Begriff von Ähnlichkeit gibt, der vom Kontext unabhängig wäre.**

Zum Beispiel:

* der Nachweis konservierter Domänen kann lokales Alignment mit BLOSUM-Matrizen erfordern
* die Untersuchung evolutionärer Divergenz kann andere Parameter bevorzugen
* das Alignment eng verwandter DNA-Sequenzen kann mit einfacheren Modellen auskommen

---

## **Konzeptionelle Zusammenfassung**

Bewertungssysteme bilden die Brücke zwischen biologischen Annahmen und rechnerischen Algorithmen. Substitutionsmatrizen kodieren Präferenzen für bestimmte Reständerungen, während Gap-Strafen strukturelle Variation in Sequenzen modellieren.

Gemeinsam definieren diese Komponenten, was wir unter Ähnlichkeit verstehen. Die Alignment-Algorithmen fungieren dann als Optimierungsverfahren, die unter diesem Modell die beste Erklärung identifizieren.

---

## **Fragen zur Selbstkontrolle**

1. Warum ist ein einfaches Match/Mismatch-Schema biologisch unzureichend?
2. Welche Information wird in Substitutionsmatrizen erfasst?
3. Wie lassen sich Substitutionsscores probabilistisch interpretieren?
4. Warum sind affine Gap-Strafen realistischer als konstante Gap-Strafen?
5. Wie beeinflusst die Wahl des Bewertungssystems die Alignment-Ergebnisse?

