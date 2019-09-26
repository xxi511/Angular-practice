import { Component } from "@angular/core";
import { ListItem } from "./models/ListItem";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "f2e-ch1";
  selectedItem: ListItem = {
    title: "Icon Design",
    finish: 1,
    total: 7,
    selected: true,
  };
}
