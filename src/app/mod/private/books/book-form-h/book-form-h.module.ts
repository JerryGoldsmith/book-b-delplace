import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormHRoutingModule } from './book-form-h-routing.module';

import { BookFormHComponent } from 'src/app/edition/book-form-h/book-form-h.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookFormHComponent
  ],
  imports: [
    CommonModule,
    BookFormHRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormHModule { }
