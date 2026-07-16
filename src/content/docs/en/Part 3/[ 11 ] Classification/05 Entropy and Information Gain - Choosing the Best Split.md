---
title: "11.5 Entropy and Information Gain: Choosing the Best Split"
sidebar:
  label: "11.5 Entropy and Information Gain: Choosing the Best Split"
  order: 5
  group: "Part 3"
  part: "Part 3"
---

# 11.5 Entropy and Information Gain: Choosing the Best Split

## Not all questions are equally informative

In the previous section, we learned that a decision tree is built by repeatedly asking questions that partition the data into increasingly homogeneous groups.

However, one fundamental question remains unanswered.

Suppose our mushroom dataset contains dozens of possible features:

- odor,
- cap color,
- stem shape,
- habitat,
- bruising,
- spore color,
- and many others.

Which feature should be used for the very first split?

At first glance, several choices may appear reasonable.

Some features separate the mushrooms quite well, while others produce only a weak distinction between edible and poisonous species.

Clearly, the learning algorithm needs an objective criterion for deciding which question is best.

Rather than relying on biological intuition, it requires a mathematical measure of **how informative a split is**.

This is the role of **entropy**.

---

## Pure and mixed groups

Before introducing entropy mathematically, it is useful to consider a few simple examples.

Imagine three different groups of mushrooms.

The first group contains only edible mushrooms.

The second group contains only poisonous mushrooms.

The third group contains an equal mixture of edible and poisonous mushrooms.

Intuitively, these groups differ in one important aspect.

The first two groups are completely **pure**.

As soon as we know that a mushroom belongs to one of these groups, its class is immediately determined.

No uncertainty remains.

The third group is fundamentally different.

Knowing that a mushroom belongs to this group tells us very little.

It could still belong to either class.

Our uncertainty remains maximal.

These examples illustrate the quantity that entropy is designed to measure.

> **Entropy quantifies the uncertainty associated with a collection of observations.**

Pure groups have low entropy.

Mixed groups have high entropy.

The objective of a decision tree is therefore straightforward:

> **Construct splits that transform mixed groups into increasingly pure groups.**

---

## Measuring uncertainty mathematically

To quantify uncertainty, we must consider the probability of observing each class.

Suppose that the proportion of edible mushrooms is

$$
p(\text{edible}),
$$

while the proportion of poisonous mushrooms is

$$
p(\text{poisonous}).
$$

The entropy of the dataset is then defined as

$$
H(S)
=
-\sum_i p_i \log_2 p_i,
$$

where

- \(S\) denotes the current dataset,
- \(p_i\) is the probability of observing class \(i\),
- and the sum extends over all possible classes.

Although the equation may initially appear abstract, its interpretation is remarkably intuitive.

Entropy measures how difficult it is to predict the class of a randomly selected observation.

If one class dominates the dataset, the prediction is relatively easy.

If all classes occur equally frequently, prediction becomes much more uncertain.

Entropy therefore provides a numerical measure of class purity.

---

## Understanding entropy through examples

The meaning of entropy becomes much clearer when we consider a few simple cases.

### A completely pure group

Suppose every mushroom in the dataset is edible.

The class probabilities are therefore

$$
p(\text{edible})=1,
\qquad
p(\text{poisonous})=0.
$$

There is no uncertainty whatsoever.

Every mushroom belongs to the same class.

Consequently,

$$
H=0.
$$

This is the smallest possible entropy.

The group is perfectly pure.

---

### A completely mixed group

Now consider a dataset in which half of the mushrooms are edible and half are poisonous.

The probabilities become

$$
p(\text{edible})
=
0.5,
\qquad
p(\text{poisonous})
=
0.5.
$$

Now, before observing the class label, both outcomes are equally likely.

Our uncertainty is maximal.

The entropy therefore reaches its largest possible value.

This corresponds to the situation in which classification is most difficult.

---

### Intermediate cases

Most biological datasets lie somewhere between these two extremes.

Perhaps

- 80% of the mushrooms are edible,
- while 20% are poisonous.

The uncertainty is now reduced.

Although mistakes remain possible, guessing "edible" will usually be correct.

Accordingly, the entropy is lower than in the perfectly balanced dataset, but higher than in a completely pure group.

Entropy therefore changes smoothly between complete certainty and maximum uncertainty.

This behavior makes it an ideal measure for evaluating candidate splits during tree construction.

---

## A good split reduces entropy

Suppose we split our mushroom dataset according to odor.

Before the split, the dataset contains a mixture of edible and poisonous mushrooms.

After the split, one branch contains almost exclusively poisonous mushrooms, while the other contains predominantly edible mushrooms.

Both branches are considerably purer than the original dataset.

Consequently, their entropies are lower.

The split has therefore reduced the uncertainty about the class of each mushroom.

By contrast, imagine splitting the dataset according to a feature that is unrelated to toxicity.

Both resulting groups would still contain approximately the same mixture of edible and poisonous mushrooms.

Their entropy would remain almost unchanged.

Such a split provides little useful information.

This observation leads directly to the central idea behind decision tree learning.

A good split is one that reduces entropy as much as possible.

The reduction in entropy achieved by a split is called its **information gain**.

---

## Information gain

Information gain measures how much uncertainty is removed by partitioning the dataset.

It is defined as

$$
\text{Information Gain}
=
H(S)
-
H(S \mid A),
$$

where

- \(H(S)\) is the entropy before the split,
- and \(H(S \mid A)\) is the remaining entropy after splitting according to feature \(A\).

Information gain therefore answers a very intuitive question:

> **How much have we learned by asking this question?**

If a split produces two highly pure groups, the remaining entropy is small, and the information gain is large.

If the split changes almost nothing, the remaining entropy remains high, and the information gain is small.

The optimal split is therefore simply the one with the **largest information gain**.

This remarkably simple principle allows the decision tree to decide automatically which biological feature should be examined next.

---

## Learning by reducing uncertainty

Information gain reveals an important connection between machine learning and information theory.

A decision tree does not merely partition the data.

Instead, it repeatedly asks the question that is expected to reduce uncertainty the most.

Every split makes the remaining prediction problem simpler.

As the tree grows, uncertainty decreases step by step until each leaf node contains observations that belong almost exclusively to a single biological class.

The tree therefore learns by continuously reducing uncertainty.

This perspective provides a deeper interpretation of decision trees.

Rather than viewing them simply as collections of rules, we can understand them as algorithms that progressively extract information from biological data.

Every decision contributes to answering the same fundamental question:

> **Which feature tells us the most about the biological class we wish to predict?**

---

### Key Concepts

- Entropy measures the uncertainty or impurity of a collection of observations.
- Pure groups have low entropy, while mixed groups have high entropy.
- Decision trees seek splits that reduce entropy.
- Information gain quantifies the reduction in uncertainty achieved by a split.
- The feature with the largest information gain is selected at each node of the tree.

---

### Summary

Decision trees require an objective criterion for deciding which feature should be used at each split. Entropy provides a mathematical measure of class uncertainty, while information gain measures how much this uncertainty is reduced by partitioning the data. By repeatedly selecting the feature with the highest information gain, a decision tree gradually transforms heterogeneous datasets into increasingly homogeneous groups, ultimately producing accurate and interpretable classification rules.

---

### Self-Check Questions

1. What does entropy measure in the context of decision trees?
2. Why do pure groups have lower entropy than mixed groups?
3. When is entropy maximal?
4. What is meant by information gain?
5. Why does a good split produce a large information gain?
6. Why is information gain an appropriate criterion for constructing a decision tree?
7. How does repeatedly maximizing information gain lead to a complete decision tree?