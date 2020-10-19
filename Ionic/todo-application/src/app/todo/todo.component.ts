import { Component, Input, OnInit } from "@angular/core";
import { TodosService } from "../todos/todos.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  @Input() public id: number;
  @Input() public category: string;
  @Input() public title: string;
  @Input() public description: string;
  @Input() public deleteTodo: Function;

  constructor(private todoService: TodosService) {}

  ngOnInit() {}

  onDelete(id: number) {
    this.todoService.removeTodo(id).subscribe(() => {});
  }
}
