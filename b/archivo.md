---
layout: page
title: Archivo
image: /b/-/0.png
permalink: archivo/index.html
---

---

<ol reversed>
  {% for post in site.posts %}
  {% unless post.next %}
  {% else %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% if year != nyear %}
  <br>
  {% endif %}
  {% endunless %}
  <li value="{{ post.date | date:"%y%m%d" }}"><a href="/b{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ol>
