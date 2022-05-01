import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-order-reservation-list-query-graphics',
  templateUrl: './order-reservation-list-query-graphics.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryGraphicsComponent implements OnInit {

  public chart_Options: ChartOptions = {
    responsive: true,
  };
  public chart_Labels: Label[] = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'];
  public chart_Type: ChartType = 'bar';
  public chart_Legend = true;
  public chart_Plugins = [];

  public chart_Data: ChartDataSets[] = [
    {
      data: [60, 65, 67, 70, 75, 80, 90],
      label: 'France'
    },
    {
      data: [54, 50, 48, 47, 49, 44, 40],
      label: 'Belgique'
    },
    {
      data: [40, 43, 30, 28, 25, 22, 20],
      label: 'UK'
    },
    {
      data: [44, 40, 32, 40, 30, 28, 22],
      label: 'USA'
    },
    {
      data: [77, 70, 38, 28, 27, 23, 19],
      label: 'Espagne'
    },
    {
      data: [34, 30, 18, 48, 27, 63, 39],
      label: 'Italie'
    },
    {
      data: [32, 30, 18, 48, 27, 63, 39],
      label: 'Allemagne'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  getChart() {
    
  }

}
