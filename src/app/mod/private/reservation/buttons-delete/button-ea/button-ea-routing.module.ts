import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonEAComponent } from 'src/app/part01-reservation/buttons-delete/button-ea/button-ea.component';

const routes: Routes = [
  { path: '', component: ButtonEAComponent }
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
export class ButtonEARoutingModule { }
