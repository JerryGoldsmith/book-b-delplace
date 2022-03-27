import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSingleIRoutingModule } from './book-single-i-routing.module';

import { SingleBookIComponent } from 'src/app/edition/single-book-i/single-book-i.component';


@NgModule({
  declarations: [
    SingleBookIComponent
  ],
  imports: [
    CommonModule,
    BookSingleIRoutingModule
  ]
})
export class BookSingleIModule { }
