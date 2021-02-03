import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Quote } from '../types';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteComponent {
  @Input() quote: Quote;
}
