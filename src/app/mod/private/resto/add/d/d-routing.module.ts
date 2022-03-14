import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DComponent } from 'src/app/restos/add/addD/addD.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: DComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class DRoutingModule { }
