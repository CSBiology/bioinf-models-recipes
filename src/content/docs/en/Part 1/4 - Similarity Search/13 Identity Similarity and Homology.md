---
title: "Identity, Similarity, and Homology"
description: Clarify the differences between exact identity, biological similarity, and evolutionary homology.
---

## **4.13 Identity, Similarity, and Homology**

Similarity search produces numerical scores, alignments, and rankings. However, interpreting these results correctly requires careful use of terminology. In particular, the terms **identity**, **similarity**, and **homology** are often confused, even though they describe fundamentally different concepts.

Clarifying these distinctions is essential for rigorous biological reasoning.

### **Identity: exact matches**

Identity refers to the proportion of positions in an alignment where the residues are **exactly the same**.

* Typically expressed as a percentage
* Depends on the specific alignment
* Sensitive to alignment length and gap placement

For example:

* If 70 out of 100 aligned amino acids are identical
  → identity = 70%

Identity is a purely **descriptive measure**. It does not incorporate any notion of biochemical similarity or evolutionary likelihood.

### **Similarity: biologically informed comparison**

Similarity extends this idea by considering **biochemically related substitutions**.

Two residues are considered similar if:

* They have comparable physicochemical properties
* Their substitution is favored in evolutionary models

This is typically determined using substitution matrices such as:

* BLOSUM matrices
* PAM matrices

For example:

* Substituting leucine with isoleucine may be considered similar
* Substituting glycine with tryptophan is less likely and receives a lower score

Similarity is therefore:

* Context-dependent
* Model-dependent
* More informative than identity for protein sequences

Like identity, similarity is expressed quantitatively, often as a percentage or score.

### **Homology: an evolutionary statement**

Homology is fundamentally different.

It is not a measure, but a **binary evolutionary relationship**.

Two sequences are homologous if:

> They share a common ancestor.

This has important consequences:

* Homology is **true or false**, not a percentage
* It cannot be directly measured
* It must be **inferred** from evidence, such as similarity

This leads to a common but important clarification:

> It is incorrect to say “two sequences are 70% homologous.”

Instead, one should say:

* “The sequences share 70% identity”
* “The sequences are likely homologous based on their similarity”

### **From similarity to homology inference**

Similarity search provides evidence for homology.

* High similarity strongly suggests shared ancestry
* Low similarity may still indicate homology, especially for conserved domains
* Very low similarity makes inference uncertain

However, similarity alone is not sufficient:

* Convergent evolution can produce similar patterns
* Short matches may occur by chance
* Low complexity regions can inflate similarity scores

Thus, homology inference requires:

* Statistical evaluation
* Biological context
* Often additional analyses

### **Local versus global considerations**

Another important distinction concerns the **extent of similarity**.

Two sequences may be:

* Globally similar across their entire length
* Locally similar in specific regions only

In many biological systems, especially modular proteins:

* Different regions may have different evolutionary histories
* Only certain domains may be homologous

This means:

> Homology is often **local**, not global.

In such cases, it is more precise to say:

* “These sequences share a homologous domain”
  rather than
* “These sequences are homologous over their entire length”

### **A common source of confusion**

In practice, the misuse of terminology can lead to incorrect conclusions.

For example:

* High identity does not guarantee identical function
* Similarity does not imply complete structural equivalence
* Homology does not imply conservation of all functional aspects

Careful interpretation is therefore essential.

### **Biological implications**

Understanding these distinctions is particularly important when:

* Annotating newly discovered sequences
* Comparing proteins across species
* Inferring evolutionary relationships

In enzymatic systems, for example:

* Homologous proteins may catalyze related but distinct reactions
* Small sequence changes can alter substrate specificity

Thus, similarity provides clues, but not certainty.

### **Learning objectives**

After working through this section, you should be able to:

* Define identity, similarity, and homology
* Distinguish between descriptive measures and evolutionary relationships
* Explain why homology is not expressed as a percentage
* Interpret similarity search results with appropriate terminology

### **Self-check questions**

1. What is the difference between identity and similarity?
2. Why is homology considered a binary concept?
3. Why is the phrase “percent homology” incorrect?
4. How can similarity be used to infer homology, and what are its limitations?
