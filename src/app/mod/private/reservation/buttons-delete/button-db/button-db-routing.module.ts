import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonDBComponent } from 'src/app/part01-reservation/buttons-delete/button-db/button-db.component';

const routes: Routes = [
  { path: '', component: ButtonDBComponent }
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
export class ButtonDBRoutingModule { }
