import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesJRoutingModule } from './image-archives-j-routing.module';

import { ImageJArchiveComponent } from 'src/app/edition/images/image-j-archive/image-j-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageJArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesJRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesJModule { }
