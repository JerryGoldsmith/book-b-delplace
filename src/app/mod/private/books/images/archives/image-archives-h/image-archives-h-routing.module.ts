import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageHArchiveComponent } from 'src/app/edition/images/image-h-archive/image-h-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ImageHArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ImageArchivesHRoutingModule { }
