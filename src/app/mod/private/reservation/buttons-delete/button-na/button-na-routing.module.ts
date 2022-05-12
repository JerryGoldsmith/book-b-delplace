import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonNAComponent } from 'src/app/part01-reservation/buttons-delete/button-na/button-na.component';

const routes: Routes = [
  { path: '', component: ButtonNAComponent }
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
export class ButtonNARoutingModule { }
