import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HComponent } from 'src/app/restos/add/addH/addH.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class HRoutingModule { }
