import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookJComponent } from 'src/app/edition/single-book-j/single-book-j.component';

const routes: Routes = [
  { path: '', component: SingleBookJComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleJRoutingModule { }
