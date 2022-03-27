import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookGComponent } from 'src/app/edition/single-book-g/single-book-g.component';

const routes: Routes = [
  { path: '', component: SingleBookGComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleGRoutingModule { }
