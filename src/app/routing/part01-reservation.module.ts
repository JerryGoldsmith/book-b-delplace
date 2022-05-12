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

import { Part01ReservationHomeComponent } from 'src/app/part01-reservation-home/part01-reservation-home.component';

import { SeatsStartComponent } from 'src/app/modules/seats-start/seats-start.component';
import { SeatsComponent } from 'src/app/modules/seats/seats.component';

// reservation

import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';

import { ReservationResultComponent } from 'src/app/part01-reservation/reservation-result/reservation-result.component';

import { ReservationHomeComponent } from 'src/app/part01-reservation/reservation-home/reservation-home.component';
import { ReservationHomeHubComponent } from 'src/app/part01-reservation/reservation-home-hub/reservation-home-hub.component';
import { ReservationHomeAdminComponent } from 'src/app/part01-reservation/reservation-home-admin/reservation-home-admin.component';

import { ReservationAdminComponent } from 'src/app/part01-reservation/reservation-admin/reservation-admin.component';

import { ReservationHomeReserveSeatsComponent } from 'src/app/part01-reservation/reservation-home-reserve-seats/reservation-home-reserve-seats.component';

import { ReservationPictureComponent } from 'src/app/part01-reservation/reservation-picture/reservation-picture.component';
import { ReservationPictureBisComponent } from 'src/app/part01-reservation/reservation-picture-bis/reservation-picture-bis.component';
import { ReservationPictureTerComponent } from 'src/app/part01-reservation/reservation-picture-ter/reservation-picture-ter.component';

import { ReservationListQueryDateComponent } from 'src/app/part01-reservation/reservation-list-query-date/reservation-list-query-date.component';

import { ReservationListQueryGraphicsComponent } from 'src/app/part01-reservation/reservation-list-query-graphics/reservation-list-query-graphics.component';
import { ReservationListQueryGraphicPieComponent } from 'src/app/part01-reservation/reservation-list-query-graphic-pie/reservation-list-query-graphic-pie.component';
import { ReservationListQueryGraphicBarComponent } from 'src/app/part01-reservation/reservation-list-query-graphic-bar/reservation-list-query-graphic-bar.component';
import { ReservationListQueryGraphicPolarareaComponent } from 'src/app/part01-reservation/reservation-list-query-graphic-polararea/reservation-list-query-graphic-polararea.component';

import { ButtonAAComponent } from 'src/app/part01-reservation/buttons-delete/button-aa/button-aa.component';
import { ButtonBAComponent } from 'src/app/part01-reservation/buttons-delete/button-ba/button-ba.component';
import { ButtonCAComponent } from 'src/app/part01-reservation/buttons-delete/button-ca/button-ca.component';
import { ButtonDAComponent } from 'src/app/part01-reservation/buttons-delete/button-da/button-da.component';
import { ButtonEAComponent } from 'src/app/part01-reservation/buttons-delete/button-ea/button-ea.component';
import { ButtonFAComponent } from 'src/app/part01-reservation/buttons-delete/button-fa/button-fa.component';
import { ButtonGAComponent } from 'src/app/part01-reservation/buttons-delete/button-ga/button-ga.component';
import { ButtonHAComponent } from 'src/app/part01-reservation/buttons-delete/button-ha/button-ha.component';
import { ButtonIAComponent } from 'src/app/part01-reservation/buttons-delete/button-ia/button-ia.component';
import { ButtonJAComponent } from 'src/app/part01-reservation/buttons-delete/button-ja/button-ja.component';
import { ButtonKAComponent } from 'src/app/part01-reservation/buttons-delete/button-ka/button-ka.component';
import { ButtonLAComponent } from 'src/app/part01-reservation/buttons-delete/button-la/button-la.component';
import { ButtonMAComponent } from 'src/app/part01-reservation/buttons-delete/button-ma/button-ma.component';
import { ButtonNAComponent } from 'src/app/part01-reservation/buttons-delete/button-na/button-na.component';
import { ButtonOAComponent } from 'src/app/part01-reservation/buttons-delete/button-oa/button-oa.component';
import { ButtonPAComponent } from 'src/app/part01-reservation/buttons-delete/button-pa/button-pa.component';
import { ButtonQAComponent } from 'src/app/part01-reservation/buttons-delete/button-qa/button-qa.component';
import { ButtonRAComponent } from 'src/app/part01-reservation/buttons-delete/button-ra/button-ra.component';
import { ButtonSAComponent } from 'src/app/part01-reservation/buttons-delete/button-sa/button-sa.component';
import { ButtonTAComponent } from 'src/app/part01-reservation/buttons-delete/button-ta/button-ta.component';
import { ButtonUAComponent } from 'src/app/part01-reservation/buttons-delete/button-ua/button-ua.component';
import { ButtonVAComponent } from 'src/app/part01-reservation/buttons-delete/button-va/button-va.component';
import { ButtonWAComponent } from 'src/app/part01-reservation/buttons-delete/button-wa/button-wa.component';
import { ButtonXAComponent } from 'src/app/part01-reservation/buttons-delete/button-xa/button-xa.component';
import { ButtonYAComponent } from 'src/app/part01-reservation/buttons-delete/button-ya/button-ya.component';
import { ButtonZAComponent } from 'src/app/part01-reservation/buttons-delete/button-za/button-za.component';
// ----
import { ButtonABComponent } from 'src/app/part01-reservation/buttons-delete/button-ab/button-ab.component';
import { ButtonBBComponent } from 'src/app/part01-reservation/buttons-delete/button-bb/button-bb.component';
import { ButtonCBComponent } from 'src/app/part01-reservation/buttons-delete/button-cb/button-cb.component';
import { ButtonDBComponent } from 'src/app/part01-reservation/buttons-delete/button-db/button-db.component';
import { ButtonEBComponent } from 'src/app/part01-reservation/buttons-delete/button-eb/button-eb.component';
import { ButtonFBComponent } from 'src/app/part01-reservation/buttons-delete/button-fb/button-fb.component';

import { KeyValuePipe } from 'src/app/pipes/key-value.pipe';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from "highcharts-angular";

const routes: Routes = [
    { path: 'reservation', canActivate: [AuthGuardService], component: Part01ReservationHomeComponent },

    { path: 'hub', canActivate: [AuthGuardService], component: ReservationHomeHubComponent },
    { path: 'admin', canActivate: [AuthGuardService], component: ReservationHomeAdminComponent },

    { path: 'date', canActivate: [AuthGuardService], component: ReservationListQueryDateComponent },

    { path: 'graphic', canActivate: [AuthGuardService], component: ReservationListQueryGraphicsComponent },
    { path: 'pie', canActivate: [AuthGuardService], component: ReservationListQueryGraphicPieComponent },
    { path: 'bar', canActivate: [AuthGuardService], component: ReservationListQueryGraphicBarComponent },
    { path: 'polar', canActivate: [AuthGuardService], component: ReservationListQueryGraphicPolarareaComponent },

    { path: 'home-result', canActivate: [AuthGuardService], component: ReservationHomeReserveSeatsComponent }
    // { path: 'show', canActivate: [AuthGuardService], component: ReservationResultComponent },
    // { path: 'confirmation', canActivate: [AuthGuardService], component: ReservationResultComponent }
];

@NgModule({
    declarations: [
        Part01ReservationHomeComponent,

        ReservationClientComponent,
        ReservationHomeComponent,

        ReservationHomeHubComponent,

        ReservationHomeAdminComponent,
        ReservationAdminComponent,
        
        ReservationHomeReserveSeatsComponent,

        ReservationPictureComponent,
        ReservationPictureBisComponent,
        ReservationPictureTerComponent,

        ButtonAAComponent,
        ButtonBAComponent,
        ButtonCAComponent,
        ButtonDAComponent,
        ButtonEAComponent,
        ButtonFAComponent,
        ButtonGAComponent,
        ButtonHAComponent,
        ButtonIAComponent,
        ButtonJAComponent,
        ButtonKAComponent,
        ButtonLAComponent,
        ButtonMAComponent,
        ButtonNAComponent,
        ButtonOAComponent,
        ButtonPAComponent,
        ButtonQAComponent,
        ButtonRAComponent,
        ButtonSAComponent,
        ButtonTAComponent,
        ButtonUAComponent,
        ButtonVAComponent,
        ButtonWAComponent,
        ButtonXAComponent,
        ButtonYAComponent,
        ButtonZAComponent,

        ButtonABComponent,
        ButtonBBComponent,
        ButtonCBComponent,
        ButtonDBComponent,
        ButtonEBComponent,
        ButtonFBComponent,
        
        ReservationListQueryDateComponent,

        ReservationListQueryGraphicsComponent,
        ReservationListQueryGraphicPieComponent,
        ReservationListQueryGraphicBarComponent,
        ReservationListQueryGraphicPolarareaComponent,

        SeatsStartComponent,
        SeatsComponent,

        ReservationResultComponent,

        KeyValuePipe,
        ValueArrayPipe
    ],
    imports: [
        RouterModule.forRoot(routes,
            { preloadingStrategy: AuthPreloadStrategy }),
        LazyLoadImageModule,
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        CommonFormReactiveModule,
        ChartsModule,
        HighchartsChartModule
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