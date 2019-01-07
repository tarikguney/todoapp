import { Injectable } from "@angular/core";
import { ToDoModel } from "./todomodel";


@Injectable(
    {providedIn:"root"}
)
export class ToDoService {
    getExistingToDoItems(): ToDoModel[] {
        return [
            { id: 1, name: "Wash the dishes" },
            { id: 2, name: "Finish Angular book" },
            { id: 3, name: "Water the plants" },
            { id: 4, name: "Sing a song" }
        ];
    }

    saveTodoItem(todoModel: ToDoModel) {
        // todo implement this method.
        "Not yet implemented."
    }
}