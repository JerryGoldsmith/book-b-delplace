import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EComponent } from './e/e.component';

const routes: Routes = [
  { path: '', component: EComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ERoutingModule { }
