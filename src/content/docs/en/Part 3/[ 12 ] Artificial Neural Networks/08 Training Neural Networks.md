# 12.8 Training Neural Networks

## Learning means adjusting millions of parameters

We have now seen how individual neurons are combined into layers and how successive layers learn increasingly informative representations of biological data.

One important question remains.

> **How does the network learn the correct values for all of its weights?**

Initially, the network knows absolutely nothing about the prediction task.

Every weight is assigned a random value.

Consequently, the first predictions produced by the network are little better than random guesses.

During training, however, these weights are gradually adjusted until the network produces accurate predictions.

Learning therefore consists of finding the set of weights that minimizes the prediction error.

Although modern neural networks may contain millions or even billions of parameters, the underlying learning principle remains exactly the same as for the simple regression models introduced earlier in this book.

---

## Forward propagation

Training always begins with a **forward pass** through the network.

Suppose we wish to predict the subcellular localization of a protein.

The protein sequence is first converted into the numerical input representation required by the network.

This input is then propagated layer by layer through the network.

Each neuron

1. calculates a weighted sum,
2. applies its activation function,
3. and forwards the result to the next layer.

Eventually, the output layer produces the final prediction.

For example,

| Localization | Predicted probability |
|--------------|----------------------:|
| Chloroplast | 0.82 |
| Mitochondrion | 0.09 |
| Secretory pathway | 0.05 |
| Cytoplasm | 0.04 |

The network therefore predicts that the protein is most likely localized to the chloroplast.

At this stage, however, we do not yet know whether this prediction is correct.

---

## Measuring the prediction error

The next step is to compare the prediction with the experimentally known answer.

Suppose experimental evidence shows that the protein is indeed localized to the chloroplast.

In this case, the prediction is already quite accurate.

If the network had instead predicted a mitochondrial localization with high confidence, the prediction error would be much larger.

This discrepancy is quantified using a **loss function**.

The loss function measures how well the current network performs on the training data.

Large prediction errors produce a large loss.

Accurate predictions produce a small loss.

The objective of training is therefore simple:

> **Adjust the network parameters until the loss becomes as small as possible.**

Everything that happens during training serves this single purpose.

---

## Learning from mistakes

How should the network modify its millions of weights after observing a prediction error?

Clearly, changing every parameter randomly would be extremely inefficient.

Instead, the network must determine

- which weights contributed most strongly to the error,
- and in which direction each weight should be changed.

This is accomplished using **gradient descent**.

As introduced in Chapter 9, the gradient indicates how the loss changes when a parameter is modified slightly.

If increasing a particular weight increases the loss, the weight should be reduced.

If increasing the weight decreases the loss, the weight should be increased.

Gradient descent therefore provides a systematic method for improving the prediction step by step.

The remarkable aspect is that this principle remains valid regardless of whether the model contains two parameters or two billion.

---

## Backpropagation

Calculating gradients for a neural network containing many interconnected layers is not straightforward.

Changing a weight in an early hidden layer may influence every subsequent computation in the network.

The prediction error must therefore be propagated backwards through the network.

This procedure is called **backpropagation**.

During backpropagation, the network determines how much every individual weight contributed to the final prediction error.

Weights that contributed strongly are adjusted more.

Weights with little influence are adjusted less.

One can think of backpropagation as assigning responsibility for the prediction error.

Every parameter receives feedback indicating how it should change to improve future predictions.

Although the underlying mathematics involves the chain rule from calculus, the central idea is conceptually simple.

The network learns by propagating information in two directions.

During the **forward pass**, information flows from the input to the prediction.

During the **backward pass**, information about the prediction error flows back through the network, allowing every weight to be updated.

Together, forward propagation and backpropagation form the learning cycle of every modern neural network.

---

## Training is an iterative process

Updating the weights once is not sufficient.

After every parameter update, the network performs another forward pass, generates new predictions, calculates a new loss, and again adjusts its parameters.

This cycle is repeated many times.

One complete pass through the entire training dataset is called an **epoch**.

Depending on the size of the dataset and the complexity of the network, training may require

- tens,
- hundreds,
- or even thousands of epochs.

Initially, the prediction error usually decreases rapidly.

Later, improvements become progressively smaller as the network approaches an optimal solution.

Eventually, the loss stabilizes, indicating that further training provides little additional benefit.

The network has then learned a model that captures the statistical relationships present in the training data.

---

## Why neural networks require powerful hardware

Modern neural networks contain enormous numbers of parameters.

Training them requires repeated matrix multiplications involving millions of weights for every training example.

Performing these calculations on a conventional central processing unit (CPU) would often require days or even weeks.

Fortunately, most neural network computations can be performed simultaneously.

Graphics Processing Units (**GPUs**) were originally developed to render computer graphics by carrying out thousands of simple mathematical operations in parallel.

Exactly the same architecture is ideally suited for neural networks.

Rather than calculating one neuron after another, GPUs evaluate thousands of neurons simultaneously.

This massive parallelism has dramatically reduced training times and has been one of the key technological developments enabling the recent success of deep learning.

The rapid progress of artificial intelligence during the past decade has therefore been driven not only by new algorithms, but also by enormous advances in computing hardware.

---

## Training is optimization at scale

At first sight, modern neural networks appear vastly more complicated than the regression models introduced earlier in this book.

In reality, they solve exactly the same optimization problem.

The difference is simply one of scale.

Linear regression learns two parameters.

A neural network may learn millions.

Linear regression optimizes one equation.

A neural network optimizes thousands of interconnected equations simultaneously.

The mathematical principle, however, remains unchanged.

Learning always consists of

- making a prediction,
- measuring the prediction error,
- calculating how the parameters should change,
- and repeating this process until the model can no longer be improved.

This observation highlights an important lesson.

Deep learning is not fundamentally different from classical machine learning.

It is the natural extension of the same optimization principles to vastly more expressive mathematical models.

The next step is to examine how the output of a neural network must be adapted to different biological prediction tasks.

Although the hidden layers often remain similar, the design of the output layer depends on whether the network performs regression, binary classification, or multiclass classification.

---

### Conceptual Summary

Training a neural network consists of repeatedly optimizing its weights to minimize a loss function. During the forward pass, the network generates predictions by propagating information from the input to the output layer. The prediction error is then propagated backwards through the network using backpropagation, allowing gradient descent to update every parameter. Repeating this optimization cycle over many epochs gradually improves prediction accuracy. Although neural networks contain vastly more parameters than classical machine learning models, they are trained according to exactly the same optimization principles.

---

### Self-Check Questions

1. Why are the initial predictions of a neural network usually poor?
2. What happens during the forward pass of a neural network?
3. What is the purpose of the loss function?
4. Why is gradient descent suitable for optimizing neural networks with millions of parameters?
5. What is backpropagation, and why is it necessary?
6. What is meant by an epoch?
7. Why are GPUs particularly well suited for training neural networks?
8. Why can deep learning be viewed as an extension of the optimization methods introduced in earlier chapters?