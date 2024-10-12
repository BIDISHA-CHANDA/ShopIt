import { Component } from '@angular/core';
import { SmartBarChartComponent } from '../smart-barchart/smart-barchart.component';


@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.css',
  standalone:true,
  imports:[SmartBarChartComponent]
})
export class TodoMainComponent {
  chartConfig:any;
  chartData:any;

  ngOnInit():void{
    this.loadsmartbarchart();
    this.chartData= [
      { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
      { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
      { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
      { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
      { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
      { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
      { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
    ]

  }
  loadsmartbarchart():void{
   this.chartConfig = {
      caption: 'Fitness & exercise weekly scorecard',
      description: 'Time spent in vigorous exercise',
      showLegend: true,
      padding: { left: 5, top: 5, right: 5, bottom: 5 },
      titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
      xAxis: {
        dataField: 'Day',
        gridLines: {
          visible: true
        }
      },
      colorScheme: 'scheme29',
      seriesGroups: [
        {
          type: 'column',
          columnsGapPercent: 50,
          seriesGapPercent: 0,
          valueAxis: {
            unitInterval: 10,
            minValue: 0,
            maxValue: 100,
            description: 'Time in minutes',
            axisSize: 'auto'
          },
          series: [
            { dataField: 'Keith', displayText: 'Keith' },
            { dataField: 'Erica', displayText: 'Erica' },
            { dataField: 'George', displayText: 'George' }
          ]
        }
      ]
    };

  }
  
}
