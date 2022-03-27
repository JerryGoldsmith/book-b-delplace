import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormDRoutingModule } from './book-form-d-routing.module';

import { BookFormDComponent } from 'src/app/edition/book-form-d/book-form-d.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookFormDComponent
  ],
  imports: [
    CommonModule,
    BookFormDRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormDModule { }
