import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormGComponent } from 'src/app/edition/book-form-g/book-form-g.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BookFormGComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BookFormGRoutingModule { }
