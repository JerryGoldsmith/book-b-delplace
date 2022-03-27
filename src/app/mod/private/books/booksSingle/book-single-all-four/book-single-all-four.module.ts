import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleAllFourRoutingModule } from './book-single-all-four-routing.module';

import { SingleBookAllFourComponent } from 'src/app/edition/single-book-all-four/single-book-all-four.component';


@NgModule({
  declarations: [
    SingleBookAllFourComponent
  ],
  imports: [
    CommonModule,
    BookSingleAllFourRoutingModule
  ]
})
export class BookSingleAllFourModule { }
