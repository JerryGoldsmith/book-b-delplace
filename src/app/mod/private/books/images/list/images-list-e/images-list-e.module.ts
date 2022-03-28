import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesListERoutingModule } from './images-list-e-routing.module';

import { ImageListEComponent } from 'src/app/edition/images/imagelist-e/imagelist-e.component';


@NgModule({
  declarations: [
    ImageListEComponent
  ],
  imports: [
    CommonModule,
    ImagesListERoutingModule
  ]
})
export class ImagesListEModule { }
