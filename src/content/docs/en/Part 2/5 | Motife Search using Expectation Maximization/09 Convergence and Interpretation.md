---
title: "5.9 Convergence and Interpretation"
sidebar:
  label: "5.9 Convergence and Interpretation"
  order: 9
  group: "Part 2"
  part: "Part 2"
---

# **5.9 Convergence and Interpretation**

### **Learning Objectives**

After reading this section, you should be able to:

* explain why the EM algorithm improves the likelihood at each iteration
* understand the idea of EM as optimizing a lower bound
* interpret convergence in terms of parameter stability
* recognize the role of local optima in EM
* understand EM as a method of probabilistic inference rather than hard assignment

---

### **Why Iteration Leads to Improvement**

In the previous section, we introduced the EM algorithm as an iterative procedure that alternates between estimating hidden variables and updating model parameters. A natural question now arises: why does this procedure work? More specifically, why does repeating these two steps lead to a meaningful solution?

A central property of the EM algorithm is that the likelihood of the observed data does not decrease from one iteration to the next. If we denote the parameter estimate at iteration ( t ) by ( \theta^{(t)} ), then the sequence
[
\log P(X \mid \theta^{(t)})
]
is monotonically increasing .

This property ensures that each iteration improves, or at least maintains, the quality of the model in terms of how well it explains the observed data.

---

### **A Lower-Bound Perspective**

To understand why this improvement occurs, it is helpful to revisit the function ( Q(\theta \mid \theta^{(t)}) ) introduced earlier.

This function can be interpreted as defining a *lower bound* on the true log-likelihood. At each iteration, the E-step constructs such a bound based on the current parameter estimate. The M-step then selects new parameters that maximize this bound.

One can think of this process geometrically. At the current parameter value ( \theta^{(t)} ), we construct a function that touches the true log-likelihood and lies below it everywhere else. By maximizing this auxiliary function, we move to a new parameter value ( \theta^{(t+1)} ) that improves the true log-likelihood.

This viewpoint explains why EM makes consistent progress: each step optimizes a function that is guaranteed to be a valid approximation of the true objective.

---

### **What Convergence Means**

The EM algorithm proceeds by repeating the E-step and M-step until the parameter estimates stabilize. In practice, this means that the change in the likelihood or in the parameters becomes negligibly small.

At this point, the algorithm has reached a *fixed point*. The current parameter values are consistent with the expected hidden variables, and further iterations do not lead to significant improvement.

It is important to note that convergence does not necessarily mean that the global optimum has been found. Rather, it indicates that the algorithm has reached a point where the local structure of the likelihood function no longer suggests further improvement.

---

### **The Role of Local Optima**

In many realistic problems, including motif discovery, the likelihood function may have multiple local maxima. The EM algorithm is guaranteed to converge to one of these, but not necessarily to the best possible one.

This means that the final result can depend on the initial parameter values. Different starting points may lead to different solutions, some of which may correspond more closely to the true underlying structure than others.

In practice, this limitation is often addressed by running the algorithm multiple times with different initializations and selecting the solution that achieves the highest likelihood.

---

### **Soft Assignments and Gradual Refinement**

An important conceptual feature of EM is its reliance on *soft assignments*. Instead of making definitive decisions about hidden variables, the algorithm maintains a probability distribution over possible configurations.

This allows the model to remain flexible during early iterations, when uncertainty is high. As the algorithm progresses, the probabilities often become more concentrated, reflecting increased confidence in the inferred structure.

This gradual refinement stands in contrast to approaches that rely on hard assignments, which may commit too early to incorrect solutions.

---

### **Returning to Motif Discovery**

In the context of motif discovery, these properties have direct implications.

* The monotonic improvement ensures that each iteration produces a motif model that better explains the observed sequences.
* The presence of local optima reflects the complexity of biological data, where multiple patterns may partially explain the observations.
* The use of soft assignments allows the algorithm to explore multiple candidate motif positions before converging on a consistent solution.

Together, these characteristics explain why EM is well suited for problems in which structure is hidden and must be inferred from noisy data.

In the next section, we will return fully to the biological setting and apply the EM framework directly to motif discovery, making the connection between the abstract algorithm and its practical use explicit.

---

### **Self-Check Questions**

1. Why does the EM algorithm improve the likelihood at each iteration?
2. What is meant by EM optimizing a lower bound of the log-likelihood?
3. What does convergence mean in the context of EM?
4. Why is EM not guaranteed to find the global optimum?
5. What are soft assignments, and why are they important?
6. How do these properties relate to motif discovery?

