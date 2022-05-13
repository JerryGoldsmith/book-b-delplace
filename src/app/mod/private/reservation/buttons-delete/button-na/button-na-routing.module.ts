import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonNAComponent } from 'src/app/part01-reservation/buttons-delete/button-na/button-na.component';

const routes: Routes = [
  { path: '', component: ButtonNAComponent }
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
export class ButtonNARoutingModule { }
