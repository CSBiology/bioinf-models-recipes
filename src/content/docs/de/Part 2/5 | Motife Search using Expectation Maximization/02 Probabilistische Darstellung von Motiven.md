---
title: "5.2 Probabilistische Darstellung von Motiven"
sidebar:
  label: "5.2 Probabilistische Darstellung von Motiven"
  order: 2
  group: "Part 2"
  part: "Part 2"
---

# **5.2 Probabilistische Darstellung von Motiven**

### **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* zu erklären, wie alignierte Motivinstanzen mit positionsspezifischen Zählungen dargestellt werden können
* eine Position Frequency Matrix (PFM) zu konstruieren und zu interpretieren
* zu verstehen, wie PFMs in Position Probability Matrices (PPMs) überführt werden
* die Rolle von Pseudocounts in probabilistischen Modellen zu erklären
* zu beschreiben, wie sich ein probabilistisches Motivmodell zum Bewerten von Sequenzen verwenden lässt

---

Im vorherigen Abschnitt wurden Motive als wiederkehrende Sequenzmuster eingeführt, die mit biologischer Funktion verbunden sind. Zugleich haben wir gesehen, dass diese Muster nur selten exakt sind, sondern Variation zwischen verschiedenen Instanzen zeigen. Daraus ergibt sich unmittelbar die Frage, wie sich diese Variabilität systematisch und quantitativ darstellen lässt.

Um diese Frage zu beantworten, beginnen wir mit einer vereinfachenden Annahme. Nehmen wir an, wir hätten eine Sammlung von Sequenzen, in denen die Motivvorkommen bereits aligniert sind. Das heißt, für jede Sequenz kennen wir exakt die Position, an der das Motiv beginnt, und wir können gleich lange Segmente extrahieren, die verschiedenen Instanzen desselben Motivs entsprechen. Diese Annahme gilt in der Praxis zwar nicht, erlaubt uns aber zunächst, die Repräsentation von Motiven zu verstehen, bevor wir zur schwierigeren Frage ihrer Entdeckung zurückkehren.

Ausgehend von einem solchen Alignment können wir jede Position des Motivs unabhängig betrachten und zählen, wie häufig dort jedes Symbol auftritt. Im Fall von DNA bedeutet dies, die Vorkommen von A, C, G und T an jeder Position zu zählen. Das Ergebnis ist eine tabellarische Darstellung, in der die Zeilen den Symbolen und die Spalten den Positionen innerhalb des Motivs entsprechen. Diese Struktur bezeichnet man als *Position Frequency Matrix* (PFM).

Die PFM fasst empirische Beobachtungen über das Motiv zusammen. Wenn an einer bestimmten Position ein Nukleotid besonders häufig vorkommt, spricht dies dafür, dass diese Position funktionell eingeschränkt ist. Treten dagegen alle Nukleotide mit ähnlicher Häufigkeit auf, ist die Position vermutlich für die mit dem Motiv verbundene Funktion weniger wichtig. Auf diese Weise liefert die PFM eine erste, direkt aus Daten abgeleitete Annäherung an die Motivstruktur.

Die PFM ist jedoch zunächst noch ein rein deskriptives Objekt auf Basis von Zählwerten und hängt von der Anzahl der Sequenzen ab, aus denen sie konstruiert wurde. Um eine Repräsentation zu erhalten, die probabilistisches Schließen erlaubt, normieren wir diese Zählungen so, dass sich die Häufigkeiten an jeder Position zu eins aufsummieren. Die resultierende Matrix heißt *Position Probability Matrix* (PPM) und wird auch als Profilmatrix bezeichnet.

Die PPM definiert ein einfaches probabilistisches Modell des Motivs. Für jede Position legt sie eine Wahrscheinlichkeitsverteilung über die möglichen Symbole fest. Konzeptionell kann sie als generatives Modell interpretiert werden: Um eine Motivinstanz zu erzeugen, wird an jeder Position unabhängig ein Symbol entsprechend der zugehörigen Verteilung gezogen. Diese Unabhängigkeitsannahme ist zwar vereinfachend, liefert aber ein gut handhabbares und in der Praxis weit verbreitetes Modell für Sequenzmotive.

Diese probabilistische Formulierung erlaubt es, zu bewerten, wie gut ein gegebenes Sequenzsegment zum Motiv passt. Betrachten wir eine Kandidatensequenz derselben Länge wie das Motiv. Unter dem PPM-Modell ergibt sich ihre Wahrscheinlichkeit als Produkt der Wahrscheinlichkeiten ihrer Symbole an den jeweiligen Positionen. Jede Position trägt somit unabhängig zur Gesamtwahrscheinlichkeit der Sequenz unter dem Motivmodell bei. Sequenzen, die gut mit den in der PPM kodierten Präferenzen übereinstimmen, erhalten höhere Wahrscheinlichkeiten; Sequenzen, die davon abweichen, erhalten geringere Likelihoods.

An dieser Stelle entsteht ein wichtiges praktisches Problem. In realen Datensätzen ist die Zahl beobachteter Motivinstanzen oft begrenzt. Dadurch kann es vorkommen, dass bestimmte Symbole an einzelnen Positionen gar nicht beobachtet werden. Das führt in der PFM zu Nullzählungen und in der PPM zu Nullwahrscheinlichkeiten. Dies ist problematisch, weil schon eine einzige Nullwahrscheinlichkeit die Likelihood jeder Sequenz, die an der betreffenden Position dieses Symbol enthält, auf null setzen würde, unabhängig von ihrem Verhalten an allen anderen Positionen.

Um dieses Problem zu entschärfen, führen wir *Pseudocounts* ein. Anstatt ausschließlich die beobachteten Zählungen zu verwenden, addieren wir vor der Normierung zu jedem Eintrag der PFM einen kleinen konstanten Wert. Dadurch behalten alle Symbole eine von null verschiedene Wahrscheinlichkeit. Dies spiegelt die Einsicht wider, dass unbeobachtete Ereignisse dennoch möglich bleiben, insbesondere wenn die Datenlage spärlich ist. Aus statistischer Sicht wirken Pseudocounts als eine Form der Regularisierung, die Überanpassung an wenige Beobachtungen verhindert.

Neben der numerischen Darstellung ist es häufig nützlich, Motive so zu visualisieren, dass ihre Struktur unmittelbar sichtbar wird. Eine verbreitete Darstellung ist das Motivlogo, bei dem die Höhe jedes Symbols sowohl seine Wahrscheinlichkeit als auch seinen Beitrag zum gesamten Informationsgehalt des Motivs widerspiegelt. Solche Visualisierungen liefern eine intuitive Zusammenfassung darüber, welche Positionen stark konserviert sind und welche mehr Variation zulassen.

Trotz ihrer Einfachheit erfassen PPM-basierte Modelle mehrere wesentliche Eigenschaften biologischer Motive. Sie kodieren positionsspezifische Präferenzen, erlauben Variabilität und liefern einen natürlichen Rahmen, um Kandidatensequenzen zu bewerten. Gleichzeitig muss man ihre Grenzen im Blick behalten. Die Annahme unabhängiger Positionen ignoriert mögliche Wechselwirkungen, und die Qualität des Modells hängt stark von der Qualität des zugrunde liegenden Alignments ab.

Damit gelangen wir zurück zur zentralen Schwierigkeit, die bereits zuvor sichtbar wurde. In der Praxis liegen die alignierten Motivinstanzen, aus denen eine PFM konstruiert werden könnte, nicht vor. Stattdessen müssen sie aus nicht alignierten Sequenzen erschlossen werden. Das Motivmodell hängt davon ab, zu wissen, wo das Motiv auftritt, aber die Identifikation dieser Positionen erfordert bereits ein Motivmodell. Im nächsten Abschnitt werden wir untersuchen, wie sich die Stärke solcher Motive quantifizieren lässt und wie dies mit dem zugrunde liegenden Signal in biologischen Daten zusammenhängt.

---

### **Fragen zur Selbstkontrolle**

1. Was ist eine Position Frequency Matrix (PFM), und wie wird sie aus alignierten Sequenzen konstruiert?
2. Worin unterscheidet sich eine Position Probability Matrix (PPM) von einer PFM?
3. Warum ist eine Normierung notwendig, wenn aus einer PFM eine PPM gemacht wird?
4. In welchem Sinn kann eine PPM als generatives Modell eines Motivs interpretiert werden?
5. Warum sind Pseudocounts notwendig, und welches Problem lösen sie?
6. Welche Annahmen liegen dem PPM-Modell zugrunde, und wo liegen seine Grenzen?
