import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EComponent } from 'src/app/restos/add/addE/addE.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: EComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ERoutingModule { }
