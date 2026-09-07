# Documentation — Posh Angular Rebuild

This document maps each item in the assessment brief to where it's
implemented in this project, plus a few notes on decisions made along
the way.

## 1. Components

Every visual section of the original page is its own standalone
component (no `NgModule`s anywhere — Angular 18's default). Nothing is
built as one large monolithic component:

| Component | File | Purpose |
|---|---|---|
| `AppComponent` | `src/app/app.component.ts` | Shell — Navbar, `<router-outlet>`, Footer |
| `NavbarComponent` | `src/app/components/navbar/` | Site nav, mobile menu |
| `HeroComponent` | `src/app/components/hero/` | Headline / CTA banner |
| `ShowcaseComponent` | `src/app/components/showcase/` | Feature grid + highlight strip |
| `ShowcaseCardComponent` | `src/app/components/showcase-card/` | One reusable card |
| `ContactComponent` | `src/app/components/contact/` | The new contact form |
| `FooterComponent` | `src/app/components/footer/` | Footer with live copyright year |
| `HomeComponent` | `src/app/pages/home/` | Routed page: Hero + Showcase + Contact |
| `AboutComponent` | `src/app/pages/about/` | Routed page: second view |

## 2. Data binding & control flow

- Interpolation (`{{ }}`) and property binding (`[attr]`) are used
  throughout (e.g. `showcase-card.component.html`, `hero.component.html`).
- `@if` / `@else` is used for the mobile menu icon toggle
  (`navbar.component.html`), the selected-item note
  (`showcase.component.html`), and the form/"thanks" swap
  (`contact.component.html`).
- `@for` (with `track`) replaces every place the original static HTML
  repeated near-identical markup by hand: nav links, showcase cards,
  and feature highlights.

## 3. Signals — Input & Output

This project uses the newer Signal-based `input()` and `output()`
functions rather than the `@Input()` / `@Output()` decorators:

- `HeroComponent.headline`, `.subtext`, `.ctaLabel` — `input()` /
  `input.required()`.
- `HeroComponent.ctaClicked` — `output()`, handled by `HomeComponent`.
- `ShowcaseCardComponent.item` — typed `input.required<ShowcaseItem>()`.
- `ShowcaseCardComponent.cardSelected` — `output<ShowcaseItem>()`,
  handled by `ShowcaseComponent`, which stores the pick in a `signal`.
- `NavbarComponent.isOpen` — a `signal<boolean>()` driving the mobile
  menu; `menuToggled` is an `output<boolean>()` consumed by
  `AppComponent`, which keeps its own `mobileMenuOpen` signal.
- `ContactComponent.submitted` — a `signal<boolean>()` that flips after
  a valid submit and swaps the template view with `@if`.

## 4. Interfaces / typed data

- `NavLink` (`models/nav-link.model.ts`)
- `ShowcaseItem` (`models/showcase-item.model.ts`)
- `FeatureHighlight` (`models/feature-highlight.model.ts`)

All three drive `@for` loops instead of hardcoded markup.

## 5. Routing

- `app.routes.ts` defines two lazy-loaded routes: `''` (Home) and
  `'about'` (About), plus a wildcard redirect back to Home.
- `AppComponent` renders the active route through `<router-outlet>`.
- `NavbarComponent` links use `routerLink` / `routerLinkActive` so the
  current page is highlighted.

## 6. Forms

`ContactComponent` did not exist as working functionality in the
original static page — it's built from scratch here using
`ReactiveFormsModule`:

- Three controls (`name`, `email`, `message`), each required.
- Two hand-written custom validators:
  - `notBlankValidator()` — rejects whitespace-only input (so a user
    can't "fill in" a field with just spaces).
  - `strictEmailValidator()` — a regex check that the email has a
    `local@domain.tld` shape.
- The submit button is bound to `[disabled]="contactForm.invalid"`, so
  it can't be pressed until every field passes validation.
- On a valid submit, a `signal` (`submitted`) flips to `true` and the
  template swaps to a "thanks" view via `@if` / `@else`.

## 7. Footer / live data

`FooterComponent.currentYear` is read from `new Date().getFullYear()`
at construction time rather than being a hardcoded literal.

## Known limitations

- This is a scaffolded project (package.json / angular.json / source
  files) rather than one produced by physically running `ng new` and
  `npm install`, since this environment has no access to install the
  full Angular CLI toolchain. The file layout, configuration, and
  imports match what `ng new --standalone` produces on Angular 18, so
  running `npm install` followed by `ng serve` should work as-is — but
  if you hit a version mismatch, regenerate a fresh `ng new` project
  and copy the `src/app` folder from this submission into it.
- No automated tests (`*.spec.ts`) are included; the assessment scope
  stops at Forms and doesn't call for a testing pass.
- The contact form logs to the console on submit rather than calling a
  real backend — there's no API in scope for this assessment.
