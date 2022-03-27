import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookAllOneComponent } from 'src/app/edition/single-book-all-one/single-book-all-one.component';

const routes: Routes = [
  { path: '', component: SingleBookAllOneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleAllOneRoutingModule { }
