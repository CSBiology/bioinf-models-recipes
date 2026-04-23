---
title: "7.7 UPGMA: A Constructive Distance-Based Algorithm"
sidebar:
  label: "7.7 UPGMA: A Constructive Distance-Based Algorithm"
  order: 7
  group: "Part 2"
  part: "Part 2"
---

# **7.7 UPGMA: A Constructive Distance-Based Algorithm**

### **Learning Objectives**

After reading this section, you should be able to:

* explain how UPGMA constructs a phylogenetic tree from a distance matrix
* understand the connection between UPGMA and hierarchical clustering
* compute a simple UPGMA tree step by step
* interpret branch lengths in UPGMA trees
* understand the molecular clock assumption and its consequences

---

### **From Search to Construction**

In the previous section, we framed phylogenetic reconstruction as a search problem over a large space of possible tree topologies. While this perspective is general, it can also be computationally demanding.

UPGMA takes a different approach. Instead of searching over all possible trees, it constructs a tree directly, in a stepwise manner. At each step, it makes a locally optimal decision by merging the closest pair of taxa or clusters.

This makes UPGMA conceptually simple and computationally efficient. At the same time, it imposes strong assumptions that shape the resulting tree.

---

### **A Clustering Perspective**

The core idea of UPGMA is closely related to hierarchical clustering.

We begin with each sequence as its own cluster. At each step, we identify the two clusters that are closest according to the distance matrix and merge them. This process is repeated until all sequences are combined into a single tree.

What distinguishes UPGMA from general clustering is its interpretation. Each merge is interpreted as an evolutionary event, corresponding to a common ancestor. The height at which clusters are joined reflects the time of divergence.

In this way, a clustering procedure becomes a model of evolutionary history.

---

### **Stepwise Construction of the Tree**

The algorithm proceeds iteratively.

At the beginning, each taxon is treated as a cluster. The distance matrix defines the distances between all pairs of clusters.

At each step, the pair of clusters with the smallest distance is selected. These clusters are merged to form a new cluster, and a new internal node is introduced in the tree.

The key question is how to assign branch lengths. If two clusters are joined at distance ( D_{ij} ), the distance from each cluster to the new internal node is taken to be half of this value. This reflects the assumption that both lineages have evolved for the same amount of time since their divergence.

After merging clusters, the distance matrix must be updated. The distance between the new cluster and any other cluster is computed as the average of the distances between all members of the clusters.

This averaging step ensures that the distance between clusters reflects their overall similarity.

---

### **A Worked Example**

To illustrate the procedure, consider a set of five taxa with the following distance matrix:

[
\begin{array}{c|ccccc}
& a & b & c & d & e \
\hline
a & 0 & 17 & 21 & 31 & 23 \
b &   & 0  & 30 & 34 & 21 \
c &   &    & 0  & 28 & 39 \
d &   &    &    & 0  & 43 \
e &   &    &    &    & 0 \
\end{array}
]

We begin by identifying the smallest distance, which is ( D_{ab} = 17 ). The taxa ( a ) and ( b ) are merged into a new cluster.

The branch length from each taxon to the new internal node is ( 17/2 = 8.5 ).

Next, we compute distances between the new cluster ( (a,b) ) and the remaining taxa. For example, the distance to taxon ( c ) is:

[
D_{(a,b),c} = \frac{D_{ac} + D_{bc}}{2} = \frac{21 + 30}{2} = 25.5
]

This process is repeated for all remaining taxa, resulting in a reduced distance matrix.

The algorithm then proceeds by repeatedly merging the closest clusters and updating the matrix until a complete tree is obtained.

---

### **Box 7.5 — Why Averaging Works**

When merging two clusters, the distance to a third cluster must reflect all pairwise relationships.

If cluster ( A ) contains ( n_A ) taxa and cluster ( B ) contains ( n_B ) taxa, the correct distance to another cluster ( C ) is:

[
D_{(A,B),C} = \frac{n_A D_{A,C} + n_B D_{B,C}}{n_A + n_B}
]

This is a weighted average, ensuring that larger clusters contribute proportionally.

This detail is often overlooked, but it is essential for maintaining consistency in the distance matrix as clusters grow.

---

### **Ultrametric Trees and the Molecular Clock**

A defining feature of UPGMA is that it produces an **ultrametric tree**.

In such a tree, all leaves are equidistant from the root. This implies that all lineages have evolved for the same amount of time since their common ancestor.

This property reflects the **molecular clock assumption**, which states that evolutionary changes accumulate at a constant rate over time.

Under this assumption, distance becomes directly proportional to time, and the height of the tree corresponds to divergence times.

---

### **When the Assumption Fails**

In many biological systems, the molecular clock assumption does not hold. Different lineages may evolve at different rates due to varying selective pressures, mutation rates, or population dynamics.

When this happens, UPGMA may produce incorrect tree topologies. Clusters may be merged based on similarity that reflects rate differences rather than true evolutionary relationships.

This highlights an important limitation of the method. Its simplicity comes at the cost of strong assumptions about the underlying process.

---

### **Conceptual Interpretation**

UPGMA illustrates how a simple algorithm can transform distance data into a complete phylogenetic tree.

At each step, local decisions are made based on pairwise similarity. These decisions accumulate into a global structure that represents an evolutionary hypothesis.

At the same time, the method demonstrates the importance of assumptions. The structure of the resulting tree is not determined solely by the data, but also by the constraints imposed by the model.

---

### **Conceptual Summary**

UPGMA is a constructive method that builds phylogenetic trees by iteratively merging the closest clusters. It provides an efficient and intuitive approach to tree construction, closely related to hierarchical clustering.

However, its reliance on the molecular clock assumption limits its applicability. When evolutionary rates vary, more flexible methods are required.

---

### **Self-Check Questions**

1. How does UPGMA differ from search-based phylogenetic methods?
2. Why are branch lengths assigned as half the distance between merged clusters?
3. How are distances updated when clusters are merged?
4. What is an ultrametric tree?
5. What biological assumption underlies ultrametric trees?
6. Why can UPGMA produce incorrect trees when mutation rates vary?
