---
title: Chapter 2
description: From Biological Questions to Computational Problems
---

# Chapter 2 — From Biological Questions to Computational Problems

## Learning Goals

After working through this chapter, you should be able to:

- translate biological questions into precise computational problems  
- identify inputs, outputs, and constraints of a problem  
- distinguish between informal reasoning and formal problem definitions  
- understand how modeling choices affect problem formulation  
- recognize that multiple valid formulations may exist for the same biological question  
- prepare a problem in a way that enables algorithmic solutions  

---

## 2.1 From Curiosity to Computation

Biological research often begins with broad and informal questions:

- Where does DNA replication start?  
- Are two genes related?  
- Do groups of cells behave differently?  

These questions are intuitive and meaningful, but they are **not yet computational problems**.

Algorithms require:

- clearly defined inputs  
- precisely specified outputs  
- unambiguous rules  

The central challenge is therefore:

> How do we transform a biological question into something a computer can solve?

---

## 2.2 Running Example: Refining the ORIC Problem

We return to our central example:

> **Where is the origin of replication (ORIC) in a genome?**

At this stage, the question is still vague:

- What exactly do we mean by “origin”?  
- What data do we use?  
- What constitutes a correct answer?  

To make progress, we must **refine the question**.

---

### Step 1: Define the Input

We begin by specifying the available data:

- a DNA sequence of length *n*  
- represented as a string over {A, C, G, T}  

This step connects directly to the **modeling step** from Chapter 1.

---

### Step 2: Define the Output

What do we want to compute?

Possible answers include:

- a single position in the genome  
- a region (interval)  
- a ranked list of candidate positions  

Each choice leads to a **different computational problem**.

---

### Step 3: Define the Criterion

How do we decide whether a candidate solution is good?

For example:

- maximize a signal (e.g. GC skew)  
- detect a change point  
- identify a region with specific statistical properties  

This is the most critical step:

> The criterion defines what the algorithm will optimize.

---

## 2.3 Multiple Valid Problem Formulations

An important insight is:

> There is rarely a single “correct” formulation of a biological problem.

For the ORIC problem, we might define:

- a **signal detection problem**  
- a **pattern matching problem**  
- a **statistical inference problem**  

Each formulation:

- emphasizes different aspects of the data  
- leads to different algorithms  
- may produce different answers  

This is not a flaw, but a fundamental property of modeling.

---

## 2.4 A Simpler Example: Sequence Comparison

Before continuing with ORIC, consider a simpler case:

> **Are two sequences similar?**

We can formalize this in multiple ways.

---

### Formulation 1: Exact Matching

- Input: two sequences  
- Output: yes or no  
- Criterion: sequences must be identical  

This is simple but biologically unrealistic.

---

### Formulation 2: Similarity Score

- Input: two sequences  
- Output: a numerical score  
- Criterion: number of matches, mismatches, gaps  

This formulation is more flexible and leads directly to **alignment algorithms**.

---

### Insight

Even for a simple question, different formulations lead to very different computational approaches.

---

## 2.5 The Role of Modeling Choices

Problem formulation depends critically on how we model the data.

For example, a DNA sequence can be represented as:

- a simple string  
- a sequence with positional weights  
- a probabilistic process  
- a graph of possible states  

Each representation enables different kinds of algorithms.

> The model determines what can be computed.

In the ORIC example:

- a simple string model allows counting patterns  
- a statistical model allows detecting significant deviations  
- a structural model may capture replication mechanisms  

---

## 2.6 Constraints and Assumptions

Every computational problem includes implicit or explicit assumptions:

- noise in the data  
- independence between observations  
- stationarity of processes  
- biological plausibility  

These assumptions:

- simplify the problem  
- make algorithms possible  
- but may introduce bias  

This connects back to Chapter 1:

> There is no universally best method, only methods that are appropriate under certain assumptions.

---

## 2.7 From Problem to Algorithm

Once a problem is formally defined, we can begin designing or selecting an algorithm.

A well-defined problem includes:

- **Input**  
- **Output**  
- **Objective or criterion**  
- **Constraints**  

At this point, the transition is natural:

> A precise problem invites an algorithmic solution.

For example:

- similarity scoring → alignment algorithms  
- pattern detection → motif discovery  
- probabilistic modeling → HMMs  

---

## 2.8 Revisiting the ORIC Problem

Let us summarize a possible formalization:

- Input: genome sequence  
- Output: position or region  
- Criterion: maximize a signal indicating replication origin  

This formulation is still flexible, but now:

- it is precise enough to implement  
- it can be refined further  
- it allows comparison of different methods  

We will revisit this problem later with increasingly sophisticated models.

---

## 2.9 Learning to Formulate Problems

A key skill in bioinformatics is not just solving problems, but **formulating them**.

This involves:

- identifying relevant data  
- choosing an appropriate representation  
- defining meaningful objectives  
- understanding limitations and assumptions  

This skill is transferable across domains and essential for working with new types of biological data.

---

## 2.10 Bridge to Sequence Models

In this chapter, we transformed biological questions into computational problems.

We now take the next step:

> We begin developing concrete models and algorithms to solve these problems.

We start with the simplest and most fundamental case:

> comparing biological sequences.

This leads us to the first major topic:

- **Sequence alignment as a model of similarity**

---

## Self-Check Questions

1. Why are biological questions not immediately suitable for computation?  
2. What are the key components of a formal computational problem?  
3. How can the ORIC problem be formulated in different ways?  
4. Why can multiple formulations of the same problem coexist?  
5. How do modeling choices influence algorithm design?  
6. What role do assumptions play in computational biology?  
7. Why is problem formulation a critical skill?