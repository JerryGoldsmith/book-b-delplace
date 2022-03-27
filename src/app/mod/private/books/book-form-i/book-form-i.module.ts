import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormIRoutingModule } from './book-form-i-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormIRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormIModule { }
