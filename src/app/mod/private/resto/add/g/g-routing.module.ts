import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GComponent } from 'src/app/restos/add/addG/addG.component';

const routes: Routes = [
  { path: '', component: GComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GRoutingModule { }
