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

    /* refresh page */

    if(!window.location.hash) {
      //@ts-ignore
      window.location = window.location + '#loaded';
      window.location.reload();
   }

   // ------

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
    this.seatsChart = new Chart(ctx, {
        // type: 'doughnut',
        type: 'bar',
        // type: 'line',
        // type: 'pie',
        data: {
            labels: this.charcountry,
            datasets: [{
                // label: ['Spectateur français'],
                data: this.chardata,
                backgroundColor: this.charcolor,
                borderColor: this.charcolor,
                borderWidth: 1
              }
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
              display: false
              // labels: {
              //     fontFamily: "Cormorant_Garamond_Light",
              //     fontColor: 'white',
              //     fontSize: 28,
              // }
            }
        }
    });
  }



}
