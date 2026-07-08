## 13.4 Network Connectivity: Degree and Degree Distribution

Once a biological system has been represented as a graph, the next question naturally arises: **How can we describe its structure quantitatively?** Graph theory provides a large number of measures for characterizing networks, ranging from simple local properties of individual nodes to global descriptors of the entire network. The simplest and most fundamental of these measures is the **degree** of a node.

### Learning objectives

After studying this chapter, you should be able to

- define the degree of a node,
- distinguish between in-degree and out-degree in directed networks,
- calculate node degrees from graphs and adjacency matrices,
- explain the concept of a degree distribution,
- understand why degree distributions reveal important information about network organization.

### Connectivity as a biological property

Not all components of a biological network interact equally.

Some proteins participate in only a few molecular interactions, whereas others interact with dozens or even hundreds of partners. Some metabolites are involved in only a single biochemical reaction, while others participate in many different pathways. Likewise, certain genes regulate only a handful of targets, whereas master regulators control hundreds of downstream genes.

These observations suggest that connectivity itself may carry biological information.

Can we quantify how strongly a component is connected within the network?

Graph theory provides a simple answer to this question.

### The degree of a node

The **degree** of a node is the number of edges connected to it.

In an undirected graph, every edge contributes exactly one connection to the node. The degree therefore corresponds simply to the number of neighbouring nodes.

Mathematically, the degree of node \(i\) is

\[
k_i=\sum_{j=1}^{n}A_{ij},
\]

where \(A_{ij}\) denotes the corresponding entry of the adjacency matrix.

The degree is therefore obtained by summing the entries of the corresponding row (or column, since undirected adjacency matrices are symmetric).

Although this definition is mathematically simple, it already provides valuable biological information. A highly connected protein, for example, is likely to participate in many different cellular processes, whereas a protein with only one or two interaction partners may perform a much more specialized function.

### Degree in directed graphs

For directed networks, the concept of connectivity becomes slightly more complex because every interaction has a direction.

Consequently, each node has two different degrees.

The **in-degree** counts the number of incoming edges,

\[
k_i^{\mathrm{in}}
=\sum_j A_{ji},
\]

whereas the **out-degree** counts the outgoing edges,

\[
k_i^{\mathrm{out}}
=\sum_j A_{ij}.
\]

The biological interpretation depends on the network.

In a gene regulatory network, the out-degree of a transcription factor corresponds to the number of genes it regulates. Conversely, the in-degree of a gene indicates how many regulators control its expression.

These two quantities often provide complementary biological insights.

### Local versus global properties

The degree describes only a single node.

However, biological networks often contain thousands of nodes. Rather than considering each node individually, we are usually interested in the connectivity of the network as a whole.

This leads to a new question.

How are the degrees distributed across all nodes?

Do most nodes have similar numbers of neighbours, or are there large differences in connectivity?

Answering these questions requires moving from individual node degrees to the **degree distribution**.

### The degree distribution

The **degree distribution** describes the probability that a randomly selected node has degree \(k\).

If \(N_k\) denotes the number of nodes with degree \(k\) in a network containing \(N\) nodes, then the degree distribution is given by

\[
P(k)=\frac{N_k}{N}.
\]

Rather than focusing on individual nodes, the degree distribution characterizes the overall architecture of the network.

Two networks may contain exactly the same number of nodes and edges while exhibiting completely different degree distributions.

Consequently, the degree distribution represents one of the most informative descriptors of network topology.

### Biological interpretation

The degree distribution provides much more than a statistical summary.

It reflects how biological interactions are organized.

If nearly all proteins possess similar numbers of interaction partners, the network has a relatively homogeneous structure. If only a few proteins interact with many partners while the majority participate in only a handful of interactions, the network is highly heterogeneous.

These differences have profound biological consequences.

They influence the robustness of the network, the efficiency of information transfer, and the evolutionary constraints acting on different components.

As we will see in the next chapter, biological networks exhibit degree distributions that differ fundamentally from those expected for randomly connected systems.

> **Biological Insight**
>
> The degree of a node measures local connectivity. The degree distribution reveals how connectivity is organized across the entire biological system.

### Key concepts

- The degree is the simplest measure of node connectivity.
- In directed networks, in-degree and out-degree describe different aspects of connectivity.
- Degrees can be calculated directly from the adjacency matrix.
- The degree distribution characterizes the connectivity of the entire network.
- Similar average connectivity does not imply similar network organization.

### Summary

The degree is one of the most fundamental quantities in graph theory and provides a simple measure of how strongly a node is connected within a network. While individual degrees characterize local properties, the degree distribution describes the organization of connectivity across the entire network. As we will see in the following chapter, the degree distribution reveals one of the defining characteristics of biological networks.

### Self-check questions

1. What is the degree of a node?
2. How can the degree be calculated from an adjacency matrix?
3. What is the difference between in-degree and out-degree?
4. What information is contained in the degree distribution?
5. Why is the degree distribution often more informative than the degree of an individual node?