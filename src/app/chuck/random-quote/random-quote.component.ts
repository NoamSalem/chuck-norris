import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Quote } from '@shared/types';


@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomQuoteComponent implements OnInit {
  public categories$: Observable<string[]>;
  public randomQuote$: Observable<Quote>;
  public name = '';
  public selectedCategories = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.categories$ = this.dataService.getCategories();
  }

  public get btnDisabled(): boolean {
    return this.name.length < 1 || this.selectedCategories.length < 1;
  }

  public getRandomQuote(): void {
    this.randomQuote$ = this.dataService.getRandomQuote(this.name, this.selectedCategories);
  }

  public setSelectedCategories(selectedCategories: string[]): void {
    this.selectedCategories = selectedCategories.join(',');
  }
}
