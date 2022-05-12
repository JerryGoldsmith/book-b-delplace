import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ReactiveFormsModule } from '@angular/forms';

import { ButtonZAComponent } from 'src/app/part01-reservation/buttons-delete/button-za/button-za.component';

const routes: Routes = [
  { path: '', component: ButtonZAComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ButtonZARoutingModule { }
