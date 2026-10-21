# McIntosh Portfolio

A personal academic website with a resume, research projects, and a publication list.
It is plain HTML, CSS, and JavaScript, so there is no build step and nothing to install.

## Editing your content

All content lives in **`content.js`**. Open it and replace the placeholder text with your own:

- `name`, `title`, `affiliation`, `email`, `location`, `links`
- `about`, `interests`, `news`
- `research` (project cards)
- `publications` (grouped by year and filterable by type, with optional BibTeX)
- `education`, `experience`, `awards`, `skills`, `talks`

Any list left empty (`[]`) hides its section automatically.

### Featured research visuals

The `featured` block in `content.js` shows a research project with interactive visuals, each paired with a paragraph.
Each visual is a standalone HTML page in `research/capstone/`. To add one, put the page in that folder and add an entry to `featured.visuals` with a `title`, `src`, and `paragraph`.
Embedded visuals resize to fit only when the site is served over http (GitHub Pages or `python3 -m http.server`), not when `index.html` is opened directly from disk.

### Photo and CV

Put files in the `assets/` folder and reference them in `content.js`:

```js
photo: "assets/profile.jpg",
cvPdf: "assets/cv.pdf",
```

## Previewing locally

Open `index.html` in a browser, or run a small server:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing with GitHub Pages

1. Merge this branch into `main`.
2. On GitHub go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. The site will be live at `https://<your-username>.github.io/McIntosh_Portfolio/` after a minute or two.
