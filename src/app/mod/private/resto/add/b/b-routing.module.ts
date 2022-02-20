import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BComponent } from 'src/app/restos/add/addB/addB.component';

const routes: Routes = [
  { path: '', component: BComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRoutingModule { }
