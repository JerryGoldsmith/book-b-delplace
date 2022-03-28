import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListBRoutingModule } from './images-list-b-routing.module';

import { ImageListBComponent } from 'src/app/edition/images/imagelist-b/imagelist-b.component';


@NgModule({
  declarations: [
    ImageListBComponent
  ],
  imports: [
    CommonModule,
    ImagesListBRoutingModule
  ]
})
export class ImagesListBModule { }
