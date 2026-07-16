---
title: "8.1 Warum Lernen mit unbeschrifteten Daten beginnt"
sidebar:
  label: "8.1 Warum Lernen mit unbeschrifteten Daten beginnt"
  order: 1
  group: "Part 3"
  part: "Part 3"
---

# Kapitel 8 — Clustering: Strukturen in biologischen Daten erkennen

## 8.1 Warum Lernen mit unbeschrifteten Daten beginnt

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- zu erläutern, warum die moderne Biologie zunehmend auf datengetriebene Entdeckungen angewiesen ist.
- zwischen überwachtem und unüberwachtem Lernen zu unterscheiden.
- die biologische Motivation hinter Clustering zu beschreiben.
- zu erklären, warum Ähnlichkeit funktionelle Beziehungen zwischen biologischen Objekten sichtbar machen kann.

Die moderne Biologie befindet sich in einer Phase beispielloser Datenproduktion. Fortschritte in der Next-Generation-Sequenzierung, der Massenspektrometrie, der High-Content-Mikroskopie und bei Einzelzelltechnologien erlauben es heute, Tausende oder sogar Millionen biologischer Merkmale gleichzeitig zu erfassen. Ganze Transkriptome, Proteome, Metabolome oder Populationen einzelner Zellen lassen sich inzwischen in einem einzigen Experiment charakterisieren.

Diese technologische Entwicklung hat die biologische Forschung grundlegend verändert. Über viele Jahrzehnte bestand die zentrale Herausforderung vor allem darin, überhaupt ausreichend experimentelle Daten zu gewinnen. Heute liegt die Schwierigkeit immer häufiger darin, die gewaltigen Datenmengen zu interpretieren, die moderne Technologien erzeugen. Biologische Erkenntnis wird damit zunehmend zu einem Problem des Lernens aus Daten.

Im Unterschied zu vielen klassischen wissenschaftlichen Fragestellungen liegen diesen Datensätzen jedoch meist keine vorgegebenen Antworten bei. Wenn wir die Expression Tausender Gene messen, wissen wir in der Regel nicht im Voraus, welche Gene demselben biologischen Signalweg angehören. Wenn wir einzelne Zellen profilieren, ist häufig unklar, wie viele Zelltypen überhaupt vorhanden sind. Und auch in proteomischen Experimenten lassen sich funktionelle Proteinkomplexe meist nicht unmittelbar aus den Messwerten ablesen.

Stattdessen muss die innere Organisation aus den Daten selbst hervorgehen.

Genau hier setzt das **unüberwachte Lernen** an.

Beim überwachten Lernen, das später in diesem Teil des Buches eingeführt wird, lernen Algorithmen aus Beispielen mit bekannten Antworten. Jede Beobachtung ist mit einem Label verknüpft, etwa einer Krankheitsdiagnose, einer Proteinlokalisation oder einer Enzymklasse, und das Ziel besteht darin, diese Labels für neue Beobachtungen vorherzusagen.

Unüberwachtes Lernen verfolgt ein grundsätzlich anderes Ziel. Hier stehen keine Labels zur Verfügung. Anstatt bekannte Ergebnisse vorherzusagen, sollen verborgene Muster, Strukturen oder Beziehungen direkt aus den Daten erschlossen werden. Unüberwachtes Lernen bestätigt also nicht nur vorhandenes Wissen, sondern erzeugt neue Hypothesen, indem es bislang unbekannte Organisationsformen biologischer Systeme sichtbar macht.

Unter den Methoden des unüberwachten Lernens nimmt **Clustering** eine besonders zentrale Rolle ein. Ziel ist es, Gruppen biologischer Objekte zu identifizieren, die einander ähnlicher sind als dem übrigen Datensatz.

Auf den ersten Blick wirkt diese Aufgabe fast selbstverständlich. Wenn zwei Gene nahezu identische Expressionsprofile aufweisen, scheint die Vermutung nahezuliegen, dass sie auch ähnliche biologische Funktionen erfüllen. Doch genau an dieser Stelle stellen sich sofort zwei grundlegende Fragen.

Erstens: Was bedeutet es überhaupt, dass zwei biologische Objekte *ähnlich* sind?

Zweitens: Wie lässt sich aus Ähnlichkeit biologisches Wissen gewinnen?

Diese beiden Fragen stehen im Zentrum des Clusterings und allgemeiner einer datengetriebenen Biologie. Im Verlauf dieses Kapitels werden wir sehen, dass die Antworten alles andere als trivial sind. Ähnlichkeit ist keine intrinsische Eigenschaft biologischer Objekte, sondern hängt davon ab, wie wir sie mathematisch darstellen. Ebenso sind Cluster keine objektiv vorgegebenen Einheiten, die nur darauf warten, entdeckt zu werden. Sie entstehen vielmehr aus bestimmten mathematischen Annahmen darüber, wie biologische Organisation aussieht.

Diese Annahmen zu verstehen, ist entscheidend für eine sachgerechte Interpretation von Clustering-Ergebnissen. Anstatt Clustering als Black-Box-Algorithmus zu behandeln, werden wir es daher als mathematisches Modell zur Aufdeckung funktioneller Organisation in biologischen Systemen verstehen.

### Konzeptionelle Zusammenfassung

- Die moderne Biologie erzeugt große, hochdimensionale Datensätze, die ohne rechnergestützte Analyse kaum interpretierbar sind.
- Viele biologische Datensätze sind **unbeschriftet**, weshalb unüberwachtes Lernen eine zentrale Rolle spielt.
- Clustering soll Gruppen ähnlicher biologischer Objekte ohne Vorwissen identifizieren.
- Wie Cluster biologisch zu deuten sind, hängt davon ab, wie Ähnlichkeit definiert wird.
- Clustering liefert Hypothesen über biologische Organisation, beweist jedoch keine biologischen Beziehungen.

### Fragen zur Selbstkontrolle

1. Warum ist die moderne Biologie zunehmend auf datengetriebene Analysen angewiesen?
2. Worin besteht der grundlegende Unterschied zwischen überwachtem und unüberwachtem Lernen?
3. Warum gilt Clustering als explorative Methode?
4. Weshalb sollten Ergebnisse des Clusterings als Hypothesen und nicht als endgültige biologische Wahrheiten interpretiert werden?
