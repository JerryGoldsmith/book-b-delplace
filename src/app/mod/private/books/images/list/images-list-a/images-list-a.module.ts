import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListARoutingModule } from './images-list-a-routing.module';

import { ImageListComponent } from 'src/app/edition/images/imagelist/imagelist.component';


@NgModule({
  declarations: [
    ImageListComponent
  ],
  imports: [
    CommonModule,
    ImagesListARoutingModule
  ]
})
export class ImagesListAModule { }
