import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: []
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  
  ngOnInit(): void {
  }
}
