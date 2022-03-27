import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageArchivesDRoutingModule } from './image-archives-d-routing.module';

import { ImageDArchiveComponent } from 'src/app/edition/images/image-d-archive/image-d-archive.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageDArchiveComponent
  ],
  imports: [
    CommonModule,
    ImageArchivesDRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImageArchivesDModule { }
