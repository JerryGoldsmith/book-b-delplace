import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormBComponent } from 'src/app/edition/book-form-b/book-form-b.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BookFormBComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BookFormBRoutingModule { }
