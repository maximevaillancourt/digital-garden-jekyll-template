---
last_modified_at: 2024-10-30 04:07:45
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
<style>
.blog-posts {
  font-family: Arial, sans-serif;
}

.year-details, .month-details {
  margin-bottom: 1em;
}

.year-summary, .month-summary {
  cursor: pointer;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.year-summary:hover, .month-summary:hover {
  background-color: #e0e0e0;
}

.month-list {
  padding-left: 20px; /* Indent month list */
}

.post-list {
  list-style-type: none; /* Remove bullet points */
  padding-left: 0; /* Remove default padding */
}

.post-list li {
  margin: 5px 0; /* Space between posts */
}

.post-date {
  font-size: 0.9em; /* Smaller font for date */
  color: #666; /* Lighter color for date */
}
</style>
{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}

<div class="blog-posts">
  {% for year in postsByYear %}
  <details class="year-details">
    <summary class="year-summary">{{ year.name }}</summary>
    
    {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%B'" %}
    
    <div class="month-list">
      {% for month in postsByMonth %}
      <details class="month-details">
        <summary class="month-summary">{{ month.name }}</summary>
        <ul class="post-list">
          {% for post in month.items %}
          <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
            <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
          </li>
          {% endfor %}
        </ul>
      </details>
      {% endfor %}
    </div>
  </details>
  {% endfor %}
</div>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
