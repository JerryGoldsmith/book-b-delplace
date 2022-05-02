import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import { AngularFirestore } from '@angular/fire/firestore';
import Chart from 'chart.js';
import { HighchartService, chartModal } from "../services/highchart.service";
import * as Highcharts from "highcharts-angular";

@Component({
  selector: 'app-order-reservation-list-query-graphics',
  templateUrl: './order-reservation-list-query-graphics.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryGraphicsComponent implements OnInit {

  myChart: Chart;

  title = "Firestore-Angular-Highcharts";
  items$: chartModal[];
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [];
  charcountry: any[] = [];
  charcolor: any[] = [];
  charlegend: any[] = [];
  chartOptions: any;

  constructor(
    public reservationService: OrderReservationService,
    private afs: AngularFirestore,
    private highchartservice: HighchartService
  ) {}

  ngOnInit(): void {

    // customerAge
    this.highchartservice.customerAge$.subscribe((assets) => {
      this.items$ = assets;
      if (this.items$) {
        this.items$.forEach((element) => {
          this.chardata.push(element.customerAge);
        });
        
        this.getChart();
      }
    });

    // customerCountry
    this.highchartservice.customerCountry$.subscribe((assets) => {
      this.items$ = assets;
      if (this.items$) {
        this.items$.forEach((element) => {
          this.charcountry.push(element.customerCountry);
        });

        this.getChart();
      }
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

    // legend
    // this.highchartservice.legend$.subscribe((assets) => {
    //   this.items$ = assets;
    //   if (this.items$) {
    //     this.items$.forEach((element) => {
    //       this.charlegend.push(element.legend);
    //   });

    //     this.getChart();
    //   }
    // });
  }

  getChart() {
    const ctx = document.getElementById('myChart');
    //@ts-ignore
    this.myChart = new Chart(ctx, {
        // type: 'doughnut',
        type: 'bar',
        // type: 'line',
        // type: 'pie',
        data: {
            labels: this.charcountry,
            datasets: [
              {
                label: this.charcountry[0],
                backgroundColor: this.charcolor,
                data: this.chardata
              }
              // {
              //   label: ['USA'],
              //   backgroundColor: [
              //     'rgba(255, 159, 64, 0.2)'
              //   ]
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
        }
    });
  }

}
