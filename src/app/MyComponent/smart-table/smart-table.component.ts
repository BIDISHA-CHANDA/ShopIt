import { Component, Input, ViewChild } from '@angular/core';
import { TableComponent, TableModule } from 'smart-webcomponents-angular/table';
import { TableColumns } from '../../Interfaces/TableData';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrl: './smart-table.component.css',
  standalone:true,
  imports:[TableModule,CommonModule]

})
export class SmartTableComponent {

  @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

  @Input() columnList: TableColumns[];
  @Input() TableData: any;
  @Input() TableConfig: any;

}
