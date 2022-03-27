import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleKRoutingModule } from './book-single-k-routing.module';

import { SingleBookKComponent } from 'src/app/edition/single-book-k/single-book-k.component';


@NgModule({
  declarations: [
    SingleBookKComponent
  ],
  imports: [
    CommonModule,
    BookSingleKRoutingModule
  ]
})
export class BookSingleKModule { }
