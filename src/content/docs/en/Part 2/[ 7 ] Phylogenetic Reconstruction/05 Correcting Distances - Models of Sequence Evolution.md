---
title: "7.5 Correcting Distances: Models of Sequence Evolution"
sidebar:
  label: "7.5 Correcting Distances: Models of Sequence Evolution"
  order: 5
  group: "Part 2"
  part: "Part 2"
---

# **7.5 Correcting Distances: Models of Sequence Evolution**

### **Learning Objectives**

After reading this section, you should be able to:

* explain why observed sequence differences underestimate true evolutionary distance
* understand the concept of multiple and hidden substitutions
* describe how mutation processes can be modeled probabilistically
* derive the Jukes–Cantor correction from first principles
* interpret corrected distances in a biological context

---

### **When Observed Differences Are Not Enough**

In the previous section, we introduced distances as a way of summarizing sequence differences. A natural choice is to measure the fraction of positions at which two sequences differ.

At first glance, this seems to provide a reasonable estimate of evolutionary divergence. However, this measure hides a fundamental problem.

A difference observed at a position does not necessarily correspond to a single mutation. Likewise, the absence of a difference does not imply that no mutations have occurred.

Over evolutionary time, multiple substitutions may occur at the same position. Some of these changes may overwrite earlier ones, while others may even restore the original state.

As a result, the observed fraction of differences systematically underestimates the true number of evolutionary events.

---

### **Hidden Substitutions and Loss of Information**

To understand this more clearly, consider a single nucleotide position. Suppose we compare two sequences and observe different nucleotides.

This difference may have arisen through a single substitution. However, it may also be the result of multiple substitutions occurring sequentially. Conversely, if two sequences share the same nucleotide, it is still possible that mutations occurred but were reversed.

What we observe is only the final state. The intermediate steps are hidden.

This leads to an important conclusion:

> **The observed sequence is a compressed and partially erased record of the underlying evolutionary process**

As divergence increases, more substitutions accumulate, and more information is lost. Eventually, sequences may become so different that the observed differences no longer reflect the true evolutionary distance.

---

### **Modeling Mutation as a Random Process**

To correct for this effect, we need to move beyond counting differences and instead model how mutations occur over time.

A natural way to do this is to treat mutations as random events. Each position in a sequence can be viewed as evolving independently, undergoing substitutions at random times.

This situation can be modeled using a **Poisson process**, which describes the number of events occurring in a given time interval.

If the expected number of substitutions at a site is ( \lambda ), the probability of observing exactly ( k ) substitutions is:

[
P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}
]

Of particular importance is the probability that **no substitution occurs**:

[
P(X = 0) = e^{-\lambda}
]

This expression will serve as the starting point for deriving a corrected distance.

---

### **From Mutation Events to Observable Differences**

The probability ( e^{-\lambda} ) represents the chance that a position has not changed at all. Therefore, the probability that **at least one substitution has occurred** is:

[
1 - e^{-\lambda}
]

At this point, we might be tempted to equate this directly with the observed fraction of differences. However, this would be incorrect, because not all substitutions lead to observable differences.

In DNA, there are four possible nucleotides. After a substitution, a nucleotide may change into any of the three alternatives. Moreover, multiple substitutions may occur, and these may return the nucleotide to its original state.

To account for this, we must consider the full space of possible substitutions.

---

### **The Jukes–Cantor Model**

The Jukes–Cantor model introduces a simplifying assumption: all nucleotides occur with equal frequency, and all substitutions are equally likely.

Under this model, the probability that a nucleotide remains unchanged after time ( t ) can be derived by considering all possible substitution paths.

The result is:

[
P(\text{same}) = \frac{1}{4} + \frac{3}{4} e^{- \frac{4}{3} \lambda}
]

The probability that the nucleotide is different is therefore:

[
P(\text{different}) = 1 - P(\text{same}) = \frac{3}{4} \left(1 - e^{- \frac{4}{3} \lambda} \right)
]

This quantity corresponds to the **observed fraction of differences**, which we denote by ( d ):

[
d = \frac{3}{4} \left(1 - e^{- \frac{4}{3} \lambda} \right)
]

---

### **Deriving the Corrected Distance**

We now solve this equation for ( \lambda ), which represents the expected number of substitutions.

Starting from:

[
d = \frac{3}{4} \left(1 - e^{- \frac{4}{3} \lambda} \right)
]

we rearrange:

[
\frac{4}{3} d = 1 - e^{- \frac{4}{3} \lambda}
]

[
e^{- \frac{4}{3} \lambda} = 1 - \frac{4}{3} d
]

Taking the logarithm:

[

* \frac{4}{3} \lambda = \ln\left(1 - \frac{4}{3} d\right)
  ]

[
\lambda = - \frac{3}{4} \ln\left(1 - \frac{4}{3} d\right)
]

This gives the **Jukes–Cantor corrected distance**:

[
D = - \frac{3}{4} \ln\left(1 - \frac{4}{3} d\right)
]

---

### **Interpreting the Result**

This formula transforms the observed fraction of differences into an estimate of the true number of substitutions.

When ( d ) is small, the correction is minimal, and the observed distance is a good approximation. As ( d ) increases, the correction becomes more significant, reflecting the increasing likelihood of multiple substitutions.

An important consequence is that the corrected distance grows faster than the observed distance. This accounts for the loss of information caused by hidden substitutions.

At very high divergence, the observed fraction of differences approaches a limit. In this regime, sequences have lost most information about their shared history, and distance estimates become unreliable.

---

### **Conceptual Interpretation**

The Jukes–Cantor model illustrates a broader principle.

We do not observe evolutionary processes directly. Instead, we observe their outcomes, which are filtered through stochastic mechanisms. By modeling these mechanisms, we can reconstruct aspects of the underlying process.

This shift from observation to probabilistic modeling is central to modern bioinformatics.

---

### **Conceptual Summary**

Observed sequence differences underestimate true evolutionary distance because multiple substitutions can occur at the same position. By modeling mutations as a stochastic process, we can derive corrections that account for these hidden events.

The Jukes–Cantor model provides a simple but powerful example of this approach, linking observed differences to an underlying evolutionary process through a probabilistic framework.

---

### **Self-Check Questions**

1. Why do observed differences underestimate true evolutionary distance?
2. What are hidden substitutions, and why do they matter?
3. How does the Poisson process model mutation events?
4. What assumptions underlie the Jukes–Cantor model?
5. How is the corrected distance derived from the observed fraction of differences?
6. Why does the correction become more important for highly divergent sequences?
