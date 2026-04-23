---
title: "3.2 Formalizing Sequence Similarity"
sidebar:
  label: "3.2 Formalizing Sequence Similarity"
  order: 2
  group: "Part 2"
  part: "Part 2"
---

# **3.2 Formalizing Sequence Similarity**

## **Learning Objectives**

After reading this section, you should be able to:

* Represent biological sequences as mathematical objects
* Define sequence similarity using formal distance measures
* Distinguish between Hamming distance and edit distance
* Understand how edit operations model biological processes
* Recognize the limitations of simple distance measures

---

## **From Intuition to Definition**

In the previous section, we compared sequences of adenylation domains and manually adjusted them by introducing gaps and shifting residues. This process allowed us to uncover conserved regions and functional motifs.

However, this comparison relied on intuition:

* we “recognized” matches
* we “decided” where to insert gaps
* we “judged” which alignment looked better

To move beyond intuition, we must answer a fundamental question:

> **What does it mean, in a precise sense, for two sequences to be similar?**

---

## **Sequences as Mathematical Objects**

We begin by representing biological sequences in a formal way.

A sequence can be viewed as a string over a finite alphabet. For example:

* DNA sequences use the alphabet
  $$
  \mathcal{A} = \{A, C, G, T\}
  $$
* Protein sequences use an alphabet of 20 amino acids

Formally, we write two sequences as:

$$
X = x_1 x_2 x_3 \dots x_m
\qquad
Y = y_1 y_2 y_3 \dots y_n
$$

where each $x_i$ and $y_j$ is a symbol from the alphabet $\mathcal{A}$. 

At this point, the biological problem has been transformed into a **string comparison problem**.

---

## **A First Attempt: Position-by-Position Comparison**

A simple idea is to compare sequences position by position. If the sequences have equal length, we can count the number of positions at which they differ.

This leads to the **Hamming distance**.

### **Definition (Hamming Distance)**

For two sequences of equal length, the Hamming distance is the number of positions at which the corresponding symbols differ.

### **Example**

Consider the sequences:

```
X: GAGGTAGCGGCGTTTAAC
Y: GTGGTAACGGGGTTTAAC
```

Comparing position by position, we find that they differ in three positions. Therefore:

$$
d_H(X, Y) = 3
$$



---

## **Interpretation of Hamming Distance**

The Hamming distance has a simple and intuitive interpretation:

* Each difference corresponds to a **substitution**
* The distance counts the **minimum number of substitutions** needed to transform one sequence into the other

From a biological perspective, this corresponds to a model in which:

* mutations occur only as substitutions
* no insertions or deletions are allowed

---

## **Limitations of Hamming Distance**

While useful, the Hamming distance is severely limited.

First, it requires sequences to have the **same length**. This is rarely the case in real biological data.

Second, it assumes that all differences are substitutions. However, as we saw in Section 3.1, biological sequences often differ by:

* insertions
* deletions
* shifts in alignment

For example, consider two sequences where one contains an extra residue. A position-by-position comparison will incorrectly register many mismatches, even though a single insertion event may explain the difference.

This reveals a key limitation:

> **Hamming distance cannot capture the types of variations that arise in biological sequences.**

---

## **Extending the Model: Edit Operations**

To overcome these limitations, we introduce a more flexible framework based on **edit operations**.

The idea is simple:

Instead of comparing sequences directly, we ask:

> **What is the minimum number of operations required to transform one sequence into the other?**

The allowed operations are:

* **Substitution**: replace one symbol with another
* **Insertion**: insert a symbol
* **Deletion**: remove a symbol

These operations correspond naturally to biological processes:

* substitutions model point mutations
* insertions and deletions (collectively called *indels*) model structural changes in sequences



---

## **Edit Distance (Levenshtein Distance)**

This leads to the concept of **edit distance**, also known as **Levenshtein distance**.

### **Definition (Edit Distance)**

The edit distance between two sequences is the minimum number of edit operations (substitutions, insertions, deletions) required to transform one sequence into the other.

---

## **Worked Example**

Consider the sequences:

```
X: TGGCCGCGCAAAAACAGC
Y: TGACCGCGCAAAA-CAGC
```

Here, we can transform $X$ into $Y$ using two operations:

1. Substitute one residue
2. Introduce one deletion (or insertion, depending on perspective)

Thus, the edit distance is:

$$
d_{\text{edit}}(X, Y) = 2
$$



---

## **Interpretation of Edit Distance**

The edit distance provides a much richer model of sequence similarity:

* It allows sequences of different lengths
* It accounts for insertions and deletions
* It identifies the **minimal transformation path** between sequences

From a modeling perspective, we are now making the following assumptions:

* sequences evolve through discrete edit operations
* all operations have equal cost
* the best explanation is the one with the fewest operations

---

## **From Distance to Similarity**

So far, we have defined **distance measures**, where smaller values indicate more similar sequences.

However, in many contexts, it is more natural to think in terms of **similarity scores**, where larger values indicate better matches.

This leads to an equivalent formulation:

> **Define the similarity of two sequences as the score of their best alignment.**



This shift from *distance* to *score* is subtle but important:

* Distance emphasizes differences
* Similarity emphasizes matches and conserved structure

Both perspectives are mathematically related, but the scoring formulation is more flexible and better suited for biological modeling.

---

## **Conceptual Bridge to Alignment**

At this point, we have all the ingredients needed to define sequence alignment formally:

* sequences as strings
* edit operations as transformations
* distance or scoring functions to evaluate similarity

However, one key question remains:

> **How do we efficiently find the best sequence of operations or the best alignment?**

A naive approach would be to enumerate all possible ways of transforming one sequence into another. As we will see in the next section, this quickly becomes computationally infeasible.

This motivates the introduction of **dynamic programming**, which allows us to solve the problem efficiently by exploiting its recursive structure.

---

## **Conceptual Summary**

The intuitive notion of sequence similarity can be formalized using distance measures based on edit operations.

* **Hamming distance** models substitutions only and requires equal-length sequences
* **Edit distance** allows substitutions, insertions, and deletions, providing a more realistic model

These definitions transform sequence comparison into an optimization problem: finding the minimal transformation or, equivalently, the highest-scoring alignment.

---

## **Self-Check Questions**

1. Why is Hamming distance insufficient for comparing biological sequences?
2. How do insertion and deletion operations improve the realism of sequence comparison?
3. In what sense does edit distance define an optimization problem?
4. How are distance-based and score-based formulations of similarity related?
