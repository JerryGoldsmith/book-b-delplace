import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleHRoutingModule } from './book-single-h-routing.module';

import { SingleBookHComponent } from 'src/app/edition/single-book-h/single-book-h.component';


@NgModule({
  declarations: [SingleBookHComponent],
  imports: [
    CommonModule,
    BookSingleHRoutingModule
  ]
})
export class BookSingleHModule { }
