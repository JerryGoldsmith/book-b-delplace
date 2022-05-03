import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { AngularFirestore } from '@angular/fire/firestore';
import Chart from 'chart.js';
import { HighchartFranceService, chartModal } from "../services/highchart-france.service";
import * as Highcharts from "highcharts-angular";

@Component({
  selector: 'app-order-reservation-list-query-graphic-bar',
  templateUrl: './order-reservation-list-query-graphic-bar.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryGraphicBarComponent implements OnInit {

  myChart: Chart;

  title = "Firestore-Angular-Highcharts";
  items$: chartModal[];
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [];
  charcountry: any[] = [];
  charcolor: any[] = [];
  chartOptions: any;

  constructor(
    public reservationService: OrderReservationService,
    private afs: AngularFirestore,
    private highchartservice: HighchartFranceService
  ) {}

  ngOnInit(): void {

   this.highchartservice.customerAge$.subscribe((assets) => {
      this.items$ = assets;
      if (this.items$) {
        this.items$.forEach((element) => {
          this.chardata.push(element.customerAge);
        });
        
        // customerCountry
        this.highchartservice.customerCountry$.subscribe((assets) => {
          this.items$ = assets;
          if (this.items$) {
            this.items$.forEach((element) => {
              this.charcountry.push(element.customerCountry);
            });

            // color
            this.highchartservice.color$.subscribe((assets) => {
              this.items$ = assets;
              if (this.items$) {
                this.items$.forEach((element) => {
                  this.charcolor.push(element.color);
                });
    
                this.getChart();
              }
            });
          }
        });
      }
    });

    // ----
  }

  getChart() {
    const ctx = document.getElementById('seatsChart');
    //@ts-ignore
    this.myChart = new Chart(ctx, {
        // type: 'doughnut',
        type: 'bar',
        // type: 'line',
        // type: 'pie',
        data: {
            labels: this.charcountry,
            datasets: [{
                label: ['Spectateur français'],
                // data: [2, 89, 33, 25, 44, 3],
                data: this.chardata,
                backgroundColor: this.charcolor,
                borderColor: this.charcolor,
                // backgroundColor: [
                //   // France
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(255, 99, 132, 0.2)',

                //   // Iran
                // // 'rgba(54, 162, 235, 0.2)',

                // // 'rgba(255, 206, 86, 0.2)',
                // // 'rgba(75, 192, 192, 0.2)',
                // // 'rgba(153, 102, 255, 0.2)',
                // // 'rgba(255, 159, 64, 0.2)',
                // // 'rgba(255, 99, 132, 0.2)',
                // // 'rgba(54, 162, 235, 0.2)',
                // // 'rgba(255, 206, 86, 0.2)',
                // // 'rgba(75, 192, 192, 0.2)',
                // // 'rgba(153, 102, 255, 0.2)',
                // // 'rgba(255, 159, 64, 0.2)',
                // // 'rgba(255, 99, 132, 0.2)',
                // // 'rgba(54, 162, 235, 0.2)',
                // // 'rgba(255, 206, 86, 0.2)',
                // // 'rgba(75, 192, 192, 0.2)',
                // // 'rgba(153, 102, 255, 0.2)',
                // // 'rgba(255, 159, 64, 0.2)',
                // // 'rgba(255, 159, 64, 0.2)',
                // ],
                // borderColor: [
                //   // France
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(255, 99, 132, 1)',

                //   // Iran
                // // 'rgba(54, 162, 235, 1)',

                // // 'rgba(255, 206, 86, 1)',
                // // 'rgba(75, 192, 192, 1)',
                // // 'rgba(153, 102, 255, 1)',
                // // 'rgba(255, 159, 64, 1)',
                // // 'rgba(255, 99, 132, 1)',
                // // 'rgba(54, 162, 235, 1)',
                // // 'rgba(255, 206, 86, 1)',
                // // 'rgba(75, 192, 192, 1)',
                // // 'rgba(153, 102, 255, 1)',
                // // 'rgba(255, 159, 64, 1)',
                // // 'rgba(255, 99, 132, 1)',
                // // 'rgba(54, 162, 235, 1)',
                // // 'rgba(255, 206, 86, 1)',
                // // 'rgba(75, 192, 192, 1)',
                // // 'rgba(153, 102, 255, 1)',
                // // 'rgba(255, 159, 64, 1)',
                // // 'rgba(255, 159, 64, 0.2)',
                // ],
                borderWidth: 1
              },
              // {
              //   label: ['Iran'],
              //   backgroundColor: [
              //     'rgba(54, 162, 235, 0.2)'
              //     ],
              //     borderColor: [
              //     'rgba(54, 162, 235, 1)'
              //     ],
              //     borderWidth: 1
              // }
            ]
        },
        options: {
            scales: {
              // display: false
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
              // display: false
              labels: {
                  fontFamily: "Cormorant_Garamond_Light",
                  fontColor: 'white',
                  fontSize: 28,
              }
            }
            // parsing: {
            //   key: 'nested.value'
            // }
        }
    });
  }



}
