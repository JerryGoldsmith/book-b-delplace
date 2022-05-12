import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonDBRoutingModule } from './button-db-routing.module';
import { ButtonDBComponent } from 'src/app/part01-reservation/buttons-delete/button-db/button-db.component';

@NgModule({
  declarations: [
    ButtonDBComponent
  ],
  imports: [
    CommonModule,
    ButtonDBRoutingModule
  ],
  exports: [
    ButtonDBComponent
  ]
})
export class ButtonDBModule { }
