import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PropertyService } from '../../shared/services/property.service';
import { PhotoGridComponent } from '../../shared/components/photo-grid/photo-grid.component';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { Property } from '../../shared/models/property.model';

@Component({
  selector: 'app-property-detail',
  imports: [RouterLink, CurrencyPipe, DecimalPipe, ReactiveFormsModule, PhotoGridComponent, ContactFormComponent],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.scss'
})
export class PropertyDetailComponent {
  private route = inject(ActivatedRoute);
  private propertyService = inject(PropertyService);
  private fb = inject(FormBuilder);

  property: Property | undefined;
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);
  shareCopied = signal(false);

  mortgageForm: FormGroup;
  monthlyPayment = signal<number | null>(null);

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.property = this.propertyService.getBySlug(slug);

    const price = this.property?.price ?? 500000;
    this.mortgageForm = this.fb.group({
      price: [price],
      downPayment: [Math.round(price * 0.20)],
      rate: [5.25],
      amortization: [25],
    });
  }

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  prevPhoto(): void {
    const total = this.property?.photos.length ?? 0;
    this.lightboxIndex.update(i => (i - 1 + total) % total);
  }

  nextPhoto(): void {
    const total = this.property?.photos.length ?? 0;
    this.lightboxIndex.update(i => (i + 1) % total);
  }

  share(): void {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: this.property?.title, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => {
        this.shareCopied.set(true);
        setTimeout(() => this.shareCopied.set(false), 2000);
      });
    }
  }

  calculateMortgage(): void {
    const v = this.mortgageForm.value;
    const principal = v.price - v.downPayment;
    const monthlyRate = v.rate / 100 / 12;
    const n = v.amortization * 12;
    if (monthlyRate === 0) {
      this.monthlyPayment.set(principal / n);
    } else {
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
      this.monthlyPayment.set(Math.round(payment));
    }
  }
}
