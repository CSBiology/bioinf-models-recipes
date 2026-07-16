---
title: "10.3 Wann wird ein Modell zu komplex?"
sidebar:
  label: "10.3 Wann wird ein Modell zu komplex?"
  order: 3
  group: "Part 3"
  part: "Part 3"
---

# 10.3 Wann wird ein Modell zu komplex?

## Die Versuchung der perfekten Anpassung

Angenommen, wir erhöhen die Flexibilität unseres Modells immer weiter.

Zunächst scheint dies eine ausgezeichnete Strategie zu sein. Je flexibler das Modell wird, desto genauer folgt es den Trainingsdaten. Der Vorhersagefehler sinkt, und das Modell scheint den biologischen Zusammenhang besser zu beschreiben.

Irgendwann geschieht jedoch etwas Bemerkenswertes.

Das Modell beginnt nicht nur den zugrunde liegenden biologischen Trend zu erfassen, sondern auch jede kleine Schwankung in den Daten. Anstatt den allgemeinen Zusammenhang zwischen Hydrophobizität und Proteinstabilität zu beschreiben, passt es sich einzelnen Beobachtungen an, die womöglich lediglich experimentelle Unsicherheit oder natürliche biologische Variation widerspiegeln.

An diesem Punkt kann das Modell nahezu exakt durch jeden gemessenen Datenpunkt verlaufen.

Seine Leistung auf den Trainingsdaten wirkt fast perfekt.

Intuitiv könnte man daraus schließen, dass dies das bestmögliche Modell sein müsse.

Überraschenderweise ist diese Schlussfolgerung oft falsch.

Die Fähigkeit, vorhandene Beobachtungen zu erklären, bedeutet nicht zwangsläufig, auch künftige Beobachtungen vorhersagen zu können.

---

## Ein Gedankenexperiment: die Wahrsagerin in Ausbildung

Um zu verstehen, warum das so ist, betrachten wir ein kleines Gedankenexperiment.

Stellen wir uns eine Wahrsagerin in Ausbildung vor, die gerade begonnen hat, auf einem Markt Vorhersagen anzubieten. Bevor sie ihren Stand eröffnet, erhält sie von einer erfahrenen Wahrsagerin zwei Ratschläge.

Der erste Ratschlag ist naheliegend:

> **Deine Vorhersagen sollten möglichst überzeugend und informativ klingen.**

Menschen erwarten konkrete Aussagen und keine vagen Floskeln. Eine Vorhersage wie

> "In Ihrer Zukunft könnte etwas Interessantes geschehen."

ist zwar schwer zu widerlegen, aber auch kaum nützlich.

Die Wahrsagerin in Ausbildung lernt daher, immer spezifischere Vorhersagen zu machen.

Der zweite Ratschlag ist subtiler:

> **Mache niemals Vorhersagen, die sich leicht als falsch erweisen lassen.**

Wenn sie mit großer Sicherheit vorhersagt, jemand werde in der nächsten Woche reich, und dies nicht eintritt, verliert sie sofort ihre Glaubwürdigkeit.

Erfolgreiche Wahrsagerinnen formulieren ihre Vorhersagen daher so, dass sie spezifisch erscheinen und zugleich allgemein genug bleiben, um nicht leicht widerlegt zu werden.

So amüsant diese Geschichte ist, sie veranschaulicht ein überraschend tiefes Prinzip prädiktiver Modellierung.

Gute Vorhersagen müssen zwei konkurrierende Anforderungen ausbalancieren.

Sie sollten

- informativ genug sein, um nützlich zu sein,
- aber allgemein genug bleiben, um auch für zukünftige Beobachtungen gültig zu bleiben.

Genau dasselbe Gleichgewicht muss auch im maschinellen Lernen erreicht werden.

---

## Auswendiglernen ist nicht Lernen

Stellen wir uns nun vor, unsere Wahrsagerin versucht sich zu verbessern, indem sie sich jede frühere Kundin und jeden früheren Kunden exakt merkt.

Wenn jemand erneut an den Stand kommt, erinnert sie sich genau daran, was beim letzten Besuch passiert ist, und wiederholt einfach eine passende Vorhersage.

Für bekannte Personen scheint diese Strategie erstaunlich erfolgreich.

Sobald jedoch eine neue Person auftaucht, weiß sie nicht mehr, was sie sagen soll.

Auswendiglernen erweist sich damit nicht als Vorhersagefähigkeit.

Es reproduziert lediglich Vergangenes.

Genau dieselbe Gefahr besteht auch für Modelle des maschinellen Lernens.

Ein hochflexibles Modell kann effektiv jede einzelne Beobachtung des Trainingsdatensatzes auswendig lernen.

Sein Trainingsfehler wird dadurch extrem klein, weil nahezu jedes frühere Beispiel perfekt angepasst wurde.

Wird es jedoch auf eine neue biologische Probe angewendet, liefert es oft überraschend schlechte Ergebnisse.

Darin zeigt sich einer der wichtigsten Unterschiede im maschinellen Lernen:

> **Lernen bedeutet, allgemeine Prinzipien zu entdecken, und nicht, einzelne Beobachtungen auswendig zu lernen.**

