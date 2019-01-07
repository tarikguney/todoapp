import {ToDoModel} from "./todomodel"

export interface IToDoService{
    getExistingToDoItems(): ToDoModel[];
    saveTodoItem(todo: ToDoModel);
}