# Ghostium for GitHub Pages

A Jekyll port of the classic Ghostium theme. It keeps the split cover, reading column, original palette, and typography while publishing as a static site on GitHub Pages. No Ghost server is needed.

## Start writing

1. Edit `_config.yml`:
   - `title`, `description`, `lang`, and `author`
   - `url`: `https://YOURNAME.github.io`
   - `baseurl`: empty for `YOURNAME.github.io`, or `/REPOSITORY` for a project repository
   - Optional `cover_image`, `logo`, and `author.avatar`: local paths beginning with `/`
2. Edit `_data/navigation.yml` to change menu links.
3. Replace the sample file in `_posts` with your own posts. Name each file `YYYY-MM-DD-slug.md`, and give it `layout: post` and `title:` in the front matter. Optional fields include `description`, `tags`, `image`, and `image_alt`.
4. Edit `about.md`.

Images can go under `assets/images/`. Use `{{ '/assets/images/example.jpg' | relative_url }}` in Markdown or HTML so project sites with a `baseurl` work correctly. Tag links lead to the `/tags/` index. RSS is generated at `/feed.xml`.

## Publish

Create a GitHub repository and push this folder to its `main` branch. In the repository's **Settings → Pages**, set the build source to **GitHub Actions**. The included workflow builds and deploys the site on every push to `main` or `master`. It follows GitHub's supported Jekyll Pages workflow.

## Preview locally

Use Ruby and Bundler:

```sh
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`. The local build uses the same `github-pages` gem as GitHub Pages.

## Relationship to the Ghost theme

The maintained Ghost edition is in `../ghostium`. Both editions use the original compiled Ghostium CSS with a small modern override and the same menu/share script. Ghost-specific features such as members, native comments, and the Ghost editor are only available in the Ghost edition. GitHub Pages serves static Markdown posts.

Original Ghostium © Oswaldo Acauan, MIT licensed.
