import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageCComponent } from 'src/app/edition/images/image-c/image-c.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageCComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImagesCRoutingModule { }
