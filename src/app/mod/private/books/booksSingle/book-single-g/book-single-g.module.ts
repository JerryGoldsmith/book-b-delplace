import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleGRoutingModule } from './book-single-g-routing.module';

import { SingleBookGComponent } from 'src/app/edition/single-book-g/single-book-g.component';


@NgModule({
  declarations: [
    SingleBookGComponent
  ],
  imports: [
    CommonModule,
    BookSingleGRoutingModule
  ]
})
export class BookSingleGModule { }
