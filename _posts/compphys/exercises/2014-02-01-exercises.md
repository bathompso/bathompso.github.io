---
title: 'Lesson 2 Exercises'
author: bathompso
layout: edupost
categories:
  - education
  - compphys
  - basicpython
tags:
image: 
nav: 0
---

## 2.1 Exercises (Basic Programming)

**Example 2.1** - *A Ball Dropped From A Tower* [Solution to Exercise 2.1 in the text]

> A ball is dropped from a tower of height h with initial velocity zero. Write a program that asks the user to enter the height in meters of the tower and then calculates and prints the time the ball takes until it hits the ground, ignoring air resistance. Use your program to calculate the time for a ball dropped from a 100 m high tower.

We know from Physics 101 that the position of an object under the control of (only) gravity is: \\( x = x\_0 + v\_0 t + 0.5gt\^2 \\). The initial height, \\( x\_0 \\), will be input from the user, and \\( v\_0 \\) is given to be zero. We also want to determine the time when \\( x = 0 \\), as that is when the ball hits the ground.

Using all of this information, we can solve the quadratic equation: \\( t = \sqrt(-2x_0 / g) \\). Using this simple equation, we can write our program.

{% highlight python code %}
import numpy as np    # sqrt() is not built-in
g = -9.8     # gravity in m/s

# Get user input
h = float(input("Enter height of tower (m): "))

# Calculate Time
t = np.sqrt(-2.0 * h / g)
print("It takes %.1f seconds for the ball to fall from a %dm tower" % (t, h))
{% endhighlight %}
{% highlight bash results %}
Enter height of tower (m): 100
It takes 4.5 seconds for the ball to fall from a 100m tower
{% endhighlight %}
{% codeclear %}

---

**Exercise 2.2** - *Altitude of a Satellite*

Work through exercise 2.2 in the book.


