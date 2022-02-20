import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DRoutingModule } from './d-routing.module';
import { DComponent } from './d/d.component';


@NgModule({
  declarations: [
    DComponent
  ],
  imports: [
    CommonModule,
    DRoutingModule
  ],
  exports: [
    DComponent
  ]
})
export class DModule { }
