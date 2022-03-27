import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleAllSixRoutingModule } from './book-single-all-six-routing.module';

import { SingleBookAllSixComponent } from 'src/app/edition/single-book-all-six/single-book-all-six.component';


@NgModule({
  declarations: [
    SingleBookAllSixComponent
  ],
  imports: [
    CommonModule,
    BookSingleAllSixRoutingModule
  ]
})
export class BookSingleAllSixModule { }
