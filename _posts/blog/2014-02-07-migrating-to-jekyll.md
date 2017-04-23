---
title: 'Why I Shifted from Wordpress.org to Jekyll'
author: bathompso
layout: blogpost
categories:
  - blog
tags:
  - Technology
image: jekyllrb.jpg
---

A personal website is useful in the current age, both as a marketing mechanism for me, and an outlet for things I want to share with everyone. Perhaps not many people read my blog posts, but my [research code](http://github.com/bathompso) and my [class outlines](http://bathompso.com/education/) will hopefully be used by others.

### First Attempt
My first attempt at a website involved me coding the entire thing (HTML, CSS, JavaScript) from scratch. This not only made it so that I could make the site I wanted, but also as a learning experience for me. I'm proud to say my web skills are better than a novice due to me struggling through building an entire site from the ground up.

There were several problems with this approach:
* It takes *forever* to code pages from scratch. Partly because I didn't know a ton of HTML at the time, but also because I'm not a designer. I could never get things quite right, and it was hard settling on a design.
* When I wanted to change the design or some other element, it also took a ton of time to manually change every page. But, by coding everything by hand, there wasn't a way to template anything.

To avoid this massive time sink, I actually coded a manual template engine by making a Perl script which formatted plain text blog posts into web pages. The Perl script would convert each text file on-the-fly. It seems a bit ridiculous, but it was the only way I could figure out how to do it all on my own.

### WordPress
After a whole of having a hand-coded site that I never really loved, I went completely the other direction: Wordpress.org

I self-hosted the wordpress-generated site on one of the many computers in my control, forwarding my domain to my home IP.

Wordpress is awesome in the fact that it does **everything** for you. There are thousands of themes, which make things look 1000x times better than what I could implement, and has hundreds of plugins that handle any other task you could think of. Collapsible text sections? Easy. Really fancy, touch-enabled jquery slider? Done. For a long time I appreciated this ease of use, but not everything was perfect.

* The internet connection to my house is less than stellar through [Clear](http://clear.com), and I have no intention of paying money to put it on a external host. This meant that many of my hi-res images would take quite a while to load, regardless of the user's Internet speed.
* All day I work on editing text files in full-screen BBEdit, which nicely aligns all my text, syntax highlights, and is easy to use. The wordpress web-interface has a full-screen mode, but it still leaves much to be desired. There are available apps to do editing, but all look like they haven't been updated since Mac OS X Leopard.

### Jekyll
My friend Brian recently put [Jekyll](http://jekyllrb.com) on my radar by wanting to use it for a big project at work, and I began to play around with it. Jekyll is a blog-centric web creation tool. It allows you to make template HTML files, which have content fed to them from various [markdown](http://daringfireball.net/projects/markdown/) files. It then converts all the templates, markdown, and other files into a site of static HTML images. No database queries like wordpress or others, which makes it naturally faster to load and less strenuous on any hosting system.

Because everything is a text file (HTML or markdown), I can edit it in anything I want. BBEdit on my Mac, and the awesome [ByWord app](http://bywordapp.com) on my iPhone and iPad (I'm using the iPhone app right now). Way better than the subpar Wordpress web editor and questionable iOS apps. 

Another great plus of Jekyll is that it is in the good graces of the GitHub gods. GitHub launched a cool new initiative called GitHub pages, where GitHub will give you free hosting if you sign up (username.github.io). Of course, this would never work with Wordpress as it requires a database, but Jekyll sites, since they're all static, will work perfectly fine. Additionally, github will host all your pre-compiled Jekyll files, so you don't even have to run that compilation yourself.

With my site now being hosted via GitHub instead of through my slow connection, large images will load almost instantly instead of several seconds.

There are lots of other considerations as well:

* Security: no longer do I have to worry about security updates and vulnerabilities in my wordpress-hosting computer. Everything public-facing is on a separate server, not a tunnel into all my devices.
* Style Sheets: instead of giant, clunky CSS files, I can write all of my styles in [SASS](http://sass-lang.com) and have it compiled into a mini-fied CSS file through [Code Kit](http://incident57.com/codekit/). Variables and nested styles!

While it took a while to transfer my [Wordpress Theme](http://wordpress.org/themes/origin) to Jekyll, now that it's there it's mostly smooth sailing. Still missing a few pages, but those will easily be converted over in the coming week or so. And future additions to my Education and Research sections will be a lot easier thanks to the markdown content.