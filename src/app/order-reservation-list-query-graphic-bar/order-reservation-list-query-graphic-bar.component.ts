import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { AngularFirestore } from '@angular/fire/firestore';
import Chart from 'chart.js';
import { HighchartFranceUsaAgeService, chartModal } from "../services/highchart-france-usa-age.service";
import * as Highcharts from "highcharts-angular";

@Component({
  selector: 'app-order-reservation-list-query-graphic-bar',
  templateUrl: './order-reservation-list-query-graphic-bar.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryGraphicBarComponent implements OnInit {

  seatsChart: Chart;

  title = "Firestore-Angular-Highcharts";
  items$: chartModal[];
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [];
  charage: any[] = [];
  charcountry: any[] = [];
  charcolor: any[] = [];
  charlegend: any[] = [];
  chartOptions: any;

  constructor(
    public reservationService: OrderReservationService,
    private afs: AngularFirestore,
    private highchartservice: HighchartFranceUsaAgeService
  ) {}

  ngOnInit(): void {

    /* refresh page */
    if(!window.location.hash) {
      //@ts-ignore
      window.location = window.location + '#loaded';
      window.location.reload();
   }

   // ------

    // customerAge
    this.highchartservice.customerAge$.subscribe((assets) => {
      this.items$ = assets;
      if (this.items$) {
        this.items$.forEach((element) => {
          this.chardata.push(element.customerAge);
        });
        
        this.highchartservice.customerCountry$.subscribe((assets) => {
          this.items$ = assets;
          if (this.items$) {
            this.items$.forEach((element) => {
              this.charcountry.push(element.customerCountry);
            });
    
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
  }

  getChart() {
    const ctx = document.getElementById('seatsChart');
    //@ts-ignore
    this.seatsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: this.charcountry,
            datasets: [
              {
                // label: this.charcountry,
                backgroundColor: this.charcolor,
                borderColor: 'rgba(255, 99, 132, 0.2)',
                data: this.chardata,
                borderWidth: 0
              }
            ]
        },
        options: {
          responsive: true,
          // maintainAspectRatio: false,
          // tooltips: {
          //   mode: 'index',
          //   intersect: true
          // },
            scales: {
              xAxes: [{
                stacked: false,
                display: false
              }],
              yAxes: [{
                stacked: false,
                display: false
              }]
              
              // display: false
                // y: { // bar
                //     beginAtZero: true
                // }
            },
            options: {
              // layout: {
              //   padding: 20
              // }
            },
            layout: {
              padding: {
                 bottom   : 20
              }
            },
            animation: {
              duration : 1000
            },
            legend: {
              display: false,
              // display: this.charcountry.length <= 32,
              // position: "top",
              // labels: {
              //     fontFamily: "Cormorant_Garamond_Light",
              //     fontColor: 'white',
              //     fontSize: 26,
              // }
            },
            elements: {
              arc: {
                  borderWidth: 0
              },
              // line: { // radar
              //   borderWidth: 3
              // }
          }
        }
    });
  }
}
