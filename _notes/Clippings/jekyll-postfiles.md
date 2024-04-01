---
category: "[[Clippings]]"
author: "[[jekyll-postfiles]]"
title: "jekyll-postfiles"
source: https://nhoizey.github.io/jekyll-postfiles/
clipped: 2024-03-31
published: 
topics: 
tags: [clippings]
---

[![Gem Version](https://badge.fury.io/rb/jekyll-postfiles.svg)](https://badge.fury.io/rb/jekyll-postfiles) [![Gem Downloads](https://img.shields.io/gem/dt/jekyll-postfiles.svg?style=flat)](http://rubygems.org/gems/jekyll-postfiles) [![Build Status](https://travis-ci.org/nhoizey/jekyll-postfiles.svg?branch=master)](https://travis-ci.org/nhoizey/jekyll-postfiles)

-   [Easing the management of images (and other files) attached to Markdown posts](#easing-the-management-of-images-and-other-files-attached-to-markdown-posts)
    -   [The pain of Jekyll’s recommended posts assets management](#the-pain-of-jekylls-recommended-posts-assets-management)
    -   [There must be another way](#there-must-be-another-way)
    -   [Not every assets need this](#not-every-assets-need-this)
-   [How does it work?](#how-does-it-work)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)
-   [Thanks](#thanks)

## Easing the management of images (and other files) attached to Markdown posts

### The pain of Jekyll’s recommended posts assets management

Jekyll’s natural way to deal with static files attached to posts, like images or PDFs, is to put them all in a global `assets/` (or `downloads/`) folder at the site root. Read “[Including images and resources](https://jekyllrb.com/docs/posts/#including-images-and-resources)” in Jekyll’s documentation.

You can of course put files in subfolders of `assets/`, but it will be really cumbersome to manage posts’ Markdown files in `_posts/` or a subfolder, and images elsewhere, and then use the good hierarchy in all Markdown image tags.

Imagine you have these files:

```
_posts/
  2016-06/
    2016-06-09-so-long-cloudflare-and-thanks-for-all-the-fissh.md
…
assets/
  2016-06-09-cloudflare/
    cloudflare-architecture.png
    performance-report-sample.pdf
```

To use the image and PDF files in the post’s Markdown, you will have to write this:

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.

![Cloudflare architecture](/assets/2016-06-09-cloudflare/cloudflare-architecture.png)

Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

Here is [an example of performance report](/assets/2016-06-09-cloudflare/performance-report-sample.pdf).

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
```

Painful to write.

Imagine you want to change the post’s publication date, or one of the file names?

Painful to update.

What if you want to put new WIP Markdown files in `_drafts/`, and the attached assets somewhere in a way they won’t be copied to the destination `_site/` folder next time you build the site? You can’t put the files in the `assets/` folder, so when you will publish the draft, you will have to change the assets location in the Markdown file.

Painful, and prone to errors.

And what about previewing the content while editing? If you use an editor like [MacDown](http://macdown.uranusjr.com/) with live preview, how will it find the actual path to the images? What means `/assets/…` for the editor?

Painful to preview.

### There must be another way

What if instead, you could have the files stored like that:

```
_posts/
  2016-06-09-cloudflare/
    2016-06-09-so-long-cloudflare-and-thanks-for-all-the-fissh.md
    cloudflare-architecture.png
    performance-report-sample.pdf
```

And if you could write your Markdown like this:

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.

![Cloudflare architecture](cloudflare-architecture.png)

Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

Here is [an example of performance report](performance-report-sample.pdf).

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
```

Much easier!

-   Easy to store, everything is in one single folder.
-   Easy to write, no path to add to file links
-   Easy to update
-   Easy to move from `_drafts/` to `_posts/`, without anything to change in the Markdown content
-   Easy to edit in any editor with live preview

### Not every assets need this

[Some Jekyll users will try to convince you](http://stackoverflow.com/a/10366173/717195) it’s a bad idea, because it means the asset is tightly linked to the post.

In my own experience, 95% of assets, at least, are used in one single post. And this is pretty common to find such requests from users of other static generators, like [Hugo](https://github.com/spf13/hugo/issues/147) ([fixed in May 2015](https://github.com/spf13/hugo/issues/147#issuecomment-104067783)), [Nikola](https://github.com/getnikola/nikola/issues/2266) ([already there, but not obvious or user friendly](https://github.com/getnikola/nikola/issues/2266#issuecomment-189211387)), [Octopress](http://stackoverflow.com/questions/17052468/insert-local-image-into-a-blog-post-with-octopress), etc.

But it’s true this might not be ideal for all assets (the remaining 5%), so you can of course continue using full assets paths with `/assets/…` to have a few assets shared by several posts.

## How does it work?

This plugin takes any file that is in posts folders, and copy them to the folder in which the post HTML page will be created.

Let’s say you have these files:

```
_posts/
  2016-06-09-cloudflare/
    2016-06-09-so-long-cloudflare-and-thanks-for-all-the-fissh.md
    cloudflare-architecture.png
    performance-report-sample.pdf
```

And your Jekyll settings for permalinks are these:

```
# Permalinks
permalink: /:year/:month/:day/:title/
```

Jekyll with this plugin will generate the site content like this:

```
2016/
  06/
    09/
      so-long-cloudflare-and-thanks-for-all-the-fissh/
        index.html
        cloudflare-logo.png
        performance-report-sample.pdf
```

If you change your Jekyll settings for permalinks like these:

```
# Permalinks
permalink: /:year/:month/:day/:title.html
```

Jekyll with this plugin will generate the site content like this:

```
2016/
  06/
    09/
      so-long-cloudflare-and-thanks-for-all-the-fissh.html
      cloudflare-logo.png
      performance-report-sample.pdf
```

Handy, isn’t it?

## Installation

Add `gem 'jekyll-postfiles'` to the `jekyll_plugin` group in your `Gemfile`:

```
source 'https://rubygems.org'

gem 'jekyll'

group :jekyll_plugins do
  gem 'jekyll-postfiles'
end
```

Then run `bundle` to install the gem.

## Usage

You don’t have anything to do.

Just put the images (and PDFs, etc.) in the same folder as your Markdown files, or even subfolders, and use the standard Markdown image syntax, with a relative path.

## Compatibility

:warning: This plugin is not supported by Github Pages, host your site on services like https://netlify.com which support third party plugins.

## Contributing

Thanks for your interest in contributing! There are many ways to contribute to this project. [Get started here](https://github.com/nhoizey/jekyll-postfiles/blob/master/CONTRIBUTING.md).

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Thanks

Inspired by [this old Gist](https://gist.github.com/kevinoid/3131752) by [@kevinoid](https://github.com/kevinoid/).