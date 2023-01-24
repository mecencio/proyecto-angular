import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router : Router,
    ) { }

  public register(newUser : User) {
    let user : User[] = [];
    let users : User[] = [];
    if (localStorage['users']) {
      users = JSON.parse(localStorage.getItem("users") || '{}');
      user = users?.filter(u => u.user == newUser.user);
    }

    console.log(user.length)
    if (user.length == 0) {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify(newUser));
      this.router.navigate(['/']);
      return true;
    } else {
      return false
    }

  }

  public loggedIn() : boolean {
    const currentUser : User = new User({...JSON.parse(localStorage.getItem('user') || '{}')});
    if(currentUser) {
      return true;
    } else {
      return false;
    }
  }

  public login(logUser : User) {
    let user : User[] = [];
    if (localStorage['users']) {
      const users : User[] = JSON.parse(localStorage.getItem("users") || '{}');
      user = users?.filter(u => u.user == logUser.user);
    }

    if ((user.length == 1) && (user[0].password === logUser.password)) {
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(['/']);
      return true;
    } else {
      return false
    }
  }

  public logout() : boolean {
    if(localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
      return true;
    } else return false;
  }

  public getUsername() : String {
    if (localStorage['user']) {
      return JSON.parse(localStorage.getItem("user") || '{}')?.user;
    } else {
      return '';
    }
  }
}
