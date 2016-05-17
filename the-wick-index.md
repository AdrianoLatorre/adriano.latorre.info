---
layout: the-wick
title: The Wick
permalink: /w/
---

<dl>
  {% assign all_sorted = site.the_wick | sort: "edition" %}
  {% assign current = all_sorted | last %}
  {% assign previous_page = current.edition | minus: 1 %}
  {% assign previous_title = current.edition | minus: 2 %}
  <dt><h3><a href="/w/{{ current.edition }}/">#{{ current.edition }}</a> {{ current.title }}</h3></dt>
  {% for link in current.links %}  
  <dt><a href="{{ link.url }}">{{ link.title }}</a></dt>
  <dd>{{ link.description }}</dd>
<!--   <dd>{% for tag in link.tags %}
  {{ tag }} {% endfor %}</dd> -->
  {% endfor %}
</dl>

<p><a href="{{ previous_page }}">Previous: {{ all_sorted[previous_title].title }}</a></p>

{% include the-wick-footer.html %}
