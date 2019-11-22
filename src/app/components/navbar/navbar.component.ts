import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pay-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  itemClickEnt(num: number) {
    console.log(num);
  }
}
