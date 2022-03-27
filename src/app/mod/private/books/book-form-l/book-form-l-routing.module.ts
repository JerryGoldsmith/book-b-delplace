import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormLComponent } from 'src/app/edition/book-form-l/book-form-l.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BookFormLComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BookFormLRoutingModule { }
