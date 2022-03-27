import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBookAllThreeComponent } from 'src/app/edition/single-book-all-three/single-book-all-three.component';

const routes: Routes = [
  { path: '', component: SingleBookAllThreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookSingleAllThreeRoutingModule { }
