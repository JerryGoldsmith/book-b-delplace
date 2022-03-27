import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormJComponent } from 'src/app/edition/book-form-j/book-form-j.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BookFormJComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BookFormJRoutingModule { }
