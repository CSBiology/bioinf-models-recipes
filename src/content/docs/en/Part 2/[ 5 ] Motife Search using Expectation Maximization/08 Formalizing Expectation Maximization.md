---
title: "5.8 Formalizing Expectation Maximization"
sidebar:
  label: "5.8 Formalizing Expectation Maximization"
  order: 8
  group: "Part 2"
  part: "Part 2"
---

# **5.8 Formalizing Expectation Maximization**

### **Learning Objectives**

After reading this section, you should be able to:

* distinguish between complete-data and observed-data likelihood
* understand why marginal likelihood is difficult to optimize directly
* define the EM auxiliary function $Q(\theta \mid \theta^{(t)})$
* describe the formal roles of the E-step and M-step
* explain how EM transforms an intractable optimization into an iterative procedure

---

### **Returning to the Motif Problem**

Returning to the motif discovery problem, we now seek to make the EM idea precise. We have seen that the difficulty arises from missing information: the motif positions are unknown, yet they are required to estimate the motif model.

This situation is not unique to motif discovery. More generally, we are given observed data, but part of the structure that explains this data is hidden. Our goal is to estimate the parameters of a model that best explains the observations, despite this incomplete information.

To formalize this, we introduce a general notation that applies both to the coin toss example and to motif discovery.

---

### **Observed Data, Hidden Variables, and Parameters**

We denote the observed data by $X$. In motif discovery, this corresponds to the sequences. We denote the hidden variables by $Z$, which represent the unknown motif positions. Finally, we denote the model parameters by $\theta$, which define the motif model.

If both $X$ and $Z$ were known, we could write down the *complete-data likelihood*
$$
P(X, Z \mid \theta).
$$
Maximizing this quantity with respect to $\theta$ would typically be straightforward, because the hidden structure would be explicitly available.

However, in practice we only observe $X$, not $Z$. The relevant quantity is therefore the *marginal likelihood*
$$
P(X \mid \theta) = \sum_Z P(X, Z \mid \theta),
$$
which accounts for all possible configurations of the hidden variables.

---

### **The Challenge of Marginal Likelihood**

At first glance, one might attempt to maximize this marginal likelihood directly. However, this turns out to be difficult for two reasons.

First, the number of possible configurations of $Z$ can be very large. In motif discovery, each possible assignment of motif positions corresponds to a different configuration.

Second, optimization is typically performed on the log-likelihood:
$$
\log P(X \mid \theta) = \log \sum_Z P(X, Z \mid \theta).
$$
The presence of the logarithm outside the sum prevents us from decomposing the expression into simpler terms. This makes direct optimization intractable in many cases.

This is precisely where the EM idea becomes useful.

---

### **Introducing an Auxiliary Objective**

Instead of maximizing the marginal likelihood directly, EM introduces an alternative objective that is easier to handle.

Given a current parameter estimate ( \theta^{(t)} ), we consider the conditional distribution of the hidden variables:
$$
P(Z \mid X, \theta^{(t)}).
$$
This distribution represents our current belief about the hidden structure.

Using this distribution, we define the function
$$
Q(\theta \mid \theta^{(t)}) = \mathbb{E}_{Z \mid X, \theta^{(t)}} \left[ \log P(X, Z \mid \theta) \right].
$$

This function can be interpreted as the expected complete-data log-likelihood under the current estimate of the hidden variables. Crucially, it is much easier to optimize than the original marginal likelihood.

---

### **The Expectation Step**

In the Expectation step, we compute the distribution $P(Z \mid X, \theta^{(t)})$ and use it to evaluate the function $Q(\theta \mid \theta^{(t)})$.

Conceptually, this corresponds to estimating the hidden variables given the current model. Instead of selecting a single configuration of $Z$, we consider all possible configurations and weight them according to their probability.

This step mirrors what we observed in the coin toss example, where each sequence contributed probabilistically to both coins.

---

### **The Maximization Step**

In the Maximization step, we update the parameters by maximizing the function $Q$:
$$
\theta^{(t+1)} = \arg\max_{\theta} Q(\theta \mid \theta^{(t)}).
$$

This step yields new parameter values that best explain the data under the current probabilistic assignments of the hidden variables.

In many cases, including motif discovery, this maximization has a simple form and corresponds to computing weighted averages or counts, as we saw earlier.

---

### **Why This Procedure Works**

At this point, the EM algorithm can be understood as transforming a difficult optimization problem into a sequence of simpler ones.

Instead of maximizing the marginal likelihood directly, we alternate between:

* estimating the hidden variables (E-step)
* optimizing the parameters given these estimates (M-step)

Each step simplifies the problem by temporarily fixing one aspect of the uncertainty.

A key property of this procedure is that it improves the likelihood of the observed data at each iteration, or at least does not decrease it . As a result, the algorithm converges to a stable solution.

---

### **From Formalism Back to Biology**

Although the notation may appear abstract, the underlying idea remains closely tied to the motif discovery problem.

* $X$ corresponds to the sequences
* $Z$ corresponds to the unknown motif positions
* $\theta$ corresponds to the motif model

The EM algorithm provides a principled way to estimate $\theta$ even though $Z$ is not observed. By iteratively refining both, it resolves the circular dependency identified earlier.

In the next section, we will examine the behavior of this procedure in more detail and interpret what the algorithm is optimizing during its iterations.

---

### **Self-Check Questions**

1. What is the difference between complete-data likelihood and marginal likelihood?
2. Why is the marginal likelihood difficult to optimize directly?
3. What does the function $Q(\theta \mid \theta^{(t)})$ represent?
4. What is computed in the E-step, and how should it be interpreted?
5. What is optimized in the M-step?
6. Why does EM improve the likelihood at each iteration?


