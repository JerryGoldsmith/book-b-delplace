import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormKRoutingModule } from './book-form-k-routing.module';

import { BookFormKComponent } from 'src/app/edition/book-form-k/book-form-k.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookFormKComponent
  ],
  imports: [
    CommonModule,
    BookFormKRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormKModule { }
