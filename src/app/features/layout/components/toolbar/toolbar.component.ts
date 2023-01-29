import { Observable, Subscription } from 'rxjs';
import { userSelector } from './../../../../store/auth/auth.selectors';
import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/features/login/services/auth.service';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: []
})
export class ToolbarComponent implements OnInit {
  public user : Observable<User | null>;

  @Input() menu: MatSidenav;

  constructor(
    private authService : AuthService,
    private readonly store : Store<AppState>
  ) {
    this.user = this.store.select(userSelector)
  }

  ngOnInit(): void {
  }

}
