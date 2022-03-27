import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormEComponent } from 'src/app/edition/book-form-e/book-form-e.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BookFormEComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BookFormERoutingModule { }
