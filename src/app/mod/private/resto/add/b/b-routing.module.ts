import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BComponent } from 'src/app/restos/add/addB/addB.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: BComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class BRoutingModule { }
