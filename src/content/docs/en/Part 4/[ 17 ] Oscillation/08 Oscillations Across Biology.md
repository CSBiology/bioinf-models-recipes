## 17.8 Oscillations Across Biology

The previous sections introduced two universal mechanisms that generate stable oscillations:

- highly sensitive negative feedback, and
- delayed negative feedback.

Although these mechanisms were developed using relatively simple models, they apply remarkably well across many areas of biology. Once these principles are understood, oscillatory behavior can often be interpreted as the natural consequence of the underlying regulatory architecture rather than as an isolated biological phenomenon.

In this section, we briefly revisit several biological examples and interpret them from the perspective of dynamical systems.

### Tremor: when motor control becomes oscillatory

Maintaining a stable body posture is another example of negative feedback regulation.

The nervous system continuously measures muscle length using stretch receptors. These sensory signals are transmitted to the spinal cord and brain, where they are processed to generate motor commands that adjust muscle contraction. Together, this forms a classical negative feedback loop.

Under normal conditions, this controller stabilizes the position of the limb. Small disturbances are corrected smoothly, allowing us to hold our hand steady or maintain a constant posture.

In certain neurological disorders, however, this stable equilibrium is lost and replaced by rhythmic oscillations known as **tremors**.

From the perspective of dynamical systems, tremors are not random fluctuations. They represent a transition from a stable point attractor to a stable limit cycle.

### Multiple sclerosis: increasing the time delay

A characteristic symptom of multiple sclerosis is tremor.

The disease damages the myelin sheath surrounding nerve fibers, reducing the speed at which electrical signals propagate through the nervous system.

From a modelling perspective, this does not fundamentally change the structure of the feedback loop.

Instead, it increases the **signal transmission delay**.

The controller now receives sensory information later than before.

As we learned from the respiratory model, sufficiently large delays destabilize a homeostatic controller and naturally generate sustained oscillations.

The mathematical interpretation is therefore straightforward:

> Demyelination increases the effective delay of the feedback loop, pushing the system toward a Hopf bifurcation.

### Stroke: increasing the feedback sensitivity

Tremors can also arise after a stroke.

In this case, the mechanism is quite different.

Under normal physiological conditions, higher brain centers continuously modulate and dampen many spinal reflexes. This descending inhibition prevents excessive reflex responses.

Following certain strokes, this inhibitory control is partially lost.

The remaining spinal reflexes therefore become **hyper-responsive**.

In the language of our models, the feedback sensitivity has increased.

The controller now reacts too strongly to small deviations, repeatedly overshoots the equilibrium, and produces sustained oscillations.

Although the biological cause differs completely from multiple sclerosis, the mathematical interpretation is identical.

Again, the system approaches a Hopf bifurcation.

### Oscillatory gene expression

Oscillatory behavior is not limited to physiology.

Many developmental processes rely on rhythmic gene expression.

One of the best-known examples is the **Hes1 transcription factor**, whose expression oscillates during vertebrate embryonic development. Hes1 represses its own transcription through a negative feedback loop, generating repeated cycles of mRNA and protein production.

Interestingly, early mathematical models showed that a simple two-component feedback loop was insufficient to reproduce the experimentally observed oscillations.

Introducing an additional interaction component—or, equivalently, additional delay within the regulatory network—was sufficient to generate sustained oscillatory behavior.

This illustrates an important lesson:

The purpose of mathematical modelling is not merely to reproduce observations.

Rather, models help identify which biological mechanisms must exist for the observed dynamics to occur.

In the case of Hes1, the model suggested that additional regulatory processes were required before these mechanisms had been fully characterized experimentally.

### Circadian rhythms

Perhaps the best-known biological oscillators are the **circadian clocks** that synchronize physiology with the 24-hour day-night cycle.

Circadian oscillators are based on interconnected transcriptional and translational feedback loops involving multiple genes and proteins.

Although these molecular networks are far more complex than the simple examples discussed in this chapter, they rely on exactly the same fundamental principles:

- negative feedback,
- nonlinear regulation,
- and intrinsic delays caused by transcription, translation, protein transport, and degradation.

The complexity of the molecular network changes, but the underlying dynamical principles remain remarkably similar.

### One mathematical language for many biological systems

These examples illustrate one of the central ideas of systems biology.

Very different biological systems—

- endocrine regulation,
- respiratory control,
- motor control,
- gene regulation,
- and circadian clocks—

may appear unrelated when viewed from a purely molecular perspective.

However, when represented as dynamical systems, they often share the same mathematical structure.

Negative feedback generates stability.

Increasing sensitivity or introducing delays destabilizes the equilibrium.

A Hopf bifurcation creates a stable limit cycle.

Recognizing these common principles allows us to transfer insights from one biological system to another, revealing connections that are difficult to identify from biological observations alone.

This ability to uncover universal principles is one of the greatest strengths of mathematical modelling in biology.

### Key concepts

- Oscillatory behavior occurs across many levels of biological organization.
- Tremors can result from increased feedback delay or increased feedback sensitivity.
- Different biological mechanisms can produce the same mathematical dynamics.
- Oscillatory gene expression arises from delayed negative feedback.
- Circadian clocks are complex biological oscillators based on the same fundamental principles.
- Mathematical models reveal common dynamical structures across seemingly unrelated biological systems.

### Summary

Oscillations are found throughout biology, from physiological regulation to gene expression and developmental processes. Despite their biological diversity, these systems often rely on the same underlying dynamical mechanisms. Increased feedback sensitivity and delayed feedback repeatedly emerge as universal causes of sustained oscillations, demonstrating that mathematical models can uncover common principles that transcend individual biological systems.

### Self-check questions

1. Why can tremors be interpreted as stable oscillations rather than random fluctuations?
2. How does multiple sclerosis increase the likelihood of oscillatory behavior?
3. Why can stroke-induced tremors be interpreted as an increase in feedback sensitivity?
4. Why was an additional regulatory component required in early Hes1 models?
5. Which common dynamical principles underlie endocrine regulation, respiratory control, and circadian clocks?
6. Why are mathematical models useful for comparing seemingly unrelated biological systems?