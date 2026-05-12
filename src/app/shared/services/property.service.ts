import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      slug: 'maison-aylmer-gatineau',
      title: 'Maison familiale à Aylmer',
      address: '142 Rue des Érables, Aylmer',
      city: 'Gatineau',
      type: 'Maison',
      status: 'active',
      featured: true,
      isNew: true,
      price: 749000,
      bedrooms: 4,
      bathrooms: 3,
      area: 2400,
      lotSize: 8200,
      yearBuilt: 2018,
      municipalEvaluation: 685000,
      municipalTax: 6120,
      schoolTax: 820,
      description: 'Magnifique maison contemporaine offrant des espaces de vie lumineux et une cuisine haut de gamme avec îlot central. Grandes fenêtres, planchers de bois franc et finitions de qualité supérieure. Cour privée aménagée avec terrasse, idéale pour recevoir.',
      features: ['Planchers de bois franc', 'Cuisine avec îlot', 'Garage double', 'Terrasse privée', 'Sous-sol aménagé', 'Système de climatisation central'],
      photos: [
        { url: '', alt: 'Cuisine moderne avec îlot central', description: 'Bright cream kitchen with large island, pale cabinetry, pendant lights' },
        { url: '', alt: 'Salon lumineux', description: 'Soft beige living room, neutral sofa, natural daylight' },
        { url: '', alt: 'Chambre principale', description: 'Minimal cream bedroom, layered beige bedding, tall window' },
        { url: '', alt: 'Extérieur de la maison', description: 'Upscale cream/white modern home exterior with black window trim' },
        { url: '', alt: 'Salle à manger', description: 'Elegant staged dining room, large table, chandelier, neutral palette' },
        { url: '', alt: 'Salle de bain', description: 'Bright spa-like bathroom, stone surfaces, large windows' },
      ]
    },
    {
      id: 2,
      slug: 'condo-gatineau-centre',
      title: 'Condo moderne au centre-ville',
      address: '580 Boul. Gréber, Apt 12',
      city: 'Gatineau',
      type: 'Condo',
      status: 'active',
      featured: true,
      isNew: false,
      price: 398000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1100,
      yearBuilt: 2020,
      municipalEvaluation: 365000,
      municipalTax: 3250,
      schoolTax: 440,
      description: 'Condo haut de gamme avec vue panoramique, finitions premium et terrasse privée. Stationnement intérieur inclus. Accès direct au corridor de transport actif.',
      features: ['Vue panoramique', 'Terrasse privée', 'Stationnement intérieur', 'Concierge', 'Gym sur place', 'Quartz et acier inoxydable'],
      photos: [
        { url: '', alt: 'Salon avec vue panoramique', description: 'Modern condo living room with floor-to-ceiling windows, city view' },
        { url: '', alt: 'Cuisine contemporaine', description: 'Sleek kitchen with quartz countertops and stainless appliances' },
        { url: '', alt: 'Chambre principale', description: 'Elegant bedroom with neutral tones and city view' },
        { url: '', alt: 'Terrasse', description: 'Private terrace with outdoor furniture and panoramic view' },
      ]
    },
    {
      id: 3,
      slug: 'maison-hull-gatineau',
      title: 'Cottage rénové à Hull',
      address: '38 Rue Taché, Hull',
      city: 'Gatineau',
      type: 'Maison',
      status: 'active',
      featured: false,
      isNew: false,
      price: 529000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1850,
      lotSize: 5400,
      yearBuilt: 1995,
      municipalEvaluation: 495000,
      municipalTax: 4420,
      schoolTax: 595,
      description: 'Charmant cottage entièrement rénové à deux pas du parc Brébeuf. Rénovations complètes en 2022 incluant cuisine, salles de bain et toiture. Cour intime avec pergola.',
      features: ['Rénové en 2022', 'Cuisine rénovée', 'Pergola', 'À deux pas du parc', 'Fenêtres PVC', 'Rangement abondant'],
      photos: [
        { url: '', alt: 'Façade du cottage', description: 'Charming renovated cottage with warm curb appeal, garden' },
        { url: '', alt: 'Cuisine rénovée', description: 'Newly renovated kitchen with white cabinets and warm accents' },
        { url: '', alt: 'Salon cosy', description: 'Cozy living room with fireplace and warm wood tones' },
      ]
    },
    {
      id: 4,
      slug: 'jumele-gatineau-ouest',
      title: 'Jumelé spacieux à Gatineau-Ouest',
      address: '910 Rue Maloney Est',
      city: 'Gatineau',
      type: 'Jumelé',
      status: 'active',
      featured: false,
      isNew: true,
      price: 449000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1680,
      lotSize: 4200,
      yearBuilt: 2015,
      municipalEvaluation: 415000,
      municipalTax: 3710,
      schoolTax: 500,
      description: 'Semi-détaché bien entretenu dans un quartier familial tranquille. Double garage, sous-sol partiellement aménagé et cour clôturée. Proche des écoles et des transports.',
      features: ['Garage double', 'Sous-sol aménagé', 'Cour clôturée', 'Proche des écoles', 'Thermopompe', 'Entrée en béton'],
      photos: [
        { url: '', alt: 'Façade jumelé', description: 'Modern semi-detached home with double garage and landscaped front' },
        { url: '', alt: 'Salon', description: 'Bright open-concept living room with neutral palette' },
        { url: '', alt: 'Cuisine', description: 'Contemporary kitchen with breakfast bar' },
      ]
    },
    {
      id: 5,
      slug: 'maison-de-luxe-chelsea',
      title: 'Propriété de luxe à Chelsea',
      address: '21 Ch. du Lac Meech',
      city: 'Chelsea',
      type: 'Maison',
      status: 'active',
      featured: true,
      isNew: false,
      price: 1395000,
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
      lotSize: 24000,
      yearBuilt: 2016,
      municipalEvaluation: 1250000,
      municipalTax: 11200,
      schoolTax: 1500,
      description: 'Résidence d\'exception au cœur du parc de la Gatineau, à quelques pas du lac Meech. Architecture contemporaine, matériaux nobles et vues sur la forêt. Piscine intérieure et spa privé.',
      features: ['Vue sur forêt', 'Piscine intérieure', 'Spa privé', 'Cave à vin', 'Domotique', 'Garage triple'],
      photos: [
        { url: '', alt: 'Façade luxueuse', description: 'Stunning luxury home exterior with stone, black trim, forest backdrop' },
        { url: '', alt: 'Grande salle ouverte', description: 'Grand open living space with cathedral ceiling and floor-to-ceiling windows' },
        { url: '', alt: 'Cuisine de chef', description: 'Chef kitchen with premium appliances, large island, marble countertops' },
        { url: '', alt: 'Piscine intérieure', description: 'Indoor pool area with natural light and stone finishes' },
        { url: '', alt: 'Chambre suite', description: 'Master suite with walk-in closet and ensuite spa bathroom' },
        { url: '', alt: 'Terrasse forêt', description: 'Wraparound terrace overlooking mature trees and garden' },
      ]
    },
    {
      id: 6,
      slug: 'condo-ottawa-gatineau',
      title: 'Condo neuf près d\'Ottawa',
      address: '1200 Boul. Alexandre-Taché, Apt 8',
      city: 'Gatineau',
      type: 'Condo',
      status: 'active',
      featured: false,
      isNew: true,
      price: 319000,
      bedrooms: 1,
      bathrooms: 1,
      area: 750,
      yearBuilt: 2023,
      municipalEvaluation: 295000,
      municipalTax: 2640,
      schoolTax: 355,
      description: 'Condo neuf livraison immédiate. Finitions modernes, balcon est et vue dégagée. À moins de 5 minutes du pont Alexandra. Stationnement intérieur chauffé inclus.',
      features: ['Neuf 2023', 'Balcon est', 'Stationnement chauffé', 'Proche pont Alexandra', 'Thermopompe', 'Câble internet inclus'],
      photos: [
        { url: '', alt: 'Salon neuf', description: 'Bright new condo living room with balcony and east-facing view' },
        { url: '', alt: 'Cuisine', description: 'Modern open kitchen with quartz and contemporary fixtures' },
      ]
    },
  ];

  getAll(): Property[] {
    return this.properties;
  }

  getActive(): Property[] {
    return this.properties.filter(p => p.status === 'active');
  }

  getFeatured(): Property[] {
    return this.properties.filter(p => p.featured && p.status === 'active');
  }

  getBySlug(slug: string): Property | undefined {
    return this.properties.find(p => p.slug === slug);
  }
}
