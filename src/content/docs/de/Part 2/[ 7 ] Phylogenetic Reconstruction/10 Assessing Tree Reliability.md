---
title: "7.10 Bewertung phylogenetischer Bäume: Unsicherheit und Bootstrap"
sidebar:
  label: "7.10 Bewertung phylogenetischer Bäume: Unsicherheit und Bootstrap"
  order: 10
  group: "Part 2"
  part: "Part 2"
---

# **7.10 Bewertung phylogenetischer Bäume: Unsicherheit und Bootstrap**

### **Lernziele**

Nach diesem Abschnitt sollten Sie in der Lage sein:

* zu erklären, warum phylogenetische Bäume grundsätzlich mit Unsicherheit behaftet sind
* das Prinzip des Bootstrap-Resamplings zu verstehen
* Bootstrap-Werte korrekt zu interpretieren
* zwischen Modellgüte und struktureller Stabilität zu unterscheiden
* die Zuverlässigkeit einzelner Baumteile kritisch zu beurteilen

---

### **Warum ein einzelner Baum nicht ausreicht**

In den vorherigen Abschnitten haben wir verschiedene Methoden zur Konstruktion phylogenetischer Bäume kennengelernt. Jede dieser Methoden liefert einen Baum, der die Daten nach einem bestimmten Kriterium möglichst gut erklärt.

Es liegt nahe, diesen Baum als das Ergebnis der Analyse zu betrachten.

Diese Sichtweise greift jedoch zu kurz.

Phylogenetische Rekonstruktion basiert auf begrenzten und oft verrauschten Daten. Die beobachteten Sequenzen stellen nur eine unvollständige Aufzeichnung der zugrunde liegenden evolutionären Prozesse dar. Daher ist es möglich, dass mehrere unterschiedliche Bäume die Daten nahezu gleich gut erklären.

Dies führt zu einer zentralen Frage:

> **Wie verlässlich ist die Struktur eines rekonstruierten phylogenetischen Baums?**

---

### **Quellen der Unsicherheit**

Die Unsicherheit in phylogenetischen Analysen hat mehrere Ursachen.

Zum einen können die Daten selbst unzureichend sein. Alignments enthalten oft nur eine begrenzte Anzahl informativer Positionen, insbesondere wenn Sequenzen stark konserviert sind.

Zum anderen erschweren evolutionäre Prozesse die Rekonstruktion. Mehrfache Substitutionen, Rückmutationen und konvergente Entwicklungen können das Signal der gemeinsamen Abstammung verzerren.

Schließlich tragen auch die verwendeten Modelle zur Unsicherheit bei. Unterschiedliche Annahmen und Methoden können aus denselben Daten unterschiedliche Bäume erzeugen.

Diese Faktoren führen dazu, dass phylogenetische Bäume stets als unsichere Hypothesen betrachtet werden müssen.

---

### **Robustheit statt Eindeutigkeit**

Anstatt nach einem „richtigen“ Baum zu suchen, ist es oft sinnvoller zu untersuchen, wie stabil bestimmte Strukturen im Baum sind.

Die zentrale Idee besteht darin, die Analyse leicht zu variieren und zu beobachten, ob sich die resultierenden Bäume verändern.

Wenn eine bestimmte Gruppierung von Taxa unter vielen Variationen stabil bleibt, spricht dies dafür, dass sie durch die Daten gut gestützt wird.

Wenn sie hingegen häufig verschwindet oder sich verändert, deutet dies auf Unsicherheit hin.

---

### **Bootstrap-Resampling**

Ein etabliertes Verfahren zur Umsetzung dieser Idee ist das **Bootstrap-Verfahren**.

Ausgehend von einem Alignment mit ( n ) Positionen wird ein neues Alignment erzeugt, indem ( n ) Spalten zufällig mit Zurücklegen ausgewählt werden. Das bedeutet, dass einige Positionen mehrfach auftreten können, während andere gar nicht berücksichtigt werden.

Für jedes solchermaßen erzeugte Alignment wird ein phylogenetischer Baum berechnet, wobei dieselbe Methode wie für die Originaldaten verwendet wird.

Dieser Vorgang wird viele Male wiederholt, typischerweise mehrere hundert oder tausend Mal.

---

### **Von Replikaten zu Unterstützungswerten**

Nach der Erzeugung vieler Bootstrap-Bäume wird untersucht, wie häufig bestimmte Gruppierungen auftreten.

Für jede Verzweigung im ursprünglichen Baum wird gezählt, in wie vielen Bootstrap-Bäumen dieselbe Gruppierung vorkommt. Der Anteil dieser Häufigkeit wird als **Bootstrap-Wert** angegeben.

Ein Wert von beispielsweise 95 % bedeutet, dass die entsprechende Struktur in 95 % der resampelten Datensätze wiedergefunden wurde.

Diese Werte werden häufig direkt an den Ästen des Baums dargestellt.

---

### **Kasten 7.8 — Bedeutung von Bootstrap-Werten**

Bootstrap-Werte messen die **Stabilität** einer Gruppierung gegenüber Variationen in den Daten.

Ein hoher Wert zeigt an, dass die entsprechende Struktur robust ist. Ein niedriger Wert weist darauf hin, dass kleine Änderungen in den Daten zu unterschiedlichen Ergebnissen führen.

Wichtig ist jedoch:

> **Ein Bootstrap-Wert ist keine Wahrscheinlichkeit für die „Richtigkeit“ eines Astes**

Er gibt lediglich an, wie konsistent diese Struktur aus den verfügbaren Daten hervorgeht.

---

### **Interpretation von Unterstützungswerten**

Bootstrap-Werte liefern eine praktische Grundlage zur Beurteilung der Zuverlässigkeit einzelner Baumteile.

Verzweigungen mit hohen Werten gelten als stabil und werden in der Regel mit größerem Vertrauen interpretiert. Niedrige Werte hingegen signalisieren Unsicherheit und sollten entsprechend vorsichtig behandelt werden.

In der Praxis werden häufig Schwellenwerte als Orientierung verwendet, etwa 70 % als Hinweis auf moderate Unterstützung. Solche Schwellen sind jedoch kontextabhängig und sollten nicht schematisch angewendet werden.

---

### **Modellgüte versus strukturelle Stabilität**

Es ist hilfreich, zwei unterschiedliche Aspekte der phylogenetischen Analyse zu unterscheiden.

Zum einen steht die Frage, wie gut ein Baum die Daten gemäß einem bestimmten Modell erklärt. Dies betrifft die Modellgüte, etwa gemessen durch Likelihood.

Zum anderen interessiert uns, wie stabil die Struktur des Baums gegenüber Variationen in den Daten ist. Dies wird durch Bootstrap-Verfahren erfasst.

Ein Baum kann eine hohe Likelihood besitzen, aber dennoch unsichere Verzweigungen enthalten. Umgekehrt können einzelne Strukturen sehr stabil sein, auch wenn das Gesamtmodell nicht perfekt ist.

---

### **Konzeptionelle Einordnung**

Das Bootstrap-Verfahren verdeutlicht erneut die zentrale Rolle von Unsicherheit in der phylogenetischen Rekonstruktion.

Anstatt ein einzelnes Ergebnis als endgültig zu betrachten, ermöglicht es eine differenzierte Betrachtung, bei der stabile und unsichere Teile eines Baums unterschieden werden.

Diese Perspektive ist entscheidend für eine verantwortungsvolle Interpretation phylogenetischer Analysen.

---

### **Konzeptionelle Zusammenfassung**

Phylogenetische Bäume sind Modelle, die aus begrenzten Daten abgeleitet werden und daher mit Unsicherheit behaftet sind. Bootstrap-Resampling bietet eine Methode, um die Stabilität einzelner Baumstrukturen zu bewerten.

Durch die Analyse von Unterstützungswerten lässt sich erkennen, welche Teile eines Baums robust sind und welche mit Vorsicht interpretiert werden sollten.

---

### **Selbstüberprüfungsfragen**

1. Warum ist es problematisch, einen einzelnen phylogenetischen Baum als endgültiges Ergebnis zu betrachten?
2. Welche Hauptquellen von Unsicherheit gibt es in der phylogenetischen Rekonstruktion?
3. Wie funktioniert das Bootstrap-Resampling-Verfahren?
4. Was misst ein Bootstrap-Wert tatsächlich?
5. Warum ist ein hoher Bootstrap-Wert keine Garantie für Korrektheit?
6. Worin besteht der Unterschied zwischen Modellgüte und struktureller Stabilität?
