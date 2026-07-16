---
title: "10.4 Underfitting and Overfitting"
sidebar:
  label: "10.4 Underfitting and Overfitting"
  order: 4
  group: "Part 3"
  part: "Part 3"
---

# 10.4 Underfitting and Overfitting

## When simple models fail

We have seen that increasing model flexibility allows increasingly complex biological relationships to be represented. But how can we recognize whether a model is too simple or too complex?

To answer this question, imagine fitting several different models to the same dataset.

The first model is a simple straight line.

Although it captures the overall trend, it systematically misses many observations. The prediction errors remain large because the model is unable to represent the true biological relationship.

This situation is known as **underfitting**.

An underfitted model is simply not flexible enough to describe the underlying process.

In our protein stability example, a linear model may ignore important nonlinear effects such as cooperative interactions between amino acids or changes in protein dynamics. Consequently, the model performs poorly not only on new data but also on the training data itself.

Underfitting therefore indicates that the model is **too simple**.

---

## When flexible models become too flexible

Now consider the opposite extreme.

Suppose we continue increasing the flexibility of the model by adding more and more basis functions.

Initially, this improves the fit considerably. The model captures subtle biological trends that were previously overlooked.

Eventually, however, the model begins to follow every individual observation.

Instead of describing the general relationship between hydrophobicity and stability, it bends around every experimental data point.

The prediction error on the training data becomes almost zero.

At first glance, this appears ideal.

After all, the model now explains every observation perfectly.

However, much of this apparent improvement comes from fitting random fluctuations rather than genuine biological mechanisms.

The model has become so flexible that it adapts itself to experimental noise and natural biological variability.

This phenomenon is known as **overfitting**.

An overfitted model has learned the training data exceptionally well—but has learned the underlying biology rather poorly.

---

## Training performance versus prediction performance

The distinction between underfitting and overfitting becomes much clearer when we compare two different types of prediction error.

The **training error** measures how accurately the model predicts the observations that were used to construct it.

The **test error** measures how accurately the same model predicts completely new observations that were not available during training.

These two quantities behave very differently as model complexity increases.

The training error almost always decreases.

A more flexible model has greater freedom to adapt itself to the available observations and therefore fits the training data increasingly well.

The test error behaves differently.

Initially, increasing flexibility improves prediction accuracy because the model captures more of the true biological relationship.

Beyond a certain point, however, additional flexibility causes the model to fit random noise instead of general biological principles.

The prediction error on new observations therefore begins to increase again.

This produces one of the most characteristic curves in machine learning.

As model complexity increases,

- the training error decreases continuously,
- whereas the test error first decreases, reaches a minimum, and then increases again.

The lowest point of the test-error curve corresponds precisely to the **sweet spot** introduced in the previous section.

This is the model that generalizes best to unseen biological data.

---

## Underfitting and overfitting in biology

The concepts of underfitting and overfitting occur throughout computational biology.

Suppose we wish to predict whether a protein is thermostable.

An underfitted model might use only a single feature such as molecular weight.

Although molecular weight is easy to measure, it contains little information about protein stability. The resulting model performs poorly because it ignores most of the relevant biology.

An overfitted model lies at the opposite extreme.

Imagine constructing a highly flexible model using thousands of sequence-derived features and training it on only a few hundred proteins.

Such a model may discover many apparent relationships within the training data.

However, many of these relationships are merely coincidences that arise because the dataset is small.

When applied to newly measured proteins, prediction accuracy often drops dramatically.

Neither model is scientifically useful.

The first ignores important biological mechanisms.

The second mistakes random variation for biological knowledge.

The most useful predictive model lies between these two extremes.

---

## Generalization is the real objective

The concepts of underfitting and overfitting fundamentally change how we think about machine learning.

The goal is not to maximize performance on the training data.

Nor is it to construct the most sophisticated mathematical model.

Instead, the objective is to identify a model that captures the underlying biological process well enough to make reliable predictions for future experiments.

This ability to transfer knowledge from one dataset to another is the defining characteristic of successful machine learning.

Generalization—not memorization—is therefore the true measure of model quality.

The practical challenge, however, remains.

How can we estimate whether a model will generalize well if future observations have not yet been collected?

The answer is to simulate future predictions by withholding part of the available data during training.

This idea forms the basis of **cross-validation**, which we will introduce later in this chapter.

---

## Bias and variance: another view of the same problem

Underfitting and overfitting can also be understood from another perspective.

A model that is too simple makes systematic prediction errors because it cannot adequately describe the underlying biological relationship.

A model that is too complex behaves differently.

Its predictions become highly sensitive to the particular training data that happened to be collected.

These two sources of prediction error are known as **bias** and **variance**.

Understanding how they interact provides one of the most influential conceptual frameworks in machine learning.

In the next section, we will examine this relationship in more detail and see why every predictive model must balance these two competing sources of error.

---

### Key Concepts

- **Underfitting** occurs when a model is too simple to capture the underlying biological relationship.
- **Overfitting** occurs when a model becomes so flexible that it begins fitting random fluctuations in the training data.
- Training error generally decreases as model complexity increases.
- Test error typically follows a U-shaped curve with a minimum at intermediate model complexity.
- The best predictive model is the one that minimizes the error on unseen data rather than the training data.

---

### Summary

Model complexity has opposite effects on training and prediction performance. Simple models often underfit because they fail to capture important biological relationships, whereas highly flexible models overfit by learning random noise in the training data. Successful machine learning therefore seeks a balance between these extremes. The optimal model is not the one with the smallest training error, but the one that generalizes most accurately to new biological observations.

---

### Self-Check Questions

1. What is underfitting, and why does it occur?
2. What is overfitting, and why can it reduce prediction accuracy?
3. Why does the training error almost always decrease as model complexity increases?
4. Why does the test error eventually begin to increase?
5. Why is test error a better measure of model quality than training error?
6. Give an example of underfitting and overfitting in a biological prediction problem.
7. Why is generalization considered the primary objective of supervised learning?