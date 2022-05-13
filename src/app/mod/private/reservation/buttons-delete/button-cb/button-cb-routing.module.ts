import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonCBComponent } from 'src/app/part01-reservation/buttons-delete/button-cb/button-cb.component';

const routes: Routes = [
  { path: '', component: ButtonCBComponent }
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
export class ButtonCBRoutingModule { }
