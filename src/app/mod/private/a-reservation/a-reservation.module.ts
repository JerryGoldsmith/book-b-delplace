import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AReservationRoutingModule } from './a-reservation-routing.module';
import { Part01ReservationHomeComponent } from 'src/app/part01-reservation-home/part01-reservation-home.component';

import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from "highcharts-angular";


@NgModule({
  declarations: [
    Part01ReservationHomeComponent
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
