import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleAllTwoRoutingModule } from './book-single-all-two-routing.module';

import { SingleBookAllTwoComponent } from 'src/app/edition/single-book-all-two/single-book-all-two.component';


@NgModule({
  declarations: [
    SingleBookAllTwoComponent
  ],
  imports: [
    CommonModule,
    BookSingleAllTwoRoutingModule
  ]
})
export class BookSingleAllTwoModule { }
