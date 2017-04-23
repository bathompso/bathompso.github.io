---
title: Computational Physics
author: bathompso
layout: default
mainnav: 0
permalink: /education/compphys/
---

# Computational Physics

Being able to write basic computer code is becoming more important in physics and astrophysics research, as well as in industry, yet many students are not able to do so. This class will give students an introduction to computer science, with a focus on physics use cases. No prior knowledge of computer programming is required. A majority of the code written for this class will be in Python, as that is the *new and cool* language these days, and it is much easier to understand than many older languages. However, all the skills and techniques learned through this class are directly transferrable to writing code in any programming language.

This course is written to be a companion to [Computational Physics by Mark Newman](http://www.amazon.com/Computational-Physics-Mark-Newman/dp/1480145513), an excellent book on this topic. All textbook chapters included in the Introduction part of the course are [available for free on the author's website](http://www-personal.umich.edu/~mejn/computational-physics/).

<p>&nbsp;</p>
## Currently Available Lessons

<div class="lessonlist">
{% for post in site.posts reversed %}{% if post.categories contains 'compphys' %}{% if post.nav != 0 %}
	<div class="lessonwrap">
		<div class="lessonsummtitle"><a href="{{ post.url }}">{{ post.title }}</a></div>
		<div class="lessonsummtext">{{ post.content | strip_html | truncatewords: 60 }}</div>
		<div style="clear:both">&nbsp;</div>
	</div>
{% endif %}{% endif %}{% endfor %}
</div>