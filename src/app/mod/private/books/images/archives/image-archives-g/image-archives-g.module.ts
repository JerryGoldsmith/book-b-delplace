import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesGRoutingModule } from './image-archives-g-routing.module';

import { ImageGArchiveComponent } from 'src/app/edition/images/image-g-archive/image-g-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageGArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesGRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesGModule { }
