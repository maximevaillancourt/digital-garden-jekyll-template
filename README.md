[![Netlify Status](https://api.netlify.com/api/v1/badges/8cfa8785-8df8-4aad-ad35-8f1c790b8baf/deploy-status)](https://app.netlify.com/sites/digital-garden-jekyll-template/deploys)

# Digital garden Jekyll template

Use this template repository to get started with your own digital garden.

**I wrote a tutorial explaining how to set it up: [Setting up your own digital garden with Jekyll](https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll)**

Preview the template here: https://digital-garden-jekyll-template.netlify.app/

- Based on Jekyll, a static website generator
- Supports Roam-style double bracket link syntax to other notes
- Creates backlinks to other notes automatically
- Features link previews on hover
- Includes graph visualization of the notes and their links
- Features a simple and responsive design
- Supports Markdown or HTML notes

<img width="1522" alt="Screen Shot 2020-05-19 at 23 05 46" src="https://user-images.githubusercontent.com/8457808/82400515-7d026d80-9a25-11ea-83f1-3b9cb8347e07.png">

## A note about GitHub Pages

**Update (January 2023)**: it seems that GitHub Pages supports custom plugins now, thanks to GitHub Actions ([view relevant discussion](https://github.com/maximevaillancourt/digital-garden-jekyll-template/discussions/144)).

GitHub Pages only partially supports this template: to power the interactive notes graph, this template uses a custom Jekyll plugin to generate the graph data in [`notes_graph.json`](https://github.com/maximevaillancourt/digital-garden-jekyll-template/blob/7ac331a4113bac77c993856562acc2bfbde9f2f7/_plugins/bidirectional_links_generator.rb#L102), and [GitHub Pages doesn't support custom Jekyll plugins](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#plugins).

If you want to use the graph with GitHub Pages, you may try building your garden locally using Jekyll then pushing the result to GitHub Pages.

Alternatively, you may deploy your garden to Netlify and it'll work out of the box. [I wrote a guide explaining how to set this up](https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll).

If you don't care about the graph, you can simply remove it from this layout, [as explained here](https://github.com/maximevaillancourt/digital-garden-jekyll-template/discussions/132#discussioncomment-3625772).

## License

Source code is available under the [MIT license](LICENSE.md).
