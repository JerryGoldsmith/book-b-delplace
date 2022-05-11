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

import { OrderReservationHomeComponent } from 'src/app/order-reservation-home/order-reservation-home.component';
import { OrderReservationHomeHubComponent } from 'src/app/order-reservation-home-hub/order-reservation-home-hub.component';
import { OrderReservationHomeAdminComponent } from 'src/app/order-reservation-home-admin/order-reservation-home-admin.component';

import { OrderReservationAdminComponent } from 'src/app/order-reservation-admin/order-reservation-admin.component';

import { OrderReservationHomeReserveSeatsComponent } from 'src/app/order-reservation-home-reserve-seats/order-reservation-home-reserve-seats.component';

import { OrderReservationPictureComponent } from 'src/app/order-reservation-picture/order-reservation-picture.component';
import { OrderReservationPictureBisComponent } from 'src/app/order-reservation-picture-bis/order-reservation-picture-bis.component';
import { OrderReservationPictureTerComponent } from 'src/app/order-reservation-picture-ter/order-reservation-picture-ter.component';

import { OrderReservationListQueryDateComponent } from 'src/app/order-reservation-list-query-date/order-reservation-list-query-date.component';

import { OrderReservationListQueryGraphicsComponent } from 'src/app/order-reservation-list-query-graphics/order-reservation-list-query-graphics.component';
import { OrderReservationListQueryGraphicPieComponent } from 'src/app/order-reservation-list-query-graphic-pie/order-reservation-list-query-graphic-pie.component';
import { OrderReservationListQueryGraphicBarComponent } from 'src/app/order-reservation-list-query-graphic-bar/order-reservation-list-query-graphic-bar.component';
import { OrderReservationListQueryGraphicPolarareaComponent } from 'src/app/order-reservation-list-query-graphic-polararea/order-reservation-list-query-graphic-polararea.component';

import { OrderReservationComponent } from 'src/app/order-reservation/order-reservation.component';
import { ButtonAAComponent } from 'src/app/order-reservation/buttons-delete/button-aa/button-aa.component';
import { ButtonBAComponent } from 'src/app/order-reservation/buttons-delete/button-ba/button-ba.component';
import { ButtonCAComponent } from 'src/app/order-reservation/buttons-delete/button-ca/button-ca.component';
import { ButtonDAComponent } from 'src/app/order-reservation/buttons-delete/button-da/button-da.component';
import { ButtonEAComponent } from 'src/app/order-reservation/buttons-delete/button-ea/button-ea.component';
import { ButtonFAComponent } from 'src/app/order-reservation/buttons-delete/button-fa/button-fa.component';
import { ButtonGAComponent } from 'src/app/order-reservation/buttons-delete/button-ga/button-ga.component';
import { ButtonHAComponent } from 'src/app/order-reservation/buttons-delete/button-ha/button-ha.component';
import { ButtonIAComponent } from 'src/app/order-reservation/buttons-delete/button-ia/button-ia.component';
import { ButtonJAComponent } from 'src/app/order-reservation/buttons-delete/button-ja/button-ja.component';
import { ButtonKAComponent } from 'src/app/order-reservation/buttons-delete/button-ka/button-ka.component';
import { ButtonLAComponent } from 'src/app/order-reservation/buttons-delete/button-la/button-la.component';
import { ButtonMAComponent } from 'src/app/order-reservation/buttons-delete/button-ma/button-ma.component';
import { ButtonNAComponent } from 'src/app/order-reservation/buttons-delete/button-na/button-na.component';
import { ButtonOAComponent } from 'src/app/order-reservation/buttons-delete/button-oa/button-oa.component';
import { ButtonPAComponent } from 'src/app/order-reservation/buttons-delete/button-pa/button-pa.component';
import { ButtonQAComponent } from 'src/app/order-reservation/buttons-delete/button-qa/button-qa.component';
import { ButtonRAComponent } from 'src/app/order-reservation/buttons-delete/button-ra/button-ra.component';
import { ButtonSAComponent } from 'src/app/order-reservation/buttons-delete/button-sa/button-sa.component';
import { ButtonTAComponent } from 'src/app/order-reservation/buttons-delete/button-ta/button-ta.component';
import { ButtonUAComponent } from 'src/app/order-reservation/buttons-delete/button-ua/button-ua.component';
import { ButtonVAComponent } from 'src/app/order-reservation/buttons-delete/button-va/button-va.component';
import { ButtonWAComponent } from 'src/app/order-reservation/buttons-delete/button-wa/button-wa.component';
import { ButtonXAComponent } from 'src/app/order-reservation/buttons-delete/button-xa/button-xa.component';
import { ButtonYAComponent } from 'src/app/order-reservation/buttons-delete/button-ya/button-ya.component';
import { ButtonZAComponent } from 'src/app/order-reservation/buttons-delete/button-za/button-za.component';
// ----
import { ButtonABComponent } from 'src/app/order-reservation/buttons-delete/button-ab/button-ab.component';
import { ButtonBBComponent } from 'src/app/order-reservation/buttons-delete/button-bb/button-bb.component';
import { ButtonCBComponent } from 'src/app/order-reservation/buttons-delete/button-cb/button-cb.component';
import { ButtonDBComponent } from 'src/app/order-reservation/buttons-delete/button-db/button-db.component';
import { ButtonEBComponent } from 'src/app/order-reservation/buttons-delete/button-eb/button-eb.component';
import { ButtonFBComponent } from 'src/app/order-reservation/buttons-delete/button-fb/button-fb.component';

import { OrderReservationResultComponent } from 'src/app/order-reservation-result/order-reservation-result.component';

import { KeyValuePipe } from 'src/app/pipes/key-value.pipe';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from "highcharts-angular";

const routes: Routes = [
    { path: 'reservation', canActivate: [AuthGuardService], component: Part01ReservationHomeComponent },

    { path: 'hub', canActivate: [AuthGuardService], component: OrderReservationHomeHubComponent },
    { path: 'admin', canActivate: [AuthGuardService], component: OrderReservationHomeAdminComponent },

    { path: 'date', canActivate: [AuthGuardService], component: OrderReservationListQueryDateComponent },

    { path: 'graphic', canActivate: [AuthGuardService], component: OrderReservationListQueryGraphicsComponent },
    { path: 'pie', canActivate: [AuthGuardService], component: OrderReservationListQueryGraphicPieComponent },
    { path: 'bar', canActivate: [AuthGuardService], component: OrderReservationListQueryGraphicBarComponent },
    { path: 'polar', canActivate: [AuthGuardService], component: OrderReservationListQueryGraphicPolarareaComponent },

    { path: 'home-result', canActivate: [AuthGuardService], component: OrderReservationHomeReserveSeatsComponent },
    { path: 'show', canActivate: [AuthGuardService], component: OrderReservationResultComponent },
    { path: 'confirmation', canActivate: [AuthGuardService], component: OrderReservationResultComponent }
];

@NgModule({
    declarations: [
        Part01ReservationHomeComponent,
        OrderReservationHomeComponent,

        OrderReservationHomeHubComponent,

        OrderReservationHomeAdminComponent,
        OrderReservationAdminComponent,
        
        OrderReservationHomeReserveSeatsComponent,

        OrderReservationPictureComponent,
        OrderReservationPictureBisComponent,
        OrderReservationPictureTerComponent,

        OrderReservationComponent,
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
        
        OrderReservationListQueryDateComponent,

        OrderReservationListQueryGraphicsComponent,
        OrderReservationListQueryGraphicPieComponent,
        OrderReservationListQueryGraphicBarComponent,
        OrderReservationListQueryGraphicPolarareaComponent,

        SeatsStartComponent,
        SeatsComponent,

        OrderReservationResultComponent,

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
        RouterModule,
        OrderReservationComponent
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