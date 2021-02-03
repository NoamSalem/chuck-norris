import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Column, SortBy, ColType, SortOrder } from '../types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() set columns(columns: Column[]) {
    this._columns = columns;
    this.cellWidth = `${100 / columns.length}%`;
  }
  @Input() set dataSource(dataSource: any[]) {
    this._dataSource = dataSource;
    if (this._dataSource) {
      this.sortData();
    }
  }
  @Input() sortBy: SortBy;
  public _columns: Column[];
  public sortedData: any[];
  public cellWidth: string;
  public expandedRow: string;
  public readonly colType = ColType;
  public readonly sortOrder = SortOrder;
  private _dataSource: any[];

  public expandRow(rowId: string): void {
    this.expandedRow = this.expandedRow !== rowId ? rowId : undefined;
  }

  public toggleSorting(field: string): void {
    if (this.sortBy.field === field) {
      this.sortBy.sortOrder = this.sortBy.sortOrder === SortOrder.asc ? SortOrder.desc : SortOrder.asc;
    } else {
      this.sortBy.field = field;
      this.sortBy.sortOrder = SortOrder.desc;
    }
    this.sortData();
  }

  private sortData(): void {
    this.sortedData = this._dataSource.sort((a: any, b: any) => a[this.sortBy.field] - b[this.sortBy.field]);
    this.sortedData = this.sortBy.sortOrder === SortOrder.asc ? this.sortedData : this.sortedData.reverse();
  }
}
