import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FComponent } from 'src/app/restos/add/addF/addF.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: FComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class FRoutingModule { }
