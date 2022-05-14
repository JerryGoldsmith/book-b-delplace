import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonFormReactiveModule } from 'src/app/routing/common-form-reactive.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from "@angular/common/locales/fr"; // date

// lazy load images
import { LazyImgDirective } from 'src/app/directives/lazy-img.directive';
import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// guard
import { AuthGuardService } from './../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'reservation',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/a-reservation/a-reservation.module')
      .then(mod => mod.AReservationModule),
      data: { preload: true, delay:500 }
  },
  {
    path: 'admin',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-home-admin/reservation-home-admin.module')
      .then(mod => mod.ReservationHomeAdminModule),
      data: { preload: true, delay:500 }
  },
  {
    path: 'hub',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-home-hub/reservation-home-hub.module')
      .then(mod => mod.ReservationHomeHubModule),
      data: { preload: true, delay:500 }
  },
  {
    path: 'home-result',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-home-reserve-seats/reservation-home-reserve-seats.module')
      .then(mod => mod.ReservationHomeReserveSeatsModule),
      data: { preload: true, delay:2000 }
  },
  {
    path: 'graphic',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-query-graphics/reservation-query-graphics.module')
      .then(mod => mod.ReservationQueryGraphicsModule),
      data: { preload: true, delay:2000 }
  },
  {
    path: 'pie',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-query-graphic-pie/reservation-query-graphic-pie.module')
      .then(mod => mod.ReservationQueryGraphicPieModule),
      data: { preload: true, delay:2000 }
  },
  {
    path: 'bar',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-query-graphic-bar/reservation-query-graphic-bar.module')
      .then(mod => mod.ReservationQueryGraphicBarModule),
      data: { preload: true, delay:2000 }
  },
  {
    path: 'polar',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-query-graphic-polararea/reservation-query-graphic-polararea.module')
      .then(mod => mod.ReservationQueryGraphicPolarareaModule),
      data: { preload: true, delay:2000 }
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,
          { preloadingStrategy: AuthPreloadStrategy }),
        LazyLoadImageModule,
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        CommonFormReactiveModule
    ],
    exports: [
        RouterModule
    ],
    providers: [
      AuthGuardService,
      AuthPreloadStrategy,
      LazyImgDirective
    ]
})

export class Part01ReservationModule {
    constructor() {
        registerLocaleData(fr.default);
    }
 }