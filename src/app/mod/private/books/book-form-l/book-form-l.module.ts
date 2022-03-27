import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormLRoutingModule } from './book-form-l-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormLRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormLModule { }
