---
title: "3.2 Formalisierung von Sequenzähnlichkeit"
sidebar:
  label: "3.2 Formalisierung von Sequenzähnlichkeit"
  order: 2
  group: "Part 2"
  part: "Part 2"
---

# **3.2 Formalisierung von Sequenzähnlichkeit**

## **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* biologische Sequenzen als mathematische Objekte zu repräsentieren
* Sequenzähnlichkeit mithilfe formaler Distanzmaße zu definieren
* zwischen Hamming-Distanz und Edit-Distanz zu unterscheiden
* zu verstehen, wie Edit-Operationen biologische Prozesse modellieren
* die Grenzen einfacher Distanzmaße zu erkennen

---

## **Von der Intuition zur Definition**

Im vorherigen Abschnitt haben wir Sequenzen von Adenylierungsdomänen verglichen und sie durch das Einführen von Lücken sowie das Verschieben von Resten manuell angepasst. Auf diese Weise konnten wir konservierte Regionen und funktionelle Motive sichtbar machen.

Dieser Vergleich beruhte jedoch auf Intuition:

* Wir haben Übereinstimmungen „erkannt“
* Wir haben „entschieden“, wo Lücken eingefügt werden
* Wir haben „beurteilt“, welches Alignment besser aussieht

Wenn wir über diese intuitive Ebene hinausgehen wollen, müssen wir eine grundlegende Frage beantworten:

> **Was bedeutet es in präzisem Sinn, dass zwei Sequenzen ähnlich sind?**

---

## **Sequenzen als mathematische Objekte**

Wir beginnen damit, biologische Sequenzen formal zu repräsentieren.

Eine Sequenz kann als Zeichenkette über einem endlichen Alphabet aufgefasst werden. Zum Beispiel:

* DNA-Sequenzen verwenden das Alphabet
  $$
  \mathcal{A} = {A, C, G, T}
  $$
* Proteinsequenzen verwenden ein Alphabet aus 20 Aminosäuren

Formal schreiben wir zwei Sequenzen als:

$$
X = x_1 x_2 x_3 \dots x_m
\qquad
Y = y_1 y_2 y_3 \dots y_n
$$

wobei jedes $x_i$ und $y_j$ ein Symbol aus dem Alphabet $\mathcal{A}$ ist.

An diesem Punkt wurde das biologische Problem in ein **Problem des Zeichenkettenvergleichs** überführt.

---

## **Ein erster Versuch: Positionsweiser Vergleich**

Eine einfache Idee besteht darin, Sequenzen Position für Position zu vergleichen. Wenn beide Sequenzen gleich lang sind, können wir zählen, an wie vielen Positionen sie sich unterscheiden.

Das führt zur **Hamming-Distanz**.

### **Definition (Hamming-Distanz)**

Für zwei gleich lange Sequenzen ist die Hamming-Distanz die Anzahl der Positionen, an denen sich die entsprechenden Symbole unterscheiden.

### **Beispiel**

Betrachten wir die Sequenzen:

```
X: GAGGTAGCGGCGTTTAAC
Y: GTGGTAACGGGGTTTAAC
```

Beim positionsweisen Vergleich sehen wir, dass sie sich an drei Positionen unterscheiden. Daher gilt:

$$
d_H(X, Y) = 3
$$

---

## **Interpretation der Hamming-Distanz**

Die Hamming-Distanz besitzt eine einfache und intuitive Interpretation:

* Jede Differenz entspricht einer **Substitution**
* Die Distanz zählt die **minimale Anzahl von Substitutionen**, die nötig ist, um eine Sequenz in die andere zu überführen

Aus biologischer Perspektive entspricht dies einem Modell, in dem:

* Mutationen nur als Substitutionen auftreten
* keine Insertionen oder Deletionen erlaubt sind

---

## **Grenzen der Hamming-Distanz**

Trotz ihres Nutzens ist die Hamming-Distanz stark eingeschränkt.

Erstens setzt sie voraus, dass die Sequenzen **dieselbe Länge** haben. Das ist bei realen biologischen Daten nur selten der Fall.

Zweitens nimmt sie an, dass alle Unterschiede auf Substitutionen zurückgehen. Wie wir jedoch bereits in Abschnitt 3.1 gesehen haben, unterscheiden sich biologische Sequenzen häufig durch:

* Insertionen
* Deletionen
* Verschiebungen im Alignment

Betrachten wir zum Beispiel zwei Sequenzen, von denen eine einen zusätzlichen Rest enthält. Ein positionsweiser Vergleich registriert dann fälschlich viele Mismatches, obwohl ein einzelnes Insertionsereignis die Differenz erklären könnte.

Darin zeigt sich eine zentrale Einschränkung:

> **Die Hamming-Distanz kann die Arten von Variation nicht erfassen, die in biologischen Sequenzen tatsächlich auftreten.**

---

## **Erweiterung des Modells: Edit-Operationen**

Um diese Grenzen zu überwinden, führen wir einen flexibleren Rahmen auf der Grundlage von **Edit-Operationen** ein.

Die Grundidee ist einfach:

Anstatt Sequenzen direkt zu vergleichen, fragen wir:

> **Wie viele Operationen sind mindestens erforderlich, um eine Sequenz in die andere zu überführen?**

Die erlaubten Operationen sind:

* **Substitution**: Ersetzen eines Symbols durch ein anderes
* **Insertion**: Einfügen eines Symbols
* **Deletion**: Entfernen eines Symbols

Diese Operationen entsprechen auf natürliche Weise biologischen Prozessen:

* Substitutionen modellieren Punktmutationen
* Insertionen und Deletionen (zusammengefasst als *Indels*) modellieren strukturelle Veränderungen in Sequenzen

---

## **Edit-Distanz (Levenshtein-Distanz)**

Daraus ergibt sich das Konzept der **Edit-Distanz**, auch **Levenshtein-Distanz** genannt.

### **Definition (Edit-Distanz)**

Die Edit-Distanz zwischen zwei Sequenzen ist die minimale Anzahl von Edit-Operationen (Substitutionen, Insertionen, Deletionen), die erforderlich ist, um die eine Sequenz in die andere zu transformieren.

---

## **Durchgerechnetes Beispiel**

Betrachten wir die Sequenzen:

```
X: TGGCCGCGCAAAAACAGC
Y: TGACCGCGCAAAA-CAGC
```

Hier können wir $X$ mit zwei Operationen in $Y$ überführen:

1. Ein Rest wird substituiert
2. Eine Deletion wird eingeführt (oder aus der umgekehrten Perspektive eine Insertion)

Damit ist die Edit-Distanz:

$$
d_{\text{edit}}(X, Y) = 2
$$

---

## **Interpretation der Edit-Distanz**

Die Edit-Distanz liefert ein wesentlich reichhaltigeres Modell für Sequenzähnlichkeit:

* Sie erlaubt Sequenzen unterschiedlicher Länge
* Sie berücksichtigt Insertionen und Deletionen
* Sie identifiziert den **minimalen Transformationspfad** zwischen zwei Sequenzen

Aus Sicht der Modellierung treffen wir nun die folgenden Annahmen:

* Sequenzen entwickeln sich durch diskrete Edit-Operationen
* Alle Operationen haben dieselben Kosten
* Die beste Erklärung ist diejenige mit den wenigsten Operationen

---

## **Von Distanz zu Ähnlichkeit**

Bisher haben wir **Distanzmaße** definiert, bei denen kleinere Werte bedeuten, dass zwei Sequenzen ähnlicher sind.

In vielen Kontexten ist es jedoch natürlicher, in **Ähnlichkeitsscores** zu denken, bei denen größere Werte eine bessere Übereinstimmung anzeigen.

Daraus ergibt sich eine äquivalente Formulierung:

> **Definiere die Ähnlichkeit zweier Sequenzen als den Score ihres besten Alignments.**

Dieser Übergang von *Distanz* zu *Score* ist subtil, aber bedeutsam:

* Distanz betont Unterschiede
* Ähnlichkeit betont Übereinstimmungen und konservierte Struktur

Beide Perspektiven sind mathematisch miteinander verwandt, doch die Formulierung über Scores ist flexibler und für biologische Modellierung besser geeignet.

---

## **Konzeptionelle Brücke zum Alignment**

An diesem Punkt verfügen wir über alle wesentlichen Bausteine, um Sequenzalignment formal zu definieren:

* Sequenzen als Zeichenketten
* Edit-Operationen als Transformationen
* Distanz- oder Score-Funktionen zur Bewertung von Ähnlichkeit

Eine zentrale Frage bleibt jedoch offen:

> **Wie finden wir effizient die beste Folge von Operationen oder das beste Alignment?**

Ein naiver Ansatz bestünde darin, alle möglichen Wege zu enumerieren, auf denen eine Sequenz in die andere überführt werden kann. Wie wir im nächsten Abschnitt sehen werden, wird das rechnerisch sehr schnell unpraktikabel.

Dies motiviert die Einführung der **dynamischen Programmierung**, mit der sich das Problem effizient lösen lässt, indem seine rekursive Struktur ausgenutzt wird.

---

## **Konzeptionelle Zusammenfassung**

Die intuitive Vorstellung von Sequenzähnlichkeit lässt sich mithilfe von Distanzmaßen formalisieren, die auf Edit-Operationen beruhen.

* Die **Hamming-Distanz** modelliert nur Substitutionen und setzt gleich lange Sequenzen voraus
* Die **Edit-Distanz** erlaubt Substitutionen, Insertionen und Deletionen und liefert damit ein realistischeres Modell

Diese Definitionen machen den Sequenzvergleich zu einem Optimierungsproblem: Gesucht ist die minimale Transformation oder, äquivalent dazu, das Alignment mit dem höchsten Score.

---

## **Fragen zur Selbstkontrolle**

1. Warum ist die Hamming-Distanz für den Vergleich biologischer Sequenzen nicht ausreichend?
2. Inwiefern erhöhen Insertionen und Deletionen den Realismus des Sequenzvergleichs?
3. In welchem Sinn definiert die Edit-Distanz ein Optimierungsproblem?
4. Wie hängen distanzbasierte und scorebasierte Formulierungen von Ähnlichkeit zusammen?
