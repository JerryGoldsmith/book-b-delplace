import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonBAComponent } from 'src/app/part01-reservation/buttons-delete/button-ba/button-ba.component';

const routes: Routes = [
  { path: '', component: ButtonBAComponent }
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
export class ButtonBARoutingModule { }
