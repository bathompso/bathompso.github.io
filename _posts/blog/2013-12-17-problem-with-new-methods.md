---
title: 'The Problem with New Methods'
author: bathompso
layout: blogpost
categories:
  - blog
tags:
  - Research
image: NGC188.jpg
---

My research involves detecting binary star systems in star clusters. Binary star systems are systems where two stars are orbiting each other. The most famous binary system is Tatooine from Star Wars, with its [famous double sunset](http://thethoughtstash.files.wordpress.com/2011/01/sw_binary_sunset.jpg?w=500&#038;h=281). The "closest star to the Sun," Alpha Centauri, is actually a binary system as well (and even has a third star orbiting it further out!)

The number of binary systems in a cluster are very important for numerical simulations, as are the masses of the stars in the system. The results from this research have implications for simulations of galactic evolution, and will be fully explained on a devoted page here sometime soon.

My method of detecting binary systems involves imaging the star cluster using several different *filters*. Filters only allow specific wavelengths of light through to the telescope (e.g. only Red light, only Green light, etc.). Using these images, we can determine not only which of the points of light we see that are binary systems instead of a single star, but also what the masses of each star is. The problem with new method is, however, that you can&#8217;t trust the results coming out of it until you compare it to known results from other methods. As I am planning to present my research at the upcoming [Winter 2014 American Astronomical Society meeting](http://aas.org/meetings/223rd-aas-meeting-washington-dc) in DC, I needed to find an older dataset to compare my results to.

One of the clusters in my data, NGC 188 (pictured above), has other data on it using radial velocities (RVs), the established method of detecting binary systems. Here, astronomers measure the speed at which a star in the cluster is moving towards or away from us at various points in time. Single stars won&#8217;t change their speed, whereas binary systems will oscillate as they orbit each other. By taking enough measurements, one can determine the orbit of each star and determine stellar mass. **[Note: It is more complicated than this is general. There will also be a page on this concept in the future]**

The RV data used was from [Geller et al. (2009)](http://adsabs.harvard.edu/abs/2009AJ....137.3743G). For reference, it contains RV measurements from December 1973 to August 2008. This dataset, which I am hoping to duplicate by comparing results *took 35 years to create.* This is, in fact, the problem with RV studies: to characterize orbits and determine masses, you have to observe over a very long time. The input into my code was measurements from 12 images. If you could get observing time on the right instruments, gathering the data would only take 5 nights.

My method involves comparing observed stars to models, and I used three different ones to see how that affected the determined mass. I found that all three models did very well, as seen below. For clarification on the terminology, the _primary_ star is the larger star in the binary system, and the _secondary_ is the smaller.

<img src="/images/bincompare.png" style="width: 100%;"/>

When I started out, I was hoping for 5-10% accuracy for the primary and 10-20% accuracy for the secondary. For these stars, it looks like we are within that range.

This comparison will enhance any results on future clusters, a few of which will also be presented at this year's AAS.
