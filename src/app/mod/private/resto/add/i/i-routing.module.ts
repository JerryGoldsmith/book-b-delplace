import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IComponent } from 'src/app/restos/add/addI/addI.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: IComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class IRoutingModule { }
