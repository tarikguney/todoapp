import {Component, OnInit} from '@angular/core';
import {ToDoModel} from "./todomodel";
import {ToDoService} from './todoservice';
import {MatSelectionListChange} from '@angular/material';
import * as uuid from "uuid/v1";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoList: ToDoModel[];
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
    this.todoService.saveTodoItem({name: this.newToDoItem, id: uuid()});
  }

  onSelectionChanged(event: MatSelectionListChange) {
    this.selectedOptions = event.source.selectedOptions.selected.map(a => String(a.getLabel()));
  }

  onRemoveItemsClicked() {
    this.selectedOptions.forEach(a => {
      let index = this.todoList.findIndex(b => b.name === a);
      if (index !== -1) {
        this.todoList.splice(index, 1);
      }
    });

    this.selectedOptions = [];
  }
}
