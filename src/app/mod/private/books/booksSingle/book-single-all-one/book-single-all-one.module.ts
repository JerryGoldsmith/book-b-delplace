import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleAllOneRoutingModule } from './book-single-all-one-routing.module';

import { SingleBookAllOneComponent } from 'src/app/edition/single-book-all-one/single-book-all-one.component';


@NgModule({
  declarations: [
    SingleBookAllOneComponent
  ],
  imports: [
    CommonModule,
    BookSingleAllOneRoutingModule
  ]
})
export class BookSingleAllOneModule { }
