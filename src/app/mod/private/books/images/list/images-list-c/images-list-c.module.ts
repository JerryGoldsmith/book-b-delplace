import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListCRoutingModule } from './images-list-c-routing.module';

import { ImageListCComponent } from 'src/app/edition/images/imagelist-c/imagelist-c.component';


@NgModule({
  declarations: [
    ImageListCComponent
  ],
  imports: [
    CommonModule,
    ImagesListCRoutingModule
  ]
})
export class ImagesListCModule { }
