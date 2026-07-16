---
title: "8.5 Center-Based Clustering: The k-Means Algorithm"
sidebar:
  label: "8.5 Center-Based Clustering: The k-Means Algorithm"
  order: 5
  group: "Part 3"
  part: "Part 3"
---

## 8.5 Center-Based Clustering: The k-Means Algorithm

### Learning Goals

After completing this section, you should be able to:

- Explain the fundamental idea behind center-based clustering.
- Describe how the *k*-means algorithm partitions biological data.
- Understand the optimization objective of *k*-means.
- Explain why the algorithm converges iteratively.
- Evaluate the strengths and limitations of center-based clustering for biological data.

In the previous section, we established that clustering aims to partition biological data into groups whose members are similar to one another while remaining distinct from members of other groups. We also saw that there is no unique mathematical definition of what constitutes a cluster.

The **k-means algorithm** answers this question by making a simple but powerful assumption:

> **A biological cluster can be represented by its center.**

Rather than considering all pairwise relationships among observations, *k*-means assumes that every cluster has a representative point—its **centroid**—and that every observation belongs to the cluster whose centroid is closest.

This seemingly modest assumption transforms a difficult clustering problem into a computationally efficient optimization procedure and has made *k*-means one of the most widely used clustering algorithms in biology.

### Biological Intuition

Imagine measuring the expression of several thousand genes under a series of environmental conditions.

Some genes respond almost identically, suggesting that they participate in the same biological pathway. Instead of comparing every gene with every other gene individually, it would be much more convenient to summarize each biological group by a single "typical" expression profile.

This representative profile is precisely what the centroid represents.

Rather than asking whether two genes are similar to each other, *k*-means asks a different question:

> **Which representative expression profile does this gene most closely resemble?**

Genes with similar behavior are therefore assigned to the same centroid, and each centroid becomes the characteristic expression pattern of one biological group.

This greatly simplifies the clustering problem. Instead of reasoning about millions of pairwise similarities, each gene only needs to be compared with a relatively small number of representative profiles.

### The Optimization Objective

Like many machine learning algorithms, *k*-means is fundamentally an optimization algorithm.

Its objective is to find cluster centers that minimize the overall variability within the clusters.

More precisely, the algorithm minimizes the **within-cluster sum of squares (WCSS)**,

\[
J
=
\sum_{k=1}^{K}
\sum_{\mathbf{x}\in C_k}
\|\mathbf{x}-\boldsymbol{\mu}_k\|^2,
\]

where

- \(K\) is the number of clusters,
- \(C_k\) denotes the observations assigned to cluster \(k\),
- and \(\boldsymbol{\mu}_k\) is the centroid of that cluster.

Although this equation may appear complicated, its biological interpretation is straightforward.

For every biological object, the algorithm calculates its distance to the centroid of its assigned cluster. Large distances indicate that the object differs substantially from the characteristic behavior of that cluster, whereas small distances indicate close agreement.

The optimization therefore seeks cluster centers that make all observations resemble their representative profiles as closely as possible.

In other words,

> **A good clustering is one in which every biological object is well represented by its cluster centroid.**

This objective directly reflects the principle introduced in the previous section: clusters should exhibit high internal similarity.

### The k-Means Algorithm

The optimization itself proceeds through a remarkably simple iterative procedure.

#### Step 1: Choose the Number of Clusters

Before the algorithm can begin, the number of clusters, denoted by \(K\), must be specified.

At this stage, the algorithm has no information about the biological organization of the data. It therefore cannot determine how many functional groups actually exist.

Instead, this decision must initially be provided by the user.

Determining an appropriate value for \(K\) is itself an important modeling problem and will be discussed later in this chapter.

#### Step 2: Initialize the Centroids

The algorithm begins by placing \(K\) initial centroids within the feature space.

In the simplest implementation, these centroids are chosen randomly from the observed data points.

At this stage, the centroids have no biological meaning. They merely serve as starting points for the optimization.

Because the initialization is random, different runs of the algorithm may initially produce different solutions.

#### Step 3: Assign Observations to the Nearest Centroid

Next, every biological object is assigned to the nearest centroid according to the chosen distance measure, usually the Euclidean distance.

This assignment defines the first provisional clusters.

Biologically, each gene is temporarily associated with the representative expression profile that best matches its observed behavior.

#### Step 4: Update the Centroids

Once all observations have been assigned, the centroid of each cluster is recalculated.

The new centroid corresponds to the arithmetic mean of all feature vectors belonging to that cluster.

Geometrically, the centroid moves toward the center of its assigned observations.

Biologically, it becomes a better representation of the characteristic behavior of that functional group.

#### Step 5: Repeat Until Convergence

After the centroids have moved, some observations may now lie closer to a different centroid than before.

The assignment and update steps are therefore repeated.

With each iteration,

- observations are reassigned,
- centroids are recalculated,
- and the within-cluster variation decreases.

Eventually, the centroids no longer change appreciably.

At this point, the algorithm is said to have **converged**, and the final clustering is obtained.

### Why the Algorithm Works

An elegant feature of *k*-means is that every iteration improves—or at least does not worsen—the objective function.

Each assignment step places observations closer to their nearest centroid.

Each update step recalculates centroids that better represent their assigned observations.

Consequently, the within-cluster variation decreases monotonically until no further improvement is possible.

This property guarantees convergence.

However, it does **not** guarantee that the algorithm finds the globally optimal clustering.

Instead, *k*-means converges to a **local optimum**, and the final result may depend on the initial placement of the centroids.

For this reason, practical implementations usually perform the algorithm several times using different random initializations and retain the solution with the lowest objective value.

### Biological Interpretation

From a biological perspective, the centroids obtained by *k*-means are often more informative than the individual observations themselves.

Each centroid represents the characteristic behavior of one biological group.

For gene expression data, a centroid can be interpreted as the **typical expression profile** of a regulatory program.

Genes assigned to the same centroid therefore become candidates for participating in the same biological process, signaling pathway, or cellular response.

The centroids thus provide a compact summary of complex biological datasets, reducing thousands of individual measurements to a small number of representative biological patterns.

### Conceptual Summary

- *k*-means assumes that each cluster can be represented by a centroid.
- The algorithm minimizes the variation within clusters.
- Clustering is performed through alternating assignment and centroid update steps.
- The algorithm converges iteratively to a local optimum.
- The resulting centroids summarize the characteristic behavior of biological groups.

### Self-Check Questions

1. What fundamental assumption distinguishes *k*-means from other clustering algorithms?
2. What biological interpretation can be assigned to a cluster centroid?
3. Why must the number of clusters be specified before running *k*-means?
4. Why does the algorithm iterate between assignment and centroid updates?
5. Why can different runs of *k*-means produce different clustering results?