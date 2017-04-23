---
title: WOCS Cluster Photometry
author: bathompso
layout: default
mainnav: 0
permalink: /wocsphotometry/
---

## Northern Clusters
<table class="wocsphot">
	<tr>
		<th class="name">Cluster</th>
		
		<th class="origcoo" onclick="$('.deccoo').show(); $('.origcoo').hide()">RA</th>
		<th class="origcoo" onclick="$('.deccoo').show(); $('.origcoo').hide()">Dec</th>
		<th class="deccoo" onclick="$('.origcoo').show(); $('.deccoo').hide()">RA</th>
		<th class="deccoo" onclick="$('.origcoo').show(); $('.deccoo').hide()">Dec</th>
		
		<th>Age (Gyr)</th>
		<th>(m-M)<sub>0</sub></th>
		<th>[Fe/H]</th>
		<th>E(B-V)</th>
		<th>D (')</th>
		<th>UBVRI</th>
		<th>JHK</th>
		<th>MIR</th>
		<th>RV</th>
		<th>PM</th>
	</tr>
{% for cluster in site.data.wocsphotometry %}{% if cluster.dec contains '-' %}{% else %}
	<tr>
		<td class="name">{{ cluster.name }}</td>
		
		<td class="origcoo">{{ cluster.ra  }}</td>
		<td class="origcoo">{{ cluster.dec }}</td>
		<td class="deccoo">{{ cluster.ra | rasextodeg }}</td>
		<td class="deccoo">{{ cluster.dec | decsextodeg }}</td>
		
		<td>{{ cluster.age }}</td>
		<td>{{ cluster.mM  }}</td>
		<td>{{ cluster.feh }}</td>
		<td>{{ cluster.ebv }}</td>
		<td>{{ cluster.diam }}</td>
		
		<!-- Visual Photometry -->
		<td>
		{% for set in cluster.datasets %}
			{% if set.type contains 'ubvri' %}
				{% if set.url %}
					&nbsp;<a href="{{ set.url }}" target="_blank">{{ set.status }}</a>&nbsp;
				{% else %}
					&nbsp;{{ set.status }}&nbsp;
				{% endif %}
			{% endif %}
		{% endfor %}
		</td>
		
		<!-- Near-IR Photometry -->
		<td>
		{% for set in cluster.datasets %}
			{% if set.type contains 'jhk' %}
				{% if set.url %}
					&nbsp;<a href="{{ set.url }}" target="_blank">{{ set.status }}</a>&nbsp;
				{% else %}
					&nbsp;{{ set.status }}&nbsp;
				{% endif %}
			{% endif %}
		{% endfor %}
		</td>
		
		<!-- Mid-IR Photometry -->
		<td>
		{% for set in cluster.datasets %}
			{% if set.type contains 'mir' %}
				{% if set.url %}
					&nbsp;<a href="{{ set.url }}" target="_blank">{{ set.status }}</a>&nbsp;
				{% else %}
					&nbsp;{{ set.status }}&nbsp;
				{% endif %}
			{% endif %}
		{% endfor %}
		</td>
		
		<!-- RV Data -->
		<td>
		{% for set in cluster.datasets %}
			{% if set.type contains 'rv' %}
				{% if set.url %}
					&nbsp;<a href="{{ set.url }}" target="_blank">{{ set.status }}</a>&nbsp;
				{% else %}
					&nbsp;{{ set.status }}&nbsp;
				{% endif %}
			{% endif %}
		{% endfor %}
		</td>
		
		<!-- PM Data -->
		<td>
		{% for set in cluster.datasets %}
			{% if set.type contains 'pm' %}
				{% if set.url %}
					&nbsp;<a href="{{ set.url }}" target="_blank">{{ set.status }}</a>&nbsp;
				{% else %}
					&nbsp;{{ set.status }}&nbsp;
				{% endif %}
			{% endif %}
		{% endfor %}
		</td>
	</tr>
{% endif %}{% endfor %}

</table>



<p>&nbsp;</p>

## Southern Clusters
<table class="wocsphot">
	<tr>
		<th class="name">Cluster</th>
		
		<th class="origcoo" onclick="$('.deccoo').show(); $('.origcoo').hide()">RA</th>
		<th class="origcoo" onclick="$('.deccoo').show(); $('.origcoo').hide()">Dec</th>
		<th class="deccoo" onclick="$('.origcoo').show(); $('.deccoo').hide()">RA</th>
		<th class="deccoo" onclick="$('.origcoo').show(); $('.deccoo').hide()">Dec</th>
		
		<th>Age (Gyr)</th>
		<th>(m-M)<sub>0</sub></th>
		<th>[Fe/H]</th>
		<th>E(B-V)</th>
		<th>D (')</th>
		<th>UBVRI</th>
		<th>JHK</th>
		<th>MIR</th>
		<th>RV</th>
		<th>PM</th>
	</tr>
{% for cluster in site.data.wocsphotometry %}{% if cluster.dec contains '-' %}
	<tr>
		<td class="name">{{ cluster.name }}</td>
		
		<td class="origcoo">{{ cluster.ra  }}</td>
		<td class="origcoo">{{ cluster.dec }}</td>
		<td class="deccoo">{{ cluster.ra | rasextodeg }}</td>
		<td class="deccoo">{{ cluster.dec | decsextodeg }}</td>
		
		<td>{{ cluster.age }}</td>
		<td>{{ cluster.mM  }}</td>
		<td>{{ cluster.feh }}</td>
		<td>{{ cluster.ebv }}</td>
		<td>{{ cluster.diam }}</td>
		
		<!-- Visual Photometry -->
		<td>
		{% for set in cluster.datasets %}
			{% if set.type contains 'ubvri' %}
				{% if set.url %}
					&nbsp;<a href="{{ set.url }}" target="_blank">{{ set.status }}</a>&nbsp;
				{% else %}
					&nbsp;{{ set.status }}&nbsp;
				{% endif %}
			{% endif %}
		{% endfor %}
		</td>
		
		<!-- Near-IR Photometry -->
		<td>
		{% for set in cluster.datasets %}
			{% if set.type contains 'jhk' %}
				{% if set.url %}
					&nbsp;<a href="{{ set.url }}" target="_blank">{{ set.status }}</a>&nbsp;
				{% else %}
					&nbsp;{{ set.status }}&nbsp;
				{% endif %}
			{% endif %}
		{% endfor %}
		</td>
		
		<!-- Mid-IR Photometry -->
		<td>
		{% for set in cluster.datasets %}
			{% if set.type contains 'mir' %}
				{% if set.url %}
					&nbsp;<a href="{{ set.url }}" target="_blank">{{ set.status }}</a>&nbsp;
				{% else %}
					&nbsp;{{ set.status }}&nbsp;
				{% endif %}
			{% endif %}
		{% endfor %}
		</td>
		
		<!-- RV Data -->
		<td>
		{% for set in cluster.datasets %}
			{% if set.type contains 'rv' %}
				{% if set.url %}
					&nbsp;<a href="{{ set.url }}" target="_blank">{{ set.status }}</a>&nbsp;
				{% else %}
					&nbsp;{{ set.status }}&nbsp;
				{% endif %}
			{% endif %}
		{% endfor %}
		</td>
		
		<!-- PM Data -->
		<td>
		{% for set in cluster.datasets %}
			{% if set.type contains 'pm' %}
				{% if set.url %}
					&nbsp;<a href="{{ set.url }}" target="_blank">{{ set.status }}</a>&nbsp;
				{% else %}
					&nbsp;{{ set.status }}&nbsp;
				{% endif %}
			{% endif %}
		{% endfor %}
		</td>
	</tr>
{% endif %}{% endfor %}

</table>
