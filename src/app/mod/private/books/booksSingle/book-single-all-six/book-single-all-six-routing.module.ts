import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookAllSixComponent } from 'src/app/edition/single-book-all-six/single-book-all-six.component';

const routes: Routes = [
  { path: '', component: SingleBookAllSixComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleAllSixRoutingModule { }
