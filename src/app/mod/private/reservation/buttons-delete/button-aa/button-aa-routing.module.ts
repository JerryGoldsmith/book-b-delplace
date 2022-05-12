import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonAAComponent } from 'src/app/part01-reservation/buttons-delete/button-aa/button-aa.component';

const routes: Routes = [
  { path: '', component: ButtonAAComponent }
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
export class ButtonAARoutingModule { }
