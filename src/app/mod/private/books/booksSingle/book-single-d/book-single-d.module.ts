import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleDRoutingModule } from './book-single-d-routing.module';

import { SingleBookDComponent } from 'src/app/edition/single-book-d/single-book-d.component';


@NgModule({
  declarations: [
    SingleBookDComponent
  ],
  imports: [
    CommonModule,
    BookSingleDRoutingModule
  ]
})
export class BookSingleDModule { }
