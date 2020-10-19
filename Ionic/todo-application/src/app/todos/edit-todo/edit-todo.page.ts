import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LoadingController, NavController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { Todo } from "../todo.model";
import { TodosService } from "../todos.service";

@Component({
  selector: "app-edit-todo",
  templateUrl: "./edit-todo.page.html",
  styleUrls: ["./edit-todo.page.scss"],
})
export class EditTodoPage implements OnInit {
  todoId: number;
  todo: Todo;
  form: FormGroup;
  todoSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private todoService: TodosService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("id")) {
        this.navCtrl.navigateBack("/todos");
      }

      this.todoId = +paramMap.get("id");

      this.todoSub = this.todoService
        .getDetails(this.todoId)
        .subscribe((todo) => {
          this.form = new FormGroup({
            title: new FormControl(todo.title, {
              updateOn: "blur",
              validators: [Validators.required],
            }),
            description: new FormControl(todo.title, {
              updateOn: "blur",
              validators: [Validators.required, Validators.maxLength(180)],
            }),
            category: new FormControl(todo.category, {
              updateOn: "blur",
              validators: [Validators.required, Validators.min(1)],
            }),
          });
        });

      // this.todo = this.todoService.getTodoDetails(this.todoId);
      // console.log(this.todo);
    });
  }

  updateTodo() {
    if (!this.form.valid) {
      console.log("Invalid form");
      return;
    }

    this.loadingCtrl
      .create({ message: "Updating Todo ..." })
      .then((loadingEl) => {
        loadingEl.present();

        setTimeout(() => {
          this.todoService
            .modifyTodo(
              this.todoId,
              this.form.value.category,
              this.form.value.title,
              this.form.value.description
            )
            .subscribe(() => {
              this.form.reset();
              loadingEl.dismiss();
              this.router.navigate(["/todos"]);
            });
        }, 3000);
      });
  }
}
