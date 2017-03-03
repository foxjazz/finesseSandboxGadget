import { Component } from '@angular/core';
import {MaterialModule} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.color = "blue";
    this.colortheme =  'themeDark';
  }
  colortheme:string;
  title = 'app works!';
  setTheme(theme: string){
  if(this.colortheme == "theme")
    this.colortheme = "theme";
  else
    this.colortheme = "theme";

}
  color: string;
}
