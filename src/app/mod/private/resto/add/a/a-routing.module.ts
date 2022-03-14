import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AComponent } from 'src/app/restos/add/addA/addA.component';

const routes: Routes = [
  { path: '', component: AComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ARoutingModule { }
