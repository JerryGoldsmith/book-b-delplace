import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListHRoutingModule } from './images-list-h-routing.module';

import { ImageListHComponent } from 'src/app/edition/images/imagelist-h/imagelist-h.component';


@NgModule({
  declarations: [
    ImageListHComponent
  ],
  imports: [
    CommonModule,
    ImagesListHRoutingModule
  ]
})
export class ImagesListHModule { }
