---
title: "11.4 Decision Trees: Learning Through Sequential Decisions"
sidebar:
  label: "11.4 Decision Trees: Learning Through Sequential Decisions"
  order: 4
  group: "Part 3"
  part: "Part 3"
---

# 11.4 Decision Trees: Learning Through Sequential Decisions

## A different way of thinking about classification

Logistic regression approaches classification by constructing a mathematical function that separates different classes in feature space. Although this approach is elegant and computationally efficient, it assumes that the classes can be separated by a relatively simple decision boundary.

Many biological problems, however, are better understood not through equations but through a sequence of simple decisions.

Consider how an experienced field biologist identifies an unknown plant.

Rather than evaluating a mathematical formula, the biologist asks a series of questions:

- Does the plant produce flowers?
- Are the leaves arranged alternately or oppositely?
- Does it have parallel or net-like venation?
- Is the stem woody or herbaceous?

Each answer narrows the range of possible species until only a single identification remains.

This process is naturally represented as a **decision tree**.

Instead of describing a complex mathematical relationship, the model repeatedly asks simple questions whose answers gradually reduce the uncertainty about the correct classification.

Decision trees therefore represent a fundamentally different philosophy of machine learning.

Rather than learning an equation, they learn a sequence of decision rules.

---

## Dividing the feature space step by step

Like every supervised learning algorithm, decision trees begin with a collection of labeled training examples.

Each observation is represented by a feature vector and assigned to one of several biological classes.

Initially, all observations are considered together.

The task of the learning algorithm is to find a feature that best separates the different classes.

Suppose we wish to classify mushrooms as either **edible** or **poisonous**.

The training data may contain features such as

- cap color,
- cap shape,
- odor,
- bruising,
- spore color,
- habitat,
- and stem characteristics.

The algorithm examines all available features and asks:

> **Which feature produces the best separation between edible and poisonous mushrooms?**

Perhaps odor provides the clearest distinction.

The first decision of the tree therefore becomes

> **Does the mushroom have a pleasant odor?**

This single question divides the dataset into two smaller subsets.

Each subset is then analyzed independently.

The same procedure is repeated until the observations within each group belong predominantly to a single class.

Thus, a decision tree is built **recursively**, with every decision creating increasingly homogeneous subsets of the original data.

---

## Every decision creates new branches

Each decision within the tree corresponds to a **node**.

The possible answers to the question form the **branches**, while the resulting subsets of observations become the child nodes.

As the algorithm proceeds, the tree gradually grows.

The root node contains the complete training dataset.

Every subsequent split divides one group into smaller, more homogeneous groups.

Eventually, the algorithm reaches nodes in which nearly all observations belong to the same biological class.

These terminal nodes are called **leaf nodes**.

Unlike the internal nodes, leaf nodes no longer ask questions.

Instead, they provide the final prediction.

For example,

> **Edible**

or

> **Poisonous**

A prediction for a previously unseen mushroom is obtained simply by following the appropriate branches through the tree until a leaf node is reached.

The classification therefore emerges from a sequence of transparent and easily interpretable decisions.

---

## An example: identifying poisonous mushrooms

To illustrate this process, consider a simplified mushroom classification problem.

Suppose the first split separates mushrooms according to odor.

Mushrooms with a foul odor are almost always poisonous.

Those with a pleasant odor require additional examination.

The next question might consider cap color.

Perhaps white mushrooms are then divided according to bruising, while brown mushrooms are separated according to spore color.

Each question further reduces the uncertainty.

Eventually, every path through the tree ends in a prediction.

A new mushroom is classified simply by answering the same sequence of questions.

For example,

- pleasant odor,
- white cap,
- bruises present,

may lead to the prediction

> **Edible**

whereas

- foul odor

immediately leads to

> **Poisonous**

Notice that no equations are evaluated.

The prediction consists entirely of following a sequence of biologically meaningful decisions.

This intuitive reasoning is one of the major strengths of decision trees.

---

## Decision trees are highly interpretable

One of the greatest advantages of decision trees is their interpretability.

Many machine learning algorithms behave like "black boxes."

Although they often produce highly accurate predictions, understanding *why* a particular prediction was made can be difficult.

Decision trees are fundamentally different.

Every prediction can be reconstructed by tracing the path from the root of the tree to the corresponding leaf.

Each decision along this path is explicit and easily understood.

This transparency is particularly valuable in biology and medicine.

Researchers often wish to understand not only the prediction itself but also the biological reasoning that led to it.

For example, a physician may be reluctant to trust a diagnostic model that predicts a disease without explaining its reasoning.

A decision tree naturally provides such an explanation.

It states exactly which features influenced the final prediction and in what order they were considered.

Consequently, decision trees are often used not only for prediction but also for generating biologically meaningful hypotheses.

---

## Building the optimal tree

At this point, an important question remains unanswered.

The mushroom dataset contains many different features.

Why should the algorithm split first on odor rather than cap color?

Why not use habitat?

Or stem length?

Clearly, not every decision produces an equally useful separation of the data.

Some questions divide the observations almost perfectly into edible and poisonous mushrooms.

Others provide very little information.

The central challenge in constructing a decision tree is therefore deciding **which question should be asked first**.

More generally,

> **How can we measure whether one split is better than another?**

Answering this question requires a quantitative measure of how "pure" a group of observations is.

In the next section, we introduce **entropy**, a mathematical measure of uncertainty, and show how it allows a decision tree to identify the most informative decision at every step of the learning process.

---

### Key Concepts

- Decision trees classify observations using a sequence of simple decision rules.
- Every internal node represents a question about one biological feature.
- Each split partitions the feature space into increasingly homogeneous subsets.
- Leaf nodes contain the final class predictions.
- Decision trees are highly interpretable because every prediction follows an explicit sequence of decisions.
- Constructing a decision tree requires determining which feature provides the most informative split.

---

### Summary

Decision trees provide an intuitive alternative to equation-based classification models. Instead of learning a mathematical function, they recursively partition the feature space through a sequence of biologically meaningful questions. Each decision reduces the uncertainty about the correct class until a final prediction is reached. Their transparency makes decision trees particularly attractive in biology and medicine, where understanding the reasoning behind a prediction is often as important as the prediction itself. The remaining challenge is deciding which feature should be used at each split—a problem that leads naturally to the concepts of entropy and information gain.

---

### Self-Check Questions

1. How does a decision tree differ conceptually from logistic regression?
2. What does each internal node of a decision tree represent?
3. What is the role of the leaf nodes?
4. Why are decision trees considered highly interpretable?
5. How is a new observation classified using a decision tree?
6. Why is selecting the first split one of the most important steps in constructing a decision tree?