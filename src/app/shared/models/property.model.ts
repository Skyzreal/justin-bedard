export interface Property {
  id: number;
  slug: string;
  title: string;
  address: string;
  city: string;
  type: 'Maison' | 'Condo' | 'Jumelé' | 'Terrain' | 'Commercial';
  status: 'active' | 'sold';
  featured: boolean;
  isNew: boolean;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  lotSize?: number;
  yearBuilt?: number;
  municipalEvaluation?: number;
  municipalTax?: number;
  schoolTax?: number;
  description: string;
  features: string[];
  photos: PropertyPhoto[];
}

export interface PropertyPhoto {
  url: string;
  alt: string;
  description: string;
}
