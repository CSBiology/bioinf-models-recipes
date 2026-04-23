---
title: "6.2 Die Markov-Eigenschaft und Sequenzabhängigkeiten"
sidebar:
  label: "6.2 Die Markov-Eigenschaft und Sequenzabhängigkeiten"
  order: 2
  group: "Part 2"
  part: "Part 2"
---

# **6.2 Die Markov-Eigenschaft und Sequenzabhängigkeiten**

Im vorherigen Abschnitt haben wir zwei grundlegende Grenzen positionsspezifischer Modelle identifiziert: die Annahme der Unabhängigkeit zwischen Positionen und die Unfähigkeit, strukturelle Variation wie Insertionen und Deletionen zu behandeln. Beide Einschränkungen haben denselben tieferen Ursprung: Das Modell beschreibt nicht, wie Sequenzen entlang ihrer Länge erzeugt werden. Es behandelt jede Position isoliert.

Um dies zu überwinden, wenden wir uns nun Modellen zu, die **Abhängigkeiten zwischen benachbarten Positionen** explizit erfassen. Die zentrale Idee besteht darin, unserem probabilistischen Rahmen eine Vorstellung von *sequentieller Struktur* hinzuzufügen.

---

## **Von vollständiger Abhängigkeit zu handhabbaren Modellen**

Ein natürlicher Ausgangspunkt ist der allgemeinste Fall. Angenommen, wir möchten eine biologische Sequenz $X = (X_1, X_2, \dots, X_n)$ modellieren. Im vollständig allgemeinen Fall könnte die Wahrscheinlichkeit, an Position $n$ ein bestimmtes Symbol zu beobachten, von der gesamten vorhergehenden Sequenz abhängen:

$$
P(X_n \mid X_{n-1}, X_{n-2}, \dots, X_1)
$$

Aus biologischer Sicht ist dies keineswegs unplausibel. In Proteinen können Wechselwirkungen zwischen Aminosäuren infolge der Faltung große Sequenzdistanzen überbrücken. Auch regulatorische Elemente in DNA können komplexe Abhängigkeiten zeigen.

Ein solches vollständiges Modell ist jedoch rechnerisch nicht handhabbar. Die Zahl möglicher Abhängigkeiten wächst exponentiell mit der Sequenzlänge. Sowohl die Schätzung als auch die Auswertung eines solchen Modells würden eine unrealistische Menge an Daten und Rechenaufwand erfordern.

Deshalb führen wir eine vereinfachende Annahme ein.

---

## **Die Markov-Annahme**

Die zentrale Idee ist, dass sich die Abhängigkeit einer Position von ihrer gesamten Vorgeschichte dadurch annähern lässt, dass nur ein begrenzter Kontext berücksichtigt wird. Die einfachste und am weitesten verbreitete Variante ist die **Markov-Annahme erster Ordnung**:

$$
P(X_n \mid X_{n-1}, \dots, X_1) = P(X_n \mid X_{n-1})
$$

In Worten:

> Die Wahrscheinlichkeit, das nächste Symbol zu beobachten, hängt nur vom unmittelbar vorhergehenden Symbol ab.

Diese Annahme reduziert die Komplexität des Modells drastisch und erlaubt es zugleich, lokale Abhängigkeiten zwischen Sequenzpositionen zu erfassen.

Prozesse mit dieser Eigenschaft nennt man **Markov-Ketten**.

---

## **Interpretation in biologischen Sequenzen**

Die Markov-Annahme lässt sich als Kompromiss zwischen biologischem Realismus und rechnerischer Handhabbarkeit verstehen.

* Sie anerkennt, dass Sequenzpositionen nicht unabhängig sind.
* Sie beschränkt diese Abhängigkeiten auf eine lokale Nachbarschaft.

Beim Durchlaufen einer Sequenz ist dies oft sinnvoll. Benachbarte Nukleotide oder Aminosäuren zeigen aufgrund biochemischer Randbedingungen, Codonstruktur oder evolutionärer Prozesse häufig Korrelationen.

Gleichzeitig bleibt das Modell rechnerisch überschaubar. Anstatt alle denkbaren Vorgeschichten zu modellieren, müssen wir nur noch Übergänge zwischen benachbarten Symbolen berücksichtigen.

---

## **Ein einfaches Beispiel**

Betrachten wir eine DNA-Sequenz und ein einfaches Markov-Modell erster Ordnung, das durch Übergangswahrscheinlichkeiten zwischen Nukleotiden definiert ist. Zum Beispiel:

* $P(A \mid G) = 0.3$
* $P(G \mid A) = 0.2$
* $P(T \mid T) = 0.4$, und so weiter

Unter einem solchen Modell lässt sich die Wahrscheinlichkeit einer Sequenz $X = (x_1, x_2, \dots, x_n)$ schreiben als:

$$
P(X) = P(x_1) \cdot \prod_{i=2}^{n} P(x_i \mid x_{i-1})
$$

Dies erinnert an die Likelihood-Berechnung, die wir bereits kennengelernt haben, allerdings mit einem wesentlichen Unterschied:

> Die Wahrscheinlichkeit an jeder Position hängt nun vom vorhergehenden Symbol ab und nicht nur von der absoluten Position in der Sequenz.

---

## **Vergleich mit positionsspezifischen Modellen**

Es ist aufschlussreich, diese Formulierung mit der zuvor eingeführten Position Probability Matrix zu vergleichen.

* In einer **PPM** besitzt jede Position ihre eigene Verteilung, unabhängig von allen anderen Positionen.
* In einem **Markov-Modell** hängt die Verteilung an einer Position vom vorhergehenden Symbol ab, aber nicht von der absoluten Position in der Sequenz.

Daraus ergeben sich unterschiedliche Modellierungsmöglichkeiten:

| Modell        | Erfasst Positionsspezifität | Erfasst Abhängigkeiten | Erlaubt variable Länge |
| ------------- | --------------------------- | ---------------------- | ---------------------- |
| PPM           | Ja                          | Nein                   | Nein                   |
| Markov-Kette  | Nein                        | Ja (lokal)             | Ja                     |

Jedes Modell erfasst also einen anderen Aspekt biologischer Sequenzen, doch keines von beiden genügt allein für realistische Motivmodellierung.

---

## **Grenzen beobachtbarer Markov-Modelle**

Obwohl Markov-Ketten Abhängigkeiten einführen, bleiben sie in einer wichtigen Hinsicht unzureichend. Die Zustände des Modells sind direkt mit den beobachteten Symbolen verknüpft. Das Modell beschreibt also Übergänge zwischen Nukleotiden oder Aminosäuren selbst.

Daraus ergibt sich eine wesentliche Einschränkung:

* Unterschiedliche *Kontexte*, die dasselbe beobachtete Symbol erzeugen, lassen sich nicht unterscheiden.
* Latente biologische Prozesse wie „Promotorregion“ versus „Hintergrundsequenz“ können nicht explizit dargestellt werden.

Mit anderen Worten: Dem Modell fehlt eine explizite Darstellung **verborgener Struktur**.

---

## **Hin zu verborgenen Zuständen**

Um diese Einschränkung zu überwinden, fügen wir dem Modell eine zusätzliche Ebene hinzu.

Anstatt anzunehmen, dass die beobachteten Symbole selbst eine Markov-Kette bilden, nehmen wir an:

* Es existiert eine zugrunde liegende Folge **verborgener Zustände**
* diese Zustände folgen einem Markov-Prozess
* jeder Zustand emittiert beobachtbare Symbole gemäß einer Wahrscheinlichkeitsverteilung

Damit erhalten wir ein zweistufiges Modell:

1. Eine **verborgene Zustandssequenz**, die sich gemäß der Markov-Eigenschaft entwickelt
2. Eine **beobachtete Sequenz**, die von diesen Zuständen erzeugt wird

Diese Trennung erlaubt es uns, Situationen zu modellieren, in denen dasselbe beobachtete Symbol aus verschiedenen biologischen Kontexten hervorgehen kann.

---

## **Konzeptionelle Brücke zu Hidden-Markov-Modellen**

Damit sind wir in der Lage, die bisher entwickelten Ideen zusammenzuführen:

* Aus Motivmodellen behalten wir die Idee der **probabilistischen Emission von Symbolen**
* aus Markov-Ketten übernehmen wir die Idee der **Zustandsübergänge mit lokalen Abhängigkeiten**

Indem wir verborgene Zustände einführen, die die Emission beobachteter Symbole steuern, erhalten wir ein Modell, das:

* Abhängigkeiten zwischen Positionen erfasst
* zwischen unterschiedlichen biologischen Regimen unterscheidet
* Sequenzen als durch Wechsel zwischen diesen Regimen erzeugt beschreibt

Genau dies ist die Grundidee **Hidden-Markov-Modelle**.

Im nächsten Abschnitt formalisieren wir dieses Modell und beschreiben seine Komponenten im Detail.

---

## **Fragen zur Selbstkontrolle**

1. Warum ist es nicht praktikabel, vollständige Abhängigkeiten zwischen allen Positionen einer Sequenz zu modellieren?
2. Was ist die Markov-Annahme, und wie vereinfacht sie die Sequenzmodellierung?
3. Worin unterscheidet sich eine Markov-Kette von einer Position Probability Matrix?
4. Warum reichen beobachtbare Markov-Modelle für die Modellierung biologischer Sequenzstruktur nicht aus?
5. Welcher konzeptionelle Schritt führt von Markov-Ketten zu Hidden-Markov-Modellen?
