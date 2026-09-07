import { Component, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

// Custom validator: rejects values that are empty once whitespace
// is trimmed (so " " doesn't count as "filled in").
function notBlankValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value ?? '') as string;
    return value.trim().length === 0 ? { blank: true } : null;
  };
}

// Custom validator: a slightly stricter email shape check than
// Validators.email alone (requires a dot after the @ domain part).
function strictEmailValidator(): ValidatorFn {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value ?? '') as string;
    if (!value) {
      return null; // let `required` own the empty case
    }
    return pattern.test(value) ? null : { invalidEmail: true };
  };
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private readonly fb = new FormBuilder();

  readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, notBlankValidator()]],
    email: ['', [Validators.required, strictEmailValidator()]],
    message: ['', [Validators.required, notBlankValidator(), Validators.minLength(10)]],
  });

  // Interactive state: flips to true after a valid submission, driving
  // the "thanks" view with @if in the template.
  protected readonly submitted = signal(false);

  get name() {
    return this.contactForm.controls.name;
  }
  get email() {
    return this.contactForm.controls.email;
  }
  get message() {
    return this.contactForm.controls.message;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // In a real app this would call a service. For this assessment,
    // submitting a valid form is enough to prove the flow works.
    console.log('Contact form submitted:', this.contactForm.getRawValue());
    this.submitted.set(true);
    this.contactForm.reset();
  }

  sendAnother(): void {
    this.submitted.set(false);
  }
}
