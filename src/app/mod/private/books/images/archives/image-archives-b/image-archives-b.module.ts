import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesBRoutingModule } from './image-archives-b-routing.module';

import { ImageBArchiveComponent } from 'src/app/edition/images/image-b-archive/image-b-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageBArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesBRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesBModule { }
