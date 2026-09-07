import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeroComponent } from '../../components/hero/hero.component';
import { ShowcaseComponent } from '../../components/showcase/showcase.component';
import { ShowcaseCardComponent } from '../../components/showcase-card/showcase-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ShowcaseComponent, ShowcaseCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private readonly router: Router) {}

  onHeroCta(): void {
    this.router.navigate(['/about'], { fragment: 'contact' });
  }
}
