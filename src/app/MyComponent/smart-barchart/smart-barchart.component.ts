import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { chartConfig } from '../../barchart-config';
import { ChartColorScheme, ChartComponent, ChartModule } from 'smart-webcomponents-angular/chart';
import { CheckBoxComponent, CheckBoxModule } from 'smart-webcomponents-angular/checkbox';
import { RadioButtonComponent, RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';




@Component({
  selector: 'app-smart-barchart',
  templateUrl: './smart-barchart.component.html',
  
  styleUrl: './smart-barchart.component.css',
  standalone:true,
  imports:[ChartModule,
    CheckBoxModule,RadioButtonModule],
    encapsulation: ViewEncapsulation.None

})
export class SmartBarChartComponent {

  @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
  @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
  
  @Input() barchartConfig:any;
  @Input() data:any;

 
 ngOnInit():void{
  console.log("ng on init")
 

  
     setInterval(() => {
      
      if(this.chart.colorScheme == 'myscheme') {
        //console.log("here1")
        this.chart.colorScheme = '';
        
        
      } else {
       // console.log("here2")
        this.chart.colorScheme = 'myscheme'
        
      } 
      
      this.addCustomColorScheme()
      
    }, 2000); 
  }
 

   addCustomColorScheme(): void {
    
   const customColors = ['#66ffff', '#008080'];

   this.chart.addColorScheme('myscheme',customColors);

  }   
    showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void {
      this.chart.showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
    }
  
    invokeShowToolTip(): void {
      this.showToolTip(0, 1, 5, 1000, 5000);
    }
}
