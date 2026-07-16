---
title: "16.4 Von der Biologie zur Mathematik: Ein Minimalmodell des lac-Operons"
sidebar:
  label: "16.4 Von der Biologie zur Mathematik: Ein Minimalmodell des lac-Operons"
  order: 4
  group: "Part 4"
  part: "Part 4"
---

## 16.4 Von der Biologie zur Mathematik: Ein Minimalmodell des lac-Operons

Das lac-Operon ist ein komplexes biologisches System. Laktose muss in die Zelle gelangen, in Allolaktose umgewandelt werden, an den LacI-Repressor binden, Genexpression aktivieren und letztlich die Produktion von Enzymen steigern, die wiederum noch mehr Laktose importieren. In der Realität tragen viele weitere Prozesse dazu bei, darunter Transkription, Translation, Proteinabbau und Verdünnung während der Zellteilung.

Eine vollständige mathematische Beschreibung jeder einzelnen molekularen Wechselwirkung würde daher eine große Zahl von Variablen und Parametern erfordern.

Solch detaillierte Modelle haben durchaus ihre Berechtigung. Sie sind jedoch nicht der beste Ausgangspunkt, wenn man das biologische Prinzip verstehen möchte, das dem System zugrunde liegt.

Stattdessen stellt die Systembiologie eine andere Frage:

> **Was ist das einfachste mathematische Modell, das das beobachtete biologische Verhalten dennoch erklärt?**

Dieser Prozess, ein komplexes biologisches System auf seine wesentlichen Mechanismen zu reduzieren, wird als **Modellabstraktion** bezeichnet.

### Schritt 1: Die wesentlichen biologischen Mechanismen identifizieren

Bevor wir auch nur eine einzige Gleichung aufschreiben, bestimmen wir zunächst, welches biologische Wissen das Modell repräsentieren soll.

Für das lac-Operon legen experimentelle Beobachtungen mehrere Schlüsseleigenschaften nahe.

- Die Operonaktivität steigt an, wenn intrazelluläre Laktose vorhanden ist.
- Positives Feedback verstärkt diese Aktivierung, weil die Laktoseaufnahme die Produktion zusätzlicher Laktose-Permease fördert.
- Genprodukte werden kontinuierlich verdünnt und abgebaut.
- Genexpression kann nicht unbegrenzt ansteigen, weil der zelluläre Transkriptions- und Translationsapparat nur eine endliche Kapazität besitzt.

Diese Beobachtungen sind vollständig biologisch. Sie enthalten noch keine Mathematik.

Dennoch legen sie bereits fest, welche Eigenschaften unser mathematisches Modell reproduzieren muss.

### Schritt 2: Die Zustandsvariable wählen

Im nächsten Schritt entscheiden wir, welcher Aspekt des biologischen Systems explizit beschrieben werden soll.

Ein detailliertes Modell könnte zwischen Laktose, Allolaktose, Permease, β-Galactosidase, mRNA und dem LacI-Repressor unterscheiden.

Für unseren Zweck ist ein solcher Detaillierungsgrad jedoch nicht notwendig.

Stattdessen führen wir eine einzige Zustandsvariable ein,

$$
X,
$$

die die Gesamtaktivität des lac-Operons repräsentiert.

Je nach Abstraktionsebene kann \(X\) als intrazelluläre Laktosekonzentration, als Menge der laktosemetabolisierenden Enzyme oder einfach als Aktivität des regulatorischen Systems interpretiert werden.

Die genaue Interpretation ist weniger wichtig als die Tatsache, dass größere Werte von \(X\) einem stärker induzierten Operon entsprechen.

### Schritt 3: Biologisches Wissen in mathematische Funktionen übersetzen

Die zentrale Aufgabe der Modellierung besteht darin, qualitatives biologisches Wissen in mathematische Beziehungen zu übersetzen.

Dieser Schritt wird häufig missverstanden.

Mathematische Funktionen werden **nicht** gewählt, weil sie mathematisch bequem sind.

Stattdessen werden sie ausgewählt, weil sie die biologischen Eigenschaften des Systems kodieren.

#### Den Abbauprozess modellieren

Betrachten wir zunächst den Verlust von Operonaktivität.

Genprodukte werden kontinuierlich abgebaut oder während des Zellwachstums verdünnt. Wenn keine Genprodukte vorhanden sind, kann nichts abgebaut werden. Sind doppelt so viele Moleküle vorhanden, gehen pro Zeiteinheit ungefähr doppelt so viele verloren.

Die einfachste mathematische Funktion mit diesen Eigenschaften ist eine lineare Funktion,

$$
R(X)=kX,
$$

wobei \(k\) die Abbaurate ist.

Diese Funktion wird nicht deshalb gewählt, weil sie einfach ist, sondern weil sie die biologische Annahme widerspiegelt, dass der Abbau proportional zur aktuellen Menge des Genprodukts verläuft.

#### Den Aktivierungsprozess modellieren

Die Aktivierung verhält sich ganz anders.

Bei geringer Operonaktivität gelangt nur wenig Laktose in die Zelle, und die Aktivierung bleibt schwach.

Wenn mehr Permease produziert wird, steigt die Laktoseaufnahme, wodurch die Genexpression über positives Feedback verstärkt wird.

Schließlich erreicht die Aktivierung jedoch ein Maximum, weil Transkription und Translation nicht unbegrenzt zunehmen können.

Die Aktivierungsfunktion muss daher drei biologische Anforderungen erfüllen:

- geringe Aktivierung bei niedriger Operonaktivität,
- rascher Anstieg, sobald positives Feedback wirksam wird,
- Sättigung bei hoher Aktivität.

Eine **sigmoidale** Funktion reproduziert diese Eigenschaften auf natürliche Weise.

Der genaue mathematische Ausdruck ist dabei weniger wichtig als sein biologisches Verhalten. Mehrere verschiedene Funktionen könnten diese Anforderungen gleichermaßen gut erfüllen.

Das veranschaulicht ein wichtiges Prinzip der Systembiologie.

> **Modellierungsprinzip**
>
> Mathematische Funktionen werden gewählt, weil sie die biologischen Eigenschaften reproduzieren, die beschrieben werden sollen, nicht weil sie mathematisch bequem sind.

### Schritt 4: Das Modell zusammensetzen

Sobald die biologischen Prozesse in mathematische Funktionen übersetzt wurden, wird die Konstruktion der Differentialgleichung unmittelbar.

Die Aktivität des Operons nimmt durch Aktivierung zu und durch Abbau ab.

Das resultierende Modell lautet daher

$$
\frac{dX}{dt}
=
I(X)-R(X),
$$

wobei

- \(I(X)\) die Aktivierung durch positives Feedback beschreibt,
- \(R(X)\) Abbau und Verdünnung beschreibt.

Beachten Sie, dass diese Gleichung kein willkürlicher mathematischer Ausdruck ist.

Sie ist lediglich eine präzise Formulierung der biologischen Aussage:

> *Die Operonaktivität steigt durch Induktion und sinkt durch Abbau.*

### Schritt 5: Das Modell interpretieren

Obwohl das Modell nur eine einzige Zustandsvariable enthält, erfasst es bereits das wesentliche Verhalten des lac-Operons.

Das Gleichgewicht zwischen Aktivierung und Abbau bestimmt, ob die Operonaktivität zunimmt, abnimmt oder konstant bleibt.

Gleichgewichtspunkte treten immer dann auf, wenn beide Prozesse exakt ausbalanciert sind,

$$
I(X)=R(X).
$$

Graphisch entsprechen diese Gleichgewichte den Schnittpunkten zwischen Aktivierungs- und Abbaukurve.

Je nach biologischen Bedingungen kann es einen, zwei oder drei solcher Schnittpunkte geben. Einige dieser Gleichgewichte sind stabil, andere instabil.

Bemerkenswerterweise sagt dieses einfache Modell bereits die Existenz zweier alternativer physiologischer Zustände vorher, die dem inaktiven und dem aktiven lac-Operon entsprechen.

### Warum Abstraktion so mächtig ist

Das hier entwickelte Modell ignoriert viele molekulare Details.

Es unterscheidet nicht zwischen Transkription und Translation, repräsentiert keine einzelnen Proteine und beschreibt auch nicht die molekulare Struktur des Promotors.

Diese Vereinfachung ist beabsichtigt.

Der Zweck des Modells besteht nicht darin, jedes biochemische Ereignis nachzubilden.

Vielmehr soll es eine wesentlich allgemeinere Frage beantworten:

> **Wie kann positives Feedback einen verlässlichen biologischen Schalter erzeugen?**

Ist dieses Prinzip einmal verstanden, kann derselbe mathematische Rahmen auf viele andere biologische Systeme angewendet werden, darunter Entwicklungswege, Signalnetzwerke, metabolische Regulation und Zellschicksalsentscheidungen.

Das Modell erfasst somit ein allgemeines Organisationsprinzip und nicht bloß die Details eines einzelnen biologischen Beispiels.

### Zentrale Konzepte

- Mathematische Modellierung beginnt mit der Identifikation der wesentlichen biologischen Mechanismen.
- Zustandsvariablen beschreiben den dynamischen Zustand des Systems, während mathematische Funktionen biologische Prozesse beschreiben.
- Mathematische Funktionen sollten so gewählt werden, dass sie biologische Annahmen kodieren.
- Das lac-Operon lässt sich durch ein Minimalmodell beschreiben, das Aktivierung und Abbau gegeneinander abwägt.
- Modellabstraktion macht biologische Prinzipien sichtbar, die über einzelne molekulare Systeme hinausgehen.

### Zusammenfassung

Ein mathematisches Modell zu konstruieren bedeutet, biologisches Wissen in mathematische Sprache zu übersetzen. Anstatt jedes molekulare Detail nachzubilden, identifizieren Systembiologen die wesentlichen Mechanismen eines Systems und wählen mathematische Funktionen, die deren biologische Eigenschaften möglichst treu wiedergeben. Für das lac-Operon führt dies zu einer einfachen Differentialgleichung, in der Aktivierung durch positives Feedback gegen Abbau aufgerechnet wird. Trotz seiner Einfachheit erfasst dieses Modell den grundlegenden Mechanismus schalterartigen Verhaltens und zeigt, wie mathematische Abstraktion allgemeine Prinzipien biologischer Regulation sichtbar machen kann.

### Fragen zur Selbstkontrolle

1. Warum ist Modellabstraktion ein wichtiger Schritt in der Systembiologie?
2. Welche biologischen Beobachtungen leiten die Konstruktion des lac-Operon-Modells?
3. Warum wird Abbau häufig durch eine lineare Funktion dargestellt?
4. Warum muss die Aktivierungsfunktion nichtlinear sein?
5. Warum werden mathematische Funktionen nach biologischen Eigenschaften und nicht nach mathematischer Bequemlichkeit ausgewählt?
