import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormIRoutingModule } from './book-form-i-routing.module';

import { BookFormIComponent } from 'src/app/edition/book-form-i/book-form-i.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookFormIComponent
  ],
  imports: [
    CommonModule,
    BookFormIRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormIModule { }
