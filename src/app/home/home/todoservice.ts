import { Injectable } from "@angular/core";
import { ToDoModel } from "./todomodel";


@Injectable(
    {providedIn:"root"}
)
export class ToDoService {

    existingItems: ToDoModel[];
    
    constructor() {
        this.existingItems = [
            { id: 1, name: "Wash the dishes" },
            { id: 2, name: "Finish Angular book" },
            { id: 3, name: "Water the plants" },
            { id: 4, name: "Sing a song" }
        ];
    }

    getExistingToDoItems(): ToDoModel[] {
        return this.existingItems;
    }

    saveTodoItem(todoModel: ToDoModel) {
        this.existingItems.push(todoModel);
    }
}