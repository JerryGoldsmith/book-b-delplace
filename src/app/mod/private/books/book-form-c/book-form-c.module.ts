import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormCRoutingModule } from './book-form-c-routing.module';

import { BookFormCComponent } from 'src/app/edition/book-form-c/book-form-c.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookFormCComponent
  ],
  imports: [
    CommonModule,
    BookFormCRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormCModule { }
