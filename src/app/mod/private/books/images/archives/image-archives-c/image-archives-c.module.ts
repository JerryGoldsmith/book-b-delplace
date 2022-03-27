import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesCRoutingModule } from './image-archives-c-routing.module';

import { ImageCArchiveComponent } from 'src/app/edition/images/image-c-archive/image-c-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageCArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesCRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesCModule { }
