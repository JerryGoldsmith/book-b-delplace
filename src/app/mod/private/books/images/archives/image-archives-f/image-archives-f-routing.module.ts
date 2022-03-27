import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageFArchiveComponent } from 'src/app/edition/images/image-f-archive/image-f-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageFArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImageArchivesFRoutingModule { }
