import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ListItem } from "../../models/ListItem";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  @Output() selectedItem = new EventEmitter<ListItem>();
  ongoings: ListItem[] = [];
  todos: ListItem[] = [];
  dones: ListItem[] = [];
  constructor() {}

  ngOnInit() {
    this.ongoings = [
      { title: "Icon Design", finish: 1, total: 7, selected: true },
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
    ];

    this.todos = [
      { title: "Company Page UI", finish: 0, total: 3, selected: false },
      { title: "Landing Page Icon", finish: 0, total: 3, selected: false },
      {
        title: "Landing Page Redesign - Flow",
        finish: 0,
        total: 3,
        selected: false,
      },
      {
        title: "Landing Page Redesign - Wireframe",
        finish: 0,
        total: 3,
        selected: false,
      },
    ];

    this.dones = [
      {
        title: "User Testing Preparation",
        finish: 6,
        total: 6,
        selected: false,
      },
      { title: "User Testing Analysis", finish: 9, total: 7, selected: false },
      { title: "Member UI", finish: 14, total: 12, selected: false },
      {
        title: "Member Page Wireframe",
        finish: 10,
        total: 10,
        selected: false,
      },
    ];
  }
}
