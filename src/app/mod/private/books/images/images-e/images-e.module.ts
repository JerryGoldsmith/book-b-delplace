import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesERoutingModule } from './images-e-routing.module';

import { ImageEComponent } from 'src/app/edition/images/image-e/image-e.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageEComponent
  ],
  imports: [
    CommonModule,
    ImagesERoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ImagesEModule { }
