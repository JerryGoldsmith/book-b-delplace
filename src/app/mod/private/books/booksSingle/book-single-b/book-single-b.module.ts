import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleBRoutingModule } from './book-single-b-routing.module';

import { SingleBookBComponent } from 'src/app/edition/single-book-b/single-book-b.component';


@NgModule({
  declarations: [
    SingleBookBComponent
  ],
  imports: [
    CommonModule,
    BookSingleBRoutingModule
  ]
})
export class BookSingleBModule { }
