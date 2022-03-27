import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesGRoutingModule } from './images-g-routing.module';

import { ImageGComponent } from 'src/app/edition/images/image-g/image-g.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageGComponent
  ],
  imports: [
    CommonModule,
    ImagesGRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesGModule { }
