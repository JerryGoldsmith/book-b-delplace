import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonMAComponent } from 'src/app/part01-reservation/buttons-delete/button-ma/button-ma.component';

const routes: Routes = [
  { path: '', component: ButtonMAComponent }
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
export class ButtonMARoutingModule { }
