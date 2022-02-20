import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LComponent } from 'src/app/restos/add/addL/addL.component';

const routes: Routes = [
  { path: '', component: LComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LRoutingModule { }
