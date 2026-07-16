---
title: "14.4 Thinking in States Instead of Time"
sidebar:
  label: "14.4 Thinking in States Instead of Time"
  order: 4
  group: "Part 4"
  part: "Part 4"
---

## 14.4 Thinking in States Instead of Time

So far, we have described biological dynamics by plotting individual variables as functions of time. Such **time-series plots** are intuitive and widely used in biology because they directly show how the abundance of a molecule changes during an experiment.

For example, in the previous section we followed the concentrations of a transcript and its corresponding protein over time. From these curves, we could observe that the two molecules oscillate with a characteristic phase shift. Time-series data are therefore extremely valuable for identifying dynamic behaviour.

However, they also have an important limitation.

### The limitations of time-series plots

Biological systems rarely consist of a single changing variable. Even a simple gene regulatory circuit contains transcripts, proteins, metabolites, signalling molecules, and many other interacting components. Plotting each variable separately quickly becomes confusing, especially when we wish to understand how these variables influence one another.

More importantly, time-series plots tell us **what happens**, but they often make it difficult to understand **why it happens**.

Consider again the perturbation experiment from the previous section. Removing protein from an oscillating system can produce very different responses depending on the exact moment at which the perturbation occurs. Looking only at the protein concentration over time does not immediately explain why identical perturbations lead to different outcomes.

To understand the behaviour of the complete system, we need a representation that describes all relevant variables simultaneously.

### The state of a biological system

At any given moment, a biological system is characterized by the values of its measurable quantities. These quantities are called **state variables** because together they define the current state of the system.

The choice of state variables depends on the biological question being investigated.

For the simple gene regulatory system introduced earlier, two variables are sufficient:

- transcript abundance,
- protein abundance.

Together, these two quantities completely describe the state of the model. At every point in time, the system occupies one particular combination of transcript and protein concentrations.

More complex systems naturally require additional state variables. A metabolic model may include dozens of metabolite concentrations, whereas ecological models may describe the abundances of multiple interacting species. Regardless of the number of variables, the underlying idea remains the same: the state variables provide the minimum information required to predict how the system will evolve.

### From time to state space

Once the state variables have been defined, we no longer need to view them separately as functions of time. Instead, we can treat them as coordinates in a geometric space.

For the gene regulation example, transcript abundance defines one axis and protein abundance defines the other. Every possible combination of transcript and protein concentrations corresponds to one point in this two-dimensional space.

This geometric representation is called the **state space**.

As time progresses, the system moves from one point to another. Instead of observing two separate curves, we now observe the motion of a single point through state space.

This change of perspective is surprisingly powerful. Rather than asking how each variable changes individually, we begin to ask how the **entire system** moves through its possible states.

### Trajectories describe biological behaviour

The path followed by the system through state space is called a **trajectory**.

Every trajectory represents one possible history of the biological system. Different initial conditions produce different trajectories, but each trajectory describes the coordinated evolution of all state variables simultaneously.

For oscillatory systems, the trajectory often forms a closed loop. Instead of repeatedly inspecting individual time-series plots, we immediately recognize that the system cycles through the same sequence of states over and over again.

The trajectory therefore captures the behaviour of the complete biological system in a single geometric object.

### Why state space matters

Representing biological systems in state space fundamentally changes the questions we can ask.

Instead of studying individual molecular concentrations, we now investigate how entire biological systems move through their possible states.

This perspective allows us to compare different initial conditions, understand the effects of perturbations, identify stable and unstable behaviours, and eventually explain why some systems return to equilibrium whereas others oscillate or switch into entirely different states.

To answer these questions, however, we must still determine **how the system knows where to move next**.

This requires one final ingredient: a mathematical description of the direction of change at every point in state space.

### Key concepts

- Time-series plots describe how individual biological variables change over time.
- A **state** is defined by the values of all state variables at a given moment.
- State variables are the quantities required to describe the behaviour of a biological system.
- State space represents every possible state of the system as a point in a geometric space.
- The evolution of a biological system corresponds to a trajectory through state space.

### Summary

Time-series plots provide valuable information about individual biological variables, but they often fail to reveal the behaviour of the system as a whole. State-space representations overcome this limitation by describing the complete biological state at every moment in time. As the system evolves, it traces out a trajectory through state space, providing a unified description of biological dynamics and preparing the foundation for analysing how systems change.

### Self-check questions

1. What is meant by the state of a biological system?
2. What determines the choice of state variables?
3. Why are time-series plots often insufficient for understanding complex biological systems?
4. How is state space constructed from state variables?
5. What biological information is represented by a trajectory?