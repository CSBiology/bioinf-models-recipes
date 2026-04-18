---
title: "Scoring Schemes: Encoding Biological Assumptions"
description: Explain how substitution scores and gap penalties encode biological assumptions in alignments.
---

# 5. Scoring Schemes: Encoding Biological Assumptions

## Learning Objectives

After this section, you should be able to:

- explain how scoring schemes define sequence similarity  
- distinguish between match, mismatch, and gap contributions  
- interpret substitution matrices biologically  
- understand the difference between simple and evolutionary scoring schemes  
- explain the role of gap penalties and their biological motivation  

---

## 5.1 Why Scoring Matters

In the previous section, we developed an algorithm to find the optimal alignment.

However, the algorithm itself does not define what “optimal” means.

This depends entirely on the **scoring scheme**.

> **The scoring scheme determines which alignments are considered good**

Different scoring schemes can lead to completely different alignments.

This makes scoring schemes a central modeling decision.

---

## 5.2 Components of a Scoring Scheme

A scoring scheme assigns a numerical value to any alignment.

It consists of two main components:

- **substitution scores**: how favorable it is to align two residues  
- **gap penalties**: how costly it is to introduce gaps  

The total alignment score is:

> **the sum of all substitution scores and gap penalties**

---

## 5.3 A Simple Scoring Scheme

We begin with a simple example:

- match: +1  
- mismatch: -1  
- gaps: ignored or treated as zero  

Example alignment:

```

ATGGCGT
ATG-AGT

```id="b5v4dp"

Score:

- matches contribute positively  
- mismatches reduce the score  

This simple scheme already allows us to compare alignments quantitatively.

However, it has clear limitations.

---

## 5.4 Limitations of Simple Scoring

The simple scoring scheme assumes:

- all mismatches are equally unlikely  
- all matches are equally informative  

This is biologically unrealistic.

For example:

- some amino acid substitutions are conservative  
- others drastically change structure or function  

This motivates more refined models.

---

## 5.5 Substitution Matrices

A more general approach is to use a **substitution matrix**.

This is a table that assigns a score to each possible pair of residues.

For DNA (4 letters), this is a $4 \times 4$ matrix.  
For proteins (20 amino acids), it is a $20 \times 20$ matrix.

Example (simplified DNA matrix):

- matches receive positive scores  
- mismatches receive negative scores  

This allows us to:

> **differentiate between types of substitutions**

---

## 5.6 Incorporating Biological Knowledge

We can refine substitution matrices using biological insight.

For example:

- A and G are chemically similar (purines)  
- C and T are chemically similar (pyrimidines)  

Thus, substitutions:

- A ↔ G  
- C ↔ T  

may be more likely than others.

We can encode this by assigning:

- higher scores to biologically plausible substitutions  
- lower scores to unlikely ones  

This leads to:

> **scoring schemes that reflect molecular constraints**

---

## 5.7 Protein Substitution Matrices

Protein sequences require more sophisticated models.

Amino acids differ in:

- size  
- charge  
- polarity  
- hydrophobicity  

Substitution matrices for proteins are typically derived from observed data.

Two widely used families are:

- **PAM (Point Accepted Mutation)**  
- **BLOSUM (Blocks Substitution Matrix)**  

These matrices are constructed from known alignments of related proteins.

---

## 5.8 PAM vs BLOSUM

The two matrix families differ in how they are constructed:

- PAM:
  - based on global alignments  
  - extrapolated from closely related sequences  
  - higher numbers indicate more divergence  

- BLOSUM:
  - based on local conserved regions  
  - derived from large datasets  
  - lower numbers indicate more divergence  

In practice:

- PAM is often used for modeling evolutionary distance  
- BLOSUM is widely used for practical sequence alignment  

---

## 5.9 Gap Penalties

In addition to substitutions, we must model insertions and deletions.

A gap corresponds to:

- an insertion in one sequence  
- or a deletion in the other  

We assign a **penalty** to gaps to reflect their biological cost.

---

## 5.10 Types of Gap Penalties

### Constant Gap Penalty

- each gap incurs the same cost  

Limitation:

- does not consider gap length  

---

### Linear Gap Penalty

- cost proportional to gap length  

\[
\text{gap penalty} = B \cdot L
\]

Where:

- $L$ is the length of the gap  
- $B$ is a constant  

---

### Affine Gap Penalty

The most commonly used model:

\[
\text{gap penalty} = A + B \cdot L
\]

Where:

- $A$ is the gap opening penalty  
- $B$ is the gap extension penalty  

This reflects biological reality:

> **Opening a gap is rare, extending it is relatively common**

---

## 5.11 Biological Interpretation of Gap Models

Different parameter choices lead to different alignment behavior:

- large $A$, small $B$:
  - few but long gaps  

- small $A$, large $B$:
  - many short gaps  

Affine gap penalties favor biologically plausible alignments, such as:

- insertion or deletion of entire regions  
- rather than fragmented gaps  

---

## 5.12 Scoring as a Model

At this point, we can reinterpret scoring schemes more fundamentally:

> **A scoring scheme is a model of evolutionary processes**

It encodes assumptions about:

- mutation rates  
- structural constraints  
- functional conservation  

Thus:

- choosing a scoring scheme is not just technical  
- it is a **scientific decision**

---

## Transition to the Next Section

So far, we have:

- defined alignment  
- developed an algorithm  
- introduced biologically meaningful scoring  

However, one important limitation remains:

> Global alignment assumes sequences are similar along their entire length.

In reality, many biological sequences share only **local regions of similarity**.

This leads us to:

> **Local alignment (Smith–Waterman)**

---

## Self-Check Questions

- Why does the scoring scheme determine the optimal alignment?  
- What are the limitations of simple match/mismatch scoring?  
- How do substitution matrices incorporate biological knowledge?  
- What is the difference between PAM and BLOSUM matrices?  
- Why are affine gap penalties biologically more realistic?  
```
