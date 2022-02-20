import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninlistRoutingModule } from './signinlist-routing.module';
import { SigninlistComponent } from 'src/app/auth/signinlist/signinlist.component';


@NgModule({
  declarations: [
    SigninlistComponent
  ],
  imports: [
    CommonModule,
    SigninlistRoutingModule
  ],
  exports: [
    SigninlistComponent
  ]
})
export class SigninlistModule { }
