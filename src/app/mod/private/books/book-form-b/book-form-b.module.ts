import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormBRoutingModule } from './book-form-b-routing.module';

import { BookFormBComponent } from 'src/app/edition/book-form-b/book-form-b.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookFormBComponent
  ],
  imports: [
    CommonModule,
    BookFormBRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormBModule { }
