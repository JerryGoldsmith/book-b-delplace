import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormCComponent } from 'src/app/edition/book-form-c/book-form-c.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BookFormCComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BookFormCRoutingModule { }
