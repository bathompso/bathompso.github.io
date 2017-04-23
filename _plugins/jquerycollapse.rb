module Jekyll
	module Tags	
		class JQueryCollapse < Liquid::Block
		
			# Initialize Tag
			def initialize(tag_name, text, tokens)
				super
				@title = text
			end
			# Render the text wrapped in a collapsing div
			def render(context)
				now = Time.new.usec
				divid = now.to_s()
				"<h2><a href=\"javascript:$('#"+divid+"').toggle('fast');\">#{@title}</a></h2><div id='"+divid+"' style='display:none'>"+super+"</div>"
			end
		end
	end
end

Liquid::Template.register_tag('expand', Jekyll::Tags::JQueryCollapse)
