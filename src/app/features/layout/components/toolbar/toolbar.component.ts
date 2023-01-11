import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: []
})
export class ToolbarComponent implements OnInit {

  @Input() menu: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

}
