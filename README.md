# TypeScript Congress URL slug history example

This is a fork of the original [Kontent + Next.js boilerplate](https://github.com/Kentico/kontent-boilerplate-next-js) that uses TypeScript and has the URL slug history implemented on /[slug].tsx page.

In order to run this project, please consult the original [README](https://github.com/Kentico/kontent-boilerplate-next-js#readme).

## Adjustments in content model

This example uses one extra content type:

* name: **Conference**
* elements:
  * title (text)
  * text (text)
  * URL slug (url slug)
  * URL slug history (custom element)
    * hosted code URL (see below)
    * Allow the custom element to read values of specific elements: select the URL slug element
    * Parameters (JSON): `{"urlSlugElementCodename": "url_slug"}` (use the URL slug element codename)

## Custom element

Find the used custom element URL Slug History in [Kontent Custom Elements gallery](https://kentico.github.io/kontent-custom-element-samples/gallery/) or visit its [repo](https://github.com/ondrabus/kontent-url-slug-history-custom-element) directly.
In order to use the custom element in your Kontent project, you'll need to deploy it. The repository contains a single-click deployment button to Netlify.

# Get help

If you need any help or just want to discuss your project, join the [Kontent community on Discord](https://bit.ly/kontent-discord).
