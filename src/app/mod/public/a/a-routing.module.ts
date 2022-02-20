import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part01Component } from 'src/app/part01/part01.component';

const routes: Routes = [
  { path: '', component: Part01Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ARoutingModule { }
