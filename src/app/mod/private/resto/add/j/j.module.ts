import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JRoutingModule } from './j-routing.module';
import { JComponent } from 'src/app/restos/add/addJ/addJ.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JComponent
  ],
  imports: [
    CommonModule,
    JRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    JComponent
  ]
})
export class JModule { }
