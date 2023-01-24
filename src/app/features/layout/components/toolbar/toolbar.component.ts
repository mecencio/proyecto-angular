import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/features/login/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: []
})
export class ToolbarComponent implements OnInit {
  public loggedIn : boolean = false;
  public userName : String;

  @Input() menu: MatSidenav;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    if (this.authService.loggedIn()) {
      this.loggedIn = true;
      this.userName = this.authService.getUsername();
    }
  }

}
