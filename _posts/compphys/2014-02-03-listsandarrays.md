---
title: 'Lesson 2.2: Lists and Arrays'
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

## 2.2.1 Lists

The most basic "structured" data is a Python list. A list is a vector, and can be filled with *any* type of data: strings, integers, floats, etc. To create a list, simply enclose the necessary data in square brackets. Values in the list should be separated by commas.

{% highlight python code %}
fib = [1, 1, 2, 3, 5, 8, 13, 21, 34]
sentence = ["Here", "are", "some", "words."]
{% endhighlight %}
{% codeclear %}

You can also define elements of a list using mathematical expressions.

{% highlight python code %}
x = 10
y = 2
z = [x, x*y, x**y]
{% endhighlight %}
{% codeclear %}

To select a specific value from the list, you can specify an index within square brackets. Indexes (as in C++), start from 0: *the first element of the array is index 0, the second element is index 1, etc.*

{% highlight python code %}
fib = [1, 1, 2, 3, 5, 8, 13, 21, 34]
print("The fifth fibonacci number is", fib[4])
print("The ninth finonacci number is", fib[8])
{% endhighlight %}
{% highlight bash results %}
The fifth fibonacci number is 5
The ninth finonacci number is 34
{% endhighlight %}
{% codeclear %}

You can also index Python lists in *reverse* order. Index -1 is the last element of the list, index -2 is the 2nd to last element, and so on. This can come in handy in many situations.

### Adding and Subtracting From Lists

Lists are mutable objects, being able to change in length. When creating a list, you do not have to specify any values. An empty list, `[]`, can be created and assigned to a variable, and then values can be *appended* on. This can be done with the `.append()` command.

{% highlight python code %}
names = []
names.append("Josh")
names.append("Kyle")
print(names)
{% endhighlight %}
{% highlight bash results %}
['Josh', 'Kyle']
{% endhighlight %}
{% codeclear %}

The opposite of the `.append()` function is the `.pop()` function:

{% highlight python code %}
r = [1, 3, 5, 8, 0]
r.pop()
print(r)
{% endhighlight %}
{% highlight bash results %}
[1, 3, 5, 8]
{% endhighlight %}
{% codeclear %}

The `.pop()` function, without any arguments, removes the last element of a list. By specifying an index argument within `.pop()`, you can remove any element you like from the list.

{% highlight python code %}
friends = ["Bob", "Jim", "Mike", "Craig"]
friends.pop(1)  # We don't like Jim anymore
print(friends)
{% endhighlight %}
{% highlight bash results %}
['Bob', 'Mike', 'Craig']
{% endhighlight %}
{% codeclear %}

### List Functions

There are several functions that operate on lists, and give important information. One of these functions is the `len()` function, which returns the length of the list.

{% highlight python code %}
r = [1, 3, 5, 8, 0]
print(len(r))
r.pop()
print(len(r))
{% endhighlight %}
{% highlight bash results %}
5
4
{% endhighlight %}
{% codeclear %}

Another useful list function is `sum()`, which returns the sum of a list of integers or floats.

### Slicing

Sometimes we want to access a subset of entries within a list. We can do this by *slicing* the list:

{% highlight python code %}
r = [1, 2, 3, 4, 10, 11, 13, 15, 34, 67, 89, 105, 2]
sublist = r[3:7]
print(sublist)
{% endhighlight %}
{% highlight bash results %}
[4, 10, 11, 13]
{% endhighlight %}
{% codeclear %}

Slices start from the first index, and end one before the last index (in the example we end at index 6).

You can also slice without specifying the beginning or ending indexes. These slices will begin or end at the edge of the list:

{% highlight python code %}
r = [1, 2, 3, 4, 10, 11, 13, 15, 34, 67, 89, 105, 2]
print(r[7:])
print(r[:5])
{% endhighlight %}
{% highlight bash results %}
[15, 34, 67, 89, 105, 2]
[1, 2, 3, 4, 10]
{% endhighlight %}
{% codeclear %}

Along the same lines, `r[:]` will give the entire list (although this is not very useful).

### Mixed Data Types

In all the examples above, each element of the list has the same data type (integer, float, string). In general, this is not always the case.

{% highlight python code %}
mixed_list = [1, 15.245, "hello"]
{% endhighlight %}
{% codeclear %}

In addition to having mixed types of data within a list, you can also recursively nest lists.

{% highlight python code %}
nested = [["star1", 17.04, 1.051], ["star2", 14.04, 0.567, 105], ["star3", 11.04, 0.435, 100]]
print(nested[0][1])
{% endhighlight %}
{% highlight bash results %}
17.04
{% endhighlight %}
{% codeclear %}

Note several things in the above example

* Nested lists do not have to have the same length (as shown above).
* To reference a nested element, use square-bracketed indexes in succession: `nested[0][1]`

Nested lists are good for making a "matrix" with mixed datatypes. We will go over a better way of creating matrices, when all data is numerical, in a section below.

### Sorting

There are many times when you want to sort a list. In many computer science textbooks, this section would involve several pages of *sorting theory*: bubble sorts vs insertion sort vs bucket sort, etc. Because we want to use code as a tool, we don't need to understand all the nuances, but instead just know *how to do it*. This will be a common theme throughout the course. 

Sorting of a list is accomplished via the `.sort()` function. While this is mostly applied to numerical data, you can sort a mixed-data list just as easily.

{% highlight python code %}
t = [5, 10.0, -3, "hello"]
t.sort()
print(t)
{% endhighlight %}
{% highlight bash results %}
[-3, 5, 10.0, 'hello']
{% endhighlight %}

The most important thing to note about the `.sort()` function is that it operates *in-place*. The `t` vector is replaced by a sorted version of itself, as opposed to having it assigned to another variable. If you do not want this to happen; you want a sorted vector, but have to keep the original intact, you can instead using the `sorted()` function:

{% highlight python code %}
t = [5, 10.0, -3, "hello"]
st = sorted(t)
print(t)
print(st)
{% endhighlight %}
{% highlight bash results %}
[5, 10.0, -3, 'hello']
[-3, 5, 10.0, 'hello']
{% endhighlight %}

Here, `t` is left unchanged, while `st` holds the new sorted list. In both methods, strings are given a higher "value" than numbers, and are therefore placed last in the sorted list.

This is all good, but what if this list is in a specific order? Lets say you have a person's name in one list, and their age in another. If you sort the age list with `.sort()` you suddenly have no idea what name each one corresponds to. In this situation it would be preferrable to return a list of sorted *indices* instead of a completely sorted vector. You should make use of the `numpy.argsort()` function here instead.

{% highlight python code %}
import numpy as np

t = [1, 4, 6, 8, 9, -4]
index = np.argsort(t)
print(index[0], t[index[0]])
{% endhighlight %}
{% highlight bash results %}
5 -4
{% endhighlight %}
{% codeclear %}

