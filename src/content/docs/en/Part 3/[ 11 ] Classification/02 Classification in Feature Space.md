# 11.2 Classification in Feature Space

## From biological features to decision boundaries

In Chapter 9, we learned that every supervised learning problem begins by representing biological observations as numerical feature vectors. Whether the observation is a protein, a DNA sequence, a cell, or an entire patient, the learning algorithm ultimately sees nothing more than a collection of numbers.

For a classification problem, these numerical features define a **feature space**.

Each biological observation corresponds to one point within this space.

Suppose we wish to distinguish between two classes of proteins:

- proteins localized to the chloroplast,
- proteins localized to the mitochondrion.

Rather than considering the complete amino acid sequence, we may describe each protein using two biologically meaningful features:

- the net N-terminal charge,
- and the average hydrophobicity.

Each protein is now represented by one point in a two-dimensional feature space. Proteins with similar physicochemical properties appear close together, whereas proteins with different properties are located further apart.

If these two biological classes occupy different regions of the feature space, classification becomes possible.

The objective of every classification algorithm is therefore remarkably simple:

> **Find a rule that separates the different biological classes in feature space.**

Although this statement is mathematically simple, it provides a powerful geometric interpretation of classification. Rather than memorizing individual observations, the algorithm attempts to discover the boundary that best divides one biological class from another.

---

## Decision boundaries

The boundary separating different classes is called the **decision boundary**.

Every observation on one side of the boundary is assigned to one class, while observations on the other side are assigned to another.

For our simple two-feature example, the decision boundary might simply be a straight line.

Proteins above the line are predicted to be chloroplast proteins.

Proteins below the line are predicted to be mitochondrial proteins.

In this case, the classifier assumes that a linear combination of hydrophobicity and charge is sufficient to distinguish the two classes.

However, biological systems are rarely so simple.

The classes may overlap, wrap around one another, or exhibit highly irregular shapes. A straight line may therefore fail to separate them adequately.

Instead, we may require curved or even highly complex decision boundaries.

This observation immediately raises an important question.

> **How should we construct the decision boundary?**

Different classification algorithms answer this question in different ways.

The distinction between classification methods is therefore often not *what* they predict, but *how* they define the boundary between different biological classes.

---

## Many algorithms, one common goal

Over the past decades, machine learning has produced a wide variety of classification algorithms.

Although they differ considerably in their mathematical formulation, they all pursue exactly the same objective:

> **To learn a decision boundary that accurately separates biological classes while generalizing well to new observations.**

Some of the most widely used classification algorithms include:

- **Logistic Regression**, which models the probability that an observation belongs to a particular class.
- **Decision Trees**, which recursively partition the feature space into increasingly homogeneous regions using simple decision rules.
- **Support Vector Machines (SVMs)**, which identify the decision boundary that maximizes the separation between classes.
- **Artificial Neural Networks**, which learn highly flexible nonlinear decision boundaries by combining many simple computational units.
- **Random Forests**, which combine many decision trees into a single ensemble to improve predictive performance and robustness.

Although these algorithms appear very different, they can all be viewed through the same geometric perspective.

Each algorithm constructs a different type of decision boundary.

The choice of algorithm therefore depends largely on the complexity of the biological problem and the structure of the available data.

---

## Simplicity before complexity

When learning machine learning, it is tempting to begin immediately with the most powerful algorithms.

However, this is rarely the best strategy.

Many sophisticated classifiers are built upon ideas that first appear in much simpler models.

Throughout this chapter, we therefore follow the same philosophy that has guided the previous chapters of this book.

We begin with the simplest classifier that extends the linear regression model developed in Chapter 9: **logistic regression**.

Logistic regression introduces the central ideas of probabilistic classification while remaining mathematically transparent.

We then turn to **decision trees**, which represent an entirely different way of thinking about prediction. Rather than describing the relationship between features and classes using mathematical equations, decision trees learn a sequence of biologically interpretable decision rules.

Finally, we briefly introduce **ensemble learning**, where many simple decision trees are combined to produce highly accurate predictive models such as Random Forests.

Together, these methods illustrate three fundamentally different philosophies of classification:

- **probabilistic models** (logistic regression),
- **rule-based models** (decision trees),
- and **ensemble models** (random forests).

Understanding these approaches provides an excellent foundation for the artificial neural networks introduced in the next chapter.

---

### Key Concepts

- Classification algorithms operate in a multidimensional **feature space**.
- Every biological observation is represented as a point in this space.
- The objective of classification is to learn a **decision boundary** that separates different biological classes.
- Different classification algorithms differ primarily in how they construct this decision boundary.
- Logistic regression, decision trees, support vector machines, neural networks, and random forests all solve the same fundamental classification problem using different mathematical approaches.

---

### Summary

Classification can be viewed geometrically as the problem of separating different biological classes in feature space. Each biological observation is represented by a feature vector, and the classifier learns a decision boundary that divides the feature space into regions corresponding to different classes. Although numerous classification algorithms have been developed, they all pursue the same objective: finding decision boundaries that correctly classify known observations while generalizing reliably to new biological data. The following sections introduce three important families of classifiers that illustrate different ways of constructing such boundaries.

---

### Self-Check Questions

1. What is meant by a **feature space**?
2. How is a biological observation represented within a feature space?
3. What is a **decision boundary**?
4. Why can a straight-line decision boundary be insufficient for biological data?
5. What do all classification algorithms have in common?
6. In what fundamental way do logistic regression, decision trees, and neural networks differ from one another?
