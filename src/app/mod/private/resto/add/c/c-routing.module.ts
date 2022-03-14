import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CComponent } from 'src/app/restos/add/addC/addC.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class CRoutingModule { }
