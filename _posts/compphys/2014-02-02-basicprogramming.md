---
title: 'Lesson 2.1: Basic Programming'
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


## 2.1.1 Comments

You can specify comments by starting the line with the '#' symbol.

{% highlight python code %}
# This is the program PYTHONTEST.PY
# It contains example problems from the text
{% endhighlight %}
{% codeclear %}

---

## 2.1.2 Basic Operators

### Variables

There are several rules when specifying variable names in Python: 

* **Variable assignments must always have the variable name on the left-hand side.** The code: ``1 = x`` will result in a syntax error. *The value on the left-hand side will always be overwritten by the value of the right-hand side.* Since ``1`` isn't a variable, it cannot be overwritten by the value of ``x``.
* **Variable names cannot start with a number, contain special characters, or spaces.** An underscore character, '\_' , is allowed, however. ``_long_variable_name`` and ``wood_2x4`` are allowed variable names, while ``4corners`` and ``black&white`` are not allowed.
* **Variable names are case sensitive.** The variables ``name`` and ``Name`` are distinct variables and can have different values. Take note of what capitalization you use when declaring your variable and make sure to keep it consistent throughout your code. Considering the variety of variable names available, it is ill-advised to have two variables within a code that vary only by capitalization.

You may run into a situation where you want to assign values to multiple variables at the same time. This can be accomplished easily in python by separating each variable and value by a comma:

{% highlight python code %}
pi, e, R = 3.14159265, 2.71828182, 8.3144621
{% endhighlight %}
{% codeclear %}

### Basic Math Operations

Basic arithmetic operations in python are accomplished via an obvious syntax:

{% highlight python code %}
z = x + y		  # Addition
z = x - y		# Subtraction
z = x * y		# Multiplication
z = x / y		# Division
z = x**y			# Exponentiation
z = x//y			# Integer Division
z = x % y		# Modulus
{% endhighlight %}
{% codeclear %}

Most of these operations are obvious, and you learned years ago. The last two, however, may not be familiar. *Integer Division*, ``x//y``, gives the integer part of a division. For example, ``5//2`` is 2. Any decimal part of the answer is removed. *Modulus* you may remember from long division: it returns the remainder. ``5%2`` returns 1, because 5/2 is 2 with a remainder of 1. Both of these operators are not as widely used, but can come in handy for certain situations.

### Basic Modifiers

There are many instances of times when we might want to adjust the value of a variable, and then re-save it. For example, if you are using a variable as a counter. you can do this by using a modifier:

{% highlight python code %}
x += 1			# Add 1 to x
x -= 5		  # Subtract 5 from x
x *= -3.4		 # Multiply x by -3.4
x /= 4		  # Divide x by 4
x //= 3.4		  # Divide x by 3.4 and round down to integer
{% endhighlight %}
{% codeclear %}

---

## 2.1.3 Data Types
There are usually only 3 main types of variables you'll encounter in a Python program: string, integers and floats. Note that Python does not have a `double` class, like C++, as all floats are already 64-bit.

You may find yourself having to convert between these classes, which can be done using the `str()`, `int()`, and `float()` functions.

{% highlight python code %}
# You read in a number as a string (by default), and need to convert to a float
string_number = '10.3456'
number = float(string_number)
{% endhighlight %}
{% codeclear %}

{% highlight python code %}
# The intricacies of Python division: the resulting type is the same as the input types.
x = 3 / 4          # This is 0
y = float(3) / 4   # This is 0.75
{% endhighlight %}
{% codeclear %}

---

## 2.1.4 Modules

### Importing Modules

"Vanilla" Python is not capable of doing everything you might want: for example, there are no sine or cosine functions. More advanced functions are available via add-on modules, that can be accessed using the `import` command:

{% highlight python code %}
import numpy
x = numpy.sin( numpy.pi )
{% endhighlight %}
{% codeclear %}

To access the functions contained with the `numpy` (numerical python) package, you type `numpy.` along with the function name. There are several other ways of importing useful functions from modules.

### Module shortnames

To import plotting functionality in python, we must use the `matplotlib.pyplot` (pyplot is a submodule within the matplotlib module). Writing `matplotlib.pyplot.___` for every function will become tedious when using multiple functions from the submodule, so we can assign it a short-name.

{% highlight python code %}
import matplotlib.pyplot as plt
plt.plot(x,y)
{% endhighlight %}
{% codeclear %}

Instead of having to type out the full package name, we only have to type `plt.`. This makes typing of programs with lots of external package calls much easier on our sanity.

### Importing Functions

What if your program only needs to compute sines, but requires no other advanced math functionality. It may be nice to not have to incur the overhead of having to import the entire `numpy` module, but only `numpy.sin()`. This can be accomplished.

{% highlight python code %}
from numpy import sin
y = sin(x)
{% endhighlight %}
{% codeclear %}

You'll notice that when you import the single function, you do not have to specify the module name anymore. `numpy.sin()` becomes simple `sin()`. You can also import multiple functions from modules this way:

{% highlight python code %}
from numpy import sin, cos, sqrt
from matplotlib.pyplot import *
a = sin(x)
b = cos(sqrt(y))
plot(a,b)
{% endhighlight %}
{% codeclear %}

Above we have imported several function from `numpy` as well as importing *everything* from `matplotlib.pyplot` for use in our program.

### Warning

Although importing functions from modules makes it easy to access them, I *strongly discourage* use of it. Let's say you get this program from somebody, which analyzes a [color-magnitude digram](http://en.wikipedia.org/wiki/Color-magnitude_diagram), and you want to repurpose a snippet of code:

{% highlight python code %}
from numpy import *
from scipy import *
from astropy import *

...

ncol = 500
nmag = 1000
grid = vstack(map(ravel, meshgrid(linspace(min(cmdcol), max(cmdcol), ncol), linspace(min(cmdmag), max(cmdmag), nmag)))).T
{% endhighlight %}
{% codeclear %}

Where do all these functions come from? If I want to repurpose only these 3 lines, do I now need to import 3 gigantic modules? My only other option is spending a bunch of time on Google to find out where all of these functions come from instead of simply copying the line and moving on. Here's a better version of the same code.

{% highlight python code %}
import numpy as np
import scip
import astropy

...

ncol = 500
nmag = 1000
grid = np.vstack(map(np.ravel, np.meshgrid(np.linspace(min(cmdcol), max(cmdcol), ncol), np.linspace(min(cmdmag), max(cmdmag), nmag)))).T
{% endhighlight %}
{% codeclear %}

Now I know: I only need to import `numpy` to get this line of code to do something. The other modules are unnecessary. See how much easier to read this is? And it's only a few extra characters in the line.  **This is the one aspect of the textbook which I do not like. The author seems intent on always `from ____ import ____` instead of using module aliases. Do not follow his lead!** Spend a little bit of extra time to write out each module name so that people coming after you (or maybe an older version of yourself) can understand what is going on in your code.

---

## 2.1.5 Input and Output

### Printing to Screen

Printing to the screen can be accomplished via the ``print`` command:

{% highlight python code %}
x = 1
print x
{% endhighlight %}
{% highlight bash results %}
1
{% endhighlight %}
{% codeclear %}

You may (or may not) notice that the `print` function is a bit different than all the others. Every other function in Python expects all arguments to be enclosed in parentheses, while the `print` function expects a space. This difference is remedied in Python 3, however we will be sticking to Python 2.x for this class. To make your programs Python 3-compatible (and also get into a good habit of writing functions the same way), we will `import` the new `print	` function into Python 2.

{% highlight python code %}
from __future__ import print_function
x = 1
print(x)
{% endhighlight %}
{% highlight bash results %}
1
{% endhighlight %}
{% codeclear %}

[Note: `__future__` is enclosed by two unerscores on either side] I would suggest adding the *import from future* to the beginning of every program. It will keep things consistent, and make it easier to transition to Python 3 when the time comes. Using the new print function, there are several more advanced ways to print things to the screen. 

You can print out any variable, as well as do arithmetic within the ``print`` command itself:

{% highlight python code %}
x, y = 4, 3
print(x*y)
print(y**x)
{% endhighlight %}
{% highlight bash results %}
12
81
{% endhighlight %}
{% codeclear %}

Each ``print`` statement will end the line with a carriage return. If you want to print out multiple values on a single line, use a single ``print`` statement with each argument separated with a comma:

{% highlight python code %}
x, y = 4, 3
print('Multiplication:', x*y, 'Exponential:', y**x)
{% endhighlight %}
{% highlight bash results %}
Multiplication: 12 Exponential: 81
{% endhighlight %}
{% codeclear %}

By default, each argument in the ``print`` statement is separated by a single space. You can have much more fancy formatting, however, by specifying a [C-like format string](http://www.cprogramming.com/tutorial/printf-format-strings.html). If you have not used these types of string (usually in C or C++ programming, the 'awk' UNIX command), you may want to familiarize yourself with them. In the example below, we print out some basic physical constants to 4 decimal places:

{% highlight python code %}
pi, e, R = 3.14159265, 2.71828182, 8.3144621
print("pi = %6.4f      exponential e = %6.4f\n\Ideal Gas Constant = %6.4f" % (pi, e, R))
{% endhighlight %}
{% highlight bash results %}
pi = 3.1416      exponential e = 2.7182

Ideal Gas Constant = 8.3145
{% endhighlight %}
{% codeclear %}

In this formatted ``print`` statement, you specify your formatting string first (which can contain escape characters like '\n' and '\t'), then a '%' sign, followed by a list of variables in parentheses. These types of ``print`` statements are quite useful, either for creating lists of variables that align, or taming floating-point variables. If a format is not specified, Python will often print out floating-point variables to their maximum precision: 8 decimal places! To make better sense of your data, format it to a reasonable precision.

### Reading in Values From the User

There are many times when a program will need User input. Entries from the command line can be processed using the `input()` function:

{% highlight python code %}
x = input("Enter value for x: ")
{% endhighlight %}
{% codeclear %}

The `input()` function will always return a string, but there are many times when you will ask the uder to enter a number. This input will have to be converted before it can be used in math functions.

{% highlight python code %}
x = float(input("Enter numberical value for x: "))
{% endhighlight %}
{% codeclear %}

Here we have converted the user input to a `float` value, for later use. Keep in mind that your program will fail and give an error if the user does not enter a valid number.

## 2.1.6 Timing

There are many times when you want to determine how efficient your program is. One way to do this is by timing how long it takes to accomplish tasks, which can be done via the `time.time()` command.

{% highlight python code %}
from time import time
start_time = time()

...    # Program Steps Here

end_time = time()
print("Program took %.1fs to complete" % (end_time - start_time))
{% endhighlight %}
{% codeclear %}

*Note: because of the name redundancy of the `time()` function and `time` module, this is the only time I ever advocate using the `from ____ import ____` syntax*. The `time()` function returns a counter in units of seconds, so the subtraction is the elapsed time the program takes.

When we get near the end of the course, we will take a look at writing parallel programs, which should significantly speed up processing times. We will make heavy use of the `time()` function to quantify the speed increase when running a parallel as opposed to a serial program.

