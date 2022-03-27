import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesHRoutingModule } from './image-archives-h-routing.module';

import { ImageHArchiveComponent } from 'src/app/edition/images/image-h-archive/image-h-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageHArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesHRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesHModule { }
