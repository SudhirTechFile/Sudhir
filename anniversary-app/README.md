# OURFLIX — 1 Year Anniversary Gift

A Netflix-style single-page site, personalized as an anniversary gift.

## Run it

No build step required — it's plain HTML/CSS/JS with Tailwind loaded from a CDN.

Just open `index.html` in a browser, or serve the folder locally:

```bash
cd anniversary-app
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Password

The login screen asks for a password: **6072025**

Change it in `data.js` → `SITE_CONFIG.password`.

## Add your own photos and videos

Everything content-related lives in **`data.js`** — you don't need to touch
`index.html`, `style.css`, or `app.js` to personalize the site.

1. Put your files in `media/videos/` and `media/photos/`.
2. In `data.js`, update the `src` / `thumbnail` / `image` / `video` fields to
   point at your files, e.g.:
   ```js
   video: "media/videos/beach-day.mp4",
   thumbnail: "media/photos/beach-day-cover.jpg",
   ```
3. Update titles, descriptions, years, tags, and dates to match your memories.
4. Everything marked `🔧 PLACEHOLDER` in `data.js` is demo content — replace it.

## Structure

- `index.html` — page structure/markup
- `style.css` — Netflix-style visual polish (card hover-zoom, row arrows, animations)
- `data.js` — **all your content** (edit this one)
- `app.js` — app logic (login, tabs, modal, rows) — reads everything from `data.js`
