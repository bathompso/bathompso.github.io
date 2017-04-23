module Jekyll
    module BCrumb
    	def make_crumbs(inurl)
    		# Split URL into different layers
    		url = inurl.split("/")
    		# If this isn't the homepage, then add a "home" link
    		if inurl != '/index.html'
    			bcstr = '<a href="/">Home</a> &#187; '
        	else
        		bcstr = ''
        	end
        	# Loop through any middle levels and print out titles
        	for i in 1..url.length-2
        		levtitle = ''
        		levurl = url[0..i].join('/')+'/'
        		@context.registers[:site].pages.each do |page|
        			levtitle = page.data['title'] if page.url == levurl
        		end
        		if levtitle == ''
        			@context.registers[:site].posts.docs.each do |post|
        				levtitle = post.data['title'] if post.url == levurl
        			end
        		end
        		if levtitle != ''
        			bcstr += '<a href="'+levurl+'">'+levtitle+'</a> &#187; '
        		end
        	end
        	# Add current page name to end
        	thistitle = ''
        	@context.registers[:site].pages.each do |page|
        		thistitle = page.data['title'] if page.url == inurl
        	end
        	if thistitle == ''
        		@context.registers[:site].posts.docs.each do |post|
        			thistitle = post.data['title'] if post.url == inurl
        		end
        	end
        	bcstr += thistitle
        	return bcstr
    	end
    end
end

Liquid::Template.register_filter(Jekyll::BCrumb)
