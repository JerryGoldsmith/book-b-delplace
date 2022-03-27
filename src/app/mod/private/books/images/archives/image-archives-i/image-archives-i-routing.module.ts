import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageIArchiveComponent } from 'src/app/edition/images/image-i-archive/image-i-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageIArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImageArchivesIRoutingModule { }
