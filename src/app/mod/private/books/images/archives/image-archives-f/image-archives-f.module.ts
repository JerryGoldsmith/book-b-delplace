import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesFRoutingModule } from './image-archives-f-routing.module';

import { ImageFArchiveComponent } from 'src/app/edition/images/image-f-archive/image-f-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageFArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesFRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesFModule { }
