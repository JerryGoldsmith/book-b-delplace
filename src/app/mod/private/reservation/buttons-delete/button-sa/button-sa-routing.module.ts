import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonSAComponent } from 'src/app/part01-reservation/buttons-delete/button-sa/button-sa.component';

const routes: Routes = [
  { path: '', component: ButtonSAComponent }
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
export class ButtonSARoutingModule { }
