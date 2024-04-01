---
category: "[[Clippings]]"
author: "[[John Vincent]]"
title: "RSS Feeds and Jekyll | John Vincent"
source: https://www.johnvincent.io/jekyll/rss-feed-with-jekyll/
clipped: 2024-03-31
published: 
topics: 
tags: [clippings RSS RSSFeeds Jekyll]
---

RSS can seem so mystical. Let's set up an RSS feed and implement into Jekyll.

RSS (Rich Site Summary, or Really Simple Syndication) is a type of web feed which allows users to access updates to online content in a standardized, computer-readable format.

Configuring RSS Feed with Jekyll is straightforward. Let us begin.

## Jekyll

Create file `feed.xml` in source folder

```
---
layout: null
---
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ site.title | xml_escape }}</title>
    <description>{{ site.description | xml_escape }}</description>
    <link>{{ site.url }}{{ site.baseurl }}/</link>
    <atom:link href="{{ "/feed.xml" | prepend: site.baseurl | prepend: site.url }}" rel="self" type="application/rss+xml"/>
    <pubDate>{{ site.time | date_to_rfc822 }}</pubDate>
    <lastBuildDate>{{ site.time | date_to_rfc822 }}</lastBuildDate>
    <generator>Jekyll v{{ jekyll.version }}</generator>
    {% for post in site.posts limit:1000 %}
    {% if post.sitemap != false %} 
      <item>
        <title>{{ post.title | xml_escape }}</title>
        <description>{{ post.content | xml_escape }}</description>
        <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
        <link>{{ post.url | prepend: site.baseurl | prepend: site.url }}</link>
        <guid isPermaLink="true">{{ post.url | prepend: site.baseurl | prepend: site.url }}</guid>
        {% for tag in post.tags %}
        <category>{{ tag | xml_escape }}</category>
        {% endfor %}
        {% for cat in post.categories %}
        <category>{{ cat | xml_escape }}</category>
        {% endfor %}
      </item>
      {% endif %}
    {% endfor %}
  </channel>
</rss>
```

Will generate a `feed.xml` file. Push code to production.

## Jekyll Changes

Add to every page

```
<link rel="alternate" type="application/rss+xml" href="{{ site.url }}/feed.xml" />
```

I already have [Font Awesome Icons](http://fontawesome.io/icons/) and so I added a link with

```
<li>
    <a href="{{ site.url }}/feed.xml"><i class="fa fa-rss" aria-hidden="true"></i></a>
</li>
```

### Validate RSS Feed File

The RSS Feed file must be correctly formatted. To verify, use a [Validator](http://www.feedvalidator.org/)

Ensure all problems are fixed before proceeding.

The default Content-Type for `feed.xml` is `text/xml`

The Content-Type needs to `application/rss+xml`

### Get Response Headers

To verify Content-Type

```
wget -q -S -O - https://www.johnvincent.io/feed.xml > /dev/null
```

### Nginx Change for RSS Feeds

Add the following to the server block

```
location = /feed.xml {
    types        { }
    default_type "application/rss+xml";
}
```

Restart Server

```
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl restart nginx
```

Get the response headers to verify the type is now correct.

## Exclude from feed.xml

Add to post yaml

```
sitemap: false
```