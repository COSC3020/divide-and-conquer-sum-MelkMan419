[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

basecase is 0 if t(n) is less than or equal to 2

T(n) = 3 * T(n/3) + 1

T(n/3) represents the time taken to process each third of the array recursively, and the constant 1 represents the time taken to sum the elements of the array since it's constant.
Using the Master Theorem to solve this recurrence relation:

Given \(a = 3\), \(b = 3\), and \(f(n) = O(n)\):

We're dealing with Case 1 of the Master Theorem, where \(f(n) = O(n)\) is polynomially larger than $\(n^{\log_b(a)} = n^{\log_3(3)} = n$\).

Therefore, the solution to the recurrence relation is \( $\Theta(n) $\).
