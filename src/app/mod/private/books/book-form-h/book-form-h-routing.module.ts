import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormHComponent } from 'src/app/edition/book-form-h/book-form-h.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BookFormHComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BookFormHRoutingModule { }
