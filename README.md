# iRing project website

A static, responsive site built with HTML and CSS. Black background, white text, and a locally hosted Cascadia Code font. No JavaScript, package installation, build step, or backend is required.

## Serve

Set your web server's document root to this directory. Keep these files together:

- `index.html`
- `style.css`
- `assets/` (images, video, font, and font license)
- `3830398.3830549.pdf`
- `UIST2026_iRing_Cascadia.pptx`

The PDF and presentation are linked directly; keep their filenames unchanged or update the links in `index.html`. The presentation is approximately 324 MB and is downloaded only when requested. The demo video is approximately 20 MB and uses `preload="none"`.

For an optional local preview, if Python is already installed:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. You can also open `index.html` directly in a browser.

## Content and assets

Content and original visual assets come from the supplied paper and presentation. Images were resized and converted to WebP, and the presentation's embedded demo was compressed to an MP4. Cascadia Code is bundled as WOFF2; its license is in `assets/fonts/LICENSE.txt`.

The cost estimate distinguishes wholesale ($46.43) from retail ($120.03). The page uses the paper's 97.7% gesture recognition, 98.0% tap location, and 96.5% slide recognition results, with the 12-participant study scope stated. Battery runtime is omitted because the paper and slides give different estimates.

## Validation

Checked local asset and download paths, section anchors, unique IDs, image alt text, and absence of JavaScript. The static server returned HTTP 200. Visual browser QA could not be completed because the browser connection was unavailable.
# iRing_site
# iRing_site
