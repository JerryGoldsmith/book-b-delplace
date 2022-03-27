import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesDRoutingModule } from './images-d-routing.module';

import { ImageDComponent } from 'src/app/edition/images/image-d/image-d.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageDComponent
  ],
  imports: [
    CommonModule,
    ImagesDRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesDModule { }
