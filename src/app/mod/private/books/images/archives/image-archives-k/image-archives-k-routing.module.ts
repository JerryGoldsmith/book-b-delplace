import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageKArchiveComponent } from 'src/app/edition/images/image-k-archive/image-k-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageKArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImageArchivesKRoutingModule { }
