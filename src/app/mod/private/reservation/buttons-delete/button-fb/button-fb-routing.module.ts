import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonFBComponent } from 'src/app/part01-reservation/buttons-delete/button-fb/button-fb.component';

const routes: Routes = [
  { path: '', component: ButtonFBComponent }
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
export class ButtonFBRoutingModule { }
