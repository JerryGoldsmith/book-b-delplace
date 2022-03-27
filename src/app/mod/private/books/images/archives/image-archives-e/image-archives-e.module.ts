import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesERoutingModule } from './image-archives-e-routing.module';

import { ImageEArchiveComponent } from 'src/app/edition/images/image-e-archive/image-e-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageEArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesERoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesEModule { }
