import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListIRoutingModule } from './images-list-i-routing.module';

import { ImageListIComponent } from 'src/app/edition/images/imagelist-i/imagelist-i.component';


@NgModule({
  declarations: [
    ImageListIComponent
  ],
  imports: [
    CommonModule,
    ImagesListIRoutingModule
  ]
})
export class ImagesListIModule { }
