# Code Standards & Quality Rules

## 1. Code Quality & Human-like Styling
- Use functional React components with standard React hooks (`useState`, `useEffect`, `useCallback`, `useRef`).
- Keep components focused and single-purpose.
- Prefer CSS custom properties (variables) for theme consistency (`--airbnb-brand`, `--text-main`, `--radius-md`).
- Avoid hardcoded values in calculations; derive values reactively from state.

## 2. Accessibility (a11y)
- All interactive buttons must have either descriptive visible text or `aria-label` attributes.
- Modals must implement `role="dialog"` and `aria-modal="true"`.
- Support standard keyboard shortcuts: `Escape` to close overlays, `ArrowLeft` and `ArrowRight` for image carousels.

## 3. Plagiarism & Originality
- All component structures, CSS classes, and layout rules are authored originally.
- Do not copy minified vendor code or scrape proprietary asset bundles.
