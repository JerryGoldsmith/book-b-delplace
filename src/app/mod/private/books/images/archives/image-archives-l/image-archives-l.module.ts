import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesLRoutingModule } from './image-archives-l-routing.module';

import { ImageLArchiveComponent } from 'src/app/edition/images/image-l-archive/image-l-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageLArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesLRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesLModule { }
