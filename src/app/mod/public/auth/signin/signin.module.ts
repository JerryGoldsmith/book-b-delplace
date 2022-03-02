import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from 'src/app/auth/signin/signin.component';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    // CommonModule,
    SigninRoutingModule
  ],
  exports: [
    SigninComponent,
    SigninRoutingModule
  ]
})
export class SigninModule { }
