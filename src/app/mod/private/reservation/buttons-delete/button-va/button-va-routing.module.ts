import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ReactiveFormsModule } from '@angular/forms';

import { ButtonVAComponent } from 'src/app/part01-reservation/buttons-delete/button-va/button-va.component';

const routes: Routes = [
  { path: '', component: ButtonVAComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ButtonVARoutingModule { }
