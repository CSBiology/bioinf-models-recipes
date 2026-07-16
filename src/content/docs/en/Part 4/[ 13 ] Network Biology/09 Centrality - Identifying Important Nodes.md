---
title: "13.9 Centrality: Identifying Important Nodes"
sidebar:
  label: "13.9 Centrality: Identifying Important Nodes"
  order: 9
  group: "Part 4"
  part: "Part 4"
---

## 13.9 Centrality: Identifying Important Nodes

Not all nodes contribute equally to the organization and function of a biological network. Some proteins participate in many interactions, others connect otherwise independent pathways, and some occupy positions that allow them to rapidly communicate with the rest of the network. Collectively, such nodes are often referred to as *central*. Graph theory provides a family of quantitative measures, known as **centrality measures**, that capture different aspects of node importance.

### Learning objectives

After studying this chapter, you should be able to

- explain why node importance cannot be described by a single measure,
- distinguish different centrality measures,
- calculate and interpret degree, betweenness, closeness, and eigenvector centrality,
- understand the biological interpretation of different notions of centrality,
- choose appropriate centrality measures for different biological questions.

### What makes a node important?

Suppose we reconstruct the protein interaction network of a cell.

Some proteins interact with many partners.

Others interact with only a few proteins but connect otherwise independent signalling pathways.

Still others occupy positions that allow them to rapidly influence almost every other protein in the network.

Which of these proteins is the most important?

There is no unique answer.

Importance depends on the biological question being asked.

A protein may be important because it participates in many interactions, because it connects different functional modules, or because it efficiently communicates with the rest of the network.

Different centrality measures quantify these different perspectives.

### Degree centrality

The simplest measure of importance is **degree centrality**.

It assumes that highly connected nodes are more important than poorly connected nodes.

For a node with degree \(k_i\),

\[
C_D(i)=k_i.
\]

In many biological networks, nodes with high degree correspond to hubs.

Because hubs interact with many other components, they often participate in multiple biological processes.

However, degree centrality only considers the immediate neighbourhood of a node.

It ignores where the node is located within the network.

### Betweenness centrality

Imagine two functional modules connected by a single protein.

Although this protein may interact with only a few neighbours, every signal travelling between the two modules must pass through it.

Such nodes are captured by **betweenness centrality**.

Betweenness measures how frequently a node lies on shortest paths connecting other nodes.

Nodes with high betweenness act as

- bridges,
- bottlenecks,
- communication hubs.

Removing these nodes often disconnects different parts of the network.

In biology, proteins with high betweenness frequently coordinate communication between otherwise independent signalling pathways.

### Closeness centrality

Another perspective focuses on communication efficiency.

Some nodes are located near the centre of the network and can reach all other nodes within only a few interaction steps.

Others occupy peripheral positions.

**Closeness centrality** quantifies this idea.

It is based on the average shortest-path distance from one node to all other nodes.

Nodes with high closeness can rapidly communicate with the entire network.

In biological systems, such nodes may efficiently distribute regulatory signals or coordinate cellular responses.

### Eigenvector centrality

Degree centrality counts the number of neighbours.

But not all neighbours are equally important.

Suppose two proteins each interact with ten partners.

One interacts mainly with poorly connected proteins.

The other interacts with ten major regulatory proteins.

Intuitively, the second protein appears more influential.

**Eigenvector centrality** captures this intuition.

Rather than counting neighbours equally, it assigns greater importance to nodes connected to other important nodes.

A node therefore becomes important if it is connected to influential neighbours.

This recursive definition is widely used in network science and forms the conceptual basis of several ranking algorithms, including Google's original PageRank algorithm.

### Choosing the right measure

Each centrality measure captures a different biological concept.

| Centrality | Biological interpretation |
|-------------|--------------------------|
| Degree | Local connectivity |
| Betweenness | Communication between modules |
| Closeness | Global communication efficiency |
| Eigenvector | Influence through important neighbours |

Consequently, there is no universally "best" centrality measure.

Instead, the appropriate measure depends on the biological question.

If the goal is to identify proteins with many interaction partners, degree centrality is appropriate.

If communication between pathways is of interest, betweenness provides more useful information.

If rapid information spreading is important, closeness may be preferable.

### Centrality in systems biology

Centrality measures have become valuable tools in systems biology.

They are used to

- identify essential genes,
- prioritize disease-associated proteins,
- discover potential drug targets,
- analyse signalling pathways,
- investigate metabolic organization.

Nevertheless, centrality measures should always be interpreted cautiously.

A highly central node is not automatically biologically essential.

Conversely, some proteins with relatively low centrality perform indispensable biological functions because of their unique biochemical roles.

Network topology therefore complements—but never replaces—experimental biology.

> **Biological Insight**
>
> Centrality does not measure biological importance directly. Instead, it quantifies different structural properties that may be associated with biological function.

### Key concepts

- Centrality measures quantify different notions of node importance.
- Degree centrality measures local connectivity.
- Betweenness centrality identifies bridges between network regions.
- Closeness centrality measures communication efficiency.
- Eigenvector centrality considers both the number and the importance of neighbouring nodes.
- Different biological questions require different centrality measures.

### Summary

Centrality measures provide quantitative methods for identifying structurally important nodes in biological networks. Because importance can be defined in different ways, multiple complementary centrality measures have been developed. Together they reveal different aspects of network organization and have become indispensable tools for analysing biological systems.

### Self-check questions

1. Why is there no single definition of an "important" node?
2. What biological property is measured by degree centrality?
3. Why can a node with few neighbours exhibit high betweenness?
4. What distinguishes closeness centrality from degree centrality?
5. Why does eigenvector centrality assign different importance to neighbours?
6. Why should centrality measures always be interpreted together with biological knowledge?
