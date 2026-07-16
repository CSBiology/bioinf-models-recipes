---
title: "11.3 Logistische Regression: Wahrscheinlichkeiten vorhersagen"
sidebar:
  label: "11.3 Logistische Regression: Wahrscheinlichkeiten vorhersagen"
  order: 3
  group: "Part 3"
  part: "Part 3"
---

# 11.3 Logistische Regression: Wahrscheinlichkeiten vorhersagen

## Lineare Regression zur Klassifikation erweitern

Der einfachste Klassifikationsalgorithmus ist eng mit einem Modell verwandt, das wir bereits gut kennen.

In Kapitel 9 haben wir die **lineare Regression** eingeführt, bei der eine biologische Eigenschaft als gewichtete Kombination mehrerer Eingangsmerkmale vorhergesagt wurde,

$$
\hat{y}=w_1x_1+w_2x_2+\cdots+w_nx_n+b.
$$

Dieses Modell funktioniert gut, wenn die Zielgröße kontinuierlich ist, etwa Proteinstabilität, Enzymaktivität oder Genexpression.

Klassifikationsprobleme sind jedoch anders strukturiert.

Anstatt einen numerischen Wert vorherzusagen, möchten wir jede Beobachtung einer von mehreren Klassen zuordnen.

Angenommen, wir möchten vorhersagen, ob ein Protein im Chloroplasten oder im Mitochondrium lokalisiert ist.

Ein lineares Regressionsmodell könnte dann Vorhersagen wie

$$
\hat{y}=2.3,\qquad
\hat{y}=-1.7,\qquad
\hat{y}=15.2
$$

erzeugen.

Solche Zahlen besitzen keine offensichtliche biologische Bedeutung.

Was sollte etwa eine Vorhersage von 15,2 bedeuten?

Es ist daher klar, dass lineare Regression nicht einfach unverändert auf Klassifikationsprobleme angewendet werden kann.

Anstelle beliebiger numerischer Werte möchten wir Vorhersagen, die sich als **Wahrscheinlichkeiten** interpretieren lassen.

---

## Von Scores zu Wahrscheinlichkeiten

Anstatt direkt zu fragen

> **Zu welcher Klasse sollte dieses Protein gehören?**

fragen wir zunächst

> **Wie wahrscheinlich ist es, dass dieses Protein zu einer bestimmten Klasse gehört?**

Wahrscheinlichkeiten haben mehrere Vorteile.

Erstens sind sie von Natur aus auf Werte zwischen 0 und 1 beschränkt.

Zweitens liefern sie Information über die Sicherheit einer Vorhersage.

Zum Beispiel

- deutet eine Wahrscheinlichkeit von 0,99 auf eine sehr sichere Vorhersage hin,
- während eine Wahrscheinlichkeit von 0,52 erhebliche Unsicherheit signalisiert.

Gerade biologisch ist dieser Unterschied oft wichtig.

Zwei Proteine können beide als Chloroplastenproteine klassifiziert werden, obwohl die eine Vorhersage durch sehr starke Evidenz gestützt wird und die andere unsicher bleibt.

Anstatt nur ein Klassenlabel zu erzeugen, schätzt logistische Regression daher die Wahrscheinlichkeit

$$
P(y=1|x),
$$

dass eine Beobachtung zu einer bestimmten Klasse gehört.

Die endgültige Klassenvorhersage entsteht dann durch die Anwendung eines Entscheidungsschwellenwerts.

Bei binärer Klassifikation wählt man diesen Schwellenwert häufig als 0,5.

Vorhersagen oberhalb von 0,5 werden einer Klasse zugeordnet, Vorhersagen darunter der anderen.

---

## Die Sigmoidfunktion

Wie können wir die unbeschränkte Ausgabe eines linearen Modells in eine gültige Wahrscheinlichkeit umwandeln?

Die Lösung ist überraschend elegant.

Anstatt die lineare Vorhersage direkt zu verwenden, schicken wir sie durch eine nichtlineare Transformation, die **Sigmoidfunktion**.

Das lineare Modell berechnet zunächst den Score

$$
z
=
w_1x_1+w_2x_2+\cdots+w_nx_n+b.
$$

Dieser Score kann beliebig positive oder negative Werte annehmen.

Die Sigmoidfunktion transformiert ihn dann in eine Wahrscheinlichkeit,

$$
P(y=1|x)
=
\frac{1}{1+e^{-z}}.
$$

Die Sigmoidfunktion besitzt mehrere bemerkenswerte Eigenschaften.

Für stark negative Werte von \(z\) nähert sich die vorhergesagte Wahrscheinlichkeit null.

Für stark positive Werte nähert sie sich eins.

Im mittleren Bereich führen kleine Änderungen der Eingabe zu allmählichen Änderungen der vorhergesagten Wahrscheinlichkeit.

Dadurch entsteht ein glatter Übergang zwischen den beiden Klassen und kein abrupter Sprung.

Gerade dieses glatte Verhalten erleichtert das Lernen erheblich und liefert für jede einzelne Vorhersage eine sinnvolle Schätzung der Sicherheit.

---

## Eine geometrische Interpretation

Auch wenn logistische Regression Wahrscheinlichkeiten vorhersagt, ist ihre geometrische Interpretation fast identisch mit der der linearen Regression.

Die lineare Kombination

$$
z=w_1x_1+\cdots+w_nx_n+b
$$

definiert weiterhin eine Hyperebene im Merkmalsraum.

Diese Hyperebene markiert genau den Punkt, an dem die vorhergesagte Wahrscheinlichkeit den Wert 0,5 annimmt.

Mit anderen Worten: Sie bildet die **Entscheidungsgrenze** zwischen den beiden Klassen.

Beobachtungen auf der einen Seite der Grenze werden überwiegend einer Klasse zugeordnet.

Beobachtungen auf der anderen Seite der anderen.

Die Sigmoidfunktion übersetzt den Abstand zu dieser Grenze lediglich in eine Wahrscheinlichkeit.

Weit entfernt von der Grenze werden die Vorhersagen zunehmend sicher.

In ihrer Nähe werden sie unsicherer.

Diese Interpretation macht eine wichtige Eigenschaft logistische Regression sichtbar.

Sie klassifiziert Beobachtungen nicht nur.

Sie schätzt auch, **mit welcher Sicherheit** diese Klassifikation vorgenommen werden kann.

---

## Das Modell lernen

Aus Sicht der Optimierung ähnelt logistische Regression der linearen Regression stark.

Das Modell enthält weiterhin anpassbare Parameter,

$$
w_1,w_2,\ldots,w_n,b,
$$

die aus gelabelten Trainingsdaten geschätzt werden müssen.

Der Unterschied liegt in der Verlustfunktion.

Bei der Regression wurde die Vorhersagequalität mit dem Mean Squared Error bewertet.

Bei der Klassifikation vergleichen wir dagegen vorhergesagte Wahrscheinlichkeiten mit den beobachteten Klassenlabels.

Daraus ergibt sich eine andere Verlustfunktion, die als **Cross-Entropy-Loss** bezeichnet wird und die wir in Kapitel 12 bei der Behandlung neuronaler Netze genauer einführen werden.

Trotz dieses Wechsels bleibt der Lernprozess vertraut.

Die Parameter werden iterativ mit dem Gradientenverfahren angepasst, bis sich der Vorhersagefehler nicht weiter verringern lässt.

Logistische Regression ist daher kein grundsätzlich neuer Lernalgorithmus.

Sie ist vielmehr die natürliche Erweiterung der linearen Regression von kontinuierlichen Ausgaben zur probabilistischen Klassifikation.

---

## Stärken und Grenzen

Logistische Regression gehört in Biologie und Medizin zu den am häufigsten verwendeten Klassifikationsmethoden.

Sie bietet mehrere wichtige Vorteile.

Sie ist mathematisch einfach, rechnerisch effizient und liefert Wahrscheinlichkeiten, die sich gut interpretieren lassen.

Darüber hinaus behalten die Modellparameter oft eine biologische Bedeutung, sodass sich abschätzen lässt, wie stark einzelne Merkmale das vorhergesagte Ergebnis beeinflussen.

Aus diesem Grund wird logistische Regression in der Bioinformatik häufig als Basisklassifikator eingesetzt.

Sie hat jedoch auch Grenzen.

Weil die Entscheidungsgrenze linear ist, kann sie nur solche Klassen trennen, die im Merkmalsraum annähernd linear separierbar sind.

Viele biologische Datensätze zeigen deutlich kompliziertere Beziehungen.

Proteine mit unterschiedlicher Lokalisation können zum Beispiel unregelmäßig geformte Regionen im Merkmalsraum besetzen, die sich nicht durch eine einzige Gerade trennen lassen.

Um solche Situationen zu modellieren, benötigen wir flexiblere Klassifikationsverfahren.

Einer der intuitivsten Ansätze dafür ist der **Entscheidungsbaum**, der die Entscheidungsgrenze konstruiert, indem er den Merkmalsraum rekursiv in immer kleinere Regionen zerlegt.

---

### Zentrale Konzepte

- Logistische Regression erweitert lineare Regression auf Klassifikationsprobleme.
- Anstatt kontinuierliche Werte vorherzusagen, schätzt logistische Regression Klassenwahrscheinlichkeiten.
- Die Sigmoidfunktion transformiert beliebige numerische Scores in Wahrscheinlichkeiten zwischen 0 und 1.
- Die Entscheidungsgrenze entspricht einer vorhergesagten Wahrscheinlichkeit von 0,5.
- Logistische Regression bleibt ein linearer Klassifikator und eignet sich daher besonders für annähernd linear separierbare Daten.

---

### Zusammenfassung

Logistische Regression ist der einfachste probabilistische Klassifikator und bildet eine natürliche Brücke zwischen Regression und Klassifikation. Durch die Kombination eines linearen Modells mit der Sigmoidfunktion werden numerische Scores in biologisch interpretierbare Wahrscheinlichkeiten überführt. Auch wenn die Entscheidungsgrenze linear bleibt, bietet logistische Regression für viele Klassifikationsprobleme einen eleganten und gut verständlichen Rahmen. Komplexere biologische Beziehungen erfordern jedoch häufig Klassifikatoren mit flexibleren Entscheidungsgrenzen.

---

### Fragen zur Selbstkontrolle

1. Warum kann lineare Regression nicht direkt für Klassifikation verwendet werden?
2. Warum ist es vorteilhaft, Wahrscheinlichkeiten und nicht nur Klassenlabels vorherzusagen?
3. Welche Rolle spielt die Sigmoidfunktion in der logistischen Regression?
4. Wie lautet die geometrische Interpretation der Entscheidungsgrenze?
5. In welcher Beziehung steht logistische Regression zur linearen Regression?
6. Unter welchen Bedingungen wird logistische Regression voraussichtlich schlecht abschneiden?
