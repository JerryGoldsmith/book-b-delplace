import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesARoutingModule } from './image-archives-a-routing.module';

import { ImageArchiveComponent } from 'src/app/edition/images/image-archive/image-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesARoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesAModule { }
