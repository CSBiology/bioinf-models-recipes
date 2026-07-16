---
title: "11.4 Entscheidungsbäume: Lernen durch aufeinanderfolgende Entscheidungen"
sidebar:
  label: "11.4 Entscheidungsbäume: Lernen durch aufeinanderfolgende Entscheidungen"
  order: 4
  group: "Part 3"
  part: "Part 3"
---

# 11.4 Entscheidungsbäume: Lernen durch aufeinanderfolgende Entscheidungen

## Eine andere Sicht auf Klassifikation

Die logistische Regression behandelt Klassifikation, indem sie eine mathematische Funktion konstruiert, die verschiedene Klassen im Merkmalsraum voneinander trennt. Dieser Ansatz ist elegant und rechnerisch effizient, setzt jedoch voraus, dass sich die Klassen durch eine vergleichsweise einfache Entscheidungsgrenze separieren lassen.

Viele biologische Fragestellungen werden jedoch nicht am besten durch Gleichungen beschrieben, sondern durch eine Abfolge einfacher Entscheidungen.

Man denke etwa daran, wie ein erfahrener Feldbiologe eine unbekannte Pflanze bestimmt.

Anstatt eine mathematische Formel auszuwerten, stellt er nacheinander Fragen:

- Bildet die Pflanze Blüten?
- Sind die Blätter wechselständig oder gegenständig angeordnet?
- Liegt eine parallele oder netzartige Nervatur vor?
- Ist der Stängel verholzt oder krautig?

Jede Antwort schränkt die Menge möglicher Arten weiter ein, bis am Ende nur noch eine Bestimmung übrig bleibt.

Genau dieser Prozess lässt sich natürlich als **Entscheidungsbaum** darstellen.

Anstatt eine komplexe mathematische Beziehung zu formulieren, stellt das Modell wiederholt einfache Fragen, deren Antworten die Unsicherheit über die korrekte Klassifikation schrittweise verringern.

Entscheidungsbäume verkörpern daher eine grundlegend andere Lernphilosophie.

Sie lernen keine Gleichung, sondern eine Folge von Entscheidungsregeln.

---

## Den Merkmalsraum schrittweise aufteilen

Wie jedes überwachte Lernverfahren beginnen Entscheidungsbäume mit einer Menge gelabelter Trainingsbeispiele.

Jede Beobachtung wird durch einen Merkmalsvektor beschrieben und einer von mehreren biologischen Klassen zugeordnet.

Zu Beginn werden alle Beobachtungen gemeinsam betrachtet.

Die Aufgabe des Lernalgorithmus besteht nun darin, dasjenige Merkmal zu finden, das die Klassen am besten voneinander trennt.

Angenommen, wir möchten Pilze als **essbar** oder **giftig** klassifizieren.

Die Trainingsdaten könnten Merkmale enthalten wie

- Hutfarbe,
- Hutform,
- Geruch,
- Druckstellenverfärbung,
- Sporenfarbe,
- Habitat
- und Stielmerkmale.

Der Algorithmus untersucht alle verfügbaren Merkmale und stellt die Frage:

> **Welches Merkmal liefert die beste Trennung zwischen essbaren und giftigen Pilzen?**

Möglicherweise ist der Geruch das aussagekräftigste Merkmal.

Dann lautet die erste Entscheidung des Baums:

> **Hat der Pilz einen angenehmen Geruch?**

Diese einzelne Frage teilt den Datensatz in zwei kleinere Teilmengen.

Jede dieser Teilmengen wird anschließend unabhängig weiter analysiert.

Das Verfahren wird so lange wiederholt, bis die Beobachtungen innerhalb jeder Gruppe überwiegend zu nur einer Klasse gehören.

Ein Entscheidungsbaum wird also **rekursiv** aufgebaut, wobei jede Entscheidung immer homogenere Teilmengen des ursprünglichen Datensatzes erzeugt.

---

## Jede Entscheidung erzeugt neue Verzweigungen

Jede Entscheidung im Baum entspricht einem **Knoten**.

Die möglichen Antworten auf die gestellte Frage bilden die **Äste**, und die daraus hervorgehenden Teilmengen der Beobachtungen werden zu den Kindknoten.

Im Verlauf des Lernprozesses wächst der Baum schrittweise.

Der Wurzelknoten enthält den vollständigen Trainingsdatensatz.

Jeder weitere Split zerlegt eine Gruppe in kleinere und homogenere Gruppen.

Schließlich erreicht der Algorithmus Knoten, in denen nahezu alle Beobachtungen derselben biologischen Klasse angehören.

Diese Endknoten nennt man **Blattknoten**.

Im Unterschied zu inneren Knoten stellen Blattknoten keine weiteren Fragen mehr.

Sie liefern stattdessen direkt die endgültige Vorhersage.

Zum Beispiel:

> **Essbar**

oder

> **Giftig**

Die Vorhersage für einen bisher unbekannten Pilz erhält man, indem man den passenden Ästen im Baum folgt, bis ein Blattknoten erreicht ist.

Die Klassifikation entsteht somit aus einer Folge transparenter und leicht nachvollziehbarer Entscheidungen.

---

## Ein Beispiel: giftige Pilze erkennen

Zur Veranschaulichung betrachten wir ein vereinfachtes Pilzklassifikationsproblem.

Nehmen wir an, der erste Split trennt die Pilze nach ihrem Geruch.

Pilze mit fauligem Geruch sind fast immer giftig.

Pilze mit angenehmem Geruch müssen weiter untersucht werden.

Die nächste Frage könnte sich dann auf die Hutfarbe beziehen.

Vielleicht werden weiße Pilze anschließend nach Druckstellenverfärbung unterschieden, während braune Pilze nach der Sporenfarbe weiter aufgeteilt werden.

Jede zusätzliche Frage verringert die verbleibende Unsicherheit.

Schließlich endet jeder Pfad durch den Baum in einer Vorhersage.

Ein neuer Pilz wird klassifiziert, indem man genau dieselbe Fragenfolge beantwortet.

Zum Beispiel können

- angenehmer Geruch,
- weißer Hut,
- vorhandene Druckstellenverfärbung

zur Vorhersage

> **Essbar**

führen, während bereits

- fauliger Geruch

unmittelbar zu

> **Giftig**

führt.

Auffällig ist, dass dabei keine Gleichungen ausgewertet werden.

Die gesamte Vorhersage besteht aus einer Folge biologisch sinnvoller Entscheidungen.

Gerade diese intuitive Nachvollziehbarkeit gehört zu den großen Stärken von Entscheidungsbäumen.

---

## Entscheidungsbäume sind hochgradig interpretierbar

Einer der größten Vorteile von Entscheidungsbäumen ist ihre Interpretierbarkeit.

Viele Verfahren des maschinellen Lernens verhalten sich wie eine "Black Box".

Sie liefern zwar häufig sehr genaue Vorhersagen, doch warum eine bestimmte Entscheidung getroffen wurde, bleibt oft schwer verständlich.

Bei Entscheidungsbäumen ist das grundlegend anders.

Jede Vorhersage kann rekonstruiert werden, indem man den Pfad vom Wurzelknoten bis zum entsprechenden Blatt verfolgt.

Jede einzelne Entscheidung auf diesem Pfad ist explizit und leicht verständlich.

Diese Transparenz ist besonders in Biologie und Medizin wertvoll.

Forschende möchten häufig nicht nur die Vorhersage kennen, sondern auch die biologische Begründung, die zu ihr geführt hat.

Ein Arzt wird zum Beispiel einem Diagnosemodell nur ungern vertrauen, wenn dieses zwar eine Krankheit vorhersagt, seine Begründung aber nicht offenlegt.

Ein Entscheidungsbaum liefert eine solche Erklärung ganz natürlich mit.

Er zeigt genau, welche Merkmale die endgültige Vorhersage beeinflusst haben und in welcher Reihenfolge sie berücksichtigt wurden.

Deshalb werden Entscheidungsbäume oft nicht nur zur Vorhersage, sondern auch zur Formulierung biologisch sinnvoller Hypothesen eingesetzt.

---

## Den optimalen Baum konstruieren

An dieser Stelle bleibt jedoch eine wichtige Frage offen.

Der Pilzdatensatz enthält viele verschiedene Merkmale.

Warum sollte der Algorithmus zuerst nach dem Geruch aufteilen und nicht nach der Hutfarbe?

Warum nicht nach dem Habitat?

Oder nach der Stiellänge?

Offensichtlich sind nicht alle Entscheidungen gleichermaßen nützlich.

Manche Fragen trennen essbare und giftige Pilze nahezu perfekt.

Andere liefern nur sehr wenig Information.

Die zentrale Herausforderung beim Aufbau eines Entscheidungsbaums besteht daher darin zu entscheiden, **welche Frage zuerst gestellt werden sollte**.

Allgemeiner formuliert:

> **Wie lässt sich messen, ob ein Split besser ist als ein anderer?**

Zur Beantwortung dieser Frage benötigen wir ein quantitatives Maß dafür, wie "rein" eine Gruppe von Beobachtungen ist.

Im nächsten Abschnitt führen wir dazu die **Entropie** als mathematisches Maß für Unsicherheit ein und zeigen, wie ein Entscheidungsbaum damit in jedem Lernschritt die informativste Entscheidung auswählen kann.

---

### Zentrale Konzepte

- Entscheidungsbäume klassifizieren Beobachtungen mithilfe einer Folge einfacher Entscheidungsregeln.
- Jeder innere Knoten repräsentiert eine Frage zu einem biologischen Merkmal.
- Jeder Split zerlegt den Merkmalsraum in zunehmend homogenere Teilmengen.
- Blattknoten enthalten die endgültigen Klassenvorhersagen.
- Entscheidungsbäume sind hochgradig interpretierbar, weil jede Vorhersage einer expliziten Entscheidungsfolge folgt.
- Der Aufbau eines Entscheidungsbaums erfordert die Bestimmung des Merkmals, das den informativsten Split liefert.

---

### Zusammenfassung

Entscheidungsbäume stellen eine intuitive Alternative zu klassifikationsmodellen dar, die auf Gleichungen beruhen. Anstatt eine mathematische Funktion zu lernen, teilen sie den Merkmalsraum rekursiv durch eine Folge biologisch sinnvoller Fragen auf. Jede Entscheidung verringert die Unsicherheit über die richtige Klasse, bis schließlich eine endgültige Vorhersage getroffen werden kann. Gerade ihre Transparenz macht Entscheidungsbäume in Biologie und Medizin besonders attraktiv, da dort häufig nicht nur die Vorhersage selbst, sondern auch ihre Begründung von Bedeutung ist. Die noch offene Schlüsselfrage besteht darin, welches Merkmal an jedem Split verwendet werden sollte. Genau hier führen die Begriffe Entropie und Informationsgewinn weiter.

---

### Fragen zur Selbstkontrolle

1. Worin unterscheidet sich ein Entscheidungsbaum konzeptionell von der logistischen Regression?
2. Was repräsentiert jeder innere Knoten eines Entscheidungsbaums?
3. Welche Aufgabe haben die Blattknoten?
4. Warum gelten Entscheidungsbäume als besonders gut interpretierbar?
5. Wie wird eine neue Beobachtung mithilfe eines Entscheidungsbaums klassifiziert?
6. Warum gehört die Wahl des ersten Splits zu den wichtigsten Schritten beim Aufbau eines Entscheidungsbaums?
