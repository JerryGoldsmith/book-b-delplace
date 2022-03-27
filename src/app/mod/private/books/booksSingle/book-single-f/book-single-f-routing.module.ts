import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookFComponent } from 'src/app/edition/single-book-f/single-book-f.component';

const routes: Routes = [
  { path: '', component: SingleBookFComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleFRoutingModule { }
