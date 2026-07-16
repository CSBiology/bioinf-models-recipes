---
title: "10.5 Der Bias-Varianz-Kompromiss"
sidebar:
  label: "10.5 Der Bias-Varianz-Kompromiss"
  order: 5
  group: "Part 3"
  part: "Part 3"
---

# 10.5 Der Bias-Varianz-Kompromiss

## Zwei grundverschiedene Quellen von Vorhersagefehlern

Die Konzepte von Underfitting und Overfitting liefern ein anschauliches Verständnis von Modellkomplexität. Um diese Phänomene systematischer zu analysieren, unterscheidet das maschinelle Lernen zwei grundverschiedene Quellen von Vorhersagefehlern: **Bias** und **Varianz**.

Auch wenn diese Begriffe aus der Statistik stammen, lassen sie sich konzeptionell klar deuten.

Ein Modell mit **hohem Bias** macht systematische Fehler, weil es zu einfach ist, um den wahren Zusammenhang zwischen Eingabe und Ausgabe zu erfassen.

Ein Modell mit **hoher Varianz** reagiert dagegen übermäßig empfindlich auf den konkreten Trainingsdatensatz, der gerade beobachtet wurde. Schon kleine Änderungen in den Trainingsdaten können dann zu großen Änderungen im gelernten Modell führen.

Diese beiden Fehlerformen sind entgegengesetzte Folgen von Modellkomplexität.

Zu verstehen, wie sie zusammenwirken, gehört zu den zentralen Ideen des maschinellen Lernens.

---

## Bias: systematischer Fehler durch zu einfache Modelle

Stellen wir uns vor, wir wollten eine kurvenreiche Bergstraße mit einer einzigen Geraden beschreiben.

Ganz gleich, wie sorgfältig diese Gerade positioniert wird, sie kann den Kurven der Straße niemals folgen.

Der Fehler ist also systematisch.

Das Modell ist grundsätzlich nicht in der Lage, die zugrunde liegende Struktur darzustellen.

Genau das beschreibt Bias.

Ein Modell mit hohem Bias macht ähnliche Fehler unabhängig davon, welche Trainingsdaten zur Verfügung stehen, weil seine mathematische Struktur zu restriktiv ist.

Kehren wir zu unserem Beispiel der Proteinstabilität zurück. Wenn wir trotz eines stark nichtlinearen Zusammenhangs zwischen Hydrophobizität und Stabilität auf einem einfachen linearen Regressionsmodell bestehen, kann keine noch so große Menge zusätzlicher Trainingsdaten dieses Problem vollständig lösen.

Die Einschränkung liegt nicht in den Daten, sondern im Modell selbst.

Hoher Bias verdeutlicht daher ein wichtiges Prinzip:

> **Ein Modell kann keine Zusammenhänge lernen, die es mathematisch gar nicht darstellen kann.**

Mehr Daten beseitigen Bias nicht. Um Bias zu verringern, braucht man ein ausdrucksstärkeres Modell.

---

## Varianz: Empfindlichkeit gegenüber den Trainingsdaten

Varianz beschreibt ein ganz anderes Problem.

Stellen wir uns vor, wir trainieren mehrere hochflexible Modelle auf leicht unterschiedlichen Datensätzen.

Jeder Datensatz enthält ungefähr denselben biologischen Zusammenhang, unterscheidet sich aber darin, welche Proteine gerade gemessen wurden.

Ist das Modell sehr flexibel, kann es sich stark an diese kleinen Unterschiede anpassen.

Ein Modell lernt dann vielleicht in einem Bereich eine leichte Aufwärtskrümmung.

Ein anderes lernt an derselben Stelle eine Abwärtskrümmung.

Obwohl beide Modelle ihre jeweiligen Trainingsdatensätze hervorragend fitten, machen sie unterschiedliche Vorhersagen für neue Proteine.

Die Vorhersagen hängen also stark davon ab, mit welchen Daten trainiert wurde.

Diese Instabilität nennt man **Varianz**.

Hohe Varianz entsteht nicht, weil das Modell mathematisch zu einfach wäre.

Sie entsteht vielmehr, weil das Modell so flexibel ist, dass es zufällige Schwankungen der verfügbaren Beobachtungen mitlernt.

Folglich ändert sich das gelernte Modell deutlich, sobald sich die Trainingsdaten ändern.

---

## Bias und Varianz beschreiben das Modell, nicht die Daten

Studierende verwechseln Modellvarianz häufig mit der natürlichen Variabilität biologischer Experimente.

Beides sind jedoch völlig unterschiedliche Konzepte.

Biologische Daten variieren, weil lebende Systeme inhärent heterogen sind und experimentelle Messungen nie vollkommen reproduzierbar ausfallen.

Diese Variabilität ist eine Eigenschaft der **Daten**.

Bias und Varianz beschreiben dagegen Eigenschaften des **Lernmodells**.

Bias drückt aus, dass ein Modell komplexe biologische Zusammenhänge nicht angemessen darstellen kann.

Varianz beschreibt die Tendenz eines Modells, sich übermäßig an die konkret verfügbaren Trainingsbeobachtungen anzupassen.

Diese Begriffe sauber voneinander zu trennen, ist entscheidend.

Denn derselbe biologische Datensatz kann

- zu hohem Bias führen, wenn er mit einem zu einfachen Modell analysiert wird,
- oder zu hoher Varianz, wenn ein übermäßig flexibles Modell eingesetzt wird.

Bias und Varianz sind daher keine Eigenschaften der Biologie selbst, sondern der mathematischen Beschreibung, die wir für sie wählen.

---

## Der Kompromiss zwischen Bias und Varianz

Eine höhere Modellkomplexität wirkt sich gegensätzlich auf Bias und Varianz aus.

Einfache Modelle zeigen typischerweise

- hohen Bias
- und niedrige Varianz.

Weil sie stark eingeschränkt sind, können sie komplexe biologische Beziehungen nicht erfassen. Dafür liefern sie vergleichsweise stabile Vorhersagen, da kleine Änderungen in den Trainingsdaten das angepasste Modell nur wenig beeinflussen.

Hochflexible Modelle verhalten sich genau umgekehrt.

Sie zeigen

- niedrigen Bias
- und hohe Varianz.

Ihre Ausdrucksstärke erlaubt es ihnen, komplexe Zusammenhänge zu erfassen, macht sie aber zugleich empfindlich gegenüber zufälligen Schwankungen in den Trainingsdaten.

Das Verringern der einen Fehlerquelle vergrößert daher meist die andere.

Diese Spannung bezeichnet man als **Bias-Varianz-Kompromiss**.

Er erklärt, warum es kein universell optimales Maß an Modellkomplexität gibt.

Stattdessen muss jedes Vorhersageproblem diese beiden konkurrierenden Fehlerquellen austarieren.

---

## Das optimale Gleichgewicht finden

Der Bias-Varianz-Kompromiss liefert eine tiefere Erklärung für die U-förmige Testfehlerkurve, die wir im vorherigen Abschnitt kennengelernt haben.

Bei geringer Modellkomplexität werden Vorhersagefehler vor allem durch Bias dominiert.

Das Modell ist dann schlicht zu starr, um die Biologie angemessen zu erfassen.

Mit wachsender Flexibilität sinkt der Bias, und die Vorhersagegenauigkeit verbessert sich.

Ab einem bestimmten Punkt beginnt jedoch die Varianz zu dominieren.

Das Modell passt sich nun zufälligen Schwankungen statt allgemeinen biologischen Prinzipien an.

Dadurch verschlechtert sich die Vorhersageleistung auf ungesehenen Daten wieder.

Das optimale Vorhersagemodell liegt genau dort, wo die kombinierten Effekte von Bias und Varianz minimal sind.

Wichtig ist, dass dieses Gleichgewicht vom biologischen Problem selbst abhängt.

Ein einfacher Zusammenhang erfordert vielleicht nur ein relativ einfaches Modell.

Ein stark nichtlinearer Prozess kann ein wesentlich flexibleres Modell verlangen.

Maschinelles Lernen sucht daher nicht nach dem komplexesten Modell.

Es sucht nach einem Modell, dessen Komplexität **zur zugrunde liegenden biologischen Realität passt**.

---

## Von der Theorie zur Praxis

Der Bias-Varianz-Kompromiss liefert eine konzeptionelle Erklärung dafür, warum Overfitting auftritt.

Leider sagt er uns nicht unmittelbar, wo genau das optimale Gleichgewicht liegt.

Bei einem realen biologischen Datensatz kennen wir den wahren zugrunde liegenden Zusammenhang in der Regel nicht.

Deshalb können wir meist nicht direkt entscheiden, ob ein Modell gerade unter- oder überangepasst ist.

Wir benötigen daher praktische Verfahren, mit denen sich abschätzen lässt, wie gut ein Modell auf ungesehenen Daten abschneiden wird.

Das am weitesten verbreitete Verfahren dafür ist die **Kreuzvalidierung**, bei der ein Teil der verfügbaren Daten vorübergehend während des Trainings zurückgehalten und später zur Bewertung der Vorhersageleistung verwendet wird.

Kreuzvalidierung erlaubt es, die Generalisierungsfähigkeit eines Modells abzuschätzen, noch bevor neue experimentelle Daten vorliegen.

Sie gehört deshalb zu den wichtigsten Werkzeugen des modernen maschinellen Lernens.

---

### Zentrale Konzepte

- **Bias** ist der systematische Vorhersagefehler eines zu einfachen Modells.
- **Varianz** misst, wie stark ein Modell vom konkreten Trainingsdatensatz abhängt.
- Bias und Varianz sind Eigenschaften des Lernmodells und nicht der biologischen Daten.
- Eine größere Modellkomplexität verringert den Bias, erhöht aber die Varianz.
- Das optimale Vorhersagemodell balanciert diese beiden konkurrierenden Fehlerquellen aus.

---

### Zusammenfassung

Der Bias-Varianz-Kompromiss liefert einen theoretischen Rahmen, um Underfitting und Overfitting zu verstehen. Einfache Modelle leiden unter hohem Bias, weil sie komplexe biologische Zusammenhänge nicht darstellen können. Hochflexible Modelle leiden unter hoher Varianz, weil sie empfindlich auf zufällige Schwankungen in den Trainingsdaten reagieren. Erfolgreiches maschinelles Lernen verlangt deshalb, diese beiden Quellen von Vorhersagefehlern auszubalancieren. Da das optimale Maß an Komplexität im Allgemeinen nicht bekannt ist, braucht man praktische Verfahren wie die Kreuzvalidierung, um abzuschätzen, wie gut ein Modell auf neuen biologischen Beobachtungen generalisieren wird.

---

### Fragen zur Selbstkontrolle

1. Was ist im maschinellen Lernen mit **Bias** gemeint?
2. Was ist mit **Varianz** gemeint?
3. Warum sind Bias und Varianz Eigenschaften des Modells und nicht der biologischen Daten?
4. Warum kann mehr Trainingsdaten die Varianz verringern, aber nicht unbedingt den Bias?
5. Wie wirkt sich eine zunehmende Modellkomplexität auf den Bias aus?
6. Wie wirkt sich eine zunehmende Modellkomplexität auf die Varianz aus?
7. Warum gibt es keine universell optimale Modellkomplexität?
8. Warum motiviert der Bias-Varianz-Kompromiss den Einsatz von Kreuzvalidierung?
