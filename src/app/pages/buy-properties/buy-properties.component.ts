import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PropertyService } from '../../shared/services/property.service';
import { PropertyCardComponent } from '../../shared/components/property-card/property-card.component';
import { Property } from '../../shared/models/property.model';

type Tab = 'active' | 'featured' | 'sold';
type SortKey = 'newest' | 'price-asc' | 'price-desc';

@Component({
  selector: 'app-buy-properties',
  imports: [FormsModule, RouterLink, PropertyCardComponent],
  templateUrl: './buy-properties.component.html',
  styleUrl: './buy-properties.component.scss'
})
export class BuyPropertiesComponent {
  private propertyService = inject(PropertyService);

  activeTab = signal<Tab>('active');
  sortKey = signal<SortKey>('newest');
  searchQuery = signal('');

  allProperties = this.propertyService.getAll();

  filteredProperties = computed(() => {
    const tab = this.activeTab();
    const sort = this.sortKey();
    const query = this.searchQuery().toLowerCase();

    let list: Property[];

    if (tab === 'featured') {
      list = this.allProperties.filter(p => p.featured && p.status === 'active');
    } else if (tab === 'sold') {
      list = this.allProperties.filter(p => p.status === 'sold');
    } else {
      list = this.allProperties.filter(p => p.status === 'active');
    }

    if (query) {
      list = list.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.address.toLowerCase().includes(query) ||
        p.city.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
      );
    }

    return [...list].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return b.id - a.id;
    });
  });

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }

  onSearch(value: string): void {
    this.searchQuery.set(value);
  }

  onSort(value: SortKey): void {
    this.sortKey.set(value);
  }
}
