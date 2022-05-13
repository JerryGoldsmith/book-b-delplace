import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonKAComponent } from 'src/app/part01-reservation/buttons-delete/button-ka/button-ka.component';

const routes: Routes = [
  { path: '', component: ButtonKAComponent }
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
export class ButtonKARoutingModule { }
