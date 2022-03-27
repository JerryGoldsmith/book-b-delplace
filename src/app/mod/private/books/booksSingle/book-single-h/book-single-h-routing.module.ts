import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookHComponent } from 'src/app/edition/single-book-h/single-book-h.component';

const routes: Routes = [
  { path: '', component: SingleBookHComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleHRoutingModule { }
