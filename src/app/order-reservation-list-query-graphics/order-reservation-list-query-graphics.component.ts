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
        "1995": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "1996": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "1997": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "1998": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "1999": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2000": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2001": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2002": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2003": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2004": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2005": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2006": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2007": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2008": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2009": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2010": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2011": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2012": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2013": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ],
        "2014": [
          { sector: "Nom", size: 6.6 },
          { sector: "Prénom", size: 0.6 },
          { sector: "Age", size: 23.2 },
          { sector: "Pays", size: 2.2 },
          { sector: "Balcon", size: 4.5 },
          { sector: "Orchestre", size: 14.6 },
          { sector: "Date", size: 9.3 } ]
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
        { sector: "Nom", size: 6.6 },
        { sector: "Prénom", size: 0.6 },
        { sector: "Age", size: 23.2 },
        { sector: "Pays", size: 2.2 },
        { sector: "Balcon", size: 4.5 },
        { sector: "Orchestre", size: 14.6 },
        { sector: "Date", size: 9.3 }
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
        fill: am5.color(0x000000),
        fontSize: 50
      }));
      
      
      // Animate chart data
      var currentYear = 1995;
      function getCurrentData() {
        var data = chartData[currentYear];
        currentYear++;
        if (currentYear > 2014)
          currentYear = 1995;
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
