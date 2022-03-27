import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleFRoutingModule } from './book-single-f-routing.module';

import { SingleBookFComponent } from 'src/app/edition/single-book-f/single-book-f.component';


@NgModule({
  declarations: [
    SingleBookFComponent
  ],
  imports: [
    CommonModule,
    BookSingleFRoutingModule
  ]
})
export class BookSingleFModule { }
