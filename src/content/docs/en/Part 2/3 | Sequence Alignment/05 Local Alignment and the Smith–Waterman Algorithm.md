---
title: "3.5 Local Alignment and the Smith–Waterman Algorithm"
sidebar:
  label: "3.5 Local Alignment and the Smith–Waterman Algorithm"
  order: 5
  group: "Part 2"
  part: "Part 2"
---

# **3.5 Local Alignment and the Smith–Waterman Algorithm**

## **Learning Objectives**

After reading this section, you should be able to:

* Explain why global alignment is often inappropriate for biological sequences
* Define local alignment and its biological interpretation
* Derive the modified dynamic programming recurrence for local alignment
* Perform traceback for local alignments
* Understand how local alignment detects conserved regions within larger sequences

---

## **Why Global Alignment Is Not Enough**

In Section 3.4, we developed the Needleman–Wunsch algorithm for **global alignment**, which aligns two sequences over their entire length.

This approach implicitly assumes that:

> **The sequences are related along their full extent.**

While this assumption is valid in some cases, it is often violated in biological systems.

Let us return to the example that motivated this chapter: **non-ribosomal peptide synthetases (NRPS)**.

These enzymes are **modular**:

* Each module performs a specific function
* Only certain regions, such as adenylation domains, are conserved
* Other regions may differ substantially or be absent entirely

When comparing two NRPS proteins, it is therefore unlikely that the entire sequences are homologous. Instead, **only specific segments correspond to each other**.

This leads to a mismatch between model and biology:

* Global alignment forces unrelated regions to align
* This introduces artificial gaps and mismatches
* The resulting score may obscure biologically meaningful similarity

This observation motivates a new question:

> **How can we detect similarity that is confined to subsequences rather than entire sequences?**

---

## **From Global to Local Similarity**

To address this, we redefine the alignment problem.

Instead of aligning complete sequences, we allow the alignment to focus on **substrings**:

* any contiguous segment of sequence $X$
* any contiguous segment of sequence $Y$

The goal is then:

> **Find the pair of substrings whose alignment yields the highest score.**

This is the essence of **local alignment**.

---

## **Conceptual Interpretation**

Local alignment changes the interpretation of the problem in an important way.

* Global alignment asks:
  → *How similar are these sequences overall?*

* Local alignment asks:
  → *Do these sequences share a region of high similarity?*

This distinction is crucial in many biological contexts:

* detecting conserved domains in proteins
* identifying regulatory motifs in DNA
* finding homologous regions between otherwise unrelated sequences

In the NRPS example, local alignment allows us to focus on **functionally relevant domains**, ignoring unrelated flanking regions.

---

## **Defining Local Alignment**

A local alignment is defined as an alignment of substrings:

$$
x_i \dots x_k \quad \text{and} \quad y_j \dots y_\ell
$$

such that the alignment score is maximized over all possible choices of $i, k, j, \ell$.

Importantly:

* unaligned regions at the beginning and end incur **no penalty**
* only the aligned region contributes to the score



---

## **The Smith–Waterman Recurrence**

Surprisingly, we can solve the local alignment problem using a slight modification of the dynamic programming framework introduced earlier.

We again define a matrix $F(i,j)$, but now with a crucial change:

$$
F(i,j) = \max \begin{cases}
0 \
F(i-1, j-1) + s(x_i, y_j) \
F(i-1, j) + g \
F(i, j-1) + g
\end{cases}
$$



---

## **Why the Zero Matters**

The addition of the term $0$ is the defining feature of local alignment.

It has a simple but powerful effect:

> **If all alignment options lead to a negative score, we reset the score to zero and start a new alignment.**

This allows the algorithm to:

* ignore poorly matching prefixes
* focus only on regions of high similarity

In contrast to global alignment, where the path must span the entire matrix, local alignment allows paths to:

* start anywhere
* end anywhere

---

## **Initialization**

Because of the zero reset, initialization becomes trivial:

$$
F(i,0) = 0
\qquad
F(0,j) = 0
$$

This reflects the idea that an alignment can begin at any position without penalty.

---

## **A Worked Example**

Let us consider the sequences:

$$
X = \text{ACGC}
\qquad
Y = \text{GATTGA}
$$

with the scoring scheme:

* match: $+4$
* mismatch: $-1$
* gap: $-2$



---

### **Step 1: Initialize the Matrix**

All entries in the first row and column are set to zero:

```id="zj7h4k"
      -   G   A   T   T   G   A
  -   0   0   0   0   0   0   0
  A   0
  C   0
  G   0
  C   0
```

---

### **Step 2: Fill the Matrix**

We compute each cell using the recurrence relation.

At each step:

* negative values are replaced by zero
* positive values indicate locally good alignments

As the matrix is filled, regions of high similarity emerge as **islands of high scores**.

---

### **Step 3: Identify the Maximum**

Unlike global alignment, the optimal score is not necessarily at $(m,n)$.

Instead:

> **The highest value anywhere in the matrix corresponds to the best local alignment.**

---

### **Step 4: Traceback**

Traceback begins at the cell with the maximum score and proceeds:

* diagonally, up, or left
* following the path of optimal choices
* **until a cell with value 0 is reached**

This stopping condition reflects the beginning of the local alignment.

---

## **Example Alignments**

For the example above, optimal local alignments include:

```id="l6mq2v"
AC-G
ATTG
```

or

```id="w1b9xz"
A-CG
ATTG
```



These alignments capture a region of strong similarity, even though the full sequences differ substantially.

---

## **Conceptual Comparison: Global vs Local Alignment**

The difference between the two approaches can be summarized as follows:

| Aspect         | Global Alignment                  | Local Alignment                |
| -------------- | --------------------------------- | ------------------------------ |
| Scope          | Entire sequences                  | Substrings                     |
| Initialization | Gap penalties                     | Zero                           |
| Recurrence     | No reset                          | Includes reset to 0            |
| Traceback      | From $(m,n)$                      | From maximum cell              |
| Use case       | Similar sequences of equal length | Detection of conserved regions |

---

## **Biological Interpretation**

Local alignment is particularly powerful because it aligns with how biological sequences evolve:

* domains can be inserted, removed, or rearranged
* only certain regions remain conserved
* functional motifs may be short and localized

Thus, local alignment allows us to detect **biologically meaningful similarity** even in the presence of large unrelated regions.

In the context of NRPS, this means we can:

* identify conserved catalytic domains
* detect substrate-specific motifs
* compare functionally relevant regions across diverse organisms

---

## **Conceptual Summary**

Local alignment extends the alignment framework to situations where similarity is confined to subsequences. By allowing alignments to start and end freely, and by resetting negative scores, the Smith–Waterman algorithm identifies regions of high similarity within larger sequences.

This modification transforms sequence alignment from a global comparison tool into a powerful method for **pattern discovery and functional annotation**.

---

## **Self-Check Questions**

1. Why does global alignment fail for modular proteins such as NRPS enzymes?
2. What is the role of the zero term in the Smith–Waterman recurrence?
3. Why can the optimal local alignment start and end at arbitrary positions?
4. How does traceback differ between global and local alignment?
5. In which biological scenarios is local alignment preferred over global alignment?

