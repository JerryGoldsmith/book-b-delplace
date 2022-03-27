import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookCComponent } from 'src/app/edition/single-book-c/single-book-c.component';

const routes: Routes = [
  { path: '', component: SingleBookCComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleCRoutingModule { }
