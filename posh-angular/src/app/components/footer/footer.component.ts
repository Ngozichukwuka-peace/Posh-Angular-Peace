import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  // Pulled from a live Date rather than a hardcoded number, so the
  // footer never goes stale.
  protected readonly currentYear = new Date().getFullYear();
}
