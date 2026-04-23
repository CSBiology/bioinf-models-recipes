---
title: "3.6 Scoring Systems and Biological Realism"
sidebar:
  label: "3.6 Scoring Systems and Biological Realism"
  order: 6
  group: "Part 2"
  part: "Part 2"
---

# **3.6 Scoring Systems and Biological Realism**

## **Learning Objectives**

After reading this section, you should be able to:

* Understand how scoring schemes define what “similarity” means in sequence alignment
* Interpret substitution scores in biological and probabilistic terms
* Explain the role of substitution matrices such as PAM matrix and BLOSUM matrix
* Describe different gap penalty models and their biological motivation
* Recognize how scoring choices influence alignment outcomes

---

## **From Algorithms to Models**

Up to this point, we have developed efficient algorithms for computing optimal alignments. However, an important question has remained somewhat implicit:

> **What exactly makes one alignment better than another?**

The dynamic programming algorithms we introduced do not define similarity on their own. They merely optimize a quantity that we provide. This quantity, the **alignment score**, is determined entirely by the **scoring system**.

In other words, the scoring scheme is not a technical detail. It is the **mathematical expression of our biological assumptions**.

When we choose a scoring system, we are specifying:

* which substitutions are considered likely or unlikely
* how costly insertions and deletions are
* what kinds of evolutionary scenarios we consider plausible

Thus, scoring is the point where biology enters the model most directly.

---

## **A First Scoring Model**

Let us begin with the simplest possible scheme. Suppose we assign:

* a positive score to matches
* a penalty to mismatches
* a penalty to gaps

For example:

* match: ( +1 )
* mismatch: ( -1 )
* gap: ( -1 )

Under this model, the score of an alignment is obtained by summing the contributions of all aligned positions and gaps. 

This scheme captures an intuitive idea: identical residues are rewarded, differences are penalized.

However, even at this stage, an important subtlety emerges. Not all mismatches are biologically equivalent.

---

## **Why Not All Substitutions Are Equal**

Consider DNA sequences. The four nucleotides can be grouped into:

* purines: A and G
* pyrimidines: C and T

Mutations that preserve this classification, such as A ↔ G or C ↔ T, are called **transitions**, while mutations between groups are called **transversions**.

Empirically, transitions occur more frequently than transversions. Therefore, treating all mismatches equally is biologically unrealistic.

This insight motivates a refinement of the scoring scheme. Instead of assigning a single mismatch penalty, we assign **different scores to different substitutions**.

---

## **Substitution Matrices**

A natural way to encode these preferences is through a **substitution matrix**, in which each entry specifies the score for aligning two residues.

For DNA, such a matrix might reward transitions more than transversions. For proteins, the situation becomes significantly more complex.

Protein sequences are composed of twenty amino acids, each with distinct physico-chemical properties. Substitutions are not random but influenced by:

* size and shape
* charge
* hydrophobicity
* structural constraints

As a result, some substitutions are far more likely than others.

Rather than designing such matrices manually, it is more effective to derive them from empirical data. This leads to two widely used families of substitution matrices: PAM matrix and BLOSUM matrix.

---

## **Evolutionary Interpretation of Substitution Scores**

Both PAM and BLOSUM matrices are constructed from observed alignments of real proteins. They quantify how often one amino acid is replaced by another during evolution.

Conceptually, these scores can be interpreted as **log-odds ratios**:

[
s(a,b) = \log \frac{P(\text{a aligns with b in related sequences})}{P(\text{a aligns with b by chance})}
]

Although we do not derive this formally here, the interpretation is important. A positive score indicates that a substitution occurs more frequently than expected by chance, suggesting biological plausibility. A negative score indicates the opposite.

Thus, substitution matrices do not merely encode similarity. They encode **evidence for evolutionary relatedness**.

---

## **PAM and BLOSUM: Two Perspectives**

While both matrix families aim to capture evolutionary patterns, they differ in how they are constructed.

PAM matrices are derived from **global alignments of closely related proteins** and extrapolated to larger evolutionary distances. In contrast, BLOSUM matrices are constructed from **locally conserved regions across diverse proteins**, grouping similar sequences to avoid bias.

As a result, they emphasize different aspects:

* PAM matrices are often used for detecting **remote homology**
* BLOSUM matrices are particularly effective for **local alignment tasks** 

This distinction highlights an important principle:

> **The choice of scoring matrix should reflect the biological question being asked.**

---

## **Modeling Gaps: Beyond Constant Penalties**

So far, we have treated gaps as having a fixed cost. However, this assumption is also biologically questionable.

Consider the following two alignments:

```
ATGTAGTGTATAGTACATGCA
ATGTAG-------TACATGCA
```

and

```
ATGTAGTGTATAGTACATGCA
ATGTA--G--TA---CATGCA
```

Intuitively, the first alignment is more plausible. It suggests a single insertion or deletion event affecting a contiguous block. The second alignment implies many independent events, which is less likely.

A constant gap penalty cannot distinguish between these scenarios.

---

## **Affine Gap Penalties**

To address this, we introduce **affine gap penalties**, which separate the cost of opening a gap from the cost of extending it.

The penalty takes the form:

[
\text{gap penalty} = A + B \cdot L
]

where:

* ( A ) is the gap opening penalty
* ( B ) is the gap extension penalty
* ( L ) is the length of the gap



This formulation captures an important biological intuition:

* starting a gap is rare and should be penalized strongly
* extending an existing gap is more likely and should be penalized less

By adjusting ( A ) and ( B ), we can control the tendency of the algorithm to produce long contiguous gaps versus many short ones.

---

## **Scoring as a Modeling Choice**

At this point, it becomes clear that sequence alignment is not defined by a single universal scoring scheme. Instead, it is a **family of models**, each corresponding to different assumptions about sequence evolution.

Changing the scoring system can lead to different optimal alignments. This is not a flaw but a reflection of the fact that:

> **There is no single notion of similarity independent of context.**

For example:

* detecting conserved domains may require local alignment with BLOSUM matrices
* studying evolutionary divergence may favor different scoring parameters
* aligning closely related DNA sequences may allow simpler models

---

## **Conceptual Summary**

Scoring systems provide the bridge between biological assumptions and computational algorithms. Substitution matrices encode preferences for specific residue changes, while gap penalties model structural variations in sequences.

Together, these components define what we mean by similarity. The alignment algorithms then act as optimization procedures that identify the best explanation under this model.

---

## **Self-Check Questions**

1. Why is a simple match/mismatch scoring scheme biologically insufficient?
2. What information is captured by substitution matrices?
3. How can substitution scores be interpreted probabilistically?
4. Why are affine gap penalties more realistic than constant gap penalties?
5. How does the choice of scoring system influence alignment results?

