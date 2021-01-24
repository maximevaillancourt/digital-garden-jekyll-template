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


## Modifying for use with static output

If you are using a site such as Neocities which cannot resolve urls that do not end with .html the bidirectional links will not work. This can be fixed by modiying ``` _plugins/bidirectional_links_generator.rb``` on lines ```5, 32, 39, 46 and 72``` to have the .html extension. 

For example: 
```"<a class='internal-link' href='#{note_potentially_linked_to.url}'>\\1</a>"```

becomes 
```"<a class='internal-link' href='#{note_potentially_linked_to.url}.html'>\\1</a>"```

You will also need to update the backlinks in ```_layouts/note.html``` to also have .html on line ```22```

## License

Source code is available under the [MIT license](LICENSE.md).
