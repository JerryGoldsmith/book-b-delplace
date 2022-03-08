import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbcdefghijklRoutingModule } from './abcdefghijkl-routing.module';
import { AbcdefghijklComponent } from 'src/app/restos/total/abcdefghijkl/abcdefghijkl.component';


@NgModule({
  declarations: [
    AbcdefghijklComponent
  ],
  imports: [
    CommonModule,
    AbcdefghijklRoutingModule
  ]
})
export class AbcdefghijklModule { }
