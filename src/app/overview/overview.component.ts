import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Emp } from '../table';
import { faChartLine, faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sensor } from '../sensorData';
import { Parameter } from '../parameter';
import { DialogboxService } from '../dialogbox.service';
import { SharedService } from '../shared.service';

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
          x: new Date(data[i].reading_time),
          y: data[i].Current_Avg
        });
        dataPoints1.push({
          x: new Date(data[i].reading_time),
          y: data[i].Current_A
        });
        dataPoints2.push({
          x: new Date(data[i].reading_time),
          y: data[i].Current_B
        });
        dataPoints3.push({
          x: new Date(data[i].reading_time),
          y: data[i].Current_C
        });

      }
      chart.render();
    }
    // $.getJSON("http://mayurdafare.ml/APIs/graph.php", addData);
    $.getJSON("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/currentGraph.php", addData);
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
          x: new Date(data[i].reading_time),
          y: data[i].Voltage_Avg
        });
        dataPoints1.push({
          x: new Date(data[i].reading_time),
          y: data[i].Voltage_AN
        });
        dataPoints2.push({
          x: new Date(data[i].reading_time),
          y: data[i].Voltage_BN
        });
        dataPoints3.push({
          x: new Date(data[i].reading_time),
          y: data[i].Voltage_CN
        });

      }
      chart.render();
    }
    $.getJSON("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/voltageGraph.php", addData);
  })
}
function powerGraph() {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[]=[];
   
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
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Power_Factor
        });
        }
      chart.render();
    }
    $.getJSON("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/powerFactorGraph.php", addData);
  })
}
function activePowerGraph() {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
   
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
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Active_Power
        });
      }
      chart.render();
    }
    $.getJSON("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/activePowerGraph.php", addData);
  })
}

function reactivePowerGraph() {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
    
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
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Reactive_Power
        });
      }
      chart.render();
    }
    $.getJSON("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/reactivePowerGraph.php", addData);
  })
}

function apparentPowerGraph() {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
   
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
      }]

    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Apparent_Power
        });
      }
      chart.render();
    }
    $.getJSON("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/apparentPowerGraph.php", addData);
  })
}

function frequencyGraph() {

  $(document).ready(function () {
    var dataPoints: { x: Date; y: any; }[] = [];
   
    var chart = new CanvasJS.Chart("chartContainer6", {
      animationEnabled: true,
      theme: "light2",
      width: 450,
      height: 200,
      axisY: {
        title: "Frequency",
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
      }]
    });
    function addData(data: string | any[]) {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({
          x: new Date(data[i].reading_time),
          y: data[i].Frequency
        });
      }
      chart.render();
    }
    $.getJSON("http://localhost/SenseLive-Dashboard-Development-kiran-overview/APIs/frequencyGraph.php", addData);
  })
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  [x: string]: any;
  showModal: boolean|any;
  submitted = false;
  data: Sensor[] = [];
  data2: Sensor[] = [];
  value:any;
  faChartLine = faChartLine;

  constructor(private formBuilder: FormBuilder,private cardService: CardService,private shared: SharedService,private dialogboxService:DialogboxService) {
    this.value=JSON.parse(window.sessionStorage.getItem('userdata')||'{}');

    this.cardService.get_meterCardData(this.value).subscribe((response) => {

      this.data = response;
      console.log("Card Data:",this.data);
      return this.data;
    });
  }
  ngOnInit(): void {
    
    // if (this.shared.subsVar==undefined) {    
    //   this.shared.subsVar = this.shared.invoketableFunction.subscribe((meterid:string) => {    
    //     this.myFunctionOne(meterid);   
    //   });    
    // } 
  
  }
  // myFunctionOne(meterid:string){
  //   this.m_id=meterid;
  //   console.log(this.m_id);

  //   this.cardService.get_meterCardData(this.m_id).subscribe((response)=>{
      
  //     this.data=response;
  //     return this.data;
  //   });
  // }

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
  graph_frequency() {
    frequencyGraph();
  }
}
