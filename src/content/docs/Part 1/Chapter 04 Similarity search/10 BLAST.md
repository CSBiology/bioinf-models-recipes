---
title: "BLAST: The Standard Tool"
description: Explain BLAST's seed-based workflow, neighborhood words, extension, and practical trade-offs.
---

## **4.10 BLAST: The Standard Tool**

While FASTA established the fundamental framework for heuristic similarity search, further improvements were needed to increase sensitivity without sacrificing speed. This led to the development of **BLAST**, which has become the standard tool for sequence similarity search in molecular biology.

BLAST builds on the same core ideas as FASTA but introduces refinements that make it both faster and more sensitive in many practical situations.

### **From exact matches to similarity-aware seeds**

One of the key limitations of FASTA is its reliance on **exact k-mer matches** during the initial filtering step. While efficient, this approach can miss biologically meaningful similarities when mutations disrupt exact matches.

BLAST addresses this by introducing a more flexible concept:

> **Seeds do not need to be identical. They only need to be similar enough.**

Instead of searching only for exact matches, BLAST considers **words whose similarity score exceeds a threshold**.

This is achieved using substitution matrices such as:

* BLOSUM matrices
* PAM matrices

These matrices assign scores to amino acid substitutions based on evolutionary likelihood.

As a result, BLAST can detect matches such as:

* conservative substitutions
* functionally similar residues

even when sequences are not identical at the local level.

### **The concept of word neighborhoods**

BLAST introduces the idea of a **word neighborhood**.

For each word in the query:

* Generate all possible words of the same length
* Keep only those whose similarity score exceeds a threshold $T$

This set of similar words forms the **neighborhood**.

During the search:

* Matches to any of these neighborhood words are considered seeds

This significantly increases sensitivity, especially for protein sequences where substitutions are common.

### **The BLAST workflow**

The overall structure of BLAST follows the seed-and-extend paradigm, but with important refinements.

1. **Word generation**

   * The query sequence is split into overlapping words of length $w$

2. **Neighborhood expansion**

   * For each word, similar words above threshold $T$ are generated

3. **Database search**

   * Occurrences of these words in the database are identified
   * These matches serve as seeds

4. **Seed extension**

   * Seeds are extended in both directions
   * The alignment score is updated incrementally

5. **Termination condition**

   * Extension stops when the score drops below a threshold

6. **Statistical evaluation**

   * High-scoring alignments are evaluated for significance

This workflow balances efficiency and sensitivity in a highly effective way.

### **Extending alignments: maximal segment pairs**

During the extension phase, BLAST constructs what are known as:

* **maximal segment pairs (MSPs)**

These are:

* Local alignments
* Without gaps (in early versions)
* That achieve high scores

The algorithm extends each seed until:

* The alignment score no longer improves
* Or drops below a predefined cutoff

This ensures that only promising regions are explored in detail.

### **Parameter tuning and trade-offs**

BLAST introduces several parameters that control its behavior:

* **Word length $w$**

  * Smaller values:

    * Higher sensitivity
    * Slower
  * Larger values:

    * Faster
    * Less sensitive

* **Threshold $T$**

  * Lower threshold:

    * More neighborhood words
    * Higher sensitivity
  * Higher threshold:

    * Fewer seeds
    * Faster execution

* **Extension cutoff**

  * Determines when to stop extending a seed

These parameters allow BLAST to be adapted to different biological questions, such as:

* Highly similar sequences
* Distant homologs
* Large-scale genome searches

### **Why BLAST became dominant**

BLAST is widely used because it achieves an effective balance between:

* Speed
* Sensitivity
* Statistical rigor

Compared to FASTA, it offers:

* Better detection of biologically relevant matches
* Efficient handling of large databases
* Built-in statistical interpretation of results

In practice, BLAST is often the first tool applied to a new sequence.

### **Biological relevance**

In real-world applications, BLAST enables:

* Identification of homologous genes
* Functional annotation of proteins
* Detection of conserved domains
* Exploration of evolutionary relationships

In the context of enzymatic systems:

* It allows classification of domains
* Identification of conserved functional regions
* Comparison across species and pathways

### **Learning objectives**

After working through this section, you should be able to:

* Describe the main steps of the BLAST algorithm
* Explain the concept of word neighborhoods
* Understand how substitution matrices improve sensitivity
* Identify key parameters and their effects

### **Self-check questions**

1. How does BLAST differ from FASTA in its treatment of seeds?
2. What is a word neighborhood, and why is it useful?
3. How do substitution matrices influence similarity detection?
4. How do parameters such as $w$ and $T$ affect performance?
