import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookAllComponent } from 'src/app/edition/single-book-all/single-book-all.component';

const routes: Routes = [
  { path: '', component: SingleBookAllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleAllRoutingModule { }
