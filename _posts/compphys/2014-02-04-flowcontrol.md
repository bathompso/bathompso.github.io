---
title: 'Lesson 2.3: Flow Control'
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

Up until now, all the programs you have seen and written have commands that are executed in a linear form, but there are many times when you need to break this simple flow. In this section we will explore `if`, `while`, and `for` commands for use in your programs.

## 2.3.1 IF / ELSE Statements

`if`/`else` statements are useful for doing optional commands when a condition is met. Commands within an `if` block are *only* run if a condition is met. An `else` block is only run if the condition fails.

{% highlight python code %}
x = -10
if x > 0:
	print("x is positive")
else:
	print("x is negative")
{% endhighlight %}
{% highlight bash results %}
x is negative
{% endhighlight %}
{% codeclear %}

Here the condition `x > 0` is false, so only the `else` block is run.

It is important to note that all commands contained within an `if` statement are marked by an indent. Where other languages (C, C++) mark multiple commands within an `if` statement by curly braces, python will *only* recognize commands that are indented with respect to the `if` line. This is one of the most important aspects of Python: **indentation level matters**. If you needlessly indent commands with respect to each other (or don't indent those below a flow control command), you will receive an error when running the program.

In an `if` command, you can use several numerical comparison operators:

{% highlight python code %}
x == 1     # Equality (double equal signs)
x != 1     # Not equal to
x > 1      # Greater than
x < 1      # Less than
x >= 1     # Greater than or equal to
x <= 1     # Less than or equal to
{% endhighlight %}
{% codeclear %}

In addition to numerical comparison operators, you can use any Python function that returns a boolean (True/False) value.

You can "reverse" an `if` / `else` block using a `not` statement:

{% highlight python code %}
thislist = ['hello', 'world', 1]
if not this_list contains 'hello':
	print("This list does not say 'hello'")
{% endhighlight %}
{% codeclear %}

Here, the `contains` statement returns True if the list contains any element which is equal to the specified value.

### Compound IF Statements

You can string together multiple conditions using `and` or `or` statements.

{% highlight python code %}
if x > 5 or x < -5:
	x += 10
if y > 1 and y < 15:
	y *= 5
{% endhighlight %}
{% codeclear %}

In some cases you may have multiple conditions you want to test. You can string together multiple `if` statements using the `elif` syntax. This means that if the above condition is not met, test another condition:

{% highlight python code %}
if pH > 10:
	print("Really Basic")
elif pH < 7:
	print("Slightly Basic")
elif pH == 7:
	print("Water")
elif pH > 2:
	print("Slightly Acidic")
else:
	print("Really Acidic")
{% endhighlight %}
{% codeclear %}

## 2.3.2 WHILE Loops

A `while` block contains logic that is run *an indefinite amount of times*.

{% highlight python code %}
i = -100
while i < 0:
	i = int(input('Enter a positive number: '))
	if i < 0:
		print("You entered a negative number, try again.")
{% endhighlight %} 
{% codeclear %}

The `while` block states a condition, and will continue looping through a set of logic until that condition is no longer true. Note that all the logic contained within the `while` loop is indented, and the logic within the `if` statement is indented further. All flow-control command require logic to be indented for it to be run within the block.

In the code above, you ask the user for a positive valued input, but you can't always be sure they will enter one. The program will continue asking for input until the user enters a correct value. 

These types of loops are often very helpful when dealing with user input that needs to be in a specified range. You can assume the user will be smart, but that is not always the case. It's better to write a loop like this than for your program to simply fail with a numerical error somewhere later in the logic.

`while` loops can often cause problems though:

{% highlight python code %}
i, j = -1, 0
while i < 0:
	j += 1
{% endhighlight %}
{% codeclear %}

In the above scenario, the loop will run forever. There is no logic contained within the `while` block that will push `i` above zero and therefore the condition `i < 0` will always be true. When running a `while` loop, make sure that the condition has a way of being met.

### CONTINUE and BREAK

While within a loop, there may be times when you want to break out of that structure. The `break` and `continue` statement will help you do just that.

{% highlight python code %}
i = -1
while i < 0:
	myname = input("What's my name: ")
	if myname == "Ben":
		break
	print("Wrong.")
{% endhighlight %}
{% codeclear %}

Here, the program will continue to ask for my name until you guess right. When you do, the loop will exit. Notice that the condition `i < 0` is always true (we don't adjust `i` within the loop logic), but we escape from looping through the use of the `break` command.

{% highlight python code %}
i = 0
print("Enter 10 positive numbers")
while i < 10:
	value = int(input("Enter a number: "))
	if value < 0:
		print("That number is negative.")
		continue
	i += 1
{% endhighlight %}
{% codeclear %}

The `continue` command, activated when a user gives a negative number in the code above, skips the rest of the loop logic and starts at the beginning again. The counter, `i`, will not advance unless a positive number is specified.

## 2.3.3 FOR Loops

A `for` loop is similar to a `while` loop, except that the `for` loop logic is run a *set number of times*. Unlike `for` loops in other languages (C, C++, FORTRAN, etc.), Python `for` loops do not run on indexes, but items within a list or vector.

{% highlight python code %}
k = [10, 15, 17.6, "hello"]
for e in k:
	print(e)
{% endhighlight %}
{% highlight bash results %}
10
15
17.6
'hello'
{% endhighlight %}
{% codeclear %}

In this example, we loop over elements of the list `k`, with `e` being assigned the value of each consecutive element each time through the loop. This looping structure can take some time getting used to, but it is useful in many circumstances. It is also less computationally intensive, as you don't have to evaluate a condition like you do in a C or C++ loop: `for(int i = 0, i < 19; i++){}`. 

However, you may find yourself needing a C-like `for` loop, which you can create using the `range()` function. 

{% highlight python code %}
x = range(6)
y = range(15)
print(x)
print(y)
{% endhighlight %}
{% highlight bash results %}
[0, 1, 2, 3, 4, 5]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
{% endhighlight %}
{% codeclear %}

`range()` returns a list where every element's value is equal to its index. By looping over every element of this list, you get a sequence of indexes which can be used for other arrays. The `range()` function is especially useful when paired with the `len()` function on lists or arrays.

{% highlight python code %}
a = [10, 15, 18, 19, 34]
b = [7, 19, 3, 10, 24]
dotprod = 0
for i in range(len(a)):
	dotprod += a[i] * b[i]
{% endhighlight %}
{% codeclear %}

This snippet of code loops over all the indexes in the array `a`, and computes a dot product with the vector `b`. Python saves computation time using the `for` loop structure it does, but can easily adapt to function just like older programming languages do.

The `break` and `continue` commands work exactly the same for `for` loops as they do for `while` loops above. You can use them to escape the loop or skip the remainder of the current loop iteration if necessary.

### In-line FOR Loop

There are lots of small computations that require for loops: doing math operations of every element of a list, finding the location of values within a list, etc. These small computations can either be written as a few lines of code in a normal `for` loop, or they can be simplified in a single command. Lets go through some examples.

{% highlight python code %}
i = [1, 5, 3, 8, 10, 57, -14, 0]
j = []
for e in i:
	j.append(10 * e)
{% endhighlight %}
{% codeclear %}

Here, we are simply transforming vector `i` using simple math and copying it to `j`. In this form, the logic takes 3 lines of code. We can instead using an in-line `for` loop to do the exact same thing in one line:

{% highlight python code %}
i = [1, 5, 3, 8, 10, 57, -14, 0]
j = [10 * e for e in i]
{% endhighlight %}

The second line here contains all the logic of the three lines above. It creates a new list, where each element is equal to 10 times every element of `i`. Now you might think that this is all that powerful or useful, but it vastly simplifies code writing in many scenarios.

Let's look at another example: say you send out a survey to people about what they majored in. Using all the responses, you want to find all the physics and math double majors.

{% highlight python code %}
physics = ['n', 'n', 'y', 'n', 'n', 'n', 'y', 'y']
math = ['y', 'n', 'n', 'y', 'y', 'y', 'y', 'n']
physmath = []
for i in range(len(physics)):
	if physics[i] == 'y' and math[i] == 'y':
		physmath.append(i)
print(physmath)
{% endhighlight %}
{% highlight bash results %}
[6]
{% endhighlight %}
{% codeclear %}

Using these 4 lines of code, we will produce a list `physmath` which will tell us which people (as an index) are physics and math double majors. We can see from the output that only one person is: person #7 (index 6). Using the same format as above, we can write this `for`/`if` loop as a single-lined statement.

{% highlight python code %}
physics = ['n', 'n', 'y', 'n', 'n', 'n', 'y', 'y']
math = ['y', 'n', 'n', 'y', 'y', 'y', 'y', 'n']
physmath = [i for i in range(len(physics)) if physics[i] == 'y' and math[i] == 'y']
print(physmath)
{% endhighlight %}
{% highlight bash results %}
[6]
{% endhighlight %}
{% codeclear %}

The in-line `for` loop syntax is exactly the same as in the previous example, except this time it contains an added `if` statement. This one line of code does everything the above 4 lines do, and also makes it a bit more readable. Whenever you find yourself in the situation where you need a list of values created from a `for` loop, consider using this in-line syntax.


