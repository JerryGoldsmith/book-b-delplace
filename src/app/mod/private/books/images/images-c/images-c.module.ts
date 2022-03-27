import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesCRoutingModule } from './images-c-routing.module';

import { ImageCComponent } from 'src/app/edition/images/image-c/image-c.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageCComponent
  ],
  imports: [
    CommonModule,
    ImagesCRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesCModule { }
