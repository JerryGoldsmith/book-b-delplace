import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookBComponent } from 'src/app/edition/single-book-b/single-book-b.component';

const routes: Routes = [
  { path: '', component: SingleBookBComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleBRoutingModule { }
