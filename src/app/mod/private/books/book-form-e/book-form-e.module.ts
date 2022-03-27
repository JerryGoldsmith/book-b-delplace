import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormERoutingModule } from './book-form-e-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormERoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormEModule { }
