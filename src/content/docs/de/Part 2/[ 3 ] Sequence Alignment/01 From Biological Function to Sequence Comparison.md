---
title: "3.1 Von biologischer Funktion zum Sequenzvergleich"
sidebar:
  label: "3.1 Von biologischer Funktion zum Sequenzvergleich"
  order: 1
  group: "Part 2"
  part: "Part 2"
---

# **3.1 Von biologischer Funktion zum Sequenzvergleich**

## **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* zu erklären, wie molekulare Funktion in einer Proteinsequenz codiert sein kann
* zu verstehen, warum die nicht-ribosomale Peptidsynthese den Vergleich von Sequenzen motiviert
* zu beschreiben, wie Alignments aus biologischer Argumentation heraus entstehen
* zu erkennen, warum intuitiver Sequenzvergleich rechnerisch formalisiert werden muss

---

## **Ein molekulares Rätsel: Wie codieren Enzyme Spezifität?**

Eine der zentralen Fragen der Molekularbiologie lautet, wie Proteine ihre bemerkenswerte funktionelle Spezifität erreichen. Enzyme sind nicht nur Katalysatoren, sondern hochselektive Systeme, die Substrate erkennen, Reaktionswege steuern und präzise molekulare Produkte hervorbringen.

Ein besonders eindrucksvolles Beispiel für eine solche Spezifität findet sich in der **nicht-ribosomalen Peptidsynthese (NRPS)**.

Im Unterschied zur ribosomalen Proteinsynthese, die dem genetischen Code in linearer und weitgehend einheitlicher Weise folgt, arbeiten NRPS-Systeme als **modulare enzymatische Fließbänder**. Jedes Modul eines solchen Systems ist dafür verantwortlich, eine bestimmte Aminosäure in eine wachsende Peptidkette einzubauen.

Verschiedene Organismen besitzen unterschiedliche NRPS-Systeme und produzieren damit biologisch aktive Verbindungen wie:

* Tyrocidin
* Daptomycin
* Vancomycin

Diese Moleküle unterscheiden sich erheblich in Struktur und Funktion, beruhen aber auf demselben architektonischen Grundprinzip.

Daraus ergibt sich eine grundlegende Frage:

> **Wo in der Sequenz dieser Enzyme liegt die Information, die bestimmt, welche Aminosäure eingebaut wird?**

---

## **Adenylierungsdomänen als Träger von Spezifität**

Innerhalb jedes NRPS-Moduls ist die entscheidende Komponente für die Substratauswahl die **Adenylierungsdomäne**. Diese Domänen binden spezifische Aminosäuren und aktivieren sie für den Einbau in die Peptidkette.

Wenn wir die Aminosäuresequenzen mehrerer solcher Domänen aus unterschiedlichen Organismen extrahieren, erhalten wir Sequenzen wie:

```id="q7r2yo"
s1: YAFDLGYTCMFPVLLGGGELHIVQKETYTAPDEIAHYIKEHGITYIKLTPSLFHTIVNTA...
s2: AFDVSAGDFARALLTGGQLIVCPNEVKMDPASLYAIIKKYDITIFEATPALVIPLMEYIY...
s3: IAFDASSWEIYAPLLNGGTVVCIDYYTTIDIKALEAVFKQHHIRGAMLPPALLKQCLVSA...
```

Auf den ersten Blick wirken diese Sequenzen ziemlich unterschiedlich. Es gibt keine unmittelbar erkennbare positionsweise Entsprechung. Experimentell wissen wir jedoch, dass all diese Proteine **im Wesentlichen dieselbe Funktion** erfüllen: Sie wählen Aminosäuren aus und aktivieren sie.

Damit entsteht ein Spannungsverhältnis:

* Die Funktion ist konserviert
* Die Sequenz erscheint variabel

Die Herausforderung besteht darin, diese beiden Beobachtungen miteinander in Einklang zu bringen.

---

## **Auf der Suche nach Mustern: Der erste Versuch**

Ein naheliegender erster Ansatz besteht darin, die Sequenzen **Position für Position** zu vergleichen und sie unverändert untereinanderzustellen. Dabei zeigen sich nur wenige Spalten, in denen in allen Sequenzen dieselben Aminosäuren auftreten.

Einige dieser Übereinstimmungen könnten rein zufällig entstanden sein. Tatsächlich sind kurze identische Muster selbst in nicht verwandten Sequenzen zu erwarten.

Wenn wir an dieser Stelle aufhören würden, könnten wir zu dem Schluss kommen, dass diese Sequenzen nur schwach miteinander verwandt sind. Das würde jedoch unserem biologischen Wissen widersprechen.

Das deutet darauf hin, dass unsere Vergleichsmethode unzureichend ist.

---

## **Alignment von Hand: Einführung von Lücken**

Betrachten wir nun eine einfache, aber wirkungsvolle Idee: Was ist, wenn die Sequenzen nicht korrekt zueinander ausgerichtet sind?

Nehmen wir an, wir verschieben eine Sequenz leicht nach rechts und fügen am Anfang ein **Lückensymbol „–“** ein:

```id="z8y1o2"
s1: YAFDLGYTCMFPVLLGGGELHIVQKET...
s2: -AFDVSAGDFARALLTGGQLIVCPNEV...
s3: IAFDASSWEIYAPLLNGGTVVCIDYY...
```

Schon diese kleine Anpassung erhöht die Zahl konservierter Positionen.

Ermutigt davon setzen wir den Prozess fort. Wir fügen an weiteren Stellen Lücken ein, an denen die Sequenzen gegeneinander verschoben zu sein scheinen:

```id="j5m2qk"
s1: YAFDLGYTCMFPVLLGGGELHIVQKET...
s2: -AFDVSAGDFARALLTGGQLIVCPNEV...
s3: ----IAFDASSWEIYAPLLNGGTVVC...
```

Mit jeder Anpassung werden mehr Spalten konserviert. Schließlich wird ein Muster sichtbar:

* ein **konservierter Kern**, der von allen Sequenzen geteilt wird
* **variable Regionen**, die diesen Kern umgeben
* spezifische kurze Motive, die mit funktionellen Unterschieden korrelieren

Dieser informelle Prozess ist das, was wir als **Alignment von Hand** bezeichnen.

---

## **Was haben wir gerade getan?**

Obwohl dieses manuelle Vorgehen auf den ersten Blick ad hoc wirken mag, führt es implizit mehrere wichtige Operationen aus:

1. **Sequenzen relativ zueinander verschieben**
   → Hypothesen über Insertionen oder Deletionen formulieren

2. **Reste zwischen Sequenzen einander zuordnen**
   → Hypothesen über funktionelle oder evolutionäre Entsprechung formulieren

3. **Die Zahl „guter“ Übereinstimmungen maximieren**
   → implizit eine Vorstellung von Ähnlichkeit optimieren

Mit anderen Worten: Auch ohne formale Definitionen lösen wir bereits ein **Optimierungsproblem**.

---

## **Vom Alignment zur biologischen Einsicht**

Die ausgerichteten Sequenzen zeigen mehr als nur Ähnlichkeit. Sie erlauben es uns, **funktionell wichtige Regionen** zu identifizieren.

Im Fall der Adenylierungsdomänen bilden bestimmte kurze Abschnitte, oft von etwa 8 Aminosäuren Länge, den sogenannten **nicht-ribosomalen Code**. Diese Segmente bestimmen, welche Aminosäure vom Enzym ausgewählt wird.

Zum Beispiel:

* LTKVGHIG → Aspartat
* VGEIGSID → Ornithin
* AWMFAAVL → Valin

Ohne ein geeignetes Alignment wären diese Motive äußerst schwer zu erkennen. Ihre Positionen sind in den Rohsequenzen nicht fest vorgegeben, sondern werden erst sichtbar, wenn Lücken eingeführt und homologe Regionen aufeinander ausgerichtet werden.

Das veranschaulicht ein zentrales Prinzip:

> **Ein Alignment ist der Mechanismus, der funktionelle Signale sichtbar macht.**

---

## **Die Notwendigkeit der Formalisierung**

So leistungsfähig ein Alignment von Hand auch sein mag, es hat klare Grenzen:

* Es ist subjektiv und nicht reproduzierbar
* Es skaliert nicht auf lange Sequenzen oder große Datensätze
* Es liefert keine Garantie für Optimalität

Vor allem fehlt eine präzise Definition dessen, was ein „gutes“ Alignment überhaupt ausmacht.

Um diese Grenzen zu überwinden, müssen wir das Problem formalisieren:

* Welche Operationen sind erlaubt, wenn eine Sequenz in eine andere überführt wird?
* Wie vergeben wir Scores für Matches, Mismatches und Lücken?
* Wie finden wir unter vielen Alternativen das bestmögliche Alignment?

Diese Fragen führen uns zu einem mathematischen Rahmen, in dem Sequenzalignment zu einem wohldefinierten Optimierungsproblem wird.

---

## **Konzeptionelle Zusammenfassung**

Der Vergleich biologischer Sequenzen ergibt sich auf natürliche Weise aus Fragen nach molekularer Funktion. Im Fall der NRPS-Systeme interessiert uns, welche Sequenzmerkmale die Substratspezifität bestimmen.

Durch das manuelle Ausrichten von Sequenzen erkennen wir, dass Ähnlichkeit keine rein positionsgebundene Eigenschaft ist. Sie hängt vielmehr davon ab, wie Sequenzen relativ zueinander angeordnet werden.

Diese Einsicht verwandelt den Sequenzvergleich in ein **Modellierungsproblem**:

* Wir müssen definieren, was ein Alignment ist
* Wir müssen festlegen, wie es bewertet wird
* Wir müssen Algorithmen entwickeln, die es berechnen

---

## **Fragen zur Selbstkontrolle**

1. Warum wirken Sequenzen von Adenylierungsdomänen auf den ersten Blick unähnlich, obwohl sie ähnliche Funktionen haben?
2. Welche impliziten Annahmen werden getroffen, wenn beim Alignment von Hand Lücken eingeführt werden?
3. Warum macht ein Alignment konservierte Motive sichtbar, die in Rohsequenzen nicht erkennbar sind?
4. In welchem Sinn löst manuelles Alignment bereits ein Optimierungsproblem?
