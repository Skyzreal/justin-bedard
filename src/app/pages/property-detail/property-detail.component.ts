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
  shareOpen = signal(false);
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
    if (navigator.share) {
      navigator.share({ title: this.property?.title, url: window.location.href }).catch(() => {});
    } else {
      this.shareOpen.update(v => !v);
    }
  }

  closeShare(): void {
    this.shareOpen.set(false);
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href).then(() => {
      this.shareCopied.set(true);
      this.shareOpen.set(false);
      setTimeout(() => this.shareCopied.set(false), 2000);
    });
  }

  shareVia(platform: 'facebook' | 'whatsapp' | 'email' | 'x'): void {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(this.property?.title ?? '');
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      whatsapp: `https://wa.me/?text=${title}%20${url}`,
      email: `mailto:?subject=${title}&body=${url}`,
      x: `https://x.com/intent/tweet?url=${url}&text=${title}`,
    };
    window.open(urls[platform], '_blank', 'noopener,noreferrer');
    this.shareOpen.set(false);
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
