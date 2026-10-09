# Khushi Mishra — Accessible Portfolio

## Pages
- `index.html` — Home
- `about.html` — About and education
- `projects.html` — Project cards
- `contact.html` — Accessible contact form

## Run locally
1. Extract the ZIP file.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

## Accessibility and SEO checklist
- Semantic landmarks: `header`, `nav`, `main`, `section`, `article`, `footer`
- Skip link to main content
- Keyboard-accessible navigation button with `aria-expanded` and `aria-controls`
- Visible `:focus-visible` styling
- Form labels, required fields, helpful descriptions, native validation, and live status region
- Responsive layout and reduced-motion preference
- Page-specific titles and meta descriptions

A perfect Lighthouse score cannot be guaranteed by source code alone. Run Lighthouse in Chrome and test keyboard navigation, contrast, and form behavior. The sample contact form uses `mailto:` and should be connected to a backend or trusted form service for production.
