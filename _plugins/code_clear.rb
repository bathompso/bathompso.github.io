module Jekyll
	class Codeclear < Liquid::Tag
		def render(context)
			"<div style='clear:both'></div>"
		end
	end
end

Liquid::Template.register_tag('codeclear', Jekyll::Codeclear)
