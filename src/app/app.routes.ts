import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Justin Bédard — Courtier Immobilier'
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'À propos — Justin Bédard'
  },
  {
    path: 'vendre',
    loadComponent: () => import('./pages/sell/sell.component').then(m => m.SellComponent),
    title: 'Vendre — Justin Bédard'
  },
  {
    path: 'evaluation',
    loadComponent: () => import('./pages/valuation/valuation.component').then(m => m.ValuationComponent),
    title: 'Évaluation gratuite — Justin Bédard'
  },
  {
    path: 'proprietes',
    loadComponent: () => import('./pages/buy-properties/buy-properties.component').then(m => m.BuyPropertiesComponent),
    title: 'Propriétés — Justin Bédard'
  },
  {
    path: 'proprietes/:slug',
    loadComponent: () => import('./pages/property-detail/property-detail.component').then(m => m.PropertyDetailComponent),
    title: 'Propriété — Justin Bédard'
  },
  {
    path: 'acheter',
    redirectTo: 'proprietes',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact — Justin Bédard'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
