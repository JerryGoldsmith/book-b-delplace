import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookLComponent } from 'src/app/edition/single-book-l/single-book-l.component';

const routes: Routes = [
  { path: '', component: SingleBookLComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleLRoutingModule { }
