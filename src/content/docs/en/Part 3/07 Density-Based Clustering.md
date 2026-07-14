## 8.7 Density-Based Clustering: Discovering Clusters of Arbitrary Shape

### Learning Goals

After completing this section, you should be able to:

- Explain why center-based clustering may fail for complex biological datasets.
- Describe the fundamental idea behind density-based clustering.
- Explain the DBSCAN algorithm and its two key parameters.
- Distinguish between core points, border points, and noise points.
- Evaluate the strengths and limitations of density-based clustering.

Both *k*-means and hierarchical clustering have proven to be powerful methods for discovering structure in biological data. However, they also share an important characteristic: both primarily rely on distances between observations to identify clusters.

This works remarkably well when biological groups are compact and clearly separated. Unfortunately, real biological data are often far more complex.

Imagine a dataset containing two crescent-shaped populations of cells. To a human observer, these two groups are immediately recognizable as distinct clusters. A center-based method such as *k*-means, however, would attempt to summarize each group by a single centroid. The resulting partition would cut across the crescent shapes rather than following their natural geometry.

Similarly, hierarchical clustering often struggles when clusters are connected through gradual transitions or contain substantial amounts of experimental noise.

These observations motivate a different way of thinking about clusters.

Rather than asking

> **Which observations are closest to one another?**

we might instead ask

> **Where are observations concentrated?**

This simple change in perspective leads to an entirely different family of clustering algorithms known as **density-based clustering**.

### Clusters as Regions of High Density

The central assumption of density-based clustering is fundamentally different from that of *k*-means.

Instead of representing a cluster by its center, density-based methods assume that

> **Clusters correspond to regions where observations are densely packed together and are separated by regions of low density.**

This definition is remarkably intuitive.

Imagine observing the geographical distribution of trees in a forest.

Individual trees rarely form perfectly circular groups. Instead, they occupy dense patches separated by open areas. The precise shape of each patch is largely irrelevant; what defines the forest stand is simply the high local density of trees.

Density-based clustering applies exactly the same idea to biological feature spaces.

Wherever observations accumulate, a cluster is formed.

Where observations become sparse, cluster boundaries naturally emerge.

This definition allows clusters to possess virtually any geometric shape.

### The DBSCAN Algorithm

The best-known density-based clustering algorithm is **DBSCAN** (*Density-Based Spatial Clustering of Applications with Noise*).

Unlike *k*-means, DBSCAN does not require the number of clusters to be specified in advance.

Instead, the algorithm identifies clusters automatically by examining the local density surrounding each observation.

To accomplish this, DBSCAN introduces two intuitive parameters.

### Defining a Neighborhood

The first parameter is the neighborhood radius, denoted by

\[
\varepsilon
\]

(pronounced "epsilon").

Around every observation, we imagine drawing a hypersphere with radius \(\varepsilon\).

Every observation located inside this neighborhood is considered a neighbor.

The value of \(\varepsilon\) therefore determines what we regard as a "local neighborhood."

A small radius focuses on very local structures.

A larger radius considers broader regions of the feature space.

### Defining Sufficient Density

The second parameter is the minimum number of neighboring observations required to define a dense region.

This parameter is commonly denoted as

\[
\text{MinPts}.
\]

Only if an observation has at least **MinPts** neighbors within its \(\varepsilon\)-neighborhood is the surrounding region considered sufficiently dense to belong to a cluster.

Together, these two parameters define the algorithm's concept of density.

### Three Types of Observations

Using these definitions, DBSCAN classifies every observation into one of three categories.

#### Core Points

A **core point** possesses at least **MinPts** neighbors within its \(\varepsilon\)-neighborhood.

Core points form the backbone of every cluster.

Biologically, they represent observations located within the characteristic region of a biological state or functional group.

#### Border Points

A **border point** does not itself satisfy the density criterion but lies within the neighborhood of a core point.

Border points therefore belong to a cluster but occupy its outer boundary.

One may think of them as observations that resemble the cluster but are less representative than the core observations.

#### Noise Points

Observations that are neither core points nor border points are classified as **noise** (or **outliers**).

Unlike *k*-means or hierarchical clustering, DBSCAN does not force every observation into a cluster.

Instead, isolated observations remain unassigned.

This seemingly simple feature is one of the algorithm's greatest strengths.

Biological datasets almost always contain measurement errors, rare cell types, technical artifacts, or experimental outliers. Automatically assigning such observations to clusters may obscure genuine biological patterns.

DBSCAN instead treats them explicitly as observations that cannot confidently be associated with any dense biological population.

### Growing Clusters

Once all observations have been classified, DBSCAN constructs clusters through a simple expansion procedure.

The algorithm begins with an arbitrary core point.

All neighboring core points are added to the cluster.

Each newly added core point contributes its own neighbors, allowing the cluster to grow outward through connected dense regions.

Border points are subsequently attached to the corresponding cluster, while isolated noise points remain excluded.

Importantly, the cluster grows solely according to local density.

No assumptions are made about its overall shape.

As a result, DBSCAN naturally discovers curved, elongated, branched, or otherwise irregular biological structures that are difficult to capture with center-based methods.

### Advantages of Density-Based Clustering

Density-based clustering offers several important advantages over traditional clustering methods.

Most importantly, it makes almost no assumptions about cluster geometry.

Clusters may be

- elongated,
- curved,
- branched,
- nested,
- or highly irregular.

This flexibility is particularly valuable in modern single-cell biology, where cellular differentiation often follows continuous trajectories rather than forming compact spherical populations.

A second major advantage is the automatic detection of outliers.

Rather than forcing every observation into a cluster, DBSCAN explicitly recognizes observations that lack sufficient local support.

This often leads to biologically cleaner and more interpretable clustering results.

Finally, DBSCAN does not require the number of clusters to be specified beforehand.

Instead, the number of clusters emerges naturally from the density structure of the dataset.

### Limitations of DBSCAN

Like every clustering algorithm, DBSCAN relies on assumptions that are not universally valid.

Its performance depends strongly on the choice of the two density parameters.

If the neighborhood radius is chosen too small, many observations are classified as noise and genuine clusters may fragment into multiple smaller groups.

If the radius is chosen too large, distinct biological populations may merge into a single cluster.

A second limitation arises when different biological populations exhibit different densities.

Some pathways may produce highly homogeneous expression patterns, while others naturally exhibit much greater variability.

Similarly, one cell type may form an extremely dense cluster whereas another forms a much more diffuse population.

Because DBSCAN uses a single density threshold for the entire dataset, it may struggle to identify both types of clusters simultaneously.

These limitations illustrate an important lesson.

No clustering algorithm is universally optimal.

Every algorithm defines clusters according to a particular mathematical principle.

The appropriate method therefore depends not only on the dataset but also on the biological question being addressed.

### Three Different Concepts of a Cluster

At this point, we have encountered three fundamentally different definitions of what a cluster is.

*k*-means assumes that clusters are organized around representative centroids.

Hierarchical clustering assumes that clusters form nested similarity relationships.

DBSCAN assumes that clusters correspond to connected regions of high observation density.

Remarkably, all three approaches may be applied to exactly the same dataset, yet produce different clustering results.

None of these results is inherently correct or incorrect.

Rather, each reflects a different mathematical hypothesis about how biological organization should be represented.

This observation reinforces one of the central themes of this book:

> **Algorithms do not discover objective biological truths. They discover structures that are consistent with the assumptions built into their mathematical models.**

Understanding these assumptions is therefore essential for interpreting clustering results critically and selecting the appropriate method for a particular biological problem.

### Conceptual Summary

- Density-based clustering defines clusters as regions of high observation density.
- DBSCAN identifies clusters without requiring the number of clusters beforehand.
- Two parameters, \(\varepsilon\) and MinPts, define the notion of density.
- Observations are classified as core points, border points, or noise.
- DBSCAN naturally identifies clusters of arbitrary shape and detects outliers.
- Like all clustering methods, DBSCAN reflects specific assumptions about biological organization.

### Self-Check Questions

1. Why do center-based clustering algorithms struggle with irregularly shaped clusters?
2. What biological intuition motivates density-based clustering?
3. What roles do the parameters \(\varepsilon\) and MinPts play in DBSCAN?
4. How do core points, border points, and noise points differ?
5. Under which biological circumstances would you prefer DBSCAN over *k*-means or hierarchical clustering?