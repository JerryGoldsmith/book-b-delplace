import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleJRoutingModule } from './book-single-j-routing.module';

import { SingleBookJComponent } from 'src/app/edition/single-book-j/single-book-j.component';


@NgModule({
  declarations: [
    SingleBookJComponent
  ],
  imports: [
    CommonModule,
    BookSingleJRoutingModule
  ]
})
export class BookSingleJModule { }
