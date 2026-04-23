---
title: "Box 6.1 — Beobachtete Sequenz und verborgener Zustandspfad"
---

## **Box 6.1 — Beobachtete Sequenz und verborgener Zustandspfad**

Eine zentrale Idee eines Hidden-Markov-Modells besteht darin, dass zwei Sequenzen gleichzeitig eine Rolle spielen.

Die erste ist die **beobachtete Sequenz**, also die Folge von Symbolen, die wir tatsächlich messen. Im Fall von DNA sind dies die Nukleotide $A$, $C$, $G$ und $T$. Die zweite ist die **verborgene Zustandssequenz**, die den zugrunde liegenden biologischen Kontext repräsentiert, der jedes Symbol erzeugt hat. Diese verborgene Sequenz ist nicht direkt sichtbar und muss daher aus den Daten erschlossen werden.

Um diesen Unterschied zu veranschaulichen, betrachten wir das folgende kurze Beispiel:

$$
\text{Beobachtet: } A \quad C \quad C \quad T \quad A
$$

$$
\text{Verborgen: } \phantom{A} H \quad H \quad P \quad H \quad H
$$

Hier ist die beobachtete Sequenz die Nukleotidfolge $ACCTA$. Die verborgene Sequenz deutet an, dass die meisten Positionen vom Hintergrundzustand $H$ erzeugt wurden, während die dritte Position einem promotor- oder motivbezogenen Zustand $P$ zugeschrieben wird.

Der entscheidende Punkt ist, dass uns nur die obere Sequenz direkt gegeben ist. Die untere Sequenz ist eine Hypothese über den nicht beobachtbaren Prozess, der die Daten erzeugt hat.

Das bedeutet, dass eine einzelne beobachtete Sequenz nicht eindeutig einer einzigen verborgenen Zustandsfolge entspricht. Vielmehr können mehrere unterschiedliche Zustandsfolgen mit derselben Beobachtung vereinbar sein. So könnte die Sequenz $ACCTA$ prinzipiell auch durch Pfade wie

$$
H \quad P \quad P \quad H \quad H
$$

oder

$$
H \quad H \quad H \quad H \quad H
$$

oder

$$
P \quad P \quad H \quad H \quad H
$$

erklärt werden, sofern die entsprechenden Übergangs- und Emissionswahrscheinlichkeiten ihnen eine von null verschiedene Wahrscheinlichkeit zuweisen.

Genau deshalb führen Hidden-Markov-Modelle zu einem Inferenzproblem. Wir beobachten die emittierte Sequenz, sehen aber nicht direkt die Zustandsfolge, die sie erzeugt hat. Die Aufgabe des Modells besteht daher nicht nur darin, die Sequenz selbst zu beschreiben, sondern über die verborgene biologische Struktur nachzudenken, die ihr zugrunde liegt.

Diese Unterscheidung zwischen **Beobachtungen** und **verborgenen Zuständen** macht Hidden-Markov-Modelle sowohl leistungsfähiger als auch subtiler als gewöhnliche Markov-Ketten. In einer Standard-Markov-Kette sind die Zustände direkt sichtbar. In einem HMM dagegen bleiben sie latent, und die beobachteten Daten liefern nur indirekte Evidenz über sie.
