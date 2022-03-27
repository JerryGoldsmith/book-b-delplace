import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleAllThreeRoutingModule } from './book-single-all-three-routing.module';

import { SingleBookAllThreeComponent } from 'src/app/edition/single-book-all-three/single-book-all-three.component';


@NgModule({
  declarations: [
    SingleBookAllThreeComponent
  ],
  imports: [
    CommonModule,
    BookSingleAllThreeRoutingModule
  ]
})
export class BookSingleAllThreeModule { }
