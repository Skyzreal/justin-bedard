import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  imports: [RouterLink, SectionHeadingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    { icon: '⚖', label: 'Intégrité', desc: 'Une relation de confiance bâtie sur la transparence et l\'honnêteté.' },
    { icon: '💪', label: 'Dévouement', desc: 'Un engagement total à chaque étape de votre projet immobilier.' },
    { icon: '🏆', label: 'Expertise', desc: 'Plus de 20 ans d\'expérience sur le marché de Gatineau-Ottawa.' },
    { icon: '📈', label: 'Résultats', desc: '500+ propriétés vendues. Des transactions qui dépassent vos attentes.' },
  ];
}