Der Zweck eines Vorhersagemodells besteht nicht darin, die Daten von gestern perfekt zu erklären.

Sein Zweck besteht darin, verlässliche Vorhersagen für die Experimente von morgen zu ermöglichen.

---

## Generalisierung: neue Daten vorhersagen

Die Fähigkeit, für neue Beobachtungen präzise Vorhersagen zu treffen, nennt man **Generalisierung**.

Generalisierung ist letztlich das, was maschinelles Lernen wissenschaftlich nützlich macht.

Ein Modell, das auf den Trainingsdaten perfekt funktioniert, aber bei neuen Beobachtungen versagt, hat wenig über den zugrunde liegenden biologischen Prozess gelernt.

Es hat sich lediglich an die Besonderheiten des Datensatzes angepasst, aus dem es konstruiert wurde.

Ein Modell hingegen, das den allgemeinen biologischen Zusammenhang erfasst, wird auch dann noch gut funktionieren, wenn es auf unabhängige Experimente, andere Labore oder neu entdeckte Proteine angewendet wird.

Generalisierung ist daher ein deutlich sinnvolleres Maß für Modellqualität als die Trainingsgenauigkeit allein.

Diese Einsicht verändert grundlegend, wie wir Vorhersagemodelle bewerten.

Anstatt zu fragen

> **Wie gut erklärt das Modell die vorhandenen Daten?**

fragen wir nun

> **Wie gut wird das Modell Daten vorhersagen, die es noch nie gesehen hat?**

Diese scheinbar kleine Änderung der Perspektive gehört zu den definierenden Prinzipien des modernen maschinellen Lernens.

---

## Der optimale Bereich der Modellkomplexität

Damit können wir nun verstehen, warum weder extrem einfache noch extrem komplexe Modelle wünschenswert sind.

Ein zu einfaches Modell kann den zugrunde liegenden biologischen Zusammenhang nicht erfassen. Es verfehlt wichtige Muster in den Daten systematisch.

Ein zu komplexes Modell erfasst nicht nur den biologischen Zusammenhang, sondern auch zufällige Schwankungen, die nur für den Trainingsdatensatz charakteristisch sind.

Zwischen diesen beiden Extremen liegt ein mittleres Komplexitätsniveau.

In diesem Bereich ist das Modell flexibel genug, um die relevanten biologischen Mechanismen zu beschreiben, und zugleich einfach genug, um zufälliges Rauschen zu ignorieren.

Diesen Bereich bezeichnet man oft als den **optimalen Bereich** oder **Sweet Spot** der Modellkomplexität.

Gerade diesen Bereich zu finden, ist eines der zentralen Ziele des maschinellen Lernens.

Bemerkenswerterweise ist das optimale Modell fast nie dasjenige mit dem kleinsten Trainingsfehler.

Es ist vielmehr das Modell, das Flexibilität und Generalisierungsfähigkeit am besten miteinander ausbalanciert.

Im weiteren Verlauf dieses Kapitels werden wir untersuchen, wie sich dieses Gleichgewicht mathematisch verstehen lässt und wie es sich aus experimentellen Daten abschätzen lässt.

---

### Zentrale Konzepte

- Ein Modell, das die Trainingsdaten perfekt anpasst, ist nicht notwendigerweise das beste Vorhersagemodell.
- Das Auswendiglernen einzelner Beobachtungen unterscheidet sich grundlegend vom Lernen allgemeiner biologischer Prinzipien.
- Die Fähigkeit, ungesehene Beobachtungen korrekt vorherzusagen, nennt man **Generalisierung**.
- Eine steigende Modellkomplexität verbessert zunächst die Leistung auf den Trainingsdaten, verschlechtert aber irgendwann die Vorhersageleistung.
- Das beste Vorhersagemodell balanciert Flexibilität und Generalisierungsfähigkeit aus.

---

### Zusammenfassung

Mit wachsender Modellkomplexität werden Vorhersagemodelle immer besser darin, die Trainingsdaten zu fitten. Ab einem bestimmten Punkt erfasst zusätzliche Flexibilität jedoch nicht mehr biologische Zusammenhänge, sondern zufällige Schwankungen, die nur für den Trainingsdatensatz charakteristisch sind. Das resultierende Modell funktioniert auf bekannten Beobachtungen hervorragend, auf neuen Daten aber schlecht. Das zentrale Ziel des maschinellen Lernens besteht daher nicht in perfekter Anpassung, sondern in guter Generalisierung, also in der Fähigkeit, verlässliche Vorhersagen für zukünftige Beobachtungen zu liefern.

---

### Fragen zur Selbstkontrolle

1. Warum ist eine perfekte Anpassung an die Trainingsdaten nicht unbedingt wünschenswert?
2. Worin besteht der Unterschied zwischen Auswendiglernen und Lernen?
3. Was versteht man unter *Generalisierung*?
4. Warum ist Generalisierung wichtiger als Trainingsgenauigkeit?
5. Warum verschlechtert eine zunehmende Modellkomplexität irgendwann die Vorhersageleistung?
6. Was ist mit dem "Sweet Spot" der Modellkomplexität gemeint?
7. Warum sollten Vorhersagemodelle an ungesehenen Daten und nicht nur an den Trainingsdaten bewertet werden?
