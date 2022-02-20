import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IRoutingModule } from './i-routing.module';
import { IComponent } from 'src/app/restos/add/addI/addI.component';

@NgModule({
  declarations: [
    IComponent
  ],
  imports: [
    CommonModule,
    IRoutingModule
  ],
  exports: [
    IComponent
  ]
})
export class IModule { }
