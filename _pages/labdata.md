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
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
<em>{{ article.headline }}</em></p>
{% endfor %}
