# Laura Yao’s personal website

A responsive, static academic website for https://gss223.github.io/. No build step or JavaScript dependencies are required.

## Preview

From this folder, run:

```sh
python -m http.server 8000
```

Then open http://localhost:8000. Stop the server with Ctrl+C.

## Updating the site

- **Bio, news, publications, experience, and awards:** edit `index.html`.
- **Design and responsive layouts:** edit `css/style.css`.
- **Selected/all publication switch:** edit `js/main.js`. Papers with the `additional-paper` class appear in the all-papers view. Update the count on the button when adding papers.
- **CV:** replace `assets/Laura_Yao_CV.pdf`, keeping the same filename.
- **Portrait:** replace `assets/laura-yao.webp`. The original `profile.jpg` remains available.
- **News:** add a `.news-row` at the top of `.news-list`. Use only a year, season, or month you can confirm. Older entries go inside `.news-archive`.

## Content sources and editorial notes

The supplied October 2026 CV is the source for current affiliations, venue labels, author lists, awards, and teaching. The public site supplies the established social links and older publications. The newest five papers are selected; all eight are available using the publication control, including the two older papers omitted from the new CV.

Verified public links:

- Robot design: https://arxiv.org/abs/2609.08220 and https://github.com/UNITES-Lab/AID-SR
- FaithCoT-Bench: https://arxiv.org/abs/2510.04040 and https://github.com/se7esx/FaithCoT-BENCH
- Metacognitive self-correction: https://arxiv.org/abs/2510.14319

No public paper link was found for *Words Before Pixels*, so that entry has no paper button. The robot-design author order follows the supplied CV; the arXiv version lists Jingyi Chen, Mohan Zhang, and Laura Yao in a different order. The website intentionally keeps the CV author order, as confirmed by Laura. Awards have no invented dates. Ongoing research is currently omitted from the website.

`assets/Laura_Yao_CV.pdf` is an unchanged copy of the supplied `Laura_Yao_CV (5).pdf` with a cleaner name. The original CV outside this checkout and the repository’s older CV are preserved.

## GitHub Pages

The site keeps the existing repository’s root `index.html` structure. After reviewing, commit and push the changes to the branch used by GitHub Pages. No changes have been pushed or deployed by this local redesign.

The layout includes mobile styles, keyboard focus indicators, reduced-motion support, print styles, and readable content without JavaScript. Google Fonts is optional: system sans-serif and Georgia fallbacks are built in.
