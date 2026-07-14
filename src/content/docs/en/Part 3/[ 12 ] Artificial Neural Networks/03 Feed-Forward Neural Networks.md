# 12.3 Feed-Forward Neural Networks

## From biological neurons to artificial neurons

The name *artificial neural network* was inspired by one of the most remarkable information-processing systems found in nature: the brain.

The human brain consists of billions of interconnected nerve cells, or **neurons**, that communicate through electrical and chemical signals. Each neuron receives signals from many neighboring neurons, integrates this information, and, if a certain activation threshold is exceeded, transmits a signal to other neurons.

Artificial neural networks borrow this basic organizational principle.

They consist of many simple computational units—called **artificial neurons**—that exchange numerical information. Although these artificial neurons are vastly simpler than their biological counterparts, large networks of such units are capable of solving surprisingly complex prediction tasks.

It is important to recognize, however, that the resemblance is largely conceptual rather than biological.

Artificial neurons are **not realistic models of biological neurons**.

Instead, they are simplified mathematical building blocks inspired by the general idea of distributed information processing.

---

## Information flows through layers

The simplest type of neural network is the **feed-forward neural network**.

The name *feed-forward* describes the direction in which information travels through the network.

Starting from the input, information flows layer by layer toward the output.

There are no loops or feedback connections.

Each layer performs a mathematical transformation of the information it receives and passes the result to the next layer.

A typical feed-forward neural network consists of three types of layers:

- an **input layer**,
- one or more **hidden layers**,
- and an **output layer**.

Each layer plays a different role in the computation.

---

## The input layer

The **input layer** represents the information provided to the model.

Each input neuron corresponds to one numerical feature describing the biological observation.

Suppose we wish to predict the subcellular localization of proteins.

Possible input features might include

- the N-terminal charge,
- the average hydrophobicity,
- amino acid composition,
- sequence length,
- or experimentally measured biochemical properties.

Every protein is therefore represented by a vector of numerical values.

The input layer performs no computation.

Its sole purpose is to pass these values into the network.

One can think of the input layer as the interface between the biological data and the mathematical model.

---

## Hidden layers

The true computational power of neural networks resides in the **hidden layers**.

Unlike the input layer, hidden layers transform the information they receive.

Each hidden neuron combines signals from the previous layer, performs a mathematical calculation, and passes the result forward.

At this stage, the biological meaning of the individual neurons is usually unknown.

The network gradually develops internal representations that help solve the prediction task.

Some neurons may become sensitive to hydrophobic amino acid stretches.

Others may respond to positively charged sequence motifs.

Still others may recognize combinations of multiple sequence features that would be difficult for a human researcher to define explicitly.

These internal representations are called **hidden** because they are not directly observed in the training data.

They emerge automatically during learning.

Understanding what hidden neurons actually learn will become one of the central topics later in this chapter.

---

## The output layer

The final layer of the network is the **output layer**.

Its task is to transform the internal representation developed by the hidden layers into the desired prediction.

The exact form of the output depends on the biological problem.

For example,

- a single numerical value for protein stability,
- the probability that a protein belongs to the chloroplast,
- or probabilities for several possible subcellular compartments.

Thus, while the internal computations of different neural networks may be very similar, the interpretation of the final output depends entirely on the prediction task.

Later in this chapter we will see how different activation functions allow the same network architecture to perform regression, binary classification, or multiclass classification.

---

## A network is a sequence of transformations

Although neural networks are often presented as highly complex systems, their overall organization is remarkably simple.

Each layer receives numerical information from the previous layer.

It transforms this information.

The transformed values are then passed to the next layer.

This process continues until the output layer generates the final prediction.

Mathematically, a feed-forward neural network can therefore be viewed as a sequence of successive transformations,

\[
\text{Input}
\rightarrow
\text{Hidden Layer 1}
\rightarrow
\text{Hidden Layer 2}
\rightarrow
\cdots
\rightarrow
\text{Output}.
\]

Each transformation extracts increasingly useful information from the input.

The remarkable predictive power of deep learning arises not because any individual transformation is particularly complicated, but because many simple transformations are combined into a powerful computational pipeline.

---

## Why depth matters

The term **deep learning** simply refers to neural networks containing multiple hidden layers.

Early neural networks often consisted of only one hidden layer.

Modern architectures may contain dozens or even hundreds of layers.

Why should adding more layers improve prediction?

The answer lies in hierarchical representation learning.

The first hidden layer learns relatively simple patterns.

The second layer combines these simple patterns into more complex ones.

Subsequent layers detect increasingly abstract structures.

This hierarchy resembles many biological information-processing systems.

When recognizing a protein targeting peptide, for example, one neuron may first detect hydrophobic amino acids.

Another may detect positively charged residues.

Higher layers can combine these simple observations into increasingly complex representations corresponding to complete targeting signals.

Thus, every additional layer allows the network to build more sophisticated internal representations.

This ability to learn hierarchical representations is one of the defining characteristics of deep learning.

---

## The neuron is the fundamental building block

So far, we have treated each neuron as a mysterious computational unit that somehow transforms its inputs into useful outputs.

Fortunately, the mathematics underlying an artificial neuron is surprisingly simple.

Every neuron performs exactly the same sequence of operations:

1. receive numerical inputs,
2. combine these inputs using adjustable weights,
3. calculate a weighted sum,
4. apply a nonlinear activation function,
5. pass the result to the next layer.

Everything a neural network accomplishes—from recognizing handwritten digits to predicting protein structures—is ultimately built from this simple computational principle repeated millions of times.

Understanding the artificial neuron therefore provides the key to understanding the entire network.

The next section examines this fundamental building block in detail.

---

### Conceptual Summary

A feed-forward neural network consists of an input layer, one or more hidden layers, and an output layer. Information flows sequentially through these layers, with each hidden layer transforming the representation learned by the previous one. The depth of the network allows increasingly abstract features to be constructed, giving rise to the hierarchical representations that characterize modern deep learning. Despite their apparent complexity, all neural networks are built from the repeated application of one remarkably simple computational unit: the artificial neuron.

---

### Self-Check Questions

1. Why are artificial neural networks only loosely inspired by biological neurons?
2. What distinguishes a feed-forward neural network from other neural network architectures?
3. What is the role of the input layer?
4. Why are the intermediate layers called *hidden* layers?
5. How does the role of the output layer depend on the biological prediction task?
6. Why can a neural network be viewed as a sequence of mathematical transformations?
7. Why do deeper networks often outperform shallower ones?
8. What operations does every artificial neuron perform before passing information to the next layer?