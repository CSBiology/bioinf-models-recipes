## 15.3 Equilibrium Points: Where Biological Change Stops

The examples of carrying capacity and the Allee effect suggest that biological systems often evolve towards preferred states. Regardless of their initial conditions, populations may eventually stabilize at a characteristic size. Similar behaviour is observed in many other biological systems, from metabolite concentrations to gene regulatory networks.

How can we identify these preferred states mathematically?

Rather than simulating the behaviour of the system over long periods, we can examine the differential equation itself. This allows us to determine the states at which the system no longer changes.

### When does a system stop changing?

In Chapter 14, we introduced ordinary differential equations as mathematical descriptions of biological change. For a one-dimensional system, the general form is

\[
\frac{dX}{dt}=f(X),
\]

where \(X\) is the state variable and \(f(X)\) describes its rate of change.

An **equilibrium point** is simply a state at which this rate of change becomes zero:

\[
\frac{dX}{dt}=0.
\]

At an equilibrium, the state variable no longer changes because all opposing biological processes exactly balance one another.

For a population model, births are exactly balanced by deaths. In a metabolic system, metabolite production equals metabolite consumption. In a gene regulatory network, transcript synthesis equals transcript degradation.

Although these systems remain biologically active, their observable state remains constant.

### Equilibria in the Allee model

The Allee effect provides an intuitive example of equilibrium behaviour.

As we saw in the previous section, populations that are very small may decline because individuals cannot reproduce efficiently, whereas very large populations are limited by competition for resources.

As a consequence, the Allee model possesses three equilibrium points.

The first equilibrium occurs at

\[
X=0,
\]

corresponding to population extinction.

The second equilibrium occurs at the **critical population size**, usually denoted by \(A\). This point separates populations that recover from those that continue to decline.

The third equilibrium occurs at the **carrying capacity**, \(K\), where births and deaths balance and the population remains approximately constant.

These three equilibria arise directly from the biological assumptions built into the model.

### Equilibrium points are not all the same

Finding an equilibrium point tells us only that the system can remain there.

It does **not** tell us whether the system will actually remain there after a disturbance.

Imagine balancing a marble on top of a hill. At the very top, the marble does not move, so this position is technically an equilibrium. However, the slightest perturbation causes the marble to roll away.

Now imagine placing the marble in a bowl. Again, the marble eventually comes to rest, but this time a small disturbance simply causes it to roll back towards the bottom.

Both positions are equilibria because the system is not changing.

Their behaviour after a perturbation, however, is fundamentally different.

This distinction leads to one of the most important concepts in dynamical systems: **stability**.

### Why equilibrium analysis is useful

Equilibrium analysis allows us to understand the long-term behaviour of biological systems without performing extensive simulations.

Instead of calculating thousands of trajectories, we first identify the possible equilibrium states and then determine whether these states are stable or unstable.

This approach provides powerful biological insights.

Will a population recover after a disturbance?

Can a cell maintain its differentiated state?

Will a signalling pathway return to its resting state after activation?

All of these questions depend not only on the existence of equilibria but also on their stability.

In the next section, we will investigate how stable and unstable equilibria can be distinguished.

### Key concepts

- An equilibrium point is a state at which the rate of change of the system is zero.
- Equilibria arise when opposing biological processes exactly balance one another.
- The Allee model contains three equilibrium points: extinction, the critical threshold, and the carrying capacity.
- The existence of an equilibrium does not imply that it is biologically stable.
- Equilibrium analysis provides insight into the long-term behaviour of biological systems.

### Summary

Equilibrium points represent states in which biological systems no longer change because competing processes are perfectly balanced. These states can often be identified directly from the differential equations without performing numerical simulations. The Allee effect provides an intuitive example of a system with multiple equilibria, illustrating that biological systems may possess several possible long-term outcomes. However, identifying an equilibrium is only the first step. To understand biological behaviour, we must also determine whether these equilibria are stable or unstable.

### Self-check questions

1. What is the mathematical definition of an equilibrium point?
2. Why can an equilibrium still represent an active biological system?
3. Which three equilibrium points occur in the Allee model?
4. Why is finding an equilibrium point not sufficient to predict system behaviour?
5. What biological questions can be answered using equilibrium analysis?