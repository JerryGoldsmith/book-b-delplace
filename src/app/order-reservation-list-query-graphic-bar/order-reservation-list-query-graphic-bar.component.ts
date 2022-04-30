import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { Subscription } from 'rxjs/Subscription';
import { DocumentChangeAction } from '@angular/fire/firestore';
import Chart from 'chart.js';
import { ChartDataSets } from 'chart.js';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-order-reservation-list-query-graphic-bar',
  templateUrl: './order-reservation-list-query-graphic-bar.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryGraphicBarComponent implements OnInit {

  seatOneOrder = [];
  seatOneOrders: DocumentChangeAction<unknown>[];

  // realtime
  seatOneSubscription: Subscription;
  seatOnes: Array<any> = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['USA'], ['France'], ['Belgique'], ['Espagne'], ['UK'], ['Allemagne'], ['Canada']];
  public pieChartData: SingleDataSet = [2, 80, 6, 4, 3, 3, 2];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(
    public reservationService: OrderReservationService
  ) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {

    // realtime database
    this.seatOneSubscription = this.reservationService.seatOneSubject
    .subscribe(
      (seatOnes: any[]) => {
        this.seatOnes = seatOnes;
      }
    );
    this.reservationService.emitSeatOneSubject();

    // ----


    const ctx = document.getElementById('myChart');
    //@ts-ignore
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            // labels: [{id: 'seatOneOrders', nested: {value: 32}}, {id: 'customerCountry', nested: {value: 500}}],
            labels: ['USA', 'France', 'Espagne', 'Italie', 'Allemagne', 'Canada'],
            datasets: [{
                label: 'France',
                data: [2, 89, 33, 25, 44, 3],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            options: {
              layout: {
                  padding: 20
              }
            },
            legend: {
              labels: {
                  fontFamily: "Cormorant_Garamond_Light",
                  fontColor: 'white',
                  fontSize: 28,
              }
            },
            parsing: {
              key: 'nested.value'
            }
        }
    });
  }

}
