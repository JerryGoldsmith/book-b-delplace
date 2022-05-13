import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonYAComponent } from 'src/app/part01-reservation/buttons-delete/button-ya/button-ya.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ButtonYAComponent }
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
export class ButtonYARoutingModule { }
