---
title: "7.6 Constructing Trees from Distances"
sidebar:
  label: "7.6 Constructing Trees from Distances"
  order: 6
  group: "Part 2"
  part: "Part 2"
---

# **7.6 Constructing Trees from Distances**

### **Learning Objectives**

After reading this section, you should be able to:

* explain why phylogenetic tree construction is a difficult search problem
* understand how the number of possible tree topologies grows with the number of taxa
* describe strategies for exploring tree space
* distinguish between exhaustive, branch-and-bound, and heuristic search
* understand how tree rearrangements enable navigation through tree space

---

### **From Distances to Structure**

In the previous sections, we transformed sequence data into pairwise distances and refined these distances using models of sequence evolution. At this point, we have a matrix that encodes our best estimate of evolutionary divergence between all pairs of taxa.

The remaining task is to construct a phylogenetic tree that reflects these relationships.

At first glance, this might appear straightforward. If we know the distances between all pairs of sequences, it seems natural that there should be a corresponding tree that represents them. However, this intuition turns out to be misleading.

The difficulty lies not in computing distances, but in determining how these distances can be arranged into a consistent tree structure.

---

### **A Rapidly Growing Search Space**

To understand the challenge, consider how many different trees are possible for a given number of taxa.

For a small number of sequences, the possibilities are limited. With three taxa, there is only one possible unrooted tree. With four taxa, there are already three alternatives. As the number increases, however, the number of possible tree topologies grows extremely rapidly.

Even for a modest number of taxa, the number of candidate trees becomes enormous. This means that we cannot simply generate all possible trees and choose the best one.

Instead, phylogenetic reconstruction becomes a problem of **searching through a vast space of possible models**.

---

### **Tree Construction as Optimization**

We can formalize this problem as follows.

We are given a distance matrix derived from sequence data. For any candidate tree, we can compute how well it reproduces these distances. This provides a score, such as the least-squares criterion introduced earlier.

The goal is to find the tree that minimizes this discrepancy.

In this sense, phylogenetic reconstruction is an optimization problem. The challenge lies in the fact that the space over which we optimize, the set of all possible tree topologies, is extremely large.

---

### **Box 7.3 — The Combinatorics of Tree Space**

The number of possible unrooted binary trees for ( n ) taxa is given by:

[
(2n - 5)!!
]

This double factorial grows extremely rapidly. For example:

* ( n = 5 ): 15 trees
* ( n = 10 ): over 2 million trees
* ( n = 15 ): over ( 10^{12} ) trees

This growth illustrates why exhaustive search is infeasible in practice.

Even if evaluating a single tree were very fast, the total number of trees quickly becomes too large to handle.

---

### **Exhaustive Search and Its Limits**

In principle, one could solve the reconstruction problem by evaluating every possible tree and selecting the best one.

This approach guarantees that the optimal solution is found. However, due to the combinatorial explosion described above, it is only feasible for very small datasets.

For realistic problems, we must rely on strategies that avoid exploring the entire search space.

---

### **Pruning the Search: Branch and Bound**

One way to reduce the search space is to eliminate regions that cannot contain an optimal solution.

The idea behind branch-and-bound methods is to construct trees step by step. At each stage, we compute a partial score. If this partial solution is already worse than the best complete tree found so far, we can discard it without further exploration.

In this way, large portions of the search space can be pruned.

This strategy can significantly reduce computation time, but it still becomes impractical for larger datasets, where even partial exploration is costly.

---

### **Heuristic Search and Local Improvement**

In most practical settings, phylogenetic reconstruction relies on heuristic methods.

Instead of searching the entire space, these methods explore it selectively. They begin with an initial tree and iteratively improve it by making local changes.

At each step, neighboring trees are generated and evaluated. If a better tree is found, the algorithm moves to that tree and continues the process.

This approach is efficient, but it introduces a new issue. The search may converge to a solution that is locally optimal but not globally optimal.

---

### **Box 7.4 — Navigating Tree Space**

To explore tree space effectively, we need operations that modify tree topology in controlled ways.

Three common operations are:

* **Nearest Neighbor Interchange (NNI)**:
  Swaps subtrees around an internal branch, producing a small number of alternative trees.

* **Subtree Pruning and Regrafting (SPR)**:
  Cuts a subtree and reattaches it elsewhere, allowing larger changes.

* **Tree Bisection and Reconnection (TBR)**:
  Splits the tree into two parts and reconnects them in all possible ways, generating a wide range of alternatives.

These operations define the notion of “neighboring trees” and allow algorithms to move through the space of possible topologies.

---

### **Local and Global Optima**

Because heuristic methods rely on local changes, they may become trapped in local optima. A tree is locally optimal if no small modification improves it, even though better solutions may exist elsewhere in the search space.

To address this, algorithms often use multiple starting points or incorporate randomness to explore different regions of the space.

This reflects a general principle in optimization: finding a good solution is often easier than finding the best possible one.

---

### **Conceptual Interpretation**

Tree construction is not simply a matter of computing branch lengths. It is a process of searching through a large space of possible models.

The tree we obtain depends not only on the data, but also on how this search is performed. Different strategies may lead to different solutions, especially when the data do not strongly constrain the result.

This reinforces an important idea from earlier sections:

> **Phylogenetic reconstruction is model selection under uncertainty**

---

### **Conceptual Summary**

Constructing a phylogenetic tree from distances requires searching through a vast space of possible topologies. Because this space grows combinatorially, exhaustive search is rarely feasible.

Instead, practical methods rely on strategies such as pruning and heuristic exploration. These approaches allow us to find good solutions efficiently, even though they do not guarantee optimality.

---

### **Self-Check Questions**

1. Why does the number of possible trees grow so rapidly with the number of taxa?
2. Why is exhaustive search impractical for most datasets?
3. How does branch-and-bound reduce the search space?
4. What is the main idea behind heuristic search?
5. What are NNI, SPR, and TBR operations?
6. What is the difference between a local and a global optimum?

