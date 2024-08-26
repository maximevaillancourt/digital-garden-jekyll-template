---
layout: page
title: Home
id: home
permalink: /
---

# Welcome! 👋

I host the longest running, most downloaded, highest rated podcast for educational leaders [Transformative Principal](https://transformativeprincipal.org) and a bunch of other podcasts. 

This web site is my experiment, constantly evolving and changing. 

See what I'm up to now on my [now page]({{ site.baseurl }}/now)

You can learn more about me at my Link-in-Bio page: [jethrojon.es](https://jethrojon.es)

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

Have a Good Life.

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
