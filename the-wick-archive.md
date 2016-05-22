---
layout: the-wick
title: The Wick Archive
permalink: /w/archive/
---

<!-- {% assign current = site.the_wick | last %}
  {% if editions.year == current.year %}
  {% endif %}   -->

<dl>
  {% assign sorted_editions = site.the_wick | sort: 'year' %}
  {% for editions in sorted_editions reversed %}
  <dt>{{ editions.year }}</dt>
  <dt><h3><a href="/w/{{ editions.edition }}/">#{{ editions.edition }}</a> {{ editions.title }}</h3></dt>
  {% for link in editions.links %}
  <dt>{{ link.description }}</dt>
  <dd><a href="{{ link.url }}">{{ link.title }}</a></dd>
<!--   <dd>{% for tag in link.tags %}
  {{ tag }} {% endfor %}</dd> -->
  {% endfor %}
  {% endfor %}
</dl>

{% include the-wick-footer.html %}
