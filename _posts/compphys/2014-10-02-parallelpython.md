---
title: '10.2: ParallelPython'
author: bathompso
layout: edupost
categories:
  - education
  - compphys
  - parallel
tags:
nav: 0
---

One of the first transistions into the parallel computing age was the introduction of multi-core and multi-thread CPUs. Originally, CPUs could only compute a single task at a time, but with the addition of multiple cores they could handle several at once. In this section we will explore how to write Python programs that can use all available CPU cores / threads on your machine.

## 10.2.1 Installation

Stock Python (including the modules used so far) do not allow Python to take advantage of multi-core architecture. Instead, we must download and install another module, called (imaginatively) ParallelPython. This can be done via the built-in `pip` installer, with some nudging. ParallelPython is not hosted on the same repository `pip` usually downloads from, so you'll have to allow for using external and unverified sources to find it.

{% highlight bash shell %}
sudo pip install pp --allow-external pp --allow-unverified pp
{% endhighlight %}

After successful installation, you should be able to access all ParallelPython (PP) routines by importing the module via

{% highlight python code %}
import pp
{% endhighlight %}
{% codeclear %}

## 10.2.2 Running Parallel Tasks With ParallelPython

### The JobServer

Everything in PP is run through the JobServer. The JobServer reads the tasks that are passed to it and doles them out to idle cores on the machine. Before we can run anything in parallel, we must initialize the JobServer. You can do this via the line:

{% highlight python code %}
job_server = pp.Server()
{% endhighlight %}
{% codeclear %}

There are several optional keywords that can be specified for the PP job server:

**# of Cores**: by default, PP will use all available cores in your machines. In all the examples here, I am using a MacBook Pro with a quad-core i7 processor which implements Hyper-Threading, meaning that each core can process 2 threads simultaneously. With 4 cores and 2 threads per core, PP can use a maximum of 8 simultaneous computations. If you wish to use less than the maximum, you can enter that value into the `Server` command.

**Networked Machines**: PP is not only meant for doing parallel computations on your local machines, but distributing itself across an entire network of machines to handle massive computations. If you have other machines with PP installed that you want to network to to help with computations, enter their IP addresses as the keyword `ppservers` in the `Server` command.

With both options enabled, the JobServer initialization command will look like:

{% highlight python code %}
job_server = pp.Server(4, ppservers=("10.0.0.1", "10.0.0.2"))
{% endhighlight %}
{% codeclear %}

### Submitting Jobs

Now that the JobServer is created, we can begin passing tasks to it using the `.submit()` function. A PP `.submit()` call will look like:

{% highlight python code %}
result = job_server.submit(subroutine, (var1, var2), (func2, func3), ("modname",))
{% endhighlight %}
{% codeclear %}

There are several parts to this call:

* `subroutine`: The first variable of the `.submit()` function is the name of the subroutine function that is being iterated multiple times.
* `var1, var2`: The second variable of the `.submit()` function is a list of the variables that are necessary for function `subroutine`.
* `func2, func3`: The third variable of the `.submit()` function is a list of the functions (if any) on which the subroutine depends.
* `modname`: The last variable fo the `.submit()` function is a list of module names necessary for the subroutine function. If the subroutine uses any modules, you will not be able to specify a shortname. So if your subroutine depends on `numpy`, make sure to write functions as `numpy.cos` instead of the regular shorthand, `np.cos`.

**Why does `.submit()` require these inputs?** The answer is in what exactly ParallelPython does. For each submitted job, PP essentially *writes a new Python code* which runs the specified function. all the variables necessary (variables, dependent functions and modules) are necessary for creating a standalone program to execute. PP then runs this function on the next available idle core. The result returned from this function will be stored in the result variable you specify.

### Multiple Jobs

The code above will submit a single job and return a single value, but that isn't the point of parallel computing, and is an egregious waste of computer resources. Instead, we want to submit multiple instances of the subroutine function, then analyze the multiple results coming back. To do this, we simply wrap the previous `submit()` command in a for loop.

{% highlight python code %}
inputvals = [1, 10, 100, 1000, 10000]
results = [job_server.submit(subroutine, (input,), (), ("math",)) for input in inputvals]
{% endhighlight %}
{% codeclear %}

Here, `results` will be a 5-element list with the results of the `subroutine` function for each of the input values.

Unlike normal Python, which waits for the previous command to finish before moving on, a `.submit()` call spawn a new process, send it to an idle core (if available) and immediately moves on. This will only stop when the program needs to access the results. As a consequence, PP routines can produce unexpected results. If you ran, for example:

{% highlight python code %}
inputvals = [1, 10, 100, 1000, 10000]
results = [job_server.submit(subroutine, (input,), (), ("math",)) for input in inputvals]
print, "PARALLEL RESULTS:"
for r in results:
	print "!!!  ", r()
{% endhighlight %}
{% highlight bash results %}
PARALLEL RESULTS:
!!!  
{% endhighlight %}
{% codeclear %}

The output in the above example would appear immediately after running the program, with a long wait to finish computing all the results before finishing the print statement loop. While this isn't a logic or arithmetic error, it does produce strange-looking results for the user of your program. If you wish to "pretty up" the output, you can simply add a non-printing loop after the submit function to make sure all results are complete:

{% highlight python code %}
for r in results: tmp = r()
{% endhighlight %}
{% codeclear %}

This loop adds little overhead to the entire program, but makes sure that all parallel runs have returned results before moving on to printing statements or other analysis steps that *may* be affected by the non-serialized completion. To access the results of a PP run, all variables must have an empty parentheses pair, as seen in the above two examples.

## 10.2.3 Example: Finding Primes in Parallel

Earlier in the course, we discussed how to easily (and in a brute-force manner) determine if a number was prime or not. Now, imagine that we want to determine the number of primes less than a certain value (say 10,000). This is easy to do. First, we start with our (already-written) prime-determining function.

{% highlight python code %}
def isprime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    # Look for factors <= sqrt(n)
    max = int(math.ceil(math.sqrt(n)))
    i = 2
    while i <= max:
        if n % i == 0:
            # We found a factor. Number is not prime.
            return False
        # This number is not a factor, move to the next one
        i += 1
    # We found no factors <= sqrt(n), this is a prime.
    return True
{% endhighlight %}
{% codeclear %}

Using this function, we can write a new function, `findprimes`, which will call isprime for all numbers less than the specified value.

{% highlight python code %}
def findprimes(n):
    return [x for x in xrange(2,n) if isprime(x)]
{% endhighlight %}
{% codeclear %}

This very simple code loops through all values between 2 and n, and returns each value which returns True from `isprime`.

### Parallelization

Instead of running this loop normally, we instead will run it in parallel and see what benefit we gain. Below is the code that will compute the same results as `findprimes`, but will do it with all available cores.

{% highlight python code %}
import math, sys, time, pp

# [[ Function isprime definition ]]

maxval = 10000
	
### SINGLE PROCESS RUN
start_time = time.time()
result = findprimes(maxval)
print "SINGLE: There are",len(result),"primes below",maxval
end_time = time.time()
print "SINGLE Time elapsed:",end_time-start_time

### PARALLEL PROCESS RUN
start_time = time.time()
job_server = pp.Server()
print "Running with",job_server.get_ncpus(),"processes."
inputs = range(2, maxval)
results = [job_server.submit(isprime, (input,), (), ("math",)) for input in inputs]
nprimes = [x for x in results if x() == True]
print "PARALLEL: There are",len(nprimes),"primes below",maxval
end_time = time.time()
print "PARALLEL Time elapsed:",end_time-start_time
{% endhighlight %}
{% highlight bash results %}
SINGLE: There are 1229 primes below 10000
SINGLE Time elapsed: 0.0364170074463
Running with 8 processes.
PARALLEL: There are 1229 primes below 10000
PARALLEL Time elapsed: 4.32518792152
{% endhighlight %}
{% codeclear %}

While parallel processes are usually faster than serial ones, the parallel routine takes almost 100x as long. This is due to the way that PP works: by writing an entirely new program for each new process and then running it on an unused core. This re-writing causes each new process (10,000 of them in the above example) to have to import the necessary modules as well as compile each of the new "codes." Adding this overhead to so many small computations is not an effective use of parallelization.

When writing a program that utilizes multiple processes, it is best to make sure that your routines actually helps instead of hurts your speed.

## 10.2.4 Growth of Primes

Using the two custom functions, `isprime` and `findprimes`, we can write a simple, parallelized function that will compute primes of various numbers. Keep in mind that the function findprimes itself will not be parallelized, but we can run multiple instances of findprimes at once to speed up alternate calculations. Because we need to run multiple instances of `findprimes` for the parallelization to make sense, pretend we want to find how the number of primes less than a certain number grows. Here is our python program, excluding the two custom functions written out previously.

{% highlight python code %}
import math, pp, time

# [[ Function isprime and findprimes definitions ]]

### SINGLE PROCESS RUN
start_time = time.time()
result = findprimes(1000000)
print "SINGLE: There are",len(result),"primes below",1000000
end_time = time.time()
print "SINGLE Time elapsed:",end_time-start_time

### PARALLEL PROCESS RUN
job_server = pp.Server()
print "Running with", job_server.get_ncpus(), "processes."
inputvals = [100, 1000, 10000, 100000, 1000000]
start_time = time.time()
results = [(input, job_server.submit(findprimes, (input,), (isprime,), ("math",))) for input in inputvals]
for input, result in results:
    tmp = result()
    print "There are",len(result()),"primes below",input
end_time = time.time()
print "PARALLEL Time elapsed:",end_time-start_time
{% endhighlight %}
{% highlight bash results %}
SINGLE: There are 78498 primes below 1000000
SINGLE Time elapsed: 13.4798531532
Running with 8 processes.
There are 25 primes below 100
There are 168 primes below 1000
There are 1229 primes below 10000
There are 9592 primes below 100000
There are 78498 primes below 1000000
PARALLEL Time elapsed: 13.3912439346
{% endhighlight %}
{% codeclear %}

If you run this program, you will notice that the results are printed out as they are finished. You can also see that the parallel version of this code takes just as long as the serial case for `findprimes(1000000)`, with all the other results coming essentially for free! For this and the example before, you can begin to understand the best uses for PP. Because the process-spawning sequence incurs a decent overhead, it is best to parallelize routines that require a fairly large amount of computation. That way the overhead becomes a very small percentage of each process' run time, and you gain much more when running multiple at once.
