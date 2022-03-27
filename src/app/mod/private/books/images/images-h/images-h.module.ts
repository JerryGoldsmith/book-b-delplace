import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesHRoutingModule } from './images-h-routing.module';

import { ImageHComponent } from 'src/app/edition/images/image-h/image-h.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageHComponent
  ],
  imports: [
    CommonModule,
    ImagesHRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesHModule { }
