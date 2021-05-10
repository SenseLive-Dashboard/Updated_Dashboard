import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Emp } from '../table';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
declare const CanvasJS: any;


function currentGraph() {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
    var dataPoints1: { x: Date; y: any; }[] = [];
    var dataPoints2: { x: Date; y: any; }[] = [];
    var dataPoints3: { x: Date; y: any; }[] = [];
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,


      axisY: {
        title: "Current",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }

          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Average",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 1",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints1
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 2",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints2
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 3",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints3
      }]

    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].time_stamp),
          y: data[i].val
        });
        dataPoints1.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase1
        });
        dataPoints2.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase2
        });
        dataPoints3.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase3
        });

      }
      chart.render();
    }

    // $.getJSON("http://mayurdafare.ml/APIs/graph.php", addData);
    $.getJSON("http://localhost:3080/graph/current_graph", addData);

  })
}

function voltageGraph() {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
    var dataPoints1: { x: Date; y: any; }[] = [];
    var dataPoints2: { x: Date; y: any; }[] = [];
    var dataPoints3: { x: Date; y: any; }[] = [];
    var chart = new CanvasJS.Chart("chartContainer1", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,


      axisY: {
        title: "Voltage",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }

          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Average",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 1",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints1
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 2",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints2
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 3",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints3
      }]

    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].time_stamp),
          y: data[i].val
        });
        dataPoints1.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase1
        });
        dataPoints2.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase2
        });
        dataPoints3.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase3
        });

      }
      chart.render();
    }

    $.getJSON("http://localhost:3080/graph/voltage_graph", addData);
  })
}
function powerGraph() {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
    var dataPoints1: { x: Date; y: any; }[] = [];
    var dataPoints2: { x: Date; y: any; }[] = [];
    var dataPoints3: { x: Date; y: any; }[] = [];
    var chart = new CanvasJS.Chart("chartContainer2", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,


      axisY: {
        title: "Power Factor",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }

          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Average",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 1",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints1
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 2",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints2
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 3",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints3
      }]

    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].time_stamp),
          y: data[i].val
        });
        dataPoints1.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase1
        });
        dataPoints2.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase2
        });
        dataPoints3.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase3
        });

      }
      chart.render();
    }

    $.getJSON("http://localhost:3080/graph/power_graph", addData);
  })
}
function activePowerGraph() {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
    var dataPoints1: { x: Date; y: any; }[] = [];
    var dataPoints2: { x: Date; y: any; }[] = [];
    var dataPoints3: { x: Date; y: any; }[] = [];
    var chart = new CanvasJS.Chart("chartContainer3", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,


      axisY: {
        title: "Active Power",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }

          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Average",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 1",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints1
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 2",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints2
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 3",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints3
      }]

    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].time_stamp),
          y: data[i].val
        });
        dataPoints1.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase1
        });
        dataPoints2.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase2
        });
        dataPoints3.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase3
        });

      }
      chart.render();
    }

    $.getJSON("http://localhost:3080/graph/active_power_graph", addData);
  })
}

function reactivePowerGraph() {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
    var dataPoints1: { x: Date; y: any; }[] = [];
    var dataPoints2: { x: Date; y: any; }[] = [];
    var dataPoints3: { x: Date; y: any; }[] = [];
    var chart = new CanvasJS.Chart("chartContainer4", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,

      axisY: {
        title: "Reactive Power",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }

          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Average",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 1",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints1
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 2",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints2
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 3",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints3
      }]

    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].time_stamp),
          y: data[i].val
        });
        dataPoints1.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase1
        });
        dataPoints2.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase2
        });
        dataPoints3.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase3
        });

      }
      chart.render();
    }

    $.getJSON("http://localhost:3080/graph/reactive_power_graph", addData);
  })
}

function apparentPowerGraph() {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
    var dataPoints1: { x: Date; y: any; }[] = [];
    var dataPoints2: { x: Date; y: any; }[] = [];
    var dataPoints3: { x: Date; y: any; }[] = [];
    var chart = new CanvasJS.Chart("chartContainer5", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,

      axisY: {
        title: "Apparent Power",
        titleFontSize: 10,
        includeZero: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {

          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }

          e.chart.render();
        }
      },
      data: [{
        type: "spline",
        showInLegend: true,
        legendText: "Average",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 1",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints1
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 2",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints2
      },
      {
        type: "spline",
        showInLegend: true,
        legendText: "Phase 3",
        yValueFormatString: " ##.00 Units",
        dataPoints: dataPoints3
      }]

    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].time_stamp),
          y: data[i].val
        });
        dataPoints1.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase1
        });
        dataPoints2.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase2
        });
        dataPoints3.push({
          x: new Date(data[i].time_stamp),
          y: data[i].phase3
        });

      }
      chart.render();
    }

    $.getJSON("http://localhost:3080/graph/apparent_power_graph", addData);
  })
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  data: Emp[] = [];
  data1: Emp[] = [];
  data2: Emp[] = [];
  data3: Emp[] = [];
  data4: Emp[] = [];
  data5: Emp[] = [];
  faChartLine = faChartLine;


  constructor(private cardService: CardService) {
    this.cardService.get_current_data().subscribe((response) => {

      this.data = response;
      return this.data;
    });
    this.cardService.get_voltage_data().subscribe((response) => {
      this.data1 = response;
      return this.data1;
    });
    this.cardService.get_powerfactor_data().subscribe((response) => {
      this.data2 = response;
      return this.data2;
    });
    this.cardService.get_activepower_data().subscribe((response) => {
      this.data3 = response;
      return this.data3;
    });
    this.cardService.get_reactivepower_data().subscribe((response) => {
      this.data4 = response;
      return this.data4;
    });
    this.cardService.get_apparentpower_data().subscribe((response) => {
      this.data5 = response;
      return this.data5;
    });
  }
  ngOnInit(): void {


  }
  week() {

  }
  graph_c() {
    currentGraph();
  }
  graph_v() {
    voltageGraph();
  }
  graph_p() {
    powerGraph();
  }
  graph_apow() {
    activePowerGraph();
  }
  graph_rpow() {
    reactivePowerGraph();
  }
  graph_app() {
    apparentPowerGraph();
  }


}
