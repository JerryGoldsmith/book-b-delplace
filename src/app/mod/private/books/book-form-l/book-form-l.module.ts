import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormLRoutingModule } from './book-form-l-routing.module';

import { BookFormLComponent } from 'src/app/edition/book-form-l/book-form-l.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookFormLComponent
  ],
  imports: [
    CommonModule,
    BookFormLRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormLModule { }
