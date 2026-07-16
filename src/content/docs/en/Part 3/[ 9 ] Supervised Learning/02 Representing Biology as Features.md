---
title: "9.2 Representing Biology as Features"
sidebar:
  label: "9.2 Representing Biology as Features"
  order: 2
  group: "Part 3"
  part: "Part 3"
---

# 9.2 Representing Biology as Features

## Why biological observations must become numbers

Biologists naturally think in terms of sequences, proteins, pathways, cells, and organisms. Machine learning algorithms, however, have no intrinsic understanding of these biological concepts. They can only process numerical data.

This creates an important challenge.

Before a learning algorithm can discover relationships in biological data, every biological observation must first be translated into a numerical representation. This process is known as **feature representation**, and the resulting numerical quantities are called **features**.

One can think of features as measurements that summarize biologically meaningful properties of an object.

For example, a protein sequence contains hundreds of amino acids arranged in a specific order. While a biologist immediately recognizes this as meaningful biological information, a machine learning algorithm cannot directly interpret the sequence.

Instead, we first describe the protein using numerical properties such as

- amino acid composition,
- hydrophobicity,
- molecular weight,
- isoelectric point,
- predicted secondary structure,
- or evolutionary conservation.

Each of these quantities captures one particular aspect of the protein. Together, they provide a numerical description that the learning algorithm can analyze.

The process of selecting or constructing these numerical descriptions is one of the most important steps in supervised learning.

---

## Feature vectors: describing biological objects numerically

Most biological systems cannot be adequately described by a single measurement.

Instead, we characterize each observation by multiple features that together capture different aspects of its biology.

Suppose we describe every protein by four properties:

- hydrophobicity,
- surface charge,
- molecular weight,
- and predicted α-helical content.

Instead of representing the protein by its sequence, we now represent it by the numerical vector

\[
\mathbf{x}
=
(x_1,x_2,x_3,x_4).
\]

Such a collection of numerical features is called a **feature vector**.

Every protein in the dataset is represented by one feature vector.

The machine learning algorithm no longer operates directly on protein sequences. Instead, it searches for relationships between feature vectors and the biological property of interest.

This abstraction is extremely powerful because it allows very different biological entities to be treated in the same mathematical framework.

Whether the observation is

- a protein,
- a metabolite,
- a cell,
- a patient,
- or an entire ecosystem,

it can always be represented as a vector of numerical measurements.

Consequently, supervised learning algorithms are largely independent of the underlying biological system. They only require informative numerical representations.

---

## Good features encode biological hypotheses

An important misconception is that machine learning automatically discovers everything that is relevant for prediction.

In reality, the quality of the predictions depends critically on the information contained in the input features.

Features therefore encode biological hypotheses.

Suppose we want to predict protein stability.

From decades of biochemical research, we know that proteins fold because hydrophobic amino acids preferentially occupy the interior of the folded structure, where they avoid contact with water. This process, known as **hydrophobic core packing**, is one of the major physical forces stabilizing proteins.

This biological knowledge immediately suggests a useful feature:

> **The overall hydrophobicity of a protein may contain information about its stability.**

Notice what has happened.

The feature was not chosen by mathematics.

It was chosen because biological knowledge suggests that it should be informative.

This illustrates an important principle that applies throughout computational biology:

> **Features should represent biologically meaningful properties that are plausibly related to the prediction target.**

Machine learning can discover statistical relationships, but it cannot recover information that is absent from the input representation.

---

## A motivating example: predicting protein stability

Throughout this chapter, we will use a deliberately simple prediction problem to illustrate the principles of supervised learning.

Suppose we have experimentally measured the thermal stability of many proteins. Thermal stability is often quantified by the melting temperature (\(T_m\)), the temperature at which half of the protein population becomes unfolded.

For each protein, we also calculate its overall hydrophobicity from its amino acid sequence.

Our dataset therefore consists of pairs of observations,

\[
(\text{hydrophobicity},\; \text{protein stability}).
\]

The biological question is straightforward:

> **Can we predict protein stability from protein hydrophobicity?**

At first glance, this appears to be an oversimplification.

Protein stability is influenced by many molecular mechanisms, including hydrogen bonding, electrostatic interactions, disulfide bridges, conformational flexibility, ligand binding, and quaternary structure.

Hydrophobicity certainly cannot explain all of these effects.

Nevertheless, it represents an excellent teaching example because it captures a genuine biological mechanism while remaining mathematically simple.

Our goal is therefore not to build the best possible predictor of protein stability.

Instead, we use this simplified example to understand the fundamental principles that underlie all supervised learning algorithms.

---

## Feature engineering versus feature learning

Historically, constructing informative features required substantial biological expertise.

Researchers carefully designed features that they believed would capture relevant biological mechanisms. This process is known as **feature engineering**.

For many years, advances in machine learning were driven largely by improvements in feature engineering. Better biological insight often led directly to better predictive performance.

Modern deep learning has shifted this paradigm.

Instead of manually designing features, neural networks often learn useful representations directly from raw data such as protein sequences or biological images.

Nevertheless, even these methods do not eliminate the need for biological understanding.

Researchers must still decide

- which data should be collected,
- which prediction task should be solved,
- how experimental labels are generated,
- and how model performance should be evaluated.

Moreover, learned representations frequently rediscover biologically meaningful concepts, demonstrating that successful prediction still depends on capturing the underlying biology.

Feature engineering and feature learning should therefore be viewed as complementary approaches rather than competing philosophies.

---

### Learning Goals

After completing this section, you should be able to

- explain why machine learning requires numerical representations of biological observations,
- define the terms *feature* and *feature vector*,
- understand why informative features encode biological knowledge,
- explain why feature selection strongly influences prediction quality,
- distinguish between feature engineering and feature learning.

### Conceptual Summary

Machine learning algorithms operate on numerical representations rather than biological objects themselves. Biological observations must therefore be transformed into feature vectors that capture relevant biological properties. Choosing informative features is fundamentally a biological task because features represent hypotheses about which mechanisms influence the prediction target. While modern deep learning increasingly learns these representations automatically, successful prediction still depends on representing biologically meaningful information.

### Self-Check Questions

1. Why can machine learning algorithms not operate directly on biological sequences?
2. What is a feature, and what is a feature vector?
3. Why does feature selection require biological knowledge?
4. Why is hydrophobicity a reasonable feature for predicting protein stability?
5. What is the difference between feature engineering and feature learning?