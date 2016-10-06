---
layout: books
nav: "Books"
permalink: /books/
---

> MAKE BOOKS LIKE LINKS:

- This page should display _recent_.

{% assign decades = site.books %}
{% for books in decades reversed limit:3 %}
{{ books.content }}
{% endfor %}
