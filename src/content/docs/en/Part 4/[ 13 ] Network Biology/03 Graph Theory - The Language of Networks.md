---
title: "13.3 Graph Theory: The Language of Networks"
sidebar:
  label: "13.3 Graph Theory: The Language of Networks"
  order: 3
  group: "Part 4"
  part: "Part 4"
---

## 13.3 Graph Theory: The Language of Networks

Biological systems can be represented as networks because they consist of entities connected by interactions. To analyse these networks quantitatively, however, we need a mathematical language that is independent of the specific biological system. This language is provided by **graph theory**. Although originally developed as a branch of mathematics, graph theory has become one of the most important frameworks for analysing complex biological systems.

### Learning objectives

After studying this chapter, you should be able to

- explain what a graph is,
- distinguish between biological networks and graph representations,
- identify nodes and edges in different biological systems,
- distinguish between directed and undirected graphs,
- distinguish between weighted and unweighted graphs,
- explain how adjacency matrices represent graphs mathematically.

### From biology to mathematics

In the previous chapter, we introduced biological networks as collections of interacting components. Proteins interact with proteins, genes regulate other genes, metabolites are converted through enzymatic reactions, and organisms interact within ecological communities.

These biological interactions are often extremely complex. A human cell contains tens of thousands of proteins, each of which may participate in numerous interactions. Attempting to understand such systems directly from experimental observations quickly becomes impossible.

Instead, we construct a simplified mathematical model that preserves only the interaction structure of the system. This abstraction is called a **graph**.

A graph does not describe biochemical mechanisms, reaction kinetics, or molecular structures. Instead, it answers a much simpler question:

> **Which components interact with which other components?**

Although this simplification removes many biological details, it preserves precisely the information required to study the organization of complex systems.

### Graphs as mathematical models

Mathematically, a graph consists of two sets:

- a set of **vertices** (or **nodes**), and
- a set of **edges** connecting pairs of vertices.

A graph is commonly written as

$$
G = (V,E),
$$

where

- \(V\) is the set of vertices,
- \(E\) is the set of edges.

Although this notation appears simple, it is remarkably general. Every biological network introduced in the previous chapter can be represented in this form.

The graph therefore becomes a mathematical model of the biological interaction network.

> **Historical Note**
>
> Graph theory originated in 1736, when the Swiss mathematician Leonhard Euler solved the famous Königsberg bridge problem. By representing land masses as nodes and bridges as edges, he transformed a geographical puzzle into a mathematical one. This abstraction laid the foundation for modern graph theory and, almost three centuries later, for much of network biology.

### Nodes represent biological entities

The biological interpretation of a node depends entirely on the question being investigated.

In different applications, nodes may represent

- genes,
- proteins,
- metabolites,
- cells,
- tissues,
- species,
- diseases,
- or even ecosystems.

There is therefore no universal biological meaning of a node.

Whenever a biological network is presented, the first question should always be:

**What does a node represent?**

Without this information, the graph itself cannot be interpreted biologically.

### Edges represent biological interactions

Edges connect pairs of nodes.

Like nodes, their biological meaning depends on the underlying system.

An edge may represent

- physical binding,
- transcriptional regulation,
- enzymatic conversion,
- metabolite transport,
- signalling,
- genetic interaction,
- evolutionary similarity,
- ecological interaction.

Importantly, an edge does **not** necessarily imply physical contact.

Instead, it simply indicates that a biologically meaningful relationship exists between two entities.

Together, the definitions of nodes and edges determine the biological interpretation of an entire graph.

### Directed and undirected graphs

Not every biological interaction is symmetric.

When two proteins physically bind to one another, the interaction is mutual. If protein A binds protein B, then protein B also binds protein A.

Such interactions are naturally represented by **undirected graphs**, where edges have no direction.

Other biological interactions are directional.

A transcription factor regulates its target gene, but the target gene does not necessarily regulate the transcription factor.

Likewise, information in signalling pathways typically flows in a preferred direction.

These systems are represented by **directed graphs**, in which every edge is assigned a direction.

The choice between directed and undirected graphs therefore depends entirely on the biological process under investigation.

### Weighted and unweighted graphs

In the simplest representation, every interaction is treated equally.

Either an interaction exists or it does not.

Such graphs are called **unweighted graphs**.

However, biological interactions often differ considerably in their strength or reliability.

Examples include

- binding affinities,
- reaction rates,
- confidence scores,
- co-expression coefficients,
- interaction probabilities.

These quantitative properties can be incorporated by assigning a numerical weight to each edge.

The resulting **weighted graphs** preserve considerably more biological information and often provide a more realistic description of biological systems.

### Adjacency matrices

Although graphs are usually drawn as diagrams, computational algorithms rarely operate directly on these visual representations.

Instead, graphs are stored as matrices.

For a graph containing \(n\) nodes, the **adjacency matrix**

$$
A \in \mathbb{R}^{n \times n}
$$

contains one entry for every possible pair of nodes.

For an unweighted graph,

$$
A_{ij} =
\begin{cases}
1, & \text{if node }i\text{ is connected to node }j,\\
0, & \text{otherwise.}
\end{cases}
$$

For weighted graphs, the corresponding matrix entry stores the weight of the interaction.

The adjacency matrix contains exactly the same information as the graphical representation but is much more suitable for computational analysis. Many graph algorithms operate directly on this matrix representation.

### Why graph representations are powerful

The greatest strength of graph theory is that it allows us to study properties that are difficult to recognize from individual biological observations.

Once a biological system has been represented as a graph, we can begin to ask quantitative questions.

Which proteins interact with unusually many partners?

Which metabolites connect otherwise distant pathways?

Which parts of the network form functional modules?

How efficiently can information spread through the network?

These questions no longer concern individual biological components. Instead, they describe the organization of the system as a whole.

The following chapters introduce the graph-theoretical measures that allow us to answer these questions quantitatively.

### Key concepts

- Graphs are mathematical models of biological interaction networks.
- Nodes represent biological entities, whereas edges represent interactions.
- The biological interpretation of a graph depends entirely on how nodes and edges are defined.
- Graphs may be directed or undirected, weighted or unweighted.
- Adjacency matrices provide an efficient mathematical representation for computational analysis.

### Summary

Graph theory provides a universal mathematical language for describing biological interaction networks. By reducing complex systems to nodes and edges, graphs preserve the essential interaction structure while remaining simple enough for quantitative analysis. This abstraction forms the foundation of modern network biology and enables the study of organizational principles shared across many different biological systems.

### Self-check questions

1. Why are graphs useful for representing biological systems?
2. What is the difference between a biological network and its graph representation?
3. Give three examples of what nodes and edges can represent in biology.
4. When should a graph be represented as directed rather than undirected?
5. What additional information can be represented by weighted graphs?
6. Why are adjacency matrices widely used in computational network biology?