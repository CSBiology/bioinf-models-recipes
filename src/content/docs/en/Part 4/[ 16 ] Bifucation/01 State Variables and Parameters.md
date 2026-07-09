## 16.1 State Variables and Parameters

In the previous chapters, we described biological systems using **state variables** such as protein concentrations, population sizes, or metabolite abundances. These variables changed continuously over time as the system evolved according to its underlying biological interactions.

Throughout this analysis, however, one important aspect remained fixed. The biological rules governing the system—the synthesis rates, degradation rates, reaction constants, or environmental conditions—did not change. These quantities are called **parameters**.

Understanding the difference between state variables and parameters is essential because they play fundamentally different roles in mathematical models.

### State variables describe the current state

A **state variable** describes the current condition of the biological system.

Its value changes continuously during the simulation as the biological processes unfold.

Examples of state variables include

- the concentration of a protein,
- the abundance of a transcript,
- the number of individuals in a population,
- the concentration of a metabolite,
- the viral load during an infection.

At every moment, the collection of all state variables defines the current **state** of the biological system. As we learned in Chapter 14, this state corresponds to a point moving through state space.

### Parameters describe the biological system

In contrast, **parameters** describe the biological properties that determine how the system behaves.

Unlike state variables, parameters usually remain constant during a single simulation. They define the rules governing the dynamics rather than the current state itself.

Examples include

- transcription rates,
- degradation constants,
- enzyme activities,
- binding affinities,
- carrying capacities,
- environmental temperature,
- nutrient availability.

Changing a parameter does not move the system to a different point in state space. Instead, it changes the shape of the vector field itself and therefore alters the way the entire system evolves.

### An example from population biology

The distinction becomes particularly clear in the logistic growth model

\[
\frac{dN}{dt}=rN\left(1-\frac{N}{K}\right),
\]

where \(N\) denotes the population size.

The population size \(N\) is the **state variable** because it changes continuously over time.

The intrinsic growth rate \(r\) and the carrying capacity \(K\) are **parameters**. During a simulation, they remain fixed and determine how rapidly the population grows and the equilibrium towards which it converges.

If the initial population size changes, the trajectory through state space changes, but the underlying model remains the same.

If the carrying capacity changes, the model itself changes. The location of the equilibrium shifts because the biological environment has been altered.

This distinction is illustrated schematically in Figure XX.

### Why parameters matter

Changing the initial conditions answers the question:

> **What happens if the system starts from a different state?**

Changing a parameter answers a fundamentally different question:

> **What happens if the biological system itself changes?**

These two questions should never be confused.

Changing the initial population size of an ecosystem does not alter the ecosystem itself.

Changing the carrying capacity, however, modifies the environment and therefore changes the rules governing population growth.

Similarly, changing the initial concentration of a transcription factor does not alter the gene regulatory network. In contrast, mutating the promoter of a gene changes the regulatory interactions themselves and therefore modifies the underlying dynamical system.

### Parameters drive biological transitions

Many biological processes are ultimately controlled by slowly varying parameters.

Temperature gradually changes during the day.

Nutrient concentrations increase or decrease.

Hormone levels vary during development.

Mutations alter enzyme activities.

Stress changes signalling strengths.

As these parameters vary, the behaviour of the biological system may also change.

Most of the time, these changes are gradual. Occasionally, however, a very small parameter change produces a dramatic shift in system behaviour. Stable equilibria may disappear, new equilibria may emerge, or the stability of existing states may change completely.

These qualitative transitions form the subject of **bifurcation theory**.

### Key concepts

- State variables describe the current state of a biological system and change continuously during a simulation.
- Parameters describe the biological properties governing the system and are typically held constant during a simulation.
- Changing a state variable alters the trajectory through state space.
- Changing a parameter modifies the vector field and therefore changes the behaviour of the entire system.
- Bifurcation theory investigates how changes in parameters alter the qualitative behaviour of biological systems.

### Summary

State variables and parameters play fundamentally different roles in dynamic models. State variables describe the current condition of a biological system and determine its position in state space, whereas parameters define the biological rules governing its behaviour. Altering the initial values of state variables changes the trajectory followed by the system, while changing parameters modifies the underlying dynamics themselves. Understanding this distinction provides the conceptual foundation for studying bifurcations, where gradual parameter changes lead to qualitative transitions in system behaviour.

### Self-check questions

1. What is the difference between a state variable and a parameter?
2. Give three examples of state variables and three examples of parameters.
3. Why does changing a parameter affect the entire vector field?
4. Why should changing an initial condition not be confused with changing a parameter?
5. Why are parameters central to the study of bifurcations?