---
title: "4.5 The BLAST Algorithm"
sidebar:
  label: "4.5 The BLAST Algorithm"
  order: 5
  group: "Part 2"
  part: "Part 2"
---

## **4.5 The BLAST Algorithm**

The seed-and-extend paradigm provides a general strategy for efficient similarity search. The **Basic Local Alignment Search Tool (BLAST)** is one of its most influential and widely used realizations. Since its introduction in 1990, BLAST has become a standard method for querying biological sequence databases, precisely because it achieves a careful balance between computational efficiency and biological sensitivity.

Rather than attempting to compute optimal alignments exhaustively, BLAST operationalizes the idea that **high-scoring alignments can be detected through short local signals** and refined only where necessary.

---

### **Conceptual Overview**

At its core, BLAST follows the logic developed in the previous section:

1. Break the query into short words
2. Identify matches of these words in the database
3. Extend these matches into longer alignments
4. Evaluate their statistical significance

This workflow reflects a layered strategy:

* **fast filtering** at the beginning,
* **progressively more detailed computation** at later stages.

Each step reduces the number of candidate regions while increasing the accuracy of the evaluation.

---

### **Step 1: Word Generation**

Given a query sequence $Q$, BLAST begins by decomposing it into overlapping words of fixed length $w$.

For a protein sequence, a typical choice is $w = 3$, while for nucleotide sequences, $w$ is often larger. For example, for

$$
Q = \texttt{IKMQRHIKW},
$$

the words are:

$$
\texttt{IKM}, \quad \texttt{KMQ}, \quad \texttt{MQR}, \quad \dots
$$

These words form the basis of the initial search.

However, BLAST goes beyond exact matching. Instead of considering only identical words, it constructs a **neighborhood** for each word: a set of similar words whose alignment score with the original word exceeds a threshold $T$. 

This allows BLAST to detect biologically meaningful similarities even when no exact match is present.

---

### **Step 2: Database Scanning and Seed Detection**

In the next step, BLAST scans the database for occurrences of these words or their neighbors.

Each occurrence defines a **seed**, that is, a position where the query and a database sequence share a short region of similarity. Because word lookup can be implemented efficiently using indexing or hashing, this step is computationally fast.

Importantly, this phase acts as a **filter**:

* regions without word matches are ignored,
* only regions containing seeds are considered for further analysis.

This drastically reduces the number of candidate regions.

---

### **Step 3: Ungapped Extension**

Once seeds have been identified, BLAST attempts to extend them into longer alignments.

The initial extension is typically **ungapped**, meaning that insertions and deletions are not yet considered. Starting from the seed, the algorithm extends the alignment in both directions along the diagonal, updating the score at each step.

Extension continues as long as the score improves or does not fall below a threshold relative to the best score observed so far. This produces what are known as **high-scoring segment pairs (HSPs)**. 

The key idea is that only seeds that can be extended into sufficiently high-scoring segments are retained.

---

### **Step 4: Gapped Extension (Refinement)**

In more advanced versions of BLAST, promising ungapped alignments are further refined using **gapped extension**, which allows insertions and deletions.

At this stage, a more expensive alignment procedure is applied, but only to a small number of candidate regions. This step brings the result closer to a true local alignment, while still avoiding the cost of full dynamic programming across the entire sequence.

---

### **Step 5: Scoring and Ranking**

Each resulting alignment is assigned a score based on:

* substitution matrices (e.g. amino acid similarity),
* gap penalties,
* alignment length.

The database sequences are then ranked according to these scores. However, as we will see in the next section, raw scores alone are not sufficient to assess biological relevance.

---

### **Why Is BLAST Fast?**

The efficiency of BLAST arises from several key design choices:

* **Early filtering** through word matching eliminates most of the search space
* **Selective extension** ensures that computation is focused on promising regions
* **Incremental refinement** avoids expensive alignment unless necessary

In contrast to dynamic programming, which evaluates all possible alignments, BLAST evaluates only a carefully chosen subset.

The lecture material emphasizes this trade-off:

> Similarity search reduces the search space to gain speed, at the cost of some sensitivity. 

---

### **A Conceptual Interpretation**

BLAST can be understood as an algorithm that searches for **evidence of similarity** rather than similarity itself.

* Word matches provide initial evidence.
* Extension tests whether this evidence can be strengthened.
* Scoring and statistics evaluate whether the evidence is meaningful.

This layered approach reflects a general principle in computational biology:

> **Strong biological signals can often be detected through weak but consistent local patterns.**

---

### **Limitations**

Despite its success, BLAST has inherent limitations:

* **Heuristic nature**
  Some true alignments may be missed if no suitable seed is found.

* **Parameter dependence**
  Results depend on choices such as word size and threshold $T$.

* **Sensitivity to sequence composition**
  Low-complexity regions can produce misleading matches.

These limitations highlight that BLAST is not a perfect substitute for exact alignment, but rather a practical compromise.

---

### **Summary**

BLAST operationalizes the seed-and-extend paradigm in a concrete and efficient algorithm:

* it identifies short similar words,
* uses them as seeds,
* extends them into high-scoring segments,
* and ranks the results based on alignment scores.

Its success lies in its ability to drastically reduce the search space while retaining sensitivity to biologically meaningful similarity.

---

### **Self-Check Questions**

1. What is the purpose of generating neighborhoods of words in BLAST?

2. Why does BLAST perform ungapped extension before gapped refinement?

3. How do high-scoring segment pairs (HSPs) relate to local alignment?

4. Why is early filtering essential for BLAST’s efficiency?

5. What types of alignments might BLAST fail to detect?

