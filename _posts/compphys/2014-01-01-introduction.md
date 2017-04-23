---
title: 'Lesson 1: Introduction and Installation'
author: bathompso
layout: edupost
categories:
  - education
  - compphys
tags:
image: 
---

Modern science is more and more dealing with large datasets and simulation, both of which require being able to write computer programs. Being an astronomer, much of my observational data is coming from sky surveys that output vast datasets for me to comb through. Without programs to sort, combine, and analyze my data, **I wouldn't get anything done!** Outside of astronomy, many other scientific disciplines are beginning to understand physical phenomena using advanced computer modelling. Bio-sciences are chief among them in using computer models to study things which cannot always be directly observed. Building and understanding these models will also require programming knowledge. The theme of this class (at least in my mind), should be: **if you are to be relevant in science in the future, you must be able to write computer programs**.

Many classes on computational physics is taught in the same vein as a computer science or mathematics class, spending a majority of the focus on the mathematical concepts behind the program instead of the code itself. Where a normal computational physics class may spend hours on various numerical integration techniques, their strengths, weaknesses, and subtleties, this class will not. A simple paragraph of math explanation and a few lines of code will provide the same level of necessary knowledge, and will also allow you to *understand by doing, instead of reading*. I hope that this type of approach allows you to more fully grasp the programming concepts than other books.

## 1.1 Installation

Before we can attempt to write Python programs, we first must install the software. Along with the Python compilers, we must also install additional modules. Modules are software packages that add functionality to Python, such as advanced plotting and mathematical functions. Below are instructions for installing python and the necessary modules regardless of what operating system you are using.

These install instructions were tested on OS X 10.9, Window 8.1 and Ubuntu 13.04, but should work in general for any related operating system.

### Mac Installation Pre-Step

If you are installing things on a Mac, there is an additional first-step that must be undertaken before installing Python: we need to download and install the XCode copilers, located in the command line tools package.

1. Go to [developer.apple.com/downloads](http://developer.apple.com/downloads)
2. Log in via your Apple ID (the login for iCloud, iTunes and the App Store), or make one.
3. Find and download the correct **Command Line Tools** for your version of Mac OS X. For older operating systems, you may have to scroll back a few pages.
4. Once downloaded, run the package installer.

After the command line tools package is installed, you may notice that you already have Python installed. Installing packages and running programs through this version of Python is not recommended however, as it is the system's base location. If something goes wrong in the future (package versions get out of sync, something gets deleted, etc.) there is no easy way to *nuke* the Python installation and start over. It is best to install a new, second version of Python that is easily removable if something goes haywire.

### Anaconda Install

Continuum Analytics provides an all-in-one installer of Python and [whole array of modules](http://docs.continuum.io/anaconda/pkgs.html), called Anaconda. 

1. Go to [continuum.io/downloads](http://continuum.io/downloads) and download the Anaconda installer for your operating system. If you're using a Mac, I recommend downloading the *bash* installer, not the GUI.
2. If on Windows, simply double-click the downloaded .exe to get started. For Mac and Linux, you'll have to open a Terminal window, and run the downloaded script: `sudo ./Anaconda____.sh` on Mac, or `sudo Anaconda____.sh` on Linux. 
3. If you are running on a Mac or Linux machine, make sure to add the path to your Anaconda installation to your `PATH` environment variable by placing it in your `.bashrc` or `.tcshrc` file.

Now you should have a working Python install through Anaconda. Opening a new Terminal window (on Mac or Linux), or a Command Prompt window (Windows) will give you access to the new Anaconda installation by typing `python`.

*Caveat for Windows Machines: External modules are notoriously hard to install on Python, but Anaconda makes this easy. Some of the later lessons of this class will require additional modules to be installed, which may fail on a Windows machine. To complete these lessons*.

## 1.2 Running Python Programs

When you type `python` into your terminal, you will get a Python prompt, where you can type single-lined commands into the prompt as they are displayed in the text. To run more complicated programs, however, you'll have to run those programs from a file. You can run this file in two different ways.

The first, and easiest, way is to run the command:

{% highlight bash shell %}
python file.py
{% endhighlight %}

Where `file.py` is the name of the program file.

A second way to run python programs is by adding a *hashbang* line to beginning of your program:

{% highlight python code %}
#! /usr/bin/env python
{% endhighlight %}
{% codeclear %}

This lines tells the interpreter what executable to use when running the program. In this case, we're pointing to `/usr/bin/env python`, which redirects to the preferred python installation on your cmputer (as determined by your `PATH` environment variable). If you add this line to the beginning of the file, you can run the command just like any other executable:

{% highlight bash shell %}
./file.py
{% endhighlight %}

In order to do this, you may have to adjust the permissions of the program file to be executable. Adding this line is preferred by some people because it explicitly states that **this is a Python program**. The first option is easier, however, as it does not require the adjustment of any file permissions.



