import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageBArchiveComponent } from 'src/app/edition/images/image-b-archive/image-b-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageBArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImageArchivesBRoutingModule { }
