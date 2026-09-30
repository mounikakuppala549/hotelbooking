---
name: airbnb-clone
description: Specialized skill workflow for building pixel-perfect Airbnb clones and vacation rental listing pages with human-quality React code.
---

# Airbnb Clone Development Skill

This skill defines the technical workflow and quality standards for engineering high-fidelity vacation rental listing frontends.

## 1. Architectural Guardrails
- **Component Separation**: Each UI section must live in its own component under `src/components/` with dedicated styling in `src/styles/`.
- **Pure React Ecosystem**: Build on standard React (Webpack/CRA paradigm) without relying on framework-specific conventions or black-box libraries.
- **State Flow**: Centralize high-level overlay state (photo tour, lightbox, active photo index) in `App.jsx`, delegating localized UI state (popovers, tabs, input toggles) to respective child components.

## 2. Interaction & Behavioral Requirements
- **Hero Grid to Lightbox**: Clicking any photo in the hero grid immediately launches the Lightbox initialized to that photo index.
- **Photo Tour to Lightbox**: The Photo Tour acts as an index gallery; clicking any photo in the tour opens the Lightbox.
- **Keyboard Navigation**:
  - `ArrowLeft` / `ArrowRight` must cycle photos smoothly with circular wrapping.
  - `Escape` key must dismiss any open modal (Lightbox, Photo Tour, Amenities, Description, Reviews).
  - Body scroll lock (`document.body.style.overflow = 'hidden'`) must activate while modals are open and clean up on unmount.
- **Dynamic Pricing**: Changing the check-in/checkout dates dynamically re-computes nights, base total, 10% weekly discount (for 7+ nights), service fee, and total amount in the sticky booking widget.

## 3. Human Code Standards
- Write idiomatic JavaScript/JSX with clear, semantic variable and function names (`handlePrev`, `handleNext`, `totalGuests`, `isSaved`).
- Avoid repetitive or artificial comments. Let component composition and hook dependencies communicate intent.
- Ensure 100% original CSS and HTML markup to maintain low similarity scores against public templates.
