import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos:Todo[]
  constructor(){
    this.todos=[{srno:1,title:"GYM",description:"Go to gym",active:true},{srno:2,title:"GYM",description:"Go to gym",active:true},{srno:3,title:"GYM",description:"Go to gym",active:true}]
  }

  TodoDelete(todo:Todo){
    //console.log("here")
    const index=this.todos.indexOf(todo)
    if(index>-1)
    this.todos.splice(index,1)


  }
  someMethod(todo:Todo){
     console.log("d") 
     this.todos.push(todo)}
}
