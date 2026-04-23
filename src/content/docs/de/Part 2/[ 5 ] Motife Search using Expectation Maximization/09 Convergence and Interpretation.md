---
title: "5.9 Konvergenz und Interpretation"
sidebar:
  label: "5.9 Konvergenz und Interpretation"
  order: 9
  group: "Part 2"
  part: "Part 2"
---

# **5.9 Konvergenz und Interpretation**

### **Lernziele**

Nach der Bearbeitung dieses Abschnitts sollten Sie in der Lage sein:

* zu erklären, warum der EM-Algorithmus die Likelihood in jeder Iteration verbessert
* die Idee von EM als Optimierung einer unteren Schranke zu verstehen
* Konvergenz im Sinn stabiler Parameterwerte zu interpretieren
* die Rolle lokaler Optima in EM zu erkennen
* EM als Verfahren probabilistischer Inferenz und nicht als harte Zuordnung zu verstehen

---

### **Warum Iteration zu Verbesserung führt**

Im vorherigen Abschnitt haben wir den EM-Algorithmus als iteratives Verfahren eingeführt, das zwischen der Schätzung verborgener Variablen und der Aktualisierung von Modellparametern alterniert. Daraus ergibt sich nun eine natürliche Frage: Warum funktioniert dieses Verfahren überhaupt? Genauer: Warum führt die Wiederholung dieser beiden Schritte zu einer sinnvollen Lösung?

Eine zentrale Eigenschaft des EM-Algorithmus ist, dass die Likelihood der beobachteten Daten von einer Iteration zur nächsten nicht abnimmt. Bezeichnen wir die Parameterschätzung in Iteration $t$ mit $\theta^{(t)}$, dann ist die Folge

$$
\log P(X \mid \theta^{(t)})
$$

monoton wachsend.

Diese Eigenschaft stellt sicher, dass jede Iteration die Qualität des Modells hinsichtlich seiner Erklärungskraft für die beobachteten Daten verbessert oder zumindest nicht verschlechtert.

---

### **Die Perspektive einer unteren Schranke**

Um zu verstehen, warum diese Verbesserung auftritt, lohnt sich ein erneuter Blick auf die Funktion $Q(\theta \mid \theta^{(t)})$, die wir zuvor eingeführt haben.

Diese Funktion kann so interpretiert werden, dass sie eine *untere Schranke* der wahren Log-Likelihood definiert. In jeder Iteration konstruiert der E-Schritt eine solche Schranke auf Grundlage der aktuellen Parameterschätzung. Der M-Schritt wählt anschließend neue Parameter, die diese Schranke maximieren.

Man kann sich diesen Prozess geometrisch vorstellen. Beim aktuellen Parameterwert $\theta^{(t)}$ konstruieren wir eine Funktion, die die wahre Log-Likelihood an genau diesem Punkt berührt und überall sonst unter ihr liegt. Indem wir diese Hilfsfunktion maximieren, gelangen wir zu einem neuen Parameterwert $\theta^{(t+1)}$, der die wahre Log-Likelihood verbessert.

Diese Sichtweise erklärt, warum EM konsistent Fortschritt macht: Jeder Schritt optimiert eine Funktion, die garantiert eine gültige Approximation des eigentlichen Ziels ist.

---

### **Was Konvergenz bedeutet**

Der EM-Algorithmus wiederholt E-Schritt und M-Schritt so lange, bis sich die Parameterschätzungen stabilisieren. In der Praxis bedeutet dies, dass die Veränderung der Likelihood oder der Parameter vernachlässigbar klein wird.

An diesem Punkt hat der Algorithmus einen *Fixpunkt* erreicht. Die aktuellen Parameterwerte sind mit den erwarteten verborgenen Variablen konsistent, und weitere Iterationen führen zu keiner nennenswerten Verbesserung mehr.

Wichtig ist jedoch, dass Konvergenz nicht notwendigerweise bedeutet, dass das globale Optimum gefunden wurde. Vielmehr zeigt sie an, dass die lokale Struktur der Likelihood-Funktion keine weitere Verbesserung mehr nahelegt.

---

### **Die Rolle lokaler Optima**

In vielen realistischen Problemen, darunter auch die Motivsuche, kann die Likelihood-Funktion mehrere lokale Maxima besitzen. Der EM-Algorithmus konvergiert garantiert zu einem dieser Maxima, aber nicht notwendigerweise zum bestmöglichen.

Das bedeutet, dass das Endergebnis von den anfänglichen Parameterwerten abhängen kann. Unterschiedliche Startpunkte können zu unterschiedlichen Lösungen führen, von denen einige die wahre zugrunde liegende Struktur besser widerspiegeln als andere.

In der Praxis wird diese Einschränkung häufig dadurch abgefedert, dass der Algorithmus mit mehreren unterschiedlichen Initialisierungen gestartet und anschließend die Lösung mit der höchsten Likelihood ausgewählt wird.

---

### **Weiche Zuordnungen und graduelle Verfeinerung**

Ein wichtiges konzeptionelles Merkmal von EM ist die Verwendung *weicher Zuordnungen*. Anstatt definitive Entscheidungen über verborgene Variablen zu treffen, arbeitet der Algorithmus mit einer Wahrscheinlichkeitsverteilung über mögliche Konfigurationen.

Dadurch bleibt das Modell in frühen Iterationen flexibel, wenn die Unsicherheit noch hoch ist. Im Verlauf des Verfahrens konzentrieren sich diese Wahrscheinlichkeiten häufig zunehmend und spiegeln damit wachsende Sicherheit in der erschlossenen Struktur wider.

Diese graduelle Verfeinerung steht im Gegensatz zu Verfahren mit harten Zuordnungen, die sich zu früh auf potenziell falsche Lösungen festlegen können.

---

### **Zurück zur Motivsuche**

Im Kontext der Motivsuche haben diese Eigenschaften unmittelbare Konsequenzen.

* Die monotone Verbesserung stellt sicher, dass jede Iteration ein Motivmodell erzeugt, das die beobachteten Sequenzen besser erklärt.
* Das Auftreten lokaler Optima spiegelt die Komplexität biologischer Daten wider, in denen mehrere Muster die Beobachtungen teilweise erklären können.
* Die Verwendung weicher Zuordnungen erlaubt es dem Algorithmus, mehrere mögliche Motivpositionen zu berücksichtigen, bevor er auf eine konsistente Lösung zuläuft.

Gemeinsam erklären diese Eigenschaften, warum EM besonders gut zu Problemen passt, in denen Struktur verborgen ist und aus verrauschten Daten erschlossen werden muss.

Im nächsten Abschnitt kehren wir vollständig in den biologischen Kontext zurück und wenden den EM-Rahmen direkt auf Motivsuche an, sodass der Zusammenhang zwischen abstraktem Algorithmus und praktischer Anwendung explizit wird.

---

### **Fragen zur Selbstkontrolle**

1. Warum verbessert der EM-Algorithmus die Likelihood in jeder Iteration?
2. Was bedeutet es, dass EM eine untere Schranke der Log-Likelihood optimiert?
3. Was bedeutet Konvergenz im Kontext von EM?
4. Warum ist EM nicht garantiert global optimal?
5. Was sind weiche Zuordnungen, und warum sind sie wichtig?
6. Wie hängen diese Eigenschaften mit Motivsuche zusammen?
