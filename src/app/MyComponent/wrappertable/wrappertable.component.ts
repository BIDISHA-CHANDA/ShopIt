import { Component } from '@angular/core';
import { TableColumns } from '../../Interfaces/TableData';
import { TableComponent, TableModule } from 'smart-webcomponents-angular/table';
import { SmartTableComponent } from '../smart-table/smart-table.component';


@Component({
  selector: 'app-wrappertable',
  templateUrl: './wrappertable.component.html',
  styleUrl: './wrappertable.component.css',
  standalone:true,
  imports:[SmartTableComponent]
})
export class WrappertableComponent {

  

  tableData:any;
  tableConfig:any;
  


  ngOnInit():void{
     this.tableDisplay();
    this.tableData = [
      { country: 'Brazil', area: 8515767, populationRural: 0.15, populationTotal: 205809000, gdpTotal: 2353025 },
      { country: 'US', area: 8515768, populationRural: 0.15, populationTotal: 205809000, gdpTotal: 2353025 },
      { country: 'Canada', area: 8515769, populationRural: 0.15, populationTotal: 205809000, gdpTotal: 2353025 },
        ];

  }
  
tableDisplay():void{
  this.tableConfig={
    sortmode:'one',
    editing :true,
    editMode : 'cell',


}
}



  columnDefinition: TableColumns[]=

  [{
   header:'Country',
   type:"string",
   key:"country"
  },
  {
   header:'Area',
   type:"string",
   key:"area"

  },
  {
    header:'Population',
    type:"number",
    key:"populationRural"
 
   },
   {
    header:'Population Total',
    type:"number",
    key:"populationTotal"
 
   },
   {
    header:'GDP Total',
    type:"number",
    key:"gdpTotal"
 
   }
  ]

}


