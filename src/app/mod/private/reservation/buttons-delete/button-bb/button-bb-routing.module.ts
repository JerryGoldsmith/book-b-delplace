import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonBBComponent } from 'src/app/part01-reservation/buttons-delete/button-bb/button-bb.component';

const routes: Routes = [
  { path: '', component: ButtonBBComponent }
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
export class ButtonBBRoutingModule { }
