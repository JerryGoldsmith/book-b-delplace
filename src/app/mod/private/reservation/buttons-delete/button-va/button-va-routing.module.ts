import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonVAComponent } from 'src/app/part01-reservation/buttons-delete/button-va/button-va.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ButtonVAComponent }
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
export class ButtonVARoutingModule { }
