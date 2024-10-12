import { Component, EventEmitter, Output, output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
title:string
description:string
@Output() addtodoEvent =new EventEmitter<Todo>();
  onSubmit(){
    const todo={
      srno:8,
      title:this.title,
     description:this.description,
     active:true

    }
    this.addtodoEvent.emit(todo)
  
  }

    

  

}
