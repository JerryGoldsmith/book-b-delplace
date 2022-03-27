import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormKComponent } from 'src/app/edition/book-form-k/book-form-k.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BookFormKComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BookFormKRoutingModule { }
