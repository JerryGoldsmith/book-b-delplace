import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../../services/auth.service';
import { AuthGuardService } from '../../../../services/auth-guard.service';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from 'src/app/auth/signin/signin.component';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule
  ],
  exports: [
    SigninComponent
  ]
})
export class SigninModule { }