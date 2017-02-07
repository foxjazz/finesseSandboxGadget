import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MaterialModule} from "@angular/material";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
