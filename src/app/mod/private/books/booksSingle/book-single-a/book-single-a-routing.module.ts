import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookComponent } from 'src/app/edition/single-book/single-book.component';

const routes: Routes = [
  { path: '', component: SingleBookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleARoutingModule { }
