import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonUAComponent } from 'src/app/part01-reservation/buttons-delete/button-ua/button-ua.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ButtonUAComponent }
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
export class ButtonUARoutingModule { }
