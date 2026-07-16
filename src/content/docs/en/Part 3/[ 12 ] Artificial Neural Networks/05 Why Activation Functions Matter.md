---
title: "12.5 Why Activation Functions Matter"
sidebar:
  label: "12.5 Why Activation Functions Matter"
  order: 5
  group: "Part 3"
  part: "Part 3"
---

# 12.5 Why Activation Functions Matter

## Linear models have a fundamental limitation

In the previous section, we saw that every artificial neuron first computes a weighted sum of its inputs,

\[
z=\sum_{i=1}^{n} w_i x_i+b.
\]

At first glance, this appears to be a perfectly reasonable computational model.

After all, multiple linear regression uses exactly the same equation.

This naturally raises an important question.

> **If every neuron already performs a linear regression, why do we need anything more?**

The answer is surprisingly profound.

Without an additional nonlinear transformation, deep neural networks would offer no advantage over the linear models we already studied in Chapter 9.

---

## Stacking linear models does not create complexity

Suppose we construct a network consisting of several layers.

The first layer computes a weighted sum of the input features.

The second layer again computes weighted sums of the outputs from the first layer.

The third layer repeats the same operation.

Intuitively, one might expect that combining many linear transformations would gradually produce a highly complex model.

Mathematically, however, this is not the case.

A linear transformation followed by another linear transformation is still a linear transformation.

For example,

\[
y = A(Bx)
\]

can always be written as

\[
y = Cx,
\]

where

\[
C = AB.
\]

The two transformations simply merge into a single one.

The same principle applies regardless of how many layers are added.

Ten linear layers.

One hundred linear layers.

Or one thousand.

The result remains mathematically equivalent to a single linear model.

Consequently, a neural network without nonlinear activation functions would never become more expressive than ordinary linear regression.

Adding additional layers alone would provide no benefit.

---

## The need for nonlinearity

Biological systems are rarely governed by simple linear relationships.

Gene regulation often involves thresholds.

Enzyme kinetics become saturated.

Proteins switch between different conformational states.

Cells integrate multiple signaling pathways through highly nonlinear interactions.

Capturing such behavior requires models that themselves are nonlinear.

This is precisely the role of the activation function.

Instead of passing the weighted sum directly to the next layer, every neuron first transforms it using a nonlinear mathematical function,

\[
a=\phi(z).
\]

This seemingly simple modification fundamentally changes the behavior of the entire network.

Each layer now performs a nonlinear transformation of the previous layer.

The composition of many nonlinear transformations can represent extraordinarily complex relationships that are impossible to describe using linear models alone.

The expressive power of deep learning therefore arises not from the weighted sums, but from the nonlinear activation functions that connect successive layers.

---

## The sigmoid function

Historically, one of the first activation functions used in neural networks was the **sigmoid function**,

\[
\phi(z)
=
\frac{1}{1+e^{-z}}.
\]

The sigmoid transforms every input into a value between 0 and 1.

Very negative inputs produce outputs close to zero.

Very positive inputs produce outputs close to one.

Near the center of the curve, the output changes smoothly with the input.

This behavior resembles a gradual activation process.

Small input signals produce only weak responses, whereas sufficiently large signals lead to strong activation.

Because the output can be interpreted as a probability, the sigmoid function remains widely used in the output layer of binary classification networks.

Indeed, logistic regression introduced in the previous chapter can be viewed as a neural network consisting of a single neuron with a sigmoid activation function.

Although historically important, sigmoid functions have disadvantages when used in deep hidden layers.

For very large positive or negative inputs, the curve becomes almost flat.

Small changes in the weights then produce almost no change in the output, making learning increasingly slow.

This problem became one of the major obstacles to training deep neural networks.

---

## The hyperbolic tangent

A closely related activation function is the **hyperbolic tangent**, or **tanh**,

\[
\phi(z)
=
\tanh(z).
\]

Like the sigmoid, tanh is smooth and nonlinear.

However, its output ranges from

\[
-1
\quad\text{to}\quad
1,
\]

rather than from

\[
0
\quad\text{to}\quad
1.
\]

Because positive and negative outputs are balanced around zero, optimization is often more efficient.

For many years, tanh became the preferred activation function for hidden layers in neural networks.

Nevertheless, it still suffers from the same fundamental problem as the sigmoid function.

For very large inputs, the curve saturates.

Learning again becomes slow because the gradients become very small.

---

## ReLU: a surprisingly simple idea

Modern deep learning is largely built upon a much simpler activation function known as the **Rectified Linear Unit (ReLU)**.

Its mathematical definition is remarkably simple,

\[
\phi(z)
=
\max(0,z).
\]

If the weighted sum is negative, the output becomes zero.

If the weighted sum is positive, the output is simply equal to the input.

Graphically, the function consists of two straight lines joined at the origin.

Despite its simplicity, ReLU offers several important advantages.

Unlike sigmoid and tanh, it does not saturate for large positive inputs.

Gradients therefore remain large, allowing information to propagate efficiently through many layers during training.

This simple property made it possible to train much deeper neural networks than had previously been feasible.

Today, ReLU and its variants are the standard activation functions for most hidden layers in deep learning.

---

## Different activation functions for different tasks

No activation function is universally optimal.

Instead, the appropriate choice depends on the role of the neuron within the network.

For hidden layers, ReLU has become the dominant choice because it enables efficient optimization of very deep networks.

For binary classification, sigmoid remains the preferred output activation because its output can be interpreted directly as a probability.

Other prediction tasks require different activation functions, which we will discuss later in this chapter when examining output layers.

The important point is that activation functions are not chosen arbitrarily.

Their mathematical properties determine how efficiently the network learns and how its outputs should be interpreted.

---

## A small mathematical change with enormous consequences

At first glance, the activation function appears to be only a minor addition to the weighted sum.

In reality, it represents the defining innovation of modern neural networks.

Without activation functions,

- deep networks would collapse into simple linear models,
- complex biological relationships could not be represented,
- and modern deep learning would not exist.

The extraordinary capabilities of neural networks therefore arise from a surprisingly simple idea:

> **Insert a nonlinear transformation after every linear computation.**

This principle allows successive layers to build increasingly abstract representations of the data and ultimately enables neural networks to solve prediction problems that are far beyond the reach of classical linear models.

The next question naturally follows:

> **What do these hidden layers actually learn?**

To answer this, we must examine how simple neurons combine into increasingly sophisticated representations of biological information.

---

### Conceptual Summary

Activation functions transform the weighted sum calculated by each neuron into a nonlinear output. This nonlinearity is essential because stacking purely linear transformations cannot increase the expressive power of a neural network. Different activation functions possess different mathematical properties: sigmoid functions naturally represent probabilities, tanh functions produce balanced outputs around zero, and ReLU enables efficient training of deep networks. Together, activation functions provide the foundation upon which modern deep learning is built.

---

### Self-Check Questions

1. Why is a network consisting only of linear transformations equivalent to a single linear model?
2. Why are nonlinear activation functions essential for deep learning?
3. What is the mathematical role of the activation function?
4. Why is the sigmoid function particularly suitable for binary classification?
5. What are the disadvantages of sigmoid and tanh in very deep networks?
6. Why has ReLU become the standard activation function for hidden layers?
7. Why does the choice of activation function depend on the prediction task?
8. Explain why activation functions are one of the key innovations that made modern deep learning possible.