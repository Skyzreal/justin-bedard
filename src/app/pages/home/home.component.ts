import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SectionHeadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  processSteps = [
    { num: '01', label: 'Consultation initiale' },
    { num: '02', label: 'Évaluation du marché' },
    { num: '03', label: 'Stratégie de prix' },
    { num: '04', label: 'Préparation du bien' },
    { num: '05', label: 'Photos & vidéo pro' },
    { num: '06', label: 'Mise en marché' },
    { num: '07', label: 'Visites guidées' },
    { num: '08', label: 'Négociation' },
    { num: '09', label: 'Inspection & légal' },
    { num: '10', label: 'Clôture de vente' },
  ];

  testimonials = [
    {
      text: 'Justin a vendu notre maison en 9 jours au prix demandé. Son professionnalisme et sa disponibilité ont rendu le processus vraiment agréable. Je le recommande sans hésitation.',
      name: 'Marie-Ève Tremblay',
      location: 'Aylmer, Gatineau'
    },
    {
      text: 'Nous cherchions depuis 6 mois sans succès. En moins de 3 semaines avec Justin, nous avons trouvé la maison parfaite pour notre famille. Un vrai partenaire de confiance.',
      name: 'François Côté',
      location: 'Hull, Gatineau'
    },
    {
      text: 'Service exceptionnel du début à la fin. Justin connaît le marché de Gatineau mieux que quiconque. Notre transaction s\'est déroulée sans la moindre surprise.',
      name: 'Sophie & Marc Lavallée',
      location: 'Gatineau-Ouest'
    }
  ];
}
