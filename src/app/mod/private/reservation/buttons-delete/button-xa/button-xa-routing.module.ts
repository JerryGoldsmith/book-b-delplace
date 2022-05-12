import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonXAComponent } from 'src/app/part01-reservation/buttons-delete/button-xa/button-xa.component';

const routes: Routes = [
  { path: '', component: ButtonXAComponent }
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
export class ButtonXARoutingModule { }
