import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormERoutingModule } from './book-form-e-routing.module';

import { BookFormEComponent } from 'src/app/edition/book-form-e/book-form-e.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookFormEComponent
  ],
  imports: [
    CommonModule,
    BookFormERoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormEModule { }
