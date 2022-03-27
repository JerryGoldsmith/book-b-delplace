import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesJRoutingModule } from './images-j-routing.module';

import { ImageJComponent } from 'src/app/edition/images/image-j/image-j.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageJComponent
  ],
  imports: [
    CommonModule,
    ImagesJRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesJModule { }
