import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormCRoutingModule } from './book-form-c-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormCRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormCModule { }
