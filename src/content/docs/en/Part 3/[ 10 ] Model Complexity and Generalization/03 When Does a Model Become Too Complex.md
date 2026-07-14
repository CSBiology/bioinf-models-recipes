# 10.3 When Does a Model Become Too Complex?

## The temptation of a perfect fit

Suppose we continue increasing the flexibility of our model.

At first, this appears to be an excellent strategy. As the model becomes more flexible, it follows the training data more closely. The prediction error decreases, and the model seems to provide a better description of the biological relationship.

Eventually, however, something remarkable happens.

The model begins to capture not only the underlying biological trend but also every small fluctuation in the data. Instead of describing the general relationship between hydrophobicity and protein stability, it starts adapting to individual observations that may simply reflect experimental uncertainty or natural biological variation.

At this point, the model may pass almost exactly through every measured data point.

Its performance on the training data appears nearly perfect.

Intuitively, one might conclude that this must be the best possible model.

Surprisingly, this conclusion is often wrong.

The ability to explain existing observations does not necessarily imply the ability to predict future observations.

---

## A thought experiment: the apprentice fortune teller

To understand why this happens, consider the following thought experiment.

Imagine an apprentice fortune teller who has just started offering predictions at a local market. Before opening the booth, the apprentice receives two pieces of advice from an experienced fortune teller.

The first piece of advice is obvious:

> **Your predictions should sound as convincing and informative as possible.**

People expect detailed answers rather than vague statements. A prediction such as

> "Something interesting may happen in your future."

is technically difficult to falsify but provides almost no useful information.

Instead, the apprentice learns to make increasingly specific predictions.

The second piece of advice is more subtle:

> **Never make predictions that can easily be proven wrong.**

If the apprentice confidently predicts that someone will become wealthy next week and this does not happen, credibility is immediately lost.

Successful fortune tellers therefore make predictions that appear specific while remaining sufficiently general that they are difficult to falsify.

Although amusing, this story illustrates a surprisingly deep principle of predictive modeling.

Good predictions must balance two competing objectives.

They should be

- informative enough to be useful,
- but general enough to remain valid for future observations.

Exactly the same balance must be achieved in machine learning.

---

## Memorization is not learning

Suppose our apprentice decides to improve by memorizing every previous customer.

Whenever an old customer returns, the apprentice recalls exactly what happened during the previous visit and simply repeats an appropriate prediction.

For familiar customers, this strategy appears remarkably successful.

However, as soon as a completely new customer arrives, the apprentice has no idea what to say.

Memorization turns out not to be prediction.

It merely reproduces past observations.

Machine learning models face precisely the same danger.

A highly flexible model may effectively memorize every observation in the training dataset.

Its training error becomes extremely small because every previous example has been fitted almost perfectly.

Yet when presented with a new biological sample, the model often performs surprisingly poorly.

This illustrates one of the most important distinctions in machine learning.

> **Learning means discovering general principles—not memorizing individual observations.**

The purpose of a predictive model is not to explain yesterday's data perfectly.

Its purpose is to make reliable predictions about tomorrow's experiments.

---

## Generalization: predicting unseen data

This ability to make accurate predictions for new observations is called **generalization**.

Generalization is ultimately what makes machine learning scientifically useful.

A model that performs perfectly on the training data but fails on new observations has learned little about the underlying biological process.

Instead, it has merely adapted itself to the particular dataset from which it was constructed.

By contrast, a model that captures the general biological relationship will continue to perform well when applied to independent experiments, different laboratories, or newly discovered proteins.

Generalization therefore provides a much more meaningful measure of model quality than training accuracy alone.

This idea fundamentally changes how we evaluate predictive models.

Rather than asking

> **How well does the model explain the existing data?**

we ask

> **How well will the model predict data that it has never seen before?**

This seemingly small change in perspective is one of the defining principles of modern machine learning.

---

## The sweet spot of model complexity

We can now understand why neither extremely simple nor extremely complex models are desirable.

A model that is too simple cannot capture the underlying biological relationship. It systematically misses important patterns in the data.

A model that is too complex captures not only the biological relationship but also random fluctuations that are unique to the training dataset.

Between these two extremes lies an intermediate level of complexity.

Here, the model is sufficiently flexible to describe the relevant biological mechanisms while remaining simple enough to ignore random noise.

This intermediate region is often called the **sweet spot** of model complexity.

Finding this sweet spot is one of the central goals of machine learning.

Remarkably, the optimal model is almost never the one that produces the smallest training error.

Instead, it is the model that best balances flexibility with the ability to generalize.

The remainder of this chapter explores how this balance can be understood mathematically and how it can be estimated from experimental data.

---

### Key Concepts

- A model that perfectly fits the training data is not necessarily the best predictive model.
- Memorizing observations is fundamentally different from learning general biological principles.
- The ability to predict unseen observations is called **generalization**.
- Increasing model complexity improves training performance but eventually reduces predictive performance.
- The best predictive model balances flexibility with generalization.

---

### Summary

As model complexity increases, predictive models become increasingly capable of fitting the training data. Beyond a certain point, however, additional flexibility no longer captures biological relationships but instead models random fluctuations that are specific to the training dataset. The resulting model performs excellently on known observations but poorly on new data. The central objective of machine learning is therefore not perfect fitting, but good generalization—the ability to make reliable predictions for future observations.

---

### Self-Check Questions

1. Why is a perfect fit to the training data not necessarily desirable?
2. What is the difference between memorization and learning?
3. What is meant by *generalization*?
4. Why is generalization more important than training accuracy?
5. Why does increasing model complexity eventually reduce predictive performance?
6. What is the "sweet spot" of model complexity?
7. Why should predictive models be evaluated on unseen data rather than only on the data used for training?