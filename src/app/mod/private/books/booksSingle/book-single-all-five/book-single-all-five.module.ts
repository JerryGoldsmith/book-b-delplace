import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleAllFiveRoutingModule } from './book-single-all-five-routing.module';

import { SingleBookAllFiveComponent } from 'src/app/edition/single-book-all-five/single-book-all-five.component';


@NgModule({
  declarations: [
    SingleBookAllFiveComponent
  ],
  imports: [
    CommonModule,
    BookSingleAllFiveRoutingModule
  ]
})
export class BookSingleAllFiveModule { }
