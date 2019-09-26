import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatIconModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./compoments/sidebar/sidebar.component";
import { ListComponent } from './compoments/list/list.component';
import { CountdownComponent } from './compoments/countdown/countdown.component';
import { NextEventComponent } from './compoments/next-event/next-event.component';
import { UiListComponent } from './compoments/ui-list/ui-list.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, ListComponent, CountdownComponent, NextEventComponent, UiListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
