---
title: "17.6 Zeitverzögerungen erzeugen Oszillationen"
sidebar:
  label: "17.6 Zeitverzögerungen erzeugen Oszillationen"
  order: 6
  group: "Part 4"
  part: "Part 4"
---

## 17.6 Zeitverzögerungen erzeugen Oszillationen

Im vorherigen Abschnitt haben wir gesehen, dass Oszillationen entstehen können, wenn eine negative Rückkopplungsschleife hochsensitiv wird. Ein Regler, der zu stark reagiert, neigt dazu, Abweichungen zu überkorrigieren, wodurch das System um sein Gleichgewicht oszilliert.

Damit drängt sich eine weitere Frage auf.

> **Können Oszillationen auch dann entstehen, wenn der Regler grundsätzlich angemessen reagiert, die Information ihn aber zu spät erreicht?**

Die Antwort lautet ja.

Tatsächlich gehören **Zeitverzögerungen** zu den häufigsten Ursachen von Oszillationen in biologischen Systemen.

Um diesen Mechanismus zu verstehen, betrachten wir die Regulation des Kohlendioxids im Blut durch das Atmungssystem.

### Das respiratorische Kontrollsystem

Jede Zelle produziert fortlaufend Kohlendioxid (CO₂) als Nebenprodukt des Stoffwechsels.

Damit physiologische Funktionen aufrechterhalten werden können, muss dieses CO₂ durch die Atmung aus dem Körper entfernt werden.

Wie alle homöostatischen Systeme besteht auch die Atemregulation aus drei vertrauten Komponenten:

- einem **Sensor**, der die CO₂-Konzentration im Blut misst,
- einem **Kontrollzentrum** im Hirnstamm, das die angemessene Atemfrequenz festlegt,
- und der **Lunge**, die CO₂ durch Ventilation entfernt.

Unter normalen Bedingungen hält diese negative Rückkopplungsschleife die CO₂-Konzentration im Blut in einem engen physiologischen Bereich.

Auf den ersten Blick ähnelt dieses System stark der hormonellen Rückkopplungsschleife aus dem vorherigen Abschnitt.

Es gibt jedoch einen entscheidenden Unterschied.

### Information breitet sich nicht augenblicklich aus

Wenn die Lunge CO₂ aus dem Blut entfernt, kann das Gehirn diese Veränderung nicht sofort beobachten.

Das Blut muss zunächst durch das Herz-Kreislauf-System zirkulieren, bevor die veränderte CO₂-Konzentration die Chemorezeptoren erreicht, die sie überwachen.

Folglich beruht jede regulatorische Entscheidung auf Information, die bereits leicht veraltet ist.

Der Regler reagiert also nicht auf den aktuellen Zustand des Systems, sondern auf seinen Zustand zu einem früheren Zeitpunkt.

Diese Verzögerung mag nur wenige Sekunden betragen, sie verändert jedoch die Dynamik der Rückkopplungsschleife grundlegend.

### Das Modell konstruieren

Bezeichne \(X\) die Kohlendioxidkonzentration im Blut.

Wie zuvor beginnen wir damit, die biologischen Prozesse zu identifizieren, die diese Größe verändern.

Der erste Prozess ist die **metabolische Produktion**.

Da der Stoffwechsel kontinuierlich CO₂ erzeugt, beschreiben wir ihn durch einen konstanten Produktionsterm

$$
L.
$$

Der zweite Prozess ist die **Ventilation**.

Durch die Atmung wird CO₂ aus dem Blut entfernt.

Die entfernte Menge hängt von zwei Faktoren ab:

- von der aktuellen CO₂-Konzentration
- und von der Ventilationsrate \(V\).

Das resultierende Modell lautet daher

$$
X' = L - VX.
$$

Diese Gleichung ist strukturell vielen Modellen ähnlich, die wir in diesem Buch bereits kennengelernt haben: Ein Prozess erhöht die Konzentration fortlaufend, ein anderer entfernt sie wieder.

### Eine Ventilationsfunktion wählen

Die nächste Frage lautet, wie die Ventilationsrate von der CO₂-Konzentration abhängt.

Wieder beginnen wir mit den biologischen Eigenschaften und nicht mit der Mathematik.

Eine geeignete Funktion sollte mehrere intuitive Anforderungen erfüllen.

- Niedrige CO₂-Konzentrationen sollten nur eine schwache Ventilation auslösen.
- Mit steigender CO₂-Konzentration sollte die Atemrate zunehmen.
- Die Atemrate kann nicht unbegrenzt ansteigen, weil die Lunge nur eine endliche maximale Kapazität besitzt.
- Die Sensitivität des Reglers sollte veränderbar bleiben.

Diese Anforderungen legen unmittelbar eine vertraute Funktionsfamilie nahe.

Eine **Hill-Funktion** bildet all diese Eigenschaften auf natürliche Weise ab.

Erneut wird die mathematische Funktion gewählt, weil sie unsere biologischen Annahmen repräsentiert.

Die Mathematik folgt der Biologie und nicht umgekehrt.

### Eine explizite Zeitverzögerung einführen

Bis hierhin setzt das Modell voraus, dass der Regler sofort auf Änderungen der CO₂-Konzentration reagiert.

Diese Annahme ist unrealistisch.

Um die Transportzeit durch den Blutkreislauf zu berücksichtigen, führen wir eine explizite Verzögerung ein:

$$
\tau.
$$

Anstatt auf die aktuelle Konzentration \(X(t)\) zu reagieren, antwortet der Regler nun auf

$$
X(t-\tau),
$$

also auf die Konzentration, die eine Verzögerungsperiode früher gemessen wurde.

Diese scheinbar kleine Modifikation verändert die mathematische Struktur des Modells grundlegend.

Das System enthält nun ein Gedächtnis seines früheren Zustands.

### Kleine Verzögerungen erhalten die Homöostase

Betrachten wir zunächst eine sehr kleine Verzögerung.

In diesem Fall erhält der Regler nahezu aktuelle Information.

Wird das System simuliert, klingen Störungen allmählich ab, und die CO₂-Konzentration konvergiert gegen ein stabiles Gleichgewicht.

Die negative Rückkopplungsschleife funktioniert genau wie vorgesehen.

Die Verzögerung ist zu kurz, um die Regulation wesentlich zu beeinträchtigen.

### Große Verzögerungen erzeugen Oszillationen

Nehmen wir nun an, die Verzögerung werde größer.

Der Regler trifft zwar weiterhin die richtige Entscheidung, aber er trifft sie zu spät.

Bis die Korrektur wirksam wird, hat sich der Zustand des Systems bereits erheblich verändert.

Der Regler wendet daher eine Korrektur an, die für die Vergangenheit passend war, nicht aber für die Gegenwart.

Infolgedessen überschießt das System den gewünschten Gleichgewichtszustand immer wieder.

Die Simulation zeigt, dass jenseits einer kritischen Verzögerung das stabile Gleichgewicht verschwindet.

Stattdessen konvergiert das System gegen eine stabile Oszillation.

Die Atemrate steigt und fällt nun rhythmisch, und die CO₂-Konzentration oszilliert entsprechend.

Auch diese Oszillation wird wieder durch einen stabilen Grenzzyklus beschrieben.

### Verzögerte Korrektur

Dieser Mechanismus lässt sich mit einer einfachen Alltagsanalogie verstehen.

Stellen Sie sich vor, Sie fahren Auto und erhalten Lenkanweisungen von einer zweiten Person.

Diese Person gibt vollkommen richtige Hinweise, aber jede Anweisung erreicht Sie erst mit mehreren Sekunden Verzögerung.

Wenn Ihnen gesagt wird, Sie sollen nach rechts lenken, haben Sie Ihre Fahrtrichtung vielleicht bereits korrigiert.

Wenn Sie der verzögerten Anweisung jetzt folgen, bewegt sich das Auto zu weit in die entgegengesetzte Richtung.

Wenige Sekunden später trifft die nächste verzögerte Korrektur ein.

Wieder ist sie für die Vergangenheit passend, aber nicht für die Gegenwart.

Das Ergebnis ist ein fortwährendes Pendeln von einer Seite zur anderen.

Der Regler ist nicht falsch.

Er reagiert einfach zu spät.

Biologische Rückkopplungssysteme verhalten sich ganz genauso.

### Ein zweiter universeller Mechanismus

Das respiratorische Modell zeigt einen zweiten universellen Mechanismus biologischer Oszillationen.

Im Gegensatz zum Hormonmodell wird der Regler nicht übermäßig sensitiv.

Stattdessen entstehen Oszillationen, weil Information sich zu langsam durch die Rückkopplungsschleife ausbreitet.

Das bemerkenswerte Ergebnis ist, dass zwei vollständig unterschiedliche biologische Mechanismen,

- erhöhte Rückkopplungssensitivität
- und explizite Zeitverzögerungen,

genau dasselbe qualitative Verhalten erzeugen.

In beiden Fällen wird ein stabiler Gleichgewichtspunkt durch einen stabilen Grenzzyklus ersetzt.

Diese Beobachtung führt unmittelbar zu einem der wichtigsten Konzepte nichtlinearer dynamischer Systeme: der **Hopf-Bifurkation**.

### Zentrale Konzepte

- Biologische Rückkopplungssysteme enthalten häufig unvermeidbare Transportverzögerungen.
- Regler reagieren oft auf veraltete statt auf aktuelle Information.
- Explizite Zeitverzögerungen führen Gedächtnis in dynamische Modelle ein.
- Kleine Verzögerungen erhalten stabile Homöostase.
- Große Verzögerungen führen zu wiederholter Überkorrektur und anhaltenden Oszillationen.
- Zeitverzögerung ist ein zweiter universeller Mechanismus zur Erzeugung biologischer Oszillationen.

### Zusammenfassung

Das respiratorische Kontrollsystem zeigt, wie Oszillationen aus verzögerter negativer Rückkopplung entstehen können. Weil physiologische Information Zeit benötigt, um sich im Körper auszubreiten, beruhen regulatorische Entscheidungen immer auf vergangenen Zuständen des Systems. Wird diese Verzögerung hinreichend groß, überkorrigiert der Regler fortlaufend den aktuellen Zustand und erzeugt dadurch anhaltende Oszillationen. Zeitverzögerung stellt damit einen zweiten grundlegenden Mechanismus dar, durch den stabile biologische Oszillatoren entstehen.

### Verständnisfragen

1. Warum ist das Atmungssystem ein Beispiel für eine negative Rückkopplungsschleife?
2. Warum kann das Gehirn nie auf die aktuelle CO₂-Konzentration reagieren?
3. Warum ist eine Hill-Funktion ein geeignetes Modell für die Ventilationsrate?
4. Welche biologische Bedeutung hat der Verzögerungsparameter \( \tau \)?
5. Warum destabilisieren große Verzögerungen ein homöostatisches System?
6. Inwiefern ähnelt verzögerte Rückkopplung hochsensitiver Rückkopplung?
