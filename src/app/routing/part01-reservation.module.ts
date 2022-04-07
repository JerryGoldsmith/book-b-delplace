import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonFormReactiveModule } from 'src/app/routing/common-form-reactive.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from "@angular/common/locales/fr"; // date

// lazy load images
import { LazyImgDirective } from 'src/app/helpers/lazy-img.directive';
import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// guard
import { AuthGuardService } from './../services/auth-guard.service';

import { Part01ReservationHomeComponent } from 'src/app/part01-reservation-home/part01-reservation-home.component';

import { SeatsComponent } from 'src/app/modules/seats/seats.component';

// reservation

import { OrderReservationHomeComponent } from 'src/app/order-reservation-home/order-reservation-home.component';
import { OrderReservationHomeAdminComponent } from 'src/app/order-reservation-home-admin/order-reservation-home-admin.component';
import { OrderReservationHomeReserveSeatsComponent } from 'src/app/order-reservation-home-reserve-seats/order-reservation-home-reserve-seats.component';

import { OrderReservationPictureComponent } from 'src/app/order-reservation-picture/order-reservation-picture.component';
import { OrderReservationPictureBisComponent } from 'src/app/order-reservation-picture-bis/order-reservation-picture-bis.component';
import { OrderReservationPictureTerComponent } from 'src/app/order-reservation-picture-ter/order-reservation-picture-ter.component';

import { OrderReservationListComponent } from 'src/app/order-reservation-list/order-reservation-list.component';
import { OrderReservationComponent } from 'src/app/order-reservation/order-reservation.component';

import { OrderReservationResultComponent } from 'src/app/order-reservation-result/order-reservation-result.component';

import { KeyValuePipe } from 'src/app/pipes/key-value.pipe';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

const routes: Routes = [
    { path: 'reservation', canActivate: [AuthGuardService], component: Part01ReservationHomeComponent },
    { path: 'admin', canActivate: [AuthGuardService], component: OrderReservationHomeAdminComponent },
    { path: 'home-result', canActivate: [AuthGuardService], component: OrderReservationHomeReserveSeatsComponent },
    { path: 'show', canActivate: [AuthGuardService], component: OrderReservationResultComponent },
    { path: 'confirmation', canActivate: [AuthGuardService], component: OrderReservationResultComponent }
];

@NgModule({
    declarations: [
        Part01ReservationHomeComponent,
        OrderReservationHomeComponent,
        OrderReservationHomeAdminComponent,
        OrderReservationHomeReserveSeatsComponent,

        OrderReservationPictureComponent,
        OrderReservationPictureBisComponent,
        OrderReservationPictureTerComponent,

        OrderReservationComponent,
        OrderReservationListComponent,

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
        CommonFormReactiveModule
    ],
    exports: [
        RouterModule,
        OrderReservationListComponent,
        OrderReservationComponent
    ],
    providers: [
        LazyImgDirective,
        AuthPreloadStrategy
    ]
})

export class Part01ReservationModule { }