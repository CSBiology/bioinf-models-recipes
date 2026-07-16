---
title: "12.10 Fallstudie: Proteinlokalisation mit TargetP vorhersagen"
sidebar:
  label: "12.10 Fallstudie: Proteinlokalisation mit TargetP vorhersagen"
  order: 10
  group: "Part 3"
  part: "Part 3"
---

# 12.10 Fallstudie: Proteinlokalisation mit TargetP vorhersagen

## Ein biologisches Vorhersageproblem

Im Verlauf dieses Kapitels haben wir die mathematischen Grundlagen künstlicher neuronaler Netze entwickelt.

Wir haben künstliche Neuronen, Aktivierungsfunktionen, verborgene Schichten und gradientenbasierte Optimierung eingeführt. Diese Konzepte erklären, *wie* neuronale Netze lernen, zeigen aber noch nicht, *warum* sie für biologische Forschung so nützlich sind.

Um die Leistungsfähigkeit neuronaler Netze wirklich zu würdigen, ist es hilfreich, eine konkrete biologische Anwendung zu betrachten.

Eines der frühesten und einflussreichsten Beispiele in der Bioinformatik ist die Vorhersage der **subzellulären Proteinlokalisation**.

Zellen sind hochgradig organisierte Systeme, die aus spezialisierten Kompartimenten wie Zellkern, Mitochondrien, Chloroplasten, endoplasmatischem Retikulum und Cytoplasma bestehen. Die meisten Proteine werden zwar an Ribosomen im Cytoplasma synthetisiert, üben ihre Funktion aber letztlich in ganz bestimmten zellulären Kompartimenten aus.

Daraus ergibt sich eine grundlegende Frage:

> **Können wir allein aus der Aminosäuresequenz eines Proteins vorhersagen, wohin es in der Zelle transportiert wird?**

Diese Frage ist nicht nur rechnerisch interessant.

Die Lokalisation eines Proteins liefert oft den ersten Hinweis auf seine Funktion. Ein Protein, das mit hoher Wahrscheinlichkeit im Chloroplasten lokalisiert ist, wird vermutlich an Photosynthese oder dem Stoffwechsel des Chloroplasten beteiligt sein, während ein mitochondriales Protein eher mit Zellatmung oder Energiegewinnung zusammenhängt.

Eine genaue Vorhersage der Proteinlokalisation ist daher ein wichtiges Werkzeug für die funktionelle Genomannotation.

---

## Die biologische Grundlage: Targeting-Signale

Zellen transportieren Proteine nicht zufällig.

Vielmehr enthalten viele Proteine kurze Sequenzregionen, die als **Adressetiketten** fungieren und sie an ihren richtigen Bestimmungsort lenken.

Diese Regionen werden als **Targeting-Peptide** oder **Signalpeptide** bezeichnet.

Zum Beispiel

- enthalten Chloroplastenproteine häufig ein N-terminales Chloroplasten-Transitpeptid,
- besitzen mitochondriale Proteine charakteristische mitochondriale Targeting-Peptide,
- und Proteine, die in den sekretorischen Weg eintreten, tragen Signalpeptide, die vom endoplasmatischen Retikulum erkannt werden.

Diese Targeting-Sequenzen sind nicht durch ein einzelnes starres Aminosäuremuster definiert.

Sie bestehen vielmehr aus charakteristischen Kombinationen physikochemischer Eigenschaften.

Mitochondriale Targeting-Peptide sind beispielsweise oft reich an positiv geladenen Aminosäuren und können amphipathische α-Helices ausbilden.

Chloroplasten-Transitpeptide weisen andere Aminosäurezusammensetzungen und andere physikochemische Merkmale auf.

Die Herausforderung besteht also nicht darin, nach einem festen Sequenzmotiv zu suchen, sondern komplexe statistische Muster zu erkennen, die sich über viele Aminosäurepositionen verteilen.

Genau für solche Probleme eignen sich neuronale Netze besonders gut.

---

## Von der Sequenz zur Vorhersage

Der Entwurf eines neuronalen Netzes für die Proteinlokalisation folgt demselben Arbeitsablauf, den wir in diesem Buch immer wieder kennengelernt haben.

Am Anfang steht eine Sammlung von Proteinen, deren Lokalisation experimentell bestimmt wurde.

Diese Proteine bilden den **Trainingsdatensatz**.

Jede Proteinsequenz wird in eine numerische Darstellung überführt, die sich für maschinelles Lernen eignet.

Frühe Versionen von TargetP stützten sich vor allem auf Merkmale aus der N-terminalen Region eines Proteins, weil sich dort die meisten Targeting-Peptide befinden.

Beispiele für solche Merkmale sind

- Aminosäurezusammensetzung,
- Hydrophobizität,
- Ladungsverteilung,
- Sequenzlänge
- und andere physikochemische Eigenschaften.

Diese numerischen Merkmale werden zur Eingabe des neuronalen Netzes.

Während des Trainings lernt das Netzwerk, charakteristische Kombinationen dieser Merkmale mit bestimmten zellulären Kompartimenten zu verknüpfen.

Mit der Zeit entdecken die verborgenen Schichten zunehmend informative interne Repräsentationen, die verschiedene Targeting-Signale voneinander unterscheiden.

Schließlich sagt die Ausgabeschicht die Wahrscheinlichkeit voraus, dass das Protein zu jeder möglichen Lokalisationsklasse gehört.

---

## Biologisch sinnvolle Repräsentationen lernen

Einer der faszinierendsten Aspekte von TargetP ist, dass den verborgenen Neuronen niemals ausdrücklich beigebracht wurde, Chloroplasten-Transitpeptide oder mitochondriale Targeting-Sequenzen zu erkennen.

Die einzigen Informationen, die während des Trainings bereitgestellt wurden, waren

- die Eingangsmerkmale
- und die experimentell bekannte Lokalisation jedes Proteins.

Trotzdem entwickelten die verborgenen Schichten nach und nach interne Repräsentationen, die eng mit biologisch sinnvollen Sequenzmerkmalen zusammenhängen.

Einige Neuronen reagierten besonders stark auf positiv geladene N-terminale Regionen.

Andere antworteten empfindlich auf hydrophobe Aminosäureabschnitte.

Wieder andere lernten Kombinationen von Sequenzeigenschaften, mit denen sich Chloroplasten-Transitpeptide von mitochondrialen Targeting-Peptiden unterscheiden lassen.

Diese Repräsentationen entstanden automatisch, weil sie die endgültige Vorhersagegenauigkeit verbesserten.

TargetP veranschaulicht damit eine der zentralen Ideen dieses Kapitels:

> **Neuronale Netze kombinieren nicht nur vorgegebene Merkmale, sie lernen zunehmend nützliche Repräsentationen biologischer Daten.**

---

## Die Vorhersageleistung bewerten

Wie jedes Modell des überwachten Lernens muss auch die Leistung von TargetP auf unabhängigen Daten bewertet werden.

Die Vorhersagegenauigkeit nur auf den Trainingsproteinen zu messen, würde zu einer zu optimistischen Einschätzung führen.

Stattdessen verwendet man Proteine, die während des Trainings nicht benutzt wurden, als unabhängigen Testsatz.

Die vorhergesagte Lokalisation kann dann mit experimentell verifizierten Lokalisationen verglichen werden.

Die Leistung wird typischerweise mithilfe der in Kapitel 11 eingeführten Bewertungsmaße zusammengefasst,

darunter

- Accuracy,
- Precision,
- Recall
- und Confusion Matrices.

Diese Metriken zeigen nicht nur, wie häufig der Prädiktor korrekt ist, sondern auch, welche Lokalisationsklassen besonders schwer voneinander zu unterscheiden sind.

So teilen Chloroplasten- und mitochondriale Targeting-Peptide oft ähnliche physikochemische Eigenschaften und sind daher schwerer zu trennen als Proteine ohne Targeting-Peptid.

---

## Warum TargetP einflussreich wurde

TargetP war eine der ersten erfolgreichen Demonstrationen dafür, dass künstliche neuronale Netze komplexe Probleme der biologischen Sequenzanalyse lösen können.

Anstatt sich ausschließlich auf manuell definierte Sequenzmotive oder von Expertinnen und Experten entworfene Entscheidungsregeln zu verlassen, lernte das Netzwerk statistische Zusammenhänge direkt aus experimentellen Daten.

Das war ein wichtiger konzeptioneller Fortschritt.

Anstatt zu fragen

> *Nach welchem Sequenzmotiv sollten wir suchen?*

konnten Forschende nun fragen

> *Kann das Netzwerk informative Sequenzmuster automatisch entdecken?*

Dieser Übergang von manuell entworfenen Regeln zu datengetriebenem Lernen hat die moderne Bioinformatik tiefgreifend geprägt.

Viele heute entwickelte Vorhersagewerkzeuge, von Prädiktoren der Proteinlokalisation bis zu Systemen zur Proteinstrukturvorhersage, folgen genau derselben Philosophie.

---

## Über TargetP hinaus

Obwohl TargetP einen wichtigen Meilenstein darstellte, haben sich moderne neuronale Netze inzwischen weit darüber hinaus entwickelt.

Anstatt sich in erster Linie auf manuell konstruierte Sequenzmerkmale zu stützen, lernen heutige Modelle oft direkt aus rohen Aminosäuresequenzen.

Außerdem können tiefe Architekturen mit vielen verborgenen Schichten wesentlich reichhaltigere interne Repräsentationen aufbauen als die vergleichsweise flachen Netze früher Vorhersagewerkzeuge.

Dennoch bleibt das zugrunde liegende Lernprinzip unverändert.

Bereits TargetP enthielt alle wesentlichen Zutaten des modernen Deep Learning:

- überwachte Lernverfahren,
- Representation Learning,
- Optimierung durch das Gradientenverfahren
- und Vorhersagen auf der Grundlage gelernter interner Merkmale.

In diesem Sinn kann TargetP als einer der Pioniere des biologischen Deep Learning betrachtet werden.

---

## Eine Brücke zur modernen künstlichen Intelligenz

Die Bedeutung von TargetP reicht über die Proteinlokalisation hinaus.

Es zeigt, dass sich biologische Sequenzanalyse als Problem des überwachten Lernens formulieren lässt, bei dem neuronale Netze informative Repräsentationen biologischer Sequenzen automatisch entdecken.

Genau dasselbe Prinzip liegt vielen der erfolgreichsten Systeme der heutigen künstlichen Intelligenz zugrunde.

Ob es um die Vorhersage von

- Proteinlokalisation,
- Proteinfunktion,
- Genexpression,
- Proteinstruktur
- oder molekularen Wechselwirkungen

geht, moderne neuronale Netze lernen interne Repräsentationen, die rohe biologische Daten in zunehmend informative Merkmale transformieren.

Der Maßstab heutiger Modelle hat sich dramatisch verändert, doch die zugrunde liegende Philosophie ist bemerkenswert ähnlich geblieben.

Im nächsten Abschnitt betrachten wir vielleicht das spektakulärste Beispiel dieser Idee: **AlphaFold**, ein neuronales Netz, das unsere Fähigkeit zur Vorhersage von Proteinstrukturen aus Aminosäuresequenzen grundlegend verändert hat.

---

### Konzeptionelle Zusammenfassung

TargetP war eine der ersten erfolgreichen Anwendungen künstlicher neuronaler Netze in der Bioinformatik. Indem das Netzwerk statistische Beziehungen zwischen Proteinsequenzen und experimentell bestimmten Lokalisationen lernte, entwickelte es automatisch interne Repräsentationen, die biologisch sinnvollen Targeting-Signalen entsprachen. Damit wurde gezeigt, dass neuronale Netze nützliche Sequenzmerkmale direkt aus Daten entdecken können. TargetP liefert somit ein frühes Beispiel für Representation Learning in der computergestützten Biologie.

---

### Fragen zur Selbstkontrolle

1. Warum ist die Vorhersage der Proteinlokalisation biologisch wichtig?
2. Was sind Targeting-Peptide, und welche Rolle spielen sie beim Proteintransport?
3. Warum eignen sich neuronale Netze gut zur Erkennung von Targeting-Signalen?
4. Welche Informationen werden benötigt, um ein System wie TargetP zu trainieren?
5. Warum lernen die verborgenen Neuronen von TargetP biologisch sinnvolle Sequenzmuster, obwohl sie nie explizit programmiert wurden?
6. Warum muss TargetP auf unabhängigen Testdaten bewertet werden?
7. Inwiefern hat TargetP die Philosophie der rechnerischen Vorhersage der Proteinlokalisation verändert?
8. Warum kann TargetP als frühes Beispiel für Representation Learning in der Biologie betrachtet werden?
