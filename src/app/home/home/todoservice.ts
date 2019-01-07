import { Injectable } from "@angular/core";
import { ToDoModel } from "./todomodel";
import * as uuid from "uuid/v1";


@Injectable(
    {providedIn:"root"}
)
export class ToDoService {

    existingItems: ToDoModel[];
    
    constructor() {
        this.existingItems = [
            { id: uuid(), name: "Wash the dishes" },
            { id: uuid(), name: "Finish Angular book" },
            { id: uuid(), name: "Water the plants" },
            { id: uuid(), name: "Sing a song" }
        ];
    }

    getExistingToDoItems(): ToDoModel[] {
        return this.existingItems;
    }

    saveTodoItem(todoModel: ToDoModel) {
        this.existingItems.push(todoModel);
    }
}