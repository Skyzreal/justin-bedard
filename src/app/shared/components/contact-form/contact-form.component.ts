import { Component, Input, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() context: 'general' | 'property' = 'general';

  submitted = signal(false);

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      service: ['Je cherche une propriété'],
      message: ['']
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
