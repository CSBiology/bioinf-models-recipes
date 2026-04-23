---
title: "7.1 From Observed Sequences to Evolutionary History"
sidebar:
  label: "7.1 From Observed Sequences to Evolutionary History"
  order: 1
  group: "Part 2"
  part: "Part 2"
---

# **7.1 From Observed Sequences to Evolutionary History**

### **Learning Objectives**

After reading this section, you should be able to:

* explain why phylogenetic reconstruction is fundamentally an inference problem
* understand the challenge of reconstructing a dynamic process from static data
* interpret phylogenetic trees as models
* describe how sequence similarity relates to evolutionary history

---

### **A Question Beyond Direct Observation**

One of the most fundamental questions in biology is how the diversity of life has arisen and how organisms are related through evolution. At first glance, this question appears similar to those encountered in earlier chapters, where sequences could be directly analyzed and compared. In those settings, the objects of interest were observable, and computational methods operated directly on them.

Phylogenetic reconstruction is fundamentally different. The process we seek to understand, evolutionary history, cannot be observed directly. We do not see mutation events as they occur, nor do we have access to ancestral sequences. Instead, we are given only present-day sequences, measured at a single point in time.

This changes the nature of the problem. Rather than describing what we observe, we attempt to reconstruct what must have happened in the past to give rise to the data. Phylogenetics is therefore an inference problem in the strongest sense.

---

### **A Concrete Biological Scenario**

To make this more tangible, consider a viral outbreak. Samples are collected from different locations, and the viral genomes are sequenced. When comparing these sequences, small differences become visible. Some genomes share mutations, while others differ at particular positions.

The central question is whether these infections originated from a common source or from multiple independent introductions. There is no direct record of transmission events. What we have instead are sequences, each representing the current state of the virus in a host.

From these sequences, we attempt to reconstruct a history: which samples are closely related, where divergence occurred, and how the pathogen may have spread. In this setting, sequences are not merely biological objects. They are traces of a process that has already taken place.

---

### **From Evolutionary Idea to Tree Model**

The idea of representing evolutionary relationships as a tree has a long history. Early conceptual sketches already captured the notion that species diverge from common ancestors in a branching process . Modern phylogenetics formalizes this intuition.

A phylogenetic tree provides a structured way of expressing hypotheses about common ancestry and divergence. Such trees play a central role in biology. They support classification, allow us to trace the spread of pathogens, and enable functional inference. If an unknown gene clusters with well-characterized genes, this provides strong evidence that it may share their function .

---

### **Static Data and Dynamic Processes**

At the heart of phylogenetic reconstruction lies a fundamental tension. We are given static data, sequences observed at a single point in time, yet we aim to reconstruct a dynamic process that unfolded over evolutionary timescales.

This inversion of time introduces both conceptual and practical challenges. Multiple evolutionary histories may explain the same observations. Some events leave no visible trace, while others overwrite earlier signals. As a result, the reconstruction of evolutionary history is inherently uncertain.

---

### **Sequences as Imperfect Records**

Despite these challenges, sequences contain information about the past. Mutations accumulate over time, and these changes are reflected in the sequences we observe today. If two sequences are highly similar, it is likely that they share a recent common ancestor. If they differ substantially, their divergence likely occurred further in the past.

This relationship between similarity and relatedness provides the foundation for phylogenetic analysis. However, it must be interpreted with care. Multiple mutations can occur at the same position, and some mutations may be reversed. Sequences therefore provide an incomplete and sometimes misleading record of evolutionary history.

---

### **Phylogenetic Trees as Models**

It is essential to clarify what a phylogenetic tree represents. A common misconception is that such a tree depicts the true evolutionary history of the organisms under study. In reality, a phylogenetic tree is a model.

More precisely, it is a structured hypothesis that attempts to explain the observed data under a set of assumptions. We observe sequences, construct a tree, and evaluate how well this tree explains the patterns present in the data.

This perspective has an important consequence. In scientific modeling, the question is not whether a model is absolutely true. Evolutionary history is not directly accessible, and therefore cannot be used as a ground truth in this sense. Instead, models are evaluated by their usefulness. A phylogenetic tree is useful if it explains observed sequence patterns, is consistent with biological knowledge, and supports meaningful interpretation .

---

### **From Intuition to a Formal Problem**

We can now formulate the problem more precisely. We are given a set of sequences representing present-day observations and seek a tree that explains the similarities and differences among them in terms of evolutionary relationships.

To achieve this, we must connect sequence variation to evolutionary processes, choose a representation for relationships, develop algorithms for constructing trees, and define criteria for evaluating how well a tree explains the data. Each of these steps introduces assumptions and shapes the resulting model.

In the following sections, we will develop the necessary tools to carry out this reconstruction. Throughout, one idea remains central: phylogenetic reconstruction is the process of building models that explain how present-day sequences came to be.

---

### **Self-Check Questions**

1. Why can evolutionary history not be directly observed, and how does this shape phylogenetic reconstruction?
2. What distinguishes phylogenetic reconstruction from similarity-based sequence analysis?
3. Why are sequences considered imperfect records of evolutionary history?
4. In what sense is a phylogenetic tree a model?
5. Why is usefulness a more appropriate criterion than truth when evaluating such models?
6. What is the central challenge of inferring a dynamic process from static data?