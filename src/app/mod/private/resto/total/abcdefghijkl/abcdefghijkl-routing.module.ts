import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbcdefghijklComponent } from 'src/app/restos/total/abcdefghijkl/abcdefghijkl.component';

const routes: Routes = [
  { path: '', component: AbcdefghijklComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbcdefghijklRoutingModule { }
