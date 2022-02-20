import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part02Component } from 'src/app/part02/part02.component';

const routes: Routes = [
  { path: '', component: Part02Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BRoutingModule { }
