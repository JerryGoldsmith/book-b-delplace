import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageArchiveComponent } from 'src/app/edition/images/image-archive/image-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImageArchivesARoutingModule { }
