---
last_modified_at: 2024-09-28 01:46:28
layout: page
title: Home
id: home
permalink: /
---

# Have a Good Life.

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

## These are all the posts from my Blogger Blog

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}

{% for year in postsByYear %}
<details>
  <summary><h2>{{ year.name }}</h2></summary>
  
  {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%B'" %}
  
  {% for month in postsByMonth %}
  <details>
    <summary><h3>{{ month.name }}</h3></summary>
    <ul>
      {% for post in month.items %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
      </li>
      {% endfor %}
    </ul>
  </details>
  {% endfor %}
</details>
{% endfor %}

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
