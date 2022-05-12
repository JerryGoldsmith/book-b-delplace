import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonIAComponent } from 'src/app/part01-reservation/buttons-delete/button-ia/button-ia.component';

const routes: Routes = [
  { path: '', component: ButtonIAComponent }
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
export class ButtonIARoutingModule { }
