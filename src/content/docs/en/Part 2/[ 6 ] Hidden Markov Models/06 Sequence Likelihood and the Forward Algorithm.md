---
title: "6.6 Sequence Likelihood and the Forward Algorithm"
sidebar:
  label: "6.6 Sequence Likelihood and the Forward Algorithm"
  order: 6
  group: "Part 2"
  part: "Part 2"
---

# **6.6 Sequence Likelihood and the Forward Algorithm**

In the previous section, we addressed the decoding problem using the Viterbi algorithm. There, the goal was to find a single hidden state sequence that best explains the observed data.

We now turn to a different, equally fundamental question:

> **How likely is the observed sequence under a given model?**

This is known as the **evaluation problem**.

---

## **6.6.1 From Best Path to All Paths**

Recall that in the decoding problem, we searched for

[
\max_S P(X, S \mid M)
]

that is, the *single most likely* hidden path.

In contrast, the evaluation problem requires us to compute

[
P(X \mid M)
]

the total probability of observing the sequence under the model.

This requires summing over **all possible hidden state sequences**:

[
P(X \mid M) = \sum_S P(X, S \mid M)
]

This distinction is crucial.

* Viterbi selects **one path**
* Forward considers **all paths**

---

## **Interpretation**

A useful way to think about this difference is:

* The Viterbi algorithm asks:
  *What is the best explanation?*

* The forward algorithm asks:
  *How much total support does the model provide for this sequence?*

Even if no single path has very high probability, the sum over many moderately likely paths may still result in a high overall likelihood.

---

## **6.6.2 Why Direct Computation Is Infeasible**

At first glance, computing ( P(X \mid M) ) appears even harder than the decoding problem. Instead of selecting one path, we must consider all possible paths.

For a sequence of length ( n ) and ( k ) states, this again involves ( k^n ) terms.

For realistic sequences, direct summation is impossible.

However, as in the Viterbi case, the structure of the model allows us to reuse intermediate results. This leads to a dynamic programming solution: the **forward algorithm**.

---

## **6.6.3 Forward Probabilities**

We define the **forward variable**

[
\alpha_i(j)
]

as the probability of observing the first ( i ) symbols and ending in state ( s_j ):

[
\alpha_i(j) = P(x_1, x_2, \dots, x_i, S_i = s_j \mid M)
]

This quantity aggregates all paths that:

* generate the prefix ( x_1, \dots, x_i )
* end in state ( s_j )

Thus, instead of tracking individual paths, we summarize all relevant paths into a single value per state and position.

---

## **6.6.4 Forward Recursion**

As with Viterbi, the algorithm proceeds in three stages.

---

### **Initialization**

For the first observation:

[
\alpha_1(j) = \pi_j , e_j(x_1)
]

This is identical to the Viterbi initialization, since at the first position there is only one possible path per state.

---

### **Recursion**

For each subsequent position:

[
\alpha_{i+1}(j) = \sum_k \alpha_i(k) , t_{kj} , e_j(x_{i+1})
]

This equation has a clear interpretation.

To reach state ( s_j ) at position ( i+1 ), we must:

1. come from some previous state ( s_k )
2. transition from ( s_k ) to ( s_j )
3. emit symbol ( x_{i+1} )

Unlike the Viterbi algorithm, we do not select the best predecessor. Instead, we **sum over all possible predecessors**.

---

### **Termination**

After processing the entire sequence, we obtain the total likelihood by summing over all final states:

[
P(X \mid M) = \sum_j \alpha_n(j)
]

---

## **6.6.5 Comparison to Viterbi**

The forward algorithm is structurally very similar to Viterbi, but with one key difference:

* Viterbi uses a **maximum** over predecessor states
* Forward uses a **sum** over predecessor states

This small change has a profound effect:

| Aspect         | Viterbi          | Forward           |
| -------------- | ---------------- | ----------------- |
| Operation      | max              | sum               |
| Output         | best path        | total probability |
| Interpretation | best explanation | total support     |

This duality is central to understanding HMMs.

---

## **6.6.6 Worked Example (Conceptual Walkthrough)**

Let us revisit the sequence:

[
X = \text{A C C T A}
]

and the two-state model with states ( P ) (promoter) and ( B ) (background).

At the first position:

[
\alpha_1(P) = \pi_P e_P(A), \quad \alpha_1(B) = \pi_B e_B(A)
]

At the second position, we compute:

[
\alpha_2(P) = \alpha_1(P)t_{PP}e_P(C) + \alpha_1(B)t_{BP}e_P(C)
]

[
\alpha_2(B) = \alpha_1(P)t_{PB}e_B(C) + \alpha_1(B)t_{BB}e_B(C)
]

The key difference from Viterbi is visible here:

* instead of choosing the better of the two paths
* we add both contributions

This means that even paths that are not optimal individually still contribute to the final probability.

As we proceed along the sequence, each forward value accumulates contributions from an exponentially growing number of paths, but in a compressed form.

---

## **6.6.7 Intuition: Summing Over Explanations**

The forward algorithm effectively integrates over all possible explanations of the data.

This is particularly important in biological contexts, where:

* multiple evolutionary histories may explain a sequence
* uncertainty is inherent in the data

By summing over all paths, the model accounts for this uncertainty rather than committing to a single interpretation.

---

## **6.6.8 Log-Space Implementation**

As with the Viterbi algorithm, the forward algorithm must be implemented in log-space to avoid numerical underflow.

However, the recursion now involves sums, which become:

[
\log \alpha_{i+1}(j) = \log \sum_k \exp\bigl( \log \alpha_i(k) + \log t_{kj} + \log e_j(x_{i+1}) \bigr)
]

This expression is known as the **log-sum-exp** operation.

---

### **Log-sum-exp trick**

To compute this expression stably, we use:

[
\log \sum_k e^{a_k} = m + \log \sum_k e^{a_k - m}
]

where

[
m = \max_k a_k
]

This prevents numerical overflow or underflow when dealing with exponentials.

---

## **6.6.9 Relationship to Biological Questions**

The forward algorithm is particularly useful for:

* scoring sequences against models
* comparing alternative models
* evaluating motif likelihood across a genome

For example, when scanning a genome, we may compute ( P(X \mid M_{\text{motif}}) ) and compare it to ( P(X \mid M_{\text{background}}) ). This allows us to identify regions that are better explained by one model than another.

---

## **6.6.10 Conceptual Summary**

The forward algorithm extends the dynamic programming approach of Viterbi by replacing maximization with summation.

It provides:

* a complete probabilistic evaluation of the sequence
* a principled way to handle uncertainty
* the foundation for parameter learning (Baum–Welch)

---

## **Self-Check Questions**

1. What is the difference between summing over all paths and selecting the best path?
2. What does the forward variable ( \alpha_i(j) ) represent?
3. Why is direct computation of ( P(X \mid M) ) infeasible?
4. What role does the log-sum-exp operation play?
5. Why is the forward algorithm important for biological sequence analysis?

