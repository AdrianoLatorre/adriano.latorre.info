---
layout: the-wick
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

{% assign current = site.the_wick | last %}
<p><a href="{{ current.edition | minus: 1 }}">Previous</a></p>

<br><br><br><br>
<p><a href="/w/archive/">ARCHIVE</a></p>
<p><a href="/w/tags/">TAGS</a></p>