---
title: "13.2 Biological Systems as Networks"
sidebar:
  label: "13.2 Biological Systems as Networks"
  order: 2
  group: "Part 4"
  part: "Part 4"
---

## 13.2 Biological Systems as Networks

Biological systems consist of thousands of interacting components. To understand how these components collectively give rise to cellular behaviour, we need a representation that captures not only the components themselves but also the relationships between them. Network representations provide such a framework. They reduce complex biological systems to their essential interaction structure while preserving the information required to study system-level organization.

### Learning objectives

After studying this chapter, you should be able to

- explain why network representations are useful in biology,
- distinguish between biological entities and their interactions,
- identify different classes of biological networks,
- explain the difference between a biological network and its graph representation,
- appreciate why graph theory has become a universal language in systems biology.

### Why represent biology as a network?

Imagine trying to describe the molecular machinery of a living cell using only lists.

One list contains all genes.

Another list contains all proteins.

A third list contains all metabolites.

Although these lists provide valuable information about the components present in the cell, they tell us remarkably little about how the cell actually works. Biological function arises because these components interact. Proteins bind to one another to form molecular complexes, transcription factors regulate gene expression, enzymes convert metabolites into new molecules, and signalling proteins transmit information through the cell.

The interactions between components are therefore just as important as the components themselves.

A natural way to represent these interactions is as a **network**. Instead of describing each interaction individually, the entire system is represented as a collection of connected entities. This representation shifts the focus from isolated molecules to the architecture of the biological system.

> **Biological Insight**
>
> The behaviour of a biological system is determined not only by which components are present, but also by how these components are connected.

### Biological networks exist at many levels

Network representations are remarkably versatile because they can be applied to almost every level of biological organization.

At the molecular level, proteins interact to form molecular machines, genes regulate one another through transcriptional control, and metabolites are connected by biochemical reactions. At the cellular level, signalling molecules coordinate communication between different cell types. At larger scales, organisms interact within ecological communities through competition, predation, or mutualism.

Although these systems differ enormously in their biological function, they all share a common property: they consist of entities connected by interactions.

This common structure allows them to be described using the same mathematical framework.

### Examples of biological networks

The exact meaning of a network depends on the biological question being addressed.

**Protein-protein interaction networks** describe physical interactions between proteins. These networks are commonly used to identify protein complexes, signalling pathways, and key regulatory proteins.

**Gene regulatory networks** describe how genes regulate one another through transcription factors and other regulatory molecules. They provide insight into cellular decision-making, differentiation, and development.

**Metabolic networks** connect metabolites through enzymatic reactions and describe the flow of matter through cellular metabolism.

Networks can also describe relationships that are not directly molecular. In **disease networks**, for example, diseases are connected because they share disease-associated genes. Similarly, ecological food webs represent species connected through trophic interactions.

Despite describing very different biological systems, all of these examples can be analysed using the same network concepts.

### The biological network and the mathematical graph

A biological network is a real biological system. It consists of molecules, cells, or organisms interacting through physical, regulatory, or ecological processes.

To analyse such systems quantitatively, we construct a **graph**, which is a mathematical abstraction of the biological network.

In this abstraction, biological entities become **nodes** (also called **vertices**), while interactions become **edges** (or **links**) connecting pairs of nodes.

The graph is therefore not the biological system itself. Instead, it is a simplified mathematical representation that preserves the interaction structure while ignoring many biochemical details.

This abstraction is extremely powerful because it allows the same mathematical methods to be applied to a wide variety of biological systems.

### From biology to graph theory

Once a biological system has been represented as a graph, an entirely new class of questions becomes accessible.

Instead of asking only whether two proteins interact, we can ask whether certain proteins are more central than others. We can search for groups of proteins that form functional modules, identify the shortest paths connecting two metabolites, or investigate whether biological networks possess characteristic organizational principles that differ from random systems.

In other words, representing biology as a graph transforms a descriptive problem into a quantitative one.

The following chapter introduces the basic language of graph theory, including nodes, edges, directed and undirected graphs, and different ways of representing networks mathematically.

### Key concepts

- Biological systems consist of interacting components rather than isolated molecules.
- Network representations emphasize interactions instead of individual components.
- Many different biological systems can be described using the same network framework.
- A graph is a mathematical abstraction of a biological network.
- Graph representations make biological systems amenable to quantitative analysis.

### Summary

Biological systems are naturally organized as networks of interacting components. Representing these interactions as graphs provides a common mathematical language that can be applied across many areas of biology, from molecular interactions to ecological communities. This abstraction allows complex biological systems to be analysed using the tools of graph theory while preserving their essential organizational structure.

### Self-check questions

1. Why are lists of biological components often insufficient to explain biological function?
2. What advantages do network representations provide over studying individual molecules?
3. Name four different types of biological networks and explain what their nodes and interactions represent.
4. What is the difference between a biological network and its graph representation?
5. Why can the same graph-theoretical methods be applied to very different biological systems?
