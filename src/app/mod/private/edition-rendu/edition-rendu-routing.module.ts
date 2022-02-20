import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from 'src/app/book-list/book-list.component';

const routes: Routes = [
  { path: '', component: BookListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditionRenduRoutingModule { }
