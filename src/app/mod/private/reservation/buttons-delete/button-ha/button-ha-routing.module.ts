import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonHAComponent } from 'src/app/part01-reservation/buttons-delete/button-ha/button-ha.component';

const routes: Routes = [
  { path: '', component: ButtonHAComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ButtonHARoutingModule { }
