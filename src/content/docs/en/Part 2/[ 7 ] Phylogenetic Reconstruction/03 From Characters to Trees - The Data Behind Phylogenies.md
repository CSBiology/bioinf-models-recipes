---
title: "7.3 From Characters to Trees: The Data Behind Phylogenies"
sidebar:
  label: "7.3 From Characters to Trees: The Data Behind Phylogenies"
  order: 3
  group: "Part 2"
  part: "Part 2"
---

# **7.3 From Characters to Trees: The Data Behind Phylogenies**

### **Learning Objectives**

After reading this section, you should be able to:

* explain what a character is in phylogenetic analysis
* understand how sequence alignments define sets of characters
* distinguish between informative and non-informative positions
* explain the difference between homology and homoplasy
* describe how biological data are translated into evolutionary signals

---

### **What Carries Information About Evolution?**

Before constructing phylogenetic trees, we must clarify what kind of data can inform us about evolutionary relationships.

In earlier chapters, we treated sequences as objects that can be compared. In phylogenetics, we go one step further. We interpret sequences as **evidence of evolutionary processes**.

This requires a change in perspective. Instead of viewing a sequence as a continuous string, we interpret it as a collection of discrete observations. Each observation reflects the outcome of a historical process that we cannot directly observe.

These observations are called **characters**.

---

### **From Sequences to Characters**

A character is any heritable feature that can vary among the entities under study. In classical biology, characters were often morphological, such as the presence of wings or the structure of limbs. In modern phylogenetics, characters are most commonly derived from molecular sequences.

A multiple sequence alignment provides a natural way to define such characters. Each column in the alignment corresponds to a position that is assumed to be homologous across all sequences. The entries in that column represent different states of the same character.

This interpretation is essential. The alignment does not merely arrange sequences for visual comparison. It transforms sequence data into a structured set of comparable observations.

In this way, an alignment becomes a collection of independent pieces of evidence about evolutionary history.

---

### **Not All Characters Are Equally Informative**

Although each alignment column represents a character, not all characters contribute equally to phylogenetic reconstruction.

Some positions are completely conserved. They show the same state across all sequences. While such positions may be biologically important, they do not help distinguish between alternative evolutionary histories.

Other positions vary, but in ways that do not provide clear structure. For example, if every sequence has a different nucleotide at a given position, the resulting pattern may not help resolve relationships.

The most useful characters are those that exhibit structured variation. They allow us to group sequences based on shared states that can be interpreted as inherited from a common ancestor.

This leads to an important practical consideration. In real analyses, alignments are often filtered. Regions that contain too many gaps or too little informative variation may be removed, because they contribute noise rather than signal.

---

### **Box 7.1 — Informative vs. Non-Informative Positions**

Consider the following alignment columns:

[
\begin{array}{c|cccc}
& A & B & C & D \
\hline
\text{Column 1} & A & A & A & A \
\text{Column 2} & A & G & C & T \
\text{Column 3} & A & A & G & G \
\end{array}
]

Column 1 is completely conserved. It provides no information about relationships.

Column 2 shows variation, but each taxon has a different state. This pattern does not clearly support any grouping.

Column 3 shows a structured pattern: taxa ( A ) and ( B ) share one state, while ( C ) and ( D ) share another. This provides evidence for grouping these taxa.

This illustrates a key idea:

> **Only certain patterns of variation are informative for phylogenetic reconstruction**

---

### **Homology and Homoplasy**

Interpreting characters requires distinguishing between two fundamentally different sources of similarity.

**Homology** refers to similarity due to shared ancestry. If two sequences share a state because they inherited it from a common ancestor, this similarity reflects evolutionary relatedness.

**Homoplasy**, in contrast, refers to similarity that arises independently. This can occur through convergent evolution, parallel mutations, or reversals.

For example, the same nucleotide may appear in two sequences not because it was inherited, but because similar mutations occurred independently. Alternatively, a mutation may occur and later be reversed, masking earlier changes.

This distinction is central to phylogenetics. Our goal is to reconstruct relationships based on homology, but the data may contain homoplasy that obscures these relationships.

---

### **Characters as Traces of Evolutionary Events**

Each character can be interpreted as evidence of one or more evolutionary events.

When two sequences differ at a position, we infer that at least one substitution has occurred. When they share a state, we may infer that no change has occurred, although this inference can be misleading, as multiple changes may cancel each other out.

This leads to a key conceptual shift. We are no longer simply comparing sequences. We are interpreting differences and similarities as traces of an underlying process.

The alignment becomes a record of evolutionary signals, albeit an imperfect one.

---

### **From Data to Models**

At this stage, we have transformed sequences into a set of characters, each representing an observation of evolutionary variation.

The next step is to construct a model that explains these observations. Different phylogenetic methods do this in different ways:

* some summarize characters into distances
* others count evolutionary changes
* others assign probabilities to different evolutionary scenarios

All of these approaches begin from the same starting point: characters derived from sequence data.

---

### **Conceptual Summary**

Phylogenetic reconstruction is grounded in the comparison of characters across taxa. In molecular phylogenetics, multiple sequence alignments provide these characters in a structured form.

Not all characters are equally informative, and interpreting them requires distinguishing between homology and homoplasy. By treating characters as traces of evolutionary events, we can begin to construct models that explain how observed sequences arose.

---

### **Self-Check Questions**

1. What is a character in phylogenetic analysis?
2. How does a multiple sequence alignment define characters?
3. Why are some alignment positions more informative than others?
4. What is the difference between homology and homoplasy?
5. Why can identical characters sometimes be misleading?
6. Why are alignments often filtered before phylogenetic analysis?
