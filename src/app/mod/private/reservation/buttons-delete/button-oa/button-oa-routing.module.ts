import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonOAComponent } from 'src/app/part01-reservation/buttons-delete/button-oa/button-oa.component';

const routes: Routes = [
  { path: '', component: ButtonOAComponent }
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
export class ButtonOARoutingModule { }
