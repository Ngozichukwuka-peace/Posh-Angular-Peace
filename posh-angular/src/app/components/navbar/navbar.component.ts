import { Component, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavLink } from '../../models/nav-link.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // Nav links come from a plain array and are rendered with @for
  // in the template instead of being hand-written multiple times.
  protected readonly navLinks: NavLink[] = [
    { label: 'Homes', path: '/' },
    { label: 'Pages', path: '/' },
    { label: 'About', path: '/about' },
  ];

  // Interactive state for the mobile menu, held as a Signal.
  protected readonly isOpen = signal(false);

  // Bubbles the open/closed state up to the shell (AppComponent)
  // any time it changes — a real use of @Output().
  readonly menuToggled = output<boolean>();

  toggleMenu(): void {
    this.isOpen.update((open) => !open);
    this.menuToggled.emit(this.isOpen());
  }

  closeMenu(): void {
    if (this.isOpen()) {
      this.isOpen.set(false);
      this.menuToggled.emit(false);
    }
  }
}
