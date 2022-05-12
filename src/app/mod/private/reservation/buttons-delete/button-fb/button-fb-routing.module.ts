import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonFBComponent } from 'src/app/part01-reservation/buttons-delete/button-fb/button-fb.component';

const routes: Routes = [
  { path: '', component: ButtonFBComponent }
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
export class ButtonFBRoutingModule { }
