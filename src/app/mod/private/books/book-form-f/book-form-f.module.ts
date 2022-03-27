import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormFRoutingModule } from './book-form-f-routing.module';

import { BookFormFComponent } from 'src/app/edition/book-form-f/book-form-f.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookFormFComponent
  ],
  imports: [
    CommonModule,
    BookFormFRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormFModule { }
