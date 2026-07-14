## 19.8 The Chemical Master Equation: Modelling Probability Distributions

The previous sections introduced stochastic processes from two complementary perspectives.

One approach follows individual realizations of the system, such as the trajectory of a single random walk.

The other considers the collective behavior of many realizations, revealing smooth probability distributions and deterministic population dynamics.

Both perspectives are useful.

However, neither directly answers the following question:

> **How does the probability distribution itself change over time?**

The answer is provided by one of the central equations of stochastic systems biology:

the **Chemical Master Equation (CME).**

### From trajectories to probabilities

Consider a simple biochemical reaction inside a cell.

At any given moment, the cell contains a certain number of molecules of a particular protein.

In a deterministic model, we would calculate how this number changes continuously over time.

In a stochastic model, the exact number of molecules cannot be predicted.

Instead, we ask a different question.

> **What is the probability that the cell contains exactly 10 molecules?**

Or

> **What is the probability of observing 20 molecules?**

Or

> **How do these probabilities change with time?**

Instead of following one trajectory, we now follow the entire probability distribution.

### States and transitions

The Chemical Master Equation describes the dynamics of probabilities.

Each possible molecular configuration of the system represents a **state**.

Random biochemical reactions cause transitions between these states.

For example,

- synthesis increases the number of molecules by one,
- degradation decreases the number by one,
- binding reactions move the system into new molecular configurations.

Each reaction therefore transfers probability from one state to another.

Rather than tracking molecules directly, the Chemical Master Equation tracks how probability flows through the space of possible states.

### Probability flows

This idea closely resembles many deterministic balance equations encountered earlier in the book.

For concentrations we wrote

> rate of increase

minus

> rate of decrease.

The Chemical Master Equation follows exactly the same principle.

For each state,

the probability increases through transitions **into** the state,

and decreases through transitions **out of** the state.

Conceptually,

\[
\frac{dP}{dt}
=
\text{probability flowing in}
-
\text{probability flowing out}.
\]

The familiar modelling principle therefore remains unchanged.

Only the quantity being modelled has changed.

Instead of concentrations,

we now model **probabilities**.

### A new modelling perspective

This represents an important conceptual shift.

Deterministic models describe

- concentrations,
- populations,
- or other measurable quantities.

The Chemical Master Equation describes

- the probability of observing these quantities.

The model therefore predicts not one possible future,

but the evolution of an entire ensemble of possible futures.

### Why the Chemical Master Equation is important

Many biological systems contain only a small number of molecules.

Examples include

- transcription factors,
- regulatory RNAs,
- signaling molecules,
- or rare transcription events.

Under these conditions,

random fluctuations become biologically significant.

The Chemical Master Equation provides the mathematically rigorous description of these stochastic dynamics.

Many simulation algorithms—including the well-known **Gillespie algorithm**—can be understood as methods for generating individual realizations that are consistent with the Chemical Master Equation.

Thus,

the Chemical Master Equation describes the ensemble,

while stochastic simulations generate individual trajectories belonging to that ensemble.

### Connecting deterministic and stochastic models

The Chemical Master Equation also reveals an important relationship between deterministic and stochastic modelling.

When molecule numbers become very large,

the probability distribution becomes increasingly narrow.

Random fluctuations average out,

and the expectation value follows the deterministic rate equations introduced in previous chapters.

The deterministic models are therefore not separate theories.

They emerge naturally as large-number approximations of the underlying stochastic dynamics.

This illustrates one of the central themes of mathematical biology.

Different mathematical models often describe the same biological system at different levels of abstraction.

### Looking ahead

The Chemical Master Equation completes the transition from deterministic to stochastic modelling.

We can now describe

- individual stochastic trajectories,
- ensembles of trajectories,
- and the evolution of the entire probability distribution.

The remaining challenge is deciding **which modelling framework is appropriate for a particular biological problem.**

This question forms the basis of the modelling lessons that conclude this chapter.

### Key concepts

- The Chemical Master Equation describes the time evolution of probability distributions.
- Each molecular configuration corresponds to one state of the system.
- Random biochemical reactions transfer probability between states.
- The Chemical Master Equation models probability flows rather than concentration changes.
- Stochastic simulations generate realizations that are consistent with the Chemical Master Equation.
- Deterministic models emerge as approximations when molecule numbers become large.

### Summary

The Chemical Master Equation provides a rigorous mathematical framework for describing stochastic biochemical systems. Instead of predicting one trajectory, it models how the probability of every possible system state changes over time. Random reactions transfer probability between states, allowing the evolution of the complete probability distribution to be calculated. At large molecule numbers, these stochastic descriptions naturally converge toward deterministic rate equations.

### Self-check questions

1. What quantity is described by the Chemical Master Equation?
2. What is meant by a state in the Chemical Master Equation?
3. How do biochemical reactions change the probability distribution?
4. Why does the Chemical Master Equation resemble a balance equation?
5. How is the Gillespie algorithm related to the Chemical Master Equation?
6. Why do deterministic rate equations emerge for large molecule numbers?