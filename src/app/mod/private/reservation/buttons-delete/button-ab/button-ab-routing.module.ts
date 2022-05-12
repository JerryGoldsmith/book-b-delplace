import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonABComponent } from 'src/app/part01-reservation/buttons-delete/button-ab/button-ab.component';

const routes: Routes = [
  { path: '', component: ButtonABComponent }
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
export class ButtonABRoutingModule { }
