import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonFAComponent } from 'src/app/part01-reservation/buttons-delete/button-fa/button-fa.component';

const routes: Routes = [
  { path: '', component: ButtonFAComponent }
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
export class ButtonFARoutingModule { }
