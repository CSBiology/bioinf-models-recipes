---
title: "5.8 Formalisierung von Expectation Maximization"
sidebar:
  label: "5.8 Formalisierung von Expectation Maximization"
  order: 8
  group: "Part 2"
  part: "Part 2"
---

# **5.8 Formalisierung von Expectation Maximization**

### **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* zwischen Likelihood vollständiger Daten und Likelihood beobachteter Daten zu unterscheiden
* zu verstehen, warum sich die marginale Likelihood nicht direkt leicht optimieren lässt
* die EM-Hilfsfunktion $Q(\theta \mid \theta^{(t)})$ zu definieren
* die formalen Rollen von E-Schritt und M-Schritt zu beschreiben
* zu erklären, wie EM eine schwer handhabbare Optimierung in ein iteratives Verfahren transformiert

---

### **Zurück zum Motivproblem**

Wenn wir zum Problem der Motivsuche zurückkehren, wollen wir die EM-Idee nun präzise machen. Wir haben gesehen, dass die Schwierigkeit aus fehlender Information entsteht: Die Motivpositionen sind unbekannt, werden aber benötigt, um das Motivmodell zu schätzen.

Diese Situation ist nicht auf Motivsuche beschränkt. Allgemeiner gesprochen haben wir beobachtete Daten, aber ein Teil der Struktur, die diese Daten erklärt, ist verborgen. Unser Ziel besteht darin, die Parameter eines Modells zu schätzen, das die Beobachtungen trotz dieser Unvollständigkeit möglichst gut erklärt.

Um dies zu formalisieren, führen wir eine allgemeine Notation ein, die sowohl für das Münzwurfbeispiel als auch für Motivsuche gilt.

---

### **Beobachtete Daten, verborgene Variablen und Parameter**

Wir bezeichnen die beobachteten Daten mit $X$. In der Motivsuche entsprechen sie den Sequenzen. Die verborgenen Variablen bezeichnen wir mit $Z$; sie repräsentieren die unbekannten Motivpositionen. Schließlich bezeichnen wir die Modellparameter mit $\theta$, die das Motivmodell definieren.

Wären sowohl $X$ als auch $Z$ bekannt, könnten wir die *Likelihood vollständiger Daten*

$$
P(X, Z \mid \theta)
$$

aufschreiben. Diese Größe bezüglich $\theta$ zu maximieren wäre typischerweise vergleichsweise einfach, weil die verborgene Struktur explizit vorliegen würde.

In der Praxis beobachten wir jedoch nur $X$, nicht aber $Z$. Die relevante Größe ist daher die *marginale Likelihood*

$$
P(X \mid \theta) = \sum_Z P(X, Z \mid \theta),
$$

die alle möglichen Konfigurationen der verborgenen Variablen berücksichtigt.

---

### **Die Schwierigkeit der marginalen Likelihood**

Auf den ersten Blick könnte man versuchen, diese marginale Likelihood direkt zu maximieren. Dies erweist sich jedoch aus zwei Gründen als schwierig.

Erstens kann die Zahl möglicher Konfigurationen von $Z$ sehr groß sein. In der Motivsuche entspricht jede mögliche Zuordnung von Motivpositionen einer solchen Konfiguration.

Zweitens erfolgt Optimierung typischerweise über die Log-Likelihood:

$$
\log P(X \mid \theta) = \log \sum_Z P(X, Z \mid \theta).
$$

Dass der Logarithmus außerhalb der Summe steht, verhindert eine Zerlegung in einfachere Terme. Dadurch wird direkte Optimierung in vielen Fällen unhandhabbar.

Genau hier setzt die EM-Idee an.

---

### **Einführen eines Hilfsziels**

Anstatt die marginale Likelihood direkt zu maximieren, führt EM ein alternatives Ziel ein, das leichter zu behandeln ist.

Für eine aktuelle Parameterschätzung $\theta^{(t)}$ betrachten wir die bedingte Verteilung der verborgenen Variablen:

$$
P(Z \mid X, \theta^{(t)}).
$$

Diese Verteilung repräsentiert unsere momentane Überzeugung über die verborgene Struktur.

