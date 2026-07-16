---
title: "11.7 Controlling Model Complexity in Decision Trees"
sidebar:
  label: "11.7 Controlling Model Complexity in Decision Trees"
  order: 7
  group: "Part 3"
  part: "Part 3"
---

# 11.7 Controlling Model Complexity in Decision Trees

## When does a decision tree become too complex?

Decision trees are remarkably flexible models.

By repeatedly partitioning the feature space, they can approximate highly complex decision boundaries and often achieve excellent performance on the training data.

However, this flexibility comes at a price.

As we learned in Chapter 10, increasing model complexity eventually leads to overfitting. Decision trees are no exception.

Suppose we continue splitting the training data until every leaf node contains only a single observation.

The resulting tree classifies the training data perfectly.

Every mushroom, every protein, or every patient is assigned to the correct class.

At first glance, this appears to be an ideal classifier.

In reality, however, such a tree has simply memorized the training data.

Many of the final branches describe accidental properties that are unique to the available dataset rather than general biological relationships.

When presented with new observations, prediction accuracy often decreases substantially.

A perfect decision tree is therefore not necessarily a good decision tree.

---

## Underfitting and overfitting revisited

Decision trees provide an excellent illustration of the concepts introduced in Chapter 10.

Imagine constructing three different trees for the same classification problem.

The first tree contains only a single decision.

Perhaps it asks only whether the mushroom has a pleasant odor.

Although this simple rule captures some biological information, many mushrooms remain incorrectly classified.

The tree is too simple to describe the underlying biological relationships.

This is an example of **underfitting**.

Now imagine a tree that continues growing until every training example occupies its own leaf node.

Such a tree classifies the training data perfectly.

However, many of its final decisions are based on random fluctuations that are unlikely to recur in future observations.

This tree represents **overfitting**.

Between these two extremes lies an intermediate tree that captures the essential biological patterns while ignoring random variation.

This intermediate level of complexity provides the best generalization to new data.

Thus, the bias–variance trade-off introduced in the previous chapter applies directly to decision trees.

---

## Tree depth determines model complexity

One of the simplest measures of the complexity of a decision tree is its **depth**.

The depth of a tree is the number of decisions that must be made before reaching a prediction.

A shallow tree consists of only a few decision levels.

Predictions are made quickly, and the resulting model is usually easy to interpret.

However, shallow trees may ignore important interactions between biological features.

Deep trees behave differently.

They can represent highly complicated decision boundaries because every additional level introduces new opportunities to partition the feature space.

The price for this flexibility is an increased risk of overfitting.

Small changes in the training data may produce entirely different branches near the bottom of the tree.

Deep trees therefore tend to exhibit high variance.

Selecting an appropriate tree depth is consequently one of the most important design decisions when constructing a decision tree.

---

## Pre-pruning: stopping tree growth early

One strategy for controlling model complexity is to prevent the tree from becoming unnecessarily deep.

This approach is known as **pre-pruning** or **early stopping**.

Instead of allowing unlimited tree growth, the learning algorithm stops splitting whenever predefined criteria are met.

Typical stopping criteria include

- reaching a maximum tree depth,
- requiring a minimum number of observations in each node,
- requiring a minimum information gain before a split is accepted,
- or stopping when all observations within a node belong to the same class.

These rules intentionally restrict the flexibility of the tree.

The resulting model may no longer classify every training observation perfectly, but it is often better able to generalize to previously unseen data.

In other words, a small increase in training error may produce a substantial improvement in prediction accuracy.

---

## Post-pruning: simplifying a fully grown tree

An alternative strategy is known as **post-pruning**.

Rather than restricting growth from the beginning, the algorithm first constructs a large tree that captures as much structure as possible.

Only afterwards are branches removed that contribute little to prediction performance.

This process resembles editing a manuscript.

The first draft contains many details.

During revision, unnecessary passages are removed, leaving only the essential content.

Similarly, post-pruning removes branches that explain only a few training examples or contribute little to generalization.

The resulting tree is usually

- smaller,
- easier to interpret,
- and more robust when applied to new observations.

Many modern decision tree algorithms employ sophisticated pruning strategies because they often produce better predictive performance than unrestricted tree growth.

---

## Choosing the optimal tree

How do we decide which version of the tree should ultimately be used?

As discussed in Chapter 10, the answer is **cross-validation**.

Several candidate trees with different levels of complexity are constructed.

Some are shallow, others are deep.

Their predictive performance is then evaluated on independent validation data.

The tree with the smallest validation error is selected.

Notice how the concepts developed throughout the previous chapters come together.

Entropy and information gain determine **how** the tree is constructed.

Cross-validation determines **how large** the tree should become.

Both components are necessary.

A decision tree that asks informative questions but grows without restraint may still generalize poorly.

Only by combining tree construction with careful model selection can we obtain reliable classifiers.

---

## Simplicity and interpretability

One of the greatest strengths of decision trees is that they often remain understandable even after optimization.

Unlike many other machine learning models, the final classifier can usually be visualized completely.

Researchers can inspect every decision, follow every prediction, and understand precisely why an observation was assigned to a particular class.

This interpretability makes decision trees particularly attractive in biology.

In many applications, understanding *why* a prediction was made is almost as important as the prediction itself.

For example, identifying the sequence features that distinguish chloroplast proteins from mitochondrial proteins may provide biological insight into protein targeting mechanisms.

Decision trees therefore serve not only as predictive models but also as tools for scientific discovery.

Nevertheless, interpretability alone is not sufficient.

If prediction accuracy becomes the primary objective, combining many decision trees often produces substantially better results.

This idea forms the basis of **ensemble learning**, which we will introduce in the next section.

---

### Key Concepts

- Decision trees become more flexible as their depth increases.
- Very shallow trees tend to underfit, whereas very deep trees often overfit.
- **Pre-pruning** limits tree growth during construction.
- **Post-pruning** simplifies an already constructed tree.
- Cross-validation is used to determine the appropriate tree complexity.
- Decision trees remain highly interpretable even after optimization.

---

### Summary

The complexity of a decision tree is largely determined by its depth. While deeper trees can represent increasingly complex biological relationships, they also become more susceptible to overfitting. Modern decision tree algorithms therefore employ stopping criteria and pruning strategies to balance flexibility with generalization. Cross-validation provides a practical method for selecting the appropriate tree complexity, while the inherent interpretability of decision trees makes them valuable tools for both prediction and biological hypothesis generation.

---

### Self-Check Questions

1. Why can a perfectly fitted decision tree still perform poorly on new data?
2. How does tree depth influence the complexity of a decision tree?
3. What is the difference between pre-pruning and post-pruning?
4. Why can pruning improve prediction accuracy?
5. How is cross-validation used when constructing decision trees?
6. Why are decision trees often considered more interpretable than many other machine learning models?
7. Why can interpretability be particularly valuable in biological research?