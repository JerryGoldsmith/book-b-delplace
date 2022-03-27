import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookAllFiveComponent } from 'src/app/edition/single-book-all-five/single-book-all-five.component';

const routes: Routes = [
  { path: '', component: SingleBookAllFiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleAllFiveRoutingModule { }
