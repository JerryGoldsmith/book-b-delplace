import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EComponent } from 'src/app/restos/add/addE/addE.component';

const routes: Routes = [
  { path: '', component: EComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ERoutingModule { }
