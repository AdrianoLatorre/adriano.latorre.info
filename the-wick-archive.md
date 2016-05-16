---
layout: the-wick
title: The Wick Archive
permalink: /w/archive/
---

{% assign current = site.the_wick | last %}

<dl>
  {% for editions in site.the_wick %}
  {% if editions.year == current.year %}
  <dt><h3><a href="/w/{{ editions.edition }}/">#{{ editions.edition }}</a> {{ editions.title }}</h3></dt>
  {% for link in editions.links %}
  <dt><a href="{{ link.url }}">{{ link.title }}</a></dt>
  <dd>{{ link.description }}</dd>
<!--   <dd>{% for tag in link.tags %}
  {{ tag }} {% endfor %}</dd> -->
  {% endfor %}
  {% endif %}  
  {% endfor %}
</dl>

{% include the-wick-footer.html %}
