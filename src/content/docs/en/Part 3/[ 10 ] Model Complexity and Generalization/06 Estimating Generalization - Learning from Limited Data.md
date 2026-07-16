---
title: "10.6 Estimating Generalization: Learning from Limited Data"
sidebar:
  label: "10.6 Estimating Generalization: Learning from Limited Data"
  order: 6
  group: "Part 3"
  part: "Part 3"
---

# 10.6 Estimating Generalization: Learning from Limited Data

## The fundamental dilemma of machine learning

By now, we have established that the ultimate goal of supervised learning is not to fit the available data perfectly, but to make reliable predictions for **new biological observations**.

This immediately creates a fundamental dilemma.

To evaluate a predictive model, we would ideally like to test it on data that it has never seen before. However, when developing the model, these future observations do not yet exist.

How, then, can we estimate whether a model will generalize successfully?

This question is one of the central challenges of machine learning.

Unlike many mathematical problems, there is no exact answer. Instead, we must estimate future performance using the limited experimental data that are currently available.

The methods developed for this purpose form the foundation of modern model evaluation.

---

## Why training performance is misleading

Suppose we have measured the stability of one thousand proteins and use these data to train a predictive model.

After optimization, the model predicts every protein remarkably well.

Should we conclude that we have developed an excellent predictor?

Unfortunately, no.

The model has already been exposed to every observation during training. It has adjusted its parameters specifically to explain these proteins as accurately as possible.

Evaluating the model on exactly the same observations therefore measures something quite different from generalization.

It answers the question

> **How well has the model learned the training data?**

What we actually wish to know is

> **How well will the model predict proteins that have never been measured before?**

These are fundamentally different questions.

A model may perform almost perfectly on the training data while failing completely when confronted with new observations.

Training performance therefore provides only a limited measure of model quality.

---

## Separating learning from evaluation

A simple solution is to reserve part of the available data exclusively for evaluation.

The dataset is divided into two independent subsets.

The **training set** is used to estimate the model parameters.

The **test set** remains completely hidden during training.

Only after the model has been fully optimized are predictions generated for the test data.

Because these observations were never used during learning, the resulting prediction error provides a much more realistic estimate of the model's ability to generalize.

This simple idea illustrates an important principle:

> **A model should always be evaluated using observations that played no role in constructing it.**

Otherwise, we risk confusing memorization with genuine predictive ability.

---

## Training, validation, and testing

In practice, modern machine learning often distinguishes three different datasets rather than only two.

The **training set** is used to learn the parameters of the model.

The **validation set** is used to compare different models or different levels of model complexity. For example, it helps determine whether a linear regression model, a spline model, or a neural network provides the most appropriate description of the data.

Finally, the **test set** is used only once, after all model development has been completed, to obtain an unbiased estimate of the final prediction performance.

Each dataset therefore serves a different purpose.

| Dataset | Purpose |
|----------|---------|
| **Training set** | Learn the model parameters |
| **Validation set** | Select the model and tune its complexity |
| **Test set** | Estimate the final prediction accuracy |

Keeping these roles separate is essential.

If the test data influence model development, they are no longer truly independent, and the estimated prediction accuracy becomes overly optimistic.

---

## Cross-validation: making efficient use of limited data

For many biological applications, however, collecting large datasets is difficult.

Experiments may be expensive, time-consuming, or limited by the availability of biological material.

Setting aside a substantial fraction of the observations exclusively for testing may therefore seem wasteful.

Cross-validation provides an elegant solution.

Instead of defining one fixed training set and one fixed test set, the available observations are repeatedly divided into different subsets.

The most common approach is **k-fold cross-validation**.

The dataset is partitioned into \(k\) equally sized folds.

During each iteration,

- one fold serves as the validation set,
- while the remaining \(k-1\) folds are combined into the training set.

This procedure is repeated until every fold has served once as the validation set.

The prediction accuracy obtained in the individual iterations is then averaged.

Consequently, every observation contributes

- many times to model training,
- but also exactly once to model evaluation.

Cross-validation therefore makes much more efficient use of limited biological datasets while still providing an independent estimate of predictive performance.

---

## Selecting the appropriate model complexity

Cross-validation provides much more than an estimate of prediction accuracy.

It also allows us to determine the appropriate level of model complexity.

Suppose we compare several models of increasing flexibility.

