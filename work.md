---
layout: work
nav: "Work"
permalink: /work/
---

{% assign portfolio = site.work | sort: 'date' %}
{% for work in portfolio reversed %}
<a href="{{ work.permalink }}">{{ work.id }}</a>
{% endfor %}
{{ content }}
