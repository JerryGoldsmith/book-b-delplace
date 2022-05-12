import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonQAComponent } from 'src/app/part01-reservation/buttons-delete/button-qa/button-qa.component';

const routes: Routes = [
  { path: '', component: ButtonQAComponent }
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
export class ButtonQARoutingModule { }
