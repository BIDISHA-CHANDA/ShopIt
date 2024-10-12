import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Todo } from '../../Todo';
import { PropertyWrite } from '@angular/compiler';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent {

  @Input() todo:Todo
  @Output() todoDelete = new EventEmitter<Todo>();

  onClick(todo:Todo){
    this.todoDelete.emit(todo)
    console.log("OnClick trigerred")

  }
  
}
