import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertyPhoto } from '../../models/property.model';

@Component({
  selector: 'app-photo-grid',
  imports: [],
  templateUrl: './photo-grid.component.html',
  styleUrl: './photo-grid.component.scss'
})
export class PhotoGridComponent {
  @Input({ required: true }) photos: PropertyPhoto[] = [];
  @Output() openLightbox = new EventEmitter<number>();

  open(index: number): void {
    this.openLightbox.emit(index);
  }
}
