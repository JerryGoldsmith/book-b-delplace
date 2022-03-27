import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormKRoutingModule } from './book-form-k-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormKRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormKModule { }
