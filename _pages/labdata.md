---
title: "News"
layout: textlay
excerpt: "Choi Laboratory Purdue University."
sitemap: false
permalink: /labdata.html
---

# News

{% for article in site.data.labdata %}
<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}