A simple linear regression may underfit the data.

A highly flexible spline may overfit.

An intermediate model may provide the best compromise.

By performing cross-validation for every candidate model, we obtain an estimate of the prediction error expected for previously unseen observations.

The model with the smallest cross-validation error is generally expected to generalize best.

Notice how this connects directly to the ideas developed throughout this chapter.

Rather than choosing the model that fits the training data best, we choose the model that performs best on independent validation data.

Cross-validation therefore provides a practical solution to the bias–variance trade-off.

---

## The limits of cross-validation

Although cross-validation is one of the most powerful tools in machine learning, it is important to understand its limitations.

Cross-validation estimates how well a model is expected to perform on **future data drawn from the same underlying population**.

This assumption is often reasonable—but not always.

Imagine developing a model to predict protein localization using proteins from flowering plants.

Cross-validation may indicate excellent prediction accuracy.

However, the same model may perform substantially worse when applied to proteins from algae, fungi, or bacteria because these organisms differ biologically from the training data.

Similarly, a diagnostic model developed using data from one hospital may perform less accurately when applied to patients from another hospital, where different measurement protocols or patient populations exist.

Cross-validation cannot detect such differences.

It estimates generalization **within** the available dataset—not necessarily beyond it.

---

## Independent validation remains the gold standard

For this reason, the strongest evidence for a predictive model is successful validation using a completely independent dataset.

Ideally, this dataset

- originates from another laboratory,
- was collected using different experimental conditions,
- or represents a different biological population.

If the model performs well under these conditions, we gain much greater confidence that it has learned genuine biological principles rather than properties specific to one experiment.

Independent validation has therefore become the gold standard in computational biology.

Whether developing predictors of protein function, disease diagnosis, gene regulation, or protein structure, the ultimate test of a model is its ability to make accurate predictions beyond the data from which it was learned.

---

## Machine learning as scientific inference

This chapter began with a simple question:

> **How complex should a predictive model be?**

We have now arrived at the answer.

The best model is neither the simplest nor the most complicated.

Instead, it is the model that makes the most reliable predictions for observations that were not available during training.

Determining this model requires balancing flexibility against generalization and evaluating prediction performance using independent data.

Machine learning is therefore much more than an optimization procedure.

It is a framework for **scientific inference**.

Rather than asking whether a model explains existing observations, we ask whether it captures biological principles that remain valid beyond the experiments from which it was learned.

Only models that successfully generalize have the potential to contribute to biological understanding.

The next chapter extends these ideas to another important class of prediction problems. So far, we have assumed that the quantity to be predicted is continuous, such as protein stability or gene expression. Many biological questions, however, require assigning observations to discrete categories—for example, predicting a protein's subcellular localization or determining whether a genetic variant is pathogenic. These classification problems require different predictive models while relying on the same fundamental principles of learning and generalization.

---

### Key Concepts

- Generalization can only be estimated using observations that were not used during training.
- Training performance is usually an overly optimistic estimate of prediction accuracy.
- Training, validation, and test datasets serve different purposes during model development.
- k-fold cross-validation efficiently estimates predictive performance using limited data.
- Cross-validation provides a practical method for selecting model complexity.
- Cross-validation estimates generalization within the available data but cannot guarantee performance on fundamentally different biological systems.
- Independent external validation provides the strongest evidence for a predictive model.

---

### Summary

The central challenge of machine learning is not learning from existing data but predicting future observations. Because future data are unavailable during model development, prediction performance must be estimated using independent subsets of the available data. Cross-validation provides an efficient strategy for this purpose and has become one of the most important tools for model selection and evaluation. Nevertheless, the strongest demonstration of generalization remains successful validation on completely independent biological datasets. Ultimately, machine learning succeeds not by memorizing observations but by discovering biological relationships that remain valid beyond the experiments from which they were learned.

---

### Self-Check Questions

1. Why is training accuracy not a reliable estimate of predictive performance?
2. Why should the data used for evaluation remain independent of the training process?
3. What are the different roles of the training, validation, and test datasets?
4. How does k-fold cross-validation make efficient use of limited biological data?
5. Why can cross-validation be used to select an appropriate model complexity?
6. Under which circumstances can cross-validation overestimate predictive performance?
7. Why is external validation considered the gold standard for evaluating predictive models?
8. In your own words, explain why generalization is the defining characteristic of successful machine learning.