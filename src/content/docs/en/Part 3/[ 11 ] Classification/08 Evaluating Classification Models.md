---
title: "11.8 Evaluating Classification Models"
sidebar:
  label: "11.8 Evaluating Classification Models"
  order: 8
  group: "Part 3"
  part: "Part 3"
---

# 11.8 Evaluating Classification Models

## When is a classifier "good"?

After constructing a classification model, an obvious question arises:

> **How can we determine whether the classifier performs well?**

For regression models, the answer was relatively straightforward.

Because the predictions were continuous numerical values, we could compare the predicted and observed values directly and calculate measures such as the **Mean Squared Error (MSE)**.

Classification problems are fundamentally different.

The prediction is no longer a continuous number but a class label.

A classifier predicting whether a mushroom is *edible* or *poisonous* cannot be evaluated by measuring the numerical distance between the prediction and the true class.

Instead, we must ask a much simpler question:

> **Was the prediction correct or incorrect?**

Although this seems straightforward, evaluating classification models turns out to be surprisingly subtle.

Different types of prediction errors often have very different biological consequences.

---

## The confusion matrix

The foundation of classification evaluation is the **confusion matrix**.

For a binary classification problem, every prediction belongs to one of four possible categories.

Suppose we wish to predict whether a patient has a particular disease.

Each prediction can be classified as follows:

| Actual class | Predicted positive | Predicted negative |
|--------------|-------------------|-------------------|
| **Positive** | True Positive (TP) | False Negative (FN) |
| **Negative** | False Positive (FP) | True Negative (TN) |

Each entry has a clear biological interpretation.

- A **True Positive** is a diseased patient who is correctly identified.
- A **True Negative** is a healthy patient who is correctly classified.
- A **False Positive** is a healthy patient who is incorrectly diagnosed as diseased.
- A **False Negative** is a diseased patient who is mistakenly classified as healthy.

The confusion matrix therefore summarizes not only how often a classifier is correct, but also **what kinds of mistakes it makes**.

This distinction is often far more important than the overall number of correct predictions.

---

## Accuracy: the simplest performance measure

The most intuitive measure of classification performance is **accuracy**.

Accuracy simply describes the proportion of correctly classified observations,

$$
\text{Accuracy}
=
\frac{TP+TN}{TP+TN+FP+FN}.
$$

If a classifier correctly predicts 95 out of 100 observations, its accuracy is 95%.

Accuracy is easy to understand and widely reported.

However, it has an important weakness.

It assumes that all prediction errors are equally important.

In biology and medicine, this assumption is often unrealistic.

Missing a patient with cancer is usually much more serious than mistakenly referring a healthy patient for further examination.

Similarly, failing to detect a toxic compound may have far greater consequences than incorrectly classifying a harmless compound as potentially dangerous.

To evaluate classification models properly, we therefore need measures that distinguish between different types of prediction errors.

---

## Precision and recall

Two of the most widely used performance measures are **precision** and **recall**.

Although they are closely related, they answer different biological questions.

### Precision

Precision asks:

> **If the classifier predicts a positive result, how often is it correct?**

It is defined as

$$
\text{Precision}
=
\frac{TP}{TP+FP}.
$$

High precision means that positive predictions are highly reliable.

For example, if a classifier predicts that a genetic variant is pathogenic, high precision indicates that this prediction is usually correct.

Precision is particularly important when false positives are expensive or difficult to verify experimentally.

---

### Recall

Recall asks a different question:

> **How many of the truly positive observations were successfully detected?**

It is defined as

$$
\text{Recall}
=
\frac{TP}{TP+FN}.
$$

High recall means that only few positive observations are missed.

In medical diagnostics, recall is often critical.

A screening test should ideally detect every patient with the disease, even if this means that some healthy individuals are examined further.

Recall is therefore especially important whenever false negatives carry severe consequences.

---

## The trade-off between precision and recall

In many applications, improving precision reduces recall, and vice versa.

Suppose we classify proteins as belonging either to the chloroplast or to the mitochondrion.

If we require extremely strong evidence before predicting "chloroplast," the resulting predictions will be highly reliable.

Precision will be high.

However, many true chloroplast proteins may now remain unclassified or be assigned to the wrong class.

Recall decreases.

Alternatively, we could lower the decision threshold and classify many more proteins as chloroplast proteins.

Recall increases because fewer true chloroplast proteins are missed.

At the same time, more mitochondrial proteins may now be classified incorrectly.

Precision decreases.

This illustrates an important principle.

There is often **no universally optimal performance measure**.

The appropriate balance depends on the biological question.

---

## The F1-score

When both precision and recall are important, they are often combined into a single measure called the **F1-score**.

The F1-score is defined as the harmonic mean of precision and recall,

$$
F_1
=
2
\cdot
\frac{\text{Precision}\times\text{Recall}}
{\text{Precision}+\text{Recall}}.
$$

Unlike the arithmetic mean, the harmonic mean becomes small whenever either precision or recall is poor.

Consequently, a high F1-score can only be achieved when both measures are simultaneously high.

The F1-score therefore provides a balanced summary of classification performance and has become one of the most widely reported evaluation measures in machine learning.

---

## Why accuracy can be misleading

The limitations of accuracy become particularly apparent when analyzing **imbalanced datasets**.

Imagine developing a classifier to detect a rare genetic disease.

Suppose only 1% of the patients actually have the disease.

Now consider an extremely naive classifier.

Instead of analyzing any biological information, it simply predicts

> **Healthy**

for every patient.

Such a classifier would achieve an accuracy of 99%.

At first glance, this appears excellent.

In reality, however, the classifier has failed completely.

It has not identified a single diseased patient.

The problem is that accuracy is dominated by the large number of healthy individuals.

The rare but biologically important positive cases contribute very little to the overall score.

Measures such as precision, recall, and the F1-score reveal this weakness immediately.

They therefore provide much more informative evaluations for many biological applications.

---

## Choosing the appropriate evaluation metric

No single evaluation measure is optimal for every classification problem.

Instead, the appropriate metric depends on the scientific question being addressed.

If false positives are particularly costly, precision should receive greater emphasis.

If missing positive observations is unacceptable, recall becomes more important.

When both objectives are equally important, the F1-score often provides a useful compromise.

Understanding these trade-offs is essential for interpreting published machine learning studies.

Two classifiers with identical accuracy may behave very differently depending on how they balance false positives and false negatives.

Consequently, responsible machine learning requires reporting several complementary evaluation measures rather than relying on a single summary statistic.

---

### Key Concepts

- Classification performance is evaluated using the **confusion matrix**.
- The confusion matrix distinguishes between true positives, true negatives, false positives, and false negatives.
- **Accuracy** measures the proportion of correctly classified observations.
- **Precision** measures the reliability of positive predictions.
- **Recall** measures the ability to detect positive observations.
- The **F1-score** combines precision and recall into a single performance measure.
- Accuracy alone can be misleading for imbalanced biological datasets.

---

### Summary

Evaluating classification models requires more than simply counting correct predictions. The confusion matrix provides a detailed description of the different types of classification errors, allowing measures such as accuracy, precision, recall, and the F1-score to be calculated. Each metric emphasizes different aspects of predictive performance and is appropriate for different biological applications. Choosing the correct evaluation measure is therefore an essential part of developing and interpreting classification models.

---

### Self-Check Questions

1. Why is the Mean Squared Error unsuitable for evaluating classification models?
2. What information is contained in a confusion matrix?
3. What is the difference between a false positive and a false negative?
4. How is accuracy calculated?
5. Why can accuracy be misleading for highly imbalanced datasets?
6. What biological question does precision answer?
7. What biological question does recall answer?
8. Why is there often a trade-off between precision and recall?
9. Why is the F1-score frequently reported in machine learning studies?
10. Which evaluation measure would you prioritize for a disease screening test? Which would you prioritize for confirming a diagnosis? Explain your reasoning.