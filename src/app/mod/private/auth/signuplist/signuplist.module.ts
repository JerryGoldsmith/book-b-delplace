import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignuplistRoutingModule } from './signuplist-routing.module';
import { SignuplistComponent } from './signuplist/signuplist.component';


@NgModule({
  declarations: [SignuplistComponent],
  imports: [
    CommonModule,
    SignuplistRoutingModule
  ]
})
export class SignuplistModule { }
