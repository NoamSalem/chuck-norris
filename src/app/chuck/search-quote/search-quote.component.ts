import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote, Column, SortBy, SortOrder, ColType } from '@shared/types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-quote',
  templateUrl: './search-quote.component.html',
  styleUrls: ['./search-quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchQuoteComponent implements OnInit {
  public searchValue = '';
  public tableData$: Observable<Quote[]>;
  public columns: Column[];
  public sortBy: SortBy;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.columns = [
      { field: 'id', name: 'ID', type: ColType.text },
      { field: 'category', name: 'Category', type: ColType.text },
      { field: 'created_at', name: 'Date created', type: ColType.date, sortable: true }
    ];

    this.sortBy = {
      sortOrder: SortOrder.desc,
      field: 'created_at'
    };
  }

  public get btnDisabled(): boolean {
    return this.searchValue.length < 1;
  }

  public search(): void {
    this.tableData$ = this.dataService.search(this.searchValue);
  }

}