`numpy.argsort()` returns a list (actually a vector, but we're not there yet), of indexes in sorted order. In this example, the first element of the sorted list is index 5, corresponding to the value -4. Because the original list is left untouched, we can easily correspond these sorted indexes to other lists the program may be looking at.



## 2.2.2 Vectors

You can create a vector using the `numpy.zeros()` command.

{% highlight python code %}
import numpy as np
x = np.zeros(10)
print(x)
print(x+10)
{% endhighlight %}
{% highlight bash results %}
[ 0.  0.  0.  0.  0.  0.  0.  0.  0.  0.]
[ 10.  10.  10.  10.  10.  10.  10.  10.  10.  10.]
{% endhighlight %}
{% codeclear %}

Using this example, you can see that vectors are different in many respects to lists:

* Vectors are immutable: they have a set length, which is defined by the argument in `numpy.zeros()`.
* All elements within a vector must be floats (integers are recast as floats).
* Math operations operate on all elements of the vector, which is impossible for a normal list. 

This last difference is extremely useful and important: you only need one math operation to convert all elements of an array, whereas you need a few more lines of code to do operations to every element of a list.

To convert a list to a vector, you can use the `array()` command.

{% highlight python code %}
import numpy as np
r = [1, 2, 3, 4, 5, 6]
x = np.array(r)
print(x)
{% endhighlight %}
{% highlight bash results %}
[1 2 3 4 5 6]
{% endhighlight %}
{% codeclear %}

List functions also operate on vectors: `len()` and `sum()` produce the same results as those from regular lists. Slicing and sorting vectors work exactly the same as for lists, as well.


## 2.2.3 Matrices

Matrices are created in nearly the exact same way as vectors: using the `numpy.zeros()` command. Instead of passing the function a single argument, you instead pass it a list of lengths in each dimension.

{% highlight python code %}
import numpy as np
m = np.zeros([10, 5])
m[4,2] = 10
m[8,4] = 20
print(m)
{% endhighlight %}
{% highlight bash results %}
[[  0.   0.   0.   0.   0.]
 [  0.   0.   0.   0.   0.]
 [  0.   0.   0.   0.   0.]
 [  0.   0.   0.   0.   0.]
 [  0.   0.  10.   0.   0.]
 [  0.   0.   0.   0.   0.]
 [  0.   0.   0.   0.   0.]
 [  0.   0.   0.   0.   0.]
 [  0.   0.   0.   0.  20.]
 [  0.   0.   0.   0.   0.]]
{% endhighlight %}
{% codeclear %}

The code above first creates a \\( 10 \times 5 \\) matrix filled with zeros. Then, you can see that referencing an element of the matrix is slightly different than with nested lists. You use a list of indexes to identify the element you are looking for instead of successive single indexes as in a nested list. Slicing works in a similar way:

{% highlight python code %}
import numpy as np
m = np.zeros([10, 5])
m[4,:] = 10
m[:,4] = 20
print(m[4:8,1:5])
{% endhighlight %}
{% highlight bash results %}
[[ 10.  10.  10.  20.]
 [  0.   0.   0.  20.]
 [  0.   0.   0.  20.]
 [  0.   0.   0.  20.]]
{% endhighlight %}
{% codeclear %}

The same approach works for any dimension arrays. Just add more elements to your list of lengths in `numpy.zeros()` to create higher dimensional arrays. Everything else also works similarly for high dimensional arrays.

{% highlight python code %}
threed = np.zeros([10, 5, 6])
fourd = np.zeros([4, 19, 3, 15])
{% endhighlight %}
{% codeclear %}

## 2.2.4 Dictionaries

Lists, vectors, and matrices are great for storing numerical data, but they give almost no information on *what* is stored in those values. For data that has specific meaning, it may be better served to store in a dictionary: a list of key/value pairs.

{% highlight python code %}
mystats = {'height': 72.0, 'weight': 145.5, 'eyes': "hazel", 'hand': "left"}
mybmi = 703 * mystats['weight'] / mystats['height']**2
print(mybmi)
{% endhighlight %}
{% highlight bash results %}
19.7312
{% endhighlight %}
{% codeclear %}

You'll notice that indexes for dictionaries are different than for lists or vectors. You use the *key* to reference the associated value in a dictionary.

Like a list, dictionaries can contain any type of data you want: numbers, strings, a list, another dictionary, etc. Dictionaries are also mutable. You can easily create an empty dictionary using an empty curly brace set `{}` and add values to it over time.

{% highlight python code %}
movie_ratings = {}
movie_ratings['Star Wars'] = 10
movie_ratings['Titanic'] = 3
movie_ratings['Mulan'] = 8
print(movie_ratings)
{% endhighlight %}
{% highlight bash results %}
{'Star Wars': 10, 'Titanic': 3, 'Mulan': 8}
{% endhighlight %}
{% codeclear %}

There are not special functions or commands necessary to add a key to a dictionary, you can simply assign a value to it like a regular variable and the key entry will be automatically generated.

Creating a list of dictionaries is an excellent way of creating tabular data whose context is easily discernible when reading through the code. This makes them (sometimes) a better way of storing data than matrices, due to the fact that you reference a column using the key, not an amibguous digit.


