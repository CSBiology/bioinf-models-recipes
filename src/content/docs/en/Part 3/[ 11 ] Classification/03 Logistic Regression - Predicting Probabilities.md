---
title: "11.3 Logistic Regression: Predicting Probabilities"
sidebar:
  label: "11.3 Logistic Regression: Predicting Probabilities"
  order: 3
  group: "Part 3"
  part: "Part 3"
---

# 11.3 Logistic Regression: Predicting Probabilities

## Extending linear regression to classification

The simplest classification algorithm is closely related to a model that we already know well.

In Chapter 9, we introduced **linear regression**, where a biological property was predicted as a weighted combination of several input features,

$$
\hat{y}=w_1x_1+w_2x_2+\cdots+w_nx_n+b.
$$

This model works well when the quantity to be predicted is continuous, such as protein stability, enzyme activity, or gene expression.

Classification problems are different.

Instead of predicting a numerical value, we wish to assign each observation to one of several classes.

For example, suppose we wish to predict whether a protein is localized to the chloroplast or to the mitochondrion.

A linear regression model might produce predictions such as

$$
\hat{y}=2.3,\qquad
\hat{y}=-1.7,\qquad
\hat{y}=15.2.
$$

These numbers have no obvious biological interpretation.

What does a prediction of 15.2 mean?

Clearly, simply applying linear regression to a classification problem is not sufficient.

Instead of predicting arbitrary numerical values, we would prefer predictions that can be interpreted as **probabilities**.

---

## From scores to probabilities

Rather than asking

> **Which class should this protein belong to?**

we first ask

> **How likely is it that this protein belongs to a particular class?**

Probabilities have several advantages.

First, they are naturally constrained between 0 and 1.

Second, they provide information about the certainty of the prediction.

For example,

- a probability of 0.99 indicates a very confident prediction,
- whereas a probability of 0.52 indicates considerable uncertainty.

This distinction is often biologically important.

Two proteins may both be classified as chloroplast proteins, yet one prediction may be supported by overwhelming evidence while the other remains ambiguous.

Rather than producing only a class label, logistic regression therefore estimates the probability

$$
P(y=1|x),
$$

that an observation belongs to a particular class.

The final class prediction is then obtained by applying a decision threshold.

For binary classification, this threshold is often chosen as 0.5.

Predictions greater than 0.5 are assigned to one class, while predictions below 0.5 are assigned to the other.

---

## The sigmoid function

How can we transform the unrestricted output of a linear model into a valid probability?

The solution is surprisingly elegant.

Instead of using the linear prediction directly, we pass it through a nonlinear transformation called the **sigmoid function**.

The linear model first computes the score

$$
z
=
w_1x_1+w_2x_2+\cdots+w_nx_n+b.
$$

This score may assume any positive or negative value.

The sigmoid function then transforms this score into a probability,

$$
P(y=1|x)
=
\frac{1}{1+e^{-z}}.
$$

The sigmoid has several remarkable properties.

For very negative values of \(z\), the predicted probability approaches zero.

For very positive values, the probability approaches one.

Near the center of the curve, small changes in the input produce gradual changes in the predicted probability.

The result is a smooth transition between the two classes rather than an abrupt jump.

This smooth behavior greatly simplifies learning and provides meaningful confidence estimates for every prediction.

---

## A geometric interpretation

Although logistic regression predicts probabilities, its geometric interpretation is almost identical to that of linear regression.

The linear combination

$$
z=w_1x_1+\cdots+w_nx_n+b
$$

still defines a hyperplane in feature space.

This hyperplane represents the point at which the predicted probability equals 0.5.

In other words, it forms the **decision boundary** between the two classes.

Observations on one side of the boundary are predicted to belong predominantly to one class.

Observations on the opposite side belong to the other.

The sigmoid function simply converts the distance from this boundary into a probability.

Far from the boundary, predictions become increasingly confident.

Near the boundary, predictions become more uncertain.

This interpretation highlights an important idea.

Logistic regression does not merely classify observations.

It also estimates **how confidently** they can be classified.

---

## Learning the model

From the perspective of optimization, logistic regression closely resembles linear regression.

The model still contains adjustable parameters,

$$
w_1,w_2,\ldots,w_n,b,
$$

that must be estimated from labeled training data.

The difference lies in the loss function.

In regression, prediction quality was measured using the Mean Squared Error.

For classification, however, we compare predicted probabilities with the observed class labels.

This leads to a different loss function known as the **cross-entropy loss**, which we will introduce in more detail when discussing neural networks in Chapter 12.

Despite this change, the learning process remains familiar.

The parameters are adjusted iteratively using gradient descent until the prediction error can no longer be reduced.

Thus, logistic regression is not a fundamentally new learning algorithm.

It is a natural extension of linear regression from continuous outputs to probabilistic classification.

---

## Strengths and limitations

Logistic regression is one of the most widely used classification methods in biology and medicine.

It offers several important advantages.

It is mathematically simple, computationally efficient, and produces probabilities that are easy to interpret.

Furthermore, the model parameters often retain biological meaning, allowing researchers to estimate how strongly individual features influence the predicted outcome.

For these reasons, logistic regression is frequently used as a baseline classifier in bioinformatics.

However, logistic regression also has limitations.

Because the decision boundary is linear, it can separate only classes that are approximately linearly separable in feature space.

Many biological datasets exhibit much more complicated relationships.

Proteins with different localizations, for example, may occupy irregularly shaped regions that cannot be separated by a single straight line.

To model such situations, we require more flexible classification methods.

One of the most intuitive approaches is the **decision tree**, which constructs the decision boundary by recursively partitioning the feature space into smaller and smaller regions.

---

### Key Concepts

- Logistic regression extends linear regression to classification.
- Instead of predicting continuous values, logistic regression predicts class probabilities.
- The sigmoid function transforms arbitrary numerical scores into probabilities between 0 and 1.
- The decision boundary corresponds to a predicted probability of 0.5.
- Logistic regression remains a linear classifier and is therefore most suitable for approximately linearly separable data.

---

### Summary

Logistic regression provides the simplest probabilistic classifier and forms a natural bridge between regression and classification. By combining a linear model with the sigmoid function, it transforms numerical prediction scores into probabilities that can be interpreted biologically. Although its decision boundary remains linear, logistic regression provides an elegant and highly interpretable framework for many classification problems. More complex biological relationships, however, often require classifiers with more flexible decision boundaries.

---

### Self-Check Questions

1. Why can linear regression not be used directly for classification?
2. Why is it advantageous to predict probabilities rather than only class labels?
3. What role does the sigmoid function play in logistic regression?
4. What is the geometric interpretation of the decision boundary?
5. How is logistic regression related to linear regression?
6. Under which circumstances is logistic regression likely to perform poorly?