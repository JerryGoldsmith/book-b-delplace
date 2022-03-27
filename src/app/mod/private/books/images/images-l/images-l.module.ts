import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesLRoutingModule } from './images-l-routing.module';

import { ImageLComponent } from 'src/app/edition/images/image-l/image-l.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageLComponent
  ],
  imports: [
    CommonModule,
    ImagesLRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesLModule { }
