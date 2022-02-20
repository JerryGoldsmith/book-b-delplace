import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoRoutingModule } from './resto-routing.module';
import { RestosComponent } from 'src/app/restos/restos.component';
// import { Part01RestoHomeComponent } from 'src/app/part01-resto-home/part01-resto-home.component';


@NgModule({
  declarations: [
    RestosComponent
    // Part01RestoHomeComponent
  ],
  imports: [
    CommonModule,
    RestoRoutingModule
  ],
  exports: [
    RestosComponent
    // Part01RestoHomeComponent
  ]
})
export class RestoModule {
  // customElementComponent: Type<any> = RestosComponent;
}
