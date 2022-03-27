import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesFRoutingModule } from './images-f-routing.module';

import { ImageFComponent } from 'src/app/edition/images/image-f/image-f.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageFComponent
  ],
  imports: [
    CommonModule,
    ImagesFRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesFModule { }
