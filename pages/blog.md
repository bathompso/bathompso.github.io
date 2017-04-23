---
title: Blog
author: bathompso
layout: blog
mainnav: 1
permalink: /blog/
---

{% assign blogcount = '' %}
{% for post in site.posts %}
	{% if post.categories contains 'blog' %}
		{% capture newcount %}{{ blogcount | append: '-' }}{% endcapture %}
		{% assign blogcount = newcount %}
		{% if blogcount.size <= 10 %}
<div class="blogsumm">
	{% if post.image %}
		<div class="blogsummimg">
			<a href="{{ post.url }}">{% image blogsumm {{ post.image }} %}</a>
		</div>
	{% else %}
		<div class="blogemptyimg"></div>
	{% endif %}
	<div class="blogsummtitle"><a href="{{ post.url }}">{{ post.title }}</a></div>
	<div class="blogsummbyline">{{ post.date | date_to_string }} &middot; <i>by</i> bathompso &middot; <i>in</i>
		{% for tag in post.tags %}
			&nbsp;<a href="/blog/tag/{{ tag }}/">{{ tag }}</a>&nbsp;
		{% endfor %}
	</div>
	<div class="blogsummtext">{{ post.content | strip_html | truncatewords: 40 }}</div>
	<div style="clear:both">&nbsp;</div>
</div>
		{% endif %}
	{% endif %}
{% endfor %}

<div class="blogarchive" id="showarchive" onclick="$('#blogarchive').show('fast'); $('#showarchive').hide('fast')">
	&#8675; Click Here to View the Archive &#8675;
</div>

<div style="display: none;" id="blogarchive">
{% assign blogcount = '' %}
{% for post in site.posts %}
	{% if post.categories contains 'blog' %}
		{% capture newcount %}{{ blogcount | append: '-' }}{% endcapture %}
		{% assign blogcount = newcount %}
		{% if blogcount.size > 10 %}
<div class="blogsumm">
	{% if post.image %}
		<div class="blogsummimg">
			<a href="{{ post.url }}">{% image blogsumm {{ post.image }} %}</a>
		</div>
	{% else %}
		<div class="blogemptyimg"></div>
	{% endif %}
	<div class="blogsummtitle"><a href="{{ post.url }}">{{ post.title }}</a></div>
	<div class="blogsummbyline">{{ post.date | date_to_string }} &middot; <i>by</i> bathompso &middot; <i>in</i> {{ post.tags || join: ", " }}</div>
	<div class="blogsummtext">{{ post.content | strip_html | truncatewords: 40 }}</div>
	<div style="clear:both">&nbsp;</div>
</div>
		{% endif %}
	{% endif %}
{% endfor %}
</div>