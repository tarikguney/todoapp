import { Component, OnInit } from '@angular/core';
import { ToDoModel } from "./todomodel"
import { ToDoService } from './todoservice';
import { MatSelectionListChange } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoList: ToDoModel[]
  newToDoItem: string;
  selectedOptions: string[];

  constructor(private todoService: ToDoService) {
    this.todoList = todoService.getExistingToDoItems();
    this.selectedOptions = [];
  }


  ngOnInit() {
    
  }

  onNewToDo(value: string) {
    this.newToDoItem = value;
  }

  onSaveClicked() {
    this.todoService.saveTodoItem({ name: this.newToDoItem, id: 1 });
  }

  onSelectionChanged(event: MatSelectionListChange) {
    this.selectedOptions = event.source.selectedOptions.selected.map(a => String(a.getLabel()));
    console.log(this.selectedOptions);
  }
}
