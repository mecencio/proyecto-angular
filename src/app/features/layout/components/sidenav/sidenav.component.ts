import { AuthService } from './../../../login/services/auth.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: []
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;
  public loggedIn : boolean;

  constructor (
    private authService : AuthService
  ) {  }

  ngOnInit(): void {
    this.loggedIn = this.authService.loggedIn();
  }

  public logout() {
    this.authService.logout();
    this.loggedIn = false;
  }

}
