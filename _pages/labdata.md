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
<iframe name="iframe1" src="{{ site.url }}{{ site.baseurl }}/images/test.pdf" style="width: 100%;height: 100%;border: none;"></iframe>
 
  
 

<a target="iframe1">link</a>
  
<em>{{ article.headline }}</em></p>
{% endfor %}
