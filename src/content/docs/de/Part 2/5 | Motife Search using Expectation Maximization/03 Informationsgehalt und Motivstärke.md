---
title: "5.3 Informationsgehalt und Motivstärke"
sidebar:
  label: "5.3 Informationsgehalt und Motivstärke"
  order: 3
  group: "Part 2"
  part: "Part 2"
---

# **5.3 Informationsgehalt und Motivstärke**

### **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* das Konzept von Information in probabilistischen Begriffen zu erklären
* Entropie zu definieren und als Maß für Unsicherheit zu interpretieren
* zu verstehen, wie Entropie mit Variabilität in Sequenzmotiven zusammenhängt
* den Informationsgehalt einer Motivposition zu definieren
* starke und schwache Motive anhand statistischer Eigenschaften zu unterscheiden

---

Die probabilistische Darstellung von Motiven liefert einen Rahmen, um Sequenzmuster durch positionsspezifische Präferenzen zu beschreiben. Allerdings sind nicht alle Motive gleichermaßen informativ. Manche zeigen starke, hoch konservierte Muster, die sich deutlich von Hintergrundsequenz abheben, während andere diffus sind und sich nur schwer von zufälliger Variation unterscheiden lassen. Um diesen Unterschied präzise zu fassen, benötigen wir ein quantitatives Maß dafür, wie viel „Signal“ ein Motiv trägt.

Auf intuitiver Ebene ist Information mit Überraschung verbunden. Die Beobachtung eines sehr unwahrscheinlichen Ereignisses trägt mehr Information als die Beobachtung eines erwartbaren Ereignisses. Diese Idee lässt sich formal durch die Zuordnung einer Informationsmenge zu einem Ereignis mit Wahrscheinlichkeit $p$ ausdrücken:

$$
I(p) = -\log(p),
$$

sodass seltene Ereignisse größere Werte liefern, während sicher eintretende Ereignisse keinen Informationsgewinn tragen.

Im Kontext von Sequenzmotiven spiegelt diese Definition eine wichtige biologische Intuition wider. Wenn an einer bestimmten Position fast immer dasselbe Nukleotid beobachtet wird, ist die Beobachtung dieses Nukleotids wenig überraschend und trägt daher nur wenig Information. Tritt dagegen an dieser Position ein seltenes Nukleotid auf, ist dies sehr informativ, weil es vom erwarteten Muster abweicht.

Während diese Definition einzelne Ereignisse betrifft, werden Motive durch Symbolverteilungen an jeder Position charakterisiert. Um die gesamte Unsicherheit an einer Position zusammenzufassen, führen wir das Konzept der *Entropie* ein. Entropie misst die erwartete Informationsmenge beim Ziehen aus einer Wahrscheinlichkeitsverteilung. Für eine Position mit Wahrscheinlichkeiten $p_A, p_C, p_G, p_T$ ist die Entropie definiert als

$$
H = - \sum_{k} p_k \log_2 p_k,
$$

wobei sich die Summe über alle möglichen Symbole erstreckt.

Positionen mit hoher Entropie sind stark variabel und daher weniger informativ, während Positionen mit niedriger Entropie stärker eingeschränkt sind und stärker zur Definition des Motivs beitragen.

---

### **Beispielkasten: Entropie als erwartete Information**

Um Intuition für Entropie zu gewinnen, betrachten wir ein einfaches Experiment. Angenommen, wir ziehen wiederholt eine Kugel aus einem Behälter, der Kugeln in drei Farben enthält: rot, gelb und blau. Die Ziehungswahrscheinlichkeiten seien nicht gleich verteilt. Nehmen wir beispielsweise an, dass rot mit Wahrscheinlichkeit $\frac{4}{9}$ auftritt, blau mit $\frac{3}{9}$ und gelb mit $\frac{2}{9}$.

Beobachten wir eine rote Kugel, so beträgt die gewonnene Information

$$
I(\text{rot}) = -\log_2\left(\frac{4}{9}\right) \approx 1.17 \text{ bits}.
$$

Beobachten wir dagegen eine gelbe Kugel, die seltener ist, so erhalten wir mehr Information:

$$
I(\text{gelb}) = -\log_2\left(\frac{2}{9}\right) \approx 2.17 \text{ bits}.
$$

Dies spiegelt das allgemeine Prinzip wider, dass seltene Ereignisse informativer sind als häufige.

Die Entropie fasst diese Werte zu einer einzigen Größe zusammen, die die *erwartete* Information pro Ziehung angibt:

$$
H = -\left( \frac{4}{9} \log_2 \frac{4}{9} + \frac{3}{9} \log_2 \frac{3}{9} + \frac{2}{9} \log_2 \frac{2}{9} \right) \approx 1.53 \text{ bits}.
$$

Dieser Wert quantifiziert die Unsicherheit des Experiments. Wären alle Ergebnisse gleich wahrscheinlich, wäre die Entropie größer und die Unvorhersagbarkeit entsprechend höher. Würde dagegen ein Ergebnis vollständig dominieren, nähme die Entropie Werte nahe null an.

---

Dieses Beispiel verdeutlicht die zentrale Idee: Entropie misst, wie vorhersagbar ein System ist. Im Zusammenhang mit Sequenzmotiven erlaubt sie es uns zu quantifizieren, wie stark eine Position die möglichen Symbole einschränkt.

Zur biologischen Interpretation der Entropie ist der Vergleich mit einem Hintergrundmodell hilfreich. Für DNA-Sequenzen bietet sich als natürliche Referenz eine Gleichverteilung über die vier Nukleotide an, bei der jedes mit Wahrscheinlichkeit $\frac{1}{4}$ auftritt. Diese Verteilung hat maximale Entropie von 2 Bits und entspricht damit vollständiger Unsicherheit. Eine Motivposition, die dieser Hintergrundverteilung ähnelt, trägt nur wenig Information, weil sie Motivinstanzen kaum von Zufallssequenz unterscheidet.

Der *Informationsgehalt* einer Motivposition wird daher als Reduktion der Unsicherheit relativ zum Hintergrund definiert. Positionen, an denen ein Nukleotid dominiert, haben geringe Entropie und hohen Informationsgehalt, während Positionen mit annähernd gleichverteilten Symbolen kaum Information beitragen. Dies stimmt eng mit biologischer Intuition überein: Konservierte Positionen sind oft funktionell bedeutsam, variable Positionen weniger.

Über das gesamte Motiv hinweg kann man den Gesamtinformationsgehalt als Summe der Beiträge einzelner Positionen definieren. Dies liefert ein globales Maß dafür, wie stark sich das Motiv von Hintergrundsequenz unterscheidet und wie leicht es demnach entdeckt werden sollte.

Aus dieser Perspektive wird klar, was *starke* von *schwachen* Motiven unterscheidet. Starke Motive zeigen an mehreren Positionen ausgeprägte Präferenzen und tragen daher hohen Informationsgehalt. Schwache Motive weichen nur geringfügig vom Hintergrund ab und sind deshalb deutlich schwieriger zu entdecken. In solchen Fällen ist das Signal über viele Sequenzen verteilt und muss durch statistische Verfahren akkumuliert werden.

Damit kehren wir zur zentralen Herausforderung der Motivsuche zurück. Selbst bei einem wohldefinierten probabilistischen Modell kann das Signal schwach sein und in einer großen Menge von Hintergrundsequenz verborgen liegen. Im nächsten Abschnitt formalisieren wir dieses Problem und zeigen, warum es zu einer grundlegenden zirkulären Abhängigkeit zwischen Motivstruktur und Motivpositionen führt.

---

### **Fragen zur Selbstkontrolle**

1. Was repräsentiert die Größe $I(p) = -\log(p)$, und wie sollte sie interpretiert werden?
2. Was ist Entropie, und wie hängt sie mit Unsicherheit in einer Wahrscheinlichkeitsverteilung zusammen?
3. Warum tragen Positionen mit hoher Entropie weniger Information in einem Motiv?
4. Wie groß ist die Entropie einer gleichverteilten DNA-Hintergrundverteilung, und warum ist sie maximal?
5. Wie wird der Informationsgehalt einer Motivposition definiert?
6. Warum sind schwache Motive schwieriger zu entdecken als starke Motive?
