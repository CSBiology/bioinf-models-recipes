---
title: "14.5 Vector Fields: The Landscape of Biological Change"
sidebar:
  label: "14.5 Vector Fields: The Landscape of Biological Change"
  order: 5
  group: "Part 4"
  part: "Part 4"
---

## 14.5 Vector Fields: The Landscape of Biological Change

Representing a biological system as a point in state space tells us **where** the system is, but it does not tell us **where it will go next**.

Suppose we know the current transcript and protein concentrations of a cell. Can we predict how these concentrations will change in the next few seconds? Will transcript abundance increase or decrease? Will protein concentration continue to rise, or has it already reached its maximum?

Answering these questions requires more than knowing the current state. We must also know how the system changes at that state.

### Every state has a preferred direction

Imagine placing the system at an arbitrary point in state space. At this point, the biological interactions determine how transcript and protein concentrations will change. The system therefore has a preferred direction in which it will move next.

This direction can be represented by an **arrow**, or more formally, by a **vector**.

The orientation of the vector indicates the direction of change, whereas its length represents how rapidly the system changes. Long vectors correspond to rapid changes, whereas short vectors indicate slow dynamics.

Instead of describing only the current state of the system, we now describe its **tendency to change**.

### From individual vectors to a vector field

Of course, the biological system can occupy many different states.

At each of these states, the interactions between the biological components determine a different direction of change. Consequently, every point in state space is associated with its own vector.

The collection of all these vectors is called a **vector field**.

A vector field therefore provides a complete description of the local dynamics of a biological system. Wherever the system happens to be, the vector field specifies how it will evolve next.

Rather than following a single experiment, we now describe the behaviour of **all possible experiments simultaneously**.

### Trajectories emerge naturally

Once a vector field has been constructed, trajectories arise automatically.

Imagine releasing the system at some initial state. At every point along its path, the system simply follows the direction indicated by the local vector. As it moves into a new region of state space, it encounters a new vector that determines the next direction of motion.

Repeating this process generates a continuous trajectory through state space.

An important consequence is that trajectories cannot cross. If two trajectories intersected, the same state would have two different future directions. Since the biological interactions uniquely determine the direction of change, this is impossible for deterministic systems.

Every initial condition therefore produces exactly one trajectory through state space.

### Understanding perturbations

The vector field also provides a natural way to understand biological perturbations.

Suppose we experimentally remove part of the protein from the oscillating gene regulatory system introduced earlier. In state space, this intervention corresponds to moving the system to a different point. The biological interactions themselves have not changed—only the current state has.

Once the perturbation has been applied, the system simply follows the vectors associated with its new position.

This immediately explains why identical perturbations can produce different responses depending on when they are applied. Although the perturbation itself may be the same, the system starts from a different location in state space and therefore follows a different trajectory.

The behaviour is determined not only by the perturbation but also by the current state of the system.

### A new perspective on biological dynamics

Vector fields fundamentally change how we think about biological systems.

Instead of asking how one variable changes over time, we ask how the complete system moves through its possible states. Rather than analysing individual experiments, we analyse the entire landscape of possible behaviours.

This perspective provides a unified description of biological dynamics and prepares the foundation for constructing mathematical models. Once we know how biological interactions determine the direction of change, we can express these relationships mathematically and use them to predict system behaviour.

### Key concepts

- A vector describes the direction and speed of change at a particular state.
- Every point in state space is associated with a unique change vector.
- The collection of all change vectors forms the **vector field**.
- Biological trajectories arise by continuously following the vectors in the field.
- In deterministic systems, trajectories cannot cross because every state has a unique future direction.

### Summary

State space describes all possible states of a biological system, whereas the vector field describes how the system changes at each of these states. Together, they provide a geometric representation of biological dynamics that is independent of any particular experiment. By following the vectors from an initial state, trajectories emerge naturally, revealing how biological systems evolve over time. The remaining challenge is to determine where these vectors come from—a question answered by mathematical models.

### Self-check questions

1. Why is knowledge of the current state alone insufficient to predict future behaviour?
2. What biological information is represented by a vector?
3. What is a vector field?
4. Why can trajectories not intersect in deterministic systems?
5. Why does the response to a perturbation depend on the system's current state?