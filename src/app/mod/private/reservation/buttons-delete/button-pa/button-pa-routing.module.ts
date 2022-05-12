import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonPAComponent } from 'src/app/part01-reservation/buttons-delete/button-pa/button-pa.component';

const routes: Routes = [
  { path: '', component: ButtonPAComponent }
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
export class ButtonPARoutingModule { }
