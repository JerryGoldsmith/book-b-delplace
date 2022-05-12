import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonTAComponent } from 'src/app/part01-reservation/buttons-delete/button-ta/button-ta.component';

const routes: Routes = [
  { path: '', component: ButtonTAComponent }
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
export class ButtonTARoutingModule { }
