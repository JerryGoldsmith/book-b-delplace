import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookDComponent } from 'src/app/edition/single-book-d/single-book-d.component';

const routes: Routes = [
  { path: '', component: SingleBookDComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleDRoutingModule { }
