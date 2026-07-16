---
title: "12.11 AlphaFold: Proteinstrukturen mit Deep Learning vorhersagen"
sidebar:
  label: "12.11 AlphaFold: Proteinstrukturen mit Deep Learning vorhersagen"
  order: 11
  group: "Part 3"
  part: "Part 3"
---

# 12.11 AlphaFold: Proteinstrukturen mit Deep Learning vorhersagen

## Eines der größten ungelösten Probleme der Biologie

Jedes Protein beginnt als lineare Kette von Aminosäuren.

Während oder kurz nach der Synthese faltet sich diese Kette spontan in eine hochspezifische dreidimensionale Struktur.

Gerade diese gefaltete Struktur bestimmt letztlich fast jeden Aspekt der Funktion des Proteins:

- welche Moleküle es bindet,
- welche Reaktionen es katalysiert,
- wie es mit anderen Proteinen interagiert
- und wie Mutationen seine Aktivität beeinflussen.

Das Verständnis von Proteinstrukturen gehört daher zu den zentralen Zielen der Molekularbiologie.

Daraus ergibt sich eine natürliche Frage:

> **Können wir die dreidimensionale Struktur eines Proteins direkt aus seiner Aminosäuresequenz vorhersagen?**

Diese Frage wurde als **Protein-Folding-Problem** bekannt und stellte über mehr als ein halbes Jahrhundert hinweg eine Herausforderung für Biologen, Chemiker, Physiker und Informatiker dar.

---

## Warum Proteinstrukturvorhersage schwierig ist

Auf den ersten Blick wirkt das Problem geradlinig.

Die Aminosäuresequenz ist bekannt.

Auch die physikalischen Gesetze, die molekulare Wechselwirkungen bestimmen, sind bekannt.

Warum also nicht einfach den Faltungsprozess simulieren?

Die Schwierigkeit liegt in der enormen Komplexität des Suchraums.

Ein typisches Protein enthält Hunderte von Aminosäuren.

Jede Aminosäure kann mehrere Konformationen annehmen, sodass astronomisch viele mögliche Strukturen entstehen.

Alle denkbaren Konfigurationen zu durchsuchen, ist rechnerisch unmöglich.

Hinzu kommt, dass die Faltung durch viele miteinander konkurrierende physikalische Wechselwirkungen bestimmt wird, darunter

- Wasserstoffbrücken,
- elektrostatische Wechselwirkungen,
- hydrophobe Effekte,
- Van-der-Waals-Kräfte
- und konformationelle Zwänge.

Diese Wechselwirkungen für ein ganzes Protein mit atomarer Auflösung präzise zu simulieren, ist weiterhin äußerst anspruchsvoll.

Über Jahrzehnte hinweg stützte sich die Strukturvorhersage deshalb auf eine Kombination aus

- physikalischen Simulationen,
- statistischen Energiefunktionen
- und strukturellen Templates aus experimentell aufgeklärten Proteinen.

Obwohl diese Methoden beachtliche Erfolge erzielten, blieb die Vorhersage völlig unbekannter Proteinstrukturen eine große Herausforderung.

---

## Evolution liefert zusätzliche Information

Eine entscheidende Einsicht veränderte die Herangehensweise an dieses Problem grundlegend.

Proteine evolvieren nicht isoliert.

Im Verlauf der Evolution sammeln sich Mutationen in Proteinsequenzen an.

Einige Aminosäuren können sich unabhängig verändern, ohne die Funktion des Proteins stark zu beeinflussen.

Andere können das nicht.

Angenommen, zwei Aminosäurereste liegen in der gefalteten Struktur räumlich nahe beieinander.

Wenn sich einer dieser Reste im Lauf der Evolution verändert, muss sich der interagierende Rest unter Umständen ebenfalls verändern, damit die strukturelle Wechselwirkung erhalten bleibt.

Solche koordinierten Mutationen werden als **Koevolution** bezeichnet.

Durch den Vergleich homologer Proteinsequenzen aus vielen verschiedenen Organismen lassen sich solche korrelierten Mutationen identifizieren.

Diese evolutionären Korrelationen liefern wertvolle Hinweise darauf, welche Reste im dreidimensionalen Raum wahrscheinlich nahe beieinander liegen.

Diese Beobachtung veränderte die Proteinstrukturvorhersage grundlegend.

Anstatt sich ausschließlich auf physikalische Simulationen zu stützen, konnten Forschende nun die enorme Menge evolutionärer Information nutzen, die in biologischen Sequenzdatenbanken gespeichert ist.

---

## Multiple Sequence Alignments als evolutionäre Fingerabdrücke

Die wichtigste Quelle evolutionärer Information ist das **Multiple Sequence Alignment (MSA)**.

Ein MSA richtet homologe Proteine aus vielen verschiedenen Organismen so aus, dass einander entsprechende Aminosäurepositionen direkt verglichen werden können.

Anstatt eine einzelne Proteinsequenz isoliert zu betrachten, erhält das neuronale Netz nun Information darüber, wie sich jede Position über Millionen von Jahren hinweg entwickelt hat.

Einige Positionen bleiben nahezu vollständig konserviert.

Andere variieren stark.

Am wichtigsten ist jedoch, dass bestimmte Paare von Positionen korrelierte evolutionäre Veränderungen zeigen.

Diese koevolutionären Muster liefern indirekte Evidenz dafür, dass die entsprechenden Reste in der gefalteten Struktur miteinander wechselwirken.

Das MSA enthält daher weit mehr Information als die Aminosäuresequenz allein.

Es kodiert die Evolutionsgeschichte einer gesamten Proteinfamilie.

Eine der großen Leistungen von AlphaFold bestand darin, dieses reichhaltige evolutionäre Signal interpretieren zu lernen.

---

## Deep Learning trifft Strukturbiologie

AlphaFold kombiniert diese evolutionären Beobachtungen mit modernem Deep Learning.

Anstatt zu versuchen, den vollständigen physikalischen Faltungsprozess zu simulieren, lernt das neuronale Netz eine direkte Beziehung zwischen

- Aminosäuresequenz,
- evolutionärer Information
- und dreidimensionaler Proteinstruktur.

Dieser Ansatz folgt genau denselben Prinzipien, die wir in diesem Kapitel entwickelt haben.

Das Netzwerk erhält numerische Eingaben.

Die verborgenen Schichten lernen zunehmend ausgefeilte interne Repräsentationen.

Schließlich sagt die Ausgabeschicht strukturelle Eigenschaften des Proteins voraus.

Der bemerkenswerte Unterschied liegt in der Komplexität der Vorhersageaufgabe.

Anstatt einen einzelnen numerischen Wert oder eine biologische Klasse vorherzusagen, sagt AlphaFold die vollständige dreidimensionale Anordnung Tausender Atome voraus.

Konzeptionell bleibt der Lernprozess jedoch derselbe.

---

## Strukturelle Repräsentationen lernen

Einer der bemerkenswertesten Aspekte von AlphaFold ist die Natur seiner verborgenen Repräsentationen.

Frühe Schichten analysieren vor allem die Proteinsequenz und die evolutionäre Information aus dem Multiple Sequence Alignment.

Spätere Schichten lernen allmählich immer ausgefeiltere strukturelle Konzepte.

So beginnen die verborgenen Repräsentationen zum Beispiel,

- Rest-Rest-Wechselwirkungen,
- lokale Sekundärstruktur,
- Fernkontakte,
- Domänenorganisation
- und geometrische Zwänge zwischen Aminosäuren

zu erfassen.

Wichtig ist, dass diese strukturellen Konzepte **nicht explizit vorgegeben** werden.

Wie die von TargetP gelernten Targeting-Signale entstehen sie automatisch, weil sie die endgültige Vorhersage verbessern.

Representation Learning bleibt also das zentrale Prinzip, selbst bei einem der anspruchsvollsten Systeme künstlicher Intelligenz, die jemals für die Biologie entwickelt wurden.

---

## Die Rolle von Attention

Moderne Versionen von AlphaFold verwenden eine Netzwerkarchitektur, die als **Transformer** bezeichnet wird.

Transformer wurden ursprünglich für die Verarbeitung natürlicher Sprache entwickelt und nutzen einen Mechanismus namens **Attention**.

Attention erlaubt dem Netzwerk zu bestimmen, welche Teile der Eingabe für die Interpretation einer bestimmten Aminosäure besonders relevant sind.

Anstatt die Sequenz strikt von links nach rechts zu verarbeiten, kann jede Aminosäure direkt mit jeder anderen Aminosäure Information austauschen.

Gerade für Proteine ist diese Fähigkeit besonders wichtig.

Zwei Reste, die in der Primärsequenz weit voneinander entfernt liegen, können nach der Faltung unmittelbare Nachbarn im Raum werden.

Attention ermöglicht es dem Netzwerk, genau solche langreichweitigen Wechselwirkungen zu modellieren.

Dadurch kann das Netz lokale Sequenzinformation mit globalen strukturellen Beziehungen über das gesamte Protein hinweg integrieren.

---

## Ein Durchbruch in der Strukturbiologie

Die Vorhersagekraft von AlphaFold wurde während des internationalen Wettbewerbs **Critical Assessment of Structure Prediction (CASP)** besonders deutlich.

Über Jahrzehnte hinweg hatte CASP als wichtigster Benchmark für Methoden der Proteinstrukturvorhersage gedient.

Als AlphaFold dort eingeführt wurde, übertrafen seine Vorhersagen konkurrierende Ansätze deutlich.

Für viele Proteine waren die vorhergesagten Strukturen experimentell bestimmten Kristallstrukturen nahezu nicht mehr zu unterscheiden.

Dieser Erfolg markierte einen Wendepunkt in der Strukturbiologie.

Plötzlich standen Forschenden präzise Strukturmodelle für Proteine zur Verfügung, die experimentell nie aufgeklärt worden waren.

Heute existieren vorhergesagte Strukturen für Hunderte Millionen Proteine, was die Forschung in Molekularbiologie, Medizin, Biotechnologie und Wirkstoffentwicklung grundlegend verändert hat.

---

## Hat AlphaFold das Protein-Folding gelöst?

Trotz seines außerordentlichen Erfolgs muss eine wichtige konzeptionelle Unterscheidung getroffen werden.

AlphaFold sagt **Proteinstrukturen** voraus.

Es simuliert **nicht** den physikalischen Prozess, durch den Proteine sich falten.

Diese Unterscheidung ist subtil, aber grundlegend.

Das Netzwerk hat eine hochpräzise Abbildung gelernt,

$$
\text{Sequenz}
\longrightarrow
\text{Struktur}.
$$

Es hat **nicht** die vollständige Folge molekularer Ereignisse gelernt, die ein ungefaltetes Protein in seine native Struktur überführt.

Damit zeigt AlphaFold ein wichtiges Prinzip, das weit über die Proteinstrukturvorhersage hinausreicht.

Machine-Learning-Modelle können hochpräzise Vorhersagebeziehungen lernen, ohne notwendigerweise die zugrunde liegenden physikalischen Mechanismen zu erfassen.

Vorhersage und mechanistisches Verständnis sind also nicht identisch.

Damit kehren wir zu einem der grundlegenden Themen zurück, die zu Beginn dieses Buches eingeführt wurden.

Modelle sind nicht die Realität.

Sie sind mathematische Repräsentationen, die bestimmte Aspekte biologischer Systeme erfassen.

Ihr Wert liegt darin, klar definierte wissenschaftliche Fragen beantworten zu können.

---

## Von biologischer Vorhersage zu wissenschaftlicher Erkenntnis

AlphaFold ist eines der eindrucksvollsten Beispiele dafür, was moderne künstliche Intelligenz in der Biologie leisten kann.

Sein Erfolg beruht jedoch nicht auf völlig neuen Lernprinzipien.

Es baut auf denselben Konzepten auf, die wir in diesem Kapitel entwickelt haben:

- überwachte Lernverfahren,
- gradientenbasierte Optimierung,
- Representation Learning
- und hierarchische neuronale Netze.

Der Unterschied liegt im Umfang der Daten, in der Raffinesse der gelernten Repräsentationen und in den enormen Rechenressourcen, die heute zur Verfügung stehen.

Vom einfachen künstlichen Neuron bis zur Vorhersage vollständiger Proteinstrukturen bleibt die zugrunde liegende Philosophie bemerkenswert konsistent.

Deep Learning ist erfolgreich, weil es nützliche Repräsentationen biologischer Daten lernt, die Vorhersagen ermöglichen, die weit außerhalb der Reichweite manuell entworfener Modelle liegen.

---

### Konzeptionelle Zusammenfassung

AlphaFold hat die Proteinstrukturvorhersage revolutioniert, indem es evolutionäre Information mit modernem Deep Learning kombiniert. Anstatt den physikalischen Faltungsprozess explizit zu simulieren, lernt das Netzwerk eine direkte Abbildung von Aminosäuresequenzen und Multiple Sequence Alignments auf dreidimensionale Proteinstrukturen. Die verborgenen Schichten entwickeln dabei automatisch zunehmend ausgefeilte strukturelle Repräsentationen und demonstrieren die Leistungsfähigkeit des Representation Learning in bislang unerreichtem Maßstab. Zugleich macht AlphaFold eine wichtige wissenschaftliche Unterscheidung deutlich: Eine hochpräzise Vorhersage bedeutet nicht notwendigerweise ein vollständiges mechanistisches Verständnis des zugrunde liegenden biologischen Prozesses.

---

### Fragen zur Selbstkontrolle

1. Warum galt die Proteinstrukturvorhersage lange als eine der großen Herausforderungen der Biologie?
2. Warum ist die direkte Simulation der Proteinfaltung aus physikalischen Prinzipien rechnerisch schwierig?
3. Welche Information liefert ein Multiple Sequence Alignment über eine einzelne Proteinsequenz hinaus?
4. Was sind koevolvierende Reste, und warum sind sie für die Strukturvorhersage informativ?
5. Wie nutzt AlphaFold Deep Learning zur Vorhersage von Proteinstrukturen?
6. Welche Rolle spielt der Attention-Mechanismus in Transformer-basierten Modellen?
7. Warum kann AlphaFold Proteinstrukturen vorhersagen, ohne den Faltungsprozess explizit zu simulieren?
8. Erklären Sie den Unterschied zwischen dem Lernen einer Vorhersageabbildung und dem Verständnis eines biologischen Mechanismus.
9. Wie veranschaulicht AlphaFold das zuvor eingeführte Konzept des Representation Learning?
10. In welchem Sinn stellt AlphaFold die Kulmination der Machine-Learning-Konzepte dar, die in diesem Buch entwickelt wurden?
