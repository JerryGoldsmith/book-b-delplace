import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormDComponent } from 'src/app/edition/book-form-d/book-form-d.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BookFormDComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BookFormDRoutingModule { }
