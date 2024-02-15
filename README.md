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

T(n) = 3 * T(n/3) + 1

T(n/3) represents the time taken to process each third of the array recursively, and 1 represents the time taken to sum the elements of the array since it's constant.

Using the master theorem to solve the recurrence relation, we find that a = 2, b = 2, and f(n) = O(n).

The master theorem states that if:

f(n) = O(n^c) where c < log_b(a), then T(n) = Θ(n^log_b(a)).
f(n) = Θ(n^c) where c = log_b(a), then T(n) = Θ(n^c * log n).
f(n) = Ω(n^c) where c > log_b(a), and if af(n/b) ≤ kf(n) for some constant k < 1 and sufficiently large n, then T(n) = Θ(f(n)).
In our case, f(n) = O(n), a = 2, b = 2, and c = 1.

Since c = 1 = log_b(a), we fall under case 2 of the master theorem. Therefore, T(n) = Θ(n * log n).

Hence, the final big theta complexity of the algorithm is Θ(n * log n).
