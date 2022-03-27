import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormHRoutingModule } from './book-form-h-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormHRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormHModule { }
