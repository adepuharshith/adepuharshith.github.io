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
<iframe src="{{ site.url }}{{ site.baseurl }}/images/test.pdf" style="width: 100%;height: 100%;border: none;"></iframe>
  <embed src="{{ site.url }}{{ site.baseurl }}/images/test.pdf" width="800px" height="2100px" />
<em>{{ article.headline }}</em></p>
{% endfor %}
