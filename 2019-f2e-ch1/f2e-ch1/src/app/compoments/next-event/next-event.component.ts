import { Component, OnInit } from "@angular/core";
import { ListItem } from "../../models/ListItem";
@Component({
  selector: "app-next-event",
  templateUrl: "./next-event.component.html",
  styleUrls: ["./next-event.component.css"],
})
export class NextEventComponent implements OnInit {
  items: ListItem[];
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        title: "Product Meeting PPT Outline",
        finish: 1,
        total: 2,
        selected: false,
      },
      {
        title: "Product Meeting PPT Design",
        finish: 3,
        total: 4,
        selected: false,
      },
      { title: "Company Page UI", finish: 0, total: 3, selected: false },
    ];
  }
}
