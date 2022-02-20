import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupLightComponent } from 'src/app/auth/signuplight/signuplight.component';

const routes: Routes = [
  { path: '', component: SignupLightComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignuplightRoutingModule { }
