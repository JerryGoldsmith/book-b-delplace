import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleLRoutingModule } from './book-single-l-routing.module';

import { SingleBookLComponent } from 'src/app/edition/single-book-l/single-book-l.component';


@NgModule({
  declarations: [
    SingleBookLComponent
  ],
  imports: [
    CommonModule,
    BookSingleLRoutingModule
  ]
})
export class BookSingleLModule { }
