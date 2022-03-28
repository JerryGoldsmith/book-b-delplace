import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListDRoutingModule } from './images-list-d-routing.module';

import { ImageListDComponent } from 'src/app/edition/images/imagelist-d/imagelist-d.component';


@NgModule({
  declarations: [
    ImageListDComponent
  ],
  imports: [
    CommonModule,
    ImagesListDRoutingModule
  ]
})
export class ImagesListDModule { }
