---
layout: the-wick-tag
title: The Wick
permalink: /w/tag/
---

the-wick-tag.md

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

http://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/

http://blog.meinside.pe.kr/Adding-tag-cloud-and-archives-page-to-Jekyll/

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