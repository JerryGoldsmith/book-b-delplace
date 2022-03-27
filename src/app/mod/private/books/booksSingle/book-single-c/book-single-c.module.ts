import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleCRoutingModule } from './book-single-c-routing.module';

import { SingleBookCComponent } from 'src/app/edition/single-book-c/single-book-c.component';


@NgModule({
  declarations: [
    SingleBookCComponent
  ],
  imports: [
    CommonModule,
    BookSingleCRoutingModule
  ]
})
export class BookSingleCModule { }
