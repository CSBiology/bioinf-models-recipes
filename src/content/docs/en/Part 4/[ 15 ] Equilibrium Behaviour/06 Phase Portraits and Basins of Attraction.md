## 15.6 Phase Portraits and Basins of Attraction

So far, we have analysed individual equilibrium points and determined whether they are stable or unstable. While this provides valuable information, it still leaves an important question unanswered.

**How does the complete system behave?**

In the previous chapter, we introduced state-space representations and vector fields to describe the dynamics of biological systems. Every initial condition generated its own trajectory through state space. However, real biological systems can start from many different initial conditions. To understand the overall behaviour of the system, we must therefore consider **all possible trajectories simultaneously**.

### Phase portraits summarize system behaviour

A **phase portrait** is a graphical representation of the trajectories of a dynamical system in state space.

Instead of showing how a single experiment evolves over time, a phase portrait displays the behaviour of many trajectories starting from different initial conditions. Together, these trajectories reveal the global organization of the dynamical system.

Equilibrium points immediately become visible as locations where trajectories either converge or diverge. Stable equilibria attract nearby trajectories, whereas unstable equilibria repel them.

Rather than analysing one simulation at a time, the phase portrait provides a comprehensive overview of all possible system behaviours.

### Attractors

Stable equilibria are often called **attractors** because nearby trajectories are attracted towards them.

This terminology reflects an important biological concept.

An attractor does not actively pull the system towards itself. Instead, the underlying biological interactions continuously guide the system back towards the stable state after perturbations.

Many biological systems can therefore be viewed as moving through state space until they eventually settle into one of their attractors.

Examples include

- differentiated cell types with stable gene expression patterns,
- homeostatic physiological states,
- stable ecological communities,
- steady metabolic states.

Although these systems differ biologically, they all correspond to stable attractors in state space.

### Basins of attraction

Not every initial condition converges to the same attractor.

Instead, each attractor possesses its own **basin of attraction**.

The basin of attraction consists of all initial states from which the system eventually reaches a particular attractor.

An intuitive analogy is that of a mountainous landscape after rainfall. Every raindrop eventually flows into one of several valleys. Which valley it reaches depends entirely on where the raindrop initially falls.

Similarly, the long-term behaviour of a biological system depends on its initial state. Different starting conditions may lead to entirely different stable outcomes.

### Biological interpretation

Basins of attraction provide a powerful way of thinking about biological decision making.

Consider stem cell differentiation.

Initially, a stem cell has the potential to develop into multiple cell types. As regulatory interactions change, the system gradually moves towards one particular attractor corresponding to a differentiated cell type. Once this attractor has been reached, small perturbations are insufficient to change the cell's identity.

A similar concept applies to ecological systems.

A disturbed ecosystem may recover to its original stable state if the disturbance remains within the basin of attraction. However, if the perturbation pushes the system beyond the basin boundary, recovery may no longer be possible, and the ecosystem may instead converge to an entirely different equilibrium.

Basins of attraction therefore determine not only where biological systems can exist but also how resilient they are to perturbations.

### Visualizing robustness

Phase portraits reveal several important properties of biological systems at a glance.

They show

- where equilibrium points are located,
- whether these equilibria are stable or unstable,
- how trajectories evolve over time,
- which initial conditions converge to the same attractor,
- and where the boundaries between alternative biological outcomes lie.

For this reason, phase portraits are among the most informative visualizations in dynamical systems theory.

They allow us to understand the behaviour of an entire biological model without following individual simulations separately.

### Key concepts

- A phase portrait summarizes the trajectories of a dynamical system in state space.
- Stable equilibria act as attractors that draw nearby trajectories towards them.
- A basin of attraction contains all initial states that converge to the same attractor.
- Different initial conditions may therefore produce different long-term biological outcomes.
- Phase portraits provide a global view of system behaviour and biological robustness.

### Summary

Phase portraits provide a comprehensive visualization of biological dynamics by displaying many trajectories simultaneously. Stable equilibria appear as attractors, while basins of attraction define the regions of state space that converge towards the same long-term behaviour. Together, these concepts provide a powerful framework for understanding robustness, resilience, and biological decision making. They also prepare the transition from one-dimensional systems to the richer dynamics that emerge in higher-dimensional models.

### Self-check questions

1. What information does a phase portrait provide that cannot be obtained from a single trajectory?
2. What is an attractor?
3. What is meant by a basin of attraction?
4. Why can different initial conditions produce different long-term outcomes?
5. How can basins of attraction help explain biological robustness and resilience?