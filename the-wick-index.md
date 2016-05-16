---
layout: the-wick
title: The Wick
permalink: /w/
---

<dl>
  {% assign current = site.the_wick | last %}
  <dt><h3><a href="/w/{{ current.edition }}/">#{{ current.edition }}</a> {{ current.title }}</h3></dt>
  {% for link in current.links %}  
  <dt><a href="{{ link.url }}">{{ link.title }}</a></dt>
  <dd>{{ link.description }}</dd>
<!--   <dd>{% for tag in link.tags %}
  {{ tag }} {% endfor %}</dd> -->
  {% endfor %}
</dl>

{% assign current = site.the_wick | last %}
<p><a href="{{ current.edition | minus: 1 }}">Previous</a></p>

{% include the-wick-footer.html %}
