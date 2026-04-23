---
title: "7.6 Konstruktion von Bäumen aus Distanzen"
sidebar:
  label: "7.6 Konstruktion von Bäumen aus Distanzen"
  order: 6
  group: "Part 2"
  part: "Part 2"
---

# **7.6 Konstruktion von Bäumen aus Distanzen**

### **Lernziele**

Nach diesem Abschnitt sollten Sie in der Lage sein:

* zu erklären, warum die Konstruktion phylogenetischer Bäume ein schwieriges Suchproblem ist
* zu verstehen, wie schnell die Anzahl möglicher Baumtopologien wächst
* verschiedene Strategien zur Durchsuchung des Baumraums zu beschreiben
* zwischen vollständiger Suche, Branch-and-Bound und heuristischen Verfahren zu unterscheiden
* zu verstehen, wie Baumumordnungen zur Navigation im Suchraum eingesetzt werden

---

### **Von Distanzen zur Baumstruktur**

In den vorherigen Abschnitten haben wir Sequenzdaten in paarweise Distanzen überführt und diese mithilfe von Evolutionsmodellen korrigiert. Damit liegt eine Distanzmatrix vor, die unsere beste Schätzung der evolutionären Divergenz zwischen allen betrachteten Taxa darstellt.

Die verbleibende Aufgabe besteht darin, aus diesen Distanzen einen phylogenetischen Baum zu konstruieren.

Auf den ersten Blick könnte man vermuten, dass diese Aufgabe direkt lösbar ist. Wenn alle paarweisen Distanzen bekannt sind, scheint es naheliegend, dass es einen eindeutigen Baum geben müsste, der diese Beziehungen beschreibt.

In der Praxis ist die Situation deutlich komplexer. Das Problem besteht nicht darin, Distanzen zu berechnen, sondern darin, sie in eine konsistente Baumstruktur zu überführen.

---

### **Ein schnell wachsender Suchraum**

Um die Schwierigkeit zu verstehen, betrachten wir die Anzahl möglicher Bäume für eine gegebene Anzahl von Taxa.

Für sehr kleine Datensätze ist die Situation noch überschaubar. Mit drei Taxa existiert nur eine mögliche unverwurzelte Baumstruktur. Bei vier Taxa gibt es bereits mehrere Alternativen. Mit zunehmender Anzahl wächst die Zahl möglicher Baumtopologien jedoch extrem schnell.

Bereits für eine moderate Anzahl von Sequenzen wird die Zahl möglicher Bäume so groß, dass eine vollständige Durchmusterung nicht mehr praktikabel ist.

Damit wird deutlich:

> **Phylogenetische Rekonstruktion ist in ihrem Kern ein Suchproblem in einem sehr großen Modellraum**

---

### **Konstruktion als Optimierungsproblem**

Die Aufgabe lässt sich formal als Optimierungsproblem formulieren.

Ausgehend von einer Distanzmatrix können wir für jeden Kandidatenbaum berechnen, wie gut er die beobachteten Distanzen reproduziert. Dies liefert eine Zielfunktion, etwa die Summe der quadrierten Abweichungen.

Gesucht ist der Baum, der diese Abweichung minimiert.

Die Schwierigkeit liegt darin, dass die Zielfunktion über einen enorm großen Raum möglicher Topologien optimiert werden muss.

---

### **Kasten 7.3 — Die Kombinatorik des Baumraums**

Die Anzahl unverwurzelter binärer Bäume für ( n ) Taxa ergibt sich zu:

[
(2n - 5)!!
]

Diese Größe wächst extrem schnell. Bereits bei wenigen zusätzlichen Taxa steigt die Zahl möglicher Bäume um Größenordnungen an.

Dies hat eine wichtige Konsequenz:

> **Eine vollständige Suche über alle möglichen Bäume ist für reale Datensätze praktisch unmöglich**

---

### **Vollständige Suche und ihre Grenzen**

Prinzipiell könnte man alle möglichen Bäume erzeugen, für jeden die Zielfunktion berechnen und anschließend den besten auswählen.

Dieses Vorgehen garantiert die optimale Lösung, ist jedoch nur für sehr kleine Datensätze realisierbar. Für realistische Anwendungen ist der Rechenaufwand prohibitiv.

Daher müssen Strategien entwickelt werden, die den Suchraum gezielt einschränken.

---

### **Reduktion des Suchraums: Branch-and-Bound**

Ein Ansatz zur Verringerung des Suchaufwands besteht darin, Teile des Suchraums frühzeitig auszuschließen.

Beim Branch-and-Bound-Verfahren wird der Baum schrittweise aufgebaut. Für partielle Lösungen lässt sich bereits abschätzen, wie gut sie im besten Fall werden können.

Ist diese Abschätzung schlechter als die beste bisher gefundene vollständige Lösung, kann der entsprechende Zweig des Suchraums verworfen werden.

Auf diese Weise lassen sich große Teile des Suchraums vermeiden, ohne sie vollständig zu untersuchen.

---

### **Heuristische Suche und lokale Verbesserungen**

In den meisten praktischen Anwendungen greifen phylogenetische Methoden auf heuristische Suchverfahren zurück.

Anstatt den gesamten Suchraum zu durchsuchen, wird ein Startbaum konstruiert und anschließend schrittweise verbessert. Dazu werden kleine Veränderungen an der Baumstruktur vorgenommen, und es wird geprüft, ob diese zu einer besseren Anpassung an die Daten führen.

Dieser Prozess wird so lange fortgesetzt, bis keine Verbesserung mehr gefunden wird.

Ein solches Verfahren ist effizient, führt jedoch nicht notwendigerweise zur global optimalen Lösung. Stattdessen kann es in einem lokalen Optimum enden.

---

### **Kasten 7.4 — Navigation im Baumraum**

Um den Raum möglicher Bäume systematisch zu erkunden, benötigt man Operationen, die die Topologie eines Baums verändern.

Zu den wichtigsten gehören:

* **Nearest Neighbor Interchange (NNI)**
  Kleine lokale Umordnungen, bei denen benachbarte Teilbäume vertauscht werden

* **Subtree Pruning and Regrafting (SPR)**
  Ein Teilbaum wird entfernt und an einer anderen Stelle wieder eingefügt

* **Tree Bisection and Reconnection (TBR)**
  Der Baum wird in zwei Teile zerlegt und anschließend neu zusammengesetzt

Diese Operationen definieren, was als „Nachbarschaft“ eines Baums im Suchraum gilt, und ermöglichen es, den Raum schrittweise zu durchlaufen.

---

### **Lokale und globale Optima**

Ein zentrales Problem heuristischer Verfahren besteht darin, dass sie in lokalen Optima stecken bleiben können.

Ein lokales Optimum ist ein Baum, der durch kleine Veränderungen nicht weiter verbessert werden kann, obwohl es möglicherweise bessere Lösungen an anderer Stelle im Suchraum gibt.

Um dieses Problem zu entschärfen, werden häufig mehrere Startbäume verwendet oder zufällige Elemente in die Suche eingebaut, um unterschiedliche Regionen des Suchraums zu erkunden.

---

### **Konzeptionelle Einordnung**

Die Konstruktion phylogenetischer Bäume ist damit nicht nur eine Frage der Modellierung, sondern auch der effizienten Suche.

Der resultierende Baum hängt nicht ausschließlich von den Daten ab, sondern auch davon, wie der Suchprozess gestaltet ist. Unterschiedliche Strategien können zu unterschiedlichen Lösungen führen, insbesondere wenn die Daten keine eindeutige Struktur vorgeben.

Dies unterstreicht erneut die zentrale Idee dieses Kapitels:

> **Phylogenetische Rekonstruktion ist Modellwahl unter Unsicherheit**

---

### **Konzeptionelle Zusammenfassung**

Die Konstruktion eines phylogenetischen Baums aus Distanzen erfordert die Suche in einem sehr großen Raum möglicher Topologien. Aufgrund des schnellen Wachstums dieses Raums sind vollständige Suchverfahren in der Regel nicht praktikabel.

Stattdessen werden Strategien eingesetzt, die den Suchraum einschränken oder gezielt erkunden. Dazu gehören Branch-and-Bound-Verfahren und heuristische Methoden, die mithilfe lokaler Umordnungen durch den Baumraum navigieren.

---

### **Selbstüberprüfungsfragen**

1. Warum wächst die Anzahl möglicher phylogenetischer Bäume so schnell mit der Zahl der Taxa?
2. Weshalb ist eine vollständige Suche in der Praxis nicht durchführbar?
3. Wie funktioniert das Branch-and-Bound-Verfahren?
4. Was ist die Grundidee heuristischer Suchverfahren?
5. Welche Rolle spielen NNI-, SPR- und TBR-Operationen?
6. Was versteht man unter einem lokalen Optimum?
