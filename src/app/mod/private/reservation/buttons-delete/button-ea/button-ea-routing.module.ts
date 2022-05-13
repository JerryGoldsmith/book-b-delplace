import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonEAComponent } from 'src/app/part01-reservation/buttons-delete/button-ea/button-ea.component';

const routes: Routes = [
  { path: '', component: ButtonEAComponent }
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
export class ButtonEARoutingModule { }
