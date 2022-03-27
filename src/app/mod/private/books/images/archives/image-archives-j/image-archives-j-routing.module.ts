import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageJArchiveComponent } from 'src/app/edition/images/image-j-archive/image-j-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageJArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImageArchivesJRoutingModule { }
