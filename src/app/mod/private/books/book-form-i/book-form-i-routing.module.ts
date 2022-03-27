import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormIComponent } from 'src/app/edition/book-form-i/book-form-i.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BookFormIComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BookFormIRoutingModule { }
