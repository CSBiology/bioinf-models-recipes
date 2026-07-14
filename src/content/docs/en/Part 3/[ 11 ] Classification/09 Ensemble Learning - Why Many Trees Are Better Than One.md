# 11.9 Ensemble Learning: Why Many Trees Are Better Than One

## The limitations of individual decision trees

Decision trees are among the most intuitive machine learning models.

They are easy to understand, easy to visualize, and often provide valuable biological insight because every prediction can be traced back to a sequence of explicit decision rules.

Despite these advantages, a single decision tree has an important weakness.

Decision trees are often **unstable**.

Small changes in the training data can produce surprisingly different trees.

Suppose one or two mushrooms are removed from the training dataset.

Perhaps a different feature now provides the highest information gain at the root node.

Once the first split changes, every subsequent branch may develop differently.

Although both trees may perform similarly on the training data, they can produce different predictions for new observations.

This sensitivity to the training data is a consequence of the **high variance** that we discussed in Chapter 10.

A single decision tree is therefore often an excellent explanatory model but not necessarily the most reliable predictive model.

This naturally raises an important question.

> **Can we combine many imperfect trees to obtain a better classifier?**

The answer is yes.

This idea forms the basis of **ensemble learning**.

---

## The wisdom of crowds

The basic principle behind ensemble learning is surprisingly intuitive.

Imagine asking one physician to diagnose a difficult disease.

The physician may occasionally make mistakes.

Now imagine asking fifty independent experts and combining their opinions.

Although individual physicians may occasionally disagree, the majority opinion is often more reliable than any single diagnosis.

This phenomenon is known as the **wisdom of crowds**.

Machine learning exploits exactly the same idea.

Instead of relying on a single predictive model, we construct many different models and combine their predictions.

Each individual model may be imperfect.

However, if their prediction errors are not identical, averaging their predictions often produces a classifier that is both more accurate and more robust.

The central idea is therefore simple:

> **Many moderately good models often outperform a single excellent model.**

---

## Random Forests

One of the most successful ensemble methods is the **Random Forest**.

As its name suggests, a Random Forest consists of a large collection of individual decision trees.

Each tree is trained slightly differently.

Rather than using the entire training dataset, every tree receives a randomly selected subset of the observations.

Furthermore, at every split, each tree considers only a randomly selected subset of the available features.

Consequently, every tree develops a slightly different structure.

Some trees may consider odor first.

Others may begin with cap color.

Still others may split first according to bruising or habitat.

Although each tree learns the same underlying classification problem, no two trees are exactly identical.

The forest therefore contains many different perspectives on the same biological dataset.

---

## From individual trees to collective decisions

How does a Random Forest make predictions?

Suppose we wish to classify a previously unseen mushroom.

Instead of asking one decision tree, we present the mushroom to every tree in the forest.

Each tree independently predicts whether the mushroom is edible or poisonous.

The final prediction is then obtained by **majority voting**.

If most trees predict "edible," the forest predicts "edible."

If most trees predict "poisonous," the forest predicts "poisonous."

For regression problems, the predictions are usually averaged rather than voted upon.

This simple strategy produces a remarkable effect.

Random fluctuations that influence one tree are often absent in the others.

As a result, many of the individual prediction errors cancel each other out.

The combined prediction therefore becomes considerably more stable than that of any individual tree.

---

## Why Random Forests work

At first glance, it may seem surprising that averaging many imperfect models improves prediction accuracy.

The explanation lies in the distinction between **bias** and **variance**.

Individual decision trees generally have relatively low bias.

Their flexibility allows them to capture complex biological relationships.

However, they often exhibit high variance because small changes in the training data can substantially alter the learned tree.

Random Forests primarily reduce this variance.

Because each tree is trained on slightly different data and different subsets of features, the individual trees make different errors.

Averaging across many trees therefore smooths out these random fluctuations.

Importantly, this improvement is achieved without substantially increasing the bias of the model.

Random Forests are therefore an elegant solution to one of the central challenges introduced in Chapter 10:

> **How can we reduce variance without sacrificing predictive power?**

---

## Strengths of Random Forests

Random Forests have become one of the most widely used machine learning methods in bioinformatics.

They combine several attractive properties.

First, they usually provide excellent prediction accuracy with relatively little parameter tuning.

Second, they naturally capture nonlinear relationships and complex interactions between biological features.

Third, they remain relatively robust to noisy data and outliers.

Finally, Random Forests provide estimates of **feature importance**, allowing researchers to identify which biological variables contributed most strongly to the predictions.

For many biological applications, these advantages make Random Forests an excellent first choice.

They have been successfully applied to

- predicting protein function,
- classifying cell types,
- identifying disease biomarkers,
- predicting transcription factor binding sites,
- and analyzing gene expression data.

---

## The price of improved performance

The increased predictive power of Random Forests comes at a cost.

Unlike a single decision tree, an entire forest can no longer be visualized easily.

Instead of following one transparent sequence of decisions, the prediction emerges from hundreds or even thousands of different trees.

The model therefore becomes less interpretable.

This illustrates a recurring theme throughout machine learning.

Increasing predictive performance often reduces interpretability.

Many modern machine learning methods—including deep neural networks—face exactly the same trade-off.

Researchers must therefore decide which objective is more important for a particular application:

- obtaining the highest possible prediction accuracy,
- or understanding the biological reasoning behind each prediction.

In many research projects, both goals are valuable, and different models may be used for complementary purposes.

---

## Beyond Random Forests

Random Forests are only one example of ensemble learning.

Another important family of methods is **boosting**.

Whereas Random Forests train many trees independently, boosting constructs trees sequentially.

Each new tree focuses particularly on observations that previous trees classified incorrectly.

The individual trees are therefore usually much smaller, but together they form a highly accurate predictive model.

Modern boosting algorithms, such as Gradient Boosting and XGBoost, have become extremely successful in many machine learning competitions and biological prediction tasks.

Although their mathematical details are beyond the scope of this book, they illustrate an important principle.

Ensemble learning is not a specific algorithm.

It is a general strategy for improving prediction by combining many simple models.

---

## From interpretable models to representation learning

The classification methods introduced in this chapter share an important characteristic.

Whether using logistic regression, decision trees, or Random Forests, the researcher still decides which biological features should be provided to the model.

The machine learning algorithm learns how to combine these features, but it does not learn the features themselves.

Modern artificial neural networks take a fundamentally different approach.

Rather than relying entirely on manually designed features, they can learn increasingly useful internal representations directly from the data.

This ability to learn hierarchical feature representations has transformed fields ranging from image recognition to protein structure prediction.

In the next chapter, we will explore how artificial neural networks build upon the principles of supervised learning while dramatically extending the complexity of the models that can be learned.

---

### Key Concepts

- Ensemble learning combines many predictive models into a single classifier.
- Individual decision trees often exhibit high variance.
- Random Forests reduce variance by averaging the predictions of many independently trained trees.
- Majority voting produces robust classification decisions.
- Random Forests often improve prediction accuracy while sacrificing some interpretability.
- Boosting is an alternative ensemble strategy that trains models sequentially rather than independently.

---

### Summary

Although individual decision trees are intuitive and highly interpretable, they are often sensitive to small changes in the training data. Ensemble learning addresses this limitation by combining the predictions of many different models. Random Forests reduce prediction variance through majority voting, while boosting improves performance by sequentially correcting previous prediction errors. These methods demonstrate that predictive performance can often be improved by combining many simple models rather than relying on a single complex one. At the same time, they illustrate the growing trade-off between interpretability and predictive accuracy—a theme that becomes even more important in the study of artificial neural networks.

---

### Self-Check Questions

1. Why are individual decision trees often considered unstable?
2. What is the central idea behind ensemble learning?
3. How does a Random Forest differ from a single decision tree?
4. Why are the trees in a Random Forest intentionally made different from one another?
5. How are predictions combined in a Random Forest classifier?
6. Why do Random Forests primarily reduce variance rather than bias?
7. What are the major advantages and disadvantages of Random Forests?
8. How does boosting differ conceptually from Random Forests?
9. Why do Random Forests generally outperform individual decision trees?
10. In what important way do neural networks differ from all classification methods introduced in this chapter?