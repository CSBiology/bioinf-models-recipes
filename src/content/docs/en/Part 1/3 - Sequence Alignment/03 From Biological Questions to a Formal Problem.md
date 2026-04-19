---
title: "3.3 From Biological Questions to a Formal Problem"
sidebar:
  label: "3. From Biological Questions to a Formal Problem"
  order: 3
  group: "Chapter 3"
  part: "Part 1"
---

## 3.1 Representing Sequences Formally

To compare sequences computationally, we first need a precise representation.

We define two sequences:

- $X = x_1 x_2 x_3 \dots x_m$  
- $Y = y_1 y_2 y_3 \dots y_n$  

Each element $x_i$ and $y_j$ is drawn from a finite alphabet $\Sigma$:

- DNA: $\Sigma = \{A, C, G, T\}$  
- Proteins: $\Sigma = \{20 \text{ amino acids}\}$  

This abstraction removes biological detail and leaves us with:

> **Sequences as strings over a finite alphabet**

---

## 3.2 What Does Similarity Mean?

We now return to the central question:

> **How do we define the similarity between two sequences?**

At first glance, this seems simple. But as we have seen:

- sequences can be shifted  
- insertions and deletions occur  
- relevant signals may be local  

This means:

> **Similarity is not an intrinsic property — it depends on how we compare sequences**

We therefore need a precise definition.

---

## 3.3 Distance-Based Approaches

One way to define similarity is through **distance**.

### Hamming Distance

The Hamming distance counts the number of positions at which two sequences differ.

- only substitutions are allowed  
- sequences must have equal length  

Example:
X: GAGGTAGCGGCGTTTAAC
Y: GTGGTAACGGGGTTTAAC


Here, the Hamming distance is the number of mismatched positions.

Limitation:

> It cannot handle insertions or deletions.

---

### Edit Distance (Levenshtein Distance)

The edit distance extends this idea.

It is defined as:

> **The minimum number of edit operations required to transform one sequence into another**

Allowed operations:

- substitution  
- insertion  
- deletion  

Example:
X: TGGCCGCGCAAAAACAGC
Y: TGACCGCGCAAAA-CAGC


The edit distance reflects the minimal number of changes needed.

Key insight:

> **Biological variation can be modeled as a sequence of edit operations**

---

## 3.4 Limitations of Distance Measures

While distance measures are intuitive, they have limitations:

- they treat all substitutions equally  
- they do not distinguish biologically meaningful changes  
- they do not directly produce an alignment  

Most importantly:

> They do not explicitly model how sequences should be aligned.

---

## 3.5 From Distance to Alignment

Instead of defining similarity indirectly via distance, we take a different approach:

> **We define similarity as the quality of an alignment**

An alignment:

- arranges two sequences  
- introduces gaps where necessary  
- pairs residues across sequences  

We then assign a **score** to each alignment.

---

## 3.6 Sequence Alignment as an Optimization Problem

This leads to a new formulation:

> **The similarity between two sequences is the score of their best alignment**

More formally:

- consider all possible alignments of $X$ and $Y$  
- assign a score to each alignment  
- select the alignment with the highest score  

This transforms the biological question into:

> **An optimization problem**

---

## 3.7 The Computational Challenge

At first glance, the solution seems straightforward:

- generate all possible alignments  
- compute their scores  
- choose the best one  

However, this approach is infeasible.

The number of possible alignments grows exponentially with sequence length.

This leads to a key realization:

> **We need an efficient algorithm to find the optimal alignment without enumerating all possibilities**

---

## Transition to the Next Section

We now have a precise formulation:

- sequences as strings  
- alignments as structured comparisons  
- similarity as an optimization problem  

The remaining question is:

> **How can we compute the optimal alignment efficiently?**

This leads us to one of the central techniques in bioinformatics:

> **Dynamic programming**

### Learning Objectives

After this section, you should be able to:

- represent biological sequences in a formal mathematical way  
- define sequence similarity as an optimization problem  
- distinguish between distance-based and score-based formulations  
- understand the limitations of naive similarity measures  
### Self-Check Questions

- Why is it useful to represent sequences as strings over an alphabet?  
- What are the limitations of Hamming distance?  
- How does edit distance better reflect biological processes?  
- Why is sequence alignment naturally formulated as an optimization problem?  
- Why is brute-force alignment not feasible?  
