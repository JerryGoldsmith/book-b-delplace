import { Component, OnInit } from '@angular/core';
import { OrderReservationService } from "../services/order-reservation.service";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-order-reservation-list-query-graphics',
  templateUrl: './order-reservation-list-query-graphics.component.html',
  styleUrls: ['./../order-reservation-list/order-reservation-list.component.scss']
})
export class OrderReservationListQueryGraphicsComponent implements OnInit {

  constructor(
    public reservationService: OrderReservationService
  ) {}

  ngOnInit(): void {
    
    am5.ready(function() {

      // Define data for each year
      var chartData = {
        "2018": [
          { sector: "USA", size: 2.6 },
          { sector: "France", size: 62.6 },
          { sector: "Canada", size: 3.2 },
          { sector: "Italie", size: 12.2 },
          { sector: "Espagne", size: 14.5 },
          { sector: "Iran", size: 0.6 },
          { sector: "Pologne", size: 1.3 },
          { sector: "Allemagne", size: 3.3 },
          { sector: "Belgique", size: 9.3 },
          { sector: "Suede", size: 2.3 } ],
        "2019": [
          { sector: "USA", size: 5.6 },
          { sector: "France", size: 82.6 },
          { sector: "Canada", size: 1.2 },
          { sector: "Italie", size: 14.2 },
          { sector: "Espagne", size: 10.5 },
          { sector: "Iran", size: 0.1 },
          { sector: "Pologne", size: 3.3 },
          { sector: "Allemagne", size: 5.3 },
          { sector: "Belgique", size: 5.3 },
          { sector: "Suede", size: 1.3 } ],
        "2020": [
          { sector: "USA", size: 9.6 },
          { sector: "France", size: 72.6 },
          { sector: "Canada", size: 0.2 },
          { sector: "Italie", size: 11.2 },
          { sector: "Espagne", size: 8.5 },
          { sector: "Iran", size: 0.0 },
          { sector: "Pologne", size: 1.3 },
          { sector: "Allemagne", size: 7.3 },
          { sector: "Belgique", size: 12.3 },
          { sector: "Suede", size: 0.3 } ],
        "2021": [
          { sector: "USA", size: 2.6 },
          { sector: "France", size: 72.6 },
          { sector: "Canada", size: 3.2 },
          { sector: "Italie", size: 12.2 },
          { sector: "Espagne", size: 17.5 },
          { sector: "Iran", size: 0.6 },
          { sector: "Pologne", size: 1.3 },
          { sector: "Allemagne", size: 3.3 },
          { sector: "Belgique", size: 9.3 },
          { sector: "Suede", size: 2.3 } ],
        "2022": [
          { sector: "USA", size: 2.6 },
          { sector: "France", size: 82.6 },
          { sector: "Canada", size: 3.2 },
          { sector: "Italie", size: 6.2 },
          { sector: "Espagne", size: 8.5 },
          { sector: "Iran", size: 0.0 },
          { sector: "Pologne", size: 1.3 },
          { sector: "Allemagne", size: 3.3 },
          { sector: "Belgique", size: 9.3 },
          { sector: "Suede", size: 2.3 } ]
      };
      
      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv");
      
      
      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
      
      
      // Create chart
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
      var chart = root.container.children.push(am5percent.PieChart.new(root, {
        innerRadius: 100,
        layout: root.verticalLayout
      }));
      
      
      // Create series
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
      var series = chart.series.push(am5percent.PieSeries.new(root, {
        valueField: "size",
        categoryField: "sector"
      }));
      
      
      // Set data
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      series.data.setAll([
        { sector: "USA", size: 6.6 },
        { sector: "France", size: 0.6 },
        { sector: "Canada", size: 23.2 },
        { sector: "Italie", size: 2.2 },
        { sector: "Espagne", size: 4.5 },
        { sector: "Iran", size: 14.6 },
        { sector: "Pologne", size: 9.3 },
        { sector: "Allemagne", size: 9.3 },
        { sector: "Belgique", size: 9.3 },
        { sector: "Suede", size: 9.3 }
      ]);
      
      
      // Play initial series animation
      // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
      series.appear(1000, 100);
      
      
      // Add label
      var label = root.tooltipContainer.children.push(am5.Label.new(root, {
        x: am5.p50,
        y: am5.p50,
        centerX: am5.p50,
        centerY: am5.p50,
        fill: am5.color(0xFFFFFF),
        fontSize: 50
      }));
      
      
      // Animate chart data
      var currentYear = 2018;
      function getCurrentData() {
        var data = chartData[currentYear];
        currentYear++;
        if (currentYear > 2022)
          currentYear = 2018;
        return data;
      }
      
      function loop() {
        //@ts-ignore
        label.set("text", currentYear);
        var data = getCurrentData();
        for(var i = 0; i < data.length; i++) {
          series.data.setIndex(i, data[i]);
        }
        chart.setTimeout( loop, 4000 );
      }
      
      loop();
      
      }); // end am5.ready()
  }

}
