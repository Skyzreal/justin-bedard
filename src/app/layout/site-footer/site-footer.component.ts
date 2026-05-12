import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, ContactFormComponent],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss'
})
export class SiteFooterComponent {
  currentYear = new Date().getFullYear();
}
