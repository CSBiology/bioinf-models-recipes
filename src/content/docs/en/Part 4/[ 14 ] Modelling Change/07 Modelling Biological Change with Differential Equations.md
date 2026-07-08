## 14.7 Modelling Biological Change with Differential Equations

The previous sections established that a biological system can be represented as a point moving through state space. We also saw that the direction of this movement is determined by a mathematical model. The remaining question is how to formulate such a model.

The central idea is surprisingly simple. Instead of describing how much of a molecule is present, we describe **how rapidly its abundance changes**. This shift in perspective forms the foundation of dynamical systems modelling and naturally leads to **ordinary differential equations (ODEs)**.

### Biological systems are defined by change

Many biological processes are governed by competing mechanisms that continuously increase or decrease the abundance of a particular component.

Consider the concentration of a protein inside a cell. At any moment, proteins are synthesized by translation while simultaneously being degraded by cellular degradation pathways. The observed protein concentration therefore reflects the balance between production and degradation.

The same principle applies to many other biological quantities.

- Populations increase through reproduction and decrease through mortality.
- Metabolites are produced by some reactions and consumed by others.
- Viruses replicate inside host cells while simultaneously being cleared by the immune system.

In each case, the biological question is not simply **how much is present**, but rather **how quickly the quantity changes**.

### Describing rates of change

Suppose that the abundance of a biological quantity is represented by the variable \(X(t)\), where \(t\) denotes time.

Rather than describing the value of \(X\) itself, we are interested in its **rate of change**.

Mathematically, this is written as

\[
\frac{dX}{dt}.
\]

This notation is read as "the change of \(X\) with respect to time."

A positive value indicates that the quantity is increasing, whereas a negative value indicates that it is decreasing. If the rate of change is zero, the quantity remains constant.

The remarkable feature of biological systems is that this rate of change usually depends on the current state of the system itself.

### Biological interactions determine the rate of change

The rate at which a biological quantity changes is rarely constant.

For example, protein degradation depends on how much protein is present. If only a few protein molecules exist, only a few molecules can be degraded. Conversely, if the protein is abundant, degradation occurs more rapidly simply because more substrate is available.

Similarly, protein synthesis depends on the abundance of its corresponding transcript. More transcript generally allows more protein to be produced.

The rate of change therefore depends on the current biological state.

Mathematically, this relationship can be written in the general form

\[
\frac{dX}{dt}=f(X),
\]

where the function \(f\) summarizes all biological processes that influence the quantity \(X\).

The exact form of \(f\) depends entirely on the biological system being studied.

### A simple gene regulation model

We can now return to the gene regulatory circuit introduced earlier.

The model contains two state variables:

- transcript abundance (\(T\)),
- protein abundance (\(P\)).

Their concentrations change because several biological processes occur simultaneously.

Protein abundance increases through translation of the transcript and decreases through protein degradation.

Transcript abundance increases through transcription but decreases because the protein inhibits further transcript production.

These biological assumptions can be translated directly into a mathematical model:

\[
\frac{dP}{dt}=m\beta PT-aP
\]

\[
\frac{dT}{dt}=bT-\beta PT
\]

Although these equations may appear unfamiliar at first, every term has a direct biological interpretation.

The first equation states that protein abundance increases through protein production and decreases through degradation.

The second equation states that transcript abundance increases through transcription but decreases because the protein inhibits transcript production.

The equations therefore contain nothing more than the biological assumptions introduced earlier.

### Equations represent biological hypotheses

It is tempting to view differential equations simply as mathematical expressions.

In systems biology, however, they have a much deeper meaning.

Every variable corresponds to a measurable biological quantity.

Every parameter represents a biological process such as a synthesis rate, degradation rate, or binding strength.

Every term expresses a biological hypothesis about how different components interact.

Constructing a model therefore forces us to make our biological assumptions explicit. If the model successfully reproduces experimental observations, these assumptions are supported. If the model fails, our understanding of the biological system is incomplete.

Differential equations are therefore much more than mathematical tools. They provide a rigorous language for formulating and testing biological hypotheses.

### Key concepts

- Ordinary differential equations describe how biological quantities change over time.
- The rate of change is often more informative than the quantity itself.
- Biological interactions determine the rate at which state variables change.
- Every term in a differential equation has a biological interpretation.
- Differential equations formalize mechanistic hypotheses about biological systems.

### Summary

Dynamic biological systems are naturally described by rates of change rather than static quantities. Ordinary differential equations provide a mathematical framework for expressing these changes and relating them to the underlying biological processes. By translating biological mechanisms into equations, they generate the vector fields that determine how systems evolve through state space. In this way, differential equations become the central language of mechanistic systems biology.

### Self-check questions

1. Why do differential equations describe rates of change rather than absolute quantities?
2. Why does protein degradation usually depend on protein abundance?
3. What biological information is represented by the function \(f(X)\)?
4. Why can every term in a differential equation be interpreted biologically?
5. Why are differential equations particularly well suited for modelling living systems?