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

// -------------------------------

// reservation

// import { Part01ReservationHomeComponent } from 'src/app/part01-reservation-home/part01-reservation-home.component';
// import { ReservationHomeComponent } from 'src/app/part01-reservation/reservation-home/reservation-home.component';
// import { ReservationAdminComponent } from 'src/app/part01-reservation/reservation-admin/reservation-admin.component';
// import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';
// import { ReservationHomeAdminComponent } from 'src/app/part01-reservation/reservation-home-admin/reservation-home-admin.component';
// import { ReservationHomeHubComponent } from 'src/app/part01-reservation/reservation-home-hub/reservation-home-hub.component';
// import { ReservationHomeReserveSeatsComponent } from 'src/app/part01-reservation/reservation-home-reserve-seats/reservation-home-reserve-seats.component';

// import { ReservationPictureComponent } from 'src/app/part01-reservation/reservation-picture/reservation-picture.component';
// import { ReservationPictureBisComponent } from 'src/app/part01-reservation/reservation-picture-bis/reservation-picture-bis.component';
// import { ReservationPictureTerComponent } from 'src/app/part01-reservation/reservation-picture-ter/reservation-picture-ter.component';

// import { ReservationQueryDateComponent } from 'src/app/part01-reservation/reservation-query-date/reservation-query-date.component';

// import { ReservationQueryGraphicsComponent } from 'src/app/part01-reservation/reservation-query-graphics/reservation-query-graphics.component';
// import { ReservationQueryGraphicPieComponent } from 'src/app/part01-reservation/reservation-query-graphic-pie/reservation-query-graphic-pie.component';
// import { ReservationQueryGraphicBarComponent } from 'src/app/part01-reservation/reservation-query-graphic-bar/reservation-query-graphic-bar.component';
// import { ReservationQueryGraphicPolarareaComponent } from 'src/app/part01-reservation/reservation-query-graphic-polararea/reservation-query-graphic-polararea.component';

// import { ReservationResultComponent } from 'src/app/part01-reservation/reservation-result/reservation-result.component';

// import { SeatsComponent } from 'src/app/part01-reservation/seats/seats/seats.component';
// import { SeatsStartComponent } from 'src/app/part01-reservation/seats/seats-start/seats-start.component';

// import { ButtonAAComponent } from 'src/app/part01-reservation/buttons-delete/button-aa/button-aa.component';
// import { ButtonBAComponent } from 'src/app/part01-reservation/buttons-delete/button-ba/button-ba.component';
// import { ButtonCAComponent } from 'src/app/part01-reservation/buttons-delete/button-ca/button-ca.component';
// import { ButtonDAComponent } from 'src/app/part01-reservation/buttons-delete/button-da/button-da.component';
// import { ButtonEAComponent } from 'src/app/part01-reservation/buttons-delete/button-ea/button-ea.component';
// import { ButtonFAComponent } from 'src/app/part01-reservation/buttons-delete/button-fa/button-fa.component';
// import { ButtonGAComponent } from 'src/app/part01-reservation/buttons-delete/button-ga/button-ga.component';
// import { ButtonHAComponent } from 'src/app/part01-reservation/buttons-delete/button-ha/button-ha.component';
// import { ButtonIAComponent } from 'src/app/part01-reservation/buttons-delete/button-ia/button-ia.component';
// import { ButtonJAComponent } from 'src/app/part01-reservation/buttons-delete/button-ja/button-ja.component';
// import { ButtonKAComponent } from 'src/app/part01-reservation/buttons-delete/button-ka/button-ka.component';
// import { ButtonLAComponent } from 'src/app/part01-reservation/buttons-delete/button-la/button-la.component';
// import { ButtonMAComponent } from 'src/app/part01-reservation/buttons-delete/button-ma/button-ma.component';
// import { ButtonNAComponent } from 'src/app/part01-reservation/buttons-delete/button-na/button-na.component';
// import { ButtonOAComponent } from 'src/app/part01-reservation/buttons-delete/button-oa/button-oa.component';
// import { ButtonPAComponent } from 'src/app/part01-reservation/buttons-delete/button-pa/button-pa.component';
// import { ButtonQAComponent } from 'src/app/part01-reservation/buttons-delete/button-qa/button-qa.component';
// import { ButtonRAComponent } from 'src/app/part01-reservation/buttons-delete/button-ra/button-ra.component';
// import { ButtonSAComponent } from 'src/app/part01-reservation/buttons-delete/button-sa/button-sa.component';
// import { ButtonTAComponent } from 'src/app/part01-reservation/buttons-delete/button-ta/button-ta.component';
// import { ButtonUAComponent } from 'src/app/part01-reservation/buttons-delete/button-ua/button-ua.component';
// import { ButtonVAComponent } from 'src/app/part01-reservation/buttons-delete/button-va/button-va.component';
// import { ButtonWAComponent } from 'src/app/part01-reservation/buttons-delete/button-wa/button-wa.component';
// import { ButtonXAComponent } from 'src/app/part01-reservation/buttons-delete/button-xa/button-xa.component';
// import { ButtonYAComponent } from 'src/app/part01-reservation/buttons-delete/button-ya/button-ya.component';
// import { ButtonZAComponent } from 'src/app/part01-reservation/buttons-delete/button-za/button-za.component';
// ----
// import { ButtonABComponent } from 'src/app/part01-reservation/buttons-delete/button-ab/button-ab.component';
// import { ButtonBBComponent } from 'src/app/part01-reservation/buttons-delete/button-bb/button-bb.component';
// import { ButtonCBComponent } from 'src/app/part01-reservation/buttons-delete/button-cb/button-cb.component';
// import { ButtonDBComponent } from 'src/app/part01-reservation/buttons-delete/button-db/button-db.component';
// import { ButtonEBComponent } from 'src/app/part01-reservation/buttons-delete/button-eb/button-eb.component';
// import { ButtonFBComponent } from 'src/app/part01-reservation/buttons-delete/button-fb/button-fb.component';

