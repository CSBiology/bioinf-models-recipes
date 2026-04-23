---
title: "7.8 Character-Based Methods: Maximum Parsimony"
sidebar:
  label: "7.8 Character-Based Methods: Maximum Parsimony"
  order: 8
  group: "Part 2"
  part: "Part 2"
---

# **7.8 Character-Based Methods: Maximum Parsimony**

### **Learning Objectives**

After reading this section, you should be able to:

* explain how character-based methods differ from distance-based approaches
* understand the principle of maximum parsimony
* compute the parsimony score for a simple tree
* describe how evolutionary changes are inferred along a tree
* recognize the strengths and limitations of the parsimony approach

---

### **Returning to the Alignment**

In distance-based methods, we transformed sequence data into pairwise distances and constructed trees that approximate these distances. While this approach is efficient, it discards much of the detailed information contained in individual alignment positions.

Character-based methods take a different route. Instead of summarizing the data, they work directly with the alignment itself. Each column is treated as an independent observation, and the goal is to construct a tree that explains these observations in terms of evolutionary changes.

This brings us closer to the underlying biological process. Rather than approximating relationships through distances, we attempt to reconstruct how individual characters may have evolved.

---

### **The Principle of Parsimony**

The central idea of maximum parsimony is simple and intuitive.

Among all possible trees, we prefer the one that requires the smallest number of evolutionary changes to explain the observed data.

This reflects a general principle in scientific reasoning: when multiple explanations are possible, simpler ones are preferred. In the context of phylogenetics, simplicity is measured by the number of substitutions required across all characters.

The parsimony criterion therefore asks:

> **Which tree explains the data with the fewest evolutionary events?**

---

### **Inferring Changes Along a Tree**

To apply this principle, we must determine how many changes are required for a given tree.

The observed states at the leaves are fixed. The states at internal nodes, representing ancestral sequences, are unknown. We assign these states in a way that minimizes the number of changes along the tree.

For a single character, this involves determining where substitutions must occur to produce the observed pattern at the leaves. The total number of changes required is called the **parsimony score** for that character.

The score for the entire alignment is obtained by summing over all characters.

---

### **A Worked Example**

Consider a single alignment column for four taxa:

[
\begin{array}{c|c}
\text{Taxon} & \text{State} \
\hline
A & G \
B & G \
C & T \
D & T \
\end{array}
]

We compare two possible tree topologies.

In the first tree, taxa ( A ) and ( B ) form one group, and ( C ) and ( D ) form another. In this case, we can assign the internal nodes such that only one substitution is required, separating the two groups.

In the second tree, taxa are grouped differently, for example ( A ) with ( C ). In this case, at least two substitutions are required to explain the observed pattern.

The first tree is therefore preferred under the parsimony criterion.

---

### **Box 7.6 — Computing Parsimony Efficiently**

For larger trees and multiple characters, manually counting changes becomes impractical.

An efficient approach is provided by algorithms such as the **Fitch algorithm**.

The idea is to traverse the tree from the leaves to the root. At each internal node, we determine the set of possible states consistent with minimal changes. If the sets of the child nodes overlap, the intersection is taken. If they do not, their union is taken, and a substitution is counted.

This procedure ensures that the total number of changes is minimized without explicitly enumerating all possible ancestral assignments.

---

### **Homology and Homoplasy Revisited**

The parsimony framework implicitly favors explanations based on homology. Shared states are interpreted as inherited from a common ancestor whenever possible.

However, when patterns cannot be explained by a single change, additional substitutions must be introduced. These correspond to homoplastic events, such as convergent evolution or reversals.

Parsimony therefore attempts to minimize homoplasy by preferring trees that require fewer independent changes.

---

### **Strengths of Parsimony**

Maximum parsimony has several appealing features.

It is conceptually simple and directly linked to the idea of evolutionary change. It does not require an explicit model of substitution probabilities. Because it operates directly on characters, it retains detailed information that may be lost in distance-based approaches.

---

### **Limitations and Challenges**

Despite its simplicity, parsimony has important limitations.

It assumes that evolution proceeds in the simplest possible way. This assumption may not hold when mutation rates are high or when convergent evolution is common.

In addition, different trees may yield the same minimal parsimony score, making it difficult to identify a unique solution.

Like other methods, parsimony also faces the challenge of searching through a large space of possible tree topologies.

Finally, it does not explicitly model the stochastic nature of evolution. All changes are treated equally, regardless of their probability.

---

### **Conceptual Interpretation**

Maximum parsimony provides a direct way of linking observed data to evolutionary events. It asks how many changes are required to explain the data and selects the tree that minimizes this number.

In doing so, it emphasizes simplicity as a guiding principle. At the same time, it highlights the limitations of ignoring the probabilistic nature of evolutionary processes.

---

### **Conceptual Summary**

Character-based methods reconstruct phylogenetic trees by working directly with alignment data. Maximum parsimony selects the tree that minimizes the number of evolutionary changes required to explain the observed characters.

This approach is intuitive and computationally accessible, but it relies on simplifying assumptions that may not always reflect biological reality.

---

### **Self-Check Questions**

1. How do character-based methods differ from distance-based methods?
2. What is the principle of maximum parsimony?
3. How is the parsimony score computed for a tree?
4. What role do internal nodes play in parsimony analysis?
5. How does parsimony treat homoplasy?
6. What are the main limitations of the parsimony approach?
