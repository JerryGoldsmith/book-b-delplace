import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IRoutingModule } from './i-routing.module';
import { IComponent } from 'src/app/restos/add/addI/addI.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IComponent
  ],
  imports: [
    CommonModule,
    IRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    IComponent
  ]
})
export class IModule { }
