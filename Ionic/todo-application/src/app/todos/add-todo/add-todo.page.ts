import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { TodosService } from "../todos.service";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.page.html",
  styleUrls: ["./add-todo.page.scss"],
})
export class AddTodoPage implements OnInit {
  form: FormGroup;

  constructor(
    private todoService: TodosService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.maxLength(180)],
      }),
      category: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.min(1)],
      }),
    });
  }

  onCreateTodo() {
    if (!this.form.valid) {
      console.log("Invalid form");
      return;
    }

    this.loadingCtrl
      .create({ message: "Adding Todo ..." })
      .then((loadingEl) => {
        loadingEl.present();

        // setTimeout(() => {
        //   this.todoService.createTodo(
        //     this.form.value.category,
        //     this.form.value.title,
        //     this.form.value.description
        //   );

        //   this.form.reset();
        //   this.router.navigate(["/todos"]);
        //   loadingEl.dismiss();
        // }, 3000);

        this.todoService
          .addTodo(
            this.form.value.category,
            this.form.value.title,
            this.form.value.description
          )
          .subscribe(() => {
            this.form.reset();
            this.router.navigate(["/todos"]);
            loadingEl.dismiss();
          });
      });
  }
}
