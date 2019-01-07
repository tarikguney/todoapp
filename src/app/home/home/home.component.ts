import { Component, OnInit } from '@angular/core';
import { ToDoModel } from "./todomodel"
import { ToDoService } from './todoservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoList: ToDoModel[]
  newToDoItem: string;

  constructor(private todoService: ToDoService) {
    this.todoList = todoService.getExistingToDoItems();
  }

  ngOnInit() {
  }

  onNewToDo(value:string) {
    this.newToDoItem = value;
  }

  onSaveClicked() {
    this.todoService.saveTodoItem({ name: this.newToDoItem, id: 1 });
  }
}
