import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonUAComponent } from 'src/app/part01-reservation/buttons-delete/button-ua/button-ua.component';

const routes: Routes = [
  { path: '', component: ButtonUAComponent }
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
export class ButtonUARoutingModule { }
