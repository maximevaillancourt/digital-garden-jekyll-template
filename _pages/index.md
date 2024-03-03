---
layout: page
title: Home
id: home
permalink: /
---

# Welcome! 🌱

See below for my most recently updated notes. That's the last 10. 

You can learn more about me at my Link-in-Bio page: [jethrojon.es](https://jethrojon.es)

My latest exciting project is [EduNews](https://edune.ws)

<strong>Recently updated notes</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 10 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
