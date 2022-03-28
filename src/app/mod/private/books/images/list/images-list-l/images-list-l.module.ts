import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListLRoutingModule } from './images-list-l-routing.module';

import { ImageListLComponent } from 'src/app/edition/images/imagelist-l/imagelist-l.component';


@NgModule({
  declarations: [
    ImageListLComponent
  ],
  imports: [
    CommonModule,
    ImagesListLRoutingModule
  ]
})
export class ImagesListLModule { }
