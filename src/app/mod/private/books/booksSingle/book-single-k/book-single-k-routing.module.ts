import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookKComponent } from 'src/app/edition/single-book-k/single-book-k.component';

const routes: Routes = [
  { path: '', component: SingleBookKComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleKRoutingModule { }
