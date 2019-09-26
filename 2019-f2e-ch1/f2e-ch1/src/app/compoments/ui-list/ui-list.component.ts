import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { ListItem } from "../../models/ListItem";

@Component({
  selector: "app-ui-list",
  templateUrl: "./ui-list.component.html",
  styleUrls: ["./ui-list.component.css"],
})
export class UiListComponent implements OnInit {
  @Input() selectable: boolean = false;
  @Input() type: "ongoing" | "todo" | "done";
  @Input() items: ListItem[];
  @Output() selectedItem = new EventEmitter<ListItem>();
  constructor() {}

  ngOnInit() {
    console.log(this.type);
    console.log(this.items);
  }

  getGoalText(item: ListItem): string {
    if (item.finish === 0) {
      return `${item.total}`;
    } else {
      return `${item.finish} / ${item.total}`;
    }
  }

  selectItem(idx) {
    if (this.type !== "ongoing") return;
    this.items.map(item => (item.selected = false));
    this.items[idx].selected = true;
    this.selectedItem.emit(this.items[idx]);
  }
}
