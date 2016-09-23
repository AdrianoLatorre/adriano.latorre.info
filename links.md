---
layout: links
permalink: /links/
---

{% assign latest_links = site.links | last %}
{{ latest_links.content }}


<!-- {% assign links_by_date = site.links | sort: 'date' %}
{% for link in links_by_date reversed %}
{{ link }}
{% endfor %}
 -->
