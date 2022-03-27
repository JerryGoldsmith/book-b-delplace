import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageBComponent } from 'src/app/edition/images/image-b/image-b.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageBComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImagesBRoutingModule { }
