---
layout: the-wick-edition
title: The Wick
permalink: /w/
---

<dl>
  {% for editions in site.the_wick %}
  {% for link in editions.links %}  
  <dt><a href="{{ link.url }}">{{ link.title }}</a></dt>
  <dd><a href="/w/{{ editions.edition }}/">Permalink {{ editions.edition }}</a></dd>
  <dd>{{ link.description }}</dd>
  <dd>{% for tag in link.tags %}
  {{ tag }} {% endfor %}</dd>
  {% endfor %}
  {% endfor %}
</dl>