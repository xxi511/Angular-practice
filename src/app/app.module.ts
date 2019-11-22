import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// Angular meterial
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
// 3-rd
import { FlexLayoutModule } from "@angular/flex-layout";
// My component
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ListItemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
