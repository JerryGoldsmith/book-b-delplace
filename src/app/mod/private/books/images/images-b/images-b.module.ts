import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesBRoutingModule } from './images-b-routing.module';

import { ImageBComponent } from 'src/app/edition/images/image-b/image-b.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageBComponent
  ],
  imports: [
    CommonModule,
    ImagesBRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesBModule { }
