import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesIRoutingModule } from './image-archives-i-routing.module';

import { ImageIArchiveComponent } from 'src/app/edition/images/image-i-archive/image-i-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageIArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesIRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesIModule { }
