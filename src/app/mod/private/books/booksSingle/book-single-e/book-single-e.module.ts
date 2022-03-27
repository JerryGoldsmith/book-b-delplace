import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleERoutingModule } from './book-single-e-routing.module';

import { SingleBookEComponent } from 'src/app/edition/single-book-e/single-book-e.component';


@NgModule({
  declarations: [
    SingleBookEComponent
  ],
  imports: [
    CommonModule,
    BookSingleERoutingModule
  ]
})
export class BookSingleEModule { }
