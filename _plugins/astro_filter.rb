module Jekyll
	module Astro
		def rasextodeg(input)
			cooarr = input.split(" ")
			"%9.4f" % (15.0 * ( cooarr[0].to_f + cooarr[1].to_f / 60.0 + cooarr[2].to_f / 3600.0 ))
		end
		
		def decsextodeg(input)
			cooarr = input.split(" ")
			decsign = cooarr[0].to_f / cooarr[0].to_f.abs
			"%9.4f" % (decsign * ( cooarr[0].to_f.abs + cooarr[1].to_f / 60.0 + cooarr[2].to_f / 3600.0 ))
		end
	end
end

Liquid::Template.register_filter(Jekyll::Astro)
