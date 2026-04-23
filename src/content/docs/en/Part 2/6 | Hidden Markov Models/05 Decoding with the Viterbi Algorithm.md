---
title: "6.5 Decoding with the Viterbi Algorithm"
sidebar:
  label: "6.5 Decoding with the Viterbi Algorithm"
  order: 5
  group: "Part 2"
  part: "Part 2"
---

# **6.5 Decoding with the Viterbi Algorithm**

Once a Hidden Markov Model has been specified, one of the first questions we want to answer is the following:

> Given an observed sequence, what is the most likely sequence of hidden states that generated it?

This is the **decoding problem**, and the classical solution is the **Viterbi algorithm**.

At first glance, this problem seems straightforward. If the observed sequence is short and the number of hidden states is small, one might imagine listing all possible hidden paths, computing their probabilities, and choosing the best one. However, this quickly becomes infeasible. For a sequence of length ( n ) and an HMM with ( k ) hidden states, there are ( k^n ) possible hidden state sequences. Even for moderate values of ( n ), exhaustive search becomes impossible.

The Viterbi algorithm solves this problem by exploiting a key structural property of Hidden Markov Models: although the total number of complete paths is enormous, many of these paths share common prefixes. This creates the kind of overlapping subproblem structure that can be handled by dynamic programming.

---

## **6.5.1 The Decoding Problem Revisited**

Let the observed sequence be

[
X = (x_1, x_2, \dots, x_n)
]

and let the hidden state sequence be

[
S = (s_1, s_2, \dots, s_n)
]

For a fixed model ( M ), the decoding problem is to find

[
S^* = \arg\max_S P(X, S \mid M)
]

That is, among all possible hidden paths, we seek the one that maximizes the joint probability of both the observations and the path itself.

This formulation is important. We are not simply asking which path is plausible in isolation. We are asking which path provides the most probable explanation for the observed data under the model.

In the promoter-background example, this means that we want to assign to each observed nucleotide the state that best explains it, while also respecting the transition structure of the model. A path with excellent emissions but impossible transitions will not be favored. Likewise, a path with likely transitions but poor emissions will also not be optimal. The Viterbi algorithm balances both contributions.

---

## **6.5.2 Why Brute Force Fails**

To appreciate the value of the algorithm, it is worth examining what a naive solution would require.

Suppose our HMM has only two hidden states:

[
{P, B}
]

and the observed sequence has length five. Then there are already

[
2^5 = 32
]

possible hidden paths.

For a length of twenty, there would be

[
2^{20} = 1{,}048{,}576
]

possible paths.

For biologically realistic sequence lengths, exhaustive evaluation is no longer practical. Moreover, most of the work would be redundant. Many different paths share the same partial prefix, and repeatedly recomputing the best continuation of such prefixes would be wasteful.

The Viterbi algorithm avoids this redundancy by storing, at each sequence position and for each state, the probability of the best path ending there.

---

## **6.5.3 Core Idea of the Algorithm**

The central observation is simple but powerful.

Suppose that at position ( i ) we want to know the best path ending in state ( s_j ). Then this best path must have come from one of the states at position ( i-1 ). Among all possible predecessor states, only one leads to the optimal path ending in ( s_j ).

This means that, instead of considering all complete paths at once, we can compute the best partial path to each state step by step.

Define the **Viterbi score**

[
v_i(j)
]

as the probability of the most likely path that generates the first ( i ) observations and ends in state ( s_j ).

This quantity summarizes exactly the information we need to continue the dynamic programming recursion.

---

## **6.5.4 Recurrence Relation**

The algorithm consists of three parts: initialization, recursion, and termination.

### **Initialization**

For the first observation ( x_1 ), the best path ending in state ( s_j ) is simply the probability of starting in that state and emitting the symbol:

[
v_1(j) = \pi_j , e_j(x_1)
]

where

* ( \pi_j ) is the initial probability of state ( s_j )
* ( e_j(x_1) ) is the emission probability of symbol ( x_1 ) from state ( s_j )

---

### **Recursion**

For each subsequent position ( i+1 ), we compute

[
v_{i+1}(j) = \max_{k} \bigl( v_i(k) , t_{kj} , e_j(x_{i+1}) \bigr)
]

This equation has a very natural interpretation.

To arrive at state ( s_j ) at position ( i+1 ), we must

1. have followed the best path to some predecessor state ( s_k ) at position ( i )
2. transition from ( s_k ) to ( s_j )
3. emit the observed symbol ( x_{i+1} ) from state ( s_j )

Among all predecessor states ( s_k ), we choose the one that maximizes this product.

---

### **Backpointers**

To recover the actual path rather than only its probability, we must also store which predecessor state achieved the maximum. Thus, alongside the Viterbi scores, we maintain a **backpointer table**:

[
b_{i+1}(j) = \arg\max_k \bigl( v_i(k) , t_{kj} , e_j(x_{i+1}) \bigr)
]

This table records, for each position and state, where the optimal path came from.

---

### **Termination**

Once the last observation has been processed, the score of the best complete path is

[
\max_j v_n(j)
]

and the final state of the best path is

[
s_n^* = \arg\max_j v_n(j)
]

Starting from this final state, we reconstruct the full path by following the backpointers backward through the table.

---

## **6.5.5 A Worked Example**

We now walk through the kind of example used in the lecture, using a simple two-state HMM with a promoter state ( P ) and a background state ( B ).

Assume the following initial probabilities:

[
\pi_P = 0.1, \qquad \pi_B = 0.9
]

Transition probabilities:

[
t_{PP} = 0.55, \quad t_{PB} = 0.45
]

[
t_{BP} = 0.35, \quad t_{BB} = 0.65
]

Emission probabilities:

For the promoter state ( P ),

[
e_P(A)=0.15,\quad e_P(T)=0.12,\quad e_P(G)=0.30,\quad e_P(C)=0.43
]

For the background state ( B ),

[
e_B(A)=0.30,\quad e_B(T)=0.30,\quad e_B(G)=0.20,\quad e_B(C)=0.20
]

Now consider the observed sequence

[
X = \text{A C C T A}
]

We compute the best path step by step.

---

## **6.5.6 Step 1: Initialization**

For the first symbol ( A ),

[
v_1(P) = \pi_P e_P(A) = 0.1 \cdot 0.15 = 0.015
]

[
v_1(B) = \pi_B e_B(A) = 0.9 \cdot 0.30 = 0.27
]

So after observing the first symbol, the best path ending in ( B ) has much higher probability than the best path ending in ( P ). Intuitively, this means that the model initially explains the first ( A ) more naturally as background than as promoter.

---

## **6.5.7 Step 2: Second Observation**

The second symbol is ( C ).

To compute the best path ending in ( P ),

[
v_2(P) = \max \Bigl(
v_1(P)t_{PP}e_P(C),;
v_1(B)t_{BP}e_P(C)
\Bigr)
]

Substituting the numbers gives

[
v_2(P) = \max \Bigl(
0.015 \cdot 0.55 \cdot 0.43,;
0.27 \cdot 0.35 \cdot 0.43
\Bigr)
]

[
= \max(0.00355,;0.04064) = 0.04064
]

Thus the best predecessor is ( B ).

Now for the background state,

[
v_2(B) = \max \Bigl(
v_1(P)t_{PB}e_B(C),;
v_1(B)t_{BB}e_B(C)
\Bigr)
]

[
v_2(B) = \max \Bigl(
0.015 \cdot 0.45 \cdot 0.20,;
0.27 \cdot 0.65 \cdot 0.20
\Bigr)
]

[
= \max(0.00135,;0.03510) = 0.03510
]

Thus the best predecessor is again ( B ).

At this point the best path to ( P ) is slightly better than the best path to ( B ), meaning that after seeing ( AC ), the model now favors being in the promoter state.

---

## **6.5.8 Step 3: Third Observation**

The third symbol is again ( C ).

For the promoter state,

[
v_3(P) = \max \Bigl(
v_2(P)t_{PP}e_P(C),;
v_2(B)t_{BP}e_P(C)
\Bigr)
]

[
= \max \Bigl(
0.04064 \cdot 0.55 \cdot 0.43,;
0.03510 \cdot 0.35 \cdot 0.43
\Bigr)
]

[
= \max(0.00961,;0.00528) = 0.00961
]

Thus the best predecessor is ( P ).

For the background state,

[
v_3(B) = \max \Bigl(
v_2(P)t_{PB}e_B(C),;
v_2(B)t_{BB}e_B(C)
\Bigr)
]

[
= \max \Bigl(
0.04064 \cdot 0.45 \cdot 0.20,;
0.03510 \cdot 0.65 \cdot 0.20
\Bigr)
]

[
= \max(0.00366,;0.00456) = 0.00456
]

Thus the best predecessor is ( B ).

Now the promoter path is clearly favored.

---

## **6.5.9 Step 4: Fourth Observation**

The fourth symbol is ( T ).

For the promoter state,

[
v_4(P) = \max \Bigl(
v_3(P)t_{PP}e_P(T),;
v_3(B)t_{BP}e_P(T)
\Bigr)
]

[
= \max \Bigl(
0.00961 \cdot 0.55 \cdot 0.12,;
0.00456 \cdot 0.35 \cdot 0.12
\Bigr)
]

[
= \max(0.000634,;0.000192) = 0.000634
]

Thus the best predecessor is ( P ).

For the background state,

[
v_4(B) = \max \Bigl(
v_3(P)t_{PB}e_B(T),;
v_3(B)t_{BB}e_B(T)
\Bigr)
]

[
= \max \Bigl(
0.00961 \cdot 0.45 \cdot 0.30,;
0.00456 \cdot 0.65 \cdot 0.30
\Bigr)
]

[
= \max(0.001297,;0.000889) = 0.001297
]

Thus the best predecessor is ( P ).

Now the best path to ( B ) is better than the best path to ( P ), indicating a transition back into background.

---

## **6.5.10 Step 5: Fifth Observation**

The fifth symbol is ( A ).

For the promoter state,

[
v_5(P) = \max \Bigl(
v_4(P)t_{PP}e_P(A),;
v_4(B)t_{BP}e_P(A)
\Bigr)
]

[
= \max \Bigl(
0.000634 \cdot 0.55 \cdot 0.15,;
0.001297 \cdot 0.35 \cdot 0.15
\Bigr)
]

[
= \max(0.0000523,;0.0000681) = 0.0000681
]

Thus the best predecessor is ( B ).

For the background state,

[
v_5(B) = \max \Bigl(
v_4(P)t_{PB}e_B(A),;
v_4(B)t_{BB}e_B(A)
\Bigr)
]

[
= \max \Bigl(
0.000634 \cdot 0.45 \cdot 0.30,;
0.001297 \cdot 0.65 \cdot 0.30
\Bigr)
]

[
= \max(0.0000856,;0.0002529) = 0.0002529
]

Thus the best predecessor is ( B ).

The overall best final state is therefore ( B ), because

[
v_5(B) > v_5(P)
]

---

## **6.5.11 Traceback**

We now reconstruct the best path by following the backpointers backward.

From the calculations above, the best final state is ( B ). The predecessor choices were:

* at position 5, ( B \leftarrow B )
* at position 4, ( B \leftarrow P )
* at position 3, ( P \leftarrow P )
* at position 2, ( P \leftarrow B )
* at position 1, start in ( B )

Thus the most likely hidden path is

[
B \quad P \quad P \quad B \quad B
]

This is exactly the kind of output we want from a decoding algorithm. The observed sequence ( ACCTA ) is explained as starting in background, passing through a short promoter-like region, and returning to background.

---

## **6.5.12 Interpretation of the Result**

This example illustrates several important points.

First, the most likely state at a given position does not depend only on the symbol observed at that position. It also depends on the probability of reaching that state from the preceding path. This is why the Viterbi algorithm cannot be replaced by a simple position-wise classification rule.

Second, the algorithm balances **emission evidence** against **transition structure**. For example, a symbol that is moderately compatible with the promoter state may still be assigned to background if the transition into promoter is unlikely, or vice versa.

Third, the output is not just a score but an interpretable segmentation of the sequence. In biological terms, this segmentation can correspond to regions of different functional character.

---

## **6.5.13 Dynamic Programming Structure**

It is useful to pause and make the dynamic programming principle explicit.

At each cell of the Viterbi table, we store only the best path ending in that state. Why is it safe to discard all other partial paths ending there?

Because any future continuation depends only on the current state and current score, not on the detailed history of how that state was reached. If one partial path to state ( P ) is worse than another, it can never overtake it later, since both will face the same future transition and emission options.

This is the optimal substructure property that makes Viterbi possible.

---

## **6.5.14 Computational Complexity**

Suppose an HMM has ( N ) states and the observed sequence has length ( L ).

At each position, for each state, we consider all predecessor states. This leads to a time complexity of

[
O(N^2 L)
]

This is dramatically better than the exponential complexity of exhaustive enumeration.

The memory cost is typically

[
O(NL)
]

if the full table and backpointers are stored, which is usually acceptable for moderate state spaces.

---

## **6.5.15 Conceptual Summary**

The Viterbi algorithm solves the decoding problem by combining three ideas:

* **state-specific emissions**
* **state-to-state transitions**
* **dynamic programming**

Its output is the single most likely hidden path explaining the observed sequence.

For biological sequence analysis, this makes it a powerful tool for:

* promoter detection
* gene structure prediction
* protein secondary structure labeling
* profile-based sequence classification

In all of these applications, the goal is not merely to score a sequence, but to reconstruct the hidden biological organization underlying it.

---

## **Self-Check Questions**

1. Why is exhaustive search over all hidden paths infeasible?
2. What does the quantity ( v_i(j) ) represent in the Viterbi algorithm?
3. Why are backpointers needed?
4. In what sense does the Viterbi algorithm use dynamic programming?
5. Why can the most likely state at a position depend on earlier positions?