// import { KeyValuePipe } from 'src/app/pipes/key-value.pipe';
// import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

// import { ChartsModule } from 'ng2-charts';
// import { HighchartsChartModule } from "highcharts-angular";

const routes: Routes = [

    /* home */
  {
    path: 'reservation',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/a-reservation/a-reservation.module')
      .then(mod => mod.AReservationModule),
      data: { preload: true, delay:1000 }
  },

  // { path: 'reservation', canActivate: [AuthGuardService], component: Part01ReservationHomeComponent },

  {
    path: 'reservation-home',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-home/reservation-home.module')
      .then(mod => mod.ReservationHomeModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'admin-home',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-admin/reservation-admin.module')
      .then(mod => mod.ReservationAdminModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'client',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-client/reservation-client.module')
      .then(mod => mod.ReservationClientModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'home-admin',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-home-admin/reservation-home-admin.module')
      .then(mod => mod.ReservationHomeAdminModule),
      data: { preload: true, delay:1000 }
  },

    //   { path: 'admin', canActivate: [AuthGuardService], component: ReservationHomeAdminComponent },

{
    path: 'home-hub',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-home-hub/reservation-home-hub.module')
      .then(mod => mod.ReservationHomeHubModule),
      data: { preload: true, delay:1000 }
},

    // { path: 'hub', canActivate: [AuthGuardService], component: ReservationHomeHubComponent },

{
    path: 'home-result',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-home-reserve-seats/reservation-home-reserve-seats.module')
      .then(mod => mod.ReservationHomeReserveSeatsModule),
      data: { preload: true, delay:1000 }
  },

    // { path: 'home-result', canActivate: [AuthGuardService], component: ReservationHomeReserveSeatsComponent }

{
    path: 'picture',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-picture/reservation-picture.module')
      .then(mod => mod.ReservationPictureModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'picture-bis',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-picture-bis/reservation-picture-bis.module')
      .then(mod => mod.ReservationPictureBisModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'picture-ter',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-picture-ter/reservation-picture-ter.module')
      .then(mod => mod.ReservationPictureTerModule),
      data: { preload: true, delay:1000 }
  },
  {
    path: 'date',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-query-date/reservation-query-date.module')
      .then(mod => mod.ReservationQueryDateModule),
      data: { preload: true, delay:1000 }
  },

    // { path: 'date', canActivate: [AuthGuardService], component: ReservationQueryDateComponent },

{
    path: 'graphic',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-query-graphics/reservation-query-graphics.module')
      .then(mod => mod.ReservationQueryGraphicsModule),
      data: { preload: true, delay:1000 }
},

    // { path: 'graphic', canActivate: [AuthGuardService], component: ReservationQueryGraphicsComponent },

{
    path: 'pie',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-query-graphic-pie/reservation-query-graphic-pie.module')
      .then(mod => mod.ReservationQueryGraphicPieModule),
      data: { preload: true, delay:1000 }
},

    // { path: 'pie', canActivate: [AuthGuardService], component: ReservationQueryGraphicPieComponent },

{
    path: 'bar',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-query-graphic-bar/reservation-query-graphic-bar.module')
      .then(mod => mod.ReservationQueryGraphicBarModule),
      data: { preload: true, delay:1000 }
},

    // { path: 'bar', canActivate: [AuthGuardService], component: ReservationQueryGraphicBarComponent },

{
    path: 'polar',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-query-graphic-polararea/reservation-query-graphic-polararea.module')
      .then(mod => mod.ReservationQueryGraphicPolarareaModule),
      data: { preload: true, delay:1000 }
},

    // { path: 'polar', canActivate: [AuthGuardService], component: ReservationQueryGraphicPolarareaComponent }

    {
    path: 'result',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/reservation-result/reservation-result.module')
      .then(mod => mod.ReservationResultModule),
      data: { preload: true, delay:1000 }
    },
    {
    path: 'seats',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/seats/seats/seats.module')
      .then(mod => mod.SeatsModule),
      data: { preload: true, delay:1000 }
},
{
    path: 'seats-start',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/seats/seats-start/seats-start.module')
      .then(mod => mod.SeatsStartModule),
      data: { preload: true, delay:1000 }
},
{
    path: 'seats-start',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('src/app/mod/private/reservation/seats/seats-start/seats-start.module')
      .then(mod => mod.SeatsStartModule),
      data: { preload: true, delay:1000 }
}
];

@NgModule({
    declarations: [
        // Part01ReservationHomeComponent,

        // ReservationClientComponent,
        // ReservationHomeComponent,

        // ReservationHomeHubComponent,

        // ReservationHomeAdminComponent,
        // ReservationAdminComponent,
        
        // ReservationHomeReserveSeatsComponent,

        // ReservationPictureComponent,
        // ReservationPictureBisComponent,
        // ReservationPictureTerComponent,

        // ButtonAAComponent,
        // ButtonBAComponent,
        // ButtonCAComponent,
        // ButtonDAComponent,
        // ButtonEAComponent,
        // ButtonFAComponent,
        // ButtonGAComponent,
        // ButtonHAComponent,
        // ButtonIAComponent,
        // ButtonJAComponent,
        // ButtonKAComponent,
        // ButtonLAComponent,
        // ButtonMAComponent,
        // ButtonNAComponent,
        // ButtonOAComponent,
        // ButtonPAComponent,
        // ButtonQAComponent,
        // ButtonRAComponent,
        // ButtonSAComponent,
        // ButtonTAComponent,
        // ButtonUAComponent,
        // ButtonVAComponent,
        // ButtonWAComponent,
        // ButtonXAComponent,
        // ButtonYAComponent,
        // ButtonZAComponent,

        // ButtonABComponent,
        // ButtonBBComponent,
        // ButtonCBComponent,
        // ButtonDBComponent,
        // ButtonEBComponent,
        // ButtonFBComponent,
        
        // ReservationQueryDateComponent,

        // ReservationQueryGraphicsComponent,
        // ReservationQueryGraphicPieComponent,
        // ReservationQueryGraphicBarComponent,
        // ReservationQueryGraphicPolarareaComponent,

        // SeatsStartComponent,
        // SeatsComponent,

        // ReservationResultComponent,

        // KeyValuePipe,
        // ValueArrayPipe
    ],
    imports: [
        RouterModule.forRoot(routes,
            { preloadingStrategy: AuthPreloadStrategy }),
        LazyLoadImageModule,
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        CommonFormReactiveModule
        // ChartsModule,
        // HighchartsChartModule
    ],
    exports: [
        RouterModule
    ],
    providers: [
        LazyImgDirective,
        AuthPreloadStrategy
    ]
})

export class Part01ReservationModule {
    constructor() {
        registerLocaleData(fr.default);
    }
 }