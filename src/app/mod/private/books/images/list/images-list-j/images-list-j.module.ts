import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListJRoutingModule } from './images-list-j-routing.module';

import { ImageListJComponent } from 'src/app/edition/images/imagelist-j/imagelist-j.component';


@NgModule({
  declarations: [
    ImageListJComponent
  ],
  imports: [
    CommonModule,
    ImagesListJRoutingModule
  ]
})
export class ImagesListJModule { }
