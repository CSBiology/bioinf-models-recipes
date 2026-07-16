---
title: "14.4 In Zuständen statt in Zeit denken"
sidebar:
  label: "14.4 In Zuständen statt in Zeit denken"
  order: 4
  group: "Part 4"
  part: "Part 4"
---

## 14.4 In Zuständen statt in Zeit denken

Bisher haben wir biologische Dynamik beschrieben, indem wir einzelne Variablen als Funktionen der Zeit dargestellt haben. Solche **Zeitreihenplots** sind anschaulich und in der Biologie weit verbreitet, weil sie direkt zeigen, wie sich die Menge eines Moleküls im Verlauf eines Experiments verändert.

Im vorherigen Abschnitt haben wir zum Beispiel die Konzentrationen eines Transkripts und des dazugehörigen Proteins über die Zeit verfolgt. Aus diesen Kurven konnten wir erkennen, dass beide Moleküle mit einer charakteristischen Phasenverschiebung oszillieren. Zeitreihendaten sind daher außerordentlich wertvoll, um dynamisches Verhalten zu identifizieren.

Sie haben jedoch auch eine wichtige Grenze.

### Die Grenzen von Zeitreihenplots

Biologische Systeme bestehen nur selten aus einer einzigen sich verändernden Variablen. Selbst ein einfacher genregulatorischer Schaltkreis enthält Transkripte, Proteine, Metabolite, Signalmoleküle und viele weitere miteinander interagierende Komponenten. Jede Variable separat aufzutragen, wird schnell unübersichtlich, insbesondere wenn wir verstehen möchten, wie diese Variablen einander beeinflussen.

Noch wichtiger ist: Zeitreihenplots zeigen uns **was geschieht**, aber sie machen es oft schwer zu verstehen, **warum es geschieht**.

Denken wir noch einmal an das Störungsexperiment aus dem vorigen Abschnitt. Die Entfernung von Protein aus einem oszillierenden System kann sehr unterschiedliche Reaktionen hervorrufen, je nachdem, zu welchem exakten Zeitpunkt die Störung erfolgt. Betrachtet man nur die Proteinkonzentration über die Zeit, wird nicht unmittelbar klar, warum identische Störungen zu unterschiedlichen Resultaten führen.

Um das Verhalten des gesamten Systems zu verstehen, benötigen wir eine Darstellung, die alle relevanten Variablen gleichzeitig beschreibt.

### Der Zustand eines biologischen Systems

Zu jedem gegebenen Zeitpunkt wird ein biologisches System durch die Werte seiner messbaren Größen charakterisiert. Diese Größen werden als **Zustandsvariablen** bezeichnet, weil sie gemeinsam den aktuellen Zustand des Systems festlegen.

Welche Zustandsvariablen gewählt werden, hängt von der biologischen Fragestellung ab.

Für das zuvor eingeführte einfache Genregulationssystem genügen zwei Variablen:

- die Transkriptmenge,
- die Proteinmenge.

Zusammen beschreiben diese beiden Größen den Zustand des Modells vollständig. Zu jedem Zeitpunkt befindet sich das System in genau einer bestimmten Kombination aus Transkript- und Proteinkonzentration.

Komplexere Systeme erfordern selbstverständlich zusätzliche Zustandsvariablen. Ein metabolisches Modell kann Dutzende von Metabolitkonzentrationen umfassen, während ökologische Modelle die Häufigkeiten mehrerer miteinander interagierender Arten beschreiben können. Unabhängig von der Zahl der Variablen bleibt die Grundidee dieselbe: Die Zustandsvariablen liefern die minimale Information, die benötigt wird, um vorherzusagen, wie sich das System weiterentwickeln wird.

### Von der Zeit zum Zustandsraum

Sobald die Zustandsvariablen definiert sind, müssen wir sie nicht länger getrennt als Funktionen der Zeit betrachten. Stattdessen können wir sie als Koordinaten in einem geometrischen Raum auffassen.

Im Beispiel der Genregulation bildet die Transkriptmenge eine Achse und die Proteinmenge die andere. Jede mögliche Kombination aus Transkript- und Proteinkonzentration entspricht genau einem Punkt in diesem zweidimensionalen Raum.

Diese geometrische Darstellung wird **Zustandsraum** genannt.

Mit dem Fortschreiten der Zeit bewegt sich das System von einem Punkt zum nächsten. Anstatt zwei getrennte Kurven zu beobachten, verfolgen wir nun die Bewegung eines einzigen Punktes durch den Zustandsraum.

Dieser Perspektivwechsel ist überraschend mächtig. Anstatt zu fragen, wie sich jede Variable einzeln verändert, beginnen wir zu fragen, wie sich das **gesamte System** durch seine möglichen Zustände bewegt.

### Trajektorien beschreiben biologisches Verhalten

Der Weg, den das System durch den Zustandsraum nimmt, heißt **Trajektorie**.

Jede Trajektorie repräsentiert eine mögliche Geschichte des biologischen Systems. Unterschiedliche Anfangsbedingungen erzeugen unterschiedliche Trajektorien, doch jede Trajektorie beschreibt die koordinierte Entwicklung aller Zustandsvariablen gleichzeitig.

Bei oszillatorischen Systemen bildet die Trajektorie oft eine geschlossene Schleife. Anstatt wiederholt einzelne Zeitreihenplots zu betrachten, erkennen wir sofort, dass das System immer wieder dieselbe Folge von Zuständen durchläuft.

Die Trajektorie fasst das Verhalten des gesamten biologischen Systems somit in einem einzigen geometrischen Objekt zusammen.

### Warum der Zustandsraum wichtig ist

Die Darstellung biologischer Systeme im Zustandsraum verändert grundlegend, welche Fragen wir stellen können.

Anstatt einzelne molekulare Konzentrationen zu betrachten, untersuchen wir nun, wie sich ganze biologische Systeme durch ihre möglichen Zustände bewegen.

Diese Perspektive erlaubt es uns, unterschiedliche Anfangsbedingungen zu vergleichen, die Wirkung von Störungen zu verstehen, stabile und instabile Verhaltensweisen zu identifizieren und schließlich zu erklären, warum manche Systeme zum Gleichgewicht zurückkehren, während andere oszillieren oder in völlig andere Zustände umschalten.

Um diese Fragen beantworten zu können, müssen wir jedoch noch bestimmen, **woher das System weiß, wohin es sich als Nächstes bewegen soll**.

Dafür benötigen wir eine letzte Zutat: eine mathematische Beschreibung der Änderungsrichtung an jedem Punkt des Zustandsraums.

### Zentrale Konzepte

- Zeitreihenplots beschreiben, wie sich einzelne biologische Variablen im Zeitverlauf ändern.
- Ein **Zustand** wird durch die Werte aller Zustandsvariablen zu einem gegebenen Zeitpunkt definiert.
- Zustandsvariablen sind die Größen, die benötigt werden, um das Verhalten eines biologischen Systems zu beschreiben.
- Der Zustandsraum repräsentiert jeden möglichen Zustand des Systems als Punkt in einem geometrischen Raum.
- Die Entwicklung eines biologischen Systems entspricht einer Trajektorie durch den Zustandsraum.

### Zusammenfassung

Zeitreihenplots liefern wertvolle Information über einzelne biologische Variablen, machen das Verhalten des Systems als Ganzes jedoch oft nicht sichtbar. Zustandsraumdarstellungen überwinden diese Grenze, indem sie den vollständigen biologischen Zustand zu jedem Zeitpunkt beschreiben. Während sich das System entwickelt, zeichnet es eine Trajektorie im Zustandsraum nach. Dadurch entsteht eine einheitliche Beschreibung biologischer Dynamik und die Grundlage dafür, zu analysieren, wie Systeme sich verändern.

### Fragen zur Selbstkontrolle

1. Was versteht man unter dem Zustand eines biologischen Systems?
2. Wovon hängt die Wahl der Zustandsvariablen ab?
3. Warum reichen Zeitreihenplots oft nicht aus, um komplexe biologische Systeme zu verstehen?
4. Wie wird der Zustandsraum aus Zustandsvariablen konstruiert?
5. Welche biologische Information wird durch eine Trajektorie dargestellt?
