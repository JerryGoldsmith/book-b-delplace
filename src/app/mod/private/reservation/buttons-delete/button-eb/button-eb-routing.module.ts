import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonEBComponent } from 'src/app/part01-reservation/buttons-delete/button-eb/button-eb.component';

const routes: Routes = [
  { path: '', component: ButtonEBComponent }
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
export class ButtonEBRoutingModule { }
