import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormARoutingModule } from './book-form-a-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormARoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormAModule { }
