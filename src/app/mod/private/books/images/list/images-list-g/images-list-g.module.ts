import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListGRoutingModule } from './images-list-g-routing.module';

import { ImageListGComponent } from 'src/app/edition/images/imagelist-g/imagelist-g.component';


@NgModule({
  declarations: [
    ImageListGComponent
  ],
  imports: [
    CommonModule,
    ImagesListGRoutingModule
  ]
})
export class ImagesListGModule { }
