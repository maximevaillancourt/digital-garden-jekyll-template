---
layout: page
title: Archive
permalink: /archive
---
<ul>
  {% for post in site.notes %}
    <li>
      <a class="internal-link" href="{{ post.url }}">{{ post.title }}</a>
      {{ post.date | date_to_long_string }}
    </li>
  {% endfor %}
</ul>

<p>Here are all the notes in this garden, along with their links, visualized as a graph.</p>

{% include notes_graph.html %}
