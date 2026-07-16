---
title: "12.9 Choosing the Right Output Layer"
sidebar:
  label: "12.9 Choosing the Right Output Layer"
  order: 9
  group: "Part 3"
  part: "Part 3"
---

# 12.9 Choosing the Right Output Layer

## Different prediction problems require different outputs

Although the internal structure of many neural networks is remarkably similar, the design of the **output layer** depends entirely on the biological question we wish to answer.

Throughout this book, we have encountered several fundamentally different prediction problems.

Sometimes we wish to predict a continuous numerical value.

Sometimes we need to distinguish between two biological classes.

In other situations, an observation may belong to one of many possible categories.

These different prediction tasks require different mathematical interpretations of the network output.

Consequently, the final layer of a neural network must be adapted to the prediction problem.

Importantly, the hidden layers often remain unchanged.

Only the final transformation—and the associated loss function—needs to be modified.

---

## Regression

The simplest prediction task is **regression**.

Here the objective is to predict a continuous numerical quantity.

Examples include

- protein stability,
- enzyme activity,
- metabolite concentration,
- growth rate,
- or gene expression levels.

In this situation, the network should be free to produce any real-valued output.

For this reason, the output neuron usually applies **no activation function at all**.

The final prediction is simply

$$
\hat{y}=z,
$$

where \(z\) is the weighted sum calculated by the last neuron.

This is sometimes referred to as a **linear output neuron** or an **identity activation**.

Because the prediction is continuous, the network is typically trained using the **Mean Squared Error (MSE)** introduced in Chapter 9.

Thus, regression networks differ from linear regression primarily in the complexity of the model, not in the interpretation of the output.

---

## Binary classification

Suppose we now wish to distinguish between two biological classes.

Examples include

- healthy versus diseased,
- chloroplast versus mitochondrion,
- pathogenic versus benign,
- edible versus poisonous.

In this case, the output should represent the probability that an observation belongs to one of the two classes.

As discussed in Chapter 11, probabilities must lie between 0 and 1.

The appropriate activation function is therefore the **sigmoid function**,

$$
P(y=1|x)
=
\frac{1}{1+e^{-z}}.
$$

The output neuron now produces values such as

- 0.02,
- 0.37,
- 0.91,
- or 0.99.

These numbers have a direct probabilistic interpretation.

For example,

$$
P(\text{chloroplast})=0.91
$$

indicates that the network estimates a 91% probability that the protein is localized to the chloroplast.

A decision threshold—often 0.5—is then used to convert this probability into a class prediction.

---

## Multiclass classification

Many biological prediction problems involve more than two possible classes.

For example, a protein may be localized to

- the chloroplast,
- the mitochondrion,
- the nucleus,
- the cytoplasm,
- or the secretory pathway.

Simply using several independent sigmoid neurons would not solve this problem.

The resulting probabilities would not necessarily sum to one.

A protein could simultaneously receive

- 80% probability for the chloroplast,
- 70% probability for the mitochondrion,
- and 60% probability for the nucleus,

which is clearly inconsistent.

Instead, multiclass classification uses the **softmax function**.

Suppose the output layer contains one neuron for each possible class.

Each neuron first computes a score,

$$
z_i.
$$

The softmax function converts these scores into probabilities,

$$
P_i
=
\frac{e^{z_i}}
{\sum_j e^{z_j}}.
$$

Two important properties follow immediately.

First,

every probability lies between 0 and 1.

Second,

the probabilities always sum to one,

$$
\sum_i P_i = 1.
$$

The output therefore represents a proper probability distribution across all possible classes.

The class with the highest probability becomes the network's prediction.

---

## An example: predicting protein localization

Consider a neural network trained to predict the localization of proteins.

The output layer contains five neurons representing

- chloroplast,
- mitochondrion,
- nucleus,
- cytoplasm,
- secretory pathway.

After applying the softmax function, the network might produce

| Localization | Probability |
|--------------|------------:|
| Chloroplast | 0.82 |
| Mitochondrion | 0.09 |
| Nucleus | 0.04 |
| Cytoplasm | 0.03 |
| Secretory pathway | 0.02 |

Notice that

$$
0.82
+
0.09
+
0.04
+
0.03
+
0.02
=
1.
$$

The network therefore predicts that the protein is localized to the chloroplast while simultaneously expressing its confidence in every alternative localization.

This probabilistic interpretation is one of the major strengths of neural network classifiers.

Rather than producing only a single prediction, the network also communicates how certain that prediction is.

---

## The output layer determines the prediction task

Although neural networks often appear highly specialized, this example illustrates their remarkable flexibility.

Exactly the same hidden layers can be used for

- regression,
- binary classification,
- or multiclass classification.

Only the final layer changes.

This observation emphasizes an important conceptual point.

The hidden layers learn **representations** of the biological data.

The output layer determines **how these representations are interpreted**.

Changing the output layer therefore allows the same internal representation to solve completely different prediction problems.

---

## Choosing the appropriate output

The choice of output activation is determined entirely by the biological question.

| Prediction task | Output activation | Typical output |
|-----------------|-------------------|----------------|
| Regression | Identity (linear) | Continuous numerical value |
| Binary classification | Sigmoid | Probability of one class |
| Multiclass classification | Softmax | Probability distribution across classes |

This simple table summarizes one of the most useful practical guidelines when designing neural networks.

Once the prediction task is known, the appropriate output layer follows naturally.

The remainder of the network often changes surprisingly little.

---

## Preparing for biological applications

At this point, we have developed all of the fundamental components of feed-forward neural networks.

We understand

- artificial neurons,
- activation functions,
- hidden layers,
- representation learning,
- optimization,
- and output layers.

The remaining question is no longer how neural networks operate mathematically.

Instead, we ask how these models are applied to solve real biological problems.

In the next section, we will examine one of the first highly successful applications of neural networks in bioinformatics: **TargetP**, a system that predicts the subcellular localization of proteins directly from their amino acid sequences.

Through this example, we will see how all of the concepts introduced throughout this chapter come together in a practical prediction model.

---

### Conceptual Summary

The architecture of the hidden layers of a neural network often remains unchanged across different applications. The primary difference between regression and classification networks lies in the output layer. Regression uses a linear output neuron, binary classification employs the sigmoid function to estimate probabilities for two classes, and multiclass classification uses the softmax function to produce a probability distribution across several possible classes. Selecting the appropriate output layer ensures that the network's predictions match the biological question being addressed.

---

### Self-Check Questions

1. Why does the output layer depend on the prediction task?
2. Which output activation is typically used for regression problems?
3. Why is the sigmoid function appropriate for binary classification?
4. Why is the softmax function preferred over multiple independent sigmoid neurons for multiclass classification?
5. What information does a softmax output provide beyond the predicted class?
6. Why can the same hidden layers often be used for different prediction tasks?
7. How does the choice of output activation relate to the biological interpretation of the prediction?