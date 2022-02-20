import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from 'src/app/auth/signup/signup.component';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
