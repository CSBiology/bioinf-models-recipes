---
title: "4.5 Der BLAST-Algorithmus"
sidebar:
  label: "4.5 Der BLAST-Algorithmus"
  order: 5
  group: "Part 2"
  part: "Part 2"
---

## **4.5 Der BLAST-Algorithmus**

### **Lernziele**

Nach diesem Abschnitt sollten Sie in der Lage sein:

* die zentralen Schritte des BLAST-Algorithmus zu skizzieren
* zu erklären, wie Wortgenerierung und Nachbarschaftsbildung die Sensitivität der Suche erhöhen
* zu beschreiben, wie BLAST Seed-Detektion und Extension kombiniert, um Kandidatenalignments zu identifizieren
* die Rolle ungegappter und gegappter Erweiterung im BLAST-Ablauf zu verstehen
* zu erläutern, warum BLAST einen praktikablen Kompromiss zwischen Geschwindigkeit und biologischer Sensitivität darstellt

Das Seed-and-Extend-Paradigma liefert eine allgemeine Strategie für effiziente Ähnlichkeitssuche. Das **Basic Local Alignment Search Tool (BLAST)** ist eine seiner einflussreichsten und am weitesten verbreiteten Realisierungen. Seit seiner Einführung im Jahr 1990 hat sich BLAST als Standardmethode für die Abfrage biologischer Sequenzdatenbanken etabliert, weil es rechnerische Effizienz mit biologischer Sensitivität in überzeugender Weise verbindet.

BLAST versucht nicht, alle möglichen Alignments erschöpfend zu berechnen. Stattdessen setzt es die Idee praktisch um, dass **hoch bewertete Alignments durch kurze lokale Signale erkannt und nur dort weiter untersucht werden müssen, wo diese Signale tatsächlich vorhanden sind**.

---

### **Konzeptioneller Überblick**

Im Kern folgt BLAST der im vorherigen Abschnitt entwickelten Logik:

1. Die Query wird in kurze Wörter zerlegt.
2. Diese Wörter oder ihre ähnlichen Varianten werden in der Datenbank gesucht.
3. Gefundene Treffer werden zu längeren Alignments erweitert.
4. Die resultierenden Alignments werden statistisch bewertet.

Diese Abfolge bildet eine gestufte Strategie:

* zu Beginn steht **schnelles Filtern**,
* später folgt **zunehmend detaillierte Berechnung**.

Jeder Schritt verringert die Zahl der Kandidaten und erhöht zugleich die Präzision der Bewertung.

---

### **Schritt 1: Wortgenerierung**

BLAST beginnt damit, eine Query-Sequenz $Q$ in überlappende Wörter fester Länge $w$ zu zerlegen.

Für Proteinsequenzen ist $w = 3$ ein typischer Wert, für Nukleotidsequenzen werden meist größere Wortlängen verwendet. Für

$$
Q = \texttt{IKMQRHIKW}
$$

ergeben sich beispielsweise die Wörter

$$
\texttt{IKM}, \quad \texttt{KMQ}, \quad \texttt{MQR}, \quad \dots
$$

Diese Wörter bilden den Ausgangspunkt der Suche.

BLAST geht jedoch über exakte Worttreffer hinaus. Zu jedem Wort wird eine **Nachbarschaft** konstruiert, also eine Menge ähnlicher Wörter, deren Alignment-Score mit dem ursprünglichen Wort einen vorgegebenen Schwellenwert $T$ überschreitet.

Gerade dadurch wird BLAST sensitiv gegenüber biologisch relevanten Ähnlichkeiten, selbst wenn kein exakter Treffer vorliegt.

---

### **Schritt 2: Datenbanksuche und Seed-Detektion**

Im nächsten Schritt wird die Datenbank nach Vorkommen dieser Wörter oder ihrer Nachbarschaft durchsucht.

Jedes Vorkommen definiert einen **Seed**, also eine Position, an der Query und Zielsequenz eine kurze Region lokaler Ähnlichkeit teilen. Weil Wortsuche mit geeigneten Index- oder Hash-Strukturen sehr effizient realisiert werden kann, ist diese Phase rechnerisch vergleichsweise günstig.

Wesentlich ist ihre Funktion als **Filter**:

* Regionen ohne Worttreffer werden sofort verworfen.
* Nur Regionen mit Seeds gelangen in die nächste Stufe der Analyse.

Damit reduziert BLAST die Zahl der zu untersuchenden Kandidaten drastisch.

---

### **Schritt 3: Ungegapte Erweiterung**

Nachdem Seeds identifiziert wurden, versucht BLAST, sie in längere Alignments zu überführen.

Zunächst geschieht dies meist **ungegappt**, also ohne Insertionen oder Deletionen. Ausgehend vom Seed wird das Alignment entlang der Diagonalen in beide Richtungen erweitert, und der Score wird dabei fortlaufend aktualisiert.

Die Erweiterung wird so lange fortgesetzt, wie der Score wächst oder nicht zu weit unter den bisher besten Wert fällt. Auf diese Weise entstehen sogenannte **high-scoring segment pairs (HSPs)**.

Die zugrunde liegende Idee ist einfach: Nur solche Seeds, die sich zu ausreichend starken lokalen Segmenten ausbauen lassen, sind biologisch interessant genug, um weiterverfolgt zu werden.

---

### **Schritt 4: Gegappte Erweiterung**

Neuere BLAST-Varianten beschränken sich nicht auf ungegappte Segmente. Vielversprechende HSPs werden anschließend durch **gegappte Erweiterung** verfeinert, bei der auch Insertionen und Deletionen zugelassen sind.

Diese Phase ist rechenintensiver, wird aber nur auf eine kleine Zahl ausgewählter Kandidaten angewandt. Dadurch nähert sich das Ergebnis einem echten lokalen Alignment an, ohne dass der gesamte Suchraum mit vollständiger dynamischer Programmierung durchmustert werden müsste.

---

### **Schritt 5: Scoring und Rangordnung**

Die resultierenden Alignments werden schließlich anhand ihres Scores bewertet. In diese Bewertung gehen insbesondere ein:

* Substitutionsmatrizen,
* Gap-Strafen,
* und die Länge des Alignments.

Auf dieser Grundlage werden die Datenbanksequenzen geordnet. Allerdings sind rohe Scores allein noch nicht ausreichend, um biologische Relevanz zu beurteilen. Dazu benötigen wir zusätzlich eine statistische Einordnung, auf die der nächste Abschnitt eingeht.

---

### **Warum ist BLAST so schnell?**

Die Effizienz von BLAST beruht auf mehreren gezielten Entwurfsentscheidungen:

* **Frühes Filtern** durch Worttreffer eliminiert den größten Teil des Suchraums.
* **Selektive Erweiterung** konzentriert die Berechnung auf vielversprechende Regionen.
* **Schrittweise Verfeinerung** vermeidet aufwendige Alignments, solange diese nicht notwendig sind.

Während dynamische Programmierung alle Möglichkeiten systematisch prüft, betrachtet BLAST nur einen kleinen, sorgfältig ausgewählten Ausschnitt des Suchraums.

Der grundlegende Kompromiss lässt sich so formulieren:

> **Ähnlichkeitssuche gewinnt Geschwindigkeit, indem sie den Suchraum einschränkt, und bezahlt dafür mit einem gewissen Verlust an Sensitivität.**

---

### **Eine konzeptionelle Lesart von BLAST**

BLAST kann man als Verfahren verstehen, das zunächst nach **Evidenz für Ähnlichkeit** sucht, bevor es vollständiger rechnet.

* Worttreffer liefern eine erste Evidenz.
* Die Extension prüft, ob sich diese Evidenz verstärken lässt.
* Scoring und Statistik entscheiden, ob sie biologisch ernst zu nehmen ist.

Diese gestufte Struktur entspricht einem allgemeinen Prinzip der computergestützten Biologie:

> **Starke biologische Signale lassen sich häufig über schwache, aber konsistente lokale Muster aufspüren.**

---

### **Grenzen**

Trotz seines Erfolgs besitzt BLAST charakteristische Einschränkungen:

* **Heuristischer Charakter**
  Fehlt ein geeigneter Seed, kann ein biologisch relevanter Treffer übersehen werden.

* **Parameterabhängigkeit**
  Ergebnisse hängen von Entscheidungen wie Wortlänge oder Schwellenwert $T$ ab.

* **Empfindlichkeit gegenüber Sequenzkomposition**
  Regionen geringer Komplexität können irreführende Treffer erzeugen.

BLAST ist daher kein Ersatz für exakte Alignment-Verfahren im strengen Sinn, sondern ein äußerst erfolgreicher praktischer Kompromiss.

---

### **Zusammenfassung**

BLAST setzt das Seed-and-Extend-Paradigma in einem konkreten und effizienten Algorithmus um:

* Es identifiziert kurze ähnliche Wörter.
* Diese Wörter dienen als Seeds.
* Seeds werden zu hoch bewerteten Segmenten erweitert.
* Die resultierenden Treffer werden bewertet und geordnet.

Sein Erfolg beruht darauf, dass es den Suchraum drastisch verkleinert und zugleich ausreichend sensitiv für biologisch relevante Ähnlichkeit bleibt.

---

### **Fragen zur Selbstkontrolle**

1. Welchen Zweck erfüllt die Bildung von Wortnachbarschaften in BLAST?
2. Warum wird ungegappte Erweiterung vor gegappter Verfeinerung durchgeführt?
3. Wie verhalten sich HSPs zum Konzept des lokalen Alignments?
4. Warum ist frühes Filtern entscheidend für die Effizienz von BLAST?
5. Welche Arten biologischer Beziehungen kann BLAST potenziell übersehen?
