import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { TableComponent } from './table/table.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [MultiSelectComponent, TableComponent, QuoteComponent],
  exports: [MultiSelectComponent, TableComponent, QuoteComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
