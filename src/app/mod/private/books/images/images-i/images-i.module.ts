import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesIRoutingModule } from './images-i-routing.module';

import { ImageIComponent } from 'src/app/edition/images/image-i/image-i.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageIComponent
  ],
  imports: [
    CommonModule,
    ImagesIRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesIModule { }
