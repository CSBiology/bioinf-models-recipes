---
title: "6.3 Struktur und Komponenten von Hidden-Markov-Modellen"
sidebar:
  label: "6.3 Struktur und Komponenten von Hidden-Markov-Modellen"
  order: 3
  group: "Part 2"
  part: "Part 2"
---

# **6.3 Struktur und Komponenten von Hidden-Markov-Modellen**

Im vorherigen Abschnitt haben wir die Markov-Annahme als prinzipiellen Weg eingeführt, Abhängigkeiten zwischen benachbarten Positionen einer Sequenz zu modellieren. Das stellt bereits eine deutliche Verbesserung gegenüber positionsspezifischen Modellen dar, die alle Positionen als unabhängig behandeln. Zugleich haben wir aber eine entscheidende Grenze gesehen: In einer gewöhnlichen Markov-Kette sind die Zustände direkt an die beobachteten Symbole gebunden. Solche Modelle können deshalb nicht zwischen unterschiedlichen biologischen Kontexten unterscheiden, die identische Beobachtungen hervorbringen.

Um diese Grenze zu überwinden, führen wir nun einen ausdrucksstärkeren Modellrahmen ein: **Hidden-Markov-Modelle (HMMs)**. Diese Modelle trennen die *beobachtbare Sequenz* vom *zugrunde liegenden generativen Prozess* und erlauben es so, verborgene biologische Struktur explizit darzustellen.

---

## **Eine generative Sicht auf biologische Sequenzen**

Die zentrale Idee eines Hidden-Markov-Modells lässt sich am besten aus generativer Perspektive verstehen. Anstatt zu fragen, wie gut eine Sequenz zu einem gegebenen Muster passt, stellen wir uns einen stochastischen Prozess vor, der die Sequenz Schritt für Schritt *erzeugt*.

Genauer nehmen wir an, dass:

* das System sich durch eine Folge interner Zustände bewegt
* jeder Zustand beobachtbare Symbole gemäß einer Wahrscheinlichkeitsverteilung emittiert
* das System im Zeitverlauf zwischen Zuständen übergeht

Daraus ergibt sich eine zweischichtige Struktur:

1. Eine Folge **verborgener Zustände**, die den zugrunde liegenden biologischen Kontext kodiert
2. Eine Folge **beobachteter Symbole**, die von diesen Zuständen erzeugt wird

Das entscheidende Merkmal des Modells ist, dass die verborgenen Zustände nicht direkt beobachtbar sind. Wir sehen nur die emittierte Sequenz, nicht aber den Prozess, der sie hervorgebracht hat.

Diese Trennung ist wesentlich. Sie erlaubt es, Situationen zu modellieren, in denen dasselbe beobachtete Symbol aus grundsätzlich verschiedenen biologischen Mechanismen hervorgehen kann.

---

## **Rückkehr zum Problem der Motivsuche**

Um diese Abstraktion konkreter zu machen, kehren wir zu dem Problem der Motivsuche zurück, das dieses Kapitel motiviert.

Zuvor haben wir Motive mithilfe positionsspezifischer Wahrscheinlichkeitsmatrizen modelliert. Dabei haben wir implizit angenommen, dass die Sequenz bis auf lokale Variation, die durch das Motivmodell beschrieben wird, homogen ist. Nun nehmen wir eine andere Perspektive ein.

Wir gehen davon aus, dass die Sequenz durch den Wechsel zwischen zwei unterschiedlichen Regimen erzeugt wird:

* einem **motivgenerierenden Regime**, das biologisch bedeutsame Muster wie Promotorregionen erzeugt
* einem **Hintergrundregime**, das unspezifische Sequenz erzeugt

Im HMM-Rahmen werden diese Regime als **verborgene Zustände** dargestellt. Zur Vereinfachung bezeichnen wir sie als:

$$
S = \{P, B\}
$$

wobei $P$ für den Promotor- bzw. Motivzustand und $B$ für den Hintergrundzustand steht.

Während das Modell eine Sequenz erzeugt, bewegt es sich zwischen diesen Zuständen. Befindet es sich im Promotorzustand, emittiert es Nukleotide gemäß einer motifspezifischen Verteilung. Befindet es sich im Hintergrundzustand, emittiert es Nukleotide gemäß Hintergrundfrequenzen.

Auf diese Weise erfasst das Modell nicht nur die Zusammensetzung von Motiven, sondern auch ihre **Position und Ausdehnung innerhalb der Sequenz**.

---

## **Formale Komponenten eines Hidden-Markov-Modells**

Wir beschreiben nun die Bestandteile eines HMM formaler. Jede Komponente spielt eine eigene Rolle bei der Definition des generativen Prozesses.

---

### **Verborgene Zustände**

Ein HMM besteht aus einer endlichen Menge verborgener Zustände:

$$
S = \{s_1, s_2, \dots, s_N\}
$$

Diese Zustände repräsentieren unterschiedliche Modi des zugrunde liegenden Prozesses. In biologischen Anwendungen entsprechen sie häufig funktionellen oder strukturellen Regionen, etwa Promotoren, kodierenden Bereichen oder Hintergrundsequenz.

Im einfachsten hier diskutierten Fall betrachten wir zwei Zustände:

$$
S = \{P, B\}
$$

In realistischen Anwendungen kann die Zahl der Zustände jedoch erheblich größer sein und damit eine sehr viel reichere Modellierung biologischer Struktur erlauben.

---

### **Anfangswahrscheinlichkeiten**

Bevor die Erzeugung der Sequenz beginnt, muss das Modell einen Anfangszustand wählen. Dies wird durch eine Wahrscheinlichkeitsverteilung beschrieben:

$$
\pi_i = P(S_1 = s_i)
$$

die angibt, mit welcher Wahrscheinlichkeit der Prozess in Zustand $s_i$ startet.

Konzeptionell entspricht dies einer Vorannahme darüber, wie Sequenzen typischerweise beginnen. In genomischen Sequenzen ist es beispielsweise häufig plausibel, dass der Hintergrundzustand am Anfang wahrscheinlicher ist.

---

### **Übergangswahrscheinlichkeiten**

Sobald der Prozess begonnen hat, entwickelt er sich durch Übergänge zwischen Zuständen weiter. Diese Übergänge werden durch eine Matrix von Wahrscheinlichkeiten beschrieben:

$$
t_{ij} = P(S_{n+1} = s_j \mid S_n = s_i)
$$

Jeder Eintrag $t_{ij}$ gibt an, mit welcher Wahrscheinlichkeit das Modell im nächsten Schritt von Zustand $s_i$ nach Zustand $s_j$ wechselt.

Im Promotor-Hintergrund-Beispiel haben diese Übergänge eine unmittelbare Interpretation:

* $P(P \rightarrow P)$: Wahrscheinlichkeit, innerhalb eines Motivs zu bleiben
* $P(P \rightarrow B)$: Wahrscheinlichkeit, ein Motiv zu verlassen
* $P(B \rightarrow B)$: Wahrscheinlichkeit, im Hintergrund zu bleiben
* $P(B \rightarrow P)$: Wahrscheinlichkeit, in ein Motiv einzutreten

Diese Wahrscheinlichkeiten kodieren die **Struktur und Persistenz** unterschiedlicher Regionen. Wenn Motive zum Beispiel typischerweise nur kurze Segmente bilden, wird die Wahrscheinlichkeit, im Promotorzustand zu bleiben, eher gering sein.

---

### **Emissionswahrscheinlichkeiten**

Jedem Zustand ist eine Wahrscheinlichkeitsverteilung über beobachtbare Symbole zugeordnet. Dies sind die **Emissionswahrscheinlichkeiten**:

$$
e_i(x) = P(X_n = x \mid S_n = s_i)
$$

Sie geben an, wie wahrscheinlich es ist, dass ein bestimmter Zustand ein bestimmtes Symbol emittiert.

Im Fall von DNA-Sequenzen gilt zum Beispiel:

* der Promotorzustand kann bestimmte Nukleotide oder Muster stärker bevorzugen
* der Hintergrundzustand kann die allgemeinen genomischen Nukleotidfrequenzen widerspiegeln

Damit verbinden Emissionswahrscheinlichkeiten die verborgenen Zustände mit den beobachtbaren Daten.

---

## **Zwei komplementäre Darstellungen**

Hidden-Markov-Modelle können auf zwei äquivalente, aber komplementäre Weisen repräsentiert werden.

---

### **Graphische Darstellung**

Die intuitivste Darstellung ist ein **Zustandsübergangsgraph**. In dieser Darstellung gilt:

* Knoten entsprechen verborgenen Zuständen
* gerichtete Kanten entsprechen Übergängen zwischen Zuständen
* jede Kante ist mit einer Übergangswahrscheinlichkeit beschriftet
* jedem Knoten sind Emissionswahrscheinlichkeiten zugeordnet

Diese Darstellung spiegelt den generativen Prozess unmittelbar wider und ist besonders hilfreich für konzeptionelles Verständnis und Modelldesign.

---

### **Matrixdarstellung**

Für rechnerische Zwecke ist es oft günstiger, das Modell mithilfe von Matrizen zu beschreiben:

* einer **Übergangsmatrix** $T = (t_{ij})$
* einer **Emissionsmatrix** $E = (e_i(x))$

Diese Matrizen liefern eine kompakte Darstellung des Modells und werden direkt in algorithmischen Implementierungen verwendet.

---

## **Warum die Zustände „verborgen“ sind**

Das definierende Merkmal eines Hidden-Markov-Modells ist, dass die Zustandsfolge nicht beobachtbar ist.

Gegeben eine beobachtete Sequenz wie

$$
X = \text{ACCTA}
$$

kann es viele verschiedene Folgen verborgener Zustände geben, die sie erzeugt haben könnten. Zum Beispiel:

$$
(B, B, P, P, B), \quad (B, P, P, B, B), \quad (P, P, P, B, B)
$$

Jede dieser Zustandsfolgen entspricht einer anderen Interpretation der Daten. Einige beschreiben vielleicht kurze Motivvorkommen, andere längere, wieder andere gar kein Motiv.

Wichtig ist, dass all diese Interpretationen unter dem Modell positive Wahrscheinlichkeit besitzen können.

Diese Mehrdeutigkeit ist kein Fehler des Modells, sondern sein wesentliches Merkmal. Sie spiegelt die inhärente Unsicherheit biologischer Daten wider und motiviert Algorithmen, die gleichzeitig über viele mögliche Erklärungen nachdenken können.

---

## **Ein Schritt-für-Schritt-Beispiel für den generativen Prozess**

Um besser zu verstehen, wie ein HMM eine Sequenz erzeugt, betrachten wir den folgenden Ablauf:

1. Das Modell wählt gemäß $\pi$ einen Anfangszustand.
2. Es emittiert ein Symbol gemäß der Emissionsverteilung dieses Zustands.
3. Es wechselt gemäß den Übergangswahrscheinlichkeiten in einen neuen Zustand.
4. Dieser Prozess wiederholt sich.

Angenommen, wir beobachten die Sequenz

$$
X = \text{ACCTA}
$$

Dann hängt an der ersten Position die Wahrscheinlichkeit, ein $A$ zu beobachten, sowohl von

* der Wahrscheinlichkeit ab, in jedem Zustand zu starten,
* als auch von der Emissionswahrscheinlichkeit für $A$ in diesen Zuständen.

An der zweiten Position hängt die Wahrscheinlichkeit, ein $C$ zu beobachten, sowohl von

* der Wahrscheinlichkeit des Übergangs aus dem vorherigen Zustand
* als auch von der Emissionswahrscheinlichkeit für $C$ im neuen Zustand

ab.

Dieses Muster setzt sich über die ganze Sequenz hinweg fort. In jedem Schritt wird die Wahrscheinlichkeit der Beobachtung zugleich vom aktuellen Zustand und vom Übergang aus dem vorherigen Zustand bestimmt.

Auf diese Weise verbindet das Modell auf natürliche Weise **lokale Abhängigkeiten** über Übergänge mit **zustandsspezifischen Emissionen**.

---

## **Biologische Interpretation**

Eine der großen Stärken von Hidden-Markov-Modellen besteht darin, dass ihre Komponenten direkte biologische Bedeutungen haben.

* **Verborgene Zustände** entsprechen biologischen Kontexten oder funktionellen Regionen
* **Übergänge** beschreiben, wie diese Regionen entlang der Sequenz organisiert sind
* **Emissionen** beschreiben die beobachtbaren Eigenschaften jeder Region

Im Motivbeispiel bedeutet dies:

* der Eintritt in den Promotorzustand entspricht dem Erreichen eines Motivs
* das Verbleiben in diesem Zustand bedeutet, dass wir innerhalb des Motivs bleiben
* der Rückübergang in den Hintergrund entspricht dem Verlassen des Motivs

Damit sind HMMs nicht nur leistungsfähige rechnerische Werkzeuge, sondern zugleich sinnvolle Darstellungen biologischer Prozesse.

---

## **Was das Modell ermöglicht**

Durch die Einführung verborgener Zustände und strukturierter Übergänge erweitern Hidden-Markov-Modelle unsere Modellierungsfähigkeit deutlich.

Sie erlauben uns:

* verschiedenen Regionen einer Sequenz biologische Bedeutung zuzuweisen
* die wahrscheinlichste zugrunde liegende Struktur einer Sequenz zu inferieren
* zu bewerten, wie gut eine Sequenz zu einem gegebenen Modell passt
* Modellparameter aus Daten zu lernen

Diese Fähigkeiten entsprechen drei fundamentalen rechnerischen Problemen, die wir im nächsten Abschnitt im Detail betrachten.

---

## **Fragen zur Selbstkontrolle**

1. In welchem Sinn liefert ein HMM ein generatives Modell biologischer Sequenzen?
2. Wie unterscheiden sich verborgene Zustände konzeptionell von beobachteten Symbolen?
3. Welche biologischen Interpretationen lassen sich Übergangswahrscheinlichkeiten zuordnen?
4. Warum können mehrere verborgene Zustandsfolgen dieselbe beobachtete Sequenz erklären?
5. Wie erhöht die Trennung zwischen verborgenen Zuständen und Beobachtungen die Modellierungsflexibilität?
