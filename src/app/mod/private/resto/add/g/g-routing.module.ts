import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GComponent } from 'src/app/restos/add/addG/addG.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: GComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class GRoutingModule { }
