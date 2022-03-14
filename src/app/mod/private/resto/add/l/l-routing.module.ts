import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LComponent } from 'src/app/restos/add/addL/addL.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class LRoutingModule { }
