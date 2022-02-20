import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Part04Component } from 'src/app/part04/part04.component';

const routes: Routes = [
  { path: '', component: Part04Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DRoutingModule { }
