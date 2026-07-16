---
title: "17.5 Rückkopplungssensitivität erzeugt Oszillationen"
sidebar:
  label: "17.5 Rückkopplungssensitivität erzeugt Oszillationen"
  order: 5
  group: "Part 4"
  part: "Part 4"
---

## 17.5 Rückkopplungssensitivität erzeugt Oszillationen

Im vorherigen Abschnitt haben wir das HPG-Modell eingeführt und die Sensitivität der negativen Rückkopplungsschleife als einen seiner wichtigsten Parameter identifiziert.

Nun stellen wir eine einfache Frage:

> **Was geschieht, wenn die Sensitivität des Rückkopplungssystems schrittweise erhöht wird?**

Überraschenderweise reicht allein die Veränderung dieser einen Eigenschaft aus, um aus einem stabilen homöostatischen System einen stabilen biologischen Oszillator zu machen.

### Eine schwache Rückkopplungsantwort

Betrachten wir zunächst eine relativ flache Rückkopplungsfunktion.

In diesem Fall führen kleine Änderungen der Hormonkonzentration nur zu moderaten Änderungen der regulatorischen Antwort. Der Regler reagiert gleichmäßig und allmählich auf Abweichungen vom Gleichgewicht.

Wird das Modell simuliert, ändern sich zunächst alle drei Hormonkonzentrationen, während sie sich an ihren neuen Arbeitspunkt anpassen. Nach dieser transienten Phase stellt sich jedoch ein stabiles Gleichgewicht ein.

Die Konzentrationen aller drei Hormone werden über die Zeit konstant.

Genau dieses Verhalten erwarten wir von einem klassischen homöostatischen System.

Kleine Störungen werden schrittweise korrigiert, bis das System in seinen Gleichgewichtszustand zurückkehrt.

### Erhöhung der Rückkopplungssensitivität

Nehmen wir nun an, wir verändern nur einen einzigen Parameter.

Wir erhöhen die Steilheit der sigmoiden Rückkopplungsfunktion, während alle übrigen Parameter unverändert bleiben.

Biologisch bedeutet dies, dass der Hypothalamus schon auf kleine Änderungen der Hormonkonzentration sehr viel stärker reagiert.

Anstatt allmählich zu antworten, erzeugt der Regler nun für dieselbe Abweichung vom Gleichgewicht eine sehr viel stärkere Korrektur.

Auf den ersten Blick könnte das vorteilhaft erscheinen.

Man könnte erwarten, dass ein sensiblerer Regler das System präziser kontrolliert.

Die Simulation zeigt jedoch das Gegenteil.

### Das Entstehen von Oszillationen

Sobald die Rückkopplung hinreichend steil wird, verschwindet das stabile Gleichgewicht.

Anstatt sich einer konstanten Hormonkonzentration anzunähern, beginnen alle drei Hormone zu oszillieren.

Diese Oszillationen sind nicht transient.

Sie bleiben unbegrenzt mit konstanter Amplitude und Periodendauer bestehen.

Unabhängig von den anfänglichen Hormonkonzentrationen konvergiert jede Simulation gegen dieselbe wiederkehrende Trajektorie.

Im Zustandsraum nähern sich die Trajektorien nun nicht mehr einem Punktattraktor.

Stattdessen konvergieren sie gegen einen stabilen **Grenzzyklusattraktor**.

Das Regulationssystem hat also eine qualitative Änderung seines Langzeitverhaltens durchlaufen.

### Warum geschieht das?

Um den Ursprung dieser Oszillationen zu verstehen, ist es hilfreich, über die Rolle des Reglers nachzudenken.

Ein Regler mit geringer Sensitivität reagiert zurückhaltend.

Weicht die Hormonkonzentration leicht von ihrem Sollwert ab, wird nur eine kleine Korrektur ausgelöst.

Das System kehrt allmählich ins Gleichgewicht zurück, ohne es zu überschwingen.

Ein hochsensitiver Regler verhält sich anders.

Schon eine sehr kleine Abweichung löst eine große Korrekturreaktion aus.

Bis diese Korrektur wirksam wird, hat das System den Gleichgewichtspunkt oft bereits überschritten.

Der Regler kompensiert daher zu stark.

Die nächste Korrektur treibt das System wieder in die entgegengesetzte Richtung, wo es erneut überschießt.

Anstatt Abweichungen zu beseitigen, erzeugt der Regler fortlaufend neue.

Das Ergebnis ist eine sich selbst aufrechterhaltende Oszillation.

### Eine anschauliche Analogie

Eine hilfreiche Analogie ist das Lenken eines Autos auf gerader Straße.

Stellen Sie sich vor, Ihr Lenkrad wäre extrem empfindlich.

Schon die kleinste Bewegung würde dazu führen, dass das Auto seine Richtung stark ändert.

Driftet das Auto leicht nach links, lenken Sie kräftig nach rechts.

Fast sofort überschießt das Auto die Straßenmitte und beginnt nach rechts abzudriften.

Nun korrigieren Sie, indem Sie stark nach links lenken.

Wieder fällt die Korrektur zu groß aus.

Anstatt ruhig in der Mitte der Fahrspur zu bleiben, pendelt das Auto fortwährend von einer Seite zur anderen.

Die Oszillation entsteht nicht durch falsche Absicht.

Sie entsteht durch **Überkorrektur**.

Genau dasselbe Phänomen tritt in hochsensitiven biologischen Rückkopplungssystemen auf.

### Sensitivität als Kontrollparameter

Aus Sicht dynamischer Systeme wirkt der Sensitivitätsparameter als **Kontrollparameter**.

Bei geringer Sensitivität besitzt das System einen stabilen Punktattraktor.

Wenn die Sensitivität einen kritischen Schwellenwert überschreitet, verliert dieser Punkt seine Stabilität.

Gleichzeitig entsteht ein stabiler Grenzzyklus.

Das Verhalten des Systems ändert sich qualitativ, obwohl nur ein einziger Parameter verändert wurde.

Dieser Übergang stellt einen der fundamentalen Mechanismen dar, durch die Oszillationen in biologischen Systemen entstehen.

### Ein allgemeines biologisches Prinzip

Das HPG-Modell illustriert ein wichtiges allgemeines Prinzip.

Stabile Oszillationen erfordern nicht zwangsläufig zusätzliche biologische Komponenten.

Sie können allein dadurch entstehen, dass eine bereits vorhandene negative Rückkopplungsschleife hinreichend sensitiv wird.

Viele endokrine Systeme, Signalwege und Genregulationsnetzwerke zeigen genau dieses Verhalten.

Oszillationen sind dabei oft kein Hinweis auf Fehlfunktion, sondern spiegeln den normalen Betriebsmodus eines hochreaktiven Regulationssystems wider.

Allerdings ist erhöhte Sensitivität nicht der einzige Mechanismus, der Oszillationen erzeugen kann.

Ein zweiter, ebenso wichtiger Mechanismus tritt auf, wenn Information sich zu langsam durch die Rückkopplungsschleife bewegt.

Dieser Mechanismus beruht auf **Zeitverzögerungen** und ist Gegenstand des nächsten Abschnitts.

### Zentrale Konzepte

- Eine erhöhte Rückkopplungssensitivität kann das Verhalten eines Regulationssystems grundlegend verändern.
- Schwache Rückkopplung stabilisiert ein Punktgleichgewicht.
- Starke Rückkopplung kann durch Überkorrektur anhaltende Oszillationen erzeugen.
- Ein stabiler Grenzzyklus ersetzt das stabile Gleichgewicht, sobald eine kritische Sensitivität überschritten wird.
- Die Rückkopplungssensitivität wirkt als Kontrollparameter des dynamischen Systems.

### Zusammenfassung

Das HPG-Modell zeigt, dass Oszillationen allein durch eine Zunahme der Rückkopplungssensitivität entstehen können. Je steiler die negative Rückkopplung wird, desto stärker überkompensiert der Regler Abweichungen vom Gleichgewicht. Jenseits einer kritischen Sensitivität verliert das stabile Gleichgewicht seine Stabilität und wird durch einen stabilen Grenzzyklus ersetzt. Dieser Mechanismus veranschaulicht, wie anhaltende biologische Oszillationen auf natürliche Weise aus hochreaktiven Regulationssystemen hervorgehen können.

### Verständnisfragen

1. Warum führt schwache negative Rückkopplung typischerweise zu einem stabilen Gleichgewicht?
2. Warum könnte man zunächst erwarten, dass stärkere Rückkopplung die Regulation verbessert?
3. Was ist mit **Überkorrektur** gemeint?
4. Warum neigen hochsensitive Rückkopplungssysteme zu Oszillationen?
5. Welche Rolle spielt der Sensitivitätsparameter im HPG-Modell?
6. Warum gelten die entstehenden Oszillationen als stabil?
