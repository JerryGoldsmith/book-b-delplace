import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleAllRoutingModule } from './book-single-all-routing.module';

import { SingleBookAllComponent } from 'src/app/edition/single-book-all/single-book-all.component';


@NgModule({
  declarations: [
    SingleBookAllComponent
  ],
  imports: [
    CommonModule,
    BookSingleAllRoutingModule
  ]
})
export class BookSingleAllModule { }
