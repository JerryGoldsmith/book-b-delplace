import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormDRoutingModule } from './book-form-d-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormDRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormDModule { }
