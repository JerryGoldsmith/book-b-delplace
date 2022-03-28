import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListKRoutingModule } from './images-list-k-routing.module';

import { ImageListKComponent } from 'src/app/edition/images/imagelist-k/imagelist-k.component';


@NgModule({
  declarations: [
    ImageListKComponent
  ],
  imports: [
    CommonModule,
    ImagesListKRoutingModule
  ]
})
export class ImagesListKModule { }
