# iRing project website

Project page for iRing, the open-source smart ring with a multi-point capacitive touch display presented at ACM UIST 2026.

- Website: https://runzeliu.com/iRing_site/
- Paper: https://doi.org/10.1145/3830398.3830549
- Hardware and firmware: https://github.com/OmniLab-Dev/iRing_opensource

## Hosting

The site is static HTML and CSS, with a locally hosted Cascadia Code font. It needs no package installation, build step, or backend. A small local script follows the mouse with a soft blue-green background halo, and Cloudflare Web Analytics measures visits. The gesture controls use HTML and CSS. The halo uses screen blending so black regions in images and video receive the same glow as the page background. It is disabled for touch input and reduced-motion preferences.

Serve the repository root with GitHub Pages or another static web server. Keep `index.html`, `style.css`, `cursor-halo.js`, `assets/`, `sitemap.xml`, `.nojekyll`, and `3830398.3830549.pdf` together. The PowerPoint source is excluded from Git and is not required for hosting.

For a local preview with Python already installed:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Push changes to `main` to update the existing GitHub Pages site.

## Search metadata

`index.html` includes the canonical project URL, Open Graph and social preview tags, Google Scholar citation metadata, and Schema.org descriptions of the project, paper, authors, and institution. The DOI remains the primary paper link; a same-site PDF link exposes the full text to research crawlers.

The sitemap is published at:

https://runzeliu.com/iRing_site/sitemap.xml

Keep the canonical URL, metadata URLs, and sitemap consistent if the site moves. Update the sitemap's `lastmod` only after a substantive content change, using the actual change date.

In Google Search Console, verify a property covering the project URL, submit the sitemap, and inspect the project URL to request indexing. These steps require the site's owner or a full Search Console user. Structured data and indexing requests do not guarantee search placement.

A `robots.txt` file belongs at https://runzeliu.com/robots.txt, which is outside this project's subdirectory. There is deliberately no nested `robots.txt` here. A missing root robots file does not block crawling. If the domain's root site later adds a robots file, it can advertise this sitemap with:

```text
Sitemap: https://runzeliu.com/iRing_site/sitemap.xml
```

## Assets and content

Research content and original visual assets come from the supplied paper and presentation. The figures use optimized WebP images and SVGs; the demo is an MP4 with `preload="none"`. The local font's license is in `assets/fonts/LICENSE.txt`.

The page distinguishes wholesale ($46.43) and retail ($120.03) component costs and describes recognition results within the scope of the paper's 12-participant prototype study. Keep these qualifications when updating the content.
