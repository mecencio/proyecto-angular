import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient : HttpClient,
    private router : Router
  ) { }

  public loggedIn() : boolean {
    const currentUser : User = new User(JSON.parse(localStorage.getItem('user') || '{}'));
    if(currentUser.user) {
      return true;
    } else {
      return false;
    }
  }

  public login(user: string, password: string) {
    return false;
  }

  public logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
