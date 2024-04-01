---
category: "[[Clippings]]"
author: 
title: "URLs and links in Jekyll"
source: https://mademistakes.com/mastering-jekyll/how-to-link/
clipped: 2024-03-31
published: NaN-NaN-NaN
topics: 
tags: [clippings]
---

Before you can link pages and assets together with Jekyll, you need to know how it assigns URLs (or permalinks[1](#fn:1)) to each. If you are a seasoned Jekyll users and have a good understanding of how this all works, skip down below to [linking methods](#how-to-link).

This tutorial will explain the various URL types, how to use them when building with Jekyll, and then how to link content and assets together.

## [How URLs work in Jekyll](#how-urls-work-in-jekyll "Permalink to How URLs work in Jekyll")

Jekyll’s system for creating URLs is simple and flexible, allowing you to structure files how you want. That is…once you understand how permalinks work for posts, pages, collection documents, and static files.

Below are the core concepts and conventions you’ll need to get started with each. For an exhaustive list of possible URL patterns and styles, be sure to read [Jekyll’s permalink documentation](https://jekyllrb.com/docs/permalinks/).

## [Global permalinks](#global-permalinks "Permalink to Global permalinks")

Changing the global output path for posts and pages is one of the first settings you’ll configure in `_config.yml`. The default pattern used by Jekyll is `permalink: date`, which is short for:

```
permalink: /:categories/:year/:month/:day/:title:output_ext
```

This permalink pattern is made up of the `:categories`, `:year`, `:month`, `:day`, `:title`, and `:output_ext` placeholders. For an entire list of placeholders review [Jekyll’s placeholder documentation](https://jekyllrb.com/docs/permalinks/#placeholders).

Placeholder

Description

`categories`

Assigned categories for a post from its YAML front matter. Multiple categories e.g., `categories: [development, CSS]` would output as `/development/css`.

`year`

Year value (four digits e.g., `2021`) from the post’s filename.

`month`

Month value (two digits `01` through `12`) from the post’s filename.

`day`

Day value (two digits `01` through `31`) from the post’s filename.

`title`

String from the document’s filename.

`output_ext`

Extension of the output file, usually `.html`.

In addition to the `date` permalink, Jekyll has the following patterns built-in for posts. Note: date based placeholders are ignored for documents like pages and collections.

Permalink alias

Permalink pattern

`date`

`/:categories/:year/:month/:day/:title:output_ext`

`pretty`

`/:categories/:year/:month/:day/:title/`

`ordinal`

`/:categories/:year/:y_day/:title:output_ext`

`weekdate`

`/:categories/:year/W:week/:short_day/:title:output_ext`

`none`

`/:categories/:title:output_ext`

### [URL defaults](#url-defaults "Permalink to URL defaults")

When building a fresh Jekyll site using the `jekyll new` command, the following URL defaults apply. The same is true if your `_config.yml` omits the `permalink` configuration as Jekyll falls back to the `/:categories/:year/:month/:day/:title:output_ext`.

#### [Post URL defaults](#post-url-defaults "Permalink to Post URL defaults")

Posts are a special collection in Jekyll and have filename requirements as described in [their posts documentation](https://jekyllrb.com/docs/posts/#creating-posts). Because of this `YYYY-MM-DD-title.ext` convention, Jekyll is able to determine a post’s `title` and `date` without either being manually added via YAML front matter.

For example, let’s create a new Markdown post and name it `2021-06-30-new-post.md`, making sure it’s in the `_posts` directory.

```
├── _posts
│   └── 2021-06-30-new-post.md
```

Jekyll knows the title of this post is `new post` and the date is `2021-06-30` for the reasons stated above.

When Jekyll builds the site it will use the default permalink pattern of `permalink: date` and output a HTML file into the `_site` directory with a root-relative URL of `/2021/06/30/new-post.html`.

```
├── _site
│   └── 2021
│       └── 06
│           └── 30
│               └── new-post.html
```

Posts (unlike pages and other collections) have complete support for `categories`, which become part of their URL when using the default permalink pattern.

Using the example post created above and adding categories to it via YAML front matter:

```
---
categories: ["development", "CSS"]
---
```

The resulting URL would become `/development/css/2021/06/30/new-post.html` with this file structure:

```
├── _site
|   └── development
|       └── css
│           └── 2021
│               └── 06
│                   └── 30
│                       └── new-post.html
```

#### [Page URL defaults](#page-url-defaults "Permalink to Page URL defaults")

A common Jekyll page convention is to add HTML or Markdown files in the root directory. In fact when running the `jekyll new` command it scaffolds out the following two pages in the root:

```
├── about.markdown
├── index.html
```

When Jekyll builds the site it will use the default permalink pattern of `permalink: date` and output two HTML files into the `_site` directory with root-relative URLs of `/about.html` and `/index.html`.

```
├── _site
|   └── about.html
|   └── index.html
```

Pages can be organized into sub-directories and Jekyll will respect that structure and output matching folders and files. For example, if we create a page named `privacy-policy.md` and place it a directory named `terms`.

```
├── terms
│   └── privacy-policy.md
```

When Jekyll builds the privacy policy page it will output a HTML file into the `_site` directory with a root-relative URL of `/terms/privacy-policy.html`.

```
├── _site
│   └── terms
│       └── privacy-policy.html
```

#### [Collection URL defaults](#collection-url-defaults "Permalink to Collection URL defaults")

Collection documents have a default permalink style of `permalink: /:collection/:path` when `output: true` is enabled. These files output in a similar way to pages. Meaning they ignore some permalink placeholders like categories.

For example, if we create a collection named recipes with the following minimal configuration:

```
collections:
  recipes:
    output: true
```

And then create two documents — `apple-pie.md` and `minestrone.md`, and place them in the `_recipes` directory.

```
├── _recipes
│   ├── apple-pie.md
│   └── minestrone.md
```

When Jekyll builds the site it will use the default permalink pattern of `permalink: /:collection/:path` and output two HTML files into the `_site` directory with root-relative URLs of `/recipes/apple-pie.html` and `/recipes/minestrone.html`.

```
├── _site
│   └── recipes
│       ├── apple-pie.html
│       └── minestrone.html
```

Collection documents can be organized into sub-directories (just like pages) and Jekyll will respect that structure and output matching folders and files.

For example, if we group the apple pie and minestrone recipes into deserts and soups directories inside of `_recipes`:

```
├── _recipes
│   ├── deserts
│   │   └── apple-pie.md
│   └── soups
│       └── minestrone.md
```

Now when Jekyll builds the site these two recipes will output into the following structure:

```
├── _site
│   └── recipes
│       ├── deserts
│       │   └── apple-pie.html
│       └── soups
│           └── minestrone.html
```

#### [Static file URL defaults](#static-file-url-defaults "Permalink to Static file URL defaults")

Files that do not contain any YAML front matter (aka static files), Jekyll outputs in the same structure it sourced from. This applies to images, videos, PDFs, and other assets that aren’t processed via Jekyll’s [Sass](https://sass-lang.com/) and [CoffeeScript](https://coffeescript.org/) pipelines.

Like pages and collection documents, static files can be organized in whichever way you choose and Jekyll will match naming and structure. For example, if we have a image named `logo.png` and place it in a `static/images` sub-directory.

```
├── static
│   └── images
│       └── logo.png
```

When Jekyll builds the site it will and output the logo into the `_site` directory with a root-relative URL of `/static/images/logo.png`.

```
├── _site
│   └── static
│       └── images
│           └── logo.png
```

## [File specific permalinks](#file-specific-permalinks "Permalink to File specific permalinks")

Permalinks can be set in a file’s YAML front matter, overriding globally set patterns in the `_config.yml` file. Organizing files in a `_pages`[2](#fn:2) folder and outputting them with a root-relative URL is a common use case.

For example, if we create a `resume.md` page and place it in a `_pages` subdirectoy.

```
├── _pages
│   └── resume.md
```

When Jekyll builds the site it will output the resume page into `_pages/resume.html` which isn’t what we’re looking to achieve. We’d much rather it end up in `pages/resume.html` without the leading `_`.

You could of course rename the `_pages` directory to `pages` and get the desired result. But if you’re looking to follow the convention of naming Jekyll source directories with underscores, then setting a permalink override is the solution.

Inside of `_pages/resume.md` we can add the following path to force where it outputs to.

```
---
permalink: /resume.html
---
```

Now when Jekyll builds the site it will output the resume page into:

```
├── _site
│   └── resume.html
```

We can even change the filename it outputs as:

```
---
permalink: /resume/index.html
---
```

### [Duplicate permalinks](#duplicate-permalinks "Permalink to Duplicate permalinks")

Different source files with the same `permalink` can cause all sorts of confusion when troubleshooting a Jekyll build. Maybe you made some changes to your home page’s content and can’t figure out why it’s not updating. Or maybe you see nothing at all and the page is blank.

This is quite common when forking or copying other Jekyll repositories and ending up with both `index.html` and `index.md` files in your project. Since they share a filename, they’ll output to the same location and conflict 💥.

This could also happen if you had a file like `_pages/home.md` with `permalink: /` or `permalink: index.html` added to its YAML front matter. Thankfully in newer versions, Jekyll’s CLI will warn you about such conflicts.

```
Conflict: The following destination is shared by multiple files.
The written file may end up with unexpected contents.
C:/Users/michael/sites/jekyll-site/_site/index.html
  - home.md
  - index.md
```

---

## [How to link](#how-to-link "Permalink to How to link")

How do you link posts, pages, documents, images, videos, and other resources together with Jekyll? Before answering that question, it’s useful to learn about the following URL types:

### [URL types](#url-types "Permalink to URL types")

Type

Description

1

**Document-relative**

URL contains path relative to the current page.

2

**Root-relative**

URL contains path relative to the site’s *root directory* — starts with a forward slash `/`.

3

**Absolute**

Full URL including protocol, domain, port, and or path.

#### [Document-relative URLs](#document-relative-urls "Permalink to Document-relative URLs")

A relative URL that does not start with `/`, is **document-relative** and will instruct the browser to look for the document or file in the context of the current page.

Meaning if the browser has the following page open: `https://mademistakes.com/articles/index.html`, and there is a document-relative link pointing to `article-two/index.html` it would browse to the `article-two` sub-directory inside of the `articles` directory. Then look for a file named `index.html`.

```
├── https://mademistakes.com/articles
│   └── index.html                    (current document)
│       └── articles-two
│           └── index.html
```

##### [When do you use document-relative URLs?](#when-do-you-use-document-relative-urls "Permalink to When do you use document-relative URLs?")

In my experience document-relative URLs are not all that common when working with Jekyll unless you have a flat directory structure. The one use case where I think they are helpful is if you want to organize supporting assets with a post in the same directory.

```
├── _posts
│   └── 2021-07-12
│       ├── 2021-07-12-weeknotes-8.md
│       ├── bbq.jpg
│       └── fireworks.jpg
```

Unfortunately Jekyll doesn’t make this easy out of the box as it doesn’t know what to do with the non-Markdown files above.

`2021-07-12-weeknotes-8.md` would be read and output as expected to `_site/2021/07/12/weeknotes-8.html`, but the static assets `bbq.jpg` and `fireworks.jpg` would not.

With the help of Nicolas Hoizey’s [**jekyll-postfiles**](https://nhoizey.github.io/jekyll-postfiles/) plugin this can be fixed. Once installed, static assets will follow the same `permalink` pattern as posts and output alongside them like this:

```
├── _site
│   └── 2021
│       └── 07
│           └── 12
│               ├── weeknotes-8.html
│               ├── impossible-burgers.jpg
│               └── fireworks.jpg
```

Now we can add document-relative links to images (or other assets) in Markdown and HTML files without them 404ing.

```
![Impossible burgers on the grill](impossible-burgers.jpg)
```

```
<img src="fireworks.jpg" alt="Fireworks exploding in the sky">
```

#### [Root-relative URLs](#root-relative-urls "Permalink to Root-relative URLs")

As the name implies, root-relative URLs make the path relative to the root directory of the site, denoted by a forward slash `/`.

Meaning if the browser has the following page open: `https://mademistakes.com/about/index.html`, and there is a root-relative link pointing to `/legal/privacy-policy/index.html` it would browse to the `legal` directory from the root directory. Then down into the `privacy-policy` sub-directory, where it would open a file named `index.html`.

```
├── https://mademistakes.com
│   ├── about         
│   │   └── index.html  (current document)
│   └── legal
│       └── privacy-policy
|           └── index.html
```

The forward slash `/` is import as it starts from the root of the server. If the `/` was omitted and the link was `legal/privacy-policy.html`, the browser would try to open `https://mademistakes.com/about/legal/privacy-policy/index.html` instead. Which would lead to a 404 error page as this file does not exist on the server.

##### [When do you use root-relative URLs?](#when-do-you-use-root-relative-urls "Permalink to When do you use root-relative URLs?")

Root-relative are most often used to link internal pages (e.g., related posts, category and tag archives, an about page, etc.) from the same site together. In my experience they are helpful when building sites with a deep directory structure.

It’s much easier to avoid broken links and 404 pages this way as you don’t have to worry page context when crafting URLs.

Some examples of root-relative URLs are:

```
[root-relative file](/root-relative-file.html)
```

```
<!-- anchor link -->
<a href="/root-relative-file.html">root-relative file</a>

<!-- sitemap -->
<link href="/sitemap.xml" rel="sitemap" type="application/xml">

<!-- JavaScript file -->
<script src="/app.js"></script>
```

#### [Absolute URLs](#absolute-urls "Permalink to Absolute URLs")

Unlike relative URLs, absolutes or full URLs have all of the necessary elements (protocol, domain, port, and path) needed to resolve a URL.

##### [When do you use absolute URLs?](#when-do-you-use-absolute-urls "Permalink to When do you use absolute URLs?")

Absolute URLs are used when linking to pages and files that live outside of the current site.

For example, the about page on this site links out to Twitter with the following absolute URL `https://twitter.com/mmistakes` which contains the protocol `https://`, domain `twitter.com` and path of `/mmistakes`.

Some examples of absolute URLs are:

```
[file on another domain](https://not-mademistakes.com/absolute-file.html)
```

```
<!-- external anchor link -->
<a href="https://not.mademistakes.com/absolute-file.html">absolute file</a>

<!-- externally hosted CSS file -->
<link href="https://not.mademistakes.com/assets/styles.min.css" rel="stylesheet">

<!-- externally hosted JavaScript file -->
<script src="https://not.mademistakes.com/assets/app.js"></script>
```

### [About `site.url` and `site.baseurl`](#about-siteurl-and-sitebaseurl "Permalink to About site.url and site.baseurl")

![Illustration of Jekyll’s site.url and site.baseurl variables](https://mademistakes.com/images/jekyll-site-url-baseurl-illustration_hub6f04c58f3ac2e3501a3905ce656cb2c_192632_800x0_resize_q75_box.jpg)

These two Jekyll `_config.yml` variables are notorious for breaking links, stylesheets, JavaScript and more. Knowing how they function is important for building working relative and absolute URLs in Jekyll theme files like layouts and includes.

### [Linking posts](#linking-posts "Permalink to Linking posts")

There are multiple ways to link to other Jekyll posts:

1.  Reference the post’s full root-relative URL e.g., `/2021-01-01-how-to-make-pizza.html`.
2.  Use Jekyll’s [`{% post_url %}` tag](https://jekyllrb.com/docs/liquid/tags/#linking-to-posts).
3.  Use Jekyll’s [`{% link %}` tag](https://jekyllrb.com/docs/liquid/tags/#link).

The best way I’ve found is to use Jekyll’s `{% post_url %}` tag as it generates the correct URL even if the `permalink` style changes — `baseurl` folder and all.

#### [`{% post_url %}` and `{% link %}` tags](#-post_url--and--link--tags "Permalink to {% post_url %} and {% link %} tags")

Jekyll comes with a set of Liquid tags that makes linking easier for content authors and editors. If following the Jekyll convention of organizing posts in the `_posts` folder…

```
├── _posts
│   ├── 2021-01-01-how-to-make-pizza.md
│   └── 2021-05-20-birthday-bash.md
```

You’d link to post `2021-01-01-how-to-make-pizza` by referencing its filename, omitting the extension at the end, e.g., `.md`.

```
{% post_url 2021-01-01-how-to-make-pizza %}
```

Jekyll will then output the following root-relative URL (if using the default permalink pattern of `permalink: date`.)

```
/2021/01/01/how-to-make-pizza.html
```

---

Jekyll also has the `{% link %}` tag, which can be used to link to a post, page, collection document, or file. The big difference between `link` and `post_url` is that the link tag requires the file’s full path e.g., directory and extension.

Using the same “How to make pizza” post from above, here’s how to link to it using Jekyll’s `link` tag:

```
{% link _posts/2021-01-01-how-to-make-pizza.md %}
```

Jekyll then outputs the same root-relative URL as before, `/2021/01/01/how-to-make-pizza.html`.

For links created using either `{% post_url %}` or `{% link %}`, if the `baseurl` config has been set because the site is hosted on GitHub Pages, for example something like this:

```
# _config.yml
basewebsite: /project-name
```

Jekyll will output this root-relative URL instead: `/project-name/2021/01/01/post-to-link-to.html`.

#### [Post link examples](#post-link-examples "Permalink to Post link examples")

Creating internal links to other posts is the quickest when [written in Markdown](https://daringfireball.net/projects/markdown/syntax#link "inline link syntax") as it doesn’t require as much markup. If you know a post’s full path you can reference that entire URL or use Jekyll’s `post_url` or `link` tags that reference the source file.

```
[How to make pizza](/2021/01/01/how-to-make-pizza.html)
[How to make pizza]({% post_url 2021-01-01-how-to-make-pizza %})
[How to make pizza]({% link _posts/2021-01-01-how-to-make-pizza.md %})
```

Or if you prefer to create links in HTML instead, you can.

```
<a href="/2021/01/01/how-to-make-pizza.html">How to make pizza</a>
<a href="{% post_url 2021-01-01-how-to-make-pizza %}">How to make pizza</a>
<a href="{% link _posts/2021-01-01-how-to-make-pizza.md %}">How to make pizza</a>
```

Either way you create the link, Jekyll outputs the same HTML:

```
<a href="/2021/01/01/how-to-make-pizza.html">How to make pizza</a>
```

### [Linking pages](#linking-pages "Permalink to Linking pages")

Like posts, pages can be linked to in multiple ways:

1.  Reference the page’s full root-relative URL e.g., `/about.html`.
2.  Use Jekyll’s [`{% link %}` tag](https://jekyllrb.com/docs/liquid/tags/#link).

My preferred method is to use Jekyll’s `{% link %}` tag as it has permalink “smarts” built into it and will warn you if trying to link to an invalid path.

Let’s say you created a fresh Jekyll site using the `jekyll new` command. After running that, you’d find an `about.markdown` file in the root of the site:

```
├── _posts
├── _config.yml
├── about.markdown
├── index.html
```

To link to that page you could create the link yourself if you know that the output path will be `/articles.html`. But what if you’re new to Jekyll and not sure [how permalinks work](#global-permalinks)?

#### [Page link examples](#page-link-examples "Permalink to Page link examples")

Jekyll’s `link` tag solves this problem. All you need to know is the path (i.e., the source file), and then it can be linked like this:

```
{% link about.markdown %}
```

With files that are nested in sub-directories, you include the full path. For example, if we have a privacy policy page inside of a `/terms` directory:

```
├── terms
│   └── privacy-policy.md
```

It can be linked to like this (with or without the leading forward slash `/`) in Markdown or HTML:

```
[Privacy policy]({% link terms/privacy-policy.md %})
```

```
<a href="{% link terms/privacy-policy.md %}">Privacy policy</a>
```

Jekyll will output the same HTML for both:

```
<a href="/terms/privacy-policy.html">Privacy policy</a>
```

Like the `post_url` tag, if you link to a file that doesn’t exist or use the wrong path — Jekyll will warn you:

```
Liquid Exception: Could not find document 'terms/privacy-policy.md' in tag 'link'. Make sure the document exists and the path is correct. in index.markdown
```

### [Jekyll URL filters](#jekyll-url-filters "Permalink to Jekyll URL filters")

For theme developers and anyone looking to build or modify layouts, Jekyll has a set of Liquid filters that make working with URLs easier. If you’re new to [**Liquid**](https://shopify.github.io/liquid/) (the template language used by Jekyll), [filters](https://jekyllrb.com/docs/liquid/filters/#standard-liquid-filters "standard Liquid filters") are used to change the output of a string, object, or variable.

You will find them inside of double curly braces `{{ }}` and after the pipe character `|`. For example this `page.lang` variable that has a filter applied to it to assign a [default value](https://shopify.github.io/liquid/filters/default/) of `"en"`.

```
{{ page.lang | default: "en" }}
```

\-

Filter

Description

Example output

Relative URL

`relative_url`

Prepends `baseurl` configuration value to the input creating a relative URL. Recommended for sites placed in a sub-directory e.g., projects hosted on GitHub Pages.

`/my-project/assets/styles.css`

Absolute URL

`absolute_url`

Prepends `url` and `baseurl` configurations values to the input creating an absolute URL.

`https://mmistakes.github.io/my-project/assets/styles.css`

The `relative_url` and `absolute_url` filters were created to ease the pain of prepending `url` and `baseurl` to links. Instead of needing to write `{{ site.baseurl }}assets/css/styles.css`. You could write the following:

```
{{ 'assets/css/styes.css' | relative_url }}
```

Or if you needed to output the full URL of a page and were using something like: `{{ site.url }}{{ site.baseurl }}{{ page.url }}` or `{{ page.url | prepend: site.baseurl | prepend: site.url }}` in your layouts.

Both could be shortened by using Jekyll’s `absolute_url` filter:

```
{{ page.url | absolute_url }}
```

Since filters are generally used in Jekyll layouts and includes, it’s unlikely content authors will have much use for them. In that case, the [`{% post_url %}` and `{% link %}` tags](https://mademistakes.com/#-post_url--and--link--tags) will be more useful when creating internal links.

## [Jekyll relative links plugin](#jekyll-relative-links-plugin "Permalink to Jekyll relative links plugin")

Another option for dealing with relative links may be to install the [**jekyll-relative-links**](https://github.com/benbalter/jekyll-relative-links) plugin.

Perhaps you have repository of Markdown files on GitHub with links like `[foo](bar.md)`. On GitHub.com these links are valid and work. But on the documentation site you built using these same Markdown source files — the links are broken.

Using the **jekyll-relative-links** plugin can solve this by converting relative links to Markdown files into links to the appropriate Jekyll generated `.html` files.

For example, say we have two Markdown files in the root directory:

```
├── install.md
├── upgrade.md
```

And in `install.md` there is the following Markdown that links to `upgrade.md`:

```
To [upgrade the package](upgrade.md), run...
```

On GitHub.com the link will work as expected since `upgrade.md` exists. But for a Jekyll built site, the browser expects the URL to be something like `/upgrade.html` (or whatever permalink style is configured).

HTML output

\-

`<a href="upgrade.md">upgrade the package</a>`

❌

With **jekyll-relative-links** installed the same Markdown link of `[upgrade the package](upgrade.md)` will output as a valid relative link to the rendered file — custom permalinks and all!

HTML output

\-

`<a href="/upgrade.html">upgrade the package</a>`

✅