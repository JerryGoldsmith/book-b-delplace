import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageFComponent } from 'src/app/edition/images/image-f/image-f.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageFComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImagesFRoutingModule { }
