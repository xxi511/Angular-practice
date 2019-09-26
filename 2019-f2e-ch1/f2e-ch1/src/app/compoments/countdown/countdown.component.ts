import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ViewChild,
  ElementRef,
  Renderer2,
} from "@angular/core";
import { ListItem } from "../../models/ListItem";

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.css"],
})
export class CountdownComponent implements OnInit {
  @Input() item: ListItem = null;
  @ViewChild("maskfull", { static: false }) maskfull: ElementRef;
  @ViewChild("fullfill", { static: false }) fullfill: ElementRef;
  @ViewChild("halffill", { static: false }) halffill: ElementRef;
  interval: NodeJS.Timer = null;
  private totalTime: number = 25 * 60;
  private time: number = this.totalTime;
  timeString: string = "25:00 / 25:00";

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.time = this.totalTime;
    this.setupCircleDeg(180);
    this.clearTimer();
  }

  private setTimer() {
    this.interval = setInterval(() => {
      this.oneSecond();
    }, 1000);
  }

  private oneSecond() {
    this.time -= 1;
    const scale = this.time / this.totalTime;
    const deg = scale * 180;
    this.setupCircleDeg(deg);
    this.getTime();
  }

  private getTime() {
    const min = Math.floor(this.time / 60);
    const sec = this.time - min * 60;
    this.timeString = `${min}:${sec} / 25:00`;
  }

  private setupCircleDeg(deg: number) {
    this.renderer.setStyle(
      this.maskfull.nativeElement,
      "transform",
      `rotate(${deg}deg)`
    );
    this.renderer.setStyle(
      this.fullfill.nativeElement,
      "transform",
      `rotate(${deg}deg)`
    );
    this.renderer.setStyle(
      this.halffill.nativeElement,
      "transform",
      `rotate(${deg}deg)`
    );
  }

  toggleTimer() {
    if (this.interval) {
      this.clearTimer();
    } else {
      this.setTimer();
    }
  }

  private clearTimer() {
    clearInterval(this.interval);
    this.interval = null;
  }
}
