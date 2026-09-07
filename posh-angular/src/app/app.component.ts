import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowcaseCardComponent } from "./components/showcase-card/showcase-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ShowcaseCardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Demonstrates a Signal owned by the shell and updated via an
  // @Output() event bubbled up from the NavbarComponent.
  protected readonly mobileMenuOpen = signal(false);

  onMobileMenuToggled(isOpen: boolean): void {
    this.mobileMenuOpen.set(isOpen);
  }
}
