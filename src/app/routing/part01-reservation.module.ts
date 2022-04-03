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

// import { OrderListComponent } from 'src/app/order-list/order-list.component';
// import { OrdersComponent } from 'src/app/orders/orders.component';

// import { OrderReservationOrchestreComponent } from './order-reservation/order-reservation-orchestre.component';

import { SeatsComponent } from 'src/app/modules/seats/seats.component';

import { EditSeatComponent } from 'src/app/edits/edit-seat/edit-seat.component';

// reservation

import { OrderReservationHomeComponent } from 'src/app/order-reservation-home/order-reservation-home.component';
import { OrderReservationListComponent } from 'src/app/order-reservation-list/order-reservation-list.component';
import { OrderReservationComponent } from 'src/app/order-reservation/order-reservation.component';

import { OrderReservationConfirmationComponent } from 'src/app/order-reservation-confirmation/order-reservation-confirmation.component';
import { OrderReservationListConfirmComponent } from 'src/app/order-reservation-list-confirm/order-reservation-list-confirm.component';
import { OrderReservationShowResultComponent } from 'src/app/order-reservation-show-result/order-reservation-show-result.component';
import { OrderReservationResultComponent } from 'src/app/order-reservation-result/order-reservation-result.component';
import { SeatsOrchestreComponent } from 'src/app/modules/seats-orchestre/seats-orchestre.component';
import { ButtonValidationComponent } from 'src/app/modules/button-validation/button-validation.component';

import { KeyValuePipe } from 'src/app/pipes/key-value.pipe';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

const routes: Routes = [
    { path: 'reservation', canActivate: [AuthGuardService], component: Part01ReservationHomeComponent },
    { path: 'show', component: OrderReservationResultComponent },
    { path: 'result', component: OrderReservationShowResultComponent },
    { path: 'confirmation', component: OrderReservationResultComponent }
];

@NgModule({
    declarations: [
        Part01ReservationHomeComponent,
        // OrderListComponent,
        // OrdersComponent,
        OrderReservationHomeComponent,
        OrderReservationListComponent,
        OrderReservationComponent,
        SeatsComponent,
        EditSeatComponent,
        OrderReservationConfirmationComponent,
        OrderReservationListConfirmComponent,
        OrderReservationShowResultComponent,
        OrderReservationResultComponent,
        SeatsOrchestreComponent,
        ButtonValidationComponent,
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