import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormFComponent } from 'src/app/edition/book-form-f/book-form-f.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BookFormFComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BookFormFRoutingModule { }
