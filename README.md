# Gaurav Gupta — AI/ML Portfolio

A single-page portfolio website that showcases my AI/ML projects, organized by category, with live stats pulled directly from GitHub.

**Live site:** _add your GitHub Pages link here once deployed_
**Author:** Gaurav Gupta — AI/ML Enthusiast
**Contact:** [gaurav082507@gmail.com](mailto:gaurav082507@gmail.com) · [LinkedIn](https://www.linkedin.com/in/gaurav-gupta-79754a377) · [GitHub](https://github.com/gaurav082507-lang)

---

## About

This portfolio is built as a single `index.html` file — no build step, no framework, no server required. It's designed with a terminal/CLI aesthetic and automatically fetches each project's star count and last-updated date live from the GitHub API, so the page stays current without manual edits every time a repo is updated.

## Project Categories

- **Image Classification** — computer vision models for plant disease detection and waste sorting
- **NLP Projects** — language detection and text-based intelligence
- **Agentic AI Projects** — autonomous agents for interviewing, travel planning, debating, flight tracking, and data analysis
- **GenAI & RAG Projects** — voice assistants, tutoring bots, and retrieval-augmented generation systems

Each project card links to its GitHub repo and, where available, a live Streamlit or GitHub Pages demo.

## Tech Stack

- HTML5 / CSS3 (no framework)
- Vanilla JavaScript
- [GitHub REST API](https://docs.github.com/en/rest) for live repo stats (stars, last commit date)
- Deployed via GitHub Pages

## Running Locally

No installation needed — just open `index.html` in any browser:

```bash
git clone https://github.com/gaurav082507-lang/portfolio.git
cd portfolio
open index.html   # or double-click the file
```

## Deploying (GitHub Pages)

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Save — your site will be live at `https://gaurav082507-lang.github.io/portfolio/` within a minute or two.

## Updating Projects

All project data lives in the `categories` array inside the `<script>` tag in `index.html`. To add, remove, or edit a project, just edit that array — no other code needs to change. Each entry looks like:

```js
{ name: "Repo-Name-On-GitHub", desc: "One-line description.", streamlit: "https://your-demo-url.com" }
```

Leave `streamlit` out entirely (or empty `""`) for projects without a live demo.

## License

Personal portfolio — feel free to fork the structure for your own use, but please don't reuse the project content/descriptions as your own.
