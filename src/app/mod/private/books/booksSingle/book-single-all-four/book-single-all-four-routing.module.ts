import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookAllFourComponent } from 'src/app/edition/single-book-all-four/single-book-all-four.component';

const routes: Routes = [
  { path: '', component: SingleBookAllFourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleAllFourRoutingModule { }
