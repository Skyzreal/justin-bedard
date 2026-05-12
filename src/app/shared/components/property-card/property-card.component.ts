import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-property-card',
  imports: [RouterLink, CurrencyPipe, DecimalPipe],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent {
  @Input({ required: true }) property!: Property;
}
