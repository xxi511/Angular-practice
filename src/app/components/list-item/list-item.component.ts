import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "pay-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"]
})
export class ListItemComponent implements OnInit {
  @Input() num: number;
  @Input() title: string = "";
  @Input() isSelected: boolean = false;
  @Input() hasNextArrow: boolean = false;
  @Output() clickEnt = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  clickNum() {
    this.clickEnt.emit(this.num);
  }
}
