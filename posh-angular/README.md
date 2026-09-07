# Posh — Angular Rebuild

A rebuild of the [Posh landing page](https://prium.github.io/Posh/v2.1.0/) as a
real Angular application, done for the Angular Bootcamp assessment
(Bluechip Technology Tech Academy).

## Running it locally

```bash
npm install
ng serve
```

Then open `http://localhost:4200/`.

## How the page was split into components

The original single HTML file was broken into one standalone component
per visual section, plus two page-level components tied to routes:

- **`NavbarComponent`** — renders nav links from an array with `@for`,
  and owns the mobile menu open/closed state as a `signal`, emitting an
  `@Output()` whenever it toggles.
- **`HeroComponent`** — headline, subtext and CTA label all come in as
  Signal `input()`s instead of being hardcoded; the CTA button emits an
  `output()` event instead of using an inline `onclick`.
- **`ShowcaseComponent`** — owns the list of showcase items and the
  feature-highlight strip as typed arrays, and renders the grid by
  looping `@for` over `ShowcaseCardComponent`.
- **`ShowcaseCardComponent`** — a single reusable card that takes one
  typed `ShowcaseItem` as input and emits a `cardSelected` event.
- **`ContactComponent`** — a real Reactive Form (the original page had
  no working form here). Custom validators (`notBlankValidator`,
  `strictEmailValidator`) guard each field, the submit button is
  disabled until the form is valid, and a `signal` swaps in a "thanks"
  view on success.
- **`FooterComponent`** — pulls the copyright year from `new Date()`
  rather than a hardcoded number.
- **`HomeComponent`** / **`AboutComponent`** — the two routed pages.
  `HomeComponent` composes Hero + Showcase + Contact; `AboutComponent`
  is the second route added to satisfy the routing requirement, reached
  via `routerLink` and rendered through `<router-outlet>` in
  `AppComponent`.

See `DOCUMENTATION.md` for a fuller walkthrough of how each assessment
requirement maps to specific files.

## Project structure

```
src/app/
  app.component.ts/html        Shell: Navbar + <router-outlet> + Footer
  app.routes.ts                 Route table (Home, About)
  app.config.ts                 Providers (router, zone change detection)
  models/                       Shared TypeScript interfaces
  components/
    navbar/
    hero/
    showcase/
    showcase-card/
    contact/
    footer/
  pages/
    home/
    about/
```

## Notes

- Built with standalone components (no `NgModule`s) on Angular 18.
- Uses the newer `@if` / `@for` control-flow syntax and the Signal-based
  `input()` / `output()` functions rather than the `@Input()` /
  `@Output()` decorators, per the "Signals (Input & Output)" scope of
  the assessment.
- Deployment: run `ng build` and deploy the `dist/posh-angular` output
  to Netlify or Vercel; add the live link to your submission email.
