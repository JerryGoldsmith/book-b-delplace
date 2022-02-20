import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JRoutingModule } from './j-routing.module';
import { JComponent } from 'src/app/restos/add/addJ/addJ.component';

@NgModule({
  declarations: [
    JComponent
  ],
  imports: [
    CommonModule,
    JRoutingModule
  ],
  exports: [
    JComponent
  ]
})
export class JModule { }
