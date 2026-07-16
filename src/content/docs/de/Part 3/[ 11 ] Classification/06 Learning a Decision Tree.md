---
title: "11.6 Einen Entscheidungsbaum lernen"
sidebar:
  label: "11.6 Einen Entscheidungsbaum lernen"
  order: 6
  group: "Part 3"
  part: "Part 3"
---

# 11.6 Einen Entscheidungsbaum lernen

## Vom ersten Split zum vollständigen Baum

Im vorangegangenen Abschnitt haben wir Entropie und Informationsgewinn als quantitative Maße zur Bewertung möglicher Splits eingeführt.

Die Grundidee war einfach:

> **Wähle in jedem Schritt das Merkmal, das die Unsicherheit am stärksten reduziert.**

Dieses Prinzip legt den ersten Split des Baums fest.

Doch wie entsteht der restliche Teil des Baums?

Die Antwort ist überraschend elegant.

Nachdem der beste erste Split gewählt wurde, wiederholt der Algorithmus für jede entstehende Teilmenge der Daten exakt dasselbe Verfahren.

Entscheidungsbäume werden daher **rekursiv** aufgebaut.

Dieselbe Lernregel wird immer wieder angewendet, bis keine weiteren sinnvollen Splits mehr gefunden werden können.

---

## Der rekursive Lernprozess

Betrachten wir noch einmal das Pilzklassifikationsproblem.

Zu Beginn gehören alle Pilze zu einem einzigen Datensatz.

Der Algorithmus berechnet den Informationsgewinn für jedes verfügbare Merkmal und wählt dasjenige aus, das die größte Verringerung der Entropie bewirkt.

Angenommen, der Geruch liefert den größten Informationsgewinn.

Dann wird der Datensatz in zwei Teilmengen aufgeteilt.

Ein Ast enthält Pilze mit angenehmem Geruch.

Der andere Ast enthält Pilze mit fauligem Geruch.

An diesem Punkt sucht der Algorithmus nicht weiter nach einem zusätzlichen Split im ursprünglichen Gesamtdatensatz.

Stattdessen wird nun jede Teilmenge als ein eigenständiges neues Klassifikationsproblem behandelt.

Für die Teilmenge "angenehmer Geruch" bewertet der Algorithmus erneut alle verbleibenden Merkmale.

Vielleicht liefert jetzt die Hutfarbe den größten Informationsgewinn.

Die Teilmenge wird also erneut aufgeteilt.

Dasselbe Verfahren wird für jeden Ast des Baums unabhängig wiederholt.

Der Entscheidungsbaum wächst folglich Split für Split.

Jeder Ast entwickelt sich entsprechend den Beobachtungen, die ihn erreichen.

Deshalb können verschiedene Äste vollkommen unterschiedliche Fragen stellen.

---

## Den Baum wachsen lassen

Die rekursive Konstruktion eines Entscheidungsbaums lässt sich in vier einfachen Schritten zusammenfassen.

1. **Berechne die Entropie** des aktuellen Datensatzes.

2. **Bewerte jedes mögliche Merkmal** und berechne den zugehörigen Informationsgewinn.

3. **Teile den Datensatz auf** mithilfe des Merkmals mit dem größten Informationsgewinn.

4. **Wiederhole das Verfahren** unabhängig für jede entstandene Teilmenge.

Dieser Prozess setzt sich fort, bis keine weiteren sinnvollen Splits mehr möglich sind.

Obwohl der Algorithmus immer wieder nur diese vier Operationen ausführt, können dabei bemerkenswert komplexe Entscheidungsbäume entstehen.

Seine Stärke liegt nicht in komplizierter Mathematik, sondern in der wiederholten Anwendung einer sehr einfachen Entscheidungsregel.

---

## Wann sollte der Algorithmus aufhören?

Würde der Algorithmus unbegrenzt weiter aufteilen, enthielte schließlich jeder Blattknoten nur noch eine einzige Beobachtung.

Ein solcher Baum würde die Trainingsdaten perfekt klassifizieren.

Leider generalisiert, wie wir in Kapitel 10 gesehen haben, ein Modell, das die Trainingsdaten perfekt erklärt, oft schlecht auf neue Beobachtungen.

Der Entscheidungsbaum benötigt daher **Abbruchkriterien**.

Häufig verwendete Bedingungen sind:

- Alle Beobachtungen innerhalb eines Knotens gehören derselben Klasse an.
- Kein verbleibendes Merkmal liefert noch nützliche Information.
- Der Knoten enthält zu wenige Beobachtungen.
- Oder eine vorgegebene maximale Baumtiefe wurde erreicht.

Diese Kriterien verhindern, dass der Baum unnötig komplex wird.

Anstatt unbegrenzt weiterzuwachsen, stoppt der Algorithmus dann, wenn zusätzliche Splits die Vorhersageleistung auf unbekannten Daten voraussichtlich nicht mehr verbessern.

---

## Baumtiefe und Modellkomplexität

Die Tiefe eines Entscheidungsbaums bestimmt seine Komplexität unmittelbar.

Ein flacher Baum stellt nur wenige Fragen, bevor er eine Vorhersage erreicht.

Ein solches Modell ist einfach und gut interpretierbar.

Es kann jedoch wichtige biologische Zusammenhänge übersehen.

Ein sehr tiefer Baum verhält sich anders.

Er kann hochkomplizierte Entscheidungsgrenzen darstellen und klassifiziert die Trainingsdaten oft nahezu perfekt.

Allerdings sind tiefe Bäume auch deutlich anfälliger für Overfitting.

Sie beginnen möglicherweise, Besonderheiten des Trainingsdatensatzes auswendig zu lernen, statt allgemeine biologische Prinzipien zu erfassen.

Entscheidungsbäume liefern damit ein weiteres anschauliches Beispiel für den in Kapitel 10 eingeführten Bias-Varianz-Kompromiss.

- **Flache Bäume** weisen im Allgemeinen einen hohen Bias, aber eine geringe Varianz auf.

- **Tiefe Bäume** weisen einen geringen Bias, aber eine hohe Varianz auf.

Die Wahl einer geeigneten Baumtiefe gehört daher zu den wichtigsten Aspekten beim Lernen von Entscheidungsbäumen.

---

## Pruning: einen zu komplexen Baum vereinfachen

Eine Strategie zur Kontrolle der Modellkomplexität ist das **Pruning**.

Dabei wird der Baum nicht frühzeitig gestoppt, sondern zunächst groß werden gelassen, sodass er viele Details der Trainingsdaten erfasst.

Anschließend werden diejenigen Äste entfernt, die nur wenig zur Vorhersagegenauigkeit beitragen.

Der resultierende Baum ist kleiner, leichter interpretierbar und liefert auf bisher ungesehenen Beobachtungen oft bessere Ergebnisse.

Pruning veranschaulicht eine wichtige Idee, die weit über Entscheidungsbäume hinausgeht.

Mitunter ist es einfacher, zuerst mit einem sehr flexiblen Modell zu beginnen und dieses anschließend zu vereinfachen, als die optimale Komplexität von Anfang an exakt festzulegen.

Moderne Verfahren des maschinellen Lernens nutzen ähnliche Ideen in vielen anderen Zusammenhängen, etwa bei der Merkmalsauswahl oder der Regularisierung neuronaler Netze.

---

## Der ID3-Algorithmus

Die oben beschriebene Lernstrategie bildet die Grundlage eines der frühesten und einflussreichsten Entscheidungsbaumverfahren: **ID3 (Iterative Dichotomiser 3)**, entwickelt von Ross Quinlan in den 1980er-Jahren.

Obwohl seither deutlich ausgefeiltere Baumalgorithmen entwickelt wurden, ist die zentrale Idee unverändert geblieben.

ID3 wiederholt fortlaufend die folgenden Schritte:

1. Berechne die Entropie des aktuellen Datensatzes.
2. Bestimme den Informationsgewinn für jedes Kandidatenmerkmal.
3. Wähle das Merkmal mit dem größten Informationsgewinn.
4. Teile den Datensatz entsprechend auf.
5. Wende dasselbe Verfahren rekursiv auf jeden Kindknoten an.

