import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookAllTwoComponent } from 'src/app/edition/single-book-all-two/single-book-all-two.component';

const routes: Routes = [
  { path: '', component: SingleBookAllTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleAllTwoRoutingModule { }
