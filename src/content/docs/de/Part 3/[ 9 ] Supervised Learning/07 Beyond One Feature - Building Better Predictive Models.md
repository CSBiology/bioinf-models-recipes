---
title: "9.7 Mehr als ein Merkmal: Bessere Vorhersagemodelle konstruieren"
sidebar:
  label: "9.7 Mehr als ein Merkmal: Bessere Vorhersagemodelle konstruieren"
  order: 7
  group: "Part 3"
  part: "Part 3"
---

# 9.7 Mehr als ein Merkmal: Bessere Vorhersagemodelle konstruieren

## Ein Merkmal reicht selten aus

In diesem Kapitel haben wir bewusst mit einem extrem einfachen Beispiel gearbeitet. Wir haben versucht, die Proteinstabilität mithilfe nur eines einzigen biologischen Merkmals vorherzusagen: der Hydrophobizität.

Dieses Beispiel war nützlich, um die Grundprinzipien des überwachten Lernens einzuführen. Zugleich macht es aber auch eine wichtige Grenze sichtbar.

Proteinstabilität wird durch viele molekulare Mechanismen gleichzeitig bestimmt.

Hydrophobe Wechselwirkungen spielen dabei zweifellos eine wichtige Rolle, sind aber nur ein Teil eines weitaus umfassenderen physikalischen Bildes. Weitere Einflussgrößen sind unter anderem

- elektrostatische Wechselwirkungen,
- Wasserstoffbrücken,
- Van-der-Waals-Wechselwirkungen,
- Disulfidbrücken,
- konformationelle Flexibilität,
- Ligandenbindung,
- Proteingröße,
- Lösungsmittelzugänglichkeit
- und evolutionäre Randbedingungen.

Es wäre daher erstaunlich, wenn Hydrophobizität allein ausreichen würde, um Proteinstabilität präzise vorherzusagen.

Glücklicherweise ist überwachtes Lernen nicht auf eine einzige Eingangsvariable beschränkt.

Vielmehr erlaubt es auf natürliche Weise, mehrere biologische Merkmale in einem gemeinsamen Vorhersagemodell zu kombinieren.

---

## Multiple lineare Regression

Nehmen wir an, wir möchten nicht nur die Hydrophobizität, sondern zusätzlich die gesamte Oberflächenladung jedes Proteins berücksichtigen.

Anstatt jedes Protein durch nur ein Merkmal

$$
x
$$

zu beschreiben, verwenden wir nun zwei Merkmale,

$$
x_1
\quad\text{und}\quad
x_2.
$$

Unser Regressionsmodell wird damit zu

$$
\hat{y}
=
m_1x_1
+
m_2x_2
+
c.
$$

Die Interpretation bleibt genau dieselbe wie zuvor.

Jeder Koeffizient gibt an, wie stark das zugehörige Merkmal zur vorhergesagten biologischen Eigenschaft beiträgt.

Zum Beispiel

- beschreibt \(m_1\) den Beitrag der Oberflächenladung,
- während \(m_2\) den Beitrag der Hydrophobizität erfasst.

Lernen bedeutet erneut, diese Parameter aus experimentellen Daten zu schätzen.

Am Optimierungsproblem selbst ändert sich nichts.

Nur die Zahl der Parameter ist größer geworden.

---

## Von der Geraden zur Ebene

Mit einem zweiten Merkmal verändert sich die Geometrie des Modells.

Zuvor wurde jedes Protein durch eine einzelne Koordinate auf der horizontalen Achse repräsentiert.

Das Regressionsmodell war daher eine Gerade.

Mit zwei Eingangsmerkmalen wird jedes Protein durch zwei Koordinaten beschrieben.

Die Daten liegen nun in einem dreidimensionalen Raum:

- eine Achse für die Oberflächenladung,
- eine Achse für die Hydrophobizität
- und eine Achse für die Proteinstabilität.

Das Regressionsmodell ist jetzt keine Gerade mehr.

Es wird zu einer **Ebene**, die durch die Punktwolke der Beobachtungen verläuft.

Auch wenn die Visualisierung etwas komplexer wird, bleibt das zugrunde liegende Prinzip identisch.

Der Algorithmus sucht weiterhin nach jenen Modellparametern, die den Mean Squared Error minimieren.

Ob das Modell durch eine Gerade, eine Ebene oder eine höherdimensionale Fläche beschrieben wird, ist allein eine Folge der Anzahl der Eingangsmerkmale.

---

## Das Optimierungsproblem wächst ganz natürlich mit

Mit zusätzlichen Merkmalen kommen weitere Modellparameter hinzu.

Statt nur einen einzigen Regressionskoeffizienten zu optimieren, schätzen wir nun mehrere gleichzeitig.

Die Verlustfunktion hängt damit von mehreren Variablen ab,

$$
\mathrm{MSE}(m_1,m_2,\ldots).
$$

Entsprechend wird auch der Gradient mehrdimensional:

$$
\nabla
\mathrm{MSE}
=
\left(
\frac{\partial \mathrm{MSE}}{\partial m_1},
\frac{\partial \mathrm{MSE}}{\partial m_2},
\ldots
\right).
$$

Jede Komponente gibt an, wie ein bestimmter Parameter verändert werden sollte, um den Vorhersagefehler zu verringern.

Das Gradientenverfahren aktualisiert alle Parameter gleichzeitig.

Die Mathematik wird dadurch ausführlicher, doch der grundlegende Lernprozess bleibt unverändert.

Jede Iteration folgt weiterhin genau derselben Abfolge:

1. Den Gradienten berechnen.
2. Die Parameter aktualisieren.
3. Das neue Modell bewerten.
4. Bis zur Konvergenz wiederholen.

Gerade darin liegt eine bemerkenswerte Stärke des Gradientenverfahrens: Es skaliert nahezu mühelos von einem Parameter auf Millionen.

---

## Hochdimensionale biologische Daten

Zwei Eingangsvariablen lassen sich noch gut visualisieren, reale biologische Datensätze sind jedoch meist sehr viel komplexer.

In der modernen Bioinformatik werden routinemäßig Datensätze mit Hunderten, Tausenden oder sogar Millionen Variablen analysiert.

Eine Proteinsequenz kann zum Beispiel durch Merkmale beschrieben werden, die Informationen enthalten über

- Aminosäurezusammensetzung,
- physikochemische Eigenschaften,
- vorhergesagte Sekundärstruktur,
- intrinsische Unordnung,
- evolutionäre Konservierung,
- strukturelle Motive,
- Lösungsmittelzugänglichkeit
- und viele weitere Eigenschaften.

Ebenso kann ein Transkriptomik-Experiment gleichzeitig die Expressionswerte von Zehntausenden Genen erfassen.

Algorithmen des maschinellen Lernens sind speziell dafür entworfen, in solchen hochdimensionalen Räumen zu arbeiten.

Auch wenn Menschen solche Räume nicht mehr anschaulich visualisieren können, bleiben die mathematischen Prinzipien genau dieselben.

Jede biologische Probe wird als Punkt in einem hochdimensionalen Merkmalsraum dargestellt, und der Lernalgorithmus sucht nach den Parameterwerten, die die beobachteten biologischen Antworten am besten erklären.

---

## Von Feature Engineering zu Representation Learning

Historisch beruhten die meisten Vorhersagemodelle stark auf manuell konstruierten Merkmalen.

Forschende wählten gezielt biologische Messgrößen aus, von denen sie erwarteten, dass sie für die jeweilige Vorhersageaufgabe informativ seien.

Dieser Ansatz, das **Feature Engineering**, ist weiterhin sehr wertvoll, weil er jahrzehntelanges biologisches Wissen direkt in den Lernprozess einfließen lässt.

Neuere Entwicklungen im Deep Learning haben jedoch eine andere Strategie möglich gemacht.

Anstatt informative Merkmale vollständig explizit von Hand zu definieren, lernen neuronale Netze häufig nützliche interne Repräsentationen direkt aus Rohdaten.

Moderne Protein-Sprachmodelle werden beispielsweise direkt auf Aminosäuresequenzen trainiert.

Anstatt Hydrophobizität oder Ladung im Voraus zu berechnen, lernt das neuronale Netz Repräsentationen, die strukturelle, evolutionäre und funktionelle Information automatisch erfassen.

Diesen Prozess bezeichnet man als **Representation Learning**.

Interessanterweise entsprechen viele solcher gelernten Repräsentationen biologisch sinnvollen Konzepten, die zuvor bereits durch Feature Engineering identifiziert wurden.

Deep Learning ersetzt biologisches Wissen daher nicht.

Es eröffnet vielmehr neue Wege, um nützliche biologische Repräsentationen zu entdecken.

---

## Eine allgemeinere Perspektive

Unser Beispiel zur Proteinstabilität verdeutlicht ein Prinzip, das weit über Proteine hinausreicht.

Jedes Problem des überwachten Lernens besteht aus drei wesentlichen Komponenten.

Erstens müssen biologische Beobachtungen numerisch repräsentiert werden.

Zweitens verknüpft ein mathematisches Modell diese Merkmale mit der Zielgröße.

Drittens schätzt ein Optimierungsalgorithmus die Parameter, die die experimentellen Daten am besten erklären.

Die Komplexität des Modells kann dabei enorm zunehmen.

Ein lineares Regressionsmodell enthält vielleicht nur zwei Parameter.

Eine moderne Transformer-Architektur kann Milliarden besitzen.

Doch der konzeptionelle Ablauf bleibt derselbe.

Gerade das ist vielleicht die wichtigste Lehre dieses Kapitels.

Maschinelles Lernen wird nicht durch einen bestimmten Algorithmus definiert.

Es wird durch einen allgemeinen Rahmen definiert, in dem prädiktive Beziehungen aus Daten gelernt werden.

Die Methoden werden anspruchsvoller, aber die zugrunde liegenden Prinzipien bleiben erstaunlich stabil.

Wer diese Prinzipien verstanden hat, kann die weiterführenden Modelle der folgenden Kapitel wesentlich leichter einordnen.

---

### Lernziele

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein,

- zu erklären, warum biologische Vorhersagen in der Regel mehrere Merkmale erfordern,
- zu verstehen, wie multiple lineare Regression die einfache lineare Regression erweitert,
- zu beschreiben, wie sich das Gradientenverfahren natürlich auf mehrere Parameter verallgemeinert,
- zu erklären, warum moderne biologische Datensätze hochdimensional sind,
- zwischen Feature Engineering und Representation Learning zu unterscheiden.

### Konzeptionelle Zusammenfassung

Reale biologische Phänomene werden nur selten durch eine einzige Variable bestimmt. Die multiple lineare Regression erweitert die einfache Regression, indem sie mehrere biologisch sinnvolle Merkmale in einem gemeinsamen Vorhersagemodell kombiniert. Auch wenn dadurch die Zahl der Modellparameter wächst, bleibt das Optimierungsverfahren unverändert. Moderne Verfahren des maschinellen Lernens führen diese Idee weiter, indem sie informative Repräsentationen direkt aus Daten lernen und so Vorhersagen in extrem hochdimensionalen biologischen Systemen ermöglichen.

### Fragen zur Selbstkontrolle

1. Warum reicht ein einzelnes biologisches Merkmal für eine präzise Vorhersage oft nicht aus?
2. Wie erweitert die multiple lineare Regression die einfache lineare Regression?
3. Welches geometrische Objekt ersetzt die Regressionsgerade, wenn zwei Eingangsmerkmale verwendet werden?
4. Wie verändert sich der Gradient, wenn zusätzliche Modellparameter eingeführt werden?
5. Warum lässt sich das Gradientenverfahren auch in hochdimensionalen Räumen effizient anwenden?
6. Worin besteht der Unterschied zwischen Feature Engineering und Representation Learning?
7. Warum bleiben die konzeptionellen Grundlagen des überwachten Lernens auch für moderne Deep-Learning-Modelle gültig?
