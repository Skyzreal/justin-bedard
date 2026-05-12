import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PropertyService } from '../../shared/services/property.service';
import { PropertyCardComponent } from '../../shared/components/property-card/property-card.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { Property } from '../../shared/models/property.model';

type SortKey = 'newest' | 'price-asc' | 'price-desc';

@Component({
  selector: 'app-buy-properties',
  imports: [FormsModule, RouterLink, PropertyCardComponent, SectionHeadingComponent],
  templateUrl: './buy-properties.component.html',
  styleUrl: './buy-properties.component.scss'
})
export class BuyPropertiesComponent {
  private propertyService = inject(PropertyService);

  sortKey = signal<SortKey>('newest');
  searchQuery = signal('');
  filterOpen = signal(false);
  selectedTypes = signal<Set<Property['type']>>(new Set());
  minBedrooms = signal<number | null>(null);

  readonly propertyTypes: Property['type'][] = ['Maison', 'Condo', 'Jumelé', 'Terrain', 'Commercial'];
  readonly bedroomOptions = [1, 2, 3, 4];

  private allProperties = this.propertyService.getAll();

  activeFilterCount = computed(() => {
    let count = this.selectedTypes().size;
    if (this.minBedrooms() !== null) count++;
    return count;
  });

  activeProperties = computed(() => {
    const sort = this.sortKey();
    const query = this.searchQuery().toLowerCase();
    const types = this.selectedTypes();
    const minBeds = this.minBedrooms();

    let list = this.allProperties.filter(p => p.status === 'active');

    if (query) {
      list = list.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.address.toLowerCase().includes(query) ||
        p.city.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
      );
    }

    if (types.size > 0) {
      list = list.filter(p => types.has(p.type));
    }

    if (minBeds !== null) {
      list = list.filter(p => p.bedrooms >= minBeds);
    }

    return [...list].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return b.id - a.id;
    });
  });

  soldProperties = computed(() =>
    this.allProperties.filter(p => p.status === 'sold')
  );

  toggleFilter(): void {
    this.filterOpen.update(v => !v);
  }

  toggleType(type: Property['type']): void {
    this.selectedTypes.update(set => {
      const next = new Set(set);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  }

  setMinBedrooms(n: number): void {
    this.minBedrooms.update(current => (current === n ? null : n));
  }

  resetFilters(): void {
    this.selectedTypes.set(new Set());
    this.minBedrooms.set(null);
  }

  onSearch(value: string): void {
    this.searchQuery.set(value);
  }

  onSort(value: SortKey): void {
    this.sortKey.set(value);
  }
}
