---
title: "11.9 Ensemble Learning: Warum viele Bäume besser sind als einer"
sidebar:
  label: "11.9 Ensemble Learning: Warum viele Bäume besser sind als einer"
  order: 9
  group: "Part 3"
  part: "Part 3"
---

# 11.9 Ensemble Learning: Warum viele Bäume besser sind als einer

## Die Grenzen einzelner Entscheidungsbäume

Entscheidungsbäume gehören zu den intuitivsten Modellen des maschinellen Lernens.

Sie lassen sich leicht verstehen und visualisieren und liefern oft wertvolle biologische Einsichten, weil jede Vorhersage auf eine explizite Folge von Entscheidungsregeln zurückgeführt werden kann.

Trotz dieser Vorteile besitzt ein einzelner Entscheidungsbaum eine wichtige Schwäche.

Entscheidungsbäume sind häufig **instabil**.

Schon kleine Änderungen in den Trainingsdaten können überraschend unterschiedliche Bäume hervorbringen.

Angenommen, ein oder zwei Pilze werden aus dem Trainingsdatensatz entfernt.

Dann kann es passieren, dass nun ein anderes Merkmal im Wurzelknoten den höchsten Informationsgewinn liefert.

Sobald sich der erste Split ändert, können sich auch alle nachfolgenden Äste anders entwickeln.

Obwohl beide Bäume auf den Trainingsdaten ähnlich gut abschneiden, können sie für neue Beobachtungen unterschiedliche Vorhersagen liefern.

Diese Empfindlichkeit gegenüber den Trainingsdaten ist eine Folge der **hohen Varianz**, die wir bereits in Kapitel 10 diskutiert haben.

Ein einzelner Entscheidungsbaum ist daher oft ein ausgezeichnetes Erklärungsmodell, aber nicht unbedingt das zuverlässigste Vorhersagemodell.

Damit stellt sich ganz natürlich eine wichtige Frage:

> **Lassen sich viele unvollkommene Bäume zu einem besseren Klassifikator kombinieren?**

Die Antwort lautet: ja.

Genau diese Idee bildet die Grundlage des **Ensemble Learning**.

---

## Die Weisheit der Vielen

Das Grundprinzip des Ensemble Learning ist überraschend anschaulich.

Man stelle sich vor, man bittet einen einzelnen Arzt, eine schwierige Krankheit zu diagnostizieren.

Dieser Arzt kann sich gelegentlich irren.

Nun stelle man sich vor, man befragt fünfzig unabhängige Experten und kombiniert ihre Einschätzungen.

Auch wenn einzelne Ärzte nicht immer derselben Meinung sind, ist das Mehrheitsurteil oft verlässlicher als jede Einzelmeinung.

Dieses Phänomen bezeichnet man als **Weisheit der Vielen**.

Das maschinelle Lernen nutzt genau dieselbe Idee.

Anstatt sich auf ein einziges Vorhersagemodell zu verlassen, konstruiert man viele unterschiedliche Modelle und kombiniert ihre Vorhersagen.

Jedes einzelne Modell kann unvollkommen sein.

Wenn sich ihre Fehler jedoch nicht vollständig decken, führt die Mittelung ihrer Vorhersagen oft zu einem Klassifikator, der sowohl genauer als auch robuster ist.

Die zentrale Idee lautet daher:

> **Viele mäßig gute Modelle übertreffen oft ein einzelnes exzellentes Modell.**

---

## Random Forests

Eine der erfolgreichsten Ensemble-Methoden ist der **Random Forest**.

Wie der Name andeutet, besteht ein Random Forest aus einer großen Sammlung einzelner Entscheidungsbäume.

Jeder dieser Bäume wird leicht unterschiedlich trainiert.

Anstatt den gesamten Trainingsdatensatz zu verwenden, erhält jeder Baum eine zufällig ausgewählte Teilmenge der Beobachtungen.

Zusätzlich betrachtet jeder Baum bei jedem Split nur eine zufällig ausgewählte Teilmenge der verfügbaren Merkmale.

Dadurch entwickelt jeder Baum eine etwas andere Struktur.

Manche Bäume betrachten zuerst den Geruch.

Andere beginnen mit der Hutfarbe.

Wieder andere teilen zunächst nach Druckstellenverfärbung oder Habitat auf.

Obwohl alle Bäume dasselbe zugrunde liegende Klassifikationsproblem lernen, sind keine zwei Bäume exakt identisch.

Der Wald enthält also viele unterschiedliche Perspektiven auf denselben biologischen Datensatz.

---

## Von einzelnen Bäumen zur gemeinsamen Entscheidung

Wie trifft ein Random Forest nun eine Vorhersage?

Angenommen, wir möchten einen bisher unbekannten Pilz klassifizieren.

Anstatt einen einzelnen Entscheidungsbaum zu befragen, legen wir den Pilz jedem Baum im Wald vor.

Jeder Baum sagt unabhängig voraus, ob der Pilz essbar oder giftig ist.

Die endgültige Vorhersage wird dann durch **Mehrheitsabstimmung** bestimmt.

Sagen die meisten Bäume "essbar", dann lautet auch die Vorhersage des Waldes "essbar".

Sagen die meisten Bäume "giftig", dann sagt der Wald "giftig" voraus.

Bei Regressionsproblemen werden die Vorhersagen üblicherweise gemittelt, statt abgestimmt zu werden.

Diese einfache Strategie hat eine bemerkenswerte Wirkung.

Zufällige Schwankungen, die einen einzelnen Baum beeinflussen, fehlen oft in vielen anderen Bäumen.

Dadurch heben sich zahlreiche individuelle Vorhersagefehler gegenseitig auf.

Die kombinierte Vorhersage wird deshalb deutlich stabiler als die eines einzelnen Baums.

---

## Warum Random Forests funktionieren

Auf den ersten Blick mag es überraschend erscheinen, dass die Mittelung vieler unvollkommener Modelle die Vorhersagegenauigkeit verbessert.

Die Erklärung liegt in der Unterscheidung zwischen **Bias** und **Varianz**.

Einzelne Entscheidungsbäume besitzen im Allgemeinen einen relativ geringen Bias.

Ihre Flexibilität erlaubt es ihnen, komplexe biologische Zusammenhänge zu erfassen.

Gleichzeitig weisen sie jedoch oft eine hohe Varianz auf, weil schon kleine Änderungen in den Trainingsdaten den gelernten Baum erheblich verändern können.

Random Forests reduzieren vor allem diese Varianz.

Da jeder Baum mit leicht unterschiedlichen Daten und unterschiedlichen Merkmalsmengen trainiert wird, machen die einzelnen Bäume unterschiedliche Fehler.

Durch die Mittelung über viele Bäume werden diese zufälligen Schwankungen geglättet.

Wichtig ist, dass diese Verbesserung erreicht wird, ohne den Bias des Modells wesentlich zu erhöhen.

Random Forests bieten damit eine elegante Antwort auf eine der zentralen Fragen aus Kapitel 10:

> **Wie können wir die Varianz reduzieren, ohne Vorhersagekraft einzubüßen?**

---

## Stärken von Random Forests

Random Forests gehören heute zu den am weitesten verbreiteten Verfahren des maschinellen Lernens in der Bioinformatik.

Sie vereinen mehrere attraktive Eigenschaften.

Erstens liefern sie oft eine sehr hohe Vorhersagegenauigkeit, ohne dass viele Parameter fein abgestimmt werden müssen.

Zweitens erfassen sie auf natürliche Weise nichtlineare Zusammenhänge und komplexe Wechselwirkungen zwischen biologischen Merkmalen.

Drittens sind sie relativ robust gegenüber verrauschten Daten und Ausreißern.

Schließlich liefern Random Forests Schätzungen der **Merkmalswichtigkeit**, mit deren Hilfe sich erkennen lässt, welche biologischen Variablen am stärksten zu den Vorhersagen beigetragen haben.

Für viele biologische Anwendungen machen diese Vorteile Random Forests zu einer ausgezeichneten ersten Wahl.

Sie wurden erfolgreich eingesetzt für

- die Vorhersage von Proteinfunktionen,
- die Klassifikation von Zelltypen,
- die Identifikation von Krankheitsbiomarkern,
- die Vorhersage von Bindungsstellen für Transkriptionsfaktoren
- und die Analyse von Genexpressionsdaten.

---

## Der Preis der verbesserten Leistung

Die höhere Vorhersagekraft von Random Forests hat jedoch ihren Preis.

Im Unterschied zu einem einzelnen Entscheidungsbaum lässt sich ein ganzer Wald nicht mehr leicht visualisieren.

Anstatt einer einzigen transparenten Entscheidungsfolge entsteht die Vorhersage aus Hunderten oder sogar Tausenden einzelner Bäume.

Das Modell wird dadurch weniger interpretierbar.

Hier zeigt sich ein wiederkehrendes Grundthema des maschinellen Lernens.

Eine Verbesserung der Vorhersageleistung geht oft mit einem Verlust an Interpretierbarkeit einher.

Viele moderne Verfahren des maschinellen Lernens, darunter auch tiefe neuronale Netze, stehen vor genau demselben Zielkonflikt.

Forschende müssen daher entscheiden, welches Ziel für die jeweilige Anwendung wichtiger ist:

- die höchstmögliche Vorhersagegenauigkeit zu erreichen
- oder die biologische Begründung jeder einzelnen Vorhersage zu verstehen.

In vielen Forschungsprojekten sind beide Ziele wertvoll, sodass unterschiedliche Modelle für komplementäre Zwecke eingesetzt werden.

---

## Jenseits des Random Forest

Random Forests sind nur ein Beispiel für Ensemble Learning.

Eine weitere wichtige Methodenfamilie ist das **Boosting**.

Während Random Forests viele Bäume unabhängig voneinander trainieren, konstruiert Boosting die Bäume sequenziell.

Jeder neue Baum konzentriert sich besonders auf diejenigen Beobachtungen, die von den vorherigen Bäumen falsch klassifiziert wurden.

Die einzelnen Bäume sind dabei meist deutlich kleiner, bilden zusammen aber ein sehr leistungsfähiges Vorhersagemodell.

Moderne Boosting-Verfahren wie Gradient Boosting und XGBoost haben sich in zahlreichen Machine-Learning-Wettbewerben und biologischen Vorhersageaufgaben als äußerst erfolgreich erwiesen.

Obwohl ihre mathematischen Details über den Rahmen dieses Buches hinausgehen, verdeutlichen sie ein wichtiges Prinzip.

Ensemble Learning ist kein einzelner Algorithmus.

Es ist eine allgemeine Strategie zur Verbesserung von Vorhersagen durch die Kombination vieler einfacher Modelle.

---

## Von interpretierbaren Modellen zum Representation Learning

Die in diesem Kapitel eingeführten Klassifikationsverfahren haben eine wichtige Gemeinsamkeit.

Ganz gleich, ob wir logistische Regression, Entscheidungsbäume oder Random Forests verwenden, entscheidet der Forschende weiterhin selbst, welche biologischen Merkmale dem Modell zur Verfügung gestellt werden.

Der Lernalgorithmus lernt zwar, wie diese Merkmale kombiniert werden müssen, er lernt jedoch nicht die Merkmale selbst.

Moderne künstliche neuronale Netze verfolgen einen grundlegend anderen Ansatz.

Anstatt sich vollständig auf manuell entworfene Merkmale zu verlassen, können sie zunehmend nützliche interne Repräsentationen direkt aus den Daten lernen.

Diese Fähigkeit, hierarchische Merkmalsrepräsentationen zu erlernen, hat Bereiche von der Bilderkennung bis zur Vorhersage von Proteinstrukturen grundlegend verändert.

Im nächsten Kapitel werden wir untersuchen, wie künstliche neuronale Netze auf den Prinzipien des überwachten Lernens aufbauen und zugleich die Komplexität der lernbaren Modelle drastisch erweitern.

---

### Zentrale Konzepte

- Ensemble Learning kombiniert viele Vorhersagemodelle zu einem einzigen Klassifikator.
- Einzelne Entscheidungsbäume weisen häufig eine hohe Varianz auf.
- Random Forests reduzieren diese Varianz, indem sie die Vorhersagen vieler unabhängig trainierter Bäume mitteln.
- Mehrheitsabstimmung führt zu robusten Klassifikationsentscheidungen.
- Random Forests verbessern die Vorhersagegenauigkeit häufig, verzichten dafür aber auf einen Teil der Interpretierbarkeit.
- Boosting ist eine alternative Ensemble-Strategie, bei der Modelle sequenziell statt unabhängig trainiert werden.

---

### Zusammenfassung

Einzelne Entscheidungsbäume sind intuitiv und gut interpretierbar, reagieren jedoch oft empfindlich auf kleine Änderungen der Trainingsdaten. Ensemble Learning begegnet dieser Schwäche, indem es die Vorhersagen vieler unterschiedlicher Modelle kombiniert. Random Forests verringern die Vorhersagevarianz durch Mehrheitsabstimmung, während Boosting die Leistung verbessert, indem frühere Fehler schrittweise korrigiert werden. Diese Verfahren zeigen, dass sich Vorhersagekraft häufig dadurch steigern lässt, dass viele einfache Modelle zusammenwirken, anstatt sich auf ein einzelnes komplexes Modell zu verlassen. Zugleich machen sie den wachsenden Zielkonflikt zwischen Interpretierbarkeit und Genauigkeit sichtbar, der im nächsten Kapitel bei künstlichen neuronalen Netzen noch deutlicher hervortritt.

---

### Fragen zur Selbstkontrolle

1. Warum gelten einzelne Entscheidungsbäume häufig als instabil?
2. Was ist die zentrale Idee des Ensemble Learning?
3. Worin unterscheidet sich ein Random Forest von einem einzelnen Entscheidungsbaum?
4. Warum werden die Bäume in einem Random Forest absichtlich unterschiedlich konstruiert?
5. Wie werden Vorhersagen in einem Random-Forest-Klassifikator kombiniert?
6. Warum reduzieren Random Forests vor allem die Varianz und nicht den Bias?
7. Was sind die wichtigsten Vor- und Nachteile von Random Forests?
8. Worin unterscheidet sich Boosting konzeptionell von Random Forests?
9. Warum übertreffen Random Forests einzelne Entscheidungsbäume in der Regel?
10. Worin unterscheiden sich neuronale Netze grundlegend von allen in diesem Kapitel vorgestellten Klassifikationsverfahren?
