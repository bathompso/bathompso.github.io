---
title: Programming for GPGPUs
author: bathompso
layout: blogpost
categories:
  - blog
tags:
  - Research
image: gpgpu.jpg
---
My research efficiency depends greatly on the amount of computer processing power I have access to. To detect binary systems, I compare observed stars to models of singles and binaries in a brute-force manner. Each observation is monte-carlo sampled within its errors many times, and the final results is the median of those fits. For an example cluster, there may be:

*   3000+ stars
*   4000+ models
*   90+ resamples

When I first wrote the analysis software needed for my research, I used the computing language I was most comfortable with: IDL. Version 1, which ran all resamples in order, often took 10+ hours to complete analysis on even a small cluster. To speed things up, I wrote a &#8220;dumb parallel&#8221; version of code. The main IDL routine would spawn many subroutines (for each resample necessary), and then run them in parallel via Unix&#8217;s *xargs* command. This sped things up from the serial case, but still took 3-4 hours for a decent sized cluster.

Recently, I&#8217;ve begun to lose faith in IDL. While it performs amazingly for vector mathematics, it is proprietary (and I&#8217;m at the whim of whoever sets the yearly price), and it does not have access to some of the more modern functionality available in other programming languages. To wean myself off of my reliance on IDL, I decided to rewrite my binary detection code in Python.

During this rewrite, I also decided to try and speed up my analysis time again, this time by harnessing the massive parallel processing of OpenCL. OpenCL allows hundreds of simultaneous calculations to run on compatible CPUs and GPUs. The version 2 analysis code now parallelizes comparison of each star to all models via OpenCL. Running an analysis of 3000 stars, 4000 models and 90 resamples now takes *4 minutes instead of 4 hours*.

I&#8217;m currently writing educational material on computational physics using Python, and OpenCL will be one of the topics I touch on. The future of computing is in the parallel processing of today&#8217;s computers, and OpenCL will be a large part of it. If you do any research that involves large amounts of computing time, you may want to look at harnessing the parallel capabilities of the machine you&#8217;re already working on. [Check out my Python page to learn more](http://bathompso.com/education/physics/).
