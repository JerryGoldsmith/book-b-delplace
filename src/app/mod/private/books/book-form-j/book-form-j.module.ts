import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormJRoutingModule } from './book-form-j-routing.module';

import { BookFormJComponent } from 'src/app/edition/book-form-j/book-form-j.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookFormJComponent
  ],
  imports: [
    CommonModule,
    BookFormJRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormJModule { }
