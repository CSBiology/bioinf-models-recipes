---
title: "6.2 The Markov Property and Sequence Dependencies"
sidebar:
  label: "6.2 The Markov Property and Sequence Dependencies"
  order: 2
  group: "Part 2"
  part: "Part 2"
---

# **6.2 The Markov Property and Sequence Dependencies**

In the previous section, we identified two fundamental limitations of position-specific models: the assumption of independence between positions and the inability to handle structural variation such as insertions and deletions. Both limitations arise from the same underlying issue. The model does not describe how sequences are generated along their length. It treats each position in isolation.

To overcome this, we now move toward models that explicitly capture **dependencies between neighboring positions**. The key idea is to introduce a notion of *sequential structure* into our probabilistic framework.

---

## **From Full Dependency to Tractable Models**

A natural starting point is to consider the most general case. Suppose we want to model a biological sequence ( X = (X_1, X_2, \dots, X_n) ). In full generality, the probability of observing a symbol at position ( n ) could depend on the entire preceding sequence:

[
P(X_n \mid X_{n-1}, X_{n-2}, \dots, X_1)
]

From a biological perspective, this is not unreasonable. In proteins, for example, interactions between amino acids can span long distances along the sequence due to folding. Similarly, regulatory elements in DNA may exhibit complex dependencies.

However, this full model is computationally intractable. The number of possible dependencies grows exponentially with sequence length. Estimating and evaluating such a model would require an impractical amount of data and computation.

We therefore introduce a simplifying assumption.

---

## **The Markov Assumption**

The central idea is that the dependence of a position on its full history can be approximated by considering only a limited context. The simplest and most widely used version is the **first-order Markov assumption**:

[
P(X_n \mid X_{n-1}, \dots, X_1) = P(X_n \mid X_{n-1})
]

In words:

> The probability of observing the next symbol depends only on the immediately preceding symbol.

This assumption dramatically reduces the complexity of the model while still capturing local dependencies between positions.

Processes that satisfy this property are called **Markov chains**.

---

## **Interpretation in Biological Sequences**

The Markov assumption can be interpreted as a compromise between biological realism and computational tractability.

* It acknowledges that sequence positions are not independent.
* It restricts dependencies to a local neighborhood.

When scanning along a sequence, this assumption is often reasonable. Adjacent nucleotides or amino acids frequently exhibit correlations due to biochemical constraints, codon structure, or evolutionary processes.

At the same time, the model remains computationally manageable. Instead of modeling all possible histories, we only need to consider transitions between neighboring symbols.

---

## **A Simple Example**

Consider a DNA sequence and a simple first-order Markov model defined by transition probabilities between nucleotides. For instance:

* ( P(A \mid G) = 0.3 )
* ( P(G \mid A) = 0.2 )
* ( P(T \mid T) = 0.4 ), and so on

Given such a model, the probability of a sequence ( X = (x_1, x_2, \dots, x_n) ) can be written as:

[
P(X) = P(x_1) \cdot \prod_{i=2}^{n} P(x_i \mid x_{i-1})
]

This resembles the likelihood computation we encountered earlier, but with an important difference:

> The probability at each position now depends on the previous symbol, not just on its position in the sequence.

---

## **Comparison to Position-Specific Models**

It is instructive to compare this formulation with the position probability matrix introduced earlier.

* In a **PPM**, each position has its own distribution, independent of other positions.
* In a **Markov model**, the distribution at a position depends on the previous symbol, but not on the absolute position in the sequence.

This leads to different modeling capabilities:

| Model        | Captures positional specificity | Captures dependencies | Handles variable length |
| ------------ | ------------------------------- | --------------------- | ----------------------- |
| PPM          | Yes                             | No                    | No                      |
| Markov chain | No                              | Yes (local)           | Yes                     |

Each model captures a different aspect of biological sequences, but neither alone is sufficient for realistic motif modeling.

---

## **Limitations of Observable Markov Models**

While Markov chains introduce dependencies, they still fall short in an important way. The states of the model are directly tied to the observed symbols. That is, the model describes transitions between nucleotides or amino acids themselves.

This creates a limitation:

* We cannot distinguish between different *contexts* that generate the same symbol.
* We cannot model latent biological processes such as “being in a promoter region” versus “being in background sequence.”

In other words, the model lacks an explicit representation of **hidden structure**.

---

## **Towards Hidden States**

To address this limitation, we introduce an additional layer to the model.

Instead of assuming that the observed symbols themselves form a Markov chain, we assume that:

* there exists an underlying sequence of **hidden states**
* these states follow a Markov process
* each state emits observable symbols according to a probability distribution

This leads to a two-level model:

1. A **hidden sequence of states** that evolves according to the Markov property
2. An **observed sequence** generated by these states

This separation allows us to model situations where the same observed symbol can arise from different underlying biological contexts.

---

## **Conceptual Bridge to Hidden Markov Models**

We are now in a position to combine the ideas developed so far:

* From motif models, we retain the idea of **probabilistic emission of symbols**
* From Markov chains, we adopt the idea of **state transitions with local dependencies**

By introducing hidden states that control the emission of symbols, we obtain a model that:

* captures dependencies between positions
* distinguishes between different biological regimes
* allows sequences to be generated by switching between these regimes

This is precisely the idea behind **Hidden Markov Models**.

In the next section, we will formalize this model and describe its components in detail.

---

## **Self-Check Questions**

1. Why is modeling full dependencies between all positions in a sequence infeasible?
2. What is the Markov assumption, and how does it simplify sequence modeling?
3. How does a Markov chain differ from a position probability matrix?
4. Why are observable Markov models insufficient for modeling biological sequence structure?
5. What conceptual step leads from Markov chains to Hidden Markov Models?

