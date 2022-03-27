import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageHComponent } from 'src/app/edition/images/image-h/image-h.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageHComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImagesHRoutingModule { }
