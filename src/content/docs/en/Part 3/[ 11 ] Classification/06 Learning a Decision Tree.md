---
title: "11.6 Learning a Decision Tree"
sidebar:
  label: "11.6 Learning a Decision Tree"
  order: 6
  group: "Part 3"
  part: "Part 3"
---

# 11.6 Learning a Decision Tree

## From the first split to the complete tree

In the previous section, we introduced entropy and information gain as quantitative measures for evaluating candidate splits.

The central idea was simple:

> **At every step, choose the feature that reduces uncertainty the most.**

This principle determines the first split of the tree.

But how is the remainder of the tree constructed?

The answer is surprisingly elegant.

After selecting the best first split, the algorithm simply repeats exactly the same procedure for each resulting subset of the data.

Decision trees are therefore built **recursively**.

The same learning rule is applied over and over again until no further useful splits can be found.

---

## The recursive learning process

Imagine once again the mushroom classification problem.

Initially, all mushrooms belong to a single dataset.

The algorithm calculates the information gain for every available feature and selects the one that produces the greatest reduction in entropy.

Suppose that odor provides the largest information gain.

The dataset is therefore divided into two subsets.

One branch contains mushrooms with a pleasant odor.

The other contains mushrooms with a foul odor.

At this point, the algorithm does not continue searching for another split in the original dataset.

Instead, each subset is now treated as an entirely new classification problem.

For the "pleasant odor" subset, the algorithm again evaluates every remaining feature.

Perhaps cap color now provides the greatest information gain.

The subset is split once more.

The same process is repeated independently for every branch of the tree.

Consequently, the decision tree grows one split at a time.

Each branch develops according to the observations that reach it.

Different branches may therefore ask completely different questions.

---

## Growing the tree

The recursive construction of a decision tree can be summarized in four simple steps.

1. **Calculate the entropy** of the current dataset.

2. **Evaluate every possible feature** and calculate the corresponding information gain.

3. **Split the dataset** using the feature with the largest information gain.

4. **Repeat the procedure** independently for every resulting subset.

This process continues until no further useful splits are possible.

Although the algorithm repeatedly performs only these four operations, remarkably complex decision trees can emerge.

The strength of the algorithm lies not in complicated mathematics but in the repeated application of a very simple decision rule.

---

## When should the algorithm stop?

If the algorithm continued splitting indefinitely, every leaf node would eventually contain only a single observation.

Such a tree would classify the training data perfectly.

Unfortunately, as we learned in Chapter 10, a model that perfectly explains the training data often generalizes poorly to new observations.

The decision tree therefore requires **stopping criteria**.

Common stopping conditions include:

- all observations within a node belong to the same class,
- no remaining feature provides useful information,
- the node contains too few observations,
- or a predefined maximum tree depth has been reached.

These criteria prevent the tree from becoming unnecessarily complex.

Rather than growing indefinitely, the algorithm stops once further splits are unlikely to improve prediction performance on unseen data.

---

## Tree depth and model complexity

The depth of a decision tree directly determines its complexity.

A shallow tree asks only a few questions before reaching a prediction.

Such a model is simple and easy to interpret.

However, it may fail to capture important biological relationships.

A very deep tree behaves differently.

It can represent highly complicated decision boundaries and often achieves almost perfect classification of the training data.

However, deep trees are also much more susceptible to overfitting.

They may begin memorizing peculiarities of the training dataset instead of learning general biological principles.

Decision trees therefore provide another illustration of the bias–variance trade-off introduced in Chapter 10.

- **Shallow trees** generally exhibit high bias but low variance.

- **Deep trees** exhibit low bias but high variance.

Choosing the appropriate tree depth is therefore one of the most important aspects of decision tree learning.

---

## Pruning: simplifying an overly complex tree

One strategy for controlling model complexity is **pruning**.

Instead of stopping the tree early, the algorithm is first allowed to grow a large tree that captures many details of the training data.

Afterwards, branches that contribute little to prediction accuracy are removed.

The resulting tree is smaller, easier to interpret, and often performs better on previously unseen observations.

Pruning reflects an important idea that extends far beyond decision trees.

Sometimes it is easier to begin with a highly flexible model and then simplify it than to determine the optimal level of complexity from the outset.

Modern machine learning uses similar ideas in many different contexts, including feature selection and neural network regularization.

---

## The ID3 algorithm

The learning strategy described above forms the basis of one of the earliest and most influential decision tree algorithms: **ID3 (Iterative Dichotomiser 3)**, developed by Ross Quinlan in the 1980s.

Although many more sophisticated tree-learning algorithms have since been developed, the central idea remains unchanged.

ID3 repeatedly performs the following steps:

1. Calculate the entropy of the current dataset.
2. Compute the information gain for every candidate feature.
3. Select the feature with the largest information gain.
4. Split the dataset accordingly.
5. Apply the same procedure recursively to every child node.

This remarkably simple recursive procedure constructs an entire decision tree from labeled training data.

Many modern algorithms, including C4.5, C5.0, and CART, build directly upon these same principles while introducing improvements in splitting criteria, pruning strategies, and handling of continuous variables.

---

## Learning by asking questions

Decision trees illustrate a fascinating perspective on machine learning.

Many predictive models attempt to approximate complex mathematical functions.

Decision trees, in contrast, learn by asking questions.

Every split corresponds to a new question whose answer reduces uncertainty about the biological class.

The sequence of questions gradually transforms uncertainty into knowledge.

Seen from this perspective, a decision tree behaves almost like a scientist.

Beginning with a collection of observations, it repeatedly asks

> **Which experiment—or in this case, which feature—would teach me the most?**

The tree grows by continuously selecting the question that provides the greatest reduction in uncertainty.

This connection between information theory and scientific reasoning explains why decision trees remain among the most intuitive and interpretable machine learning models available today.

---

### Key Concepts

- Decision trees are constructed recursively.
- Every node independently selects the feature with the highest information gain.
- Tree growth continues until predefined stopping criteria are reached.
- Tree depth determines model complexity.
- Pruning simplifies overly complex trees and improves generalization.
- The ID3 algorithm repeatedly applies entropy and information gain to construct the complete decision tree.

---

### Summary

Decision trees are built through a recursive learning process in which every node independently selects the feature that maximizes information gain. The repeated application of this simple principle gradually transforms a heterogeneous dataset into increasingly homogeneous subsets until final predictions can be assigned at the leaf nodes. Because unrestricted tree growth often leads to overfitting, stopping criteria and pruning strategies are used to control model complexity. The resulting models remain among the most interpretable classifiers in machine learning while illustrating many of the general principles introduced in the previous chapter.

---

### Self-Check Questions

1. Why are decision trees described as recursive learning algorithms?
2. What four steps are repeated during tree construction?
3. Why does each branch of the tree become an independent classification problem?
4. Why must a decision tree eventually stop growing?
5. How does tree depth influence model complexity?
6. What is pruning, and why can it improve predictive performance?
7. Which basic learning strategy is implemented by the ID3 algorithm?
8. In what sense can decision tree learning be interpreted as a process of repeatedly asking the most informative question?