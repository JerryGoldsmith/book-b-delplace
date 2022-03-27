import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormJRoutingModule } from './book-form-j-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormJRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormJModule { }
