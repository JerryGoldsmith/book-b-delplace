import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookIComponent } from 'src/app/edition/single-book-i/single-book-i.component';

const routes: Routes = [
  { path: '', component: SingleBookIComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleIRoutingModule { }
