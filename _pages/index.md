---
layout: page
title: Home
id: home
permalink: /
---

# Welcome! 🌱



You can learn more about me at my Link-in-Bio page: [jethrojon.es](https://jethrojon.es)

See what I'm up to now on my [now page]({{ site url }}/now)

See below for my most recently updated notes. That's the last 10. 

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
