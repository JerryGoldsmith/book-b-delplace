import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormFRoutingModule } from './book-form-f-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormFRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormFModule { }
