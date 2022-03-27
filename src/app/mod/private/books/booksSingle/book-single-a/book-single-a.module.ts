import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleARoutingModule } from './book-single-a-routing.module';

import { SingleBookComponent } from 'src/app/edition/single-book/single-book.component';


@NgModule({
  declarations: [
    SingleBookComponent
  ],
  imports: [
    CommonModule,
    BookSingleARoutingModule
  ]
})
export class BookSingleAModule { }
