---
title: "3.1 From Molecular Function to Sequence Comparison"
sidebar:
  label: "3.1. From Molecular Function to Sequence Comparison"
  order: 2
  group: "Chapter 3"
  part: "Part 1"
---


## 3.1.1 How Cells Build Molecules

Living cells constantly produce molecules. The most familiar pathway is described by the central dogma of molecular biology:

- DNA is transcribed into RNA  
- RNA is translated into protein  

This process is **ribosomal**. It follows a universal genetic code and produces proteins in a highly standardized and conserved way.

However, biology is not limited to this single mechanism.

Some organisms produce complex and biologically active molecules through an alternative system known as **non-ribosomal peptide synthesis (NRPS)**.

These systems differ fundamentally from ribosomal synthesis:

- they do not directly rely on the genetic code  
- they assemble molecules step by step  
- each step is controlled by a specific functional unit within a large enzyme complex  

A useful mental model is:

> **Non-ribosomal peptide synthetases are molecular assembly lines.**



## 3.1.2 Different Organisms, Different Molecules

Different bacteria use NRPS systems to produce different molecules:

- *Bacillus brevis* produces **Tyrocidine**  
- *Streptomyces roseosporus* produces **Daptomycin**  
- *Amycolatopsis orientalis* produces **Vancomycin**  

These molecules are not arbitrary. Many of them are:

- antibiotics  
- highly specific in their activity  
- of great medical relevance  

This immediately raises a biological question:

> **Why do closely related organisms produce different molecules?**



## 3.1.3 The Assembly Line Inside the Cell

An NRPS enzyme consists of a sequence of modules arranged in a linear fashion.

Each module performs a specific task:

- it selects a particular amino acid  
- it activates and attaches it  
- it passes the growing chain to the next module  

Step by step, a complex molecule is constructed.

This leads to a crucial insight:

> **The sequence of modules determines the structure of the final molecule.**



## 3.1.4 Where Is the Specificity Encoded?

If each module selects a specific amino acid, then the key question becomes:

> **How does a module “know” which amino acid to choose?**

The answer must be encoded in the **protein sequence** of the module itself.

When we examine sequences of these modules, we observe short regions such as:

- `...LTKVGHIG...`  
- `...VGEIGSID...`  
- `...AWMFAAVL...`  

These short sequence segments are associated with different substrate specificities.

This suggests:

> **Small sequence patterns can determine biological function.**



## 3.1.5 From Biology to Computation

We now arrive at a central challenge:

- we have sequences (DNA or protein)  
- we suspect that similar sequences imply similar function  
- but the relevant signals are short and embedded in long sequences  

Even visually, comparing sequences is difficult:

- sequences may differ in length  
- insertions and deletions occur  
- important patterns are subtle  

This leads to a fundamental question:

> **How can we systematically compare sequences to detect functionally relevant similarities?**



## 3.1.6 Transition: Toward a Model of Similarity

To answer this question, we need more than intuition.

We need:

- a **model** that defines what similarity means  
- a **method** to compute similarity between sequences  

This is the central topic of this chapter:

> **Sequence alignment as a model of biological similarity.**


### Learning Objectives

After this section, you should be able to:

- describe the difference between ribosomal and non-ribosomal peptide synthesis  
- explain how NRPS systems function as molecular assembly lines  
- understand why sequence comparison is essential for linking sequence to function  
- formulate biological questions that lead to computational sequence analysis  


### Self-Check Questions

- What is the key difference between ribosomal and non-ribosomal peptide synthesis?  
- Why can NRPS systems be viewed as assembly lines?  
- How can small sequence regions determine molecular function?  
- Why is visual comparison of sequences insufficient?  
