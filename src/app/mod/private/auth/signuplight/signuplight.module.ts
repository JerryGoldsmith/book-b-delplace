import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignuplightRoutingModule } from './signuplight-routing.module';
import { SignupLightComponent } from 'src/app/auth/signuplight/signuplight.component';


@NgModule({
  declarations: [
    SignupLightComponent
  ],
  imports: [
    CommonModule,
    SignuplightRoutingModule
  ],
  exports: [
    SignupLightComponent
  ]
})
export class SignuplightModule { }
