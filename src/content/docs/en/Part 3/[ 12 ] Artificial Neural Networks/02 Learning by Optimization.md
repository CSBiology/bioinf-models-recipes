---
title: "12.2 Learning by Optimization"
sidebar:
  label: "12.2 Learning by Optimization"
  order: 2
  group: "Part 3"
  part: "Part 3"
---

# 12.2 Learning by Optimization

## Neural networks follow the same learning cycle

At first glance, artificial neural networks appear fundamentally different from the learning algorithms introduced in the previous chapters. They consist of many layers, thousands or even millions of adjustable parameters, and often require enormous computational resources for training.

Despite this apparent complexity, the underlying learning principle is exactly the same.

Every supervised learning algorithm—whether it is a linear regression model, logistic regression, a decision tree, or a neural network—follows the same basic cycle:

1. A model generates a prediction.
2. The prediction is compared with experimentally observed data.
3. The prediction error is quantified using a loss function.
4. The model parameters are adjusted to reduce this error.
5. The procedure is repeated until no further improvement can be achieved.

Artificial neural networks do not introduce a new learning strategy.

Instead, they dramatically increase the complexity of the model being optimized.

---

## A brief review: learning with gradient descent

To appreciate how neural networks are trained, it is helpful to recall the simple regression model introduced in Chapter 9.

Suppose we wish to predict the thermal stability of a protein from its hydrophobicity.

The simplest model might be

\[
\hat{y}=mx+b,
\]

where

- \(x\) represents the hydrophobicity,
- \(m\) is the slope,
- \(b\) is the intercept,
- and \(\hat{y}\) is the predicted protein stability.

The parameters \(m\) and \(b\) determine the shape of the regression line.

Initially, these parameters are chosen arbitrarily.

The resulting predictions are compared with experimentally measured protein stabilities, and the prediction error is calculated using the Mean Squared Error (MSE).

Gradient descent then adjusts the parameters step by step in the direction that reduces the prediction error most rapidly.

Eventually, the algorithm converges to a parameter combination that minimizes the loss function.

This simple example illustrates the central idea of machine learning.

> **Learning means finding the parameters that minimize the prediction error.**

Everything that follows in this chapter builds directly upon this principle.

---

## From two parameters to millions

The difference between linear regression and neural networks is therefore not the optimization procedure.

The difference lies in the number of parameters that must be optimized.

For the simple regression model above, only two parameters need to be learned:

- the slope \(m\),
- and the intercept \(b\).

Because the model is simple, the optimal solution can often even be calculated analytically.

Neural networks are fundamentally different.

Instead of containing only two adjustable parameters, they may contain

- thousands,
- millions,
- or even billions of parameters.

Modern deep learning models such as AlphaFold or large language models consist of enormous collections of interconnected parameters that must all be optimized simultaneously.

Finding the best parameter values is no longer a problem that can be solved analytically.

Instead, optimization algorithms such as gradient descent become essential.

The same principle remains unchanged.

Only the dimensionality of the optimization problem has increased dramatically.

---

## The training cycle

The learning process of a neural network can therefore be viewed as a repeated optimization cycle.

It begins with a prediction task.

Suppose we wish to predict the cellular localization of proteins.

The network receives a protein sequence as input and generates an initial prediction.

At the beginning of training, this prediction is usually little better than random because the network has not yet learned meaningful parameter values.

The prediction is then compared with the experimentally known localization.

The discrepancy between prediction and observation is quantified by a suitable loss function.

Using gradient descent, the parameters of the network are updated slightly.

The modified network produces a new prediction, which is evaluated again.

This cycle is repeated thousands or even millions of times.

With each iteration, the network gradually improves its predictions.

Eventually, the prediction error stabilizes, indicating that the network has learned a useful mapping from protein sequences to cellular localization.

The learning process can therefore be summarized as a continuous feedback loop:

\[
\text{Input}
\rightarrow
\text{Prediction}
\rightarrow
\text{Loss}
\rightarrow
\text{Parameter Update}
\rightarrow
\text{Improved Prediction}.
\]

This iterative optimization process forms the foundation of all modern neural network training.

---

## Choosing the right model

Before training can begin, however, another important decision must be made.

Different biological questions require different types of predictive models.

If the goal is to predict a continuous quantity such as protein stability, a regression model is appropriate.

If the objective is to distinguish between predefined categories, a classification model is required.

If no labels are available, unsupervised learning methods such as clustering may be more suitable.

Artificial neural networks do not replace these distinctions.

Instead, they provide a highly flexible model architecture that can be adapted to many different learning tasks.

The same neural network can be configured for

- regression,
- binary classification,
- multiclass classification,
- or many other prediction problems,

simply by modifying its output layer and the associated loss function.

The learning principle itself remains unchanged.

---

## The architecture becomes the model

This observation highlights an important conceptual shift.

In linear regression, the mathematical model is explicitly defined by the researcher.

The learning algorithm only determines the values of a few parameters.

For neural networks, the situation is slightly different.

The researcher first chooses an **architecture**:

- the number of layers,
- the number of neurons in each layer,
- and the connections between them.

This architecture defines the mathematical model.

Training then determines the millions of parameters that specify how information flows through this architecture.

One can therefore distinguish between two separate design decisions.

First, the researcher chooses the **structure** of the model.

Second, the learning algorithm determines the **parameter values** within this structure.

Both choices influence the final predictive performance.

---

## Building increasingly expressive models

The previous chapters introduced several different model architectures.

Linear regression represents observations using a straight line.

Logistic regression transforms this line into probabilities.

Decision trees describe predictions through sequences of decision rules.

Artificial neural networks follow yet another strategy.

Rather than relying on a single equation or a collection of decision rules, they combine many simple computational units into large interconnected networks.

Remarkably, each individual computational unit is mathematically very simple.

The extraordinary expressive power of neural networks emerges not from the complexity of individual neurons, but from the way thousands or millions of these simple units interact.

Understanding this basic building block—the artificial neuron—is therefore the natural next step.

---

### Conceptual Summary

Artificial neural networks are trained using exactly the same optimization principles introduced in earlier chapters. Like all supervised learning models, they repeatedly generate predictions, compare them with experimental observations, calculate a loss, and adjust their parameters using gradient descent. The key difference lies not in the optimization algorithm but in the enormous number of parameters that must be learned. Before training begins, the researcher selects an appropriate network architecture, while the learning algorithm determines the parameter values that allow this architecture to solve the biological prediction problem.

---

### Self-Check Questions

1. What aspects of neural network training are identical to the supervised learning methods introduced in previous chapters?
2. Why does gradient descent become particularly important for neural networks?
3. Why can the parameters of a simple linear regression often be determined analytically, whereas neural networks require iterative optimization?
4. Describe the training cycle of a neural network.
5. What is the difference between choosing a network architecture and training a network?
6. Why can the same neural network architecture be adapted to both regression and classification tasks?
7. Why does the predictive power of neural networks emerge from the interaction of many simple computational units rather than from the complexity of individual neurons?