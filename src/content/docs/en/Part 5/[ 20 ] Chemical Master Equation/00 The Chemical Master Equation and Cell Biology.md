# 20 The Chemical Master Equation and Cell Biology

Living cells are fundamentally stochastic systems. Every second, thousands of molecular interactions occur inside a cell, and many of these events are governed by chance. A transcription factor may bind to DNA—or it may not. An mRNA molecule may be degraded now or several minutes later. A ribosome may initiate translation immediately or after a random delay.

Despite this microscopic randomness, populations of cells often display remarkably reproducible statistical behavior. Individual cells differ, yet their distributions follow well-defined mathematical laws.

How can we describe such systems mathematically?

Deterministic differential equations are highly successful when molecule numbers are large and random fluctuations average out. However, they become insufficient whenever the discrete nature of molecular events becomes important. In these situations, we need a different mathematical framework—one that no longer predicts the exact trajectory of a single cell but instead describes how the probabilities of different cellular states evolve over time.

This framework is known as the Chemical Master Equation.

Rather than following one realization of a stochastic process, the Chemical Master Equation describes the dynamics of an entire probability distribution. As we will see throughout this chapter, this seemingly subtle change in perspective provides a powerful link between molecular mechanisms, experimental measurements, and mathematical models.