Dieses bemerkenswert einfache rekursive Verfahren konstruiert aus gelabelten Trainingsdaten einen vollständigen Entscheidungsbaum.

Viele moderne Algorithmen, darunter C4.5, C5.0 und CART, bauen direkt auf denselben Grundprinzipien auf und ergänzen sie um Verbesserungen bei Split-Kriterien, Pruning-Strategien und dem Umgang mit kontinuierlichen Variablen.

---

## Lernen durch Fragenstellen

Entscheidungsbäume eröffnen eine besonders anschauliche Perspektive auf maschinelles Lernen.

Viele Vorhersagemodelle versuchen, komplexe mathematische Funktionen zu approximieren.

Entscheidungsbäume dagegen lernen, indem sie Fragen stellen.

Jeder Split entspricht einer neuen Frage, deren Antwort die Unsicherheit über die biologische Klasse verringert.

Die Abfolge dieser Fragen verwandelt Unsicherheit schrittweise in Wissen.

Aus dieser Perspektive verhält sich ein Entscheidungsbaum fast wie ein Wissenschaftler.

Ausgehend von einer Sammlung von Beobachtungen fragt er immer wieder:

> **Welches Experiment oder in diesem Fall welches Merkmal würde mich am meisten lehren?**

Der Baum wächst, indem er fortlaufend die Frage auswählt, die die größte Verringerung der Unsicherheit verspricht.

Gerade diese Verbindung von Informationstheorie und wissenschaftlichem Denken erklärt, warum Entscheidungsbäume bis heute zu den intuitivsten und am besten interpretierbaren Modellen des maschinellen Lernens gehören.

---

### Zentrale Konzepte

- Entscheidungsbäume werden rekursiv konstruiert.
- Jeder Knoten wählt unabhängig das Merkmal mit dem höchsten Informationsgewinn.
- Das Wachstum des Baums setzt sich fort, bis vorgegebene Abbruchkriterien erreicht sind.
- Die Baumtiefe bestimmt die Modellkomplexität.
- Pruning vereinfacht übermäßig komplexe Bäume und verbessert die Generalisierung.
- Der ID3-Algorithmus konstruiert einen vollständigen Entscheidungsbaum durch wiederholte Anwendung von Entropie und Informationsgewinn.

---

### Zusammenfassung

Entscheidungsbäume entstehen in einem rekursiven Lernprozess, bei dem jeder Knoten unabhängig das Merkmal auswählt, das den Informationsgewinn maximiert. Die wiederholte Anwendung dieses einfachen Prinzips zerlegt einen heterogenen Datensatz schrittweise in immer homogenere Teilmengen, bis in den Blattknoten endgültige Vorhersagen getroffen werden können. Weil uneingeschränktes Baumwachstum häufig zu Overfitting führt, werden Abbruchkriterien und Pruning-Strategien eingesetzt, um die Modellkomplexität zu kontrollieren. Dadurch bleiben Entscheidungsbäume nicht nur gut interpretierbar, sondern illustrieren zugleich viele der allgemeinen Lernprinzipien aus dem vorherigen Kapitel.

---

### Fragen zur Selbstkontrolle

1. Warum werden Entscheidungsbäume als rekursive Lernalgorithmen beschrieben?
2. Welche vier Schritte werden beim Aufbau des Baums wiederholt?
3. Warum wird jeder Ast des Baums zu einem eigenständigen Klassifikationsproblem?
4. Warum muss ein Entscheidungsbaum irgendwann aufhören zu wachsen?
5. Wie beeinflusst die Baumtiefe die Modellkomplexität?
6. Was ist Pruning, und warum kann es die Vorhersageleistung verbessern?
7. Welche grundlegende Lernstrategie setzt der ID3-Algorithmus um?
8. In welchem Sinn lässt sich das Lernen eines Entscheidungsbaums als Prozess des wiederholten Stellens der informativsten Frage verstehen?
