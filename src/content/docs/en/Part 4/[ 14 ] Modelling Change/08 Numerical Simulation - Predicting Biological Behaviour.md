---
title: "14.8 Numerical Simulation - Predicting Biological Behaviour"
sidebar:
  label: "14.8 Numerical Simulation - Predicting Biological Behaviour"
  order: 8
  group: "Part 4"
  part: "Part 4"
---

## 14.8 Numerical Simulation - Predicting Biological Behaviour

Once a mathematical model has been formulated, the next question is how it can be used to predict the behaviour of a biological system.

For simple models, it is sometimes possible to solve the differential equations analytically and obtain an explicit mathematical expression describing the system over time. However, most biological systems are far too complex for this approach. Even relatively small gene regulatory networks often produce equations that cannot be solved exactly.

Fortunately, an exact analytical solution is often unnecessary. Instead, we can **simulate** the behaviour of the system numerically.

### From equations to simulations

A differential equation describes how rapidly a biological quantity changes at every instant in time. Rather than calculating the entire trajectory at once, we can therefore predict the future behaviour of the system step by step.

Suppose we know the current state of the system at time \(t\). The differential equation tells us how rapidly each state variable is changing at that moment. If we advance only a very short time into the future, these rates of change allow us to estimate the new state of the system.

Repeating this procedure many times gradually reconstructs the entire trajectory through state space.

Instead of solving the equations exactly, we allow the computer to follow the biological dynamics one small step at a time.

### The idea behind Euler's method

The simplest numerical simulation algorithm is **Euler's method**.

The idea is remarkably intuitive. Imagine walking through a landscape while only being able to see a few metres ahead. At every step, you determine the local direction of the path and move a short distance in that direction. Once you reach the new position, you again determine the local direction and repeat the process.

Euler's method applies exactly the same principle to biological systems.

Starting from a known initial state, the model calculates the current rate of change. This information is then used to estimate the state a short time later. The procedure is repeated until the desired simulation time has been reached.

The algorithm can be summarized in four steps:

1. Choose an initial state of the biological system.
2. Calculate the current rates of change from the differential equations.
3. Advance the system by a small time step.
4. Repeat the procedure using the newly calculated state.

Although conceptually simple, this procedure allows us to simulate systems containing hundreds or even thousands of interacting variables.

### Why small time steps matter

Euler's method approximates a continuously changing trajectory by many small linear steps.

If the chosen time step is too large, each step deviates noticeably from the true trajectory, and the accumulated error can become substantial.

Reducing the time step improves the approximation because the system has less opportunity to change between successive calculations. In the limit of infinitely small time steps, the numerical solution approaches the exact solution of the differential equation.

In practice, modern simulation software automatically chooses suitable time steps and often employs algorithms that are considerably more accurate than the basic Euler method. Nevertheless, Euler's method remains one of the most important concepts because it illustrates the fundamental principle behind numerical simulation.

### Why simulation is so powerful

Simulation transforms a mathematical model into a virtual biological experiment.

Once a model has been constructed, we can investigate questions that may be difficult—or even impossible—to study experimentally.

For example, we can ask:

- How does the system respond to the removal of a protein?
- What happens if a degradation rate is doubled?
- Which parameters have the strongest influence on system behaviour?
- Under which conditions does the system remain stable or begin to oscillate?

Instead of manipulating a living organism directly, we first explore these questions computationally. The resulting predictions can then guide experimental design and help identify the most informative experiments.

Simulation therefore serves as an essential bridge between mathematical modelling and experimental biology.

### Key concepts

- Most biological models cannot be solved analytically.
- Numerical simulation predicts system behaviour by repeatedly calculating small changes over time.
- Euler's method is the simplest algorithm for simulating ordinary differential equations.
- Smaller time steps generally produce more accurate simulations.
- Simulations enable virtual experiments that complement laboratory observations.

### Summary

Differential equations describe how biological systems change, but numerical simulation allows us to observe these changes over time. Rather than solving complex equations analytically, simulation algorithms repeatedly calculate small changes in the system and thereby reconstruct its trajectory through state space. This approach forms the basis of modern computational systems biology and enables the investigation of biological systems that are too complex for analytical treatment.

### Self-check questions

1. Why can most biological models not be solved analytically?
2. What is the basic idea behind numerical simulation?
3. How does Euler's method predict the future state of a biological system?
4. Why does reducing the simulation time step improve accuracy?
5. Why are simulations valuable tools for biological research?