# URide Service

A responsive static website for URide Service, a private airport transfer and charter provider based in Ipoh, Malaysia. The site includes a bilingual landing page plus dedicated pages for airport transfers, interstate transfers, private charters, day tours, and meet-and-greet services.

## Technologies

- Semantic HTML5
- Responsive CSS with custom properties and motion preferences
- Dependency-free JavaScript for navigation, fare and tour rendering, language switching, accordion controls, and the current year
- Shared structured content in `data.js` and English/Chinese translations in `i18n.js`
- Responsive local image assets in `public/images`
- Dedicated service pages under `services/`
- Netlify static hosting

## Run locally

No installation or build step is required. Serve the project directory with any static file server, or open `index.html` directly in a browser.

For Netlify’s local environment, run:

```bash
netlify dev --port 8889
```

## Content updates

Update shared fares, vehicles, add-ons, and tour information in `data.js`. Update translated interface text in `i18n.js`; service-specific page content remains in each page under `services/`.
