import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninlistComponent } from 'src/app/auth/signinlist/signinlist.component';

const routes: Routes = [
  { path: '', component: SigninlistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninlistRoutingModule { }
