---
title: "16.5 When Equilibria Appear and Disappear"
sidebar:
  label: "16.5 When Equilibria Appear and Disappear"
  order: 5
  group: "Part 4"
  part: "Part 4"
---

## 16.5 When Equilibria Appear and Disappear

In the previous section, we developed a minimal mathematical model of the lac operon by balancing two competing biological processes: activation through positive feedback and degradation through dilution and protein turnover.

The equilibrium states of the system are determined by the intersections of these two processes,

\[
I(X)=R(X).
\]

As long as the biological parameters remain unchanged, these intersections remain fixed.

Real biological systems, however, rarely operate under constant conditions.

For the lac operon, one of the most important environmental parameters is the **external lactose concentration**. As more lactose becomes available, induction of the operon becomes increasingly efficient. Mathematically, this changes the activation function \(I(X)\), while the degradation function remains largely unaffected.

The question is therefore:

> **How does the equilibrium structure change as the environment changes?**

### Following the intersections

Figure XX shows the activation and degradation functions for different lactose concentrations.

When lactose availability is very low, the activation curve intersects the degradation curve only once. The operon therefore possesses a single stable equilibrium corresponding to the OFF state. Under these conditions, lactose metabolism remains inactive because the energetic cost of producing the required enzymes outweighs the potential benefit.

As the lactose concentration increases, the activation curve gradually shifts.

Eventually, two additional intersections appear. The system now possesses three equilibrium points.

The lower equilibrium corresponds to the inactive operon.

The upper equilibrium represents the fully induced operon.

Between them lies an unstable equilibrium that separates the two stable expression states.

The bacterium has become **bistable**.

Depending on its initial state and previous history, it may remain in either the OFF or the ON state even under identical environmental conditions.

### The disappearance of a stable state

If the lactose concentration continues to increase, the lower stable equilibrium and the unstable equilibrium gradually move closer together.

At a critical lactose concentration, both equilibria merge into a single point.

Beyond this point, they disappear completely.

The inactive state no longer exists.

The bacterium is therefore forced to switch to the active state because no alternative equilibrium remains.

Importantly, nothing dramatic happened to the environment.

Only a gradual increase in lactose concentration occurred.

The abrupt transition arises because the **structure of the dynamical system itself has changed**.

### A new type of transition

The disappearance of equilibrium points represents something fundamentally different from the phenomena discussed in the previous chapter.

Previously, we analysed systems whose equilibrium points remained fixed.

Now the equilibrium structure itself changes.

Stable states may appear.

Stable states may disappear.

Their stability may change.

The qualitative behaviour of the entire system is therefore altered.

Such transitions are known as **bifurcations**.

### Saddle-node bifurcations

The example above illustrates one of the most common types of bifurcation.

A stable equilibrium and a neighbouring unstable equilibrium approach one another, merge, and disappear as a parameter changes.

This phenomenon is called a **saddle-node bifurcation**.

Although introduced here using the lac operon, saddle-node bifurcations occur throughout biology.

Examples include

- collapse of ecological populations,
- failure of physiological homeostasis,
- activation of developmental programs,
- transitions between alternative metabolic states.

In every case, the underlying mathematical mechanism is the same.

A gradual change in a biological parameter removes a previously stable state, forcing the system to adopt a different behaviour.

### Beyond the lac operon

The importance of the saddle-node bifurcation extends far beyond this particular regulatory network.

The lac operon serves as a model system because its behaviour is easy to understand experimentally.

However, the same mathematical principle applies whenever positive feedback generates alternative stable states.

Mathematical abstraction therefore allows us to recognize common organizational principles shared by seemingly unrelated biological systems.

This is one of the greatest strengths of systems biology.

Rather than studying each biological system in isolation, we identify the dynamic principles that govern them all.

### Key concepts

- Changing a biological parameter alters the equilibrium structure of a system.
- The lac operon becomes bistable when activation and degradation intersect three times.
- Stable equilibria may disappear as parameters continue to change.
- The disappearance of a stable equilibrium forces the system into a different state.
- This process is called a **saddle-node bifurcation**.

### Summary

The minimal model of the lac operon demonstrates how gradual environmental changes can fundamentally alter the dynamics of a biological system. As the lactose concentration changes, the number and stability of equilibrium points also change. At a critical parameter value, a stable and an unstable equilibrium merge and disappear, forcing the system to transition to a new physiological state. This qualitative change in system behaviour is known as a saddle-node bifurcation and provides a general explanation for many biological switches.

### Self-check questions

1. Why does increasing lactose concentration change the activation function?
2. Under which conditions does the lac operon become bistable?
3. Why does the disappearance of a stable equilibrium force a biological switch?
4. What distinguishes a saddle-node bifurcation from ordinary equilibrium analysis?
5. Why is the lac operon a useful model system for understanding biological switches?