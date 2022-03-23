import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";

import { RestoRoutingModule } from './resto-routing.module';
import { RestosComponent } from 'src/app/restos/restos.component';


@NgModule({
  declarations: [
    RestosComponent
  ],
  imports: [
    RestoRoutingModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    RestoRoutingModule,
    RestosComponent
  ]
})
export class RestoModule {}
