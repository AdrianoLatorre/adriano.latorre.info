---
layout: books
nav: "Books"
permalink: /books/
---

{% assign decades = site.books %}
{% assign last_two = decades.size | minus:2 %}
{% for books in decades reversed offset:last_two limit:2 %}
{{ books.content }}
{% endfor %}
