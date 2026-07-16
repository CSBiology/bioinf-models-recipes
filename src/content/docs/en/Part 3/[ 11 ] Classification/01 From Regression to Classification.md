---
title: "11.1 From Regression to Classification"
sidebar:
  label: "11.1 From Regression to Classification"
  order: 1
  group: "Part 3"
  part: "Part 3"
---

# 11.1 From Regression to Classification

## Two fundamentally different prediction problems

In the previous chapters, we introduced supervised learning using examples in which the goal was to predict a continuous numerical quantity. We estimated protein stability from physicochemical properties, but many other biological variables could have served the same purpose. Gene expression levels, enzyme activities, metabolite concentrations, growth rates, or reaction velocities are all examples of quantities that vary continuously.

Prediction problems of this type belong to **regression**.

Regression models answer questions such as

> *How much?*

or

> *How strongly?*

For example,

- How stable is this protein?
- How strongly is this gene expressed?
- What is the expected growth rate of this bacterial strain?

The output of a regression model is therefore a numerical value that can, in principle, take any value within a continuous range.

Many biological questions, however, have a completely different structure.

Instead of estimating a numerical quantity, we often wish to assign an observation to one of several predefined categories.

For example,

- Is this protein localized to the chloroplast or to the mitochondrion?
- Is a patient healthy or diseased?
- Does this DNA sequence contain a promoter?
- Is a genetic variant pathogenic?
- Is a mushroom edible or poisonous?

These questions no longer ask **how much**.

Instead they ask

> **Which class does this observation belong to?**

Prediction problems of this kind are called **classification problems**.

Although regression and classification produce different types of outputs, they are based on exactly the same learning principles.

Both require

- labeled training data,
- informative biological features,
- a mathematical model,
- a loss function,
- and an optimization procedure.

Only the prediction target changes.

Regression predicts **continuous values**.

Classification predicts **discrete biological classes**.

This distinction is one of the most important concepts in supervised learning because it determines which mathematical models and evaluation methods are appropriate for a given biological problem.

---

## Why not simply convert everything into classes?

At first glance, classification appears to be a simpler problem than regression.

Suppose we wish to predict protein stability.

Rather than estimating the exact melting temperature, we could simply divide proteins into two categories:

- **stable**
- **unstable**

The prediction problem has suddenly become much easier.

Instead of predicting one numerical value among infinitely many possibilities, the model only has to distinguish between two classes.

This raises an obvious question.

> **Why don't we always convert continuous biological measurements into categories?**

The answer is that such a simplification inevitably discards information.

Imagine two proteins with melting temperatures of 49°C and 51°C.

If we define every protein above 50°C as *stable* and every protein below 50°C as *unstable*, these nearly identical proteins suddenly belong to different classes.

Conversely, proteins with melting temperatures of 51°C and 90°C would both be labeled *stable*, although their actual stabilities differ dramatically.

The continuous measurement contains much richer information than the binary label.

This process of converting continuous values into discrete categories is known as **binning**.

Although binning is sometimes useful, it should always be performed with caution because information that has been discarded cannot be recovered later.

Whenever reliable continuous measurements are available, regression generally provides a more informative description of the biological system.

Classification should therefore be viewed not as a simpler version of regression, but as the appropriate solution for biological questions whose answers are naturally categorical.

---


## Classification is ubiquitous in biology

Classification problems occur throughout modern biology.

In molecular biology, proteins are classified according to their cellular localization, biological function, structural fold, or enzyme family.

In genetics, DNA variants are classified as benign or pathogenic.

In microbiology, bacterial isolates may be classified according to antibiotic resistance.

In ecology, organisms are assigned to species based on morphological or molecular characteristics.

In medicine, machine learning models classify patients according to disease status, treatment response, or prognosis.

Despite the enormous diversity of these applications, they all share the same mathematical structure.

Each observation is represented by a set of measurable features.

The objective is to learn a rule that assigns new observations to the correct biological class.

The remainder of this chapter introduces several different approaches for learning such decision rules.

We begin with the simplest probabilistic classifier—**logistic regression**—before turning to decision trees, one of the most intuitive and widely used classification methods in bioinformatics.

---

### Key Concepts

* Regression predicts continuous numerical quantities.
* Classification predicts discrete categories.
* Classification is appropriate when biological outcomes naturally belong to predefined classes.
* Converting continuous measurements into categories (**binning**) simplifies prediction but inevitably loses information.
* Many important bioinformatics applications are classification problems.

---

### Summary

Regression and classification are the two major forms of supervised learning. While regression estimates continuous quantities, classification assigns observations to predefined biological classes. Although both approaches rely on the same fundamental learning framework, they address different scientific questions. Understanding this distinction is essential because it determines which mathematical models are appropriate for a given biological prediction problem. In the following sections, we will develop increasingly sophisticated methods for learning accurate classification models.

---

### Self-Check Questions

1. What is the fundamental difference between regression and classification?
2. Give three examples of regression problems in biology.
3. Give three examples of classification problems in biology.
4. What is binning, and why does it lead to a loss of information?
5. Why is regression generally preferable when continuous measurements are available?
6. Why are classification methods nevertheless indispensable in biology?

