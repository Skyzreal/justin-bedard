import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-sell',
  imports: [RouterLink, SectionHeadingComponent],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss'
})
export class SellComponent {
  processSteps = [
    { num: '01', label: 'Consultation initiale', desc: 'Rencontre pour comprendre vos besoins et objectifs de vente.' },
    { num: '02', label: 'Analyse de marché', desc: 'Étude comparative des ventes récentes dans votre secteur.' },
    { num: '03', label: 'Stratégie de prix', desc: 'Établissement du prix optimal pour maximiser vos gains.' },
    { num: '04', label: 'Préparation du bien', desc: 'Conseils de home staging et améliorations prioritaires.' },
    { num: '05', label: 'Photos & vidéo pro', desc: 'Séance photo HDR et visite virtuelle 3D professionnelle.' },
    { num: '06', label: 'Mise en marché', desc: 'Lancement sur Centris, Realtor.ca et nos canaux exclusifs.' },
    { num: '07', label: 'Visites guidées', desc: 'Organisation et animation des visites avec acheteurs qualifiés.' },
    { num: '08', label: 'Réception des offres', desc: 'Analyse et présentation de chaque offre d\'achat reçue.' },
    { num: '09', label: 'Négociation', desc: 'Négociation en votre faveur pour les meilleures conditions.' },
    { num: '10', label: 'Clôture de vente', desc: 'Accompagnement jusqu\'à la remise des clés chez le notaire.' },
  ];

  marketingPoints = [
    'Photographie HDR professionnelle',
    'Visite virtuelle 3D Matterport',
    'Vidéo cinématique drone et intérieur',
    'Publication sur Centris & Realtor.ca',
    'Campagnes Facebook & Instagram ciblées',
    'Publicité Google & YouTube',
    'Liste d\'acheteurs qualifiés préapprouvés',
    'Marketing par courriel à 500+ clients',
  ];

  prepPoints = [
    'Consultation home staging personnalisée',
    'Liste de mise en valeur prioritaire',
    'Coordination des inspections prévente',
    'Recommandations de rénovations rentables',
    'Nettoyage et désencombrement professionnel',
    'Optimisation de l\'éclairage et de la mise en scène',
  ];

  exclusiveServices = [
    'Réseau d\'acheteurs préapprouvés actifs',
    'Accès à des vendeurs hors marché',
    'Partenaires notaires, inspecteurs & hypothèques',
    'Compte rendu hebdomadaire détaillé',
    'Disponibilité 7 jours sur 7',
    'Garantie de satisfaction client',
  ];
}
