import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormGRoutingModule } from './book-form-g-routing.module';

import { BookFormGComponent } from 'src/app/edition/book-form-g/book-form-g.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookFormGComponent
  ],
  imports: [
    CommonModule,
    BookFormGRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormGModule { }
