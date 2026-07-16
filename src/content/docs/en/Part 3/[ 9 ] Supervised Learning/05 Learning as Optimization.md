---
title: "9.5 Learning as Optimization"
sidebar:
  label: "9.5 Learning as Optimization"
  order: 5
  group: "Part 3"
  part: "Part 3"
---

# 9.5 Learning as Optimization

## What does it actually mean to learn?

The term *learning* is used throughout machine learning, yet its meaning is often surprisingly vague.

When we say that a model "learns," we do not mean that it acquires knowledge in the human sense. The model does not understand proteins, recognize biological mechanisms, or formulate scientific hypotheses.

Instead, learning has a very precise mathematical meaning.

> **Learning is the process of finding the model parameters that produce the best predictions.**

This statement may appear almost disappointingly simple, but it captures the essence of supervised learning.

In the previous section, we introduced the Mean Squared Error (MSE) as a quantitative measure of prediction quality. Every possible set of model parameters produces a different prediction and therefore a different prediction error.

Learning simply means identifying the parameters for which this error is as small as possible.

Thus, supervised learning is fundamentally an optimization problem.

---

## Separating the model from its parameters

To understand optimization, it is helpful to distinguish between two different components of every predictive model.

The first component is the **model structure**.

For linear regression, we decided that protein stability should be described by the equation

$$
\hat{y}=mx+c.
$$

This equation reflects our biological hypothesis that protein stability depends approximately linearly on hydrophobicity.

Importantly, the learning algorithm never changes this equation.

The model structure is chosen by the researcher before learning begins.

The second component consists of the **model parameters**.

In our regression model, these are

- the slope \(m\),
- and the intercept \(c\).

Unlike the model structure, these values are initially unknown.

Learning therefore consists of estimating these parameters from experimental observations.

This distinction is fundamental because it clarifies the respective roles of biology and machine learning.

Biology determines **which model should be used**.

Machine learning determines **which parameter values make this model agree best with the data**.

---

## Every parameter defines a different model

Imagine drawing many different regression lines through exactly the same dataset.

Some lines are nearly horizontal.

Others are very steep.

Some underestimate protein stability, whereas others systematically overestimate it.

Although all of these lines share the same mathematical form,

$$
\hat{y}=mx+c,
$$

they correspond to different parameter values.

Consequently, they represent different predictive models.

Each of these models produces

- different predictions,
- different residuals,
- and therefore a different Mean Squared Error.

Instead of asking

> "Which regression line looks best?"

we can now ask a much more precise mathematical question:

> **Which parameter values minimize the prediction error?**

This reformulation is one of the key conceptual steps in machine learning.

The problem is no longer geometric.

It has become an optimization problem.

---

## From parameter space to loss space

A useful way to visualize this optimization problem is to stop looking at the biological data altogether.

Instead of plotting

- hydrophobicity on one axis,
- and protein stability on the other,

we construct an entirely different graph.

The horizontal axis now represents the model parameter—for example, the slope \(m\).

The vertical axis represents the Mean Squared Error produced by that parameter.

Every possible value of \(m\) therefore corresponds to one point in this new graph.

For small slopes, the regression line fits the data poorly, and the prediction error is large.

As the slope approaches its optimal value, the Mean Squared Error decreases.

If the slope becomes too large, the regression line again deviates from the observations, causing the prediction error to increase once more.

The result is a smooth, bowl-shaped curve.

This curve is no longer a description of biology.

Instead, it is a description of the **quality of our model**.

For this reason, it is often called the **loss landscape** or **objective function**.

---

## The optimization objective

Once the loss landscape has been constructed, the learning problem becomes remarkably simple.

Rather than searching through infinitely many possible regression lines, we now search for one particular point:

the minimum of the loss function.

Mathematically,

$$
\underset{m}{\operatorname{argmin}}
\;
\mathrm{MSE}(m).
$$

This notation simply means:

> **Find the parameter value \(m\) for which the Mean Squared Error is smallest.**

Everything we have discussed so far naturally leads to this objective.

The regression model defines how predictions are made.

The Mean Squared Error quantifies prediction quality.

Optimization identifies the parameter values that minimize this error.

This sequence of ideas is so general that it applies to nearly every supervised learning algorithm.

Regardless of whether the model is

- linear regression,
- logistic regression,
- a support vector machine,
- a random forest,
- or a deep neural network,

learning always involves minimizing a suitable loss function.

Only the mathematical form of the model changes.

The optimization principle remains the same.

---

## Why optimization is such a powerful idea

The reformulation of learning as optimization has consequences that extend far beyond regression.

It allows us to separate two fundamentally different scientific questions.

The first question is biological:

> **How should we describe the system?**

This determines the choice of features and the structure of the model.

The second question is computational:

> **Given this model, how can we estimate its parameters most efficiently?**

Because these questions are separated, the same optimization algorithms can be applied to many completely different biological problems.

The algorithm does not need to know whether it is predicting

- protein stability,
- enzyme activity,
- disease risk,
- gene expression,
- or species abundance.

It only needs

- a model,
- a loss function,
- and data.

This remarkable generality explains why optimization has become one of the unifying concepts of modern machine learning.

---

## Why we need a numerical optimization algorithm

At this point, one might ask an obvious question.

If the loss function is simply a mathematical equation, why not differentiate it, set the derivative equal to zero, and calculate the optimal parameter directly?

For our simple regression model, this is indeed possible.

Linear regression has a closed-form analytical solution that can be obtained using standard methods from calculus.

However, this solution relies on the simplicity of the model.

Modern machine learning models often contain millions—or even billions—of parameters.

For such models, analytical solutions no longer exist.

Instead, we require a numerical optimization algorithm that gradually improves the parameters until the loss can no longer be reduced.

This algorithm is **gradient descent**.

Although we will first introduce it using the simple regression model developed in this chapter, it is precisely the same algorithmic principle that enables the training of modern deep neural networks.

The difference lies not in the learning mechanism itself, but only in the number of parameters being optimized.

---

### Learning Goals

After completing this section, you should be able to

- explain what "learning" means in mathematical terms,
- distinguish between a model structure and its parameters,
- understand why every parameter choice corresponds to a different predictive model,
- interpret the loss landscape as a function of the model parameters,
- explain why supervised learning can be formulated as an optimization problem.

### Conceptual Summary

Learning in supervised machine learning does not mean discovering biological knowledge autonomously. Instead, it means estimating the parameters of a predefined mathematical model so that its predictions agree as closely as possible with experimental observations. The Mean Squared Error transforms prediction quality into a numerical objective, allowing learning to be formulated as the problem of minimizing a loss function. This optimization perspective is one of the central ideas underlying virtually all modern machine learning algorithms.

### Self-Check Questions

1. What does the term *learning* mean in supervised machine learning?
2. What is the difference between the structure of a model and its parameters?
3. Why does every choice of model parameters correspond to a different predictive model?
4. What information is represented by the loss landscape?
5. Why can supervised learning be formulated as an optimization problem?
6. Why are analytical solutions insufficient for training modern neural networks?