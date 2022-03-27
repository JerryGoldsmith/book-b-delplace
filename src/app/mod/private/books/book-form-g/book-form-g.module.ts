import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFormGRoutingModule } from './book-form-g-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookFormGRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BookFormGModule { }
