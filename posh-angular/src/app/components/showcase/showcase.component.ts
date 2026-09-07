import { Component, signal } from '@angular/core';

import { ShowcaseCardComponent } from '../showcase-card/showcase-card.component';
import { ShowcaseItem } from '../../models/showcase-item.model';
import { FeatureHighlight } from '../../models/feature-highlight.model';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [ShowcaseCardComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css',
})
export class ShowcaseComponent {
  // Defined once as data, rendered with @for over ShowcaseCardComponent —
  // not four hand-copied HTML blocks.
  protected readonly showcaseItems: ShowcaseItem[] = [
    {
      id: 1,
      icon: '🎨',
      title: 'Modern Design',
      description: 'Clean, on-trend layouts built around your brand.',
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Fast Performance',
      description: 'Optimised builds that load quickly on any device.',
    },
    {
      id: 3,
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Looks great from a phone screen to a wide monitor.',
    },
    {
      id: 4,
      icon: '🔧',
      title: 'Easy to Customise',
      description: 'Componentised sections you can rearrange freely.',
    },
  ];

  // Short one-line callouts as a small array rendered with @for.
  protected readonly featureHighlights: FeatureHighlight[] = [
    { icon: '✅', text: 'No design experience needed' },
    { icon: '✅', text: 'Free lifetime updates' },
    { icon: '✅', text: '24/7 support' },
    { icon: '✅', text: 'Money-back guarantee' },
  ];

  // Interactive state driven by an @Output() coming from a card.
  protected readonly selectedItem = signal<ShowcaseItem | null>(null);

  onCardSelected(item: ShowcaseItem): void {
    this.selectedItem.set(item);
  }
}
