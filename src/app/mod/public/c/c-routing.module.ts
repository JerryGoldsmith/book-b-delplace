import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part03Component } from 'src/app/part03/part03.component';

const routes: Routes = [
  { path: '', component: Part03Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRoutingModule { }
