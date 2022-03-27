import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormARoutingModule } from './book-form-a-routing.module';

import { BookFormComponent } from 'src/app/edition/book-form/book-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookFormComponent
  ],
  imports: [
    CommonModule,
    BookFormARoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormAModule { }
