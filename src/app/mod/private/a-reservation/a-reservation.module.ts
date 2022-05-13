import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AReservationRoutingModule } from './a-reservation-routing.module';
import { Part01ReservationHomeComponent } from 'src/app/part01-reservation-home/part01-reservation-home.component';

import { ReservationHomeComponent } from 'src/app/part01-reservation/reservation-home/reservation-home.component';

import { ReservationClientComponent } from 'src/app/part01-reservation/reservation-client/reservation-client.component';
import { ReservationPictureComponent } from 'src/app/part01-reservation/reservation-picture/reservation-picture.component';

import { SeatsStartComponent } from 'src/app/part01-reservation/seats/seats-start/seats-start.component';

import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from "highcharts-angular";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KeyValuePipeModule } from 'src/app/routing/key-value-pipe.module';
import { ValueArrayPipeModule } from 'src/app/routing/value-array-pipe.module';


@NgModule({
  declarations: [
    Part01ReservationHomeComponent,
    ReservationHomeComponent,
    ReservationClientComponent,
    ReservationPictureComponent,
    SeatsStartComponent
  ],
  imports: [
    CommonModule,
    AReservationRoutingModule,
    LazyLoadImageModule,
    ChartsModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
    KeyValuePipeModule,
    ValueArrayPipeModule
  ],
  exports: [
    Part01ReservationHomeComponent,
    ReservationHomeComponent,
    ReservationClientComponent,
    ReservationPictureComponent,
    SeatsStartComponent
  ]
})
export class AReservationModule { }