Auf ihrer Grundlage definieren wir die Funktion

$$
Q(\theta \mid \theta^{(t)}) = \mathbb{E}_{Z \mid X, \theta^{(t)}} \left[ \log P(X, Z \mid \theta) \right].
$$

Diese Funktion kann als erwartete Log-Likelihood der vollständigen Daten unter der aktuellen Schätzung der verborgenen Variablen interpretiert werden. Entscheidend ist, dass sie wesentlich leichter zu optimieren ist als die ursprüngliche marginale Likelihood.

---

### **Der Expectation-Schritt**

Im Expectation-Schritt berechnen wir die Verteilung $P(Z \mid X, \theta^{(t)})$ und verwenden sie, um die Funktion $Q(\theta \mid \theta^{(t)})$ auszuwerten.

Konzeptionell entspricht dies der Schätzung der verborgenen Variablen auf Grundlage des aktuellen Modells. Anstatt eine einzige Konfiguration von $Z$ auszuwählen, berücksichtigen wir alle möglichen Konfigurationen und gewichten sie entsprechend ihrer Wahrscheinlichkeit.

Dieser Schritt entspricht genau dem, was wir im Münzwurfbeispiel gesehen haben, wo jede Beobachtungsfolge probabilistisch zu beiden Münzen beitragen konnte.

---

### **Der Maximization-Schritt**

Im Maximization-Schritt aktualisieren wir die Parameter, indem wir die Funktion $Q$ maximieren:

$$
\theta^{(t+1)} = \arg\max_{\theta} Q(\theta \mid \theta^{(t)}).
$$

Dieser Schritt liefert neue Parameterwerte, die die Daten unter den aktuellen probabilistischen Zuordnungen der verborgenen Variablen am besten erklären.

In vielen Fällen, auch in der Motivsuche, hat diese Maximierung eine einfache Form und entspricht der Berechnung gewichteter Mittelwerte oder Zählungen, wie wir sie bereits kennengelernt haben.

---

### **Warum dieses Verfahren funktioniert**

An dieser Stelle lässt sich der EM-Algorithmus als Transformation eines schwierigen Optimierungsproblems in eine Folge leichterer Teilprobleme verstehen.

Anstatt die marginale Likelihood direkt zu maximieren, alternieren wir zwischen:

* der Schätzung der verborgenen Variablen im E-Schritt
* und der Optimierung der Parameter im M-Schritt

Jeder dieser Schritte vereinfacht das Problem, indem ein Teil der Unsicherheit vorübergehend festgehalten wird.

Eine zentrale Eigenschaft dieses Verfahrens besteht darin, dass die Likelihood der beobachteten Daten in jeder Iteration zunimmt oder zumindest nicht abnimmt. Dadurch konvergiert der Algorithmus zu einer stabilen Lösung.

---

### **Vom Formalismus zurück zur Biologie**

Obwohl die Notation abstrakt erscheinen mag, bleibt die zugrunde liegende Idee eng mit dem Problem der Motivsuche verbunden.

* $X$ entspricht den Sequenzen
* $Z$ entspricht den unbekannten Motivpositionen
* $\theta$ entspricht dem Motivmodell

Der EM-Algorithmus liefert einen prinzipiellen Weg, $\theta$ zu schätzen, obwohl $Z$ nicht beobachtet wird. Durch die iterative Verfeinerung beider Größen löst er die zuvor identifizierte zirkuläre Abhängigkeit auf.

Im nächsten Abschnitt untersuchen wir das Verhalten dieses Verfahrens genauer und interpretieren, was der Algorithmus im Verlauf seiner Iterationen tatsächlich optimiert.

---

### **Fragen zur Selbstkontrolle**

1. Worin besteht der Unterschied zwischen Likelihood vollständiger Daten und marginaler Likelihood?
2. Warum ist die marginale Likelihood schwer direkt zu optimieren?
3. Was repräsentiert die Funktion $Q(\theta \mid \theta^{(t)})$?
4. Was wird im E-Schritt berechnet, und wie ist dies zu interpretieren?
5. Was wird im M-Schritt optimiert?
6. Warum verbessert EM die Likelihood in jeder Iteration?
