## 15.1 Why do biological systems reach stable states?

Dynamic models describe how biological systems change over time. They allow us to predict how transcript levels respond to regulation, how populations grow or decline, and how signaling pathways react to external stimuli. In the previous chapter, we developed the mathematical framework required to describe these processes using state variables, vector fields, and differential equations.

Once such a model has been constructed, however, a new question naturally arises.

**What happens in the long run?**

Do biological systems continue changing indefinitely, or do they eventually settle into stable states? Why do some perturbations disappear while others permanently alter the behaviour of the system? Under which conditions does a biological system return to its original state after a disturbance, and when does it transition into a completely different one?

Answering these questions requires analysing the model itself rather than simply simulating its behaviour. Instead of following individual trajectories through state space, we now seek to identify the general dynamic properties shared by all possible trajectories.

The central concept of this chapter is the **equilibrium point**. Equilibria represent states in which the competing biological processes are perfectly balanced and the system no longer changes. As we will see, not all equilibria are alike. Some attract nearby trajectories and therefore represent stable biological states, whereas others repel perturbations and act as decision points that separate fundamentally different behaviours.

Understanding equilibrium behaviour provides the foundation for explaining robustness, homeostasis, biological switches, and ultimately the transitions between different cellular states.


### 15.1 Why Do Biological Systems Reach Stable States?

One of the defining characteristics of living systems is their remarkable ability to maintain stable functional states. Cells preserve their identity over many generations, organisms maintain physiological variables such as body temperature and blood glucose within narrow limits, and ecosystems often remain stable despite continuous environmental fluctuations.

At first glance, this stability appears to contradict what we learned in the previous chapter. Biological systems are inherently dynamic. Molecules are continuously synthesized and degraded, metabolites flow through biochemical pathways, and signalling networks constantly process new information. Nothing in a living system is truly static.

The apparent contradiction is resolved by recognizing that biological stability does not arise from the absence of change. Instead, it emerges from the balance of many opposing processes. Protein synthesis is balanced by protein degradation, nutrient uptake by nutrient consumption, and cell proliferation by cell death. Although the individual processes are highly dynamic, their combined effects can produce remarkably stable system behaviour.

### Stable states emerge across all levels of biology

The tendency to approach stable states can be observed throughout biology.

At the molecular level, gene regulatory networks maintain characteristic patterns of gene expression that define cellular identity. At the physiological level, homeostatic mechanisms regulate variables such as blood glucose concentration, blood pressure, and body temperature. At larger scales, populations often stabilize around characteristic population sizes, while ecological communities can maintain stable species compositions over long periods.

Although the biological mechanisms differ substantially between these examples, they all exhibit a common dynamic behaviour: following small disturbances, the system tends to return to a preferred state.

This observation suggests that stability is not merely a property of individual biological systems but a general principle of biological organization.

### Equilibrium as a dynamic balance

To understand this behaviour, we introduce the concept of an **equilibrium**.

An equilibrium is a state in which the competing processes acting on the system are perfectly balanced. At this point, the state variables no longer change because every process that increases a quantity is exactly compensated by another process that decreases it.

Importantly, an equilibrium does **not** imply that biological activity has stopped.

Consider the example of a cell maintaining a constant ATP concentration. ATP molecules are continuously synthesized and consumed, yet the total ATP concentration remains approximately constant because production and consumption occur at similar rates.

Similarly, during the chronic phase of HIV infection, the viral load remains nearly constant even though viruses are continuously produced and cleared. As we saw in the previous chapter, this apparent stability reflects a dynamic balance rather than biological inactivity.

Equilibria should therefore be understood as **dynamic steady states**, not static systems.

### Why equilibria matter

Equilibrium analysis allows us to answer questions that are difficult to address through simulation alone.

Instead of investigating one particular trajectory, we seek to understand the long-term behaviour of the system. Does the system always return to the same state after a perturbation? Can multiple stable states exist simultaneously? Which states are robust, and which are inherently unstable?

Answering these questions provides important insights into biological robustness, homeostasis, and cellular decision making. It also lays the foundation for understanding biological switches and bifurcations, which we will explore in the following chapter.

In the next section, we will introduce a simple model from population biology that illustrates these concepts and provides an intuitive framework for analysing equilibrium behaviour.

### Key concepts

- Biological systems maintain stable functional states despite continuous molecular turnover.
- Biological stability emerges from the balance of opposing dynamic processes.
- Stable states occur at many levels of biological organization, from molecules to ecosystems.
- An equilibrium is a dynamic state in which competing processes exactly balance one another.
- Equilibrium analysis focuses on the long-term behaviour of biological systems.

### Summary

Living systems are continuously changing, yet they often maintain remarkably stable functional states. This stability results from the dynamic balance of opposing biological processes rather than from the absence of change. The concept of equilibrium provides a mathematical framework for describing these stable states and understanding why biological systems return to them after perturbations. Analysing equilibria therefore represents an essential step towards understanding robustness, homeostasis, and biological decision making.

### Self-check questions

1. Why does biological stability not imply that a system is inactive?
2. Give three examples of stable states in biological systems.
3. What is meant by a dynamic equilibrium?
4. Why is equilibrium analysis useful for understanding biological systems?
5. Which biological questions can be answered by studying equilibrium behaviour?