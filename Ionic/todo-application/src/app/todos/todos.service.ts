import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todo.model";
import { delay, map, switchMap, take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  private _todos: Todo[] = [
    new Todo(1, "Category 1", "My Todo 1", "This is a test todo"),
    new Todo(2, "Category 2", "My Todo 2", "This is a test todo"),
  ];

  private _todolist = new BehaviorSubject<Todo[]>([
    new Todo(1, "Category 1", "My Todo BS 1", "This is a test todo"),
    new Todo(2, "Category 2", "My Todo BS 2", "This is a test todo"),
  ]);

  constructor() {}

  get todos() {
    return [...this._todos];
  }

  get todolist() {
    return this._todolist.asObservable();
  }

  addTodo(category: string, title: string, description: string) {
    const newTodo = new Todo(this._todos.length, category, title, description);
    return this.todolist.pipe(
      take(1),
      delay(2000),
      tap((todos) => {
        this._todolist.next(todos.concat(newTodo));
      })
    );
  }

  createTodo(category: string, title: string, description: string) {
    const newTodo = new Todo(this._todos.length, category, title, description);
    this._todos.push(newTodo);
  }

  getTodoDetails(id: number) {
    const todo = this._todos.find((item) => item.id === id);

    return { ...todo };
  }

  getDetails(id: number) {
    return this.todolist.pipe(
      take(1),
      map((todos) => {
        return { ...todos.find((td) => td.id === id) };
      })
    );
  }

  updateTodo(id: number, category: string, title: string, description: string) {
    const index = this._todos.findIndex((item) => item.id === id);

    if (index >= 0) {
      const newTodo = new Todo(id, category, title, description);
      this._todos[index] = newTodo;
    }
  }

  modifyTodo(id: number, category: string, title: string, description: string) {
    let updatedTodos = [];

    return this.todolist.pipe(
      take(1),
      switchMap((todos) => {
        const updatedTodoIndex = todos.findIndex((item) => item.id === id);
        updatedTodos = [...todos];
        const oldTodo = updatedTodos[updatedTodoIndex];
        updatedTodos[updatedTodoIndex] = new Todo(
          id,
          category,
          title,
          description
        );

        return updatedTodos;
      }),
      tap(() => {
        this._todolist.next(updatedTodos);
      })
    );
  }

  deleteTodo(id: number) {
    const index = this._todos.findIndex((item) => item.id === id);

    const newArray = [...this._todos];

    if (index >= 0) {
      newArray.splice(index, 1);
    }

    this._todos = [newArray[0]];
  }

  removeTodo(todoId: number) {
    console.log("In remove todo");

    return this.todolist.pipe(
      take(1),
      delay(2000),
      tap((todos) => {
        this._todolist.next(
          todos.filter((todo) => {
            return todo.id !== todoId;
          })
        );
      })
    );
  }
}
