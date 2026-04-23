---
title: "7.9 Probabilistic Phylogenetics: Maximum Likelihood"
sidebar:
  label: "7.9 Probabilistic Phylogenetics: Maximum Likelihood"
  order: 9
  group: "Part 2"
  part: "Part 2"
---

# **7.9 Probabilistic Phylogenetics: Maximum Likelihood**

### **Learning Objectives**

After reading this section, you should be able to:

* explain the concept of likelihood in the context of phylogenetic models
* distinguish maximum likelihood from maximum parsimony
* understand how probabilities are assigned to evolutionary changes along a tree
* compute the likelihood for a simple tree and a single alignment column
* describe how tree topology and model parameters are inferred jointly

---

### **From Counting Changes to Modeling Probabilities**

In maximum parsimony, we selected the tree that minimizes the number of evolutionary changes. This approach is intuitive and directly linked to the idea of mutation events. However, it treats all changes as equally likely and does not account for the underlying stochastic nature of evolution.

In reality, evolutionary processes are probabilistic. Different types of substitutions may occur with different frequencies, and the likelihood of observing a particular pattern depends on both the tree structure and the evolutionary model.

Maximum likelihood addresses this limitation by shifting the focus from counting changes to evaluating probabilities.

Rather than asking which tree requires the fewest changes, we ask:

> **Which tree makes the observed data most probable under a given model of evolution?**

---

### **The Meaning of Likelihood**

To understand this idea, it is helpful to consider a simple analogy.

Suppose we observe a sequence of coin tosses with a certain number of heads and tails. We might ask which bias of the coin makes this observation most likely. The likelihood of a parameter value is defined as the probability of the observed data given that parameter.

In phylogenetics, the situation is analogous. The observed data are the sequences, and the model consists of a tree together with parameters describing how sequences evolve.

The likelihood is therefore:

[
L = P(\text{data} \mid \text{tree}, \text{model})
]

Maximum likelihood selects the tree and parameters that maximize this probability.

---

### **Components of the Model**

To compute likelihoods, we must specify a model of sequence evolution.

Such a model includes several components:

* a tree topology describing relationships among taxa
* branch lengths representing evolutionary distances
* a substitution model describing how nucleotides change
* base frequencies specifying the relative abundance of nucleotides

These components define the probability of transitions along each branch of the tree.

---

### **Likelihood of a Single Site**

To build intuition, consider a single column of an alignment.

We observe nucleotides at the leaves of the tree. The states at internal nodes are unknown and must be considered as hidden variables.

To compute the likelihood, we consider all possible assignments of states to the internal nodes and sum over them. For each assignment, we compute the probability of the observed states given the model.

This involves:

* assigning a state to the root
* computing transition probabilities along each branch
* multiplying probabilities across branches
* summing over all possible internal states

---

### **Box 7.7 — Why Likelihood Requires Summation Over Hidden States**

For a tree with several internal nodes, each node can take one of four nucleotide states.

The total number of possible assignments grows exponentially with the number of internal nodes. For each assignment, a probability must be computed.

The likelihood is obtained by summing over all these possibilities.

This illustrates a key challenge:

> **Likelihood computation involves integrating over many hidden variables**

Efficient algorithms, such as Felsenstein’s pruning algorithm, make this computation tractable by reusing intermediate results.

---

### **From One Site to Full Sequences**

A multiple sequence alignment contains many columns, each representing an independent observation under the model.

Assuming independence, the likelihood of the full alignment is the product of the likelihoods of individual columns:

[
L = \prod_{k=1}^{n} L_k
]

In practice, it is more convenient to work with the logarithm of the likelihood:

[
\log L = \sum_{k=1}^{n} \log L_k
]

This avoids numerical underflow and simplifies optimization.

---

### **Optimizing the Model**

Maximum likelihood phylogenetics requires optimizing both the tree and the model parameters.

This includes:

* the topology of the tree
* the lengths of the branches
* parameters of the substitution model

As in earlier sections, the search space is large, and heuristic methods are typically used.

At each step, candidate trees are evaluated by computing their likelihood, and the best candidates are retained.

---

### **Interpreting Maximum Likelihood Trees**

A maximum likelihood tree is the tree that assigns the highest probability to the observed data under the chosen model.

This differs fundamentally from parsimony. Two trees may require the same number of changes, but one may be more likely because it assigns higher probability to those changes.

Maximum likelihood therefore combines:

* the number of changes
* the probability of those changes

into a single coherent framework.

---

### **Strengths and Limitations**

Maximum likelihood provides a powerful and flexible framework for phylogenetic inference.

It allows detailed modeling of evolutionary processes and provides a principled statistical criterion for comparing trees.

However, this power comes at a cost. The method is computationally intensive, and the results depend on the choice of model. If the model is poorly specified, the inferred tree may be misleading.

This reflects a general principle of modeling:

> **More expressive models require more careful assumptions**

---

### **Conceptual Summary**

Maximum likelihood replaces the simplicity of parsimony with a probabilistic framework. It evaluates trees based on how likely they are to produce the observed data under a model of sequence evolution.

This approach provides a deeper and more flexible understanding of phylogenetic relationships, at the cost of increased computational complexity.

---

### **Self-Check Questions**

1. What is the likelihood of a phylogenetic model?
2. How does maximum likelihood differ from maximum parsimony?
3. Why must we sum over all possible internal node states?
4. Why is it useful to work with log-likelihoods?
5. What parameters are optimized in maximum likelihood phylogenetics?
6. What are the advantages and disadvantages of this approach?
