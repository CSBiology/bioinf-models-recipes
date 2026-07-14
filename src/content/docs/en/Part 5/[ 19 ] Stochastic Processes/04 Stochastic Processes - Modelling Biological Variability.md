## 19.4 Stochastic Processes: Modelling Biological Variability

The Luria–Delbrück experiment demonstrated that biological systems cannot always be understood by considering only average behavior.

Instead, repeated experiments produce a range of possible outcomes, each occurring with a certain probability.

To describe such systems mathematically, we require a new modelling framework.

Rather than predicting a single trajectory, we must describe an entire collection of possible trajectories together with the probability that each one occurs.

This framework is known as a **stochastic process**.

### From deterministic trajectories to stochastic trajectories

Throughout the previous chapters, every model produced a unique prediction.

Given

- the governing equations,
- the parameter values,
- and the initial conditions,

only one future trajectory was possible.

A stochastic model behaves differently.

Even when two simulations begin from exactly the same initial state, they need not produce identical trajectories.

Instead, each simulation represents one possible realization of the underlying stochastic process.

Running the model repeatedly therefore produces many different trajectories.

Some occur frequently.

Others are rare.

The goal of stochastic modelling is not to predict which individual trajectory will occur.

Instead, it aims to predict the probability of observing different trajectories.

### What is a stochastic process?

A **stochastic process** is a mathematical model describing how a system evolves when some of its transitions occur randomly.

At every point in time, the system occupies one of many possible states.

The transition to the next state is no longer completely determined.

Instead, several outcomes are possible, each associated with a particular probability.

The future therefore cannot be predicted exactly.

It can only be described probabilistically.

This does not mean that the model itself is vague or imprecise.

On the contrary, the probabilities governing the transitions are specified explicitly.

Randomness is therefore incorporated directly into the mathematical description of the system.

### One trajectory is one realization

An important distinction should be made between

- the stochastic process itself,
- and one observed trajectory.

A single experimental measurement corresponds to only one realization of the process.

Different experiments generate different realizations.

Some trajectories may exhibit unusually early events.

Others may remain close to the average.

All are consistent with the same stochastic model.

This perspective explains why repeated biological experiments often produce different observations without contradicting one another.

Each experiment samples a different realization of the same underlying stochastic process.

### Ensembles of trajectories

Instead of analyzing a single trajectory, stochastic modelling often considers an **ensemble** of many independent realizations.

Each trajectory represents one possible history of the system.

Taken together, the ensemble reveals the probability distribution of possible outcomes.

This idea represents one of the fundamental conceptual differences between deterministic and stochastic modelling.

In deterministic systems,

> one trajectory completely describes the system.

In stochastic systems,

> only an ensemble of trajectories reveals the full behavior.

### Describing uncertainty mathematically

Once we accept that biological systems generate many possible trajectories, several natural questions arise.

How likely is a particular outcome?

How large is the expected variability?

Which outcomes occur most frequently?

Answering these questions requires mathematical tools for describing probability distributions.

Before constructing stochastic models, we therefore need to introduce the basic language of probability theory.

### Key concepts

- Stochastic models generate many possible trajectories.
- Each trajectory is one realization of the underlying stochastic process.
- Repeated simulations produce an ensemble of possible system histories.
- Stochastic models predict probabilities rather than individual trajectories.
- Probability theory provides the mathematical language for describing biological variability.

### Summary

A stochastic process describes systems whose evolution includes random events. Unlike deterministic models, which predict a single trajectory, stochastic models generate an ensemble of possible trajectories, each associated with a particular probability. Individual experiments correspond to single realizations of the stochastic process, while the complete ensemble reveals the underlying probability distribution.

### Self-check questions

1. What distinguishes a stochastic process from a deterministic dynamical system?
2. Why can identical stochastic simulations produce different trajectories?
3. What is meant by a realization of a stochastic process?
4. Why are ensembles important in stochastic modelling?
5. What is the primary prediction of a stochastic model?
6. Why do stochastic models naturally require probability theory?