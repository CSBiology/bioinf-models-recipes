---
title: "12.1 Why Neural Networks?"
sidebar:
  label: "12.1 Why Neural Networks?"
  order: 1
  group: "Part 3"
  part: "Part 3"
---

## 12.1 Why Neural Networks?

### Learning Goals

After completing this section, you should be able to:

- explain why artificial neural networks have become one of the most influential machine learning methods in biology;
- distinguish between manually engineered features and learned representations;
- understand that neural networks can be used for both regression and classification;
- explain why neural networks are a natural extension of the supervised learning methods introduced in the previous chapters;
- recognize that modern breakthroughs such as AlphaFold are built upon the same fundamental principles of supervised learning.

---

### From Classical Machine Learning to Representation Learning

In the previous chapters, we introduced the fundamental principles of supervised learning. We learned how models can discover relationships between measured variables and biological observations by optimizing their parameters using gradient descent. We explored linear regression for predicting continuous values, logistic regression for binary classification, and decision trees for learning interpretable decision rules. Although these algorithms differ in their mathematical formulation, they all share the same underlying goal: learning a mapping from input variables to an observed biological outcome.

Artificial neural networks build directly upon these ideas.

Rather than representing a completely new paradigm, they extend the supervised learning framework introduced earlier. Like all supervised learning algorithms, neural networks receive input variables, compare their predictions with experimentally observed data, quantify the prediction error using a loss function, and iteratively optimize their parameters to minimize this error.

What distinguishes neural networks is not *how* they learn, but *what* they are capable of learning.

---

### The Challenge of Feature Engineering

Many classical machine learning algorithms rely heavily on carefully designed input features.

Suppose we want to predict whether a protein will be transported into a chloroplast. Before training a logistic regression model or a decision tree, we must first decide which properties of the protein sequence should be provided as input.

Possible features might include

- the amino acid composition,
- the average hydrophobicity,
- the net charge,
- the length of the protein,
- or the presence of known sequence motifs.

These quantities are not learned by the algorithm. Instead, they are designed by the researcher based on biological knowledge.

This process is known as **feature engineering**.

Feature engineering can be highly effective because it incorporates decades of biological understanding into the model. At the same time, it imposes an important limitation: the quality of the model can never exceed the quality of the features provided. If biologically relevant information is missing from the feature set, even the most sophisticated learning algorithm cannot recover it.

---

### Learning Features Instead of Designing Them

Artificial neural networks address this limitation in a fundamentally different way.

Instead of relying entirely on manually designed features, they can learn increasingly useful internal representations directly from the data.

Consider again the problem of predicting protein localization.

Rather than explicitly calculating hydrophobicity, sequence motifs, or amino acid composition, we may simply provide the protein sequence itself. During training, the network learns which sequence patterns are informative for the prediction task.

Some hidden neurons may respond strongly to hydrophobic amino acid stretches that resemble transmembrane helices. Others may become sensitive to positively charged N-terminal regions characteristic of mitochondrial targeting peptides. Yet other neurons may learn more complex combinations of sequence patterns that would be difficult for a human researcher to define explicitly.

These internal representations are not programmed by the researcher. They emerge automatically as the network optimizes its prediction accuracy.

This ability to discover useful representations directly from data is one of the defining characteristics of modern deep learning.

---

### Universal Models for Prediction

Another remarkable property of artificial neural networks is their flexibility.

The same network architecture can be adapted to many different prediction tasks simply by modifying its output layer.

For example, a neural network can be used to

- predict a continuous property such as protein stability,
- distinguish between two classes, such as stable versus unstable proteins,
- classify proteins into multiple subcellular compartments,
- estimate gene expression levels,
- predict protein structures,
- or identify cell types from single-cell sequencing data.

The underlying computational principles remain largely unchanged. Only the interpretation of the network's output differs.

This makes neural networks exceptionally versatile learning algorithms that can be applied to a wide range of biological problems.

---

### Why Neural Networks Changed Biology

For many years, artificial neural networks attracted only moderate attention within biology. Although the basic concepts were already developed in the second half of the twentieth century, early neural networks were limited by small datasets and insufficient computational power.

During the past decade, this situation has changed dramatically.

Three developments have driven the success of modern deep learning:

- the availability of massive biological datasets generated by high-throughput technologies,
- the development of powerful graphics processing units (GPUs) capable of training models with millions of parameters,
- and major advances in neural network architectures and optimization algorithms.

Together, these developments have transformed artificial neural networks from an interesting computational technique into one of the central tools of modern biology.

Applications now range from predicting protein localization and protein function to analyzing microscopy images, interpreting genomic variation, reconstructing gene regulatory networks, and predicting protein structures with unprecedented accuracy.

Perhaps the best-known example is **AlphaFold**, whose remarkable success demonstrated that neural networks can solve biological prediction problems that had remained unsolved for decades.

---

### From Supervised Learning to Deep Learning

At first glance, neural networks appear substantially more complicated than the models introduced in previous chapters. They contain many layers, thousands or even millions of parameters, and often require considerable computational resources for training.

Despite this complexity, the underlying principles remain surprisingly familiar.

Like every supervised learning algorithm, a neural network

1. receives input data,
2. computes a prediction,
3. compares the prediction with experimentally observed data,
4. quantifies the prediction error using a loss function,
5. and adjusts its parameters through gradient-based optimization.

The essential difference is that neural networks can learn not only the final prediction, but also the intermediate representations that make this prediction possible.

Understanding how these internal representations emerge is the key to understanding modern artificial intelligence.

The remainder of this chapter develops this idea step by step. We begin by examining the simplest type of neural network—the feed-forward neural network—and show that its fundamental building block, the artificial neuron, is mathematically much simpler than its biological inspiration might suggest.

---

### Conceptual Summary

Artificial neural networks are best understood as a natural extension of supervised learning rather than a completely new learning paradigm. Like the regression and classification models introduced in previous chapters, they learn by minimizing a loss function using gradient descent. Their distinctive feature is that they automatically learn useful internal representations of the data instead of relying entirely on manually engineered features. This ability has made neural networks one of the most powerful tools in modern computational biology, enabling applications ranging from protein localization prediction to protein structure prediction.

---

### Self-Check Questions

1. In what sense are artificial neural networks an extension of supervised learning rather than a completely new paradigm?
2. What is feature engineering, and why can it limit the performance of classical machine learning models?
3. How do neural networks differ from traditional machine learning algorithms in their treatment of input features?
4. Why can the same neural network architecture be applied to both regression and classification problems?
5. Which technological developments enabled the recent success of deep learning in biology?
6. Why is AlphaFold considered a milestone in the application of neural networks to biological research?
7. What is meant by the statement that neural networks learn *representations* rather than merely *predictions*?