import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ChuckComponent } from './chuck.component';
import { HeaderComponent } from './header/header.component';
import { SearchQuoteComponent } from './search-quote/search-quote.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ChuckComponent
  }
];

@NgModule({
  declarations: [
    ChuckComponent,
    HeaderComponent,
    SearchQuoteComponent,
    RandomQuoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChuckModule { }
