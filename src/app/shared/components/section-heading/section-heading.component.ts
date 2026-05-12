import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  imports: [],
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss'
})
export class SectionHeadingComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() script = '';
  @Input() subtitle = '';
  @Input() align: 'left' | 'center' = 'center';
  @Input() light = false;
}
