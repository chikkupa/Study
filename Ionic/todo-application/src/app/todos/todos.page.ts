import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Todo } from "./todo.model";
import { TodosService } from "./todos.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.page.html",
  styleUrls: ["./todos.page.scss"],
})
export class TodosPage implements OnInit {
  todos: Todo[];
  todolist: Todo[];
  private todoSub = new Subscription();

  constructor(private router: Router, private todosService: TodosService) {}

  ngOnInit() {
    this.todoSub = this.todosService.todolist.subscribe((todos) => {
      this.todolist = todos;
    });
    this.todos = this.todosService.todos;
    console.log(this.todos);
  }

  ionViewWillEnter() {
    this.todos = this.todosService.todos;
  }

  gotoAddTodo() {
    this.router.navigate(["/todos", "add-todo"]);
  }

  deleteTodo(todoId: number) {
    this.todosService.removeTodo(todoId).subscribe(() => {

    });
  }
}
