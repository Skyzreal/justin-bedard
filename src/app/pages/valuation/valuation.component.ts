import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-valuation',
  imports: [ReactiveFormsModule],
  templateUrl: './valuation.component.html',
  styleUrl: './valuation.component.scss'
})
export class ValuationComponent {
  submitted = signal(false);

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      homePhone: [''],
      workPhone: [''],
      cellPhone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      propertyType: ['Maison'],
      bedrooms: [''],
      yearBuilt: [''],
      message: [''],
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
