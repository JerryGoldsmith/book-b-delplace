import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormBRoutingModule } from './book-form-b-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormBRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormBModule { }
