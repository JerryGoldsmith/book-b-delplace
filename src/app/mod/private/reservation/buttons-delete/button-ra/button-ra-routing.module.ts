import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonRAComponent } from 'src/app/part01-reservation/buttons-delete/button-ra/button-ra.component';

const routes: Routes = [
  { path: '', component: ButtonRAComponent }
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
export class ButtonRARoutingModule { }
