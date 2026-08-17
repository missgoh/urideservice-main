# Project Guide

## Architecture

This is a dependency-free static website deployed directly by Netlify. There is no application framework, package installation, or compilation step.

## Key files

- `index.html`: Page structure, content, inline SVG illustrations, navigation, and external font links.
- `styles.css`: Complete visual system, responsive layouts, component styling, animations, and accessibility preferences.
- `script.js`: Mobile navigation, sticky-header state, FAQ accordion behavior, and dynamic copyright year.
- `README.md`: Project overview and local usage notes.

## Conventions

- Keep the site framework-free unless a future feature clearly requires otherwise.
- Use semantic HTML and preserve keyboard-accessible controls.
- Reuse the CSS custom properties in `:root` for colors, sizing, shadows, and shared tokens.
- Add responsive behavior at the existing `980px` and `700px` breakpoints when possible.
- Animate only `transform` and `opacity`, and respect `prefers-reduced-motion`.
- Keep JavaScript progressive and null-safe so the page remains usable if scripts fail.

## Non-obvious decisions

The vehicle and route visuals are implemented with CSS and inline SVG rather than external image assets. The primary booking destination remains the existing company website until a verified direct booking endpoint is supplied.
