---
title: "19.3 Probability Distributions Distinguish Biological Mechanisms"
sidebar:
  label: "19.3 Probability Distributions Distinguish Biological Mechanisms"
  order: 3
  group: "Part 5"
  part: "Part 5"
---

## 19.3 Probability Distributions Distinguish Biological Mechanisms

The previous sections established that biological systems exhibit intrinsic variability and that stochastic models are often required to describe their behavior.

At this point, an important question naturally arises.

> **How can we determine whether observed variability reflects a particular biological mechanism?**

In deterministic modelling, answering this question is often straightforward.

A model predicts a trajectory, and we compare this predicted trajectory with experimental observations.

Stochastic systems are fundamentally different.

Repeated experiments no longer produce identical trajectories.

Instead, they generate a **distribution of possible outcomes**.

This raises a profound question.

> **Can probability distributions themselves reveal the underlying biological mechanism?**

One of the most elegant demonstrations that they can comes from a classic experiment performed by Salvador Luria and Max Delbrück in 1943.

### A biological puzzle

At the time, biologists debated a fundamental question about evolution.

How do bacteria become resistant to antibiotics or bacteriophages?

Two competing hypotheses had been proposed.

The first hypothesis assumed that mutations were **adaptive**.

According to this idea, bacteria respond to an environmental challenge by generating beneficial mutations when they are needed.

In other words,

```
Environmental challenge
        ↓
Adaptive mutation
        ↓
Resistant cells
```

The second hypothesis proposed something entirely different.

Mutations occur **spontaneously**, long before the environmental challenge appears.

Natural selection then simply favors the rare cells that already possess the advantageous mutation.

```
Random mutation
        ↓
Genetic diversity
        ↓
Environmental challenge
        ↓
Selection of resistant cells
```

Both hypotheses appeared biologically plausible.

How could they be distinguished experimentally?

### Looking beyond the average

Suppose we grow many independent bacterial cultures under identical conditions.

After the cultures have grown, we expose each one to a bacteriophage or an antibiotic and count the number of resistant colonies.

At first glance, one might compare the **average** number of resistant bacteria predicted by the two hypotheses.

Surprisingly, this approach does not solve the problem.

Both hypotheses can produce very similar average numbers of resistant cells.

The average therefore contains too little information to distinguish between the competing biological mechanisms.

Luria and Delbrück realized that the crucial information lies elsewhere.

Instead of comparing the averages, they compared the **entire distribution** of resistant colonies across many cultures.

### Predictions of the adaptive mutation hypothesis

If mutations occur only after exposure to the selective agent, every bacterial culture experiences essentially the same conditions.

Each culture has the same opportunity to produce resistant mutants.

As a result, the number of resistant colonies should fluctuate only moderately from one culture to the next.

The distribution is therefore relatively narrow.

Most cultures contain approximately the same number of resistant bacteria.

### Predictions of the spontaneous mutation hypothesis

Now consider the alternative hypothesis.

Suppose mutations occur randomly during normal cell growth.

Some cultures may experience a mutation very early.

All descendants of this early mutant inherit the resistance mutation.

By the time selection is applied, the culture contains a very large number of resistant cells.

Other cultures may experience the first mutation only shortly before selection.

These cultures contain only a few resistant cells.

Some cultures may not experience any mutation at all.

The result is a completely different probability distribution.

Most cultures contain few resistant cells.

A few cultures contain extraordinarily many resistant cells because a mutation happened early during growth.

These rare but extremely large mutant populations are known as **jackpot events**.

### The experiment

Luria and Delbrück performed exactly this experiment.

They grew many independent bacterial cultures under identical conditions before exposing them to bacteriophages.

The results were striking.

The number of resistant colonies varied enormously between cultures.

Some cultures contained almost no resistant bacteria.

Others contained hundreds or even thousands.

The observed distribution matched the prediction of the spontaneous mutation hypothesis.

Resistance mutations therefore arise randomly before selection rather than being induced by the environment.

### A new way of testing biological models

The importance of the Luria–Delbrück experiment extends far beyond bacterial genetics.

The experiment demonstrated a completely new scientific principle.

Two competing biological mechanisms may produce

- the same average behavior,

yet generate

- entirely different probability distributions.

The probability distribution therefore contains biological information that is invisible when considering averages alone.

This insight fundamentally changed biological modelling.

Instead of asking only

> **Does the model predict the correct average?**

we must often ask

> **Does the model predict the correct distribution?**

Modern systems biology applies exactly the same principle when analyzing

- single-cell transcriptomics,
- protein expression,
- cell differentiation,
- microbial populations,
- and many other stochastic biological systems.

### From averages to distributions

The Luria–Delbrück experiment marks an important conceptual transition.

Deterministic models typically predict a single trajectory or a single average behavior.

Stochastic models predict an entire distribution of possible outcomes.

To construct such models, we first need a mathematical language capable of describing random events and probability distributions.

This language is provided by **stochastic processes**.

### Key concepts

- Different biological mechanisms may produce identical averages.
- Probability distributions often contain more information than average values.
- The Luria–Delbrück experiment distinguished adaptive and spontaneous mutation hypotheses.
- Early mutations produce rare but very large "jackpot" populations.
- Stochastic models predict probability distributions rather than single trajectories.
- Probability distributions can discriminate between competing biological hypotheses.

### Summary

The Luria–Delbrück experiment demonstrated that probability distributions provide powerful information about biological mechanisms. Although adaptive and spontaneous mutation models can predict similar average numbers of resistant bacteria, they generate fundamentally different distributions across independent cultures. By comparing these distributions with experimental observations, Luria and Delbrück showed that mutations occur spontaneously before selection. More generally, the experiment established that stochastic models should be evaluated by comparing predicted probability distributions rather than average behavior alone.

### Self-check questions

1. What biological question motivated the Luria–Delbrück experiment?
2. Why are average values insufficient for distinguishing the two mutation hypotheses?
3. Why do spontaneous mutations produce "jackpot" events?
4. Which mutation hypothesis was supported by the experimental data?
5. What general modelling principle emerged from the Luria–Delbrück experiment?
6. Why are probability distributions often more informative than averages?