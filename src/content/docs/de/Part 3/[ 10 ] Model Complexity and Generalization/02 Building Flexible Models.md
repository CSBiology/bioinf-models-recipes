---
title: "10.2 Flexible Modelle konstruieren"
sidebar:
  label: "10.2 Flexible Modelle konstruieren"
  order: 2
  group: "Part 3"
  part: "Part 3"
---

# 10.2 Flexible Modelle konstruieren

## Von Geraden zu flexiblen Funktionen

Im vorherigen Abschnitt haben wir argumentiert, dass viele biologische Zusammenhänge zu komplex sind, um durch eine einfache Gerade beschrieben zu werden. Eine naheliegende Reaktion darauf ist, ein flexibleres mathematisches Modell zu wählen.

Auf den ersten Blick scheint das unkompliziert. Anstatt eine Gerade an die Daten anzupassen, könnten wir eine Kurve fitten, die dem Verlauf der Daten genauer folgt. Wenn sich der Zusammenhang zwischen Hydrophobizität und Proteinstabilität krümmt, abflacht oder die Richtung ändert, sollte eine gekrümmte Funktion besser geeignet sein als ein lineares Modell.

Diese Intuition ist richtig, wirft aber sofort eine weitere Frage auf.

> **Wie können wir Modelle konstruieren, deren Flexibilität sich gezielt einstellen lässt?**

Anstatt nur zwischen einer Geraden und einer beliebigen Kurve zu wählen, möchten wir einen systematischen Weg haben, Modelle zu bauen, die von sehr einfach bis hochflexibel reichen. Solche Modelle erlauben es uns zu untersuchen, wie sich zunehmende Komplexität auf die Vorhersageleistung auswirkt.

Die Grundidee ist überraschend einfach: Komplexe Funktionen lassen sich oft durch die Kombination vieler einfacher Funktionen aufbauen.

---

## Komplexe Modelle aus einfachen Bausteinen zusammensetzen

Eine hilfreiche Analogie ist der Aufbau eines Moleküls.

Komplexe biologische Moleküle entstehen selten in einem einzigen Schritt. Stattdessen werden sie aus einfacheren Bausteinen zusammengesetzt. Aminosäuren bilden Proteine, Nukleotide bilden DNA, und einzelne Zellen formen Gewebe.

Mathematische Modelle lassen sich in ganz ähnlicher Weise konstruieren.

Anstatt einen biologischen Zusammenhang mit nur einer einzigen Gleichung zu beschreiben, kombinieren wir mehrere einfachere Funktionen, von denen jede einen Teil zur gesamten Vorhersage beiträgt.

Mathematisch lässt sich das schreiben als

$$
f(x)=\sum_{i=1}^{n} w_i h_i(x),
$$

wobei

- \(h_i(x)\) einfache Basisfunktionen sind,
- \(w_i\) Gewichte sind, die festlegen, wie stark jede Basisfunktion beiträgt,
- und \(f(x)\) das resultierende Vorhersagemodell bezeichnet.

Diese Basisfunktionen können sehr unterschiedliche Formen annehmen. Sie können Geraden sein, Polynome, Gauß-Funktionen oder lokalisierte Funktionen, die nur in einem kleinen Bereich des Eingaberaums aktiv sind.

Trotz dieser Unterschiede bleibt das zugrunde liegende Prinzip stets gleich:

> **Komplexes Verhalten entsteht durch die Kombination vieler einfacher Komponenten.**

Diese Idee wird uns im gesamten maschinellen Lernen immer wieder begegnen, auch bei künstlichen neuronalen Netzen, in denen einzelne Neuronen als einfache Recheneinheiten zusammen hochkomplexe Funktionen lernen.

---

## Modellkomplexität erhöhen

Die Flexibilität eines Modells hängt wesentlich von der Zahl und Art der enthaltenen Basisfunktionen ab.

Mit nur einer einzigen Basisfunktion ist das Modell sehr einfach. Es kann oft nur den groben Trend der Daten erfassen.

Fügt man zusätzliche Basisfunktionen hinzu, kann das Modell immer feinere Muster repräsentieren.

Man kann sich das vorstellen wie den Versuch, die Silhouette eines Gebirges zu beschreiben.

Eine einzige Gerade erfasst nur die durchschnittliche Steigung.

Einige zusätzliche Liniensegmente lassen die wichtigsten Gipfel und Täler sichtbar werden.

Viele kurze Segmente liefern schließlich eine Kurve, die nahezu jedem Detail der Landschaft folgt.

Genau dieselbe Idee gilt für Vorhersagemodelle.

Mit jeder zusätzlichen Basisfunktion wird das Modell flexibler und kann schrittweise kompliziertere biologische Beziehungen darstellen.

Diese Flexibilität ist außerordentlich mächtig, weil sie es erlaubt, Zusammenhänge anzunähern, die mit einem einfachen linearen Modell prinzipiell nicht erfasst werden könnten.

---

## Stückweise Modelle und Splines

Eine besonders nützliche Möglichkeit, Flexibilität zu erhöhen, besteht darin, den Eingaberaum in mehrere Bereiche zu unterteilen und jeden Bereich separat zu beschreiben.

Anstatt eine einzige globale Gerade durch alle Beobachtungen zu legen, passen wir mehrere einfachere Funktionen an, die glatt miteinander verbunden werden.

Solche Modelle nennt man **Splines**.

Konzeptionell sind Splines leicht zu verstehen.

Man kann sich vorstellen, einen dünnen flexiblen Holzstreifen durch eine Reihe von Punkten zu biegen. Der Streifen bildet dann von selbst eine glatte Kurve, die dem allgemeinen Trend folgt, ohne abrupte Richtungswechsel zu erzeugen.

Mathematisch verhalten sich Splines sehr ähnlich.

Der Eingaberaum wird in Intervalle unterteilt, und in jedem Intervall wird ein einfaches Polynom angepasst. Die einzelnen Stücke werden dann so miteinander verbunden, dass die Gesamtfunktion glatt bleibt.

Wichtig ist dabei nicht in erster Linie die Mathematik der Splines selbst.

Entscheidend ist vielmehr das allgemeine Prinzip, das sie veranschaulichen:

> **Modellflexibilität kann schrittweise erhöht werden und nicht nur sprunghaft.**

Dadurch können wir Modelle konstruieren, die weder starre Geraden noch völlig unbeschränkte Kurven sind.

---

## Flexibilität ist Stärke und Risiko zugleich

Auf den ersten Blick scheint eine größere Modellflexibilität nur Vorteile zu bringen.

Ein flexibleres Modell kann kompliziertere biologische Beziehungen beschreiben und passt sich daher in der Regel auch besser an die Trainingsdaten an.

Doch gerade dieser scheinbare Vorteil birgt eine wichtige Gefahr.

Wenn wir die Flexibilität immer weiter erhöhen, kann das Modell irgendwann nicht nur dem zugrunde liegenden biologischen Zusammenhang folgen, sondern auch jeder kleinen Schwankung, die durch Messrauschen oder zufällige biologische Variation entsteht.

Das Modell beginnt dann, zufällige Details zu beschreiben, die nur für den Trainingsdatensatz charakteristisch sind, statt allgemeine biologische Prinzipien zu erfassen.

Ironischerweise kann ein Modell, das die Trainingsdaten nahezu perfekt beschreibt, bei neuen Beobachtungen schlecht abschneiden.

Dies ist eines der zentralen Paradoxa des maschinellen Lernens:

> **Ein Modell kann immer besser darin werden, bereits gesehene Daten zu erklären, und gleichzeitig immer schlechter darin, noch ungesehene Daten vorherzusagen.**

Dieses Paradox zu verstehen, ist entscheidend für den Bau verlässlicher Vorhersagemodelle.

Es führt zu einem der wichtigsten Begriffe des maschinellen Lernens: der **Generalisierung**.

Der weitere Verlauf dieses Kapitels ist der Frage gewidmet, warum zunehmende Modellkomplexität irgendwann kontraproduktiv wird und wie sich jene Komplexität identifizieren lässt, die die beste Vorhersageleistung liefert.

---

### Zentrale Konzepte

- Komplexe Vorhersagemodelle lassen sich durch die Kombination vieler einfacher Funktionen konstruieren.
- Basisfunktionen bilden die Bausteine flexibler mathematischer Modelle.
- Eine größere Zahl von Basisfunktionen erhöht die Modellkomplexität.
- Splines veranschaulichen, wie Flexibilität schrittweise gesteigert werden kann, ohne die Glattheit der Vorhersage zu verlieren.
- Größere Flexibilität verbessert die Anpassung an Trainingsdaten, erhöht aber auch das Risiko, Rauschen statt biologischer Beziehungen zu modellieren.

---

### Zusammenfassung

Wer über lineare Regression hinausgehen will, benötigt Modelle, die nichtlineare biologische Zusammenhänge darstellen können. Flexible Modelle erreichen dies, indem sie viele einfache Basisfunktionen zu einer ausdrucksstärkeren Vorhersagefunktion kombinieren. Mit wachsender Flexibilität lassen sich zunehmend komplexe Muster erfassen, zugleich entsteht jedoch ein fundamentaler Zielkonflikt: Hochflexible Modelle können beginnen, zufällige Schwankungen statt der zugrunde liegenden Biologie zu lernen. Genau diese Spannung zwischen Flexibilität und Vorhersagezuverlässigkeit steht im Zentrum der Modellauswahl.

---

### Fragen zur Selbstkontrolle

1. Warum lassen sich viele biologische Zusammenhänge nicht gut durch eine Gerade beschreiben?
2. Wie können komplexe mathematische Modelle aus einfachen Bausteinen aufgebaut werden?
3. Welche Rolle spielen Basisfunktionen in Vorhersagemodellen?
4. Warum erhöht eine größere Zahl von Basisfunktionen die Modellkomplexität?
5. Was ist die zentrale Idee hinter Splines?
6. Warum kann ein flexibleres Modell irgendwann für Vorhersagen weniger nützlich werden?
7. Warum führt zunehmende Modellkomplexität ganz natürlich zum Problem der Generalisierung?
