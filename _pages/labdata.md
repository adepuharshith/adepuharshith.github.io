---
title: "News"
layout: textlay
excerpt: "Choi Laboratory Purdue University."
sitemap: false
permalink: /labdata.html
---

# Lab Data

{% for article in site.data.labdata %}
<p>{{ article.date }} <br>
<pdf src="{{ site.url }}{{ site.baseurl }}/images/{{ test.pdf }}" class="pdf-responsive" width="100%" " />
<em>{{ article.headline }}</em></p>
{% endfor %}
