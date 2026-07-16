---
title: "19.5 Describing Biological Variability with Probability"
sidebar:
  label: "19.5 Describing Biological Variability with Probability"
  order: 5
  group: "Part 5"
  part: "Part 5"
---

## 19.5 Describing Biological Variability with Probability

The previous section introduced stochastic processes as mathematical models that generate many possible trajectories rather than a single deterministic prediction.

To analyze these trajectories quantitatively, we need a language for describing uncertainty.

This language is provided by **probability theory**.

Probability theory allows us to answer questions such as

- How likely is a particular observation?
- Which outcomes occur most frequently?
- What is the average behavior?
- How much variability should we expect between repeated experiments?

These concepts form the foundation of stochastic modelling.

### Random variables

In deterministic models, every state variable has a well-defined value at any given time.

For example, an ordinary differential equation predicts a unique concentration of a protein after ten minutes.

In stochastic models, this is no longer true.

Instead, several different outcomes are possible.

To describe this uncertainty, we introduce the concept of a **random variable**.

A random variable is a quantity whose value is determined by a random process.

Examples include

- the number of mRNA molecules in a cell,
- the time until a cell divides,
- the number of resistant bacteria in a culture,
- or the position of a diffusing molecule.

Although the exact value cannot be predicted in advance, the probability of different outcomes can often be described very precisely.

### Probability distributions

A random variable is characterized by its **probability distribution**.

The probability distribution specifies how likely each possible outcome is.

For example, imagine measuring the number of resistant colonies in many independent bacterial cultures.

Some cultures may contain no resistant colonies.

Others may contain one or two.

A few may contain many because of an early mutation event.

The probability distribution summarizes all of these possibilities.

Rather than describing one experiment, it describes the expected outcomes of **many repeated experiments**.

This distinction is fundamental.

A single experiment represents one realization.

The probability distribution represents the behavior of the entire stochastic process.

### Expectation value

Although individual outcomes vary, it is often useful to summarize the typical behavior of a stochastic system.

The most familiar summary statistic is the **expectation value**, or expected value.

The expectation value represents the average outcome that would be observed if the experiment were repeated many times.

Importantly, the expectation value is **not necessarily equal to the outcome of any individual experiment**.

Instead, it characterizes the center of the probability distribution.

Deterministic models usually predict something similar to the expectation value of the corresponding stochastic system.

However, as the Luria–Delbrück experiment demonstrated, the expectation value alone is often insufficient to distinguish between competing biological mechanisms.

### Variance

Two stochastic systems may have exactly the same expectation value while exhibiting completely different degrees of variability.

To quantify this variability, we introduce the **variance**.

The variance measures how strongly the observations fluctuate around the expectation value.

A small variance indicates that repeated experiments produce very similar results.

A large variance indicates substantial variability between experiments.

The importance of the variance becomes immediately apparent when comparing deterministic and stochastic models.

A deterministic model predicts

- one trajectory,
- one outcome,
- and therefore effectively zero variability.

A stochastic model predicts

- many possible trajectories,
- many possible outcomes,
- and therefore a non-zero variance.

The variance therefore contains biological information that is absent from deterministic descriptions.

### Common probability distributions

Different biological processes generate different probability distributions.

Several distributions appear repeatedly in systems biology.

The **Bernoulli distribution** describes experiments with only two possible outcomes, such as whether a mutation occurs during a single cell division.

The **Binomial distribution** extends this idea to repeated independent events, for example the number of successful reactions among many identical trials.

The **Poisson distribution** plays a particularly important role in molecular biology.

It describes the probability of observing a certain number of independent random events within a fixed interval.

Examples include

- the number of transcription events,
- the arrival of photons,
- or the number of mutations occurring during a given period.

Because many intracellular processes involve rare and independent events, the Poisson distribution appears naturally in numerous stochastic biological models.

### Probability distributions reveal mechanisms

The concepts introduced here complete the lesson of the Luria–Delbrück experiment.

The expectation value describes the average behavior.

The variance quantifies the variability.

The complete probability distribution captures the full range of possible outcomes.

Different biological mechanisms may produce similar expectation values while generating fundamentally different variances and probability distributions.

Consequently, understanding biological variability requires analyzing the entire distribution rather than relying solely on average behavior.

### Looking ahead

Probability theory provides the language for describing stochastic systems.

The next question is how such probability distributions emerge from simple random events.

To answer this question, we begin with one of the simplest stochastic models in mathematics:

the **random walk**.

Despite its simplicity, the random walk forms the basis for understanding diffusion, molecular motion, chemotaxis, and many other stochastic processes in biology.

### Key concepts

- Random variables describe quantities whose values are determined by stochastic processes.
- Probability distributions characterize the likelihood of different outcomes.
- The expectation value summarizes the average behavior of repeated experiments.
- The variance quantifies the variability around the expectation value.
- Different biological mechanisms may produce similar averages but different probability distributions.
- Probability distributions provide the foundation for stochastic modelling.

### Summary

Probability theory provides the mathematical language needed to describe biological variability. Random variables represent uncertain biological quantities, while probability distributions characterize the likelihood of different outcomes. The expectation value summarizes the average behavior of repeated experiments, whereas the variance measures their variability. Together, these concepts allow stochastic models to predict entire distributions rather than single trajectories, providing a much richer description of biological systems.

### Self-check questions

1. What distinguishes a random variable from a deterministic state variable?
2. What information is contained in a probability distribution?
3. Why does the expectation value not necessarily describe an individual experiment?
4. What does the variance measure?
5. Why are averages often insufficient for distinguishing biological mechanisms?
6. Which biological processes are commonly described by a Poisson distribution?