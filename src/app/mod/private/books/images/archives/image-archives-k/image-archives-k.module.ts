import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesKRoutingModule } from './image-archives-k-routing.module';

import { ImageKArchiveComponent } from 'src/app/edition/images/image-k-archive/image-k-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageKArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesKRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesKModule { }
