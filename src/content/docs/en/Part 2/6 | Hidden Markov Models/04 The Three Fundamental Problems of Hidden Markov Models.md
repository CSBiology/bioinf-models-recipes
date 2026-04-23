---
title: "6.4 The Three Fundamental Problems of Hidden Markov Models"
sidebar:
  label: "6.4 The Three Fundamental Problems of Hidden Markov Models"
  order: 4
  group: "Part 2"
  part: "Part 2"
---

# **6.4 The Three Fundamental Problems of Hidden Markov Models**

In the previous sections, we introduced Hidden Markov Models as generative models for biological sequences and highlighted the crucial distinction between observed data and hidden state sequences. This distinction naturally leads to a set of fundamental computational questions.

Given an HMM and an observed sequence, we are faced with three different but closely related problems:

1. **Decoding**: What is the most likely hidden state sequence?
2. **Evaluation**: How likely is the observed sequence under the model?
3. **Learning**: How can we estimate the model parameters from data?

Each of these problems captures a different aspect of inference in Hidden Markov Models, and each requires a dedicated algorithmic solution.

---

## **6.4.1 Decoding: Inferring the Most Likely State Sequence**

We begin with the decoding problem.

Given:

* an observed sequence ( X = (x_1, x_2, \dots, x_n) )
* a model ( M ) defined by transition, emission, and initial probabilities

we seek the hidden state sequence ( S = (s_1, s_2, \dots, s_n) ) that best explains the data.

Formally, we want to compute:

[
S^* = \arg\max_S P(X, S \mid M)
]

That is, we search for the state sequence that maximizes the **joint probability** of the observed sequence and the hidden states.

---

### **Interpretation**

In biological terms, this corresponds to assigning a label to each position in the sequence.

For example, in the promoter-background model:

* each position is classified as either promoter (( P )) or background (( B ))
* the result is a segmentation of the sequence into functional regions

This turns HMM decoding into a **sequence classification problem**.

---

### **Why this is non-trivial**

The difficulty arises from the fact that the number of possible state sequences grows exponentially with sequence length. For a model with ( k ) states and a sequence of length ( n ), there are ( k^n ) possible paths.

Exhaustively evaluating all paths is therefore infeasible.

---

### **Solution: The Viterbi Algorithm**

The **Viterbi algorithm** solves this problem efficiently using dynamic programming.

The key idea is to compute, for each position and each state, the probability of the most likely path that ends in that state. Instead of enumerating all possible paths, we reuse intermediate results.

At each step, we:

* consider all possible previous states
* select the one that maximizes the probability
* propagate this information forward

In this way, the algorithm constructs the optimal path incrementally.

---

### **Conceptual summary**

* Input: sequence ( X ), model ( M )
* Output: most likely hidden state sequence ( S^* )
* Method: dynamic programming

---

## **6.4.2 Evaluation: Computing Sequence Likelihood**

The second problem addresses a different question.

Instead of asking for the *best explanation*, we ask:

> **How likely is the observed sequence under the model?**

Formally, we compute:

[
P(X \mid M)
]

---

### **Summing over all possible paths**

Unlike the decoding problem, we do not select a single state sequence. Instead, we must consider **all possible hidden paths**:

[
P(X \mid M) = \sum_S P(X, S \mid M)
]

Each path contributes to the total probability, weighted by how likely it is.

---

### **Why this is difficult**

As before, the number of possible paths grows exponentially with sequence length. Direct computation is therefore infeasible.

---

### **Solution: The Forward Algorithm**

The **forward algorithm** addresses this problem using dynamic programming.

Instead of enumerating paths explicitly, it computes intermediate quantities:

[
\alpha_n(i)
]

which represent the probability of observing the first ( n ) symbols and ending in state ( s_i ).

These values can be computed recursively:

* initialize using initial and emission probabilities
* propagate forward using transition and emission probabilities
* sum over all final states

This allows us to compute ( P(X \mid M) ) efficiently.

---

### **Interpretation**

The forward algorithm answers a fundamentally different question than Viterbi:

* Viterbi finds the **single best path**
* Forward sums over **all possible paths**

A useful intuition is:

> Viterbi gives the most plausible explanation, while the forward algorithm measures the overall support of the model for the data.

---

### **Backward Algorithm**

A closely related method is the **backward algorithm**, which computes probabilities starting from the end of the sequence. It follows the same principles and yields the same final result.

Both forward and backward algorithms are often used together in parameter estimation.

---

## **6.4.3 Learning: Estimating Model Parameters**

The third problem addresses the situation where the model parameters are unknown.

Given:

* a set of observed sequences
* a model structure (states and connectivity)

we want to estimate:

* transition probabilities
* emission probabilities
* initial probabilities

---

### **The challenge**

Unlike standard parameter estimation problems, we do not observe the hidden states. This makes direct estimation difficult, since we cannot simply count transitions and emissions.

---

### **Solution: The Baum–Welch Algorithm**

The **Baum–Welch algorithm** provides a solution by iteratively estimating the hidden structure and updating the model parameters.

It follows the general principle of the Expectation–Maximization (EM) algorithm:

1. **Expectation step**
   Estimate how likely different hidden paths are, given the current parameters

2. **Maximization step**
   Update the parameters based on these estimates

This process is repeated until convergence.

---

### **Intuition**

A helpful way to think about Baum–Welch is as an alternating procedure:

* assume a tentative explanation of the data
* compute statistics based on this explanation
* refine the model
* repeat

Over time, the model becomes better at explaining the observed sequences.

---

### **Practical considerations**

An important aspect of Baum–Welch is that it does not guarantee a global optimum. The result may depend on the initial parameter values.

In practice, this is addressed by:

* running the algorithm multiple times with different initializations
* comparing the resulting models

---

## **6.4.4 Summary of the Three Problems**

The three fundamental problems of Hidden Markov Models can be summarized as follows:

| Problem    | Question                       | Algorithm        |
| ---------- | ------------------------------ | ---------------- |
| Decoding   | What is the best hidden path?  | Viterbi          |
| Evaluation | How likely is the sequence?    | Forward/Backward |
| Learning   | What are the model parameters? | Baum–Welch       |

Together, these problems define the computational framework for working with HMMs.

---

## **Conceptual Integration**

These three problems correspond directly to the challenges introduced earlier:

* Inferring hidden structure → **Decoding**
* Evaluating model fit → **Evaluation**
* Building models from data → **Learning**

They transform the conceptual model of Hidden Markov Models into a practical computational tool.

---

## **Self-Check Questions**

1. What is the difference between maximizing ( P(X, S) ) and summing over all ( P(X, S) )?
2. Why is the Viterbi algorithm more efficient than brute-force enumeration?
3. What does the forward algorithm compute at each step?
4. Why is parameter estimation difficult when states are hidden?
5. How does the Baum–Welch algorithm relate to the EM principle?

