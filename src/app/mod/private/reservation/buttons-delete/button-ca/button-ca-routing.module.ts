import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonCAComponent } from 'src/app/part01-reservation/buttons-delete/button-ca/button-ca.component';

const routes: Routes = [
  { path: '', component: ButtonCAComponent }
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
export class ButtonCARoutingModule { }
