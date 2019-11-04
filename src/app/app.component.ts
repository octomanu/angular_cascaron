import { Component, OnInit } from "@angular/core";
import { ExampleService } from "./http/example.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "lumen-api-front";

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.exampleService.get().subscribe(response => console.log(response));
  }
}
