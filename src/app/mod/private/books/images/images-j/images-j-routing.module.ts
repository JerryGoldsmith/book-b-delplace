import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageJComponent } from 'src/app/edition/images/image-j/image-j.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageJComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImagesJRoutingModule { }
