
layout: the-wick-edition
title: The Wick
permalink: /w/tags/
---

{% assign tags =  site.the_wick.links | map: 'tags' | join: ','  | split: ',' | uniq %}
{% for tag in tags %}
  <h3>{{ tag }}</h3>
  <ul>
  {% for edition in site.the_wick.links %}
    {% if edition.tags contains tag %}
    <li><a href="{{ site.baseurl }}{{ edition.url }}">{{ edition.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}

<!-- 

http://stackoverflow.com/questions/36958975/listing-jekyll-collection-pages-by-tags

{% assign tags =  site.note | map: 'tags' | join: ','  | split: ',' | uniq %}
{% for tag in tags %}
  <h3>{{ tag }}</h3>
  <ul>
  {% for note in site.note %}
    {% if note.tags contains tag %}
    <li><a href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %} 

-->