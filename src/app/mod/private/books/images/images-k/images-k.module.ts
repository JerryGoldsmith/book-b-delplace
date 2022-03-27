import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesKRoutingModule } from './images-k-routing.module';

import { ImageKComponent } from 'src/app/edition/images/image-k/image-k.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageKComponent
  ],
  imports: [
    CommonModule,
    ImagesKRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesKModule { }
