---
last_modified_at: 2024-10-30 16:14:41
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

## Notes vs. Blog Posts
As of today, I'm in a transition point. I have taken plain text notes since 2009!

In early 2024, I decided to make my note-taking app, [Obsidian](https://obsidian.md), the engine behind my blog posts. I wanted everything to be in one place, here at jethro.site.

So, the notes are notes that I take and occasionally update. They are linked together as you can see from the graph view on the bottom of each post page. 

The blog posts are posts that I wrote many years ago, going all the way back to 2006, when I started blogging. 

I don't know if I'll migrate all my old blog posts over to "notes" or if they'll just stay as blog posts. It's all an experiment. 

See below for my most recently updated notes. That's the last 10. 

## Recently updated notes

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 10 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

## These are my Blog Posts and Notes

<style>
/* Two-column layout for larger screens */
.content-columns {
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.posts-column, .notes-column {
  flex: 1;
}

.year-details, .month-details {
  margin-bottom: 10px;
}

.year-summary, .month-summary {
  font-weight: bold;
  cursor: pointer;
}

.post-list, .note-list {
  list-style-type: none;
  padding-left: 20px;
}

.post-date, .note-date {
  font-size: 0.9em;
  color: gray;
  margin-left: 5px;
}

/* Responsive layout for smaller screens */
@media (max-width: 768px) {
  .content-columns {
    flex-direction: column;
  }
}
</style>


<div class="content-columns">
  <!-- Posts Column -->
  <div class="posts-column">
    <h2>Posts</h2>
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
  </div>
	<div class="notes-column">
	<h2>Notes</h2>
	{% assign notesByYear = site.notes | group_by_exp:"note", "note.Published or note.date | date: '%Y'" | sort: "name" | reverse %}
	<div class="notes-posts">
  {% for year in notesByYear %}
  <details class="year-details">
    <summary class="year-summary">{{ year.name }}</summary>
    
    {% assign notesByMonth = year.items | group_by_exp:"note", "note.date | date: '%B'" %}
    
    <div class="month-list">
      {% for month in notesByMonth %}
      <details class="month-details">
        <summary class="month-summary">{{ month.name }}</summary>
        <ul class="note-list">
          {% for note in month.items %}
          <li>
            <a href="{{ note.url }}">{{ note.title }}</a>
            <span class="note-date">{{ note.date | date: "%B %d, %Y" }}</span>
          </li>
          {% endfor %}
        </ul>
      </details>
      {% endfor %}
    </div>
  </details>
  {% endfor %}
</div>
</div>
</div>


<style>
/* Two-column layout for larger screens */
.content-columns {
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.posts-column, .notes-column {
  flex: 1;
}

/* Styling for accordions and lists */
.year-details, .month-details {
  margin-bottom: 10px;
}

.year-summary, .month-summary {
  font-weight: bold;
  cursor: pointer;
}

.post-list, .note-list {
  list-style-type: none;
  padding-left: 20px;
}

.post-date, .note-date {
  font-size: 0.9em;
  color: gray;
  margin-left: 5px;
}

/* Responsive layout for smaller screens */
@media (max-width: 768px) {
  .content-columns {
    flex-direction: column;
  }
}
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
<!-- {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}

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
</div> -->

Have a Good Life.

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
