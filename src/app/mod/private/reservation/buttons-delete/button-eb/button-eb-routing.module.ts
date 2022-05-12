import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonEBComponent } from 'src/app/part01-reservation/buttons-delete/button-eb/button-eb.component';

const routes: Routes = [
  { path: '', component: ButtonEBComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ButtonEBRoutingModule { }
