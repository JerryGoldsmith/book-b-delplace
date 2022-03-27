import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookEComponent } from 'src/app/edition/single-book-e/single-book-e.component';

const routes: Routes = [
  { path: '', component: SingleBookEComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleERoutingModule { }
