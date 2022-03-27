import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageKComponent } from 'src/app/edition/images/image-k/image-k.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageKComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImagesKRoutingModule { }
