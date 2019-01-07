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

  constructor(private todoService: ToDoService) {
    this.todoList = todoService.getExistingToDoItems();
  }

  ngOnInit() {
  }
}
