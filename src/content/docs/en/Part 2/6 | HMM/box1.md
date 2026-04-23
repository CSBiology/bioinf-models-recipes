---
title: "Box 6.1 — Observed Sequence and Hidden State Path"
---

## **Box 6.1 — Observed Sequence and Hidden State Path**

A central idea of a Hidden Markov Model is that two sequences are involved at the same time.

The first is the **observed sequence**, which consists of the symbols we actually measure. In the case of DNA, these are the nucleotides ( A ), ( C ), ( G ), and ( T ). The second is the **hidden state sequence**, which represents the underlying biological context that generated each symbol. This hidden sequence is not directly observable and must therefore be inferred from the data.

To illustrate this distinction, consider the following short example:

[
\text{Observed: } A \quad C \quad C \quad T \quad A
]

[
\text{Hidden: } \phantom{A} H \quad H \quad P \quad H \quad H
]

Here, the observed sequence is the nucleotide string ( ACCTA ). The hidden sequence indicates that most positions are assumed to have been generated from the background state ( H ), whereas the third position is assumed to have been generated from a promoter or motif-related state ( P ).

The crucial point is that only the upper sequence is given to us. The lower sequence is a hypothesis about the unobserved process that produced the data.

This means that a single observed sequence does not correspond to one unique hidden path. Instead, several different hidden state sequences may be compatible with the same observation. For example, the sequence ( ACCTA ) could in principle also be explained by paths such as

[
H \quad P \quad P \quad H \quad H
]

or

[
H \quad H \quad H \quad H \quad H
]

or

[
P \quad P \quad H \quad H \quad H
]

provided that the corresponding transition and emission probabilities assign them non-zero probability.

This is why Hidden Markov Models give rise to an inference problem. We observe the emitted sequence, but we do not directly observe the sequence of states that produced it. The task of the model is therefore not merely to describe the sequence itself, but to reason about the hidden biological structure underlying it.

This distinction between **observations** and **hidden states** is what makes Hidden Markov Models both more powerful and more subtle than ordinary Markov chains. In a standard Markov chain, the states are directly visible. In an HMM, by contrast, the states remain latent, and the observed data provide only indirect evidence about them.

