import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KComponent } from 'src/app/restos/add/addK/addK.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: KComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class KRoutingModule { }
