import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesARoutingModule } from './images-a-routing.module';

import { ImageComponent } from 'src/app/edition/images/image/image.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageComponent
  ],
  imports: [
    CommonModule,
    ImagesARoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesAModule { }
