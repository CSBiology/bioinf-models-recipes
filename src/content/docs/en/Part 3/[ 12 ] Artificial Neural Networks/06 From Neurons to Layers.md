---
title: "12.6 From Neurons to Layers"
sidebar:
  label: "12.6 From Neurons to Layers"
  order: 6
  group: "Part 3"
  part: "Part 3"
---

# 12.6 From Neurons to Layers

## A single neuron is only the beginning

In the previous sections, we examined the artificial neuron as an isolated computational unit. Each neuron receives several inputs, calculates a weighted sum, applies an activation function, and produces a single output.

Although a single neuron can already perform useful computations, it is far too limited to solve most biological prediction problems.

For example, predicting the subcellular localization of a protein depends on many different sequence characteristics simultaneously. One neuron might detect hydrophobic amino acid stretches, another positively charged residues, and yet another specific sequence motifs. A single neuron cannot capture all of these patterns at once.

The strength of neural networks therefore does not lie in individual neurons but in **combining many neurons into layers**.

Within a layer, every neuron performs its own computation independently. Together, the neurons produce a new representation of the input data that can be passed to the next layer.

---

## Many neurons process the same input

Consider a hidden layer consisting of four neurons.

Each neuron receives exactly the same input vector

\[
\mathbf{x}
=
\begin{pmatrix}
x_1\\
x_2\\
\vdots\\
x_n
\end{pmatrix},
\]

where each component represents one biological feature.

Although every neuron receives the same input, they do **not** produce the same output.

Each neuron possesses its own set of weights and its own bias,

\[
w_1,w_2,\ldots,w_n,b.
\]

Consequently, every neuron learns to recognize a different pattern in the data.

One neuron may become sensitive to hydrophobic regions.

Another may detect positively charged N-termini.

A third may respond to characteristic amino acid compositions.

Together, the neurons learn multiple complementary representations of the same biological observation.

---

## Matrix notation

Writing separate equations for every neuron quickly becomes cumbersome.

Suppose a hidden layer contains one hundred neurons, each receiving fifty input features.

Writing one equation for every neuron would require hundreds of nearly identical expressions.

Fortunately, linear algebra provides a much more elegant description.

The weights of all neurons within one layer can be collected into a single **weight matrix**

\[
W.
\]

If the layer contains

- \(m\) neurons,
- and each neuron receives \(n\) input features,

then the weight matrix has the dimensions

\[
m \times n.
\]

Each **row** corresponds to one neuron.

Each **column** corresponds to one input feature.

The bias values of all neurons are collected into a bias vector,

\[
\mathbf{b}.
\]

The complete computation of the entire layer can now be written compactly as

\[
\mathbf{z}
=
W\mathbf{x}
+
\mathbf{b}.
\]

Instead of describing one neuron, this equation simultaneously describes every neuron in the layer.

---

## Why matrix multiplication?

At first glance, matrix notation may appear to be merely a mathematical convenience.

In reality, it provides a much deeper insight into how neural networks operate.

Recall that each neuron computes its own weighted sum,

\[
z_i
=
w_{i1}x_1
+
w_{i2}x_2
+
\cdots
+
w_{in}x_n
+
b_i.
\]

The matrix multiplication

\[
W\mathbf{x}
\]

simply performs all of these weighted sums simultaneously.

Each row of the matrix is multiplied with the input vector, producing one output value for one neuron.

Instead of calculating one neuron after another, matrix multiplication computes the outputs of the entire layer in a single operation.

This observation explains why modern deep learning relies so heavily on linear algebra.

Neural networks are essentially enormous collections of matrix multiplications interspersed with nonlinear activation functions.

---

## Applying the activation function

The weighted sums calculated by the layer are collected in the vector

\[
\mathbf{z}.
\]

As we learned in the previous section, these values are not passed directly to the next layer.

Instead, the activation function is applied **independently to every neuron**.

Mathematically,

\[
\mathbf{a}
=
\phi(\mathbf{z}),
\]

where the activation function acts on every component of the vector individually.

The complete computation of a neural network layer therefore becomes

\[
\boxed{
\mathbf{a}
=
\phi(W\mathbf{x}+\mathbf{b})
}
\]

This compact equation is one of the most important equations in deep learning.

It describes the forward computation performed by an entire layer of neurons.

Every feed-forward neural network, regardless of its size or application, repeatedly evaluates this equation.

---

## A layer learns a new representation

Notice what has happened during this computation.

The input vector

\[
\mathbf{x}
\]

contained the original biological features.

After multiplication with the weight matrix and application of the activation function, these features have been transformed into a new vector,

\[
\mathbf{a}.
\]

Importantly, the components of this new vector no longer correspond directly to the original biological measurements.

Instead, they represent features that the network has learned automatically.

For example, the original input may contain

- amino acid composition,
- hydrophobicity,
- sequence length,
- and charge.

After one hidden layer, the outputs may instead represent

- the presence of a transit peptide,
- membrane-spanning regions,
- positively charged targeting signals,
- or combinations of several sequence motifs.

The network has therefore constructed a **new representation** of the protein that is more useful for the prediction task.

This transformation from one representation to another is the central idea of deep learning.

---

## Layers build increasingly abstract representations

A feed-forward neural network does not stop after one hidden layer.

The output

\[
\mathbf{a}
\]

of one layer becomes the input of the next.

The next layer again computes

\[
\phi(W\mathbf{a}+\mathbf{b}),
\]

producing an even richer representation.

This process repeats throughout the network.

Every successive layer builds upon the representations learned by the previous one.

Rather than learning directly from the raw biological measurements, deeper layers learn from increasingly informative internal representations.

This hierarchical organization explains why deep neural networks are capable of solving problems that are inaccessible to much simpler models.

The next section explores exactly what these hidden representations look like and how they emerge during learning.

---

### Conceptual Summary

Neurons become powerful only when combined into layers. Every neuron within a layer receives the same input but learns different weights, allowing the layer to detect multiple patterns simultaneously. Matrix notation provides an elegant mathematical description of this computation, reducing hundreds of individual neuron equations to the compact expression

\[
\mathbf{a}=\phi(W\mathbf{x}+\mathbf{b}).
\]

Each layer transforms one representation of the biological data into another, allowing deep networks to build increasingly abstract descriptions of complex biological systems.

---

### Self-Check Questions

1. Why is a single neuron insufficient for solving complex biological prediction problems?
2. Why do neurons within the same layer produce different outputs even though they receive the same input?
3. What information is stored in the weight matrix \(W\)?
4. Why is matrix multiplication particularly well suited for describing neural network computations?
5. Explain the meaning of the equation
   \[
   \mathbf{a}=\phi(W\mathbf{x}+\mathbf{b}).
   \]
6. Why do the outputs of a hidden layer no longer correspond directly to the original biological features?
7. How do successive hidden layers create increasingly abstract representations of the input data?