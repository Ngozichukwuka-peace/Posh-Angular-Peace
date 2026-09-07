import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  // Signal-based @Input()s - headline/subtext are no longer hardcoded
  // inside this component, they're passed down by the parent page.
  readonly headline = input.required<string>();
  readonly subtext = input.required<string>();
  readonly midtext = input.required<string>();
  readonly purchasetext = input.required<string>();
  readonly ctaLabel = input('Get Started');
  readonly highlight = input<string | null>(null);

  // Splits the headline into segments so the highlighted word can be
  // rendered in a styled <span> instead of plain text.
  protected readonly headlineSegments = computed(() => {
    const text = this.headline();
    const word = this.highlight();
    if (!word) {
      return [{ text, highlight: false }];
    }
    const parts = text.split(word);
    const segments = parts.flatMap((part, index) => {
      const result = [];
      if (index > 0) {
        result.push({ text: word, highlight: true });
      }
      if (part) {
        result.push({ text: part, highlight: false });
      }
      return result;
    });
    if (text.endsWith(word)) {
      segments.push({ text: word, highlight: true });
    }
    return segments;
  });

  // The primary CTA emits an event instead of using an inline onclick.
  readonly ctaClicked = output<void>();

  onCtaClick(): void {
    this.ctaClicked.emit();
  }
}
