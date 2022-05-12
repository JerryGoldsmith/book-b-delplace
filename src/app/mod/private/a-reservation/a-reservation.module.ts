import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AReservationRoutingModule } from './a-reservation-routing.module';
import { Part01ReservationHomeComponent } from 'src/app/part01-reservation-home/part01-reservation-home.component';

import { KeyValuePipe } from 'src/app/pipes/key-value.pipe';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from "highcharts-angular";


@NgModule({
  declarations: [
    Part01ReservationHomeComponent,
    KeyValuePipe,
    ValueArrayPipe
  ],
  imports: [
    CommonModule,
    AReservationRoutingModule,
    LazyLoadImageModule,
    ChartsModule,
    HighchartsChartModule
  ],
  exports: [
    Part01ReservationHomeComponent
  ]
})
export class AReservationModule { }
