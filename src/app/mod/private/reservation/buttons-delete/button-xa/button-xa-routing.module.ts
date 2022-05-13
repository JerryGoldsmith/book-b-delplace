import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonXAComponent } from 'src/app/part01-reservation/buttons-delete/button-xa/button-xa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ButtonXAComponent }
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
export class ButtonXARoutingModule { }
