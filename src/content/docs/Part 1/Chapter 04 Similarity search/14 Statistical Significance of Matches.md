## **4.14 Statistical Significance of Matches**

Up to this point, similarity search has produced alignments and scores that reflect how well two sequences match. However, an important question remains:

> **When is a similarity score actually meaningful?**

A high score alone does not guarantee biological relevance. Even random sequences can produce matches with non-zero scores. To distinguish meaningful matches from random ones, we need a **statistical framework**.

### **Why raw scores are not enough**

Alignment algorithms assign scores based on:

* Matches and mismatches
* Substitution matrices
* Gap penalties

These scores depend on:

* Sequence length
* Composition of residues
* Choice of scoring parameters

As a result:

* A score of 50 may be highly significant in one context
* But completely unremarkable in another

Therefore, raw scores are not directly comparable across different searches.

### **The null hypothesis**

To interpret a score, we introduce a statistical model.

The key idea is to define a **null hypothesis**:

> The sequences are unrelated, and any observed similarity is due to chance.

Under this assumption, we can ask:

* How likely is it to observe a score at least as high as the one we obtained?

This transforms similarity search into a statistical test.

### **P-value: probability of observing a score**

The **p-value** measures:

> The probability of obtaining a score at least as extreme as the observed one under the null hypothesis.

In this context:

* A small p-value indicates that the match is unlikely to occur by chance
* A large p-value suggests that the match may be random

Formally:

* $p = P(S \geq x)$

where $S$ is the alignment score and $x$ is the observed value.

### **From many comparisons to expectation**

In database searches, we perform many comparisons simultaneously.

* One query is compared against many sequences
* Even rare events can occur simply due to the large number of trials

This leads to the concept of the **E-value**.

### **E-value: expected number of random hits**

The **E-value** represents:

> The expected number of alignments with a score at least as high as the observed one that would occur by chance in the database.

It is related to the p-value but accounts for:

* The size of the database
* The number of comparisons performed

Interpretation:

* $E = 1$
  → One such match is expected by chance

* $E \ll 1$
  → The match is unlikely to be random

* $E \gg 1$
  → Many such matches are expected by chance

In practice:

* Smaller E-values indicate more significant matches
* Values such as $10^{-5}$ or lower are often considered strong evidence

### **Extreme value distribution**

A key result in sequence alignment theory is that:

> The distribution of optimal local alignment scores follows an **extreme value distribution** (Gumbel distribution).

This differs from the familiar normal distribution.

The reasoning is:

* We are not interested in all scores
* We focus on the **maximum score** obtained among many comparisons

The maximum of many random variables tends to follow an extreme value distribution.

This leads to a mathematical model for the probability of observing a score:

* $P(S > x) = 1 - e^{-K M N e^{-\lambda x}}$

where:

* $M$ and $N$ are sequence lengths
* $K$ and $\lambda$ are parameters depending on the scoring system

This formula forms the basis for computing E-values in tools such as BLAST.

### **Dependence on database size**

An important consequence is that statistical significance depends on the size of the database.

* Larger databases increase the probability of random matches
* The same alignment score may be:

  * Significant in a small database
  * Less significant in a large database

Thus:

> **Significance is context-dependent.**

This is critical when comparing results across different datasets.

### **Interpreting results in practice**

When analyzing similarity search results, it is important to consider:

* The E-value as the primary indicator of significance
* The length and coverage of the alignment
* The biological plausibility of the match

A strong result typically combines:

* Low E-value
* Consistent alignment across a meaningful region
* Agreement with known biological patterns

### **Learning objectives**

After working through this section, you should be able to:

* Explain why raw alignment scores are insufficient for interpretation
* Define and interpret p-values and E-values
* Understand the role of the null hypothesis
* Describe why alignment scores follow an extreme value distribution

### **Self-check questions**

1. Why can random sequences produce non-zero alignment scores?
2. What does a p-value represent in similarity search?
3. How does the E-value differ from the p-value?
4. Why does database size influence statistical significance?
