import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonFormReactiveModule } from 'src/app/routing/common-form-reactive.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';

// guard
import { AuthGuardService } from './../services/auth-guard.service';

// import { KeyValuePipe } from 'src/app/pipes/key-value.pipe';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

const routes: Routes = [

    {
        path: 'button-aa',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-aa/button-aa.module')
          .then(mod => mod.ButtonAAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ab',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ab/button-ab.module')
          .then(mod => mod.ButtonABModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ba',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ba/button-ba.module')
          .then(mod => mod.ButtonBAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-bb',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-bb/button-bb.module')
          .then(mod => mod.ButtonBBModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ca',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ca/button-ca.module')
          .then(mod => mod.ButtonCAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-cb',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-cb/button-cb.module')
          .then(mod => mod.ButtonCBModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-da',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-da/button-da.module')
          .then(mod => mod.ButtonDAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-db',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-db/button-db.module')
          .then(mod => mod.ButtonDBModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ea',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ea/button-ea.module')
          .then(mod => mod.ButtonEAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-eb',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-eb/button-eb.module')
          .then(mod => mod.ButtonEBModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-fa',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-fa/button-fa.module')
          .then(mod => mod.ButtonFAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-fb',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-fb/button-fb.module')
          .then(mod => mod.ButtonFBModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ga',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ga/button-ga.module')
          .then(mod => mod.ButtonGAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ha',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ha/button-ha.module')
          .then(mod => mod.ButtonHAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ia',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ia/button-ia.module')
          .then(mod => mod.ButtonIAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ja',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ja/button-ja.module')
          .then(mod => mod.ButtonJAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ka',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ka/button-ka.module')
          .then(mod => mod.ButtonKAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-la',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-la/button-la.module')
          .then(mod => mod.ButtonLAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ma',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ma/button-ma.module')
          .then(mod => mod.ButtonMAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-na',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-na/button-na.module')
          .then(mod => mod.ButtonNAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-oa',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-oa/button-oa.module')
          .then(mod => mod.ButtonOAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-pa',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-pa/button-pa.module')
          .then(mod => mod.ButtonPAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-qa',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-qa/button-qa.module')
          .then(mod => mod.ButtonQAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ra',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ra/button-ra.module')
          .then(mod => mod.ButtonRAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-sa',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-sa/button-sa.module')
          .then(mod => mod.ButtonSAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ta',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ta/button-ta.module')
          .then(mod => mod.ButtonTAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ua',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ua/button-ua.module')
          .then(mod => mod.ButtonUAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-va',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-va/button-va.module')
          .then(mod => mod.ButtonVAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-wa',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-wa/button-wa.module')
          .then(mod => mod.ButtonWAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-xa',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-xa/button-xa.module')
          .then(mod => mod.ButtonXAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-ya',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-ya/button-ya.module')
          .then(mod => mod.ButtonYAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'button-za',
        canActivate: [ AuthGuardService ],
        loadChildren: () => import('src/app/mod/private/reservation/buttons-delete/button-za/button-za.module')
          .then(mod => mod.ButtonZAModule),
          data: { preload: true, delay:1000 }
    }
];

@NgModule ({
    declarations: [
      ValueArrayPipe
    ],
    imports: [
        RouterModule.forRoot(routes,
            { preloadingStrategy: AuthPreloadStrategy }),
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        CommonFormReactiveModule
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthPreloadStrategy
    ]
})

export class Part01ReservationButtonsDeleteModule {

}