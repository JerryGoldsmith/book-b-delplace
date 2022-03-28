import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListFRoutingModule } from './images-list-f-routing.module';

import { ImageListFComponent } from 'src/app/edition/images/imagelist-f/imagelist-f.component';


@NgModule({
  declarations: [
    ImageListFComponent
  ],
  imports: [
    CommonModule,
    ImagesListFRoutingModule
  ]
})
export class ImagesListFModule { }
