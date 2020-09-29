import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() element: { type: string; name: string; content: string };

  constructor() {
    console.log("Constructor called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes);
  }
}
