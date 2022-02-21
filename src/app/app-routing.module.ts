import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

/* -------------------------------------------- */
/* ------------------ AUTH -------------------- */
/* -------------------------------------------- */

import { SignupComponent } from './auth/signup/signup.component';
import { SignupLightComponent } from './auth/signuplight/signuplight.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SigninlistComponent } from './auth/signinlist/signinlist.component';

const routes: Routes = [
  { 
    path: '', component: MainComponent
   },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'partA',
    loadChildren: () => import('src/app/mod/public/a/a.module')
    .then(mod => mod.AModule)
  },
  {
    path: 'partB',
    loadChildren: () => import('src/app/mod/public/b/b.module')
    .then(mod => mod.BModule)
  },
  {
    path: 'partC',
    loadChildren: () => import('src/app/mod/public/c/c.module')
    .then(mod => mod.CModule)
  },
  {
    path: 'partD',
    loadChildren: () => import('src/app/mod/public/d/d.module')
    .then(mod => mod.DModule)
  },
  // auth
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signinlist', component: SigninlistComponent },

  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signuplight', component: SignupLightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
