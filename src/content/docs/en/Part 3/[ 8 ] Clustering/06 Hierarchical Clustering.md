## 8.6 Hierarchical Clustering: Revealing Relationships Between Clusters

### Learning Goals

After completing this section, you should be able to:

- Explain the basic idea of hierarchical clustering.
- Describe the agglomerative clustering algorithm.
- Interpret dendrograms as representations of nested biological relationships.
- Distinguish between different linkage criteria.
- Evaluate the advantages and limitations of hierarchical clustering.

The *k*-means algorithm provides a powerful and computationally efficient approach to clustering, but it relies on a fundamental assumption: every cluster can be represented by a single centroid. While this assumption is appropriate for many biological datasets, it is by no means universally valid.

Biological organization is often hierarchical rather than flat.

Genes participate in pathways, pathways interact within larger regulatory programs, and these programs together define cellular states. Similarly, proteins form complexes, complexes contribute to biological processes, and biological processes are organized into functional systems. These nested relationships suggest that biological similarity itself may possess a hierarchical structure.

Rather than asking

> **Which cluster does this object belong to?**

we may instead ask

> **How are all biological objects related to one another across multiple levels of organization?**

Hierarchical clustering was developed to answer precisely this question.

### Building Clusters Step by Step

Unlike *k*-means, hierarchical clustering does not begin with a predefined number of clusters. Instead, it constructs an entire hierarchy of relationships that spans from individual observations to the complete dataset.

The most widely used approach is **agglomerative hierarchical clustering**.

The term *agglomerative* simply means *building up by merging*.

The algorithm starts with the simplest possible clustering:

Every observation forms its own individual cluster.

If a dataset contains 10,000 genes, the algorithm therefore begins with 10,000 separate clusters.

The clustering then proceeds through a sequence of merging operations.

At each step, the two most similar clusters are combined into a new, larger cluster. This process is repeated until all observations have eventually been merged into one single cluster containing the entire dataset.

Rather than producing only one clustering solution, the algorithm therefore constructs an entire history of how biological groups emerge.

### The Agglomerative Clustering Algorithm

The procedure can be summarized in four simple steps.

#### Step 1: Initialize Individual Clusters

Initially, every observation is treated as an independent cluster.

No assumptions are made about the number or size of biological groups.

#### Step 2: Find the Most Similar Clusters

The distances between all existing clusters are calculated.

The two clusters with the smallest distance are considered the most similar and are merged into a new cluster.

#### Step 3: Update Cluster Distances

After two clusters have been merged, the distances between the newly formed cluster and all remaining clusters must be recalculated.

Exactly how these distances are computed depends on the chosen **linkage criterion**, which we will discuss shortly.

#### Step 4: Repeat Until Only One Cluster Remains

The merge-and-update process continues until all observations belong to one single cluster.

Unlike *k*-means, hierarchical clustering therefore does not terminate after finding a predetermined number of groups. Instead, it produces a complete hierarchy of nested cluster relationships.

### The Dendrogram

The sequence of merging operations is visualized as a **dendrogram**.

A dendrogram is a tree-like diagram that records every clustering step performed by the algorithm.

Each leaf of the tree represents an individual observation.

Each internal node represents the merging of two clusters.

The vertical position of a merging event reflects the distance at which the two clusters were joined.

Clusters that merge near the bottom of the dendrogram are highly similar.

Clusters that merge only near the top are substantially more different.

Unlike a phylogenetic tree, however, a dendrogram does **not** describe evolutionary history.

Instead, it visualizes the mathematical similarity structure of the dataset.

This distinction is important. Although both diagrams resemble trees, they answer fundamentally different biological questions.

A phylogenetic tree reconstructs ancestry.

A dendrogram summarizes similarity.

### Reading Biological Relationships from a Dendrogram

One of the greatest strengths of hierarchical clustering is that it preserves information at multiple levels of biological organization.

Imagine a gene expression experiment in which genes involved in photosynthesis cluster together.

Within this large photosynthetic cluster, genes associated with photosystem I may form one subgroup, while photosystem II genes form another.

Even finer subdivisions may separate genes involved in light harvesting from those responsible for electron transport.

A dendrogram naturally captures these nested relationships.

Instead of forcing the data into a single level of organization, it allows biological structure to emerge at multiple scales.

This is particularly valuable because biological systems themselves are inherently hierarchical.

### From a Hierarchy to Individual Clusters

At this point, an important question arises.

If hierarchical clustering produces an entire tree, how do we obtain the final clusters?

The answer is surprisingly simple.

We **cut** the dendrogram at a chosen height.

Every branch intersected by this horizontal cut becomes an independent cluster.

A cut near the top produces only a few large clusters.

A cut lower in the tree generates many smaller clusters.

Hierarchical clustering therefore does not produce a single clustering solution.

Instead, it provides an entire family of possible clusterings, allowing the researcher to select the level of biological detail most appropriate for the problem under investigation.

### Measuring Distances Between Clusters

When the algorithm begins, each cluster contains only a single observation, making distance calculations straightforward.

After the first merge, however, clusters contain multiple observations.

This raises an important question:

> **How should the distance between two clusters be defined?**

Unlike individual observations, clusters have no unique location.

Instead, they contain many points.

Different mathematical definitions of cluster distance therefore lead to different clustering results.

These definitions are known as **linkage criteria**.

### Linkage Criteria

Several linkage strategies are commonly used in biological data analysis.

**Single Linkage**

Single linkage defines the distance between two clusters as the smallest distance between any pair of observations belonging to the two clusters.

Clusters are therefore merged whenever any two members lie close together.

This approach is particularly effective for identifying elongated or irregular cluster shapes.

However, it often suffers from the **chaining effect**, in which long sequences of nearby observations become linked into one large cluster despite substantial biological differences between the endpoints.

**Complete Linkage**

Complete linkage takes the opposite approach.

Here, the distance between two clusters equals the largest distance between any pair of observations.

Two clusters are merged only if all their members are relatively similar.

This generally produces compact, well-separated clusters but may artificially split elongated biological structures.

**Average Linkage**

Average linkage computes the average distance between all pairs of observations belonging to two clusters.

It provides a compromise between the two previous approaches and is frequently used in gene expression analysis because it balances robustness and flexibility.

**Ward's Method**

Ward's method adopts a different perspective altogether.

Instead of comparing pairwise distances directly, it evaluates how much the total within-cluster variation would increase if two clusters were merged.

At every iteration, the algorithm chooses the merge that results in the smallest increase in within-cluster variance.

Conceptually, Ward's method resembles *k*-means because both methods seek compact, internally homogeneous clusters.

Consequently, Ward clustering often produces highly interpretable clusters for transcriptomic and proteomic datasets.

### Strengths and Limitations

Hierarchical clustering offers several important advantages.

First, it does not require the number of clusters to be specified in advance.

Second, the dendrogram provides a rich visualization of the similarity structure across multiple biological scales.

Finally, nested biological organization can be represented naturally without forcing observations into a single fixed partition.

These strengths have made hierarchical clustering one of the standard tools for visualizing gene expression data.

However, hierarchical clustering also has limitations.

Once two clusters have been merged, the decision cannot be reversed.

An early incorrect merge therefore propagates throughout the remainder of the algorithm.

In addition, hierarchical clustering becomes computationally demanding for very large datasets, making center-based methods such as *k*-means preferable in many large-scale applications.

Most importantly, the resulting dendrogram depends strongly on the chosen linkage criterion.

Different linkage methods often produce noticeably different cluster structures, even when applied to exactly the same dataset.

This observation reinforces a recurring theme of this book:

> **Different algorithms do not merely analyze biological data differently—they embody different mathematical assumptions about how biological organization should be represented.**

### Conceptual Summary

- Hierarchical clustering builds clusters by repeatedly merging similar observations.
- The result is a dendrogram representing nested similarity relationships.
- A dendrogram describes similarity, not evolutionary history.
- Different linkage criteria define cluster distances in different ways.
- Ward's method minimizes the increase in within-cluster variance.
- Hierarchical clustering naturally captures biological organization at multiple levels.

### Self-Check Questions

1. How does hierarchical clustering differ conceptually from *k*-means?
2. What biological information is represented by a dendrogram?
3. Why does hierarchical clustering not require the number of clusters to be specified beforehand?
4. How do single, complete, average, and Ward linkage differ?
5. Why can different linkage criteria produce different biological interpretations?