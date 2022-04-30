import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-order-reservation-list-query-graphic-pie',
  templateUrl: './order-reservation-list-query-graphic-pie.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryGraphicPieComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['USA'], ['France'], ['Belgique'], ['Espagne'], ['UK'], ['Allemagne'], ['Canada']];
  public pieChartData: SingleDataSet = [2, 80, 6, 4, 3, 3, 2];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {}

}
